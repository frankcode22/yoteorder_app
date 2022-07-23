import React from 'react'


import {useEffect,useState,useContext} from 'react';


import GoogleLogin from 'react-google-login';


import axios from 'axios';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



import {Helmet} from 'react-helmet'
import {useParams,Link,useNavigate} from "react-router-dom"

import { AuthContext } from '../../../helpers/AuthContext'

function HeaderFloating() {


  let { item } = useParams();
  
  const {authState} = useContext(AuthContext);

  const {setAuthState} = useContext(AuthContext);

  const isAuthenticated = localStorage.getItem("isAuthenticated")



  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const [first_name, setFirst_name] = useState("");

  const [email, setEmail] = useState("");
  const [phone_no, setPhone_no] = useState("");

  const [user_id, setUserId] = useState('');


  const [order_description, setOrder_description] = useState("");

  const [order_status, setOrderStatus] = useState("available");
  
  const [account_type, setAccount_type] = useState(1);


  const [orderId, setorderId] = useState('');

  // const [password, setPassword] = useState("");


  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");


  const [paymentData, setPaymentData] = useState([]);


  const [lat, setLat] = useState("-1.2865605");
  const [lng, setLng] = useState("36.9463368");

  

  let history = useNavigate();


  const [isLoading,setLoading]=useState(false);







  const navigate = useNavigate();


  console.log("THE AUTHENTICATION STATUS IS ",isAuthenticated)




  useEffect(()=>{

   
    axios.get('http://localhost:3001/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

      setUserId(response.data.id)

      setFirst_name(response.data.first_name)

      setEmail(response.data.email)

      console.log('THE CUSTOMER ID IS'+user_id)
 
         
     })


     axios.get('http://localhost:3001/order_payments/getCustomerPayments', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

      setPaymentData(response.data)

      console.log('THE PAYMENT DATA IS'+paymentData)
 
 
         
     })
   


},[])


  const data={
    first_name:first_name,
    last_name:first_name,
    username:email,
    email:email,
    phone_no:phone_no,
    account_type:account_type,
    password:phone_no,
    state:'Nairobi',
    city:null,
    role:'Customer',
}





const addDetails = ()  => {
    setLoading(true);

    //axios.post("https://ngeritbackend.herokuapp.com/users",data).then((response)=>{
    
   axios.post("http://localhost:3001/users",data).then((response)=>{

    console.log("The response is"+response.data)

    
        setTimeout(() => {
          addOrder()
            setLoading(false);
            toast.info('Signed Up successfully');
        }, 3000);
     
       //  history("/dashboard");
      
       
    })

}

let ordered_item=localStorage.getItem('ordered_item')
ordered_item=JSON.parse(ordered_item)


const addOrder = ()  => {


  const order_detils={
    item_name:item,
    order_description:order_description,
    customer_lat:lat,
    customer_longitude:lng,
    status:order_status,
    UserId:user_id,
   
}

  
 axios.post("http://localhost:3001/order",order_detils).then((response)=>{

  console.log("The order data is "+response.data)

  setorderId(response.data.id)


  console.log("THE ORDER ID IS "+response.data.id)




  
      setTimeout(() => {
          setLoading(false);
          toast.info('Signed Up successfully');
      }, 3000);
   
     //  history("/dashboard");
    
     
  })

}

const getOrderDetails=()=>{


axios
.get('http://localhost:3001/order/order/view/'+orderId)
.then((response) => {


   setorderId(response.data.id)


});



}


  const logout = () => {
    localStorage.removeItem("accessToken");

    localStorage.removeItem("isAuthenticated");
    setAuthState({ username: "", id: 0, status: false });

    navigate('/')


  };

  return (
    <div>
    <Helmet>
    
    

    <link href="/assets_fheader/vendor/fontawesome-free/css/all.min.css" rel="stylesheet"/>
    <link href="/assets_fheader/vendor/animate.css/animate.min.css" rel="stylesheet"/>
    <link href="/assets_fheader/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="/assets_fheader/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
    <link href="/assets_fheader/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
    <link href="/assets_fheader/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
    <link href="/assets_fheader/vendor/remixicon/remixicon.css" rel="stylesheet"/>
    <link href="/assets_fheader/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
  
     <link href="/assets_fheader/css/style.css" rel="stylesheet"/>

    
    </Helmet>


    
    <div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex justify-content-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope"></i> <a href="mailto:contact@example.com">yoteorder@infor.com</a>
        <i class="bi bi-phone"></i> +254 714 639 773
      </div>
      <div class="d-none d-lg-flex social-links align-items-center">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
      <div class="cont-con">
     {!isAuthenticated && <a href="/login"  data-toggle="modal" data-target="#startTrialModal2">Login</a>

    }
    {
      isAuthenticated && <button onClick={logout} > Logout </button>
    }

  </div>
    </div>
  </div>

  <header id="header" class="fixed-top">
  <div class="container d-flex align-items-center">

   

     <h1 class="logo me-auto"><a href="/">YoteOrder</a></h1>

    
   
    {/* <a href="/" class="logo me-auto"><img src="images/logos/tunepp.jpg" alt="" class="img-fluid"/></a>*/}




    

    <nav id="navbar" class="navbar order-last order-lg-0">
      <ul>
        
        <li><a class="nav-link scrollto active" href="/">Home</a></li>

       {/** {authState.role == 'Seller' && isAuthenticated ? <li><a class="nav-link scrollto" href="/new_requests">Orders</a></li>: 'Role is'+ authState.first_name }*/} 

         {!isAuthenticated && 
        <li><a class="nav-link scrollto" href="/tunep-services">Services</a></li>

         }


         {isAuthenticated && 
          <li><a class="nav-link scrollto" href="/current_bids">Active Bids</a></li>
  
           }
      
   
        <li><a class="nav-link scrollto" href="/help_and_support">Help & Support</a></li>
        {isAuthenticated &&
        <li class="dropdown"><a href="#"><span><img src="/images/avatar/avatarDefault.jpg"  style={{borderRadius:'50%',width:'32px',height:'32px'}}/></span> <i class="bi bi-chevron-down"></i></a>
      
        <ul>
            <li><a href="#">{first_name}</a></li>
            <li><a href="#">My Account</a></li>
            
            <li><a href="#">
            
            
            
            Available :Ksh


            {paymentData.map((value, key) => {
              return (

            <p>{value.amount.length}</p>

            );
          })}
            
            </a></li>
            <li><a href="#">reserved :Ksh 0.00</a></li>
            <li><a href="/customer/orders">My Orders</a></li>
            <li><a href="#">Log Out</a></li>
           
          </ul>
        </li>

      }
       
      
        
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav>

    {!isAuthenticated && 

    <a href="/become_seller" class="appointment-btn scrollto"><span class="d-md-inline">Become a seller</span> </a>

    }

    {isAuthenticated && 
      <a href="/start-now" class="appointment-btn scrollto"><span class="d-md-inline">Add</span> Funds</a>
    
    }

    {!isAuthenticated &&

      <a href="/start-now" class="appointment-btn scrollto"><span class="d-md-inline">Order</span> Now</a>
    }


   


    
    

    

  </div>
</header>










<Helmet>
    
    

<script src="assets_fheader/vendor/purecounter/purecounter.js"></script>
<script src="assets_fheader/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets_fheader/vendor/glightbox/js/glightbox.min.js"></script>
<script src="assets_fheader/vendor/swiper/swiper-bundle.min.js"></script>


<script src="assets_fheader/js/main.js"></script>


</Helmet>


    </div>
  )
}

export default HeaderFloating