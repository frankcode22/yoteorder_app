import React from 'react'
import { useEffect,useState,useContext,useCallback} from 'react';
import SideMenu from './SideMenu'
import TopBar from './TopBar'

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useNavigate,Link} from "react-router-dom"
import NewEngagementRequests from './NewEngagementRequests';



import API from '../../../services';
import { Progress } from 'reactstrap';

import DataContext from '../../../helpers/DataContext';

function RetailerOrders(){

    const {businessDetails,setBusinessDetails} = useContext(DataContext);

    const {supplierDetails,setSupplierDetails} = useContext(DataContext);

    const [supplierId, setsupplierId] = useState('');

    const [isBusinessSet,setIsBusinessSet] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");


  

    useEffect(()=>{
  
     
    
    
        let buss_status=localStorage.getItem('business_set')
    
         console.log("BUSS STATUS",buss_status)
        
        setIsBusinessSet(buss_status)
  
  
  
        //console.log("HERE IS YOUR SUPPLIER ACCOUNT DETAILS",supplierDetails.my_buss);
    
    
        if(supplierDetails.my_buss!=null){
         
    
        
    
          setsupplierId(supplierDetails.my_buss.id)
              // setbusinessId(response.data.my_buss.id);
              
    
       
       
         
       
         }
         else{
       
           setErrorMessage("Unable to fetch your account details.Kindly check your internet connection!!");
          // setIsDivLoading(false);
         }

        },[businessDetails,supplierDetails]);


    return (
      <div class="main-body app sidebar-mini ltr">
      <div class="page custom-index">
  
      <div class="main-header side-header sticky nav nav-item">
  
  
  
     <TopBar></TopBar>
  
  
      
  
  
               
              </div>
  
  
              <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
              <div class="sticky">
                  <aside class="app-sidebar sidebar-scroll">
                      <div class="main-sidebar-header active">
                          <a class="desktop-logo logo-light active" href="index.html"><img src="assets/img/brand/logo_c.jpeg" class="main-logo" alt="logo"/></a>
                          <a class="desktop-logo logo-dark active" href="index.html"><img src="assets/img/brand/logo_c.jpeg" class="main-logo" alt="logo"/></a>
                          <a class="logo-icon mobile-logo icon-light active" href="index.html"><img src="assets/img/brand/favicon.png" alt="logo"/></a>
                          <a class="logo-icon mobile-logo icon-dark active" href="index.html"><img src="assets/img/brand/favicon-white.png" alt="logo"/></a>
                      </div>
  
  
  
  
                   <SideMenu></SideMenu>
  
  
  
  
                      
                  </aside>
              </div>
  
  
  
                <div class="main-content app-content">
  
                    <div class="main-container container-fluid">
  
                    <div class="breadcrumb-header justify-content-between">
                          <div>
                              <h4 class="content-title mb-2">Hi, welcome back!</h4>
                              <nav aria-label="breadcrumb">
                                  <ol class="breadcrumb">
                                      <li class="breadcrumb-item"><a   href="javascript:void(0);">Dashboard</a></li>
                                      <li class="breadcrumb-item active" aria-current="page">Project</li>
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
                                          <Link class="nav-link thumb active mb-2" to='/my_stores'><i class="fe fe-home"></i> Main </Link>
                                          <Link class="nav-link border-top-0 thumb mb-2" to='/my_stores'><i class="fe fe-grid"></i>Tabular View</Link>
                                       
                                    
                                         
                                          
                                          <a class="nav-link border-top-0 thumb mb-2" href="javascript:void(0);"><i class="fe fe-bell"></i> Notifications</a>
                                      </nav>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-9">
                      <div class="card">
                          <div class="card-body">

                         


                            



                              
  
  
  
  
                        <NewEngagementRequests supplierId={supplierId}></NewEngagementRequests>
  
                           
  
  
  
  
  
                         
                          
                             
                              
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



export default RetailerOrders
