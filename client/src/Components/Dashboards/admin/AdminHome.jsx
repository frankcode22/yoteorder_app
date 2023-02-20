import React from 'react'
import {useEffect,useState,useContext} from 'react';


//import API from 'API';

import API from '../../../services';

import{useNavigate} from 'react-router-dom'

import DataContext from '../../../helpers/DataContext';
import SideBarMenu from './SideBarMenu'
import TopBarNew from './TopBarNew'
import { PataMtaaniAdminDataProvider } from '../../../helpers/PataMtaaniAdminContext';
import SubscriptionData from './SubscriptionData';

function AdminHome() {

    const [productsList, setProductsList] = useState([]);
    const [ordersList, setOrdersList] = useState([]);

    const [customersList, setCustomersList] = useState([]);

    const [supplierList, setSupplierList] = useState([]);

    const {bussinessList, setBussinessList} = useContext(DataContext);

    const {retailerList, setRetailerList} = useContext(DataContext);

    const [isLoading,setLoading]=useState(false);


    const [isDivLoading, setIsDivLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    const [vendorsList, setVendorsList] = useState([]);


    const history=useNavigate();


   

       useEffect(()=>{

   
       
    
    
     
    
        setIsDivLoading(true);
 
 
        
 
 
    console.log("HI ADMIN ALL BUSINESS DETAILS FROM CONTREXT:",bussinessList);
 
 
    if(bussinessList!=null){
 
 
     setTimeout(() => {
 
     setVendorsList(bussinessList)

     setIsDivLoading(false)  
         
      
     }, 3000);
 
    
 
 
 }
 else{
 
     setErrorMessage("Unable to fetch your vendors list");
     setIsDivLoading(false);
 }


 API.get('suppliers/getall',{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    // API.get('business/bestRated').then((response) => {

   

        setSupplierList(response.data)

     
      setTimeout(() => {

     

       //  setNotifications(response.data)

       
      }, 1000);

      //setSeller_name(response.data.Users.first_name)
      
  }).catch((error) => {
      

      console.log("Error occured while fetching notifications "+error)
    
   });



 API.get('users/customers').then((response) => {
     // API.get('business/bestRated').then((response) => {

    

    

      
       setTimeout(() => {

        setCustomersList(response.data)

        //  setNotifications(response.data)

        
       }, 1000);

       //setSeller_name(response.data.Users.first_name)
       
   }).catch((error) => {
       

       console.log("Error occured while fetching notifications "+error)
     
    });



    API.get('product/allproducts',{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
        // API.get('business/bestRated').then((response) => {
   
       
   
       
   
         
          setTimeout(() => {
   
           setProductsList(response.data)
   
           //  setNotifications(response.data)
   
           
          }, 500);
   
          //setSeller_name(response.data.Users.first_name)
          
      }).catch((error) => {
          
   
          console.log("Error occured while fetching notifications "+error)
        
       });

       API.get('order/allorders',{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
        // API.get('business/bestRated').then((response) => {
   
       
   
            setOrdersList(response.data)
   
         
          setTimeout(() => {
   
         
   
           //  setNotifications(response.data)
   
           
          }, 1000);
   
          //setSeller_name(response.data.Users.first_name)
          
      }).catch((error) => {
          
   
          console.log("Error occured while fetching notifications "+error)
        
       });
 
 
    
 
 
 },[bussinessList])

    
    return (

      <PataMtaaniAdminDataProvider>
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
                                      <li class="breadcrumb-item"><a   href="javascript:void(0);">Admin</a></li>
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
  
  
                      <div class="main-content-body">
  
  
                            <div class="row row-sm">
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div class="card overflow-hidden project-card">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div class="my-auto">
                                                <img src="assets/img/icons/retailer.png"  class="me-4 ht-60 wd-60 my-auto primary" alt="logo"/>
                                                    
                                                </div>
                                                <div class="project-content">
                                                    <h6>Retailers</h6>
                                                    <ul>
                                                        <li>
                                                            <strong>Active</strong>
                                                            <span>{retailerList.length}</span>
                                                        </li>
  
                                                        <li>
                                                            <strong>Inactive</strong>
                                                            <span>0</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div class="card  overflow-hidden project-card">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div class="my-auto">
                                                <img src="assets/img/icons/supplier.png"  class="me-4 ht-60 wd-60 my-auto info" alt="logo"/>
                                                </div>
                                                <div class="project-content">
                                                    <h6>Suppiers</h6>
                                                    <ul>
                                                        <li>
                                                            <strong>Active</strong>
                                                            <span>{supplierList.length}</span>
                                                        </li>
  
                                                        <li>
                                                            <strong>Inactive</strong>
                                                            <span>0</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div class="card overflow-hidden project-card">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div class="my-auto">
                                                    <svg enable-background="new 0 0 512 512" class="me-4 ht-60 wd-60 my-auto warning" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m259.2 317.72h-6.398c-8.174 0-14.824-6.65-14.824-14.824 1e-3 -8.172 6.65-14.822 14.824-14.822h6.398c8.174 0 14.825 6.65 14.825 14.824h29.776c0-20.548-13.972-37.885-32.911-43.035v-33.74h-29.777v33.739c-18.94 5.15-32.911 22.487-32.911 43.036 0 24.593 20.007 44.601 44.601 44.601h6.398c8.174 0 14.825 6.65 14.825 14.824s-6.65 14.824-14.825 14.824h-6.398c-8.174 0-14.824-6.65-14.824-14.824h-29.777c0 20.548 13.972 37.885 32.911 43.036v33.739h29.777v-33.74c18.94-5.15 32.911-22.487 32.911-43.035 0-24.594-20.008-44.603-44.601-44.603z" />
                                                        <path d="m502.7 432.52c-7.232-60.067-26.092-111.6-57.66-157.56-27.316-39.764-65.182-76.476-115.59-112.06v-46.29l37.89-98.425-21.667-0.017c-6.068-4e-3 -8.259-1.601-13.059-5.101-6.255-4.559-14.821-10.802-30.576-10.814h-0.046c-15.726 0-24.292 6.222-30.546 10.767-4.799 3.487-6.994 5.081-13.041 5.081h-0.027c-6.07-5e-3 -8.261-1.602-13.063-5.101-6.255-4.559-14.821-10.801-30.577-10.814h-0.047c-15.725 0-24.293 6.222-30.548 10.766-4.8 3.487-6.995 5.081-13.044 5.081h-0.027l-21.484-0.017 36.932 98.721v46.117c-51.158 36.047-89.636 72.709-117.47 111.92-33.021 46.517-52.561 98.116-59.74 157.74l-9.304 77.285h512l-9.304-77.284zm-301.06-395.47c4.8-3.487 6.995-5.081 13.045-5.081h0.026c6.07 4e-3 8.261 1.602 13.062 5.101 6.255 4.559 14.821 10.802 30.578 10.814h0.047c15.725 0 24.292-6.222 30.546-10.767 4.799-3.487 6.993-5.081 13.041-5.081h0.026c6.068 5e-3 8.259 1.602 13.059 5.101 2.869 2.09 6.223 4.536 10.535 6.572l-21.349 55.455h-92.526l-20.762-55.5c4.376-2.041 7.773-4.508 10.672-6.614zm98.029 91.89v26.799h-83.375v-26.799h83.375zm-266.09 351.08 5.292-43.947c6.571-54.574 24.383-101.7 54.458-144.07 26.645-37.537 62.54-71.458 112.73-106.5h103.78c101.84 71.198 150.75 146.35 163.29 250.56l5.291 43.948h-444.85z" />
                                                    </svg>
                                                </div>
                                                <div class="project-content">
                                                    <h6>Revenue</h6>
                                                    <ul>
                                                        <li>
                                                            <strong>Earnings</strong>
                                                            <span>Ksh.0</span>
                                                        </li>
                                                        <li>
                                                            <strong>Expenses</strong>
                                                            <span>Ksh.50,000</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
  
  
  
                            <div class="row row-sm ">
                                <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                                    <div class="card overflow-hidden">
                                        <div class="card-header bg-transparent pd-b-0 pd-t-20 bd-b-0">
                                            <div class="d-flex justify-content-between">
                                                <h4 class="card-title mg-b-10">Latest subscriptions</h4>
                                                <i class="mdi mdi-dots-horizontal text-gray"></i>
                                            </div>
                                           
                                        </div>
                                        <div class="card-body pd-y-7">
                                        <SubscriptionData></SubscriptionData>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                    <div class="card overflow-hidden">
                                        <div class="card-body pb-3">
                                            <div class="d-flex justify-content-between">
                                                <h4 class="card-title mg-b-10">Latest &amp; Activities</h4>
                                                <i class="mdi mdi-dots-horizontal text-gray"></i>
                                            </div>
                                           
                                            <div class="table-responsive mb-0 projects-stat tx-14">
                                                <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap  ">
                                                    <thead>
                                                        <tr>
                                                            <th>Activity &amp;</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div class="project-names">
                                                                    <h6 class="bg-primary-transparent text-primary d-inline-block me-2 text-center">U</h6>
                                                                    <p class="d-inline-block font-weight-semibold mb-0">New Subcription</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="badge bg-success">Completed</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="project-names">
                                                                    <h6 class="bg-pink-transparent text-pink d-inline-block text-center me-2">R</h6>
                                                                    <p class="d-inline-block font-weight-semibold mb-0">Retailer Order</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="badge bg-warning">Pending</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="project-names">
                                                                    <h6 class="bg-success-transparent text-success d-inline-block me-2 text-center">W</h6>
                                                                    <p class="d-inline-block font-weight-semibold mb-0">New Subcription</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="badge bg-danger">Canceled</div>
                                                            </td>
                                                        </tr>
                                                       
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
  
                            <div class="row row-sm ">
                              <div class="col-md-12 col-xl-12">
                                  <div class="card overflow-hidden review-project">
                                     
                                          



                                              


                                      
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
      </PataMtaaniAdminDataProvider>
    )
  }
  

export default AdminHome