import React from 'react'

import {useEffect,useState,useContext} from 'react';

import {useParams} from "react-router-dom"


//import API from 'API';

import API from '../../../services';


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

  
function truncate(number, index = 2) {
    // cutting the number
  return +number.toString().slice(0, (number.toString().indexOf(".")) + (index + 1));
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

      const [productsListWide, setProductsListWide] = useState([]);
  
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

      const [foundRelated, setFoundRelated] = useState(false);

      

      

      const[lng_new,setlng_new]=useState('')


      
    
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





 
   

  // API.get(`product/search/${pname}`).then((response) => {
  
    API.get(`product/search_geoloc/${pname}/${lat}/${lng}`).then((response) => {

      // setShowP(true);


   
         
            setTimeout(() => {
                if(response.data.notfound){
                    setProductFound(true)
                    
                     console.log(response.data.notfound)
            
                    }
                setProductsList(response.data.item_list);

               // console.log("THIS IS YOUR SEARCH DETAILS "+response.data.item_list)

                setImagePath(response.data.imagePath)


             

               // setShowP(false);

    
              

               // setSeller_name(response.data.Users);
                setIsDivLoading(false)   // Hide loading screen 
               // toast.info('Product saved successfully');
              // history(`/ordered-product/${pname}/${lat}/${lng}/#Features`)
            
             
            }, 2000);

            //setSeller_name(response.data.Users.first_name)
            
        }).catch(() => {
            setErrorMessage("Unable to fetch your search.Make sure you have internet connection.");
            setIsDivLoading(false);
         });


         loadGlobalSellers(pname)


        
  
  
  },[position]);




  const loadGlobalSellers = (pname_)  => {

    API.get(`product/search_geoloc_wide/${pname_}/${lat}/${lng}`).then((response) => {



        // if(response.data.notfound){
        //     setProductFound(true)
            
        //      console.log(response.data.notfound)
    
        //     }

        if(response.data){
            setFoundRelated(true)
        }
        setProductsListWide(response.data.item_list);

       // console.log("THIS IS YOUR SEARCH DETAILS "+response.data.item_list)

        setImagePath(response.data.imagePath)


    }).catch(() => {
        setErrorMessage("Unable to fetch your search.Make sure you have internet connection.");
        //setIsDivLoading(false);
     });
   
  

}




  
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
  
   //API.post("https://tunepapi.herokuapp.com/customer",data).then((response)=>{
  
  
    API.post('users',user_details).then((response)=>{
  
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

  API.post("users/login", data).then((rense) => {
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

    API.post('customer',customer_details).then((res)=>{
    
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
    API.post('order',order_details).then((res_b)=>{
    
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
API.post('order',order_details).then((res_b)=>{

// console.log("The response is"+res_b.data)

setorderId(res_b.data.id)



console.log("THE  ORDER ID IS "+res_b.data.id)

console.log("THE  ORDER ID TWO IS "+randomNo)

})*/



      if(rense.data.role=="Customer"){


        API.get('users/auth', { headers: { accessToken: localStorage.getItem("accessToken") }}).then((res_auth) => {

        setUserId(res_auth.data.id)


    console.log("THE  USER ID IS "+res_auth.data.id)



    // const customer_details={
    //     name:name,
    //    email:email,
    //    phone_no:phone_no,
    //    BusinessId:businessId,
    //    UserId:res_auth.data.id,
       
    //   }

    // API.post('customer',customer_details).then((res)=>{
    
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
//             API.post('order',order_details).then((res_b)=>{

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
    
     //API.post("https://tunepapi.herokuapp.com/customer",data).then((response)=>{
    
    
      API.post('users',user_details).then((response)=>{
    
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
      
  
  
  
  
        API.post('customer',customer_details).then((res)=>{
    
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
  
  
        
  //       API.post('booking',appointment).then((res_b)=>{
    
  //       console.log("The response is"+res_b.data)
    
  //       setBookingId(res_b.data.id)
    
        
    
    
  //      // console.log("THE NEW CUSTOMER ID IS"+customerId)
     
       
  //   })
    
      
    
       // console.log("THE NEW CUSTOMER ID IS"+customerId)
     
       
    })
  
    const data = { username:email, password: phone_no };
  
    API.post("users/login", data).then((rense) => {
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
  
     
  
  
            
  
  
              API.get('users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((res_auth) => {
  
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
  
  
                            API.post('order',order_details).then((res_b)=>{
    
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
    setFoundRelated(false)
    setProductFound(false)


      //API.get("customer/mycustomers").then((response) => {
        API.get('business/byId/'+bId).then((response) => {

        console.log("THE BUSS NAME IS "+response.data.business_name)

        setbusiness_name(response.data.business_name)

        setCloudinaryUrl(response.data.cloudinary_url)

        setBusiness_location(response.data.location)

        setBusiness_city(response.data.city)

        setBusiness_contacts(response.data.contacts)
            

            })



            //API.get("customer/mycustomers").then((response) => {
        API.get('product/byId/'+pId).then((response) => {

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
            

        {productsList?.map((value, key) => {
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



            {productsListWide?.map((value, key) => {
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

      {productFound && !foundRelated &&

      

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
                 in your area.However, your search has been captured and our team will enroll vendors on your area within 72 hours.
                 <br/>
               

                 <div class="text-center">
                            <a class="btn btn-secondary mt-5 mb-5" onClick={backHome}> <i class="fa fa-long-arrow-left"></i> Back to Home </a>
                        </div>

             
            </div>
        </div>
    </div>

    }



    {!productFound && foundRelated &&

      

        <div class="col-md-12  col-xl-12">
        <div class="card border">
            <div class="card-header">
                <h3 class="card-title card-alert alert alert-success mb-0 ">Found universal sellers</h3>
                <div class="card-options">
                    <a href="javascript:void(0)" class="card-options-collapse" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                    <a href="javascript:void(0)" class="card-options-remove" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a>
                </div>
            </div>
            
            <div class="card-body">
                Your search for  <span class="tag tag-rounded tag-icon tag-orange"><i class="fe fe-product"></i>{pname}<a href="javascript:void(0)" class="tag-addon tag-addon-cross tag-orange"><i class="fe fe-x text-white m-1"></i></a></span>
                found universal sellers.
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
                            href="javascript:void(0)">FrankCode Ltd</a> All rights reserved.
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