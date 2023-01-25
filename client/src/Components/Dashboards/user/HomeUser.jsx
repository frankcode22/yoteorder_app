import React,{useContext,useState} from 'react'
import SideMenu from './SideMenu'
import TopBar from './TopBar'

import { AuthContext } from '../../../helpers/AuthContext'
import AccountSubscription from './AccountSubscription';

function HomeUser() {
    const {authState} = useContext(AuthContext);
    const {setAuthState} = useContext(AuthContext);

    const [accountType, setAccountType] = useState('');

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ username: "", id: 0, status: false });
      };





      const retailerAccount=()=>{

  

        setAccountType('Retailer')
      
       
      
        }
    
    
        const supplierAccount=()=>{
    
    
          setAccountType('Supplier')
        
         
        
          }

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
                          <a class="desktop-logo logo-light active" href="/supplier_home"><img src="assets/img/brand/logo_c.jpeg" class="main-logo" alt="logo"/></a>
                          <a class="desktop-logo logo-dark active" href="/supplier_home"><img src="assets/img/brand/logo_c.jpeg" class="main-logo" alt="logo"/></a>
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
                              <h4 class="content-title mb-2">Hi, {authState.first_name}, welcome back!</h4>
                              <nav aria-label="breadcrumb">
                                  <ol class="breadcrumb">
                                      <li class="breadcrumb-item"><a   href="javascript:void(0);">Home</a></li>
                                      <li class="breadcrumb-item active" aria-current="page">User</li>
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
  
  
                           
  
  
                            <div class="row row-sm ">


                           






                                <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12">






                                    <div class="card overflow-hidden">
                                        <div class="card-header bg-transparent pd-b-0 pd-t-20 bd-b-0">
                                            <div class="d-flex justify-content-between">
                                                <h4 class="card-title mg-b-10">Subscribe To our services</h4>
                                                <i class="mdi mdi-dots-horizontal text-gray"></i>
                                            </div>
                                            <p class="tx-12 text-muted mb-2">The Project Budget is a tool used by project managers to estimate the total cost of a project. <a href="">Learn more</a></p>
                                        </div>

                                        <div class="card">
                                        <div class="card-body p-2">
                                            <div class="row">
                                                
                                                <div class="col-xl-6 col-lg-12 col-md-4 col-sm-4">
                                                <a class="btn btn-primary btn-block float-end my-2" onClick={retailerAccount}><i class="fa fa-plus-right me-2"></i>Subscribe as Retailer </a>
                                                </div>
                                                <div class="col-xl-6  col-sm-12 col-md-12 col-lg-12">

                                                    <a class="btn btn-primary btn-block float-end my-2" onClick={supplierAccount}><i class="fa fa-plus-right me-2"></i>Subscribe as Suppliers </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                        <AccountSubscription accountType={accountType}></AccountSubscription>
                                        
                                    </div>


                                    
                                  



                                </div>
                                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                    <div class="card overflow-hidden">
                                        <div class="card-body pb-3">
                                            <div class="d-flex justify-content-between">
                                                <h4 class="card-title mg-b-10">Latest &amp;Orders</h4>
                                                <i class="mdi mdi-dots-horizontal text-gray"></i>
                                            </div>
                                            <p class="tx-12 text-muted mb-3">In project, a task is an activity that needs to be accomplished within a defined period of time or by a deadline. <a href="">Learn more</a></p>
                                            <div class="table-responsive mb-0 projects-stat tx-14">
                                                <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap  ">
                                                    <thead>
                                                        <tr>
                                                            <th>Latest &amp;Orders </th>
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
  

export default HomeUser
