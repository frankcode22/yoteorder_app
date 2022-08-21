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


    const [servicesList, setServicesList] = useState([]);

    const [staffList, setStaffList] = useState([]);



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



  useEffect(()=>{



     //axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
     axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

        setUserId(response.data.id)
  
  
       })


       axios.get('https://yoteorder-server.herokuapp.com/users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
        if(response.data!=null){
    
          setbusinessId(response.data.id);

          setServicesList(response.data.Services);

          setStaffList(response.data.Staffs);

          setbusiness_name(response.data.business_name);

          setBussSetup(true);
      
        
      
        }
        else{
      
      
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
                toast.info('Saved');
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
       
        <div class="row">
            <div class="col-xl-3">
                <div class="card">
                    <div class="list-group list-group-transparent mb-0 mail-inbox pb-3">
                        <div class="mt-4 mb-4 mx-4 text-center">
                        <div class="col-sm-6 col-md-6 col-xl-3">
                       

                       
                    </div>
                            <a href="email-inbox.html" class="btn btn-primary btn-lg d-grid">Inbox</a>
                            
                        </div>
                        <a href="email-inbox.html" class="list-group-item d-flex align-items-center active mx-4">
                            <span class="icons"><i class="ri-mail-line"></i></span> Inbox <span class="ms-auto badge bg-secondary bradius">14</span>
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
                        <a class="list-group-item d-flex align-items-center mx-4" data-bs-effect="effect-flip-horizontal" data-bs-toggle="modal" href="#modaldemo8">
                        
                        <span class="icons"><i class="ri-price-tag-3-line"></i></span> Services
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
                    <div class="card-body border-top p-0 py-3">
                        <div class="list-group list-group-transparent mb-0 mail-inbox mx-4">
                            <a href="javascript:void(0)" class="list-group-item list-group-item-action d-flex align-items-center py-2">
                                <span class="w-3 h-3 brround bg-primary me-2"></span> Friends
                            </a>
                            <a href="javascript:void(0)" class="list-group-item list-group-item-action d-flex align-items-center py-2">
                                <span class="w-3 h-3 brround bg-secondary me-2"></span> Family
                            </a>
                            <a href="javascript:void(0)" class="list-group-item list-group-item-action d-flex align-items-center py-2">
                                <span class="w-3 h-3 brround bg-success me-2"></span> Social
                            </a>
                            <a href="javascript:void(0)" class="list-group-item list-group-item-action d-flex align-items-center py-2">
                                <span class="w-3 h-3 brround bg-info me-2"></span> Office
                            </a>
                            <a href="javascript:void(0)" class="list-group-item list-group-item-action d-flex align-items-center py-2">
                                <span class="w-3 h-3 brround bg-warning me-2"></span> Work
                            </a>
                            <a href="javascript:void(0)" class="list-group-item list-group-item-action d-flex align-items-center py-2">
                                <span class="w-3 h-3 brround bg-danger me-2"></span> Settings
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-9">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Compose new message</h3>
                    </div>
                    <div class="card-body">



                    <div class="panel panel-primary">
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
                                      <option value="Beauty" selected>Beauty</option>
                                      <option value="Education" selected>Education</option>
                                      <option value="Automotive">Wellbeing</option>
                                      <option value="pt">Automotive</option>
                                      <option value="home care">Home Care</option>
                                      <option value="Maintenance">Maintenance</option>
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
                                  
                                  placeholder="Eg. Ruai By Pass" />
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
                            <div class="tab-pane" id="tab22">
                                <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                                    humour and the like</p>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
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
                                      <option value="Beauty" selected>Beauty</option>
                                      <option value="Education" selected>Education</option>
                                      <option value="Automotive">Wellbeing</option>
                                      <option value="pt">Automotive</option>
                                      <option value="home care">Home Care</option>
                                      <option value="Maintenance">Maintenance</option>
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
                                  
                                  placeholder="Eg. Ruai By Pass" />
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
                </div>




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
                            <button class="btn btn-primary btn-space mb-0">Send message</button>
                        </div>
                    </div>
                </div>
            </div>





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
                        <input type="text" id="service_name" class="form-control" placeholder="Eg. Automotive"
                        
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