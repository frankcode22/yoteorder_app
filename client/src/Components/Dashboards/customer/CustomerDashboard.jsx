import React from 'react'
import {useEffect,useState,useContext} from 'react';

import {useParams} from "react-router-dom"


import axios from 'axios';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useNavigate,Link} from "react-router-dom";

import { AuthContext } from "../../../helpers/AuthContext";
import SidebarC from './SidebarC'
import TopbarC from './TopbarC'

function CustomerDashboard() {

    const [userId, setUserId] = useState('');
  
    const [ordersList, setOrdersList] = useState([]);

    const [item_name, setitem_name] = useState('');

    const [orderId, setorderId] = useState('');


    const [quantity_ordered, setquantity_ordered] = useState('');

  

    const [order_description, setorder_description] = useState('');


    useEffect(()=>{

       
         //axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
         axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
            setUserId(response.data.id)
      
      
           })
    
        //    //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
        //   axios.get("https://yoteorder-server.herokuapp.com/order/getallorders").then((response) => {
        //   setOrdersList(response.data);
        //   })


          axios.get("https://yoteorder-server.herokuapp.com/order/myorders",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
            setOrdersList(response.data);
            })
    
    
    
         
    
    
    
    },[]);

    const openSelectedOrder=(oId)=>{

   //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
    axios.get('https://yoteorder-server.herokuapp.com/order/orderById/'+oId).then((response) => {

        console.log("THE PRODUCT NAME IS "+response.data.name)

        setorderId(response.data.orderId)

        setitem_name(response.data.item_name)

        setquantity_ordered(response.data.quantity_ordered)

        setorder_description(response.data.order_description)
            

            })



    }
  return (
    <div>

    <div class="app sidebar-mini ltr light-mode">


    <div id="global-loader">
<img src="assets/images/loader.svg" class="loader-img" alt="Loader"/>
</div>




<div class="page">
<div class="page-main">

<TopbarC></TopbarC>












<SidebarC></SidebarC>









            <div class="main-content app-content mt-0">
            <div class="side-app">

               
                <div class="main-container container-fluid">

                  
                    <div class="page-header">
                        <h1 class="page-title">Dashboard 01</h1>
                        <div>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Dashboard 01</li>
                            </ol>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                                    <div class="card overflow-hidden">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div class="mt-2">
                                                    <h6 class="">Total Users</h6>
                                                    <h2 class="mb-0 number-font">44,278</h2>
                                                </div>
                                                <div class="ms-auto">
                                                    <div class="chart-wrapper mt-1">
                                                        <canvas id="saleschart"
                                                            class="h-8 w-9 chart-dropshadow"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="text-muted fs-12"><span class="text-secondary"><i
                                                        class="fe fe-arrow-up-circle  text-secondary"></i> 5%</span>
                                                Last week</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                                    <div class="card overflow-hidden">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div class="mt-2">
                                                    <h6 class="">Total Profit</h6>
                                                    <h2 class="mb-0 number-font">67,987</h2>
                                                </div>
                                                <div class="ms-auto">
                                                    <div class="chart-wrapper mt-1">
                                                        <canvas id="leadschart"
                                                            class="h-8 w-9 chart-dropshadow"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="text-muted fs-12"><span class="text-pink"><i
                                                        class="fe fe-arrow-down-circle text-pink"></i> 0.75%</span>
                                                Last 6 days</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                                    <div class="card overflow-hidden">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div class="mt-2">
                                                    <h6 class="">Total Expenses</h6>
                                                    <h2 class="mb-0 number-font">$76,965</h2>
                                                </div>
                                                <div class="ms-auto">
                                                    <div class="chart-wrapper mt-1">
                                                        <canvas id="profitchart"
                                                            class="h-8 w-9 chart-dropshadow"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="text-muted fs-12"><span class="text-green"><i
                                                        class="fe fe-arrow-up-circle text-green"></i> 0.9%</span>
                                                Last 9 days</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                                    <div class="card overflow-hidden">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div class="mt-2">
                                                    <h6 class="">Total Cost</h6>
                                                    <h2 class="mb-0 number-font">$59,765</h2>
                                                </div>
                                                <div class="ms-auto">
                                                    <div class="chart-wrapper mt-1">
                                                        <canvas id="costchart"
                                                            class="h-8 w-9 chart-dropshadow"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="text-muted fs-12"><span class="text-warning"><i
                                                        class="fe fe-arrow-up-circle text-warning"></i> 0.6%</span>
                                                Last year</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">

                    
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Your Order</h3>
                                </div>
                                <div class="card-body">

                                <div class="row">

                                {ordersList.map((value, key) => {
                                    return (



                                    <div class="col-md-12 col-lg-6 col-xl-3">
                                                    <div class="thumbnail">
                                                        <a href="javascript:void(0)">
                                                            <img src="../assets/images/media/22.jpg" alt="thumb1" class="thumbimg"/>
                                                        </a>
                                                        <div class="caption">
                                                            <h4><strong>{value.item_name}</strong></h4>

                                                          

                                                        

                                                        <span class="tag tag-radius tag-round tag-primary">Price {value.price}</span>

                                                        <span class="tag tag-radius tag-round tag-orange">Items Ordered {value.quantity_ordered}</span>
                                    
                                                        
                                                        <span class="tag tag-rounded tag-icon tag-green"><i class="fe fe-calendar"></i>Order Id:{value.orderId}<a href="javascript:void(0)" class="tag-addon tag-addon-cross tag-green"><i class="fe fe-x text-white m-1"></i></a></span>
                                                  

                                                    <div class="d-flex align-items-center mb-3 mt-3">
                                                        <div class="me-4 text-center text-primary">
                                                            <span><i class="fe fe-briefcase fs-20"></i></span>
                                                        </div>
                                                        <div>
                                                            <strong>{value.order_description} </strong>
                                                        </div>
                                                    </div>


                                                    <ul class="list-group border br-7 mt-5">
                                                    
                                            
                                                   
                                            
                                                    <li class="list-group-item border-0">
                                                Sub Total
                                                <span class="h6 fw-bold mb-0 float-end">Ksh. 360</span>
                                            </li>
                                            <li class="list-group-item border-0">
                                                Discount
                                                <span class="h6 fw-bold mb-0 float-end">5%</span>
                                            </li>
                                            <li class="list-group-item border-0">
                                                Shipping
                                                <span class="h6 fw-bold mb-0 float-end">Free</span>
                                            </li>
                                            <li class="list-group-item border-0">
                                                Total
                                                <span class="h4 fw-bold mb-0 float-end">Ksh.370</span>
                                            </li>
                                        </ul>
                                                           

                                                            <p>
                                                            <a href="javascript:void(0)" class="btn btn-primary" role="button">Cancel</a>
                                                            <button  type="submit" class="btn btn-secondary"
                                                            
                                                            
                                                            onClick={() => {
                                                                openSelectedOrder(value.id);
                                                                  }}
                                                            
                                                        
                                                                  data-bs-effect="effect-slide-in-bottom" data-bs-toggle="modal" href="#modaldemo8">Edit</button>


                                                          
                                                        </p>
                                                        </div>
                                                    </div>
                                                </div>

                                    )

                                    }   
                                 ) }

                                




                                      

                                   

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
                    <h6>{orderId}</h6>
                   
                    <div class="form-row">



                    <div class="form-group col-md-12 mb-0">
                    <label class="form-label">Order ID</label>
                       
            
                    <input type="text" class="form-control" id="order_id"
                    
                    onChange={(event) => {
                        setorderId(event.target.value);
                      }} 
                    
                    value={orderId}/>
                    </div>



                    <div class="form-group col-md-6 mb-0">
            
                   {/* <p>Product Id {productId} Seller Id {businessId}  </p>*/} 
                        <div class="form-group">
                        <label class="form-label">Product Name</label>
                            <input type="text" class="form-control" id="item_name" value={item_name}
                            
                            onChange={(event) => {
                                setitem_name(event.target.value);
                              }} 
                            
                            placeholder="Item name"/>
                        </div>
                    </div>
                    <div class="form-group col-md-6 mb-0">
                        <div class="form-group">
                        <label class="form-label">Quantity</label>
                            <input type="number" class="form-control" id="name2" value={quantity_ordered}
                            
                            onChange={(event) => {
                                setquantity_ordered(event.target.value);
                              }} 
                            
                            placeholder="Quantity"/>
                        </div>
                    </div>
            
                    
                   
                    <div class="form-group col-md-12 mb-0">
                    <label class="form-label">Additional Infor</label>
                       
            
                        <textarea class="form-control" value={order_description}  onChange={(event) => {
                            setorder_description(event.target.value);
                          }}  placeholder="Comments" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                    </div>
                   
                </div>
            
                <div class="form-footer mt-2">
               
            </div>
                    
                    </div>
                    <div class="modal-footer">
                        <button  onClick={() => {
                   
                        }} class="btn btn-primary">Save changes</button>
                        
                        
                        <button class="btn btn-light" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>





                      
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                            <div class="card overflow-hidden">
                                <div class="card-body pb-0 bg-recentorder">
                                    <h3 class="card-title text-white">Recent Orders</h3>
                                    <div class="chartjs-wrapper-demo">
                                        <canvas id="recentorders" class="chart-dropshadow"></canvas>
                                    </div>
                                </div>
                                <div id="flotback-chart" class="flot-background"></div>
                                <div class="card-body">
                                    <div class="d-flex mb-4 mt-3">
                                        <div
                                            class="avatar avatar-md bg-secondary-transparent text-secondary bradius me-3">
                                            <i class="fe fe-check"></i>
                                        </div>
                                        <div class="">
                                            <h6 class="mb-1 fw-semibold">Delivered Orders</h6>
                                            <p class="fw-normal fs-12"> <span class="text-success">3.5%</span>
                                                increased </p>
                                        </div>
                                        <div class=" ms-auto my-auto">
                                            <p class="fw-bold fs-20"> 1,768 </p>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="avatar  avatar-md bg-pink-transparent text-pink bradius me-3">
                                            <i class="fe fe-x"></i>
                                        </div>
                                        <div class="">
                                            <h6 class="mb-1 fw-semibold">Cancelled Orders</h6>
                                            <p class="fw-normal fs-12"> <span class="text-success">1.2%</span>
                                                increased </p>
                                        </div>
                                        <div class=" ms-auto my-auto">
                                            <p class="fw-bold fs-20 mb-0"> 3,675 </p>
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










<div class="sidebar sidebar-right sidebar-animate">
<div class="panel panel-primary card mb-0 shadow-none border-0">
    <div class="tab-menu-heading border-0 d-flex p-3">
        <div class="card-title mb-0"><i class="fe fe-bell me-2"></i><span
                class=" pulse"></span>Notifications</div>
        <div class="card-options ms-auto">
            <a href="javascript:void(0);" class="sidebar-icon text-end float-end me-3 mb-1"
                data-bs-toggle="sidebar-right" data-target=".sidebar-right"><i
                    class="fe fe-x text-white"></i></a>
        </div>
    </div>
    <div class="panel-body tabs-menu-body latest-tasks p-0 border-0">
        <div class="tabs-menu border-bottom">
          
            <ul class="nav panel-tabs">
                <li class=""><a href="#side1" class="active" data-bs-toggle="tab"><i
                            class="fe fe-settings me-1"></i>Feeds</a></li>
                <li><a href="#side2" data-bs-toggle="tab"><i class="fe fe-message-circle"></i> Chat</a></li>
                <li><a href="#side3" data-bs-toggle="tab"><i class="fe fe-anchor me-1"></i>Timeline</a></li>
            </ul>
        </div>
        <div class="tab-content">
            <div class="tab-pane active" id="side1">
                <div class="p-3 fw-semibold ps-5">Feeds</div>
                <div class="card-body pt-2">
                    <div class="browser-stats">
                        <div class="row mb-4">
                            <div class="col-sm-2 mb-sm-0 mb-3">
                                <span class="feeds avatar-circle brround bg-primary-transparent"><i
                                        class="fe fe-user text-primary"></i></span>
                            </div>
                            <div class="col-sm-10 ps-sm-0">
                                <div class="d-flex align-items-end justify-content-between ms-2">
                                    <h6 class="">New user registered</h6>
                                    <div>
                                        <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                        <a href="javascript:void(0)"><i class="fe fe-x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-2 mb-sm-0 mb-3">
                                <span
                                    class="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent"><i
                                        class="fe fe-shopping-cart text-secondary"></i></span>
                            </div>
                            <div class="col-sm-10 ps-sm-0">
                                <div class="d-flex align-items-end justify-content-between ms-2">
                                    <h6 class="">New order delivered</h6>
                                    <div>
                                        <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                        <a href="javascript:void(0)"><i class="fe fe-x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-2 mb-sm-0 mb-3">
                                <span
                                    class="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent"><i
                                        class="fe fe-bell text-danger"></i></span>
                            </div>
                            <div class="col-sm-10 ps-sm-0">
                                <div class="d-flex align-items-end justify-content-between ms-2">
                                    <h6 class="">You have pending tasks</h6>
                                    <div>
                                        <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                        <a href="javascript:void(0)"><i class="fe fe-x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-2 mb-sm-0 mb-3">
                                <span
                                    class="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent"><i
                                        class="fe fe-gitlab text-warning"></i></span>
                            </div>
                            <div class="col-sm-10 ps-sm-0">
                                <div class="d-flex align-items-end justify-content-between ms-2">
                                    <h6 class="">New version arrived</h6>
                                    <div>
                                        <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                        <a href="javascript:void(0)"><i class="fe fe-x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-2 mb-sm-0 mb-3">
                                <span
                                    class="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent"><i
                                        class="fe fe-database text-pink"></i></span>
                            </div>
                            <div class="col-sm-10 ps-sm-0">
                                <div class="d-flex align-items-end justify-content-between ms-2">
                                    <h6 class="">Server #1 overloaded</h6>
                                    <div>
                                        <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                        <a href="javascript:void(0)"><i class="fe fe-x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-2 mb-sm-0 mb-3">
                                <span
                                    class="feeds avatar-circle avatar-circle-info brround bg-info-transparent"><i
                                        class="fe fe-check-circle text-info"></i></span>
                            </div>
                            <div class="col-sm-10 ps-sm-0">
                                <div class="d-flex align-items-end justify-content-between ms-2">
                                    <h6 class="">New project launched</h6>
                                    <div>
                                        <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                        <a href="javascript:void(0)"><i class="fe fe-x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-3 fw-semibold ps-5">Settings</div>
                <div class="card-body pt-2">
                    <div class="browser-stats">
                        <div class="row mb-4">
                            <div class="col-sm-2 mb-sm-0 mb-3">
                                <span class="feeds avatar-circle brround bg-primary-transparent"><i
                                        class="fe fe-settings text-primary"></i></span>
                            </div>
                            <div class="col-sm-10 ps-sm-0">
                                <div class="d-flex align-items-end justify-content-between ms-2">
                                    <h6 class="">General Settings</h6>
                                    <div>
                                        <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-2 mb-sm-0 mb-3">
                                <span
                                    class="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent"><i
                                        class="fe fe-map-pin text-secondary"></i></span>
                            </div>
                            <div class="col-sm-10 ps-sm-0">
                                <div class="d-flex align-items-end justify-content-between ms-2">
                                    <h6 class="">Map Settings</h6>
                                    <div>
                                        <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-2 mb-sm-0 mb-3">
                                <span
                                    class="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent"><i
                                        class="fe fe-headphones text-danger"></i></span>
                            </div>
                            <div class="col-sm-10 ps-sm-0">
                                <div class="d-flex align-items-end justify-content-between ms-2">
                                    <h6 class="">Support Settings</h6>
                                    <div>
                                        <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-2 mb-sm-0 mb-3">
                                <span
                                    class="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent"><i
                                        class="fe fe-credit-card text-warning"></i></span>
                            </div>
                            <div class="col-sm-10 ps-sm-0">
                                <div class="d-flex align-items-end justify-content-between ms-2">
                                    <h6 class="">Payment Settings</h6>
                                    <div>
                                        <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-2 mb-sm-0 mb-3">
                                <span
                                    class="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent"><i
                                        class="fe fe-bell text-pink"></i></span>
                            </div>
                            <div class="col-sm-10 ps-sm-0">
                                <div class="d-flex align-items-end justify-content-between ms-2">
                                    <h6 class="">Notification Settings</h6>
                                    <div>
                                        <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="side2">
                <div class="list-group list-group-flush">
                    <div class="pt-3 fw-semibold ps-5">Today</div>
                    <div class="list-group-item d-flex align-items-center">
                        <div class="me-2">
                            <span class="avatar avatar-md brround cover-image"
                                data-bs-image-src="../assets/images/users/2.jpg"></span>
                        </div>
                        <div class="">
                            <a href="chat.html">
                                <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                    data-target="#chatmodel">Addie Minstra</div>
                                <p class="mb-0 fs-12 text-muted"> Hey! there I' am available.... </p>
                            </a>
                        </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                        <div class="me-2">
                            <span class="avatar avatar-md brround cover-image"
                                data-bs-image-src="../assets/images/users/11.jpg"><span
                                    class="avatar-status bg-success"></span></span>
                        </div>
                        <div class="">
                            <a href="chat.html">
                                <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                    data-target="#chatmodel">Rose Bush</div>
                                <p class="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                            </a>
                        </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                        <div class="me-2">
                            <span class="avatar avatar-md brround cover-image"
                                data-bs-image-src="../assets/images/users/10.jpg"></span>
                        </div>
                        <div class="">
                            <a href="chat.html">
                                <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                    data-target="#chatmodel">Claude Strophobia</div>
                                <p class="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                                </p>
                            </a>
                        </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                        <div class="me-2">
                            <span class="avatar avatar-md brround cover-image"
                                data-bs-image-src="../assets/images/users/13.jpg"></span>
                        </div>
                        <div class="">
                            <a href="chat.html">
                                <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                    data-target="#chatmodel">Eileen Dover</div>
                                <p class="mb-0 fs-12 text-muted"> New product Launching... </p>
                            </a>
                        </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                        <div class="me-2">
                            <span class="avatar avatar-md brround cover-image"
                                data-bs-image-src="../assets/images/users/12.jpg"><span
                                    class="avatar-status bg-success"></span></span>
                        </div>
                        <div class="">
                            <a href="chat.html">
                                <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                    data-target="#chatmodel">Willie Findit</div>
                                <p class="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                            </a>
                        </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                        <div class="me-2">
                            <span class="avatar avatar-md brround cover-image"
                                data-bs-image-src="../assets/images/users/15.jpg"></span>
                        </div>
                        <div class="">
                            <a href="chat.html">
                                <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                    data-target="#chatmodel">Manny Jah</div>
                                <p class="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                                </p>
                            </a>
                        </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                        <div class="me-2">
                            <span class="avatar avatar-md brround cover-image"
                                data-bs-image-src="../assets/images/users/4.jpg"></span>
                        </div>
                        <div class="">
                            <a href="chat.html">
                                <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                    data-target="#chatmodel">Cherry Blossom</div>
                                <p class="mb-0 fs-12 text-muted"> Hey! there I' am available....</p>
                            </a>
                        </div>
                    </div>
                    <div class="pt-3 fw-semibold ps-5">Yesterday</div>
                    <div class="list-group-item d-flex align-items-center">
                        <div class="me-2">
                            <span class="avatar avatar-md brround cover-image"
                                data-bs-image-src="../assets/images/users/7.jpg"><span
                                    class="avatar-status bg-success"></span></span>
                        </div>
                        <div class="">
                            <a href="chat.html">
                                <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                    data-target="#chatmodel">Simon Sais</div>
                                <p class="mb-0 fs-12 text-muted">Schedule Realease...... </p>
                            </a>
                        </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                        <div class="me-2">
                            <span class="avatar avatar-md brround cover-image"
                                data-bs-image-src="../assets/images/users/9.jpg"></span>
                        </div>
                        <div class="">
                            <a href="chat.html">
                                <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                    data-target="#chatmodel">Laura Biding</div>
                                <p class="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                                </p>
                            </a>
                        </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                        <div class="me-2">
                            <span class="avatar avatar-md brround cover-image"
                                data-bs-image-src="../assets/images/users/2.jpg"><span
                                    class="avatar-status bg-success"></span></span>
                        </div>
                        <div class="">
                            <a href="chat.html">
                                <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                    data-target="#chatmodel">Addie Minstra</div>
                                <p class="mb-0 fs-12 text-muted">Contact me for details....</p>
                            </a>
                        </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                        <div class="me-2">
                            <span class="avatar avatar-md brround cover-image"
                                data-bs-image-src="../assets/images/users/9.jpg"></span>
                        </div>
                        <div class="">
                            <a href="chat.html">
                                <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                    data-target="#chatmodel">Ivan Notheridiya</div>
                                <p class="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                                </p>
                            </a>
                        </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                        <div class="me-2">
                            <span class="avatar avatar-md brround cover-image"
                                data-bs-image-src="../assets/images/users/14.jpg"></span>
                        </div>
                        <div class="">
                            <a href="chat.html">
                                <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                    data-target="#chatmodel">Dulcie Veeta</div>
                                <p class="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                            </a>
                        </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                        <div class="me-2">
                            <span class="avatar avatar-md brround cover-image"
                                data-bs-image-src="../assets/images/users/11.jpg"></span>
                        </div>
                        <div class="">
                            <a href="chat.html">
                                <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                    data-target="#chatmodel">Florinda Carasco</div>
                                <p class="mb-0 fs-12 text-muted">New product Launching...</p>
                            </a>
                        </div>
                    </div>
                    <div class="list-group-item d-flex align-items-center">
                        <div class="me-2">
                            <span class="avatar avatar-md brround cover-image"
                                data-bs-image-src="../assets/images/users/4.jpg"><span
                                    class="avatar-status bg-success"></span></span>
                        </div>
                        <div class="">
                            <a href="chat.html">
                                <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                    data-target="#chatmodel">Cherry Blossom</div>
                                <p class="mb-0 fs-12 text-muted">cherryblossom@gmail.com</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="side3">
                <ul class="task-list timeline-task">
                    <li class="d-sm-flex mt-4">
                        <div>
                            <i class="task-icon1"></i>
                            <h6 class="fw-semibold">Task Finished<span
                                    class="text-muted fs-11 mx-2 fw-normal">09 July 2021</span></h6>
                            <p class="text-muted fs-12">Adam Berry finished task on<a href="javascript:void(0)"
                                    class="fw-semibold"> Project Management</a></p>
                        </div>
                        <div class="ms-auto d-md-flex me-3">
                            <a href="javascript:void(0)" class="text-muted me-2"><span class="fe fe-edit"></span></a>
                            <a href="javascript:void(0)" class="text-muted"><span class="fe fe-trash-2"></span></a>
                        </div>
                    </li>
                    <li class="d-sm-flex">
                        <div>
                            <i class="task-icon1"></i>
                            <h6 class="fw-semibold">New Comment<span
                                    class="text-muted fs-11 mx-2 fw-normal">05 July 2021</span></h6>
                            <p class="text-muted fs-12">Victoria commented on Project <a href="javascript:void(0)"
                                    class="fw-semibold"> AngularJS Template</a></p>
                        </div>
                        <div class="ms-auto d-md-flex me-3">
                            <a href="javascript:void(0)" class="text-muted me-2"><span class="fe fe-edit"></span></a>
                            <a href="javascript:void(0)" class="text-muted"><span class="fe fe-trash-2"></span></a>
                        </div>
                    </li>
                    <li class="d-sm-flex">
                        <div>
                            <i class="task-icon1"></i>
                            <h6 class="fw-semibold">New Comment<span
                                    class="text-muted fs-11 mx-2 fw-normal">25 June 2021</span></h6>
                            <p class="text-muted fs-12">Victoria commented on Project <a href="javascript:void(0)"
                                    class="fw-semibold"> AngularJS Template</a></p>
                        </div>
                        <div class="ms-auto d-md-flex me-3">
                            <a href="javascript:void(0)" class="text-muted me-2"><span class="fe fe-edit"></span></a>
                            <a href="javascript:void(0)" class="text-muted"><span class="fe fe-trash-2"></span></a>
                        </div>
                    </li>
                    <li class="d-sm-flex">
                        <div>
                            <i class="task-icon1"></i>
                            <h6 class="fw-semibold">Task Overdue<span
                                    class="text-muted fs-11 mx-2 fw-normal">14 June 2021</span></h6>
                            <p class="text-muted mb-0 fs-12">Petey Cruiser finished task <a href="javascript:void(0)"
                                    class="fw-semibold"> Integrated management</a></p>
                        </div>
                        <div class="ms-auto d-md-flex me-3">
                            <a href="javascript:void(0)" class="text-muted me-2"><span class="fe fe-edit"></span></a>
                            <a href="javascript:void(0)" class="text-muted"><span class="fe fe-trash-2"></span></a>
                        </div>
                    </li>
                    <li class="d-sm-flex">
                        <div>
                            <i class="task-icon1"></i>
                            <h6 class="fw-semibold">Task Overdue<span
                                    class="text-muted fs-11 mx-2 fw-normal">29 June 2021</span></h6>
                            <p class="text-muted mb-0 fs-12">Petey Cruiser finished task <a href="javascript:void(0)"
                                    class="fw-semibold"> Integrated management</a></p>
                        </div>
                        <div class="ms-auto d-md-flex me-3">
                            <a href="javascript:void(0)" class="text-muted me-2"><span class="fe fe-edit"></span></a>
                            <a href="javascript:void(0)" class="text-muted"><span class="fe fe-trash-2"></span></a>
                        </div>
                    </li>
                    <li class="d-sm-flex">
                        <div>
                            <i class="task-icon1"></i>
                            <h6 class="fw-semibold">Task Finished<span
                                    class="text-muted fs-11 mx-2 fw-normal">09 July 2021</span></h6>
                            <p class="text-muted fs-12">Adam Berry finished task on<a href="javascript:void(0)"
                                    class="fw-semibold"> Project Management</a></p>
                        </div>
                        <div class="ms-auto d-md-flex me-3">
                            <a href="javascript:void(0)" class="text-muted me-2"><span class="fe fe-edit"></span></a>
                            <a href="javascript:void(0)" class="text-muted"><span class="fe fe-trash-2"></span></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

</div>




     <footer class="footer">
            <div class="container">
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-md-12 col-sm-12 text-center">
                        Copyright © <span id="year"></span> <a href="javascript:void(0)">Sash</a>. Designed with <span
                            class="fa fa-heart text-danger"></span> by <a href="javascript:void(0)"> Spruko </a> All rights reserved.
                    </div>
                </div>
            </div>
        </footer>





</div>
    
    
    
    </div>
    
    
    </div>
  )
}

export default CustomerDashboard