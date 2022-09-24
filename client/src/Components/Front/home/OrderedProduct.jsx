import React from 'react'

import {useEffect,useState,useContext} from 'react';

import {useParams} from "react-router-dom"


import axios from 'axios';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useNavigate,Link} from "react-router-dom";

import { AuthContext } from "../../../helpers/AuthContext";




import LoadingSpinner from '../../../utils/LoadingSpinner'
import ContentLoader from '../../../utils/ContentLoader'

import ProcessingAlert from '../../../utils/ProcessingAlert';

import { Modal, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import OrderDetailsContext from '../../../helpers/OrderDetailsContext';
import LocationDataContext from '../../../helpers/LocationDataContext';


function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function OrderedProduct() {

    let { pname } = useParams();

    let { lat } = useParams();

    let { lng } = useParams();


    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
          ? JSON.parse(localStorage.getItem('loginData'))
          : null
      );

      const {customerOrders,setCustomerOrders} = useContext(OrderDetailsContext);


      const {position, setPosition} = useContext(LocationDataContext);

      const [first_name, setFirst_name] = useState("");
      const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [phone_no, setPhone_no] = useState("");

      const [user_id, setUserId] = useState(1);

      const [name, setName] = useState("");


      
      const [order_status, setOrderStatus] = useState("available");
      
      const [account_type, setAccount_type] = useState(1);


      const [orderId, setorderId] = useState('');
  
      // const [password, setPassword] = useState("");


      const [role, setRole] = useState("");
      const [password, setPassword] = useState("");
      const {setAuthState } = useContext(AuthContext);

      
    
    //   const [lat, setLat] = useState("-1.2865605");
    //   const [lng, setLng] = useState("36.9463368");



      let { string_lng } = useParams();

    
      const [productsList, setProductsList] = useState([]);
  
      const [seller_name, setSeller_name] = useState("");
  
      const [errorMessage, setErrorMessage] = useState("");
  
      const [isDivLoading, setIsDivLoading] = useState(false);




      const [showSearchInforContent,setShowSearchInforContent]=useState(true);

      const [showAllServicesDiv,setShowAllServicesDiv]=useState(false);
    
      const [showBookingDiv,setShowBookingDiv]=useState(false);

      const [showBussInforCard,setShowBussInforCard]=useState(false);

      const [showProductCardInfor,setShowProductCardInfor]=useState(false);
    
      const [showCustomerDetailsForm,setShowCustomerDetailsForm]=useState(false);
    
      const [showSuccessAlert,setShowSuccessAlert]=useState(false);
    
      const [businessId, setbusinessId] = useState('');

      const [business_name, setbusiness_name] = useState('');

      const [cloudinaryUrl, setCloudinaryUrl] = useState('');

      const [business_location, setBusiness_location] = useState('');

      const [business_city, setBusiness_city] = useState('');

      const [business_contacts, setBusiness_contacts] = useState('');


      const [productFound, setProductFound] = useState(false);

      

      


      
    
      const [customerId, setCustomerId] = useState('');
    
      const [bookingId, setBookingId] = useState('');

      const [productId, setproductId] = useState('');


      

      const [quantity_ordered, setquantity_ordered] = useState(1);

      const [item_name, setitem_name] = useState('');

      const [order_description, setorder_description] = useState('');


      const [randomNo, setRandomNo] = useState(0);

      const [showAlert, setShowAlert] = useState(false);

     
    const [imagePath, setImagePath] = useState("");


    const [divToShow, setDivToShow] = useState('');


      const [show, setShow] = useState(false);

      const [showP, setShowP] = useState(false);


      const [showBuyerDetailsModal, setShowBuyerDetailsModal] = useState(false);

      const handleClose = () => setShow(false);

      const handleClose_ = () => setShowBuyerDetailsModal(false);

      const handleShow = () =>{

        setLoading(true)

        setShow(true);
      
        setTimeout(() => {

        setLoading(false)

        history("/dashboard-customer");
        window.location.reload(false);

      

        
    }, 5000);


      }



      const handleBuyerDetailsModal = () =>{

        setLoading(true)

        setShowBuyerDetailsModal(true);
      
        setTimeout(() => {

        setLoading(false)

        // history("/dashboard-customer");
        // window.location.reload(false);

      

        
    }, 1000);


      }


    
    
    
      const [serviceId, setServiceId] = useState('');
  
  
  
  
      localStorage.setItem('itemsearched', JSON.stringify(pname));

      const [initiateOrderProcessing,setInitiateOrderProcessing]=useState(false);



    
      let history = useNavigate();


      const [isLoading,setLoading]=useState(false);


      let ordered_item=localStorage.getItem('ordered_item')
      ordered_item=JSON.parse(ordered_item)


      






      useEffect(()=>{


        setIsDivLoading(true);

        //setDivToShow('#Features')


        console.log("YOUR ITEM IS"+ordered_item)

        console.log("YOUR NEW POSITION IS "+position)


       

  
   

  // axios.get(`https://yoteorder-server.herokuapp.com/product/search/${pname}`).then((response) => {
  
    axios.get(`https://yoteorder-server.herokuapp.com/product/search_geoloc/${pname}/${lat}/${lng}`).then((response) => {

       // setShowP(true);

       

       


         
            setTimeout(() => {
                setProductsList(response.data.item_list);

                console.log("THIS IS YOUR SEARCH DETAILS "+response.data.item_list)

                setImagePath(response.data.imagePath)


                if( response.data.item_list==''){
                    setProductFound(true)
                    //setShowP(false);
                }

               // setShowP(false);

    
              

               // setSeller_name(response.data.Users);
                setIsDivLoading(false)   // Hide loading screen 
               // toast.info('Product saved successfully');
              // history(`/ordered-product/${pname}/${lat}/${lng}/#Features`)
            
             
            }, 4000);

            //setSeller_name(response.data.Users.first_name)
            
        }).catch(() => {
            setErrorMessage("Unable to fetch your search.Make sure you have internet connection.");
            setIsDivLoading(false);
         });
  
  
  },[position]);




  
  const cancelSelectedService=()=>{

    setShowBookingDiv(false)
   
  
    setShowCustomerDetailsForm(false)

    setShowBussInforCard(false)

    setShowProductCardInfor(false)
  
    setShowAllServicesDiv(true)

    setShowSearchInforContent(true)
  
    setServiceId('')
  
  }
  
  
  const checkOutAndBook=()=>{

    setLoading(true);
  
   

    setTimeout(() => {
        setLoading(false);
        setShowBookingDiv(false)
        //setIsDivLoading(true);
  
        setShowCustomerDetailsForm(true)
    
        setRandomNo(randomNumberInRange(1, 10000));
    
        setShowAllServicesDiv(false)
        setInitiateOrderProcessing(true)

        handleBuyerDetailsModal()
      
    }, 3000);
  
  }
  
  
  
  

  const user_details={
    name:name,
   last_name:name,
   email:email,
   phoneNo:phone_no,
   account_type:"",
   password:phone_no,
  
    state:"",
    city:null,
    role:'Customer',
  }
  
  
  
  
  
  
  
  const makeOrder = ()  => {
  setLoading(true);


  if(name=="" || phone_no==""){

    setLoading(false);

    setShowAlert(true)


    setTimeout(() => {
        setShowAlert(false)
       
     }, 2500);

     return

  }
  
   //axios.post("https://tunepapi.herokuapp.com/customer",data).then((response)=>{
  
  
    axios.post('https://yoteorder-server.herokuapp.com/users',user_details).then((response)=>{
  
      console.log("THE CUSTOMER DATA IS"+response.data)
  
      setCustomerId(response.data.id)
  
  
     


      if(response.data.error) {

        setTimeout(() => {
           
            toast.error(response.data.error);
            setLoading(false);
        }, 500);

        //alert();
        //setLoading(false);
      }

      else{

     




    

  const data = { username:email, password: phone_no };

  axios.post("https://yoteorder-server.herokuapp.com/users/login", data).then((rense) => {
    if (rense.data.error) {
      alert(rense.data.error);
      setLoading(false);
    } else {
      localStorage.setItem("accessToken", rense.data.token);
      setAuthState({
        username: rense.data.username,
        role: rense.data.role,
        first_name: rense.data.first_name,
        phone_no: rense.data.phone_no,
        id: rense.data.id,
        status: true,
      });

      console.log("Response is",rense.data)

      console.log("THE RETURNED USER ID IS ",rense.data.id)


      const customer_details={
       name:name,
       email:email,
       phone_no:phone_no,
       BusinessId:businessId,
       UserId:rense.data.id,
       
      }

    axios.post('https://yoteorder-server.herokuapp.com/customer',customer_details).then((res)=>{
    
        console.log("THE CUSTOMER DATA IS->"+res.data)
    
        setBookingId(res.data.id)
        //setCustomerId(res.data.id)




        const order_details={
            item_name:item_name,
            quantity_ordered:quantity_ordered,
            customer_phone_no:rense.data.phone_no,
            order_description:order_description,
            order_status:'pending',
            orderId:randomNo,
            ProductId:productId,
            UserId:rense.data.id,
            CustomerId:res.data.id,
            BusinessId:businessId,
          }
    axios.post('https://yoteorder-server.herokuapp.com/order',order_details).then((res_b)=>{
    
    // console.log("The response is"+res_b.data)
    
    setorderId(res_b.data.id)


    const allCustOrders = [...customerOrders, res_b.data];
    setCustomerOrders(allCustOrders);

  
   // localStorage.setItem("order_details", allCustOrders);

    localStorage.setItem("order_details", res_b.data);
    
    
    console.log("THE  ORDER ID IS "+res_b.data.id)
    
    console.log("THE  ORDER ID TWO IS "+randomNo)
    
    })
    



    })


/*
    const order_details={
        item_name:item_name,
        quantity_ordered:quantity_ordered,
        customer_phone_no:rense.data.phone_no,
        order_description:order_description,
        orderId:randomNo,
        ProductId:productId,
        UserId:rense.data.id,
        CustomerId:customerId,
        BusinessId:businessId,
      }
axios.post('https://yoteorder-server.herokuapp.com/order',order_details).then((res_b)=>{

// console.log("The response is"+res_b.data)

setorderId(res_b.data.id)



console.log("THE  ORDER ID IS "+res_b.data.id)

console.log("THE  ORDER ID TWO IS "+randomNo)

})*/



      if(rense.data.role=="Customer"){


        axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") }}).then((res_auth) => {

        setUserId(res_auth.data.id)


    console.log("THE  USER ID IS "+res_auth.data.id)



    // const customer_details={
    //     name:name,
    //    email:email,
    //    phone_no:phone_no,
    //    BusinessId:businessId,
    //    UserId:res_auth.data.id,
       
    //   }

    // axios.post('https://yoteorder-server.herokuapp.com/customer',customer_details).then((res)=>{
    
    //     console.log("The response is"+res.data)
    
    //     setBookingId(res.data.id)
    // })




//             const order_details={
//                         item_name:item_name,
//                         quantity_ordered:quantity_ordered,
//                         customer_phone_no:rense.data.phone_no,
//                         order_description:order_description,
//                         orderId:randomNo,
//                         UserId:res_auth.data.id,
//                         BusinessId:businessId,
//                       }
//             axios.post('https://yoteorder-server.herokuapp.com/order',order_details).then((res_b)=>{

//  // console.log("The response is"+res_b.data)

//   setorderId(res_b.data.id)

  

//  console.log("THE  ORDER ID IS "+res_b.data.id)

//  console.log("THE  ORDER ID TWO IS "+randomNo)

//     })

      
      
           })

        setTimeout(() => {
          setLoading(false);


          
          //setLoading(false);
          //toast.info('Appointment saved!');
          setShowSuccessAlert(true)
  
          setShowCustomerDetailsForm(false)

          setShowAllServicesDiv(true)

          setShowBuyerDetailsModal(false)

          handleShow()


        
      }, 5000);

      }

    else if(rense.data.role=="Vendor"){

      setTimeout(() => {
        setLoading(false);
        history('/dashboard-vendor');
        window.location.reload(false);
    }, 2000);

    }
    else{
      setTimeout(() => {
        setLoading(false);
        history("/dashboard");
    }, 1000);


    }
    
    }
  });
  
  
  
   
  
  
   
    }  
  });
  
  
  
  }



  const bookAppointmentExisting = ()  => {
    setLoading(true);
    
     //axios.post("https://tunepapi.herokuapp.com/customer",data).then((response)=>{
    
    
      axios.post('https://yoteorder-server.herokuapp.com/users',user_details).then((response)=>{
    
        console.log("THE CUSTOMER DATA IS"+response.data)
    
        setCustomerId(response.data.id)
    
    
        console.log("THE CUSTOMER ID IS"+response.data.id)
  
  
        if(response.data.error) {
  
          setTimeout(() => {
             
              toast.error(response.data.error);
              setLoading(false);
          }, 500);
  
          //alert();
          //setLoading(false);
        }
  
     
       
  
  
  
  
        const customer_details={
          name:name,
         email:email,
         phone_no:phone_no,
         BusinessId:businessId,
         UserId:27,
         
        }
      
  
  
  
  
        axios.post('https://yoteorder-server.herokuapp.com/customer',customer_details).then((res)=>{
    
        console.log("The response is"+res.data)
    
        setBookingId(res.data.id)
  
  
  
  //       const appointment={
  //         title:name,
  //         start:start,
  //         end:end,
  //         desc:desc,
  //         UserId:1,
  //         CustomerId:res.data.id,
        
  //       }
  
  
        
  //       axios.post('https://yoteorder-server.herokuapp.com/booking',appointment).then((res_b)=>{
    
  //       console.log("The response is"+res_b.data)
    
  //       setBookingId(res_b.data.id)
    
        
    
    
  //      // console.log("THE NEW CUSTOMER ID IS"+customerId)
     
       
  //   })
    
      
    
       // console.log("THE NEW CUSTOMER ID IS"+customerId)
     
       
    })
  
    const data = { username:email, password: phone_no };
  
    axios.post("https://yoteorder-server.herokuapp.com/users/login", data).then((rense) => {
      if (rense.data.error) {
        alert(rense.data.error);
        setLoading(false);
      } else {
        localStorage.setItem("accessToken", rense.data.token);
        setAuthState({
          username: rense.data.username,
          role: rense.data.role,
          first_name: rense.data.first_name,
          phone_no: rense.data.phone_no,
          id: rense.data.id,
          status: true,
        });
  
        console.log("Response is",rense.data)
  
        if(rense.data.role=="Customer"){
  
     
  
  
            
  
  
              axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((res_auth) => {
  
                  setUserId(res_auth.data.id)
  
  
  
                  const order_details={
                              item_name:item_name,
                              quantity_ordered:quantity_ordered,
                              customer_phone_no:rense.data.phone_no,
                              order_description:order_description,
                              orderId:randomNo,
                              
                              UserId:res_auth.data.id,
                              BusinessId:businessId,
                            
                            }
  
  
                            axios.post('https://yoteorder-server.herokuapp.com/order',order_details).then((res_b)=>{
    
       // console.log("The response is"+res_b.data)
    
        setorderId(res_b.data.id)
    
        
    
    
       console.log("THE  ORDER ID IS "+res_b.data.id)
  
       console.log("THE  ORDER ID TWO IS "+randomNo)
     
          })
    
            
            
                 })
  
  
  
        }
      else if(rense.data.role=="Vendor"){
  
        setTimeout(() => {
          setLoading(false);
          history('/dashboard-vendor');
          window.location.reload(false);
      }, 1000);
  
      }
      else{
        setTimeout(() => {
          setLoading(false);
          history("/dashboard");
      }, 1000);
  
  
      }
      
      }
    });
    
    
    
     
    
        
      
    
      
        setTimeout(() => {
         // createAppointment()
    
            setLoading(false);

            toast.info('Appointment saved!');
            setShowSuccessAlert(true)
    
            setShowCustomerDetailsForm(false)
  
            setShowAllServicesDiv(true)

            // setLoading(false);
            history("/dashboard-customer");
            window.location.reload(false);
    
        }, 1000);
     
      
    });
    
    
    
    }
  


  const proceedToBooking=(pId,bId)=>{

    
    setproductId(pId)

    setbusinessId(bId)

    setShowAllServicesDiv(true)

    setShowBussInforCard(true)

    setShowProductCardInfor(true)

    setShowSearchInforContent(false)


      //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
        axios.get('https://yoteorder-server.herokuapp.com/business/byId/'+bId).then((response) => {

        console.log("THE BUSS NAME IS "+response.data.business_name)

        setbusiness_name(response.data.business_name)

        setCloudinaryUrl(response.data.cloudinary_url)

        setBusiness_location(response.data.location)

        setBusiness_city(response.data.city)

        setBusiness_contacts(response.data.contacts)
            

            })



            //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
        axios.get('https://yoteorder-server.herokuapp.com/product/byId/'+pId).then((response) => {

            console.log("THE PRODUCT NAME IS "+response.data.name)

            setitem_name(response.data.name)
                
    
                })
      


   
}


const backHome=()=>{

    history('/')
}






  const vendorSearchDiv=(


    <div class="card-body">
    <div class="">

    {showSearchInforContent &&

        <div class="row">
            

        {productsList.map((value, key) => {
            return (




                <div class="col-md-6 col-xl-4 col-sm-6">
                <div class="card">
                    <div class="product-grid6 thumbnail">
                        <div class="product-image6 p-5">
                            <ul class="icons">
                                <li>
                                    <a href="#" class="btn btn-primary"> <i class="fe fe-eye">  </i> </a>
                                </li>
                                <li><a href="#" class="btn btn-success"><i  class="fe fe-edit"></i></a></li>
                                <li><a href="javascript:void(0)" class="btn btn-danger"><i class="fe fe-x"></i></a></li>
                            </ul>
                            <a href="#" >
                            {/*  <img class="img-fluid br-7 w-100"  src={imagePath+"/uploads/"+value.BusinessId+"/"+value.product_image} alt="img"/> */}
                               
                            
                            <img class="img-fluid br-7 w-100"  src={value.cloudinary_url} alt="img"/>
                               
                            
                                </a>
                        </div>
                        <div class="card-body pt-0">


                     


                         
                            <div class="product-content text-center">
                                <h1 class="title fw-bold fs-20"><a   onClick={() => {
                                    proceedToBooking(value.id,value.Business.id);
                                      }} href='#home'>{value.name}</a></h1>
                                <div class="mb-2 text-warning">
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star-half-o text-warning"></i>
                                    <i class="fa fa-star-o text-warning"></i>
                                </div>
                                <div class="price">Ksh {value.price}/ {value.unit_of_measure}<span class="ms-4">Ksh  {value.price}</span>
                              
                                </div>
                                <span class="tag tag-radius tag-round tag-teal">{value.status}</span>
                               
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <a  onClick={() => {
                                proceedToBooking(value.id,value.Business.id);
                                  }} class="btn btn-primary" href='#home'><i class="fe fe-shopping-cart mx-2"></i>Order Now</a>
                           
                        </div>
                    </div>
                </div>
            </div>
      
       
            )
            })}



       
       
    </div>
    
    
    }
      

        <div class="row"  id="home">



            
    <div class="col-md-8 col-xl-8">

    <div class="card border">
    {showProductCardInfor && <div class="card-header">
    <h2 class="card-title">Product Infor</h2>
    
    <div class="card-options">

   
        <form>
            <div class="input-group">
                <input type="text" class="form-control form-control-sm" placeholder="Search something..." name="s"/>
                <span class="input-group-btn ms-0">
                        <button class="btn btn-sm btn-primary" type="submit">
                            <span class="fe fe-search text-white"></span>
                </button>
                </span>
            </div>
        </form>
    </div>
</div> }
        

        {showAllServicesDiv &&
        <div class="card-body">
        <div class="form-row">
        <div class="form-group col-md-6 mb-0">

       {/* <p>Product Id {productId} Seller Id {businessId}  </p>*/} 
            <div class="form-group">
            <label class="form-label">Product Name</label>
                <input type="text" class="form-control" id="name1" value={item_name} disabled
                
              
                
                placeholder="Item name"/>
            </div>
        </div>
        <div class="form-group col-md-6 mb-0">
            <div class="form-group">
            <label class="form-label">Quantity(Amount you need)</label>
                <input type="number" class="form-control" id="name2"
                
                onChange={(event) => {
                    setquantity_ordered(event.target.value);
                  }} 
                
                placeholder="eg.1" required/>
            </div>
        </div>

        
       
        <div class="form-group col-md-12 mb-0">
        <label class="form-label">Describe Your Order</label>
           

            <textarea class="form-control"   onChange={(event) => {
                setorder_description(event.target.value);
              }}  placeholder="Privide any order details or preferences you may need." id="floatingTextarea2" style={{height: '100px'}}></textarea>
        </div>
       
    </div>

    <div class="form-footer mt-2">
   

    {!isLoading && 
    <a  onClick={() => {
        checkOutAndBook()
      }} class="btn btn-primary" href='#home'><i class="fa fa-check" data-bs-effect="effect-flip-vertical" title="" data-bs-original-title="fa fa-check" aria-label="fa fa-check"></i>Confirm Now</a>

    } 


    {/**  {!isLoading &&  <button type="submit" onClick={() => {
        checkOutAndBook();
      }} class="btn btn-primary">Confirm</button>

    }  */}

    
    {isLoading &&
        
        <button class="btn btn-primary my-1" type="button" disabled="">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Initiating order...
    </button>
    }
       

      <button type="reset" onClick={() => {
        cancelSelectedService();
      }} class="btn btn-label-secondary">Cancel</button>
</div>
        </div>
    }

        {showCustomerDetailsForm &&

            <div class="card-body">


    {showAlert &&
    
        <div class="alert alert-danger mb-0" role="alert">
        <span class="alert-inner--icon"><i class="fe fe-slash"></i></span>
        <span class="alert-inner--text"><strong>Alert!</strong> Please enter your name and phone number!</span>
    </div>
    }

                             
    
<form>
<div class="row mb-3">

  <label class="col-sm-2 col-form-label" for="basic-icon-default-fullname">Your Name</label>
  <div class="col-sm-10">
    <div class="input-group input-group-merge">
      <span id="basic-icon-default-fullname2" class="input-group-text"><i class="bx bx-user"></i></span>
      <input type="text" class="form-control" id="basic-icon-default-fullname"  
      
      onChange={(event) => {
        setName(event.target.value);
      }} 

      placeholder='eg. Jane Masinde'
      
      aria-describedby="basic-icon-default-fullname2"/>
    </div>
  </div>
</div>

<div class="row mb-3">
  <label class="col-sm-2 col-form-label" for="basic-icon-default-email">Email</label>
  <div class="col-sm-10">
    <div class="input-group input-group-merge">
   
      <input type="text" id="basic-icon-default-email" class="form-control"
      onChange={(event) => {
        setEmail(event.target.value);
      }}

      placeholder='eg. jane@gmail.com'
      
      aria-describedby="Eg.mike20@gmail.com"/>
     
    </div>
    <div class="form-text"> You can use letters, numbers &amp; periods </div>
  </div>
</div>
<div class="row mb-3">
  <label class="col-sm-2 form-label" for="basic-icon-default-phone">Phone No</label>
  <div class="col-sm-10">
    <div class="input-group input-group-merge">
      <span id="basic-icon-default-phone2" class="input-group-text"><i class="bx bx-phone"></i></span>
      <input type="text" id="basic-icon-default-phone" class="form-control phone-mask"
      onChange={(event) => {
        setPhone_no(event.target.value);
      }}
      
      placeholder="eg. 0713876543" aria-label="658 799 8941" aria-describedby="basic-icon-default-phone2"/>
    </div>
  </div>
</div>

<div class="row justify-content-end">
{/**  <div class="col-sm-12">

  {!isLoading && <button type="submit" onClick={makeOrder} class="btn btn-primary">Place Order</button>

} 
{isLoading &&
  

    <button class="btn btn-primary my-1" type="button" disabled="">
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Preparing Your Order....
</button>
}
   

    <button type="reset" onClick={() => {
      cancelSelectedService();
    }} class="btn btn-label-secondary">Cancel</button>
  </div>*/}
 
</div>
</form>
</div>



      



    }


<ToastContainer></ToastContainer>

    </div>
</div>



   









        
        <div class="col-md-4  col-xl-4">

{showBussInforCard &&  

    


    
    
    
    
    
    <div class="card border">

    
    <div class="card-header text-center">
    <h2 class="card-title">Business Details</h2>
</div>

<div class="card-body">
<div class="mx-auto chart-circle chart-circle-md mt-3 mb-4 text-center" data-value="0.75" data-thickness="8" data-bs-color="#6c5ffc">
<div class="profile-img-1">
<img src={cloudinaryUrl} alt="img"/>



</div>






</div>
<div class="text-center mt-3">
    <h3>{business_name}</h3>
    <p class="mb-4">The best around</p>

    <hr/>
    <div class="col p-1 mt-2 border align-items-center br-10">

    
    <div class="d-flex align-items-center mb-3 mt-3">
    <div class="me-4 text-center text-primary">
        <span><i class="fe fe-briefcase fs-20"></i></span>
    </div>
    <div>
        <strong>{business_name} </strong>
    </div>
</div>
<div class="d-flex align-items-center mb-3 mt-3">
    <div class="me-4 text-center text-primary">
        <span><i class="fe fe-map-pin fs-20"></i></span>
    </div>
    <div>
        <strong>{business_location}, {business_city}</strong>
    </div>
</div>
<div class="d-flex align-items-center mb-3 mt-3">
    <div class="me-4 text-center text-primary">
        <span><i class="fe fe-phone fs-20"></i></span>
    </div>
    <div>
        <strong>{business_contacts} </strong>
    </div>
</div>
<div class="d-flex align-items-center mb-3 mt-3">
    <div class="me-4 text-center text-primary">
        <span><i class="fe fe-mail fs-20"></i></span>
    </div>
    <div>
        <strong>georgeme@abc.com </strong>
    </div>
</div>


        
    </div>
</div>



</div>

</div>











}
      
        
    </div>


        
        
        </div>
    </div>
</div>



  )

  const getStarted=()=>{
    history('/get-started')
 }

 const signIn=()=>{
    history('/signin')
 }



    
  return (


    

    <div className='app ltr landing-page horizontal'>


    <Helmet>


   
    <link id="style" href="/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

    
    <link href="/assets/css/style.css" rel="stylesheet" />
    <link href="/assets/css/dark-style.css" rel="stylesheet" />

   
    <link href="/assets/css/icons.css" rel="stylesheet" />

   
    <link id="theme" rel="stylesheet" type="text/css" media="all" href="/assets/colors/color1.css" />

   
    <link href="/assets/switcher/css/switcher.css" rel="stylesheet" />
    <link href="/assets/switcher/demo.css" rel="stylesheet" />



   

    <link href="/assets/css/skin-modes.css" rel="stylesheet" />

    
    </Helmet>








<div class="page">
<div class="page-main">


<div class="hor-header header">
<div class="container main-container">
    <div class="d-flex">
        <a aria-label="Hide Sidebar" class="app-sidebar__toggle" data-bs-toggle="sidebar"
            href="javascript:void(0)"></a>
       
       {/* <a class="logo-horizontal " href="#">
            <img src="/assets/images/brand/logo.png" class="header-brand-img desktop-logo" alt="logo"/>
            <img src="/assets/images/brand/logo-3.png" class="header-brand-img light-logo1"
                alt="logo"/>
        </a> */}

        <a class="logo-horizontal " href="/">
        <img src="/assets/images/brand/logo_pink.png" class="header-brand-img desktop-logo" alt="logo"/>
        <img src="/assets/images/brand/logo_pink.png" class="header-brand-img light-logo1"
            alt="logo"/>
    </a>
        
        <div class="d-flex order-lg-2 ms-auto header-right-icons">
            <button class="navbar-toggler navresponsive-toggler d-lg-none ms-auto" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon fe fe-more-vertical"></span>
            </button>
            <div class="navbar navbar-collapse responsive-navbar p-0">
                <div class="collapse navbar-collapse bg-white px-0" id="navbarSupportedContent-4">
                    
                    <div class="header-nav-right p-5">
                        <Link to="/get-started" class="btn ripple btn-min w-sm btn-outline-primary me-2 my-auto"
                            >New User
                        </Link>
                        {/*   <a href="/signin" class="btn ripple btn-min w-sm btn-primary me-2 my-auto"> */}
                        <a href="/signin" class="btn ripple btn-min w-sm btn-primary me-2 my-auto">
                        Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>





<div class="landing-top-header overflow-hidden">
<div class="top sticky overflow-hidden">
  
    <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
    <div class="app-sidebar bg-transparent horizontal-main">
        <div class="container">
            <div class="row">
            <div class="main-sidemenu navbar px-0">
            <a class="navbar-brand ps-0 d-none d-lg-block" href="/">
            <img alt="" class="logo-2" src="/assets/images/brand/logo_pink.png"/>
            <img src="/assets/images/brand/logo_pink.png" class="logo-3" alt="logo"/>
            </a>
            <ul class="side-menu">
                <li class="slide">
                    <a class="side-menu__item active" data-bs-toggle="slide" href="/"><span
                            class="side-menu__label">Home</span></a>
                </li>
                <li class="slide">
                    <Link class="side-menu__item" data-bs-toggle="slide" to="/features"><span
                            class="side-menu__label">Features</span></Link>
                </li>

                <li class="slide">
                <a class="side-menu__item" data-bs-toggle="slide" href="#Features"><span
                        class="side-menu__label">Services</span></a>
            </li>
               
               
               
                <li class="slide">
                    <a class="side-menu__item" data-bs-toggle="slide" href="#Clients"><span
                            class="side-menu__label">Help Centre</span></a>
                </li>
                <li class="slide">
                    <a class="side-menu__item" data-bs-toggle="slide" href="#Contact"><span
                            class="side-menu__label">Contact</span></a>


                </li>

                <li class="slide onmobile">

                
                <div class=" btn-list side-menu__item" data-bs-toggle="slide">
                                                        <button type="button" onClick={getStarted} class="btn btn-success btn-sm mb-1"><i class="fa fa-registered" data-bs-toggle="tooltip" title="fa fa-registered"></i>Get Started</button>
                                                        <button type="button"  onClick={signIn} class="btn btn-primary btn-sm mb-1"><i class="icon icon-login"></i>Login</button>
                                                    </div>
                
            </li>





                <li class="slide onmobile">
                    <Link class="side-menu__item" data-bs-toggle="slide" to="/get-started"><span
                            class="side-menu__label"><i class="icon icon-login" data-bs-toggle="tooltip" title="" data-bs-original-title="icon-login" aria-label="icon-login" aria-describedby="tooltip377007"></i>Sign up</span></Link>
                </li>

                
            </ul>

           
            <div class="header-nav-right d-none d-lg-flex">
                <Link to='/get-started'
                    class="btn ripple btn-min w-sm btn-outline-primary me-2 my-auto d-lg-none d-xl-block d-block"
                   >Get Started
                </Link>
                <a href="/signin" class="btn ripple btn-min w-sm btn-primary me-2 my-auto d-lg-none d-xl-block d-block"
                   >Login
                </a>
            </div>
        </div>
            </div>
        </div>
    </div>
    
</div>
{/* <div class="demo-screen-headline main-demo main-demo-1 spacing-top overflow-hidden reveal" id="home">*/}
<div class="demo-screen-headline main-demo main-demo-1 spacing-top overflow-hidden" id="home" style={{ width: '100%',
    height: 'auto',
    background: 'url("assets/images/hero-bg.jpg") top center',
    backgroundSize: 'cover',
   }}>
    <div class="container px-sm-0">
    <div class="row">

    {/*  <div class="col-lg-12">



        <div class="card">
        <div class="card-header">
           
        <h3 class="card-title">Sales Analytics</h3>
            
        </div>


        <div class="card-body">
           
        <div class="card-body border-top p-0">
        <div class="accordion accordion-arrow-toggler" id="categoryGroup">


    
        <div class="card-body p-lg-6">
            <h2 class="font-weight-bold">The product is available!</h2>
            <p class="text-muted mb-5">Enter specific details, for sellers to bid</p>    
            <hr class="pb-4"/>


        <div class="row mb-5">
        <div class="col mb-3">
          <label for="nameWithTitle" class="form-label" style={{color: '#fff',fontWeight: '300!important'}}>Ordered Product/Service</label>

          <input type="hidden" id="price" class="form-control" 


          
          />

          
          <input type="text" id="nameWithTitle" class="form-control" placeholder="Enter Name"

          value={ordered_item}
          
        
             
          />
        </div>

        <div class="col mb-0" style={{padding: '0 10px'}}>
            <label for="description" class="form-label">Detailed Description</label>
            
               <textarea name="address" class="form-control" 
               
               onChange={(event) => {
                setOrder_description(event.target.value);
              }}
               
               id="order_description" rows="5" placeholder="Your Product desciption"></textarea>
          </div>

        <div class="col mb-3">
        <label class="form-label" for="multicol-country">Type</label>

        <button class="btn btn-primary form-control"  data-toggle="modal" data-target="#startTrialModal2"  style={{backgroundColor:"#ff7b59"}}>Make Order</button>
  
      </div>
      </div>

      </div>
   
            
        </div>
    </div>
            
        </div>



      
    </div>
       



       
    </div>*/}
   




    
   
<div class="col-md-12 col-lg-12">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Best Sellers Around You!!</h3>
        </div>

      {productFound &&

        <div class="col-md-12  col-xl-12">
        <div class="card border">
            <div class="card-header">
                <h3 class="card-title card-alert alert alert-danger mb-0 ">Product not found</h3>
                <div class="card-options">
                    <a href="javascript:void(0)" class="card-options-collapse" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                    <a href="javascript:void(0)" class="card-options-remove" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a>
                </div>
            </div>
            
            <div class="card-body">
                Sorry no vendor selling  <span class="tag tag-rounded tag-icon tag-orange"><i class="fe fe-product"></i>{pname}<a href="javascript:void(0)" class="tag-addon tag-addon-cross tag-orange"><i class="fe fe-x text-white m-1"></i></a></span>
                 in your area. However, your search has been captured and our team will enroll vendors on your area within 72 hours.
                 <br/>
               

                 <div class="text-center">
                            <a class="btn btn-secondary mt-5 mb-5" onClick={backHome}> <i class="fa fa-long-arrow-left"></i> Back to Home </a>
                        </div>
            </div>
        </div>
    </div>

    }
        

        

    


   



 
       


        
       

        {isDivLoading ? <LoadingSpinner/>: vendorSearchDiv}

        {errorMessage && <div className="error">{errorMessage}</div>}


    </div>
</div>




<Modal class="modal fade" id="modaldemo8" show={showP}>

<Modal.Header>
  <Modal.Title>Almost Done</Modal.Title>
</Modal.Header>
<Modal.Body class="modal-body text-center p-4 pb-5">


<div class="progress progress-md mb-3">
                                                <div class="progress-bar progress-bar-indeterminate bg-blue-1"></div>
                                            </div>


<h4 class="text-success tx-semibold">Welcome To PataMtaani!</h4>
<p class="mg-b-20 mg-x-20">Scanning your area to get available vendors...</p>



  

</Modal.Body>
<Modal.Footer>

{/* <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button> */}
 
</Modal.Footer>
</Modal>





<Modal class="modal fade" id="modaldemo8" show={show}>

<Modal.Header>
  <Modal.Title>Initiating Order</Modal.Title>
</Modal.Header>
<Modal.Body class="modal-body text-center p-4 pb-5">




<i class="icon icon-check fs-70 text-success lh-1 my-5 d-inline-block"></i>
<h4 class="text-success tx-semibold">Congratulations!</h4>
<p class="mg-b-20 mg-x-20">Your order has been initiated</p>

<div class="progress progress-md mb-3">
                                                <div class="progress-bar progress-bar-indeterminate bg-blue-1"></div>
                                            </div>

  

</Modal.Body>
<Modal.Footer>

{/* <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button> */}
 
</Modal.Footer>
</Modal>



<Modal class="modal fade" id="modaldemo8" show={showBuyerDetailsModal}>

<Modal.Header>
  <Modal.Title>Your Details and Contacts</Modal.Title>
</Modal.Header>
<Modal.Body class="modal-body">


<form>
<div class="row mb-3">

  <label class="col-sm-2 col-form-label" for="basic-icon-default-fullname">Your Name</label>
  <div class="col-sm-10">
    <div class="input-group input-group-merge">
      <span id="basic-icon-default-fullname2" class="input-group-text"><i class="bx bx-user"></i></span>
      <input type="text" class="form-control" id="basic-icon-default-fullname"  
      
      onChange={(event) => {
        setName(event.target.value);
      }} 

      placeholder='eg. Jane Masinde'
      
      aria-describedby="basic-icon-default-fullname2"/>
    </div>
  </div>
</div>

<div class="row mb-3">
  <label class="col-sm-2 col-form-label" for="basic-icon-default-email">Email</label>
  <div class="col-sm-10">
    <div class="input-group input-group-merge">
   
      <input type="text" id="basic-icon-default-email" class="form-control"
      onChange={(event) => {
        setEmail(event.target.value);
      }}

      placeholder='eg. jane@gmail.com'
      
      aria-describedby="Eg.mike20@gmail.com"/>
     
    </div>
    <div class="form-text"> You can use letters, numbers &amp; periods </div>
  </div>
</div>
<div class="row mb-3">
  <label class="col-sm-2 form-label" for="basic-icon-default-phone">Phone No</label>
  <div class="col-sm-10">
    <div class="input-group input-group-merge">
      <span id="basic-icon-default-phone2" class="input-group-text"><i class="bx bx-phone"></i></span>
      <input type="text" id="basic-icon-default-phone" class="form-control phone-mask"
      onChange={(event) => {
        setPhone_no(event.target.value);
      }}
      
      placeholder="eg. 0713876543" aria-label="eg. 0713876543" aria-describedby="basic-icon-default-phone2"/>
    </div>
  </div>
</div>


</form>






  

</Modal.Body>
<Modal.Footer class="modal-footer">


{!isLoading && <button type="submit" onClick={makeOrder} class="btn btn-primary">Place Order</button>

} 
{isLoading &&
  

    <button class="btn btn-primary my-1" type="button" disabled="">
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Preparing Your Order....
</button>
} <button class="btn btn-light" onClick={handleClose_} data-bs-dismiss="modal">Close</button>

{/* <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button> */}
 
</Modal.Footer>
</Modal>
           
        </div>

        <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <div class="card bg-primary img-card box-primary-shadow">
                <div class="card-body">
                    <div class="d-flex">
                        <div class="text-white">
                            <h2 class="mb-0 number-font">7,865</h2>
                            <p class="text-white mb-0">Total Followers </p>
                        </div>
                        <div class="ms-auto"> <i class="fa fa-user-o text-white fs-30 me-2 mt-2"></i> </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <div class="card bg-secondary img-card box-secondary-shadow">
                <div class="card-body">
                    <div class="d-flex">
                        <div class="text-white">
                            <h2 class="mb-0 number-font">86,964</h2>
                            <p class="text-white mb-0">Total Likes</p>
                        </div>
                        <div class="ms-auto"> <i class="fa fa-heart-o text-white fs-30 me-2 mt-2"></i> </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <div class="card  bg-success img-card box-success-shadow">
                <div class="card-body">
                    <div class="d-flex">
                        <div class="text-white">
                            <h2 class="mb-0 number-font">98</h2>
                            <p class="text-white mb-0">Total Comments</p>
                        </div>
                        <div class="ms-auto"> <i class="fa fa-comment-o text-white fs-30 me-2 mt-2"></i> </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <div class="card bg-info img-card box-info-shadow">
                <div class="card-body">
                    <div class="d-flex">
                        <div class="text-white">
                            <h2 class="mb-0 number-font">893</h2>
                            <p class="text-white mb-0">Total Posts</p>
                        </div>
                        <div class="ms-auto"> <i class="fa fa-envelope-o text-white fs-30 me-2 mt-2"></i> </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>


    </div>


  


</div>







</div>









<div class="main-content mt-0">
<div class="side-app">


    <div class="main-container">






        <div class="">


     






        <div class="sptb section bg-white" id="Features">
                                      <div class="container">
                                          <div class="row">
                                              <h4 class="text-center fw-semibold">Features</h4>
                                              <span class="landing-title"></span>
                                              <h2 class="fw-semibold text-center">PataMtaani Main Features</h2>
                                              <p class="text-default mb-5 text-center">The PataMtaani app comes with
                                                  ready-to-use services that are completely easy-to-use for any user, even for
                                                  a beginner.</p>
                                              <div class="row mt-7">
                                                  <div class="col-lg-6 col-md-12">
                                                  {/* <div class="card features main-features main-features-1 wow fadeInUp reveal revealleft"
                                                          data-wow-delay="0.1s"> */}
                                                      <div class="card features main-features main-features-1 wow fadeInUp revealleft"
                                                          data-wow-delay="0.1s">
                                                          <div class="bg-img mb-2 text-left">
                                                              <svg width="50" height="50"
                                                                  viewBox="0 0 128 128">
                                                                  <circle cx="64" cy="64" r="64" fill="#42A3DB" />
                                                                  <path fill="#347CBE"
                                                                      d="M85.5 26.6L66.1 61 33.3 98.6 62.6 128H64c33.7 0 61.3-26 63.8-59.1L85.5 26.6z" />
                                                                  <path fill="#CD2F30"
                                                                      d="M73.1 57.7h-16c3.6 18.7 11.1 36.6 22.1 52.5.3-5 1-9.8 1.8-14.5 4.6 1.3 9.2 2.3 13.7 3-9.7-12.2-17-26.1-21.6-41z" />
                                                                  <path fill="#F04D45"
                                                                      d="M54.9 57.7c-4.6 15-11.9 28.9-21.6 40.9 4.5-.7 9.1-1.7 13.7-3 .9 4.7 1.5 9.5 1.8 14.5 11-15.9 18.4-33.8 22.1-52.5h-16z" />
                                                                  <path fill="#FFF"
                                                                      d="M93.5 52c1.8-1.8 1.8-4.7 0-6.5-1.3-1.3-1.7-3.3-1-5 1-2.4-.1-5-2.5-6-1.7-.7-2.8-2.4-2.8-4.3 0-2.5-2.1-4.6-4.6-4.6-1.9 0-3.5-1.1-4.3-2.8-1-2.4-3.7-3.5-6-2.5-1.7.7-3.7.3-5-1-1.8-1.8-4.7-1.8-6.5 0-1.3 1.3-3.3 1.7-5 1-2.4-1-5 .1-6 2.5-.7 1.7-2.4 2.8-4.3 2.8-2.5 0-4.6 2.1-4.6 4.6 0 1.9-1.1 3.5-2.8 4.3-2.4 1-3.5 3.7-2.5 6 .7 1.7.3 3.7-1 5-1.8 1.8-1.8 4.7 0 6.5 1.3 1.3 1.7 3.3 1 5-1 2.4.1 5 2.5 6 1.7.7 2.8 2.4 2.8 4.3 0 2.5 2.1 4.6 4.6 4.6 1.9 0 3.5 1.1 4.3 2.8 1 2.4 3.7 3.5 6 2.5 1.7-.7 3.7-.3 5 1 1.8 1.8 4.7 1.8 6.5 0 1.3-1.3 3.3-1.7 5-1 2.4 1 5-.1 6-2.5.7-1.7 2.4-2.8 4.3-2.8 2.5 0 4.6-2.1 4.6-4.6 0-1.9 1.1-3.5 2.8-4.3 2.4-1 3.5-3.7 2.5-6-.7-1.7-.3-3.7 1-5z" />
                                                                  <path fill="#FFCD0A"
                                                                      d="M64 70.8c-12.2 0-22.1-9.9-22.1-22.1 0-12.2 9.9-22.1 22.1-22.1 12.2 0 22.1 9.9 22.1 22.1 0 12.2-9.9 22.1-22.1 22.1z" />
                                                                  <path fill="#FFF"
                                                                      d="M59.9 61c-.6 0-1.1-.2-1.5-.7l-8.3-9.2c-.7-.8-.7-2.1.1-2.8.8-.7 2.1-.7 2.8.1l6.7 7.5 15.1-18.8c.7-.9 2-1 2.8-.3.9.7 1 2 .3 2.8L61.4 60.2c-.3.5-.9.8-1.5.8z" />
                                                              </svg>
                                                          </div>
                                                          <div class="text-left">
                                                              <h4 class="fw-bold">Convenient &amp; Products</h4>
                                                              <p class="mb-0">Pata Mtaani helps you buy and sell household products and services just within your area of residence and your immediate neigbors</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 col-md-12">

                                                   {/* <div class="card features main-features main-features-1 wow fadeInUp reveal revealleft"
                                                          data-wow-delay="0.1s"> */}
                                                      <div class="card  features main-features main-features-2 wow fadeInUp revealleft"
                                                          data-wow-delay="0.1s">
                                                          <div class="bg-img mb-2 text-left">

                                                              <svg width="50" height="50"
                                                                  viewBox="0 0 128 128">
                                                                  <circle cx="64" cy="64" r="64" fill="#FFCD0A" />
                                                                  <path fill="#F6AF1A"
                                                                      d="M127.7 57.7l-26.4-26.4-74.7 58.8L64.5 128c35.1-.3 63.5-28.8 63.5-64 0-2.1-.1-4.2-.3-6.3z" />
                                                                  <path fill="#CFD5DF" d="M76.2 102.9H51.8l2-13.6h20.4z" />
                                                                  <path fill="#545E70"
                                                                      d="M97.1 91.7H30.9c-3.5 0-6.4-2.9-6.4-6.4V36.1c0-3.5 2.9-6.4 6.4-6.4h66.2c3.5 0 6.4 2.9 6.4 6.4v49.3c0 3.5-2.9 6.3-6.4 6.3z" />
                                                                  <path fill="#E6E8EB"
                                                                      d="M24.5 81.4v4c0 3.5 2.9 6.4 6.4 6.4h66.2c3.5 0 6.4-2.9 6.4-6.4v-4h-79z" />
                                                                  <path fill="#49C7EF"
                                                                      d="M30.9 74.3c-1 0-1.8-.8-1.8-1.8V36.1c0-1 .8-1.8 1.8-1.8h66.2c1 0 1.8.8 1.8 1.8v36.4c0 1-.8 1.8-1.8 1.8H30.9z" />
                                                                  <path fill="#17B6EA" d="M37.8 34.3h52.5v40H37.8z" />
                                                                  <path fill="#E6E8EB"
                                                                      d="M76.7 105.3H51.3c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4h25.4c1.3 0 2.4 1.1 2.4 2.4-.1 1.3-1.1 2.4-2.4 2.4z" />
                                                                  <path fill="#ACB2B9" d="M53.2 91.7l22.7 8.8-1.3-8.8z" />
                                                                  <path fill="#FFF"
                                                                      d="M75.7 47.8H52.3c-.6 0-1.1-.5-1.1-1.1v-2.9c0-.6.5-1.1 1.1-1.1h23.3c.6 0 1.1.5 1.1 1.1v2.9c0 .6-.4 1.1-1 1.1zM75.7 57.1H52.3c-.6 0-1.1-.5-1.1-1.1v-2.9c0-.6.5-1.1 1.1-1.1h23.3c.6 0 1.1.5 1.1 1.1V56c0 .6-.4 1.1-1 1.1z" />
                                                                  <path fill="#FFCD0A"
                                                                      d="M62.8 65.9H52.3c-.6 0-1.1-.5-1.1-1.1v-2.9c0-.6.5-1.1 1.1-1.1h10.4c.6 0 1.1.5 1.1 1.1v2.9c0 .6-.4 1.1-1 1.1z" />
                                                                  <g fill="#CFD5DF">
                                                                      <circle cx="54.1" cy="45.3" r="1.2" />
                                                                      <circle cx="57.6" cy="45.3" r="1.2" />
                                                                      <circle cx="61" cy="45.3" r="1.2" />
                                                                      <circle cx="64.5" cy="45.3" r="1.2" />
                                                                      <circle cx="67.9" cy="45.3" r="1.2" />
                                                                  </g>
                                                                  <g fill="#CFD5DF">
                                                                      <circle cx="54.1" cy="54.6" r="1.2" />
                                                                      <circle cx="57.6" cy="54.6" r="1.2" />
                                                                      <circle cx="61" cy="54.6" r="1.2" />
                                                                      <circle cx="64.5" cy="54.6" r="1.2" />
                                                                      <circle cx="67.9" cy="54.6" r="1.2" />
                                                                  </g>
                                                                  <g fill="#FFF">
                                                                      <path
                                                                          d="M56.9 64.4c-.3.3-.6.4-1 .4s-.8-.1-1-.4c-.3-.3-.4-.6-.4-1s.1-.7.4-1c.3-.3.6-.4 1-.4s.8.1 1 .4c.3.3.4.6.4 1s-.1.7-.4 1zm-.2-1c0-.2-.1-.5-.2-.6-.2-.2-.4-.3-.6-.3s-.4.1-.6.3c-.2.2-.2.4-.2.6 0 .2.1.5.2.6.2.2.4.3.6.3s.4-.1.6-.3c.1-.2.2-.4.2-.6zM58.3 62h.6v1.1l1-1.1h.8l-1.1 1.2c.1.1.3.4.5.7s.4.6.6.8H60l-.8-1.1-.3.4v.8h-.6V62z" />
                                                                  </g>
                                                                  <circle cx="64" cy="86.6" r="2.8" fill="#545E70" />
                                                                  <g fill="#E6E8EB">
                                                                      <path
                                                                          d="M92.6 49.7v9.2c0 1.2 1.6 1.6 2.2.5l2.3-4.6c.2-.3.2-.7 0-1l-2.3-4.6c-.6-1.1-2.2-.7-2.2.5zM36.1 58.9v-9.2c0-1.2-1.6-1.6-2.2-.5l-2.3 4.6c-.2.3-.2.7 0 1l2.3 4.6c.6 1.1 2.2.7 2.2-.5z" />
                                                                  </g>
                                                              </svg>
                                                          </div>
                                                          <div class="text-left">
                                                              <h4 class="fw-bold">Convenience of services</h4>
                                                              <p class="mb-0">
                                                              Pata Mtaani helps you buy and sell all types of services just within your area of residence and your immediate neigbors
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 col-md-12">
                                                   {/* <div class="card features main-features main-features-1 wow fadeInUp reveal revealleft"
                                                          data-wow-delay="0.1s"> */}
                                                      <div class="card features main-features main-features-11 wow fadeInUp revealleft"
                                                          data-wow-delay="0.1s">
                                                          <div class="bg-img mb-2 text-left">
                                                              <svg id="SvgjsSvg1001" width="50" height="50"
                                                                  version="1.1"

                                                              >
                                                                  <defs id="SvgjsDefs1002"></defs>
                                                                  <g id="SvgjsG1008"><svg
                                                                      viewBox="0 0 128 128" width="50" height="50">
                                                                      <circle cx="64" cy="64" r="64" fill="#bed530"
                                                                          class="colorBED530 svgShape"></circle>
                                                                      <path fill="#acc437"
                                                                          d="M112.8 53.7l-4.6-3.7L85 27l-.9 6.9H77L70 27l-1.3 3.7-6 5.7-9.4-9.4-.9 3.7-8.9 2.3-6-6-5 8.2-3.9 63.7 28.9 28.8c2.2.2 4.4.3 6.6.3 33.7 0 61.4-26.2 63.8-59.3l-15.1-15z"
                                                                          class="colorACC437 svgShape"></path>
                                                                      <path fill="#ffffff"
                                                                          d="M86.5 101.8H34.2c-3.6 0-6.5-2.9-6.5-6.5v-58c0-3.6 2.9-6.5 6.5-6.5h52.3c3.6 0 6.5 2.9 6.5 6.5v58c0 3.6-2.9 6.5-6.5 6.5z"
                                                                          class="colorFFF svgShape"></path>
                                                                      <path fill="#e6e8eb"
                                                                          d="M75.6 78l-9.5 12.3 11.5 11.5h8.8c3.6 0 6.5-2.9 6.5-6.5V67.7L75.6 78z"
                                                                          class="colorE6E8EB svgShape"></path>
                                                                      <path fill="#e2247e" d="M88.5 58.8h8v31.9h-8z"
                                                                          transform="rotate(-135.032 92.483 74.797)"
                                                                          class="colorE2247E svgShape"></path>
                                                                      <path fill="#ee3e88" d="M82.9 53.2h8v31.9h-8z"
                                                                          transform="rotate(-135.032 86.846 69.166)"
                                                                          class="colorEE3E88 svgShape"></path>
                                                                      <path fill="#f06197" d="M77.2 47.6h8v31.9h-8z"
                                                                          transform="rotate(-135.032 81.209 63.535)"
                                                                          class="colorF06197 svgShape"></path>
                                                                      <path fill="#cfd5df" d="M87 56h23.9v2.2H87z"
                                                                          transform="rotate(-135.032 98.922 57.076)"
                                                                          class="colorCFD5DF svgShape"></path>
                                                                      <path fill="#545e70"
                                                                          d="M102.2 43.2l10.5 10.5c1.8 1.8 1.8 4.6 0 6.4l-4.6 4.6-16.8-16.9 4.6-4.6c1.7-1.7 4.6-1.7 6.3 0z"
                                                                          class="color545E70 svgShape"></path>
                                                                      <path fill="#fcd65e"
                                                                          d="M67.1 72l-1.7 16.7c-.1 1.1.8 2 1.9 1.9L84 88.9 67.1 72z"
                                                                          class="colorFCD65E svgShape"></path>
                                                                      <path fill="#f6af1a"
                                                                          d="M65.4 88.7c-.1.6.2 1.1.5 1.5l9.6-9.6-8.4-8.6-1.7 16.7z"
                                                                          class="colorF6AF1A svgShape"></path>
                                                                      <path fill="#ffcd0a"
                                                                          d="M66.1 90.3l12.2-7-5.6-5.6-7 12.2c.2.1.3.3.4.4z"
                                                                          class="colorFFCD0A svgShape"></path>
                                                                      <path fill="#7d6c7c"
                                                                          d="M65.9 83.9l-.5 4.8c-.1 1.1.8 2 1.9 1.9l4.8-.5-6.2-6.2z"
                                                                          class="color7D6C7C svgShape"></path>
                                                                      <path fill="#5b4b57"
                                                                          d="M65.9 83.9l-.5 4.8c-.1.6.2 1.1.5 1.5l3.1-3.1-3.1-3.2z"
                                                                          class="color5B4B57 svgShape"></path>
                                                                      <path fill="#6b5969"
                                                                          d="M68 86l-2.2 3.9c.1.2.2.3.4.4l3.9-2.3-2.1-2z"
                                                                          class="color6B5969 svgShape"></path>
                                                                      <circle cx="84.1" cy="39.6" r="4.1" fill="#bed530"
                                                                          class="colorBED530 svgShape"></circle>
                                                                      <circle cx="68.2" cy="39.6" r="4.1" fill="#bed530"
                                                                          class="colorBED530 svgShape"></circle>
                                                                      <circle cx="52.4" cy="39.6" r="4.1" fill="#bed530"
                                                                          class="colorBED530 svgShape"></circle>
                                                                      <circle cx="36.5" cy="39.6" r="4.1" fill="#bed530"
                                                                          class="colorBED530 svgShape"></circle>
                                                                      <path fill="#545e70"
                                                                          d="M84.1 40.5c-1.1 0-1.9-.9-1.9-1.9v-10c0-1.1.9-1.9 1.9-1.9 1.1 0 1.9.9 1.9 1.9v10c.1 1.1-.8 1.9-1.9 1.9zM68.3 40.5c-1.1 0-1.9-.9-1.9-1.9v-10c0-1.1.9-1.9 1.9-1.9 1.1 0 1.9.9 1.9 1.9v10c0 1.1-.9 1.9-1.9 1.9zM52.4 40.6c-1.1 0-1.9-.9-1.9-1.9v-10c0-1.1.9-1.9 1.9-1.9 1.1 0 1.9.9 1.9 1.9v10c0 1-.9 1.9-1.9 1.9zM36.5 40.6c-1.1 0-1.9-.9-1.9-1.9v-10c0-1.1.9-1.9 1.9-1.9 1.1 0 1.9.9 1.9 1.9v10c0 1-.8 1.9-1.9 1.9z"
                                                                          class="color545E70 svgShape"></path>
                                                                  </svg></g>
                                                              </svg>
                                                          </div>
                                                          <div class="text-left">
                                                              <h4 class="fw-bold">Merket Analysis</h4>
                                                              <p class="mb-0">
                                                                 Pata Mtaani app will do a market analysis of your area of residence and, give the data back the vendors on the best products
                                                                 and services to sell.
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 col-md-12">
                                                   {/* <div class="card features main-features main-features-1 wow fadeInUp reveal revealleft"
                                                          data-wow-delay="0.1s"> */}
                                                      <div class="card features main-features main-features-10 wow fadeInUp revealleft"
                                                          data-wow-delay="0.1s">
                                                          <div class="bg-img mb-2 text-left">
                                                              <svg width="50" height="50"
                                                                  version="1.1"
                                                              >
                                                                  <defs id="SvgjsDefs1055"></defs>
                                                                  <g id="SvgjsG1056"><svg
                                                                      viewBox="0 0 128 128" width="50" height="50">
                                                                      <circle cx="64" cy="64" r="64" fill="#58e1ef"
                                                                          class="colorD9B9A9 svgShape"></circle>
                                                                      <path fill="#47d4e4"
                                                                          d="M71.4 127.6c29.4-3.4 52.7-26.7 56.1-56.1L74.8 18.6 51.9 31.2 31.2 47.4 18.6 74.8l52.8 52.8z"
                                                                          class="colorD6AB9A svgShape"></path>
                                                                      <path fill="#6b5969"
                                                                          d="M64 101.5c-20.7 0-37.5-16.8-37.5-37.5S43.3 26.5 64 26.5s37.5 16.8 37.5 37.5-16.8 37.5-37.5 37.5zm0-70.3c-18.1 0-32.8 14.7-32.8 32.8S45.9 96.8 64 96.8 96.8 82.1 96.8 64 82.1 31.2 64 31.2z"
                                                                          class="color6B5969 svgShape"></path>
                                                                      <circle cx="64" cy="28.8" r="14.8" fill="#ffffff"
                                                                          class="colorFFF svgShape"></circle>
                                                                      <path fill="#8663a7"
                                                                          d="M64 39.1c-5.6 0-10.2-4.6-10.2-10.2S58.4 18.7 64 18.7s10.2 4.6 10.2 10.2S69.6 39.1 64 39.1z"
                                                                          class="color8663A7 svgShape"></path>
                                                                      <circle cx="64" cy="99.2" r="14.8" fill="#ffffff"
                                                                          class="colorFFF svgShape"></circle>
                                                                      <path fill="#3d9c46"
                                                                          d="M64 109.4c-5.6 0-10.2-4.6-10.2-10.2S58.4 89 64 89s10.2 4.6 10.2 10.2-4.6 10.2-10.2 10.2z"
                                                                          class="color3D9C46 svgShape"></path>
                                                                      <circle cx="99.2" cy="64" r="14.8" fill="#ffffff"
                                                                          class="colorFFF svgShape"></circle>
                                                                      <path fill="#ee3e88"
                                                                          d="M99.2 74.2C93.6 74.2 89 69.6 89 64s4.6-10.2 10.2-10.2 10.2 4.6 10.2 10.2-4.6 10.2-10.2 10.2z"
                                                                          class="colorEE3E88 svgShape"></path>
                                                                      <circle cx="28.8" cy="64" r="14.8" fill="#ffffff"
                                                                          class="colorFFF svgShape"></circle>
                                                                      <path fill="#ffcd0a"
                                                                          d="M28.8 74.2c-5.6 0-10.2-4.6-10.2-10.2s4.6-10.2 10.2-10.2S39.1 58.4 39.1 64s-4.6 10.2-10.3 10.2z"
                                                                          class="colorFFCD0A svgShape"></path>
                                                                      <path fill="#ffffff"
                                                                          d="M98.4 61.8v1.9h2.5v1.5h-2.5v2.7h4.4v1.6h-7.4v-1.6h1.2v-2.7h-1.3v-1.5h1.3v-1.9c0-1.2.3-2.1.9-2.6.6-.5 1.4-.8 2.4-.8 1.3 0 2.3.6 2.9 1.7l-1.2 1c-.4-.7-.9-1-1.6-1-.5 0-.9.1-1.2.4s-.4.7-.4 1.3z"
                                                                          class="colorFFF svgShape"></path>
                                                                  </svg></g>
                                                              </svg>
                                                          </div>
                                                          <div class="text-left">
                                                              <h4 class="fw-bold">Seller and Buyer interaction</h4>
                                                              <p class="mb-0">
                                                              Pata Mtaani helps you buy and sell household products and services just within your area of residence and your immediate neigbors
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 col-md-12">
                                                   {/* <div class="card features main-features main-features-1 wow fadeInUp reveal revealleft"
                                                          data-wow-delay="0.1s"> */}
                                                      <div class="card features main-features main-features-9 wow fadeInUp revealleft"
                                                          data-wow-delay="0.1s">
                                                          <div class="bg-img mb-2 text-left">
                                                              <svg id="SvgjsSvg1156" width="50" height="50"
                                                                  version="1.1"

                                                              >
                                                                  <defs id="SvgjsDefs1157"></defs>
                                                                  <g id="SvgjsG1158"><svg
                                                                      viewBox="0 0 128 128" width="50" height="50">
                                                                      <circle cx="64" cy="64" r="64" fill="#f579a2"
                                                                          class="color1F68B0 svgShape"></circle>
                                                                      <path fill="#d6607b"
                                                                          d="M128 64c0-2.7-.2-5.3-.5-7.9l-21.8-21.8-84 58.7 34.5 34.5c2.6.3 5.2.5 7.8.5 35.3 0 64-28.7 64-64z"
                                                                          class="color2A519C svgShape"></path>
                                                                      <path fill="#ffffff"
                                                                          d="M101.8 95H26.2c-3.3 0-6-2.7-6-6V39c0-3.3 2.7-6 6-6h75.7c3.3 0 6 2.7 6 6v50c-.1 3.3-2.7 6-6.1 6z"
                                                                          class="colorFFF svgShape"></path>
                                                                      <path fill="#ffffff"
                                                                          d="M20.2 44.9V89c0 3.3 2.7 6 6 6h75.7c3.3 0 6-2.7 6-6V44.9H20.2z"
                                                                          class="colorFFF svgShape"></path>
                                                                      <path fill="#3c29de"
                                                                          d="M107.8 45v-6c0-3.3-2.7-6-6-6H26.2c-3.3 0-6 2.7-6 6v6h87.6z"
                                                                          class="colorFFCD0A svgShape"></path>
                                                                      <circle cx="28.7" cy="39" r="3.3" fill="#ffffff"
                                                                          class="colorFFF svgShape"></circle>
                                                                      <circle cx="28.7" cy="39" r="1.9" fill="#543bc1"
                                                                          class="colorF04D45 svgShape"></circle>
                                                                      <circle cx="37.3" cy="39" r="3.3" fill="#ffffff"
                                                                          class="colorFFF svgShape"></circle>
                                                                      <circle cx="37.3" cy="39" r="1.9" fill="#9c583d"
                                                                          class="color3D9C46 svgShape"></circle>
                                                                      <circle cx="46" cy="39" r="3.3" fill="#ffffff"
                                                                          class="colorFFF svgShape"></circle>
                                                                      <circle cx="46" cy="39" r="1.9" fill="#6b595d"
                                                                          class="color6B5969 svgShape"></circle>
                                                                      <path fill="#ffffff"
                                                                          d="M99.3 42.3H57.2c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3h42.1c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3z"
                                                                          class="colorFFF svgShape"></path>
                                                                      <path fill="#dfdecf"
                                                                          d="M101.8 50.4H26.2c-.3 0-.5.2-.5.5V89c0 .3.2.5.5.5h75.7c.3 0 .5-.2.5-.5V50.9c-.1-.3-.3-.5-.6-.5zM34.5 66.6H41v6.6h-6.5v-6.6zm-1 6.7h-6.8v-6.6h6.8v6.6zm8.5-6.7h6.5v6.6H42v-6.6zm36.5-1H72V59h6.5v6.6zm1-6.6H86v6.6h-6.5V59zM57 66.6h6.5v6.6H57v-6.6zm-1 6.7h-6.5v-6.6H56v6.6zm8.5-6.7H71v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H72v-6.6zm-1-1h-6.5V59H71v6.6zm-7.5 0H57V59h6.5v6.6zm-7.5 0h-6.5V59H56v6.6zm-7.5 0H42V59h6.5v6.6zm0 8.7v6.6H42v-6.6h6.5zm1 0H56v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H57v-6.6zm7.5 0H71v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H72v-6.6zm7.5 0H86v6.6h-6.5v-6.6zm0-1v-6.6H86v6.6h-6.5zm7.5-6.7h6.5v6.6H87v-6.6zm7.5 0h6.8v6.6h-6.8v-6.6zm0-1V59h6.8v6.6h-6.8zm-1 0H87V59h6.5v6.6zM87 58v-6.6h6.5V58H87zm-1 0h-6.5v-6.6H86V58zm-7.5 0H72v-6.6h6.5V58zM71 58h-6.5v-6.6H71V58zm-7.5 0H57v-6.6h6.5V58zM56 58h-6.5v-6.6H56V58zm-7.5 0H42v-6.6h6.5V58zM41 58h-6.5v-6.6H41V58zm0 1v6.6h-6.5V59H41zm-7.5 6.6h-6.8V59h6.8v6.6zm-6.8 8.7h6.8v6.6h-6.8v-6.6zm7.8 0H41v6.6h-6.5v-6.6zm6.5 7.6v6.6h-6.5v-6.6H41zm1 0h6.5v6.6H42v-6.6zm7.5 0H56v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H57v-6.6zm7.5 0H71v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H72v-6.6zm7.5 0H86v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H87v-6.6zm0-1v-6.6h6.5v6.6H87zm7.5-6.6h6.8v6.6h-6.8v-6.6zm6.8-16.3h-6.8v-6.6h6.8V58zm-67.8-6.6V58h-6.8v-6.6h6.8zm-6.8 30.5h6.8v6.6h-6.8v-6.6zm67.8 6.6v-6.6h6.8v6.6h-6.8z"
                                                                          class="colorCFD5DF svgShape"></path>
                                                                      <path fill="#fff591" d="M30.6 66.1h5.1V89h-5.1z"
                                                                          class="colorD7E14A svgShape"></path>
                                                                      <path fill="#9c583d" d="M40.9 61.6H46V89h-5.1z"
                                                                          class="color3D9C46 svgShape"></path>
                                                                      <path fill="#f5587b" d="M51.2 68.9h5.1V89h-5.1z"
                                                                          class="colorEE3E88 svgShape"></path>
                                                                      <path fill="#a76372" d="M61.5 61.6h5.1V89h-5.1z"
                                                                          class="color8663A7 svgShape"></path>
                                                                      <path fill="#c2633e" d="M92.3 69.6h5.1v19.5h-5.1z"
                                                                          class="color9AC23E svgShape"></path>
                                                                      <path fill="#543bc1" d="M71.7 54h5.1v35h-5.1z"
                                                                          class="colorF04D45 svgShape"></path>
                                                                      <path fill="#b0052b" d="M82 60.8h5.1V89H82z"
                                                                          class="color05B0A6 svgShape"></path>
                                                                  </svg></g>
                                                              </svg>
                                                          </div>
                                                          <div class="text-left">
                                                              <h4 class="fw-bold">Variety of Payment Methods</h4>
                                                              <p class="mb-0">
                                                                  We have more than nine (4) payment methods to and currency convertion capabilities.
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 col-md-12">
                                                   {/* <div class="card features main-features main-features-1 wow fadeInUp reveal revealleft"
                                                          data-wow-delay="0.1s"> */}
                                                      <div class="card features main-features main-features-12 mb-4 wow fadeInUp revealleft"
                                                          data-wow-delay="0.1s">
                                                          <div class="bg-img mb-2 text-left">
                                                              <svg width="50" height="50"
                                                                  viewBox="0 0 128 128">
                                                                  <circle cx="64" cy="64" r="64" fill="#F49C20" />
                                                                  <path fill="#EC7B24"
                                                                      d="M127.5 56.2l-30-30-7.4 8.2-21-21h-6.7l-5.5 4.9 5.5 27.2h17.9l-50.1 56 26 26c2.6.3 5.2.5 7.8.5 35.3 0 64-28.7 64-64 0-2.6-.2-5.2-.5-7.8z" />
                                                                  <path fill="#545E70"
                                                                      d="M91.3 104.8H36.7c-4.4 0-8-3.6-8-8V31.2c0-4.4 3.6-8 8-8h54.6c4.4 0 8 3.6 8 8v65.6c0 4.4-3.6 8-8 8z" />
                                                                  <path fill="#FFF" d="M34.7 29.3h58.7V94H34.7z" />
                                                                  <path fill="#CFD5DF"
                                                                      d="M87.8 32.7H40.1c0-2.9 1.2-5.6 3.1-7.5 1.9-1.9 4.6-3.1 7.5-3.1h6.1v-3.8c0-3.9 3.2-7.1 7.1-7.1 3.9 0 7.1 3.2 7.1 7.1v3.8h6.1c6 0 10.7 4.8 10.7 10.6z" />
                                                                  <path fill="#ACB2B9"
                                                                      d="M40.7 29.3c-.4 1.1-.6 2.2-.6 3.4h47.7c0-1.2-.2-2.3-.6-3.4H40.7z" />
                                                                  <circle cx="64" cy="18.1" r="3.6" fill="#EC7B24" />
                                                                  <path fill="#E6E8EB" d="M79.7 80.4h13.6L79.7 94.1z" />
                                                                  <path fill="#CFD5DF"
                                                                      d="M79.7 94.1l13.6-13.7v13.7M52.3 51.4H41.5c-.4 0-.8-.3-.8-.8V39.9c0-.4.3-.8.8-.8h10.8c.4 0 .8.3.8.8v10.8c-.1.4-.4.7-.8.7zm-10-1.5h9.3v-9.3h-9.3v9.3zM52.3 68.6H41.5c-.4 0-.8-.3-.8-.8V57.1c0-.4.3-.8.8-.8h10.8c.4 0 .8.3.8.8v10.8c-.1.4-.4.7-.8.7zm-10-1.5h9.3v-9.3h-9.3v9.3zM67.9 42.7h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.4.8-.8.8zM80.6 42.7h-8.9c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h8.9c.4 0 .8.3.8.8s-.4.8-.8.8zM87.8 42.7h-3.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h3.5c.4 0 .8.3.8.8s-.3.8-.8.8zM61.4 46h-4.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h4.5c.4 0 .8.3.8.8s-.4.8-.8.8zM73 46h-7.8c-.4 0-.8-.3-.8-.8s.3-.8.8-.8H73c.4 0 .8.3.8.8s-.4.8-.8.8zM87.8 46h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.3.8-.8.8zM67.9 49.3h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.4.8-.8.8zM77.7 49.3h-6c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h6c.4 0 .8.3.8.8s-.3.8-.8.8zM87.8 49.3h-6.3c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h6.3c.4 0 .8.3.8.8s-.3.8-.8.8zM67.9 59.9h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.4.8-.8.8zM80.6 59.9h-8.9c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h8.9c.4 0 .8.3.8.8s-.4.8-.8.8zM87.8 59.9h-3.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h3.5c.4 0 .8.3.8.8s-.3.8-.8.8zM61.4 63.2h-4.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h4.5c.4 0 .8.3.8.8s-.4.8-.8.8zM73 63.2h-7.8c-.4 0-.8-.3-.8-.8s.3-.8.8-.8H73c.4 0 .8.3.8.8s-.4.8-.8.8zM87.8 63.2h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.3.8-.8.8z" />
                                                                  <g>
                                                                      <path fill="#CFD5DF"
                                                                          d="M67.9 66.5h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.4.8-.8.8zM77.7 66.5h-6c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h6c.4 0 .8.3.8.8s-.3.8-.8.8zM87.8 66.5h-6.3c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h6.3c.4 0 .8.3.8.8s-.3.8-.8.8z" />
                                                                  </g>
                                                                  <path fill="#F04D45"
                                                                      d="M57.8 36.2c-1.3.2-2.5.7-3.6 1.5-1.1.7-2.1 1.6-2.9 2.5-.9.9-1.7 1.9-2.4 3-.3.4-.5.8-.8 1.2-.1-.1-.2-.2-.2-.3-.3-.4-.7-.7-1.2-1-.2-.1-.5-.3-.7-.4-.3-.1-.5-.2-.9-.2-.8-.1-1.5.5-1.6 1.4-.1.8.5 1.5 1.4 1.6h.2c.1 0 .2.1.3.1.2.1.4.3.6.4.2.2.4.4.5.6.2.2.3.5.4.8 0 .5.3 1 .8 1.1.6.2 1.3-.1 1.6-.7l.1-.4c.1-.2.2-.5.3-.8l.4-.8c.3-.5.5-1.1.8-1.6.6-1 1.2-2.1 1.9-3 .7-1 1.5-1.9 2.4-2.6.9-.8 1.9-1.4 3-1.7.2-.1.3-.2.3-.4-.3-.2-.5-.3-.7-.3zm-8.6 10.2zM57.8 54.9c-1.3.2-2.5.7-3.6 1.5-1.1.7-2.1 1.6-2.9 2.5-.9.9-1.7 1.9-2.4 3-.3.4-.5.8-.8 1.2-.1-.1-.2-.2-.2-.3-.3-.4-.7-.7-1.2-1-.2-.1-.5-.3-.7-.4-.3-.1-.5-.2-.9-.2-.8-.1-1.5.5-1.6 1.4-.1.8.5 1.5 1.4 1.6h.2c.1 0 .2.1.3.1.2.1.4.3.6.4.2.2.4.4.5.6.2.2.3.5.4.8 0 .5.3 1 .8 1.1.6.2 1.3-.1 1.6-.7l.1-.4c.1-.2.2-.5.3-.8l.4-.8c.3-.5.5-1.1.8-1.6.6-1 1.2-2.1 1.9-3 .7-1 1.5-1.9 2.4-2.6.9-.8 1.9-1.4 3-1.7.2-.1.3-.2.3-.4-.3-.2-.5-.4-.7-.3zm-8.6 10.2z" />
                                                              </svg>
                                                          </div>
                                                          <div class="text-left">
                                                              <h4 class="fw-bold">Free Delivery</h4>
                                                              <p class="mb-0">
                                                                  Pata Mtaani has completely catered all the delivery needs.
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>




                                 






                                  <div class="">
                                  <div class="container">
                                      <div class="testimonial-owl-landing buynow-landing revealrotate">
                                          <div class="row pt-6">
                                              <div class="col-md-12">
                                                  <div class="card bg-transparent">
                                                      <div class="card-body pt-5 px-7">
                                                          <div class="row">
                                                              <div class="col-lg-9">
                                                                  <h1 class="fw-semibold text-white">Get Started With YoteOrder.
                                                                    </h1>
                                                                  <p class="text-white">Sed ut perspiciatis unde omnis
                                                                      iste natus error sit voluptatem accusantium
                                                                      doloremque laudantium, totam rem aperiam, eaque ipsa
                                                                      quae ab illo inventore veritatis et quasi architecto
                                                                      beatae vitae dicta sunt
                                                                      explicabo.
                                                                  </p>
                                                              </div>
                                                              <div class="col-lg-3 text-end my-auto">
                                                                  <a href="#"
                                                                      target="_blank"
                                                                      class="btn btn-pink w-lg pt-2 pb-2"><i
                                                                          class="fe fe-shopping-cart me-2"></i>Start Now
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>      





        </div>

        </div>

        </div>
        </div>



</div>

<div class="demo-footer">
<div class="container">
    <div class="row">
        <div class="card">
            <div class="card-body">
                <div class="top-footer">
                <div class="row">

                {/* <div class="col-lg-4 col-sm-12 col-md-12 reveal revealleft"> */}
                    <div class="col-lg-4 col-sm-12 col-md-12 revealleft">
                        <h6>About</h6>
                        <p>
                        PataMtaani is a platfom developed to make it easy for residents to buy and sell any products within their area of residents.
                        </p>
                        <p class="mb-5 mb-lg-2">PataMtaani enables services prividers such as cleaners,Beauty therapists,Kinyozi,Automotive etc..sell their services
                        to the local population.
                        </p>
                    </div>
                    <div class="col-lg-2 col-sm-6 col-md-4 revealleft">
                        <h6>Pages</h6>
                        <ul class="list-unstyled mb-5 mb-lg-0">
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Customer Care</a></li>
                           
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-sm-6 col-md-4 revealleft">
                        <h6>Information</h6>
                        <ul class="list-unstyled mb-5 mb-lg-0">
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Contact US</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Services</a></li>
                          
                            <li><a href="#">Terms and Services</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-sm-12 col-md-4 revealleft">
                        <div class="">
                            <a href="#"><img loading="lazy" alt="" class="logo-2 mb-3"
                                    src="assets/images/brand/logo_new.png"/></a>
                           
                            <p>PataMtaani empowers all small-scale services providers such as cleaners,Beauty therapists,Kinyozi,Automotive etc..sell their services
                            to the local population.</p>
                            <div class="form-group">
                                
                            </div>
                        </div>
                        <div class="btn-list mt-6">
                            <button type="button" class="btn btn-icon rounded-pill"><i
                                    class="fa fa-facebook"></i></button>
                            <button type="button" class="btn btn-icon rounded-pill"><i
                                    class="fa fa-youtube"></i></button>
                            <button type="button" class="btn btn-icon rounded-pill"><i
                                    class="fa fa-twitter"></i></button>
                            <button type="button" class="btn btn-icon rounded-pill"><i
                                    class="fa fa-instagram"></i></button>
                        </div>
                        <hr/>
                    </div>
                </div>
                </div>
                <footer class="main-footer px-0 pb-0 text-center">
                <div class="row ">
                    <div class="col-md-12 col-sm-12">
                        Copyright © <span id="year"></span> <a href="javascript:void(0)">PataMtaani</a>.
                        Designed by <a
                            href="javascript:void(0)"> Frankcode20 Ent </a> All rights reserved.
                    </div>
                </div>
            </footer>
            </div>
        </div>
    </div>
</div>
</div>
</div>
<a href="#top" id="back-to-top"><i class="fa fa-angle-up"></i></a>


<Helmet>



<script src="/assets/js/jquery.min.js"></script>


<script src="/assets/plugins/bootstrap/js/popper.min.js"></script>
<script src="/assets/plugins/bootstrap/js/bootstrap.min.js"></script>


<script src="/assets/js/jquery.sparkline.min.js"></script>


<script src="/assets/js/sticky.js"></script>


<script src="/assets/js/circle-progress.min.js"></script>


<script src="/assets/plugins/peitychart/jquery.peity.min.js"></script>
<script src="/assets/plugins/peitychart/peitychart.init.js"></script>


<script src="/assets/plugins/sidebar/sidebar.js"></script>


<script src="/assets/plugins/p-scroll/perfect-scrollbar.js"></script>
<script src="/assets/plugins/p-scroll/pscroll.js"></script>
<script src="/assets/plugins/p-scroll/pscroll-1.js"></script>


<script src="/assets/plugins/chart/Chart.bundle.js"></script>
<script src="/assets/plugins/chart/rounded-barchart.js"></script>
<script src="/assets/plugins/chart/utils.js"></script>


<script src="/assets/plugins/select2/select2.full.min.js"></script>


<script src="/assets/plugins/datatable/js/jquery.dataTables.min.js"></script>
<script src="/assets/plugins/datatable/js/dataTables.bootstrap5.js"></script>
<script src="/assets/plugins/datatable/dataTables.responsive.min.js"></script>


<script src="/assets/js/apexcharts.js"></script>
<script src="/assets/plugins/apexchart/irregular-data-series.js"></script>


<script src="/assets/plugins/flot/jquery.flot.js"></script>
<script src="/assets/plugins/flot/jquery.flot.fillbetween.js"></script>
<script src="/assets/plugins/flot/chart.flot.sampledata.js"></script>
<script src="/assets/plugins/flot/dashboard.sampledata.js"></script>

<script src="/assets/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js"></script>
<script src="/assets/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>

<script src="/assets/plugins/sidemenu/sidemenu.js"></script>






<script src="/assets/plugins/bootstrap5-typehead/autocomplete.js"></script>
<script src="/assets/js/typehead.js"></script>


<script src="/assets/js/index1.js"></script>


<script src="/assets/js/themeColors.js"></script>

<script src="/assets/js/custom.js"></script>




</Helmet>

    </div>
  )
}

export default OrderedProduct