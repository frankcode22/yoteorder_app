import React from 'react'
import { useEffect,useState,useContext} from 'react';



import axios from 'axios';

import { Helmet } from "react-helmet";

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../../helpers/AuthContext'
import SidebarS from './SidebarS'
import TopbarS from './TopbarS'

import { useNavigate } from "react-router-dom"

function AccountSetting() {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [product_description, setProduct_description] = useState("");
    const [price, setPrice] = useState("");

    const [email, setEmail] = useState("");
    const [phone_no, setPhone_no] = useState("");

    const [buss_contacts, setbuss_contacts] = useState("");




    const [business_name, setbusiness_name] = useState("");
    const [business_type, setbusiness_type] = useState("");
  
    const [business_description, setbusiness_description] = useState("");
  
    const [industry, setindustry] = useState("");
    const [location, setlocation] = useState("");

    const [quantity, setQuantity] = useState("");

    const [geo_location, setGeo_location] = useState("");

    const [userId, setUserId] = useState("");

    const [unit_of_measure, setunit_of_measure] = useState("");


    const [city, setCity] = useState("");
    const [state, setState] = useState("");
  
    const [country, setCountry] = useState("");


    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [address_line_1, setaddress_line_1] = useState("");
    const [address_line_2, setaddress_line_2] = useState("");




    const [businessId, setbusinessId] = useState('');

    const[openTime,setOpenTime]=useState('')

    const[closeTime,setCloseTime]=useState('')

    const[serviceId,setServiceId]=useState('')


    const [servicesList, setServicesList] = useState([]);

    const [staffList, setStaffList] = useState([]);


    const[staffId,setStaffId]=useState('')
    const [staff_name, SetStaff_name] = useState("");



    const [service_name, set_service_name] = useState("");
    const [service_type, set_service_type] = useState("");
    const [service_cost, set_service_cost] = useState("");

    const [description, set_description] = useState("");
  

    const [postal_code, setPostal_code] = useState("");


  
      const [showingInfoWindow, setShowingInfoWindow] = useState(false);

      const [activeMarker, setActiveMarker] = useState({});
      const [selectedPlace, setSelectedPlace] = useState({});

      const [lat, setLat] = useState(null);
      const [lng, setLng] = useState(null);

      const [loclat, setLoclat] = useState(null);
      const [status, setStatus] = useState(null);
  
  
    const [address, setAddress] = React.useState("");

    
    const [showErrorAlert,setShowErrorAlert] = useState(false);


    const [isBusinessSet,setIsBusinessSet] = useState(false);



    const [customersList, setCustomersList] = useState([]);

  
    const [productsList, setProductsList] = useState([]);

    const [errorMessage, setErrorMessage] = useState("");

    const [isDivLoading, setIsDivLoading] = useState(false);

    const [isLoading,setLoading]=useState(false);


    const [mapCenter, setMapCenter] = useState({
      lat: 0,
      lng: 0
  
  });


  let history = useNavigate();


  const [bussSetup,setBussSetup]=useState(false);

  const [showSetUpError,setShowSetUpError]=useState(false);

  const [showServicesDiv,setShowServicesDiv]=useState(false);

  const [showBusinessSetupDiv,setShowBusinessSetupDiv]=useState(true);



  useEffect(()=>{



     //axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
     axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

        setUserId(response.data.id)
  
  
       })


       axios.get('https://yoteorder-server.herokuapp.com/users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
        if(response.data!=null){

          setIsBusinessSet(true)
    
          setbusinessId(response.data.id);

          setlocation(response.data.location)

          setServicesList(response.data.Services);

          setStaffList(response.data.Staffs);

          setbusiness_name(response.data.business_name);

          setbuss_contacts(response.data.contacts)

          setBussSetup(true);
      
        
      
        }
        else{
      
          setIsBusinessSet(false)
          setbusinessId(0)
          setBussSetup(false);
          setbusiness_name('nobuzz')
        }
    
        
         })
    
    
    
           //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
          axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
          setCustomersList(response.data);
          })
    

       




},[]);



const buss_data={

    business_name:business_name,
    business_type:industry,
    industry:industry,
    location:location,
    contacts:buss_contacts,

    address_line_1:address_line_1,
    latitude:latitude,
    longitude:longitude,
    city:city,
    state:state,
    country:country,
    status:status,
    UserId:userId,
   
}
 



    const saveBusinessInfor = ()  => {
        setLoading(true);
    
         //axios.post("https://yoteorder-server.herokuapp.com/business",buss_data).then((response)=>{
        
        axios.post("https://yoteorder-server.herokuapp.com/business/bussinfor",buss_data).then((response)=>{
    
        console.log("The response is"+response.data)


        console.log("START tIME"+openTime)


        console.log("END TIME"+closeTime)


        console.log("THE BUSINESS ID IS "+response.data.id)

        setbusinessId(response.data.id)

    
           
            setTimeout(() => {
                setLoading(false);
                toast.success('Saved');
                setIsBusinessSet(true)
            }, 500);
         
           //  history("/dashboard");
          
           
        })
    
    }



  const data={
    name:name,
    type:type,
    product_description:product_description,
    price: price,
    quantity:quantity,
    geo_location:address_line_2,
    unit_of_measure:unit_of_measure,
    latitude:lat,
    longitude:lng,
    UserId:userId,
      
  }


  
  const addDetails = ()  => {
    setLoading(true);

 //axios.post("https://kilimomazaoapi-dmi-cyber.herokuapp.com/product",data).then((response)=>{
    
  axios.post("https://yoteorder-server.herokuapp.com/product",data).then((response)=>{
     

    console.log("The response is"+response.data)

       
        setTimeout(() => {
            setLoading(false);
            toast.info('Product saved successfully');
        }, 3000);
     
       //  history("/dashboard");
      
       
    })

}

const service_data={

    service_name:service_name,
    service_type:service_type,
    description:description,
    service_cost:service_cost,
    BusinessId:businessId,
    
      
  }




  const addService = ()  => {
    setLoading(true);

    if(businessId==0){

      setTimeout(() => {
        setLoading(false);
        toast.error('You must Have a business');
    }, 1000);
    
    }
    else{

    // axios.post("https://yoteorder-server.herokuapp.com/service",service_data).then((response)=>{

     
    
    axios.post("https://yoteorder-server.herokuapp.com/service",service_data).then((response)=>{

      console.log("The response is"+response.data)

      setServicesList([
        ...servicesList,
        {
    service_name:service_name,
    service_type:service_type,
    description:description,
    service_cost:service_cost,
    BusinessId:businessId,
  
        },
      ]);

  

       
        setTimeout(() => {
            setLoading(false);
            toast.info('Service saved');
        }, 1000);
     
       //  history("/dashboard");
      
       
    })

  }

}



const showStaffSection=()=>{

  setShowErrorAlert(true)
  setShowServicesDiv(false)
  setShowBusinessSetupDiv(false)
}



const showServicesSection=()=>{

  setShowErrorAlert(false)
  setShowBusinessSetupDiv(false)
  setShowServicesDiv(true)
}



const showBusinessSetUpSection=()=>{

  setShowErrorAlert(false)
  setShowBusinessSetupDiv(true)
  setShowServicesDiv(false)
  
}





const staff_data={
  staff_name:staff_name,

  email:email,
  phone_no:phone_no,
  BusinessId:businessId,

}



const addStaff = ()  => {
  setLoading(true);

 
  //  axios.post("https://yoteorder-server.herokuapp.com/staff",staff_data).then((response)=>{

      axios.post("https://yoteorder-server.herokuapp.com/staff",staff_data).then((response)=>{


      setStaffList([
        ...staffList,
        {
          staff_name:staff_name,

          email:email,
          phone_no:phone_no,
        },
      ]);
  


  console.log("The response is"+response.data)

     
      setTimeout(() => {
          setLoading(false);
          toast.info('Staff Added successfully');
      }, 3000);
   
     //  history("/dashboard");
    
     
  })

}


const openSelectedService=(sId)=>{

  //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
   axios.get('https://yoteorder-server.herokuapp.com/service/getbyId/'+sId).then((response) => {

      // console.log("THE SERVICE NAME IS "+response.data.service_name)

       setServiceId(sId)
       set_service_name(response.data.service_name)
       set_service_type(response.data.service_type)

       set_service_cost(response.data.service_cost)
       set_description(response.data.description)

       
           

           })



   }


   const updateService=()=>{

    setLoading(true)

    const data={
      sId:serviceId,
      service_name:service_name,
      service_type:service_type,
      description:description,
      service_cost:service_cost,
      BusinessId:businessId,
          
      }

     
    axios.put('https://yoteorder-server.herokuapp.com/service/update_service/'+serviceId,data).then((res_b)=>{

        //console.log("THE ACTUAL ID IS "+actualId)
        
       // setorderId(res_b.data.id)
        
        
        
        console.log("THE  SERVICE ID IS "+res_b.data.id)
        
       // console.log("THE  ORDER ID TWO IS "+randomNo)



       axios.get('https://yoteorder-server.herokuapp.com/users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
        if(response.data!=null){

        
          setServicesList(response.data.Services);
    
      
        }
       
         })

   

    
    
        setTimeout(() => {
            setLoading(false);
            toast.success("Service Updated")
        }, 3000);
        
        })

}


const openSelectedStaff=(sId)=>{

  //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
   axios.get('https://yoteorder-server.herokuapp.com/staff/getbyId/'+sId).then((response) => {

       console.log("THE Staff NAME IS "+response.data.service_name)

       setStaffId(sId)
       SetStaff_name(response.data.staff_name)
       setEmail(response.data.email)

       setPhone_no(response.data.phone_no)
      // set_description(response.data.description)

       
           

           })



   }


   const updateStaff=()=>{

    setLoading(true)

   

      const staff_data={
        staffId:staffId,
        staff_name:staff_name,
        email:email,
        phone_no:phone_no,
        BusinessId:businessId,
      
      }

     
    axios.put('https://yoteorder-server.herokuapp.com/staff/updatestaff/'+staffId,staff_data).then((res_b)=>{

        //console.log("THE ACTUAL ID IS "+actualId)
        
       // setorderId(res_b.data.id)
        
        
        
        console.log("THE  Staff ID IS "+res_b.data.id)
        
       // console.log("THE  ORDER ID TWO IS "+randomNo)


       axios.get('https://yoteorder-server.herokuapp.com/users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
        if(response.data!=null){

        
          setStaffList(response.data.Staffs);
    
      
        }
       
         })

   

    
    
        setTimeout(() => {
            setLoading(false);
            toast.success("Staff Updated")
        }, 3000);
        
        })

}




  return (
    <div class="app sidebar-mini ltr">


    <div id="global-loader">
    <img src="assets/images/loader.svg" class="loader-img" alt="Loader"/>
    </div>

    
    <div class="page">
<div class="page-main">





<TopbarS></TopbarS>


<SidebarS></SidebarS>




<div class="main-content app-content mt-0">
<div class="side-app">

  
    <div class="main-container container-fluid">

       
        <div class="page-header">
            <h1 class="page-title">Email-Compose</h1>
            <div>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Pages</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Email-Compose</li>
                </ol>
            </div>
        </div>

        
        {!isBusinessSet &&
                    
          <div class="alert alert-danger" role="alert">
          You need to set up your business profile and location.Kindly do so!
      </div>
      }
       
        <div class="row">
            <div class="col-xl-3">
                <div class="card">
                    <div class="list-group list-group-transparent mb-0 mail-inbox pb-3">
                        <div class="mt-4 mb-4 mx-4 text-center">
                        <div class="col-sm-6 col-md-6 col-xl-3">
                       

                       
                    </div>
                            <a href="#" class="btn btn-primary btn-lg d-grid">Business</a>
                            
                        </div>
                        <a href="#" onClick={showBusinessSetUpSection}   class="list-group-item d-flex align-items-center active mx-4">
                            <span class="icons"><i class="side-menu__icon fe fe-home"></i></span> My Business <span class="ms-auto badge bg-secondary bradius">14</span>
                           
                        </a>

                        <a class="list-group-item d-flex align-items-center mx-4" href='#' onClick={showServicesSection}>
                        <span><i class="fe fe-calendar me-1"></i></span>Services
                        
                         </a>
 
 
                         <a class="list-group-item d-flex align-items-center mx-4" href='#' onClick={showStaffSection}>
                         <span><i  class="fe fe-user me-1"></i></span>Staff
                         
                          </a>
                        <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                            <span class="icons"><i class="ri-mail-open-line"></i></span> Drafts
                        </a>

                        
                        <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                            <span class="icons"><i class="ri-star-line"></i></span> Starred <span class="ms-auto badge bg-success bradius">03</span>
                        </a>

                        <a class="btn btn-primary off-canvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <span class="icons"><i class="ri-star-line"></i></span> Products <span class="ms-auto badge bg-success bradius">03</span>
                        
                        </a>

                       


                       
                       
                        
                        <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                            <span class="icons"><i class="ri-price-tag-3-line"></i></span> Tags
                        </a>
                        <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                            <span class="icons"><i class="ri-mail-send-line"></i></span> Sent Mail
                        </a>
                        <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                            <span class="icons"><i class="ri-delete-bin-line"></i></span> Trash
                        </a>
                    </div>
                   
                </div>
            </div>
            {showBusinessSetupDiv && <div class="col-xl-9">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Compose new message</h3>
                </div>
                <div class="card-body">



                
                {isBusinessSet &&
                  <div class="card border p-0 shadow-none">
                  <div class="card-body">
                      <div class="d-flex">
                          <div class="media mt-0">
                              <div class="media-user me-2">
                                  <div class=""><img alt="" class="rounded-circle avatar avatar-md" src="assets/images/users/16.jpg"/></div>
                              </div>
                              <div class="media-body">
                                  <h6 class="mb-0 mt-1">{business_name}</h6>
                                  <small class="text-muted">just now</small>
                              </div>
                          </div>
                          <div class="ms-auto">
                              <div class="dropdown show">
                                  <a class="new option-dots" href="JavaScript:void(0);" data-bs-toggle="dropdown">
                                      <span class=""><i class="fe fe-more-vertical"></i></span>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                      <a class="dropdown-item" href="javascript:void(0)">Edit Post</a>
                                      <a class="dropdown-item" href="javascript:void(0)">Delete Post</a>
                                      <a class="dropdown-item" href="javascript:void(0)">Personal Settings</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="mt-4">
                          <h4 class="fw-semibold mt-3">There is nothing more beautiful.</h4>
                          <p class="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                          </p>
                      </div>
                  </div>
                  <div class="card-footer user-pro-2">
                      <div class="media mt-0">
                          <div class="media-user me-2">
                              <div class="avatar-list avatar-list-stacked">
                                  <span class="avatar brround" style={{backgroundImage: 'url(assets/images/users/12.jpg)'}}></span>
                                  <span class="avatar brround" style={{backgroundImage: 'url(assets/images/users/2.jpg)'}}></span>
                                  <span class="avatar brround" style={{backgroundImage: 'url(assets/images/users/9.jpg)'}}></span>
                                  <span class="avatar brround" style={{backgroundImage: 'url(assets/images/users/2.jpg)'}}></span>
                                  <span class="avatar brround" style={{backgroundImage: 'url(assets/images/users//4.jpg)'}}></span>
                                  <span class="avatar brround text-primary">+28</span>
                              </div>
                          </div>
                          <div class="media-body">
                              <h6 class="mb-0 mt-2 ms-2">10 buyers like your business</h6>
                          </div>
                          <div class="ms-auto">
                              <div class="d-flex mt-1">
                                  <a class="new me-2 text-muted fs-16" href="JavaScript:void(0);"><span class=""><i class="fe fe-heart"></i></span></a>
                                  <a class="new me-2 text-muted fs-16" href="JavaScript:void(0);"><span class=""><i class="fe fe-message-square"></i></span></a>
                                  <a class="new text-muted fs-16" href="JavaScript:void(0);"><span class=""><i class="fe fe-share-2"></i></span></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
                
                
                
                }

                {isBusinessSet &&
                  <div class="row">


                  <div class="col-xl-6 col-md-12">
                  <div class="card m-b-20 border p-0 shadow-none">
                      <div class="card-header">
                          <h3 class="card-title">Business Contacts</h3>
                          <div class="card-options">
                              <a href="javascript:void(0)" class="card-options-collapse" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                              <a href="javascript:void(0)" class="card-options-remove" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a>
                          </div>
                      </div>
                      <div class="card-body">
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
                          <strong>{location}</strong>
                      </div>
                  </div>
                  <div class="d-flex align-items-center mb-3 mt-3">
                      <div class="me-4 text-center text-primary">
                          <span><i class="fe fe-phone fs-20"></i></span>
                      </div>
                      <div>
                          <strong>{buss_contacts} </strong>
                      </div>
                  </div>
                  <div class="d-flex align-items-center mb-3 mt-3">
                      <div class="me-4 text-center text-primary">
                          <span><i class="fe fe-mail fs-20"></i></span>
                      </div>
                      <div>
                          <strong>{email}</strong>
                      </div>
                  </div>
                      </div>
                  </div>
              </div>



              


              
              <div class="col-xl-6 col-md-12">
              <div class="card d-flex m-b-20 border p-0 shadow-none">
                  <div class="card-header">
                      <h3 class="card-title">Customers</h3>
                      <div class="card-options">
                          <a class="text-gray" href="javascript:void(0)">
                              <i class="mdi mdi-refresh"></i>
                          </a>
                          <a class="text-gray" href="javascript:void(0)">
                              <i class="mdi mdi-bookmark-outline"></i>
                          </a>
                          <a class="text-gray" href="javascript:void(0)">
                              <i class="mdi mdi-dots-vertical"></i>
                          </a>
                      </div>
                  </div>
                  <div class="card-body">
                  <div class="">
                  <div class="media overflow-visible">
                      <img class="avatar brround avatar-md me-3" src="../assets/images/users/18.jpg" alt="avatar-img"/>
                      <div class="media-body valign-middle mt-2">
                          <a href="javascript:void(0)" class=" fw-semibold text-dark">John Paige</a>
                          <p class="text-muted mb-0">johan@gmail.com</p>
                      </div>
                      <div class="media-body valign-middle text-end overflow-visible mt-2">
                          <button class="btn btn-sm btn-primary" type="button">Follow</button>
                      </div>
                  </div>
                  <div class="media overflow-visible mt-sm-5">
                      <span class="avatar cover-image avatar-md brround bg-pink me-3">LQ</span>
                      <div class="media-body valign-middle mt-2">
                          <a href="javascript:void(0)" class="fw-semibold text-dark">Lillian Quinn</a>
                          <p class="text-muted mb-0">lilliangore</p>
                      </div>
                      <div class="media-body valign-middle text-end overflow-visible mt-1">
                          <button class="btn btn-sm btn-secondary" type="button">Follow</button>
                      </div>
                  </div>
                  <div class="media overflow-visible mt-sm-5">
                      <img class="avatar brround avatar-md me-3" src="../assets/images/users/2.jpg" alt="avatar-img"/>
                      <div class="media-body valign-middle mt-2">
                          <a href="javascript:void(0)" class="text-dark fw-semibold">Harry Fisher</a>
                          <p class="text-muted mb-0">harryuqt</p>
                      </div>
                      <div class="media-body valign-middle text-end overflow-visible mt-1">
                          <button class="btn btn-sm btn-danger" type="button">Follow</button>
                      </div>
                  </div>
               
              </div>
                  </div>
              </div>
          </div>
                  
                  
                  
                  
                  
                  
                  
                  </div>}



                  
                 {!isBusinessSet && 
                  <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="row">
                        <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-first-name">Business Name</label>
                        <div class="col-sm-9">
                          <input type="text" id="formtabs-first-name" class="form-control" 
                          
                          onChange={(event) => {
                              setbusiness_name(event.target.value);
                            }}
                          
                          
                          placeholder="Eg. Edith Salon" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                      
                        <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-last-name">Business Description</label>
                        <div class="col-sm-9">
                        <textarea id="basic-icon-default-message" class="form-control" placeholder="My business deals with all household items" aria-label="Hi, My business deals with beauty services?" 
                        
                        onChange={(event) => {
                          setbusiness_description(event.target.value);
                        }}
          
                        aria-describedby="basic-icon-default-message2"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-country">County</label>
                        <div class="col-sm-9">
                          <select id="formtabs-country" class="select2 form-select"
                          
                          onChange={(event) => {
                              setCity(event.target.value);
                            }}
          
                          
                          data-allow-clear="true">
                            <option value="">Select</option>
                            <option value="Nairobi">Nairobi</option>
                            <option value="Kiambu">Kiambu</option>
                            <option value="Machakos">Machakos</option>
                            <option value="Kakuru">Kakuru</option>
                            <option value="Makueni">Makueni</option>
                            <option value="Nyeri">Nyeri</option>
                            
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 select2-primary">
                      <div class="row">
                        <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-language">Industry</label>
                        <div class="col-sm-9">
                          <select id="formtabs-language" class="select2 form-select"
          
          
                          onChange={(event) => {
                              setindustry(event.target.value);
                            }}
                          
                          
                          multiple>
                            <option value="Eateries" selected>Eateries</option>

                            <option value="Domestic-Products" selected>Domestic Products</option>

                            <option value="Wines-Spirits">Drinks/Wines/Spirts/Alcohol</option>

                            <option value="Drinks">Drinks</option>
                         
                            <option value="Beauty">Beauty</option>
                            <option value="Education">Education</option>
                            <option value="Automotive">Wellbeing</option>
                            <option value="pt">Automotive</option>
                            <option value="home care">Home Care</option>
                            <option value="Maintenance">Maintenance</option>
                            <option value="Electronics">Electronics</option>
                         
                            <option value="Automotive">Automotive</option>

                            <option value="Contruction">Contruction</option>
                  
                            
                            <option value="Clothing">Clothing</option>
                            <option value="Computing">Computing</option>
                  
                  
                            <option value="Domestic">Domestic Use</option>
                            <option value="Home-Based">Home-Based</option>
                            <option value="Beauty">Beauty</option>
                  
                            <option value="Agricultural">Agricultural</option>
                            <option value="Livestock">Livestock</option>
                            <option value="Poultry">Poultry</option>
                            <option value="Aquatic">Aquatic</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                      <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-first-name">Location</label>
                      <div class="col-sm-9">
                        <input type="text" id="location" class="form-control"
                        
                        
                        onChange={(event) => {
                          setlocation(event.target.value);
                        }}
                        
                        placeholder="Eg.Njogoo Road" />
                      </div>
          
                 
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-phone">Phone No</label>
                        <div class="col-sm-9">
                          <input type="text" id="buss-contacts" class="form-control phone-mask"
                          
                          onChange={(event) => {
                              setbuss_contacts(event.target.value);
                            }}
                          placeholder="0714639773" aria-label="0714639773" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-md-6">
                      <div class="row justify-content-end">
                        <div class="col-sm-9">
                          
          
                          {!isLoading && <button type="submit" onClick={saveBusinessInfor} class="btn btn-primary me-sm-3 me-1">Submit</button>
          
                      } 
                      {isLoading &&
                          <button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
                      }
                          <button type="reset" class="btn btn-label-secondary">Cancel</button>
          
                        </div>
                      </div>
                    </div>
                  </div>
                </form> }

               
{/*  <div class="panel panel-primary">
                <div class="tab-menu-heading">
                    <div class="tabs-menu">
                        
                        <ul class="nav panel-tabs panel-info">
                            <li><a href="#tab21" class="active" data-bs-toggle="tab"><span><i class="fe fe-settings me-1"></i></span>Business Infor</a></li>
                            <li><a href="#tab22" data-bs-toggle="tab"><span><i class="fe fe-calendar me-1"></i></span>Services</a></li>
                            <li><a href="#tab23" data-bs-toggle="tab"><span><i class="fe fe-user me-1"></i></span>Staff</a></li>
                            <li><a href="#tab24" data-bs-toggle="tab"><span><i class="fe fe-bell me-1"></i></span>Tab 4</a></li>
                        </ul>
                    </div>
                </div>
                <div class="panel-body tabs-menu-body">
                    <div class="tab-content">
                        <div class="tab-pane active" id="tab21">


                        
                         {isBusinessSet &&
                          <div class="card border p-0 shadow-none">
                          <div class="card-body">
                              <div class="d-flex">
                                  <div class="media mt-0">
                                      <div class="media-user me-2">
                                          <div class=""><img alt="" class="rounded-circle avatar avatar-md" src="assets/images/users/16.jpg"/></div>
                                      </div>
                                      <div class="media-body">
                                          <h6 class="mb-0 mt-1">{business_name}</h6>
                                          <small class="text-muted">just now</small>
                                      </div>
                                  </div>
                                  <div class="ms-auto">
                                      <div class="dropdown show">
                                          <a class="new option-dots" href="JavaScript:void(0);" data-bs-toggle="dropdown">
                                              <span class=""><i class="fe fe-more-vertical"></i></span>
                                          </a>
                                          <div class="dropdown-menu dropdown-menu-end">
                                              <a class="dropdown-item" href="javascript:void(0)">Edit Post</a>
                                              <a class="dropdown-item" href="javascript:void(0)">Delete Post</a>
                                              <a class="dropdown-item" href="javascript:void(0)">Personal Settings</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="mt-4">
                                  <h4 class="fw-semibold mt-3">There is nothing more beautiful.</h4>
                                  <p class="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                  </p>
                              </div>
                          </div>
                          <div class="card-footer user-pro-2">
                              <div class="media mt-0">
                                  <div class="media-user me-2">
                                      <div class="avatar-list avatar-list-stacked">
                                          <span class="avatar brround" style={{backgroundImage: 'url(assets/images/users/12.jpg)'}}></span>
                                          <span class="avatar brround" style={{backgroundImage: 'url(assets/images/users/2.jpg)'}}></span>
                                          <span class="avatar brround" style={{backgroundImage: 'url(assets/images/users/9.jpg)'}}></span>
                                          <span class="avatar brround" style={{backgroundImage: 'url(assets/images/users/2.jpg)'}}></span>
                                          <span class="avatar brround" style={{backgroundImage: 'url(assets/images/users//4.jpg)'}}></span>
                                          <span class="avatar brround text-primary">+28</span>
                                      </div>
                                  </div>
                                  <div class="media-body">
                                      <h6 class="mb-0 mt-2 ms-2">10 buyers like your business</h6>
                                  </div>
                                  <div class="ms-auto">
                                      <div class="d-flex mt-1">
                                          <a class="new me-2 text-muted fs-16" href="JavaScript:void(0);"><span class=""><i class="fe fe-heart"></i></span></a>
                                          <a class="new me-2 text-muted fs-16" href="JavaScript:void(0);"><span class=""><i class="fe fe-message-square"></i></span></a>
                                          <a class="new text-muted fs-16" href="JavaScript:void(0);"><span class=""><i class="fe fe-share-2"></i></span></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                        
                        
                        
                        }
                       

                        {isBusinessSet &&
                    <div class="row">


                    <div class="col-xl-6 col-md-12">
                    <div class="card m-b-20 border p-0 shadow-none">
                        <div class="card-header">
                            <h3 class="card-title">Business Contacts</h3>
                            <div class="card-options">
                                <a href="javascript:void(0)" class="card-options-collapse" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                                <a href="javascript:void(0)" class="card-options-remove" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a>
                            </div>
                        </div>
                        <div class="card-body">
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
                            <strong>{location}</strong>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-3 mt-3">
                        <div class="me-4 text-center text-primary">
                            <span><i class="fe fe-phone fs-20"></i></span>
                        </div>
                        <div>
                            <strong>{buss_contacts} </strong>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-3 mt-3">
                        <div class="me-4 text-center text-primary">
                            <span><i class="fe fe-mail fs-20"></i></span>
                        </div>
                        <div>
                            <strong>{email}</strong>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>



                


                
                <div class="col-xl-6 col-md-12">
                <div class="card d-flex m-b-20 border p-0 shadow-none">
                    <div class="card-header">
                        <h3 class="card-title">Customers</h3>
                        <div class="card-options">
                            <a class="text-gray" href="javascript:void(0)">
                                <i class="mdi mdi-refresh"></i>
                            </a>
                            <a class="text-gray" href="javascript:void(0)">
                                <i class="mdi mdi-bookmark-outline"></i>
                            </a>
                            <a class="text-gray" href="javascript:void(0)">
                                <i class="mdi mdi-dots-vertical"></i>
                            </a>
                        </div>
                    </div>
                    <div class="card-body">
                    <div class="">
                    <div class="media overflow-visible">
                        <img class="avatar brround avatar-md me-3" src="../assets/images/users/18.jpg" alt="avatar-img"/>
                        <div class="media-body valign-middle mt-2">
                            <a href="javascript:void(0)" class=" fw-semibold text-dark">John Paige</a>
                            <p class="text-muted mb-0">johan@gmail.com</p>
                        </div>
                        <div class="media-body valign-middle text-end overflow-visible mt-2">
                            <button class="btn btn-sm btn-primary" type="button">Follow</button>
                        </div>
                    </div>
                    <div class="media overflow-visible mt-sm-5">
                        <span class="avatar cover-image avatar-md brround bg-pink me-3">LQ</span>
                        <div class="media-body valign-middle mt-2">
                            <a href="javascript:void(0)" class="fw-semibold text-dark">Lillian Quinn</a>
                            <p class="text-muted mb-0">lilliangore</p>
                        </div>
                        <div class="media-body valign-middle text-end overflow-visible mt-1">
                            <button class="btn btn-sm btn-secondary" type="button">Follow</button>
                        </div>
                    </div>
                    <div class="media overflow-visible mt-sm-5">
                        <img class="avatar brround avatar-md me-3" src="../assets/images/users/2.jpg" alt="avatar-img"/>
                        <div class="media-body valign-middle mt-2">
                            <a href="javascript:void(0)" class="text-dark fw-semibold">Harry Fisher</a>
                            <p class="text-muted mb-0">harryuqt</p>
                        </div>
                        <div class="media-body valign-middle text-end overflow-visible mt-1">
                            <button class="btn btn-sm btn-danger" type="button">Follow</button>
                        </div>
                    </div>
                 
                </div>
                    </div>
                </div>
            </div>
                    
                    
                    
                    
                    
                    
                    
                    </div>}

                   









                 {!isBusinessSet && 
                  <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="row">
                        <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-first-name">Business Name</label>
                        <div class="col-sm-9">
                          <input type="text" id="formtabs-first-name" class="form-control" 
                          
                          onChange={(event) => {
                              setbusiness_name(event.target.value);
                            }}
                          
                          
                          placeholder="Eg. Edith Salon" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                      
                        <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-last-name">Business Description</label>
                        <div class="col-sm-9">
                        <textarea id="basic-icon-default-message" class="form-control" placeholder="My business deals with all household items" aria-label="Hi, My business deals with beauty services?" 
                        
                        onChange={(event) => {
                          setbusiness_description(event.target.value);
                        }}
          
                        aria-describedby="basic-icon-default-message2"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-country">County</label>
                        <div class="col-sm-9">
                          <select id="formtabs-country" class="select2 form-select"
                          
                          onChange={(event) => {
                              setCity(event.target.value);
                            }}
          
                          
                          data-allow-clear="true">
                            <option value="">Select</option>
                            <option value="Nairobi">Nairobi</option>
                            <option value="Kiambu">Kiambu</option>
                            <option value="Machakos">Machakos</option>
                            <option value="Kakuru">Kakuru</option>
                            <option value="Makueni">Makueni</option>
                            <option value="Nyeri">Nyeri</option>
                            
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 select2-primary">
                      <div class="row">
                        <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-language">Industry</label>
                        <div class="col-sm-9">
                          <select id="formtabs-language" class="select2 form-select"
          
          
                          onChange={(event) => {
                              setindustry(event.target.value);
                            }}
                          
                          
                          multiple>
                            <option value="Eateries" selected>Eateries</option>

                            <option value="Domestic-Products" selected>Domestic Products</option>

                            <option value="Wines-Spirits">Drinks/Wines/Spirts/Alcohol</option>

                            <option value="Drinks">Drinks</option>
                         
                            <option value="Beauty">Beauty</option>
                            <option value="Education">Education</option>
                            <option value="Automotive">Wellbeing</option>
                            <option value="pt">Automotive</option>
                            <option value="home care">Home Care</option>
                            <option value="Maintenance">Maintenance</option>
                            <option value="Electronics">Electronics</option>
                         
                            <option value="Automotive">Automotive</option>

                            <option value="Contruction">Contruction</option>
                  
                            
                            <option value="Clothing">Clothing</option>
                            <option value="Computing">Computing</option>
                  
                  
                            <option value="Domestic">Domestic Use</option>
                            <option value="Home-Based">Home-Based</option>
                            <option value="Beauty">Beauty</option>
                  
                            <option value="Agricultural">Agricultural</option>
                            <option value="Livestock">Livestock</option>
                            <option value="Poultry">Poultry</option>
                            <option value="Aquatic">Aquatic</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                      <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-first-name">Location</label>
                      <div class="col-sm-9">
                        <input type="text" id="location" class="form-control"
                        
                        
                        onChange={(event) => {
                          setlocation(event.target.value);
                        }}
                        
                        placeholder="Eg.Njogoo Road" />
                      </div>
          
                 
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-phone">Phone No</label>
                        <div class="col-sm-9">
                          <input type="text" id="buss-contacts" class="form-control phone-mask"
                          
                          onChange={(event) => {
                              setbuss_contacts(event.target.value);
                            }}
                          placeholder="0714639773" aria-label="0714639773" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-md-6">
                      <div class="row justify-content-end">
                        <div class="col-sm-9">
                          
          
                          {!isLoading && <button type="submit" onClick={saveBusinessInfor} class="btn btn-primary me-sm-3 me-1">Submit</button>
          
                      } 
                      {isLoading &&
                          <button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
                      }
                          <button type="reset" class="btn btn-label-secondary">Cancel</button>
          
                        </div>
                      </div>
                    </div>
                  </div>
                </form> }

                        </div>
                        <div class="tab-pane" id="tab22">


                     
                        <div class="row mb-5">
                        {servicesList.map((value, key) => {
                          return (
                        <div class="col-md-6">
                          <div class="card mb-3">
                            <div class="row g-0">
                              <div class="col-md-4">
                             
                                <img class="card-img card-img-left" src="/assets/images/media/22.jpg" alt="Card image" />
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h5 class="card-title">{value.service_name}</h5>
                                  <span class="badge bg-info">Price: {value.service_cost}</span>
                                  <p class="card-text">
                                   {value.service_description}
                                  </p>
                                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                
                                  <div class="demo-inline-spacing">
                
                                  <button type="button" class="btn btn-success">Edit</button>
                                  <button type="button" class="btn btn-danger">Remove</button>
                                 
                
                              </div>
                                                
                                </div>
                                
                                
                              </div>
                              
                            </div>
                          </div>
                        </div>
                        );
                      })}
                       
                      </div>
                            
                        </div>
                        <div class="tab-pane" id="tab23">

                        <form>
                        <div class="row g-3">
                          <div class="col-md-6">
                            <div class="row">
                              <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-first-name">Business Name</label>
                              <div class="col-sm-9">
                                <input type="text" id="formtabs-first-name" class="form-control" 
                                
                                onChange={(event) => {
                                    setbusiness_name(event.target.value);
                                  }}
                                
                                
                                placeholder="Eg. Edith Salon" />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="row">
                            
                              <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-last-name">Business Description</label>
                              <div class="col-sm-9">
                              <textarea id="basic-icon-default-message" class="form-control" placeholder="Hi, Do you have a moment to talk Joe?" aria-label="Hi, My business deals with beauty services?" 
                              
                              onChange={(event) => {
                                setbusiness_description(event.target.value);
                              }}
                
                              aria-describedby="basic-icon-default-message2"></textarea>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="row">
                              <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-country">County</label>
                              <div class="col-sm-9">
                                <select id="formtabs-country" class="select2 form-select"
                                
                                onChange={(event) => {
                                    setCity(event.target.value);
                                  }}
                
                                
                                data-allow-clear="true">
                                  <option value="">Select</option>
                                  <option value="Nairobi">Nairobi</option>
                                  <option value="Kiambu">Kiambu</option>
                                  <option value="Machakos">Machakos</option>
                                  <option value="Kakuru">Kakuru</option>
                                  <option value="Makueni">Makueni</option>
                                  <option value="Nyeri">Nyeri</option>
                                  
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 select2-primary">
                            <div class="row">
                              <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-language">Industry</label>
                              <div class="col-sm-9">
                                <select id="formtabs-language" class="select2 form-select"
                
                
                                onChange={(event) => {
                                    setindustry(event.target.value);
                                  }}
                                
                                
                                multiple>

                                <option value="Eateries" selected>Eateries</option>

                                  


                                 
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="row">
                            <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-first-name">Location</label>
                            <div class="col-sm-9">
                              <input type="text" id="formtabs-first-name" class="form-control"
                              
                              
                              onChange={(event) => {
                                setlocation(event.target.value);
                              }}
                              
                              placeholder="Eg.Ruai By Pass" />
                            </div>
                
                       
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="row">
                              <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-phone">Phone No</label>
                              <div class="col-sm-9">
                                <input type="text" id="formtabs-phone" class="form-control phone-mask"
                                
                                onChange={(event) => {
                                    setPhone_no(event.target.value);
                                  }}
                                placeholder="0714639773" aria-label="0714639773" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row mt-4">
                          <div class="col-md-6">
                            <div class="row justify-content-end">
                              <div class="col-sm-9">
                                
                
                                {!isLoading && <button type="submit" onClick={saveBusinessInfor} class="btn btn-primary me-sm-3 me-1">Submit</button>
                
                            } 
                            {isLoading &&
                                <button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
                            }
                                <button type="reset" class="btn btn-label-secondary">Cancel</button>
                
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                           
                        </div>
                        <div class="tab-pane" id="tab24">
                            <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                                by accident, sometimes on purpose (injected humour and the like</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                        </div>
                    </div>
                </div>
            </div>*/}


               


            <ToastContainer></ToastContainer>




                </div>
                <div class="card-footer d-sm-flex">
                    <div class="mt-2 mb-2">
                        <a href="javascript:void(0)" class="btn btn-icon btn-white btn-svg" data-bs-toggle="tooltip" title="" data-bs-original-title="Attach"><span class="ri-attachment-2"></span></a>
                        <a href="javascript:void(0)" class="btn btn-icon btn-white btn-svg" data-bs-toggle="tooltip" title="" data-bs-original-title="Link"><span class="ri-link"></span></a>
                        <a href="javascript:void(0)" class="btn btn-icon btn-white btn-svg" data-bs-toggle="tooltip" title="" data-bs-original-title="Photos"><span class="ri-image-line"></span></a>
                        <a href="javascript:void(0)" class="btn btn-icon btn-white btn-svg" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete"><span class="ri-delete-bin-line"></span></a>
                    </div>
                    <div class="btn-list ms-auto my-auto">

                    <button class="btn btn-danger btn-space mb-0">Cancel</button>

                    
                    {!isLoading && <button type="submit" onClick={saveBusinessInfor} class="btn btn-primary btn-space mb-0">Save</button>
          
                  } 
                  {isLoading &&
                      <button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled><div class="spinner-grow text-success me-2" role="status">
                      <span class="visually-hidden">Loading...</span>
                  </div>Saving Infor</button>
                  }
                       
                    
                    </div>
                </div>
            </div>
        </div>}





        {showServicesDiv &&

          <div class="col-xl-9 col-lg-8">
          <div class="row">
              <div class="col-xl-12">
                  <div class="card p-0">
                      <div class="card-body p-4">
                          <div class="row">
                              <div class="col-xl-5 col-lg-8 col-md-8 col-sm-8">
                                  <div class="input-group d-flex w-100 float-start">
                                      <input type="text" class="form-control border-end-0 my-2" placeholder="Search ..."/>
                                      <button class="btn input-group-text bg-transparent border-start-0 text-muted my-2">
                                          <i class="fe fe-search text-muted" aria-hidden="true"></i>
                                      </button>
                                  </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                  <ul class="nav item2-gl-menu float-end my-2">
                                      <li class="border-end"><a href="#tab-11" class="show active" data-bs-toggle="tab" title="List style"><i class="fa fa-th"></i></a></li>
                                      <li><a href="#tab-12" data-bs-toggle="tab" class="" title="Grid"><i class="fa fa-list"></i></a></li>
                                  </ul>
                              </div>
                              <div class="col-xl-3 col-lg-12">
                             
                                  <a class="btn btn-primary btn-block float-end my-2" data-bs-effect="effect-flip-horizontal" data-bs-toggle="modal" href="#modaldemo8"><i class="fa fa-plus-square me-2"></i>New Service</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="tab-content">
              <div class="tab-pane" id="tab-12">
                  <div class="row">
        
                 {showErrorAlert &&   <div class="alert alert-danger" role="alert">
                 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-hidden="true">×</button>
                 <strong>Oh snap!</strong> <a href="javascript:void(0)" class="alert-link">You must have a business</a>and try submitting again.
             </div>} 
                 
               
        
                  {productsList.map((value, key) => {
                      return (
                      <div class="col-md-6 col-xl-4 col-sm-6">
                          <div class="card">
                              <div class="product-grid6">
                                  <div class="product-image6 p-5">
                                      <ul class="icons">
                                          <li>
                                              <a href="#" class="btn btn-primary"> <i class="fe fe-eye">  </i> </a>
                                          </li>
                                          <li><a href="#" class="btn btn-success"><i  class="fe fe-edit"></i></a></li>
                                          <li><a href="javascript:void(0)" class="btn btn-danger"><i class="fe fe-x"></i></a></li>
                                      </ul>
                                      <a href="#" >
                                          <img class="img-fluid br-7 w-100" src="../assets/images/pngs/9.jpg" alt="img"/>
                                      </a>
                                  </div>
                                  <div class="card-body pt-0">
                                      <div class="product-content text-center">
                                          <h1 class="title fw-bold fs-20"><a href="#">{value.name}</a></h1>
                                          <div class="mb-2 text-warning">
                                              <i class="fa fa-star text-warning"></i>
                                              <i class="fa fa-star text-warning"></i>
                                              <i class="fa fa-star text-warning"></i>
                                              <i class="fa fa-star-half-o text-warning"></i>
                                              <i class="fa fa-star-o text-warning"></i>
                                          </div>
                                          <div class="price">Ksh {value.price}<span class="ms-4">Ksh  {value.price}</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="card-footer text-center">
                                      <a href="#" class="btn btn-primary mb-1"><i class="fe fe-edit mx-2"></i>Edit</a>
                                      <a href="#" class="btn btn-outline-primary mb-1"><i class="fe fe-heart mx-2"></i>Add to wishlist</a>
                                  </div>
                              </div>
                          </div>
                      </div>
        
                      )
                  })}
        
                    
                      <div class="mb-5">
                          <div class="float-end">
                              <ul class="pagination ">
                                  <li class="page-item page-prev disabled">
                                      <a class="page-link" href="javascript:void(0)" tabindex="-1">Prev</a>
                                  </li>
                                  <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                                  <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                                  <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                                  <li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
                                  <li class="page-item"><a class="page-link" href="javascript:void(0)">5</a></li>
                                  <li class="page-item page-next">
                                      <a class="page-link" href="javascript:void(0)">Next</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="tab-pane active" id="tab-11">
                  <div class="row">
                  {servicesList.map((value, key) => {
                    return (
                      <div class="col-xl-12 col-lg-12 col-md-12">
                          <div class="card overflow-hidden">
                              <div class="card-body">
                                  <div class="row g-0">
                                      <div class="col-xl-3 col-lg-12 col-md-12">
                                          <div class="product-list">
                                              <div class="product-image">
                                                  <ul class="icons">
                                                      <li><a href="#" class="btn btn-primary"><i class="fe fe-eye text-white "></i></a></li>
                                                      <li><a href="#" class="btn btn-success"><i class="fe fe-edit text-white "></i></a></li>
                                                      <li><a href="#" class="btn btn-danger"><i class="fe fe-x text-white"></i></a></li>
                                                  </ul>
                                              </div>
                                              <div class="br-be-0 br-te-0">
                                                  <a href="#" class="">
                                                      <img src="../assets/images/pngs/9.jpg" alt="img" class="cover-image br-7 w-100"/>
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-xl-6 col-lg-12 col-md-12 border-end my-auto">
                                          <div class="card-body">
                                              <div class="mb-3">
                                                  <a href="#" class="">
                                                      <h3 class="fw-bold fs-30 mb-3">{value.service_name}</h3>
                                                      <div class="mb-2 text-warning">
                                                          <i class="fa fa-star fs-18 text-warning"></i>
                                                          <i class="fa fa-star fs-18 text-warning"></i>
                                                          <i class="fa fa-star fs-18 text-warning"></i>
                                                          <i class="fa fa-star-half-o fs-18 text-warning"></i>
                                                          <i class="fa fa-star-o fs-18 text-warning"></i>
                                                      </div>
                                                  </a>
                                                  <p class="fs-16">{value.description} </p>
                                                  
                                                  
                                                  
                                                  <form class="shop__filter">
                                                      <div class="row gutters-xs">
                                                          <div class="col-auto">
                                                              <label class="colorinput">
                                                                  <input type="checkbox" name="color" value="azure" class="colorinput-input" checked/>
                                                                  <span class="colorinput-color bg-azure"></span>
                                                              </label>
                                                          </div>
                                                          <div class="col-auto">
                                                              <label class="colorinput">
                                                                  <input type="checkbox" name="color" value="indigo" class="colorinput-input"/>
                                                                  <span class="colorinput-color bg-indigo"></span>
                                                              </label>
                                                          </div>
                                                          <div class="col-auto">
                                                              <label class="colorinput">
                                                                  <input type="checkbox" name="color" value="purple" class="colorinput-input"/>
                                                                  <span class="colorinput-color bg-purple"></span>
                                                              </label>
                                                          </div>
                                                      </div>
                                                  </form>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-xl-3 col-lg-12 col-md-12 my-auto">
                                          <div class="card-body p-0">
                                              <div class="price h3 text-center mb-5 fw-bold">{value.service_cost}</div>
                                              
                                              <a onClick={() => {
                                                openSelectedService(value.id);
                                                  }}
                                            
                                        
                                                  data-bs-effect="effect-slide-in-bottom" data-bs-toggle="modal" href="#modaldemo80" class="btn btn-primary btn-block"><i class="fe fe-edit mx-2"></i>Edit Details</a>
                                              <a href="#" class="btn btn-outline-primary btn-block mt-2"><i class="fe fe-add"></i>Assign Staff</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
          )})}
                      
                      
                    
                     
                      <div class="mb-5">
                          <div class="float-end">
                              <ul class="pagination ">
                                  <li class="page-item page-prev disabled">
                                      <a class="page-link" href="javascript:void(0)" tabindex="-1">Prev</a>
                                  </li>
                                  <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                                  <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                                  <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                                  <li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
                                  <li class="page-item"><a class="page-link" href="javascript:void(0)">5</a></li>
                                  <li class="page-item page-next">
                                      <a class="page-link" href="javascript:void(0)">Next</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        
        </div>
        
        }
            


{showErrorAlert &&

  <div class="col-xl-9 col-lg-8">
  <div class="row">
      <div class="col-xl-12">
          <div class="card p-0">
              <div class="card-body p-4">
                  <div class="row">
                      <div class="col-xl-5 col-lg-8 col-md-8 col-sm-8">
                          <div class="input-group d-flex w-100 float-start">
                              <input type="text" class="form-control border-end-0 my-2" placeholder="Search ..."/>
                              <button class="btn input-group-text bg-transparent border-start-0 text-muted my-2">
                                  <i class="fe fe-search text-muted" aria-hidden="true"></i>
                              </button>
                          </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                          <ul class="nav item2-gl-menu float-end my-2">
                              <li class="border-end"><a href="#tab-11" class="show active" data-bs-toggle="tab" title="List style"><i class="fa fa-th"></i></a></li>
                              <li><a href="#tab-12" data-bs-toggle="tab" class="" title="Grid"><i class="fa fa-list"></i></a></li>
                          </ul>
                      </div>
                      <div class="col-xl-3 col-lg-12">
                     
                          <a class="btn btn-primary btn-block float-end my-2" data-bs-effect="effect-flip-horizontal" data-bs-toggle="modal" href="#modaldemo9"><i class="fa fa-plus-square me-2"></i>New Staff</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="tab-content">
      <div class="tab-pane" id="tab-12">
          <div class="row">

         {showErrorAlert &&   <div class="alert alert-danger" role="alert">
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-hidden="true">×</button>
         <strong>Oh snap!</strong> <a href="javascript:void(0)" class="alert-link">You must have a business</a>and try submitting again.
     </div>} 
         
       

          {productsList.map((value, key) => {
              return (
              <div class="col-md-6 col-xl-4 col-sm-6">
                  <div class="card">
                      <div class="product-grid6">
                          <div class="product-image6 p-5">
                              <ul class="icons">
                                  <li>
                                      <a href="#" class="btn btn-primary"> <i class="fe fe-eye">  </i> </a>
                                  </li>
                                  <li><a href="#" class="btn btn-success"><i  class="fe fe-edit"></i></a></li>
                                  <li><a href="javascript:void(0)" class="btn btn-danger"><i class="fe fe-x"></i></a></li>
                              </ul>
                              <a href="#" >
                                  <img class="img-fluid br-7 w-100" src="../assets/images/pngs/9.jpg" alt="img"/>
                              </a>
                          </div>
                          <div class="card-body pt-0">
                              <div class="product-content text-center">
                                  <h1 class="title fw-bold fs-20"><a href="#">{value.name}</a></h1>
                                  <div class="mb-2 text-warning">
                                      <i class="fa fa-star text-warning"></i>
                                      <i class="fa fa-star text-warning"></i>
                                      <i class="fa fa-star text-warning"></i>
                                      <i class="fa fa-star-half-o text-warning"></i>
                                      <i class="fa fa-star-o text-warning"></i>
                                  </div>
                                  <div class="price">Ksh {value.price}<span class="ms-4">Ksh  {value.price}</span>
                                  </div>
                              </div>
                          </div>
                          <div class="card-footer text-center">
                              <a href="#" class="btn btn-primary mb-1"><i class="fe fe-shopping-cart mx-2"></i>Add to cart</a>
                              <a href="#" class="btn btn-outline-primary mb-1"><i class="fe fe-heart mx-2 wishlist-icon"></i>Add to wishlist</a>
                          </div>
                      </div>
                  </div>
              </div>

              )
          })}

            
              <div class="mb-5">
                  <div class="float-end">
                      <ul class="pagination ">
                          <li class="page-item page-prev disabled">
                              <a class="page-link" href="javascript:void(0)" tabindex="-1">Prev</a>
                          </li>
                          <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:void(0)">5</a></li>
                          <li class="page-item page-next">
                              <a class="page-link" href="javascript:void(0)">Next</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <div class="tab-pane active" id="tab-11">
          <div class="row">
          {staffList.map((value, key) => {
            return (
              <div class="col-xl-12 col-lg-12 col-md-12">
                  <div class="card overflow-hidden">
                      <div class="card-body">
                          <div class="row g-0">
                              <div class="col-xl-3 col-lg-12 col-md-12">
                                  <div class="product-list">
                                      <div class="product-image">
                                          <ul class="icons">
                                              <li><a href="#" class="btn btn-primary"><i class="fe fe-eye text-white "></i></a></li>
                                              <li><a href="#" class="btn btn-success"><i class="fe fe-edit text-white "></i></a></li>
                                              <li><a href="#" class="btn btn-danger"><i class="fe fe-x text-white"></i></a></li>
                                          </ul>
                                      </div>
                                      <div class="br-be-0 br-te-0">
                                          <a href="#" class="">
                                              <img src="assets/images/pngs/9.jpg" alt="img" class="cover-image br-7 w-100"/>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-xl-6 col-lg-12 col-md-12 border-end my-auto">
                                  <div class="card-body">
                                      <div class="mb-3">
                                          <a href="#" class="">
                                              <h3 class="fw-bold fs-30 mb-3">{value.staff_name}</h3>
                                              <div class="mb-2 text-warning">
                                                  <i class="fa fa-star fs-18 text-warning"></i>
                                                  <i class="fa fa-star fs-18 text-warning"></i>
                                                  <i class="fa fa-star fs-18 text-warning"></i>
                                                  <i class="fa fa-star-half-o fs-18 text-warning"></i>
                                                  <i class="fa fa-star-o fs-18 text-warning"></i>
                                              </div>
                                          </a>
                                          <div class="d-flex align-items-center mb-3 mt-3">
                                          <div class="me-4 text-center text-primary">
                                              <span><i class="fe fe-phone fs-20"></i></span>
                                          </div>
                                          <div>
                                              <strong>{value.phone_no} </strong>
                                          </div>
                                      </div>
                                      <div class="d-flex align-items-center mb-3 mt-3">
                                          <div class="me-4 text-center text-primary">
                                              <span><i class="fe fe-mail fs-20"></i></span>
                                          </div>
                                          <div>
                                              <strong>{value.email}</strong>
                                          </div>
                                      </div>
                                          <p class="fs-16">Staff Information</p>
                                          
                                          
                                          
                                          <form class="shop__filter">
                                              <div class="row gutters-xs">
                                                  <div class="col-auto">
                                                      <label class="colorinput">
                                                          <input type="checkbox" name="color" value="azure" class="colorinput-input" checked/>
                                                          <span class="colorinput-color bg-azure"></span>
                                                      </label>
                                                  </div>
                                                  <div class="col-auto">
                                                      <label class="colorinput">
                                                          <input type="checkbox" name="color" value="indigo" class="colorinput-input"/>
                                                          <span class="colorinput-color bg-indigo"></span>
                                                      </label>
                                                  </div>
                                                  <div class="col-auto">
                                                      <label class="colorinput">
                                                          <input type="checkbox" name="color" value="purple" class="colorinput-input"/>
                                                          <span class="colorinput-color bg-purple"></span>
                                                      </label>
                                                  </div>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-xl-3 col-lg-12 col-md-12 my-auto">
                                  <div class="card-body p-0">
                                      <div class="price h3 text-center mb-5 fw-bold">Completed Tasks: 5</div>
                                       <a onClick={() => {
                                        openSelectedStaff(value.id);
                                          }}  data-bs-effect="effect-slide-in-bottom" data-bs-toggle="modal" href="#modaldemo90" class="btn btn-primary btn-block"><i class="fe fe-edit mx-2"></i>Edit Details</a>
                                      <a href="#" class="btn btn-outline-primary btn-block mt-2"><i class="fe fe-new"></i>Assign Service</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
  )})}
              
              
            
             
              <div class="mb-5">
                  <div class="float-end">
                      <ul class="pagination ">
                          <li class="page-item page-prev disabled">
                              <a class="page-link" href="javascript:void(0)" tabindex="-1">Prev</a>
                          </li>
                          <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:void(0)">5</a></li>
                          <li class="page-item page-next">
                              <a class="page-link" href="javascript:void(0)">Next</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>

</div>

}

           





            <div class="modal fade" id="modaldemo8">
            <div class="modal-dialog modal-dialog-centered text-center" role="document">
                <div class="modal-content modal-content-demo">
                    <div class="modal-header">
                        <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                    <div class="row">
                      <div class="col mb-3">
                        <label for="nameWithTitle" class="form-label">Service Name</label>
                        <input type="text" id="service_name" class="form-control" placeholder="eg.laundry/cleaning services"
                        
                        onChange={(event) => {
                            set_service_name(event.target.value);
                          }}
                           
                        />
                      </div>
                    </div>
            
                    <div class="row">
                    <div class="col mb-3">
                      <label for="nameWithTitle" class="form-label">Service Description</label>
            
            
                      <textarea id="basic-icon-default-message" class="form-control" placeholder="Eg. For Best automotive services!" aria-label="Hi, My business deals with beauty services?" 
                                                
                      onChange={(event) => {
                        set_description(event.target.value);
                      }}
            
                      aria-describedby="basic-icon-default-message2"></textarea> 
                      
                    </div>
                  </div>
                    <div class="row g-2">
            
            
                    
                      <div class="col mb-0">
                        <label for="emailWithTitle" class="form-label">Service Type</label>
                        <select id="formtabs-country" class="select2 form-select"
                      
                        onChange={(event) => {
                            set_service_type(event.target.value);
                          }}
            
                        
                        data-allow-clear="true">
                          <option value="">Select</option>
                          <option value="Beauty">Beauty</option>
                          <option value="Barbershop">Barbershop</option>
                          <option value=">Health & Fitness">Health & Fitness</option>
                          <option value="Education">Education</option>
                          <option value="Automotive">Automotive</option>
                          <option value="Home Care">Home Care</option>

                          <option value="Laundry">Laundry</option>
                          <option value="Construction">Construction</option>

                          <option value="Entertainment">Entertainment</option>
                          <option value="Events">Events</option>
                          
                        
                          
                        </select>
                      </div>
                      <div class="col mb-0">
                        <label for="dobWithTitle" class="form-label">Service Cost</label>
                        <input type="number" id="cost" class="form-control"
            
                        onChange={(event) => {
                            set_service_cost(event.target.value);
                          }}
                           
                        
                        />
                        <input type="hidden" id="nameWithTitle" class="form-control" placeholder="Enter Name"
            
                        value={businessId}
                        
                        onChange={(event) => {
                            setbusinessId(event.target.value);
                          }}
                           
                        />
                      </div>
                    </div>
                  </div>
                    <div class="modal-footer">
                      


                        {!isLoading && <button type="submit" onClick={addService} class="btn btn-primary">Save changes</button>

                    } 
                    {isLoading &&
                        <button type="submit" class="btn btn-primary" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
                    }
                
                        
                        
                        <button class="btn btn-light" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>


        
        <div class="modal fade" id="modaldemo80">
        <div class="modal-dialog modal-dialog-centered text-center" role="document">
            <div class="modal-content modal-content-demo">
                <div class="modal-header">
                    <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                <div class="row">
                  <div class="col mb-3">
                    <label for="nameWithTitle" class="form-label">Service Name</label>
                    <input type="text" id="service_name" class="form-control" placeholder="Eg. Automotive"

                    value={service_name}
                    
                    onChange={(event) => {
                        set_service_name(event.target.value);
                      }}
                       
                    />
                  </div>
                </div>
        
                <div class="row">
                <div class="col mb-3">
                  <label for="nameWithTitle" class="form-label">Service Description</label>
        
        
                  <textarea id="basic-icon-default-message" class="form-control"   value={description} placeholder="Eg. For Best automotive services!" aria-label="Hi, My business deals with beauty services?" 
                                            
                  onChange={(event) => {
                    set_description(event.target.value);
                  }}
        
                  aria-describedby="basic-icon-default-message2"></textarea> 
                  
                </div>
              </div>
                <div class="row g-2">
        
        
                
                  <div class="col mb-0">
                    <label for="emailWithTitle" class="form-label">Service Type</label>
                    <select id="formtabs-country" class="select2 form-select"
                  
                    onChange={(event) => {
                        set_service_type(event.target.value);
                      }}
        
                      value={service_type}
                    data-allow-clear="true">
                      <option value="">Select</option>
                      <option value="Beauty">Beauty</option>
                      <option value="Barbershop">Barbershop</option>
                      <option value=">Health & Fitness">Health & Fitness</option>
                      <option value="Education">Education</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Home Care">Home Care</option>

                      <option value="Laundry">Laundry</option>
                      <option value="Construction">Construction</option>

                      <option value="Entertainment">Entertainment</option>
                      <option value="Events">Events</option>
                      
                    
                      
                    </select>
                  </div>
                  <div class="col mb-0">
                    <label for="dobWithTitle" class="form-label">Service Cost</label>
                    <input type="number" id="cost" class="form-control"

                    value={service_cost}
        
                    onChange={(event) => {
                        set_service_cost(event.target.value);
                      }}
                       
                    
                    />
                    <input type="hidden" id="nameWithTitle" class="form-control" placeholder="Enter Name"
        
                    value={businessId}
                    
                    onChange={(event) => {
                        setbusinessId(event.target.value);
                      }}
                       
                    />
                  </div>
                </div>
              </div>
                <div class="modal-footer">
                  


                    {!isLoading && <button type="submit" onClick={updateService} class="btn btn-primary">Save changes</button>

                } 
                {isLoading &&
                    <button type="submit" class="btn btn-primary" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor...</button>
                }
            
                    
                    
                    <button class="btn btn-light" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
        <ToastContainer></ToastContainer>
    </div>





        <div class="modal fade" id="modaldemo9">
        <div class="modal-dialog modal-dialog-centered text-center" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalCenterTitle">Add Staff</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col mb-3">
                  <label for="nameWithTitle" class="form-label">Name</label>
                  <input type="text" id="staff_name" class="form-control" placeholder="Enter Name"
                  
                  onChange={(event) => {
                      SetStaff_name(event.target.value);
                    }}
                     
                  />
                </div>
              </div>
              <div class="row g-2">
                <div class="col mb-0">
                  <label for="emailWithTitle" class="form-label">Email</label>
                  <input type="text" id="emailWithTitle" class="form-control" placeholder="xxxx@xxx.xx"
                  
                  
                  onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                     />
                </div>
                <div class="col mb-0">
                  <label for="dobWithTitle" class="form-label">Phone No.</label>
                  <input type="text" id="phoneno" class="form-control"
      
                  onChange={(event) => {
                      setPhone_no(event.target.value);
                    }}
                     
                  
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Close</button>
      
      
              
              {!isLoading && <button type="submit" onClick={addStaff} class="btn btn-primary"  style={{backgroundColor:"#085781"}}>Save</button>
      
          } 
          {isLoading &&
              <button type="submit" class="btn btn-primary btn-md btn-block mt-3 waves-effect" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
          }
      
      
              
            </div>
            
          </div>
        </div>
      </div>


      <div class="modal fade" id="modaldemo90">
      <div class="modal-dialog modal-dialog-centered text-center" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalCenterTitle">Add Staff</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col mb-3">
                <label for="nameWithTitle" class="form-label">Name</label>
                <input type="text" id="staff_name" class="form-control" placeholder="Enter Name"

                value={staff_name}
                
                onChange={(event) => {
                    SetStaff_name(event.target.value);
                  }}
                   
                />
              </div>
            </div>
            <div class="row g-2">
              <div class="col mb-0">
                <label for="emailWithTitle" class="form-label">Email</label>
                <input type="text" id="emailWithTitle" class="form-control" placeholder="xxxx@xxx.xx"

                value={email}
                
                
                onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                   />
              </div>
              <div class="col mb-0">
                <label for="dobWithTitle" class="form-label">Phone No.</label>
                <input type="text" id="phoneno" class="form-control"
    
                onChange={(event) => {
                    setPhone_no(event.target.value);
                  }}
                   
                value={phone_no}
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Close</button>
    
    
            
            {!isLoading && <button type="submit" onClick={updateStaff} class="btn btn-primary"  style={{backgroundColor:"#085781"}}>Save</button>
    
        } 
        {isLoading &&
            <button type="submit" class="btn btn-primary btn-md btn-block mt-3 waves-effect" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
        }
    
    
            
          </div>
          
        </div>
      </div>
    </div>



      <div class="modal fade" id="modaldemo90">
      <div class="modal-dialog modal-dialog-centered text-center" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalCenterTitle">Add Staff</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col mb-3">
                <label for="nameWithTitle" class="form-label">Name</label>
                <input type="text" id="staff_name" class="form-control" placeholder="Enter Name"
                
                onChange={(event) => {
                    SetStaff_name(event.target.value);
                  }}
                   
                />
              </div>
            </div>
            <div class="row g-2">
              <div class="col mb-0">
                <label for="emailWithTitle" class="form-label">Email</label>
                <input type="text" id="emailWithTitle" class="form-control" placeholder="xxxx@xxx.xx"
                
                
                onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                   />
              </div>
              <div class="col mb-0">
                <label for="dobWithTitle" class="form-label">Phone No.</label>
                <input type="text" id="phoneno" class="form-control"
    
                onChange={(event) => {
                    setPhone_no(event.target.value);
                  }}
                   
                
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Close</button>
    
    
            
            {!isLoading && <button type="submit" onClick={addStaff} class="btn btn-primary"  style={{backgroundColor:"#085781"}}>Save</button>
    
        } 
        {isLoading &&
            <button type="submit" class="btn btn-primary btn-md btn-block mt-3 waves-effect" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
        }
    
    
            
          </div>
          
        </div>
      </div>
    </div>



        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fe fe-x fs-18"></i></button>
        </div>
        <div class="offcanvas-body">




        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Product Details</h3>
            </div>
            <div class="card-body">
            {/*  <div class="form-row">
                    <div class="form-group col-md-6 mb-0">
                        <div class="form-group">
                            <input type="text" class="form-control" id="name1" placeholder="First Name"/>
                        </div>
                    </div>
                    <div class="form-group col-md-6 mb-0">
                        <div class="form-group">
                            <input type="text" class="form-control" id="name2" placeholder="Last Name"/>
                        </div>
                    </div>
                </div>*/}
               
                <div class="form-group ">
                  
                    <label for="nameWithTitle" class="form-label">Product Name</label>

                    <input type="hidden" id="price" class="form-control" value={userId}
          
                    onChange={(event) => {
                        setUserId(event.target.value);
                      }}
                    />

                    <input type="text" id="product_name" class="form-control" placeholder="Enter Name"
          
                    onChange={(event) => {
                        setName(event.target.value);
                      }}
                       
                    />
                </div>
                <div class="form-group ">

                <label class="form-label" for="multicol-country">Type</label>
        <select id="multicol-country" class="form-control select2 form-select"   
        onChange={(event) => {
          setType(event.target.value);
        }}
        
        data-allow-clear="true">
          <option value="">Select Type</option>
          <option value="Agricultural">Agricultural</option>
          <option value="Livestock">Livestock</option>
          <option value="Aquatic">Aquatic</option>
         
          
        </select>
                    
                    
                </div>


                <div class="form-row">
                
                <label for="description" class="form-label">Description</label>
                

                <textarea name="address" class="form-control"   onChange={(event) => {
                 setProduct_description(event.target.value);
               }} id="address" rows="2" placeholder="Your Product desciption"></textarea>
                
                </div>



                <div class="form-row">
                    <div class="form-group col-md-6 mb-0">
                        <div class="form-group">
                        <label for="dobWithTitle" class="form-label">Price(Per unit)</label>
                        <input type="number" id="price" class="form-control"

                          onChange={(event) => {
                            setPrice(event.target.value);
                          }}


                        />
                        </div>
                    </div>
                    <div class="form-group col-md-6 mb-0">
                        <div class="form-group">
                        <label for="dobWithTitle" class="form-label">Quantity</label>
                            <input type="number" class="form-control"
                            
                            onChange={(event) => {
                                setQuantity(event.target.value);
                              }}
                            id="quantity" placeholder="eg.7"/>
                        </div>
                    </div>
                </div>
                <div class="form-footer mt-2">
                   

                   
  
  
            
                    {!isLoading && <button type="submit" onClick={addDetails} class="btn btn-primary"  style={{backgroundColor:"#085781"}}>Save</button>
          
                } 
                {isLoading &&
                    <button type="submit" class="btn btn-primary btn-md btn-block mt-3 waves-effect" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
                }


                <button type="button" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Close</button>
          
                <ToastContainer />
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
  )
}

export default AccountSetting