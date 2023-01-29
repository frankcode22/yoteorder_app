import React, { useState, useEffect } from "react";
import SideMenu from './SideMenu'
import TopHeader from './TopHeader'

import API from '../../../services';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import ProductsComponent from './ProductsComponent';
import POSComponent from './POSComponent';
import { useNavigate,Link} from "react-router-dom"

import { productsArray } from '../../../helpers/productsStore';
import Store from './Store';
import SalesComponent from './SalesComponent';
import OrdersComponent from "./OrdersComponent";
import CustomerBills from "./CustomerBills";

import './devicestyles.css'
import MobileMenu from "./MobileMenu";

function RetailPOS() {


    const [showPOS, setShowPOS] = useState(true);

    const [showSales, setShowSales] = useState(false);

    const [showCustBill, setShowCustBill] = useState(false);

    const [showOrders, setShowOrders] = useState(false);

    const [isDivLoading, setIsDivLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    const [contacts, setContacts] = useState([]);


    const [jsonArray, setjsonArray] = useState([]);


 

    

    
  let history = useNavigate();


  useEffect(()=>{

    setIsDivLoading(true);

    
    API.get('order/datebasedorders', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

        // setShowP(true);
  
  
     
           
              setTimeout(() => {
                
                  setContacts(response.data);
  
                
                  setIsDivLoading(false)  
              
               
              }, 1000);
  
              //setSeller_name(response.data.Users.first_name)
              
          }).catch(() => {
              setErrorMessage("Unable to fetch your search.Make sure you have internet connection.");
              setIsDivLoading(false);
           });




  },[])

   

    const displayPOS=()=>{

        setShowPOS(true)
        setShowOrders(false)
        setShowSales(false)
        
        setShowCustBill(false)
 
 
     }


     const viewOrders=()=>{
        setShowCustBill(false)
        setShowPOS(false)
        setShowSales(false)
        setShowOrders(true)
        
 
 
 
     }

    const viewSales=()=>{

       setShowPOS(false)
       setShowOrders(false)
       
       setShowSales(true)
       setShowCustBill(false)
     

    }


    const viewCustBill=()=>{

        setShowPOS(false)
        setShowOrders(false)
        
        setShowSales(false)
        setShowCustBill(true)
      
 
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
                    


                         <MobileMenu displayPOS={displayPOS} viewCustBill={viewCustBill} viewOrders={viewOrders} viewSales={viewSales}></MobileMenu>











                      <div class="col-md-9">
                      <div class="card">
                          <div class="card-body">

                         


                            

                          {showPOS && <Store></Store>}

                              
  
  
  
  
                        

                          {showPOS && <POSComponent></POSComponent>}


                          {showSales && <SalesComponent></SalesComponent>}

                          {showCustBill && <CustomerBills></CustomerBills>}

                          {showOrders &&<OrdersComponent data={contacts}></OrdersComponent>}

                       
  
                           
  
  
  
  
  
                         
                          
                             
                              
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