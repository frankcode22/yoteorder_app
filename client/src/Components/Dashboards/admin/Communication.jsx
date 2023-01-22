import {React, useEffect,useState,useContext,useCallback} from 'react';
import { lazy, Suspense } from 'react';



//import axios from 'axios';

import API from '../../../services';

import { Helmet } from "react-helmet";

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../../helpers/AuthContext'


import { useNavigate,Link} from "react-router-dom"

import { Progress } from 'reactstrap';



import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import LocationDataContextInit from '../../../helpers/LocationDataContextInit';
import LocationDataContext from '../../../helpers/LocationDataContext';
//import SearchPlaces from './SearchPlaces';

import { Modal, Button } from "react-bootstrap";

import {useParams} from "react-router-dom"


import {VendorAccount,Player} from '../../../utils/VideoPlayers'


import SideBarMenu from './SideBarMenu'
import SupplierDetails from './SupplierDetails';
import TopBarNew from './TopBarNew';
import RetailerDetails from './RetailerDetails';

import DataContext from '../../../helpers/DataContext';

function Communication() {

    const {bussinessList, setBussinessList} = useContext(DataContext);
    const {retailerList, setRetailerList} =useContext(DataContext);

    



    const [showSupplierDetails,setShowSupplierDetails]=useState(true);


    const [showGridView,setShowGridView]=useState(false);

    

    const [isDivLoading, setIsDivLoading] = useState(false);


    const [displayCompose,setDisplayCompose]=useState(false);

    const [showInbox,setShowInbox]=useState(true);


   


    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [receiver_email, setreceiver_email] = useState("");
    const [phone_no, setPhone_no] = useState("");

    const [business_name, setbusiness_name] = useState("");

    const [errorMessage, setErrorMessage] = useState("");
    const [vendorsList, setVendorsList] = useState([]);

    const [notifications, setNotifications] = useState([]);

    const [userId, setUserId] = useState('');

    const [businessId, setBusinessId] = useState('');

    const [isLoading,setLoading]=useState(false);



    
   
    //const [service_type, set_service_type] = useState("");

    let { id } = useParams();
  
  
    let history = useNavigate();
    
    
    
    useEffect(()=>{
    
       
       
    

              
   
       
    
    
    
        
    
    
    
    },[]);
    
    
    const viewSelectedProduct=(id)=>{
    
        history('/products/'+id)
    
    }


    const showSupportEntryForm=()=>{

        setShowSupplierDetails(true)

        
      }


      
const showInGridView=()=>{
    
    setShowSupplierDetails(false)
    setShowGridView(true)
  
    //setShowBusinessSetupDiv(false)
    //setShowHelpAndSupport(false)
  }

  const showInTabularView=()=>{
    
    setShowSupplierDetails(true)
    setShowGridView(false)
  
    //setShowBusinessSetupDiv(false)
    //setShowHelpAndSupport(false)
  }


  const payload={

    subject:subject,
    message:message,
    receiver_email:receiver_email,
    from_:'patamtaani',
   
    UserId:userId,
    BusinessId:businessId,
}


  const sendMail = ()  => {
    setLoading(true);

     //axios.post("https://yoteorder-server.herokuapp.com/business",buss_data).then((response)=>{
    
    API.post('https://yoteorder-server.herokuapp.com/notification',payload).then((response)=>{

    


       
        setTimeout(() => {
            setLoading(false);
            toast.success('Saved');
       
        }, 1500);
     
       //  history("/dashboard");
      
       
    })

}
  


const msg_payload={

   
    message:message,
    phone_no:phone_no
   
   
    
}

  const sendMsg = ()  => {
    setLoading(true);

     //axios.post("https://yoteorder-server.herokuapp.com/business",buss_data).then((response)=>{
    
    API.post('users/communicate',msg_payload).then((response)=>{


        console.log('Server response',response.data)

    


       
        setTimeout(() => {
            setLoading(false);
            toast.success('Message Sent');
       
        }, 1000);
     
       //  history("/dashboard");
      
       
    })

}
  


      

  return (
    <div class="main-body app sidebar-mini ltr">
    <div class="page custom-index">

    <div class="main-header side-header sticky nav nav-item">



    <TopBarNew></TopBarNew>


    


             
            </div>


            <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
            <div class="sticky">
                <aside class="app-sidebar sidebar-scroll">
                <div class="main-sidebar-header active">
                <a class="desktop-logo logo-light active" href="/home_admin"><img src="assets/img/brand/logo_c.jpeg" class="main-logo" alt="logo"/></a>
                <a class="desktop-logo logo-dark active" href="/home_admin"><img src="assets/img/brand/logo_c.jpeg" class="main-logo" alt="logo"/></a>
                <a class="logo-icon mobile-logo icon-light active" href="/home_admin"><img src="assets/img/brand/favicon.png" alt="logo"/></a>
                <a class="logo-icon mobile-logo icon-dark active" href="/home_admin"><img src="assets/img/brand/favicon-white.png" alt="logo"/></a>
            </div>





                    <SideBarMenu/>




                    
                </aside>
            </div>



              <div class="main-content app-content">

                  <div class="main-container container-fluid">

                  <div class="breadcrumb-header justify-content-between">
                        <div>
                            <h4 class="content-title mb-2">Hi, welcome back!</h4>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a   href="javascript:void(0);">Retailers</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">PataMtaani</li>
                                </ol>
                            </nav>
                        </div>
                        <div class="d-flex my-auto">
                            <div class=" d-flex right-page">
                                <div class="d-flex justify-content-center me-5">
                                    <div class="">
                                        <span class="d-block">
                                            <span class="label ">EXPENSES</span>
                                        </span>
                                        <span class="value">
                                            Ksh.0
                                        </span>
                                    </div>
                                    <div class="ms-3 mt-2">
                                        <span class="sparkline_bar"></span>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <div class="">
                                        <span class="d-block">
                                            <span class="label">PROFIT</span>
                                        </span>
                                        <span class="value">
                                           Ksh.0
                                        </span>
                                    </div>
                                    <div class="ms-3 mt-2">
                                        <span class="sparkline_bar31"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                    <div class="col-lg-4 col-xl-3">
                        <div class="card custom-card">
                            <div class="card-header">
                                <div class="card-title">Settings</div>
                            </div>
                            <div class="main-content-left main-content-left-mail card-body pt-0 ">
                                <div class="main-settings-menu">
                                    <nav class="nav main-nav-column">
                                        <a class="nav-link thumb active mb-2" href="javascript:void(0);" onClick={showInTabularView}><i class="fe fe-home"></i> Message </a>
                                        <a class="nav-link border-top-0 thumb mb-2" href="javascript:void(0);"  onClick={showInGridView}><i class="fe fe-grid"></i>Email</a>

                                        <a class="nav-link border-top-0 thumb mb-2" href="javascript:void(0);"><i class="fe fe-bell"></i> Notifications</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">

                    

                    <div class="card custom-card">
                    <div class="card-header">
                        <div class="card-title">Overview</div>



                        <div class="card-body p-2">
                        <div class="row">
                        <div class="col-xl-5 col-lg-8 col-md-8 col-sm-8">
                            <div class="input-group d-flex w-100 float-start">
                                <input type="text" class="form-control border-end-0 my-2" placeholder="Search ..."/>
                                <button class="btn input-group-text bg-transparent border-start-0 text-muted my-2">
                                    <i class="fe fe-search text-muted" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    
                    </div>
                        </div>



                          {showSupplierDetails &&  

                            <div class="col-md-12 col-xl-12">
                            <div class="card overflow-hidden review-project">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h4 class="card-title mg-b-10">All Retailers</h4>
                                        <i class="mdi mdi-dots-horizontal text-gray"></i>
                                    </div>

                                    <form>
                                   
            
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <div class="form-floating">
                            <input type="text" id="buss-contacts" class="form-control phone-mask"

value={phone_no}

onChange={(event) => {
    setPhone_no(event.target.value);
  }}
placeholder="eg.07xx xxx xxx" aria-label="0714639773" />
                                <label for="floatingInput">Phone No</label>
                            </div>

                           <input type="hidden" class="form-control" id="floatingInput"
                            value={userId}
                            onChange={(event) => {
                                setUserId(event.target.value);
                              }}
                            
                            placeholder="name"/>
                        </div>
                       
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <div class="form-floating floating-label">
                                <textarea class="form-control" placeholder="review" value={message}  onChange={(event) => {
                                    setMessage(event.target.value);
                                  }} id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Message</label>
                            </div>
                        </div>
                       
                    </div>

                    <div class="col-md-6">
                    <div class="form-group">



                    {!isLoading  && <button type="submit" onClick={sendMsg} class="btn btn-primary btn-space mb-0">Send Message</button>

                } 


            

                {isLoading &&
                    <button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled><div class="spinner-grow text-success me-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>Saving...</button>
                }


                    
            
        </div>
                       
                    </div>

                
            </div></form>
                                  
                                <ToastContainer></ToastContainer>  
                                </div>
                            </div>
                        </div>
                               }



                               {showGridView &&  

                                <div class="row">
                                {bussinessList.map((value,key)=>{

                                    return (
										<div class="col-xl-6 col-lg-12 col-md-12">
											<div class="card border p-0 over-flow-hidden">
												<div class="media card-body media-xs overflow-visible ">
													<img class="avatar brround avatar-md me-3" src="../assets/img/faces/12.jpg" alt="avatar-img"/>
													<div class="media-body valign-middle">
														<a href="" class=" fw-semibold text-dark">{value.business_name}</a>
														<p class="text-muted mb-0">{value.contacts}</p>
													</div>
													<div class="media-body valign-middle text-end overflow-visible mt-2">
														<button class="btn btn-primary" type="button">View More</button>
													</div>
												</div>
											</div>
										</div>
										
                                        )




                                    })}
										
										
										
									</div>
                                   }

                               


                    </div>
                </div>
                   
                </div>
                </div>


                   



                  </div>






              </div>




              <div class="main-footer ht-45">
            <div class="container-fluid pd-t-0-f ht-100p">
                <span> Copyright © 2022 <a href="javascript:void(0);" class="text-primary">PataMtaani Ltd</a>.All rights reserved.</span>
            </div>
        </div>


            


    </div>

    <a href="#top" id="back-to-top"><i class="las la-angle-double-up"></i></a>
    
    
    </div>
  )
}

export default Communication