import React, { useState, useEffect } from "react";
import SideMenu from './SideMenu'
import TopHeader from './TopHeader'

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import ProductsComponent from './ProductsComponent';
import POSComponent from './POSComponent';
import { useNavigate,Link} from "react-router-dom"

import { productsArray } from '../../../helpers/productsStore';
import Store from './Store';
import SalesComponent from './SalesComponent';
import OrdersComponent from "./OrdersComponent";

function RetailPOS() {


    const [showPOS, setShowPOS] = useState(true);

    const [showSales, setShowSales] = useState(false);

    const [showOrders, setShowOrders] = useState(false);

    
  let history = useNavigate();

   

    const displayPOS=()=>{

        setShowPOS(true)
        setShowOrders(false)
        setShowSales(false)
        
 
 
 
     }


     const viewOrders=()=>{

        setShowPOS(false)
        setShowSales(false)
        setShowOrders(true)
        
 
 
 
     }

    const viewSales=()=>{

       setShowPOS(false)
       setShowOrders(false)
       
       setShowSales(true)
       



    }
    return (
      <div class="main-body app sidebar-mini ltr">
      <div class="page custom-index">
  
      <div class="main-header side-header sticky nav nav-item">
  
  
  
      <TopHeader></TopHeader>
  
  
      
  
  
               
              </div>
  
  
              <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
              <div class="sticky">
                  <aside class="app-sidebar sidebar-scroll">
                  <div class="main-sidebar-header active">
                  <a class="desktop-logo logo-light active" href="/home_retailer"><img src="assets/img/brand/logo_c.jpeg" class="main-logo" alt="logo"/></a>
                  <a class="desktop-logo logo-dark active" href="/home_retailer"><img src="assets/img/brand/logo_c.jpeg" class="main-logo" alt="logo"/></a>
                  <a class="logo-icon mobile-logo icon-light active" href="/home_retailer"><img src="assets/img/brand/favicon.png" alt="logo"/></a>
                  <a class="logo-icon mobile-logo icon-dark active" href="/home_retailer"><img src="assets/img/brand/favicon-white.png" alt="logo"/></a>
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
                                          <a class="nav-link thumb active mb-2" href="javascript:void(0);" onClick={displayPOS}><i class="fe fe-home"></i> POS </a>
                                          <a class="nav-link border-top-0 thumb mb-2" href="javascript:void(0);" onClick={viewOrders}><i class="fe fe-grid"></i>Orders</a>
                                       
                                    
                                          <a class="nav-link border-top-0 thumb mb-2" href="javascript:void(0);" onClick={viewSales}><i class="fe fe-layers"></i> Sales</a>
                                          
                                          <a class="nav-link border-top-0 thumb mb-2" href="javascript:void(0);"><i class="fe fe-bell"></i> Notifications</a>
                                      </nav>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-9">
                      <div class="card">
                          <div class="card-body">

                         


                            

                          {showPOS && <Store></Store>}

                              
  
  
  
  
                        

                          {showPOS && <POSComponent></POSComponent>}


                          {showSales && <SalesComponent></SalesComponent>}

                          {showOrders &&<OrdersComponent></OrdersComponent>}

                       
  
                           
  
  
  
  
  
                         
                          
                             
                              
                          </div>
                          <div class="card-footer">
  
  
                      
                              
  
                              
                    
                         
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

export default RetailPOS