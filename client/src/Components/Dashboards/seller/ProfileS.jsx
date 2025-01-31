import React from 'react'
import {useEffect,useState,useContext} from 'react';

import {useParams} from "react-router-dom"


import axios from 'axios';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useNavigate,Link} from "react-router-dom";

import { AuthContext } from "../../../helpers/AuthContext";

import SidebarC from './SidebarS'
import TopbarC from './TopbarS'
import SidebarS from './SidebarS';
import TopbarS from './TopbarS';

function ProfileS() {
    
    
const {authState} = useContext(AuthContext);
const [userId, setUserId] = useState('');

const [ordersList, setOrdersList] = useState([]);

const [item_name, setitem_name] = useState('');

const [orderId, setorderId] = useState('');


const [quantity_ordered, setquantity_ordered] = useState('');



const [order_description, setorder_description] = useState('');


const [name, setName] = useState("");
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [phone_no, setPhone_no] = useState("");

const [businessId, setbusinessId] = useState('');

const [business_name, setbusiness_name] = useState("");

const [dateJoined, setdateJoined] = useState('');




const [business_type, setbusiness_type] = useState("");

const [business_description, setbusiness_description] = useState("");

const [industry, setindustry] = useState("");
const [location, setlocation] = useState("");


const [servicesList, setServicesList] = useState([]);

const [staffList, setStaffList] = useState([]);



const [city, setCity] = useState("");


const [state, setState] = useState("");
const [country, setcountry] = useState("");
const [status, setStatus] = useState("");



const [latitude, setLatitude] = useState("");
const [longitude, setLongitude] = useState("");
const [address_line_1, setaddress_line_1] = useState("");
const [address_line_2, setaddress_line_2] = useState("");

const [postal_code, setPostal_code] = useState("");



const [isLoading,setLoading]=useState(false);

const [bussSetup,setBussSetup]=useState(false);

const [showSetUpError,setShowSetUpError]=useState(false);

const [notifications, setNotifications] = useState([]);




useEffect(()=>{

   
     //axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
     axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

        setUserId(response.data.id)

        setName(response.data.first_name)

        setEmail(response.data.email)

        setPhone_no(response.data.phone_no)

        setdateJoined(response.data.createdAt)
  
  
       })
       


       axios.get('https://yoteorder-server.herokuapp.com/users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
       
      //axios.get('https://yoteorder-server.herokuapp.com/users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
  
        if(response.data!=null){
    
       
  
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


      axios.get("https://yoteorder-server.herokuapp.com/order/myorders",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
        setOrdersList(response.data);
        console.log("THE PRODUCT NAME IS "+response.data)
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


{/** <div id="global-loader">
<img src="assets/images/loader.svg" class="loader-img" alt="Loader"/>
</div>*/}







<div class="page">
<div class="page-main">

<TopbarS></TopbarS>












<SidebarS notifications={notifications}></SidebarS>









        <div class="main-content app-content mt-0">
        <div class="side-app">

           
            <div class="main-container container-fluid">

              
                <div class="page-header">
                    <h1 class="page-title">Customer Home</h1>
                    <div>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Welcome: {authState.first_name}</li>

                        </ol>
                    </div>
                </div>



                <div class="row" id="user-profile">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="wideget-user mb-2">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="row">
                                            <div class="panel profile-cover">
                                                <div class="profile-cover__action bg-img"></div>
                                                <div class="profile-cover__img">
                                                    <div class="profile-img-1">
                                                        <img src="../assets/images/users/21.jpg" alt="img"/>
                                                    </div>
                                                    <div class="profile-img-content text-dark text-start">
                                                        <div class="text-dark">
                                                        
                                                            <h3 class="h3 mb-2">{authState.first_name}</h3>
                                                            <h5 class="text-muted">{authState.role}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="btn-profile">
                                                    <button class="btn btn-primary mt-1 mb-1"> <i class="fa fa-rss"></i> <span>Follow</span></button>
                                                    <button class="btn btn-secondary mt-1 mb-1"> <i class="fa fa-envelope"></i> <span>Message</span></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="px-0 px-sm-4">
                                                <div class="social social-profile-buttons mt-5 float-end">
                                                    <div class="mt-3">
                                                        <a class="social-icon text-primary" href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a>
                                                        <a class="social-icon text-primary" href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a>
                                                        <a class="social-icon text-primary" href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube"></i></a>
                                                        <a class="social-icon text-primary" href="javascript:void(0)"><i class="fa fa-rss"></i></a>
                                                        <a class="social-icon text-primary" href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin"></i></a>
                                                        <a class="social-icon text-primary" href="https://myaccount.google.com/" target="_blank"><i class="fa fa-google-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="main-profile-contact-list">
                                        <div class="me-5">
                                            <div class="media mb-4 d-flex">
                                                <div class="media-icon bg-secondary bradius me-3 mt-1">
                                                    <i class="fe fe-edit fs-20 text-white"></i>
                                                </div>
                                                <div class="media-body">
                                                    <span class="text-muted">Orders</span>
                                                    <div class="fw-semibold fs-25">
                                                        1
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="me-5 mt-5 mt-md-0">
                                            <div class="media mb-4 d-flex">
                                                <div class="media-icon bg-danger bradius text-white me-3 mt-1">
                                                    <span class="mt-3">
                                                        <i class="fe fe-users fs-20"></i>
                                                    </span>
                                                </div>
                                                <div class="media-body">
                                                    <span class="text-muted">Visits</span>
                                                    <div class="fw-semibold fs-25">
                                                        37
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="me-0 mt-5 mt-md-0">
                                            <div class="media">
                                                <div class="media-icon bg-primary text-white bradius me-3 mt-1">
                                                    <span class="mt-3">
                                                        <i class="fe fe-cast fs-20"></i>
                                                    </span>
                                                </div>
                                                <div class="media-body">
                                                    <span class="text-muted">Booking</span>
                                                    <div class="fw-semibold fs-25">
                                                       2
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <div class="card-title">About</div>
                                </div>
                                <div class="card-body">
                                
                                    <div>
                                        <h5>Business Description<i class="fe fe-edit-3 text-primary mx-2"></i></h5>
                                        <p>{business_description}
                                            <a href="javascript:void(0)">Read more</a>
                                        </p>
                                    </div>
                                    <hr/>
                                    <div class="d-flex align-items-center mb-3 mt-3">
                                        <div class="me-4 text-center text-primary">
                                            <span><i class="fe fe-briefcase fs-20"></i></span>
                                        </div>
                                        <div>
                                            <strong>{business_name} </strong>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center mb-3 mt-3">
                                        <div class="me-4 text-center text-primary">
                                            <span><i class="fe fe-map-pin fs-20"></i></span>
                                        </div>
                                        <div>
                                            <strong>Kangemi, Nairobi-Kenya</strong>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center mb-3 mt-3">
                                        <div class="me-4 text-center text-primary">
                                            <span><i class="fe fe-phone fs-20"></i></span>
                                        </div>
                                        <div>
                                            <strong>{phone_no} </strong>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center mb-3 mt-3">
                                        <div class="me-4 text-center text-primary">
                                            <span><i class="fe fe-mail fs-20"></i></span>
                                        </div>
                                        <div>
                                            <strong>{email}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <div class="card-title">Skills</div>
                                </div>
                                <div class="card-body">
                                    <div class="tags">
                                        <a href="javascript:void(0)" class="tag">Laravel</a>
                                        <a href="javascript:void(0)" class="tag">Angular</a>
                                        <a href="javascript:void(0)" class="tag">HTML</a>
                                        <a href="javascript:void(0)" class="tag">Vuejs</a>
                                        <a href="javascript:void(0)" class="tag">Codiegniter</a>
                                        <a href="javascript:void(0)" class="tag">JavaScript</a>
                                        <a href="javascript:void(0)" class="tag">Bootstrap</a>
                                        <a href="javascript:void(0)" class="tag">PHP</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-xl-6">
                            <div class="card">
                                <div class="card-body">
                                    <form class="profile-edit">
                                        <textarea class="form-control" placeholder="What's in your mind right now" rows="7"></textarea>
                                        <div class="profile-share border-top-0">
                                            <div class="mt-2">
                                                <a href="javascript:void(0)" class="me-2" title="Audio" data-bs-toggle="tooltip" data-bs-placement="top"><span class="text-muted"><i class="fe fe-mic"></i></span></a>
                                                <a href="javascript:void(0)" class="me-2" title="Video" data-bs-toggle="tooltip" data-bs-placement="top"><span class="text-muted"><i class="fe fe-video"></i></span></a>
                                                <a href="javascript:void(0)" class="me-2" title="Image" data-bs-toggle="tooltip" data-bs-placement="top"><span class="text-muted"><i class="fe fe-image"></i></span></a>
                                            </div>
                                            <button class="btn btn-sm btn-success ms-auto"><i class="fa fa-share ms-1"></i> Share</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="card border p-0 shadow-none">
                                <div class="card-body">
                                    <div class="d-flex">
                                        <div class="media mt-0">
                                            <div class="media-user me-2">
                                                <div class=""><img alt="" class="rounded-circle avatar avatar-md" src="../assets/images/users/16.jpg"/></div>
                                            </div>
                                            <div class="media-body">
                                                <h6 class="mb-0 mt-1">PataMtaani</h6>
                                                <small class="text-muted">just now</small>
                                            </div>
                                        </div>
                                        <div class="ms-auto">
                                            <div class="dropdown show">
                                                <a class="new option-dots" href="JavaScript:void(0);" data-bs-toggle="dropdown">
                                                    <span class=""><i class="fe fe-more-vertical"></i></span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-end">
                                                    <a class="dropdown-item" href="javascript:void(0)">Edit Post</a>
                                                    <a class="dropdown-item" href="javascript:void(0)">Delete Post</a>
                                                    <a class="dropdown-item" href="javascript:void(0)">Personal Settings</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <h4 class="fw-semibold mt-3">There is nothing more beautiful.</h4>
                                        <p class="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                        </p>
                                    </div>
                                </div>
                                <div class="card-footer user-pro-2">
                                    <div class="media mt-0">
                                        <div class="media-user me-2">
                                            <div class="avatar-list avatar-list-stacked">
                                                
                                                <span class="avatar brround text-primary">+28</span>
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0 mt-2 ms-2">28 people like your photo</h6>
                                        </div>
                                        <div class="ms-auto">
                                            <div class="d-flex mt-1">
                                                <a class="new me-2 text-muted fs-16" href="JavaScript:void(0);"><span class=""><i class="fe fe-heart"></i></span></a>
                                                <a class="new me-2 text-muted fs-16" href="JavaScript:void(0);"><span class=""><i class="fe fe-message-square"></i></span></a>
                                                <a class="new text-muted fs-16" href="JavaScript:void(0);"><span class=""><i class="fe fe-share-2"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                           
                        </div>
                        <div class="col-xl-3">
                            <div class="card">
                                <div class="card-header">
                                    <div class="card-title">Customers</div>
                                </div>
                                <div class="card-body">
                                    <div class="">
                                        <div class="media overflow-visible">
                                            <img class="avatar brround avatar-md me-3" src="../assets/images/users/18.jpg" alt="avatar-img"/>
                                            <div class="media-body valign-middle mt-2">
                                                <a href="javascript:void(0)" class=" fw-semibold text-dark">John Ngungi</a>
                                                <p class="text-muted mb-0">johan@gmail.com</p>
                                            </div>
                                            <div class="media-body valign-middle text-end overflow-visible mt-2">
                                                <button class="btn btn-sm btn-primary" type="button">Follow</button>
                                            </div>
                                        </div>
                                        <div class="media overflow-visible mt-sm-5">
                                            <span class="avatar cover-image avatar-md brround bg-pink me-3">LQ</span>
                                            <div class="media-body valign-middle mt-2">
                                                <a href="javascript:void(0)" class="fw-semibold text-dark">Lillian Nyakwaka</a>
                                                <p class="text-muted mb-0">lili</p>
                                            </div>
                                            <div class="media-body valign-middle text-end overflow-visible mt-1">
                                                <button class="btn btn-sm btn-secondary" type="button">Follow</button>
                                            </div>
                                        </div>
                                        <div class="media overflow-visible mt-sm-5">
                                            <img class="avatar brround avatar-md me-3" src="../assets/images/users/2.jpg" alt="avatar-img"/>
                                            <div class="media-body valign-middle mt-2">
                                                <a href="javascript:void(0)" class="text-dark fw-semibold">Johnstone Mbatha</a>
                                                <p class="text-muted mb-0">jmm</p>
                                            </div>
                                            <div class="media-body valign-middle text-end overflow-visible mt-1">
                                                <button class="btn btn-sm btn-danger" type="button">Follow</button>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <div class="card-title">Our Latest News</div>
                                </div>
                                <div class="card-body">
                                    <div class="">
                                        <div class="media media-xs overflow-visible">
                                            <img class="avatar bradius avatar-xl me-3" src="assets/images/users/12.jpg" alt="avatar-img"/>
                                            <div class="media-body valign-middle">
                                                <a href="javascript:void(0)" class="fw-semibold text-dark">Patamtaani</a>
                                                <p class="text-muted mb-0">We are providing market analysis ...</p>
                                            </div>
                                        </div>
                                        <div class="media media-xs overflow-visible mt-5">
                                            <img class="avatar bradius avatar-xl me-3" src="assets/images/users/2.jpg" alt="avatar-img"/>
                                            <div class="media-body valign-middle">
                                                <a href="javascript:void(0)" class="fw-semibold text-dark">Patamtaani</a>
                                                <p class="text-muted mb-0">Expanding to upcountry ...</p>
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
            Copyright © <span id="year"></span> <a href="javascript:void(0)">PataMtaani</a>.A web app developed and owned by <a href="javascript:void(0)"> FrankCode Ltd </a> All rights reserved.
        </div>
            </div>
        </div>
    </footer>





</div>



</div>


</div>
)
}

export default ProfileS