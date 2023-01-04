import React from 'react'
import {useEffect,useState,useContext} from 'react';


//import API from 'API';

import API from '../../../services';

import{useNavigate} from 'react-router-dom'

import DataContext from '../../../helpers/DataContext';
import SideBarMenu from './SideBarMenu'
import TopBarNew from './TopBarNew'

function AdminHome() {

    const [productsList, setProductsList] = useState([]);
    const [ordersList, setOrdersList] = useState([]);

    const [customersList, setCustomersList] = useState([]);

    const [supplierList, setSupplierList] = useState([]);

    const {bussinessList, setBussinessList} = useContext(DataContext);

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
                                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                    <div class="card overflow-hidden project-card">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div class="my-auto">
                                                    <svg enable-background="new 0 0 469.682 469.682" version="1.1" class="me-4 ht-60 wd-60 my-auto primary" viewBox="0 0 469.68 469.68" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m120.41 298.32h87.771c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449h-87.771c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449z" />
                                                        <path d="m291.77 319.22h-171.36c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h171.36c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449z" />
                                                        <path d="m291.77 361.01h-171.36c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h171.36c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449z" />
                                                        <path d="m420.29 387.14v-344.82c0-22.987-16.196-42.318-39.183-42.318h-224.65c-22.988 0-44.408 19.331-44.408 42.318v20.376h-18.286c-22.988 0-44.408 17.763-44.408 40.751v345.34c0.68 6.37 4.644 11.919 10.449 14.629 6.009 2.654 13.026 1.416 17.763-3.135l31.869-28.735 38.139 33.959c2.845 2.639 6.569 4.128 10.449 4.18 3.861-0.144 7.554-1.621 10.449-4.18l37.616-33.959 37.616 33.959c5.95 5.322 14.948 5.322 20.898 0l38.139-33.959 31.347 28.735c3.795 4.671 10.374 5.987 15.673 3.135 5.191-2.98 8.232-8.656 7.837-14.629v-74.188l6.269-4.702 31.869 28.735c2.947 2.811 6.901 4.318 10.971 4.18 1.806 0.163 3.62-0.2 5.224-1.045 5.493-2.735 8.793-8.511 8.361-14.629zm-83.591 50.155-24.555-24.033c-5.533-5.656-14.56-5.887-20.376-0.522l-38.139 33.959-37.094-33.959c-6.108-4.89-14.79-4.89-20.898 0l-37.616 33.959-38.139-33.959c-6.589-5.4-16.134-5.178-22.465 0.522l-27.167 24.033v-333.84c0-11.494 12.016-19.853 23.51-19.853h224.65c11.494 0 18.286 8.359 18.286 19.853v333.84zm62.693-61.649-26.122-24.033c-4.18-4.18-5.224-5.224-15.673-3.657v-244.51c1.157-21.321-15.19-39.542-36.51-40.699-0.89-0.048-1.782-0.066-2.673-0.052h-185.47v-20.376c0-11.494 12.016-21.42 23.51-21.42h224.65c11.494 0 18.286 9.927 18.286 21.42v333.32z" />
                                                        <path d="m232.21 104.49h-57.47c-11.542 0-20.898 9.356-20.898 20.898v104.49c0 11.542 9.356 20.898 20.898 20.898h57.469c11.542 0 20.898-9.356 20.898-20.898v-104.49c1e-3 -11.542-9.356-20.898-20.897-20.898zm0 123.3h-57.47v-13.584h57.469v13.584zm0-34.482h-57.47v-67.918h57.469v67.918z" />
                                                    </svg>
                                                </div>
                                                <div class="project-content">
                                                    <h6>Retailers</h6>
                                                    <ul>
                                                        <li>
                                                            <strong>Active</strong>
                                                            <span>{bussinessList.length}</span>
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
                                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                    <div class="card  overflow-hidden project-card">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div class="my-auto">
                                                    <svg enable-background="new 0 0 438.891 438.891" class="me-4 ht-60 wd-60 my-auto danger" version="1.1" viewBox="0 0 438.89 438.89" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m347.97 57.503h-39.706v-17.763c0-5.747-6.269-8.359-12.016-8.359h-30.824c-7.314-20.898-25.6-31.347-46.498-31.347-20.668-0.777-39.467 11.896-46.498 31.347h-30.302c-5.747 0-11.494 2.612-11.494 8.359v17.763h-39.707c-23.53 0.251-42.78 18.813-43.886 42.318v299.36c0 22.988 20.898 39.706 43.886 39.706h257.04c22.988 0 43.886-16.718 43.886-39.706v-299.36c-1.106-23.506-20.356-42.068-43.886-42.319zm-196.44-5.224h28.735c5.016-0.612 9.045-4.428 9.927-9.404 3.094-13.474 14.915-23.146 28.735-23.51 13.692 0.415 25.335 10.117 28.212 23.51 0.937 5.148 5.232 9.013 10.449 9.404h29.78v41.796h-135.84v-41.796zm219.43 346.91c0 11.494-11.494 18.808-22.988 18.808h-257.04c-11.494 0-22.988-7.314-22.988-18.808v-299.36c1.066-11.964 10.978-21.201 22.988-21.42h39.706v26.645c0.552 5.854 5.622 10.233 11.494 9.927h154.12c5.98 0.327 11.209-3.992 12.016-9.927v-26.646h39.706c12.009 0.22 21.922 9.456 22.988 21.42v299.36z" />
                                                        <path d="m179.22 233.57c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437 31.869-14.106-14.629c-3.919-4.131-10.425-4.363-14.629-0.522-4.047 4.24-4.047 10.911 0 15.151l21.42 21.943c1.854 2.076 4.532 3.224 7.314 3.135 2.756-0.039 5.385-1.166 7.314-3.135l40.751-38.661c4.04-3.706 4.31-9.986 0.603-14.025-0.19-0.211-0.391-0.412-0.601-0.604z" />
                                                        <path d="m329.16 256.03h-120.16c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h120.16c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449z" />
                                                        <path d="m179.22 149.98c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437 31.869-14.106-14.629c-3.919-4.131-10.425-4.364-14.629-0.522-4.047 4.24-4.047 10.911 0 15.151l21.42 21.943c1.854 2.076 4.532 3.224 7.314 3.135 2.756-0.039 5.385-1.166 7.314-3.135l40.751-38.661c4.04-3.706 4.31-9.986 0.603-14.025-0.19-0.211-0.391-0.412-0.601-0.604z" />
                                                        <path d="m329.16 172.44h-120.16c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h120.16c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449z" />
                                                        <path d="m179.22 317.16c-3.919-4.131-10.425-4.363-14.629-0.522l-33.437 31.869-14.106-14.629c-3.919-4.131-10.425-4.363-14.629-0.522-4.047 4.24-4.047 10.911 0 15.151l21.42 21.943c1.854 2.076 4.532 3.224 7.314 3.135 2.756-0.039 5.385-1.166 7.314-3.135l40.751-38.661c4.04-3.706 4.31-9.986 0.603-14.025-0.19-0.21-0.391-0.411-0.601-0.604z" />
                                                        <path d="m329.16 339.63h-120.16c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h120.16c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449z" />
                                                    </svg>
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
                                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                    <div class="card overflow-hidden project-card">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div class="my-auto">
                                                <i class="fe fe-user"></i>
                                                </div>
                                                <div class="project-content">
                                                    <h6>Customers</h6>
                                                    <ul>
                                                        <li>
                                                            <strong>Active</strong>
                                                            <span>{customersList.length}</span>
                                                        </li>
  
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
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
                                                            <span>Ksh.150,000</span>
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
                                                <h4 class="card-title mg-b-10">Project Budget</h4>
                                                <i class="mdi mdi-dots-horizontal text-gray"></i>
                                            </div>
                                            <p class="tx-12 text-muted mb-2">The Project Budget is a tool used by project managers to estimate the total cost of a project. <a href="">Learn more</a></p>
                                        </div>
                                        <div class="card-body pd-y-7">
                                            <div class="area chart-legend mb-0">
                                                <div>
                                                    <i class="mdi mdi-album text-primary me-2"></i> Total Budget
                                                </div>
                                                <div>
                                                    <i class="mdi mdi-album text-pink me-2"></i>Amount Used
                                                </div>
                                            </div>
                                            <canvas id="project-budget" class="ht-300"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                    <div class="card overflow-hidden">
                                        <div class="card-body pb-3">
                                            <div class="d-flex justify-content-between">
                                                <h4 class="card-title mg-b-10">project &amp; task</h4>
                                                <i class="mdi mdi-dots-horizontal text-gray"></i>
                                            </div>
                                            <p class="tx-12 text-muted mb-3">In project, a task is an activity that needs to be accomplished within a defined period of time or by a deadline. <a href="">Learn more</a></p>
                                            <div class="table-responsive mb-0 projects-stat tx-14">
                                                <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap  ">
                                                    <thead>
                                                        <tr>
                                                            <th>Project &amp; Task</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div class="project-names">
                                                                    <h6 class="bg-primary-transparent text-primary d-inline-block me-2 text-center">U</h6>
                                                                    <p class="d-inline-block font-weight-semibold mb-0">UI Design</p>
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
                                                                    <p class="d-inline-block font-weight-semibold mb-0">Landing Page</p>
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
                                                                    <p class="d-inline-block font-weight-semibold mb-0">Website &amp; Blog</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="badge bg-danger">Canceled</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="project-names">
                                                                    <h6 class="bg-purple-transparent text-purple d-inline-block me-2 text-center">P</h6>
                                                                    <p class="d-inline-block font-weight-semibold mb-0">Product Development</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="badge bg-teal">on-going</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="project-names">
                                                                    <h6 class="bg-danger-transparent text-danger d-inline-block me-2 text-center">L</h6>
                                                                    <p class="d-inline-block font-weight-semibold mb-0">Logo Design</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="badge bg-success">Completed</div>
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
                                      <div class="card-body">
                                          <div class="d-flex justify-content-between">
                                              <h4 class="card-title mg-b-10">All Projects</h4>
                                              <i class="mdi mdi-dots-horizontal text-gray"></i>
                                          </div>
                                          <p class="tx-12 text-muted mb-3">A project is an activity to meet the creation of a unique product or service and thus activities that are undertaken to accomplish routine activities cannot be considered projects. <a href="">Learn more</a></p>
                                          <div class="table-responsive mb-0">
                                              <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap table-striped ">
                                                  <thead>
                                                      <tr>
                                                          <th>Project</th>
                                                          <th>Team Members</th>
                                                          <th>Categorie</th>
                                                          <th>Created</th>
                                                          <th>Status</th>
                                                          <th>Deadline</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <td>
                                                              <div class="project-contain">
                                                                  <h6 class="mb-1 tx-13">Angular Project</h6>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <div class="image-grouped"><img class="profile-img brround" alt="profile image" src="assets/img/faces/11.jpg"/><img class="profile-img brround " alt="profile image" src="assets/img/faces/12.jpg"/><img class="profile-img brround" alt="profile image" src="assets/img/faces/2.jpg"/></div>
                                                          </td>
                                                          <td>Web Design</td>
                                                          <td>01 Jan 2020</td>
                                                          <td><span class="badge bg-primary-gradient">Ongoing</span></td>
                                                          <td>15 March 2020</td>
                                                      </tr>
                                                      <tr>
                                                          <td>
                                                              <div class="project-contain">
                                                                  <h6 class="mb-1 tx-13">PHP Project</h6>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <div class="image-grouped"><img class="profile-img brround" alt="profile image" src="assets/img/faces/16.jpg"/><img class="profile-img brround " alt="profile image" src="assets/img/faces/8.jpg"/><img class="profile-img brround" alt="profile image" src="assets/img/faces/7.jpg"/></div>
                                                          </td>
                                                          <td>Web Development</td>
                                                          <td>03 March 2020</td>
                                                          <td><span class="badge bg-success-gradient">Ongoing</span></td>
                                                          <td>15 Jun 2020</td>
                                                      </tr>
                                                      
                                                      
                                                  
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
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
  

export default AdminHome