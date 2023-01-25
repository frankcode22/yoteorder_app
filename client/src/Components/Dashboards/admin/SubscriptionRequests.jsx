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

import DataContext from '../../../helpers/DataContext';

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
import SubscriptionRequestsDetails from './SubscriptionRequestsDetails';

function SubscriptionRequests() {


    // const {supplierList, setSupplierList} = useContext(DataContext);

    const [isLoading,setLoading]=useState(false);


    const[requestList,setRequestList]=useState([]);

    const [showSupplierDetails,setShowSupplierDetails]=useState(true);


    const [showGridView,setShowGridView]=useState(false);

    
   
    //const [service_type, set_service_type] = useState("");

    let { id } = useParams();
  
  
    let history = useNavigate();
    
    
    
    useEffect(()=>{
    
       
       
    
    
   



            API.get("subscription/currentrequests",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
           
    
            if(response.data){
       
                setRequestList(response.data)
       
             }
             else{
                setRequestList([])
       
             }
             
       
               console.log("THE REQUEST LIST DATA "+response.data)
              })
       
    
    
    
        
    
    
    
    },[]);
    
    
    const viewSelectedRequest=(id)=>{
    
       // history('/products/'+id)
    
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
                                    <li class="breadcrumb-item"><a   href="javascript:void(0);">Suppliers</a></li>
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
                                    <a class="nav-link thumb active mb-2" href="javascript:void(0);" onClick={showInTabularView}><i class="fe fe-home"></i> Main </a>
                                    <a class="nav-link border-top-0 thumb mb-2" href="javascript:void(0);"  onClick={showInGridView}><i class="fe fe-grid"></i>Grid View</a>
                                        
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



                       



                          {showSupplierDetails &&  

                            <div class="col-md-12 col-xl-12">
                            <div class="card overflow-hidden review-project">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                      
                                        <i class="mdi mdi-dots-horizontal text-gray"></i>
                                    </div>
                                  
                                    <div class="table-responsive mb-0">
                                        <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap table-striped ">
                                            <thead>
                                                <tr>
                                                <th class="text-center">

                                                #

                                                </th>
                                               
                                                <th>Name</th>
                                                <th>Business Name</th>
                                                <th>Contacts</th>
                                               
                                                <th>Account</th>
                                                
                                                
                                               
                                             
                                                <th class="text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {requestList.map((value,key)=>{

                                                return (
                                                <tr>
                                                    <td>
                                                    {key} 
                                                    </td>
                                                   
                                        <td class="text-nowrap align-middle">{value.first_name}</td>
                                        <td class="text-nowrap align-middle">{value.business_name}</td>

                                       
                                
                                       

                                        
                                     
                                       

                                       

                                        <td class="text-nowrap align-middle">{value.phone_no}</td>

                                        <td class="text-nowrap align-middle">{value.account_type}</td>

                                       
                                         {/** <td class="text-nowrap align-middle">{value.Business.longitude?value.Business.longitude:'no bizz'}</td> */}
                                        

                                        

                                      

                                       

                                        <td class="text-center align-middle">
                                            <div class="btn-group align-top">
                                            <button class="btn btn-sm btn-primary badge" onClick={() => {
                                                viewSelectedRequest(value.id);
                                                  }} type="button">View More</button>


                                                  
                                            
                                                <button class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Edit</button> <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
                                            </div>
                                        </td>
                                                </tr>
                                                )




                                            })}
                                                
                                                
                                                
                                            
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                               }



                               {showGridView &&  

                                <div class="row">
                                {requestList.map((value,key)=>{

                                    return (
										<div class="col-xl-6 col-lg-12 col-md-12">
											<div class="card border p-0 over-flow-hidden">
												<div class="media card-body media-xs overflow-visible ">
													<img class="avatar brround avatar-md me-3" src="../assets/img/faces/12.jpg" alt="avatar-img"/>
													<div class="media-body valign-middle">
														<a href="" class=" fw-semibold text-dark">{value.name}</a>
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
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-4 main-content-label">Manage Selected Request</div>




                            <SubscriptionRequestsDetails setRequestList={setRequestList} requestList={requestList}></SubscriptionRequestsDetails>

                          


                         

                          

                         





                       
                        
                           
                            
                        </div>
                        <div class="card-footer">


                    
                            

                            
                  
                        <ToastContainer/>
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

export default SubscriptionRequests