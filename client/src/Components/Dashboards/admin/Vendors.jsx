import React from 'react'

import {useEffect,useState,useContext} from 'react';

import {useParams} from "react-router-dom"


import axios from 'axios';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useNavigate,Link} from "react-router-dom";

import { AuthContext } from "../../../helpers/AuthContext";

import SideBar from './SideBar';
import Topbar from './Topbar';

import ContentLoader from '../../../utils/ContentLoader';
import DataContext from '../../../helpers/DataContext';



function Vendors() {

const { posts, setPosts } = useContext(DataContext);

const {bussinessList, setBussinessList} = useContext(DataContext);

 const {authState} = useContext(AuthContext);
const [userId, setUserId] = useState('');

const [ordersList, setOrdersList] = useState([]);


const [productsList, setProductsList] = useState([]);

const [item_name, setitem_name] = useState('');

const [orderId, setorderId] = useState('');


const [quantity_ordered, setquantity_ordered] = useState('');



const [order_description, setorder_description] = useState('');


const [name, setName] = useState("");
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [phone_no, setPhone_no] = useState("");

const [business_name, setbusiness_name] = useState("");

const [dateJoined, setdateJoined] = useState('');

const [errorMessage, setErrorMessage] = useState("");


const [vendorsList, setVendorsList] = useState([]);

const [isDivLoading, setIsDivLoading] = useState(false);
const [imagePath, setImagePath] = useState("");


let history = useNavigate();





useEffect(()=>{

   
    //axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

       setUserId(response.data.id)

       setName(response.data.first_name)

       setEmail(response.data.email)

       setPhone_no(response.data.phone_no)

       setdateJoined(response.data.createdAt)
 
 
      })

   //    //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
   //   axios.get("https://yoteorder-server.herokuapp.com/order/getallorders").then((response) => {
   //   setOrdersList(response.data);
   //   })


     axios.get("https://yoteorder-server.herokuapp.com/product/allproducts",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
       
        setProductsList(response.data)
       console.log("THE Products LIST DATA "+response.data)
       })


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


   


},[bussinessList])




const openSelectedBuss=(bId)=>{


    history('/edit-business-setting/'+bId)


 
     }




const loadVendorsContant=(

    <table id="data-table"
                                                                    class="table table-bordered text-nowrap mb-0">
                                                                    <thead class="border-top">
                                                                        <tr>
                                                                            <th class="bg-transparent border-bottom-0"
                                                                                style={{width: '5%'}}>Business Id</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Business Name</th>

                                                                                <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Owner</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Category</th>
                                                                           
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Location</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                               Owner Contacts</th>
                                                                            <th class="bg-transparent border-bottom-0"
                                                                                style={{width: '10%'}}>Status</th>
                                                                            <th class="bg-transparent border-bottom-0"
                                                                                style={{width: '5%'}}>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>

                                                                    {vendorsList.map((value, key) => {
                                                                        return (
                                                                        <tr class="border-bottom">
                                                                            <td class="text-center">
                                                                                <div class="mt-0 mt-sm-2 d-block">
                                                                                    <h6
                                                                                        class="mb-0 fs-14 fw-semibold">
                                                                                        {value.id}</h6>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="d-flex">
                                                                                    <span class="avatar bradius"
                                                                                        style={{backgroundImage: 'url(../assets/images/orders/10.jpg)'}}></span>
                                                                                    <div
                                                                                        class="ms-3 mt-0 mt-sm-2 d-block">
                                                                                        <h6
                                                                                            class="mb-0 fs-14 fw-semibold">
                                                                                            {value.business_name}</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="d-flex">
                                                                                    <div
                                                                                        class="mt-0 mt-sm-3 d-block">
                                                                                        <h6
                                                                                            class="mb-0 fs-14 fw-semibold">
                                                                                            {value.User.first_name}</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                            <div class="d-flex">
                                                                                <div
                                                                                    class="mt-0 mt-sm-3 d-block">
                                                                                    <h6
                                                                                        class="mb-0 fs-14 fw-semibold">
                                                                                        {value.business_type}</h6>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                         
                                                                            <td><span
                                                                                    class="fw-semibold mt-sm-2 d-block">{value.location}</span>
                                                                            </td>
                                                                            <td>
                                                                                <div class="d-flex">
                                                                                    <div
                                                                                        class="mt-0 mt-sm-3 d-block">
                                                                                        <h6
                                                                                            class="mb-0 fs-14 fw-semibold">
                                                                                            {value.User.phone_no}</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="mt-sm-1 d-block">
                                                                                    <span
                                                                                        class="badge bg-success-transparent rounded-pill text-success p-2 px-3">active</span>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="g-2">
                                                                                    <a onClick={() => {
                                                                                        openSelectedBuss(value.id);
                                                                                          }} class="btn text-primary btn-sm"
                                                                                        data-bs-toggle="tooltip"
                                                                                        data-bs-original-title="Edit"><span
                                                                                            class="fe fe-edit fs-14"></span></a>
                                                                                    <a class="btn text-danger btn-sm"
                                                                                        data-bs-toggle="tooltip"
                                                                                        data-bs-original-title="Delete"><span
                                                                                            class="fe fe-trash-2 fs-14"></span></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        )
                                                                    }
                                                                    )}






                                                                       
                                                                    </tbody>
                                                                </table>




)







  return (
    
    <div>
    <div class="app sidebar-mini ltr light-mode">


    <div id="global-loader">
<img src="assets/images/loader.svg" class="loader-img" alt="Loader"/>
</div>




<div class="page">
<div class="page-main">







<Topbar></Topbar>






<SideBar></SideBar>














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
                        <div class="col-12 col-sm-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title mb-0">Vendors</h3>
                                </div>
                                <div class="card-body pt-4">
                                    <div class="grid-margin">
                                        <div class="">
                                            <div class="panel panel-primary">
                                                <div class="tab-menu-heading border-0 p-0">
                                                    <div class="tabs-menu1">
                                                     
                                                        <ul class="nav panel-tabs product-sale">
                                                            <li><a href="#tab5" class="active"
                                                                    data-bs-toggle="tab">All Vendors</a></li>
                                                            <li><a href="#tab6" data-bs-toggle="tab"
                                                                    class="text-dark">Active</a></li>
                                                            <li><a href="#tab7" data-bs-toggle="tab"
                                                                    class="text-dark">Pending Approval</a></li>
                                                            <li><a href="#tab8" data-bs-toggle="tab"
                                                                    class="text-dark">Inactive</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="panel-body tabs-menu-body border-0 pt-0">
                                                    <div class="tab-content">
                                                        <div class="tab-pane active" id="tab5">
                                                            <div class="table-responsive">


                                                            
                                    {isDivLoading ? <ContentLoader/>: loadVendorsContant}

                                    {errorMessage && 
    
    
    
    
                                        <div class="col-sm-12 border">
                                        <h3 class="card-title">{errorMessage}</h3>
                                    
                                        
                                        
                                        
                                   </div>}




                                                           
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane" id="tab6">
                                                            <div class="table-responsive">
                                                                <table
                                                                    class="table table-bordered text-nowrap mb-0">
                                                                    <thead class="border-top">
                                                                        <tr>
                                                                            <th class="bg-transparent border-bottom-0"
                                                                                style={{width:'5%'}}>Tracking Id</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Product</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Customer</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Date</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Amount</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Payment Mode</th>
                                                                            <th class="bg-transparent border-bottom-0"
                                                                                style={{width: '10%'}}>Status</th>
                                                                            <th class="bg-transparent border-bottom-0"
                                                                                style={{width:'5%'}}>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>

                                                                    {vendorsList.map((value, key) => {
                                                                        return (
                                                                        <tr class="border-bottom">
                                                                            <td class="text-center">
                                                                                <div class="mt-0 mt-sm-2 d-block">
                                                                                    <h6
                                                                                        class="mb-0 fs-14 fw-semibold">
                                                                                        {value.id}</h6>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="d-flex">
                                                                                    <span class="avatar bradius"
                                                                                        style={{backgroundImage: 'url(../assets/images/orders/10.jpg)'}}></span>
                                                                                    <div
                                                                                        class="ms-3 mt-0 mt-sm-2 d-block">
                                                                                        <h6
                                                                                            class="mb-0 fs-14 fw-semibold">
                                                                                            {value.business_name}</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="d-flex">
                                                                                    <div
                                                                                        class="mt-0 mt-sm-3 d-block">
                                                                                        <h6
                                                                                            class="mb-0 fs-14 fw-semibold">
                                                                                            {value.User.first_name}</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                            <div class="d-flex">
                                                                                <div
                                                                                    class="mt-0 mt-sm-3 d-block">
                                                                                    <h6
                                                                                        class="mb-0 fs-14 fw-semibold">
                                                                                        {value.business_type}</h6>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                         
                                                                            <td><span
                                                                                    class="fw-semibold mt-sm-2 d-block">{value.location}</span>
                                                                            </td>
                                                                            <td>
                                                                                <div class="d-flex">
                                                                                    <div
                                                                                        class="mt-0 mt-sm-3 d-block">
                                                                                        <h6
                                                                                            class="mb-0 fs-14 fw-semibold">
                                                                                            {value.User.phone_no}</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="mt-sm-1 d-block">
                                                                                    <span
                                                                                        class="badge bg-success-transparent rounded-pill text-success p-2 px-3">active</span>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="g-2">
                                                                                    <a class="btn text-primary btn-sm"
                                                                                        data-bs-toggle="tooltip"
                                                                                        data-bs-original-title="Edit"><span
                                                                                            class="fe fe-edit fs-14"></span></a>
                                                                                    <a class="btn text-danger btn-sm"
                                                                                        data-bs-toggle="tooltip"
                                                                                        data-bs-original-title="Delete"><span
                                                                                            class="fe fe-trash-2 fs-14"></span></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        )
                                                                    }
                                                                    )}

                                                                    
                                                                    
                                                                    </tbody>
                                                                    
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane" id="tab7">
                                                            <div class="table-responsive">
                                                                <table
                                                                    class="table table-bordered text-nowrap mb-0">
                                                                    <thead class="border-top">
                                                                        <tr>
                                                                            <th class="bg-transparent border-bottom-0"
                                                                                style={{width:'5%'}}>Tracking Id</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Product</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Customer</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Date</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Amount</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Payment Mode</th>
                                                                            <th class="bg-transparent border-bottom-0"
                                                                                style={{width: '10%'}}>Status</th>
                                                                            <th class="bg-transparent border-bottom-0"
                                                                                style={{width:'5%'}}>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>

                                                                    {vendorsList.map((value, key) => {
                                                                        return (
                                                                        <tr class="border-bottom">
                                                                            <td class="text-center">
                                                                                <div class="mt-0 mt-sm-2 d-block">
                                                                                    <h6
                                                                                        class="mb-0 fs-14 fw-semibold">
                                                                                        {value.id}</h6>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="d-flex">
                                                                                    <span class="avatar bradius"
                                                                                        style={{backgroundImage: 'url(../assets/images/orders/10.jpg)'}}></span>
                                                                                    <div
                                                                                        class="ms-3 mt-0 mt-sm-2 d-block">
                                                                                        <h6
                                                                                            class="mb-0 fs-14 fw-semibold">
                                                                                            {value.business_name}</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="d-flex">
                                                                                    <div
                                                                                        class="mt-0 mt-sm-3 d-block">
                                                                                        <h6
                                                                                            class="mb-0 fs-14 fw-semibold">
                                                                                            {value.User.first_name}</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                            <div class="d-flex">
                                                                                <div
                                                                                    class="mt-0 mt-sm-3 d-block">
                                                                                    <h6
                                                                                        class="mb-0 fs-14 fw-semibold">
                                                                                        {value.business_type}</h6>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                         
                                                                            <td><span
                                                                                    class="fw-semibold mt-sm-2 d-block">{value.location}</span>
                                                                            </td>
                                                                            <td>
                                                                                <div class="d-flex">
                                                                                    <div
                                                                                        class="mt-0 mt-sm-3 d-block">
                                                                                        <h6
                                                                                            class="mb-0 fs-14 fw-semibold">
                                                                                            {value.User.phone_no}</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="mt-sm-1 d-block">
                                                                                    <span
                                                                                        class="badge bg-success-transparent rounded-pill text-success p-2 px-3">active</span>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="g-2">
                                                                                    <a class="btn text-primary btn-sm"
                                                                                        data-bs-toggle="tooltip"
                                                                                        data-bs-original-title="Edit"><span
                                                                                            class="fe fe-edit fs-14"></span></a>
                                                                                    <a class="btn text-danger btn-sm"
                                                                                        data-bs-toggle="tooltip"
                                                                                        data-bs-original-title="Delete"><span
                                                                                            class="fe fe-trash-2 fs-14"></span></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        )
                                                                    }
                                                                    )}

                                                                    
                                                                    
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane" id="tab8">
                                                            <div class="table-responsive">
                                                                <table
                                                                    class="table table-bordered text-nowrap mb-0">
                                                                    <thead class="border-top">
                                                                        <tr>
                                                                            <th class="bg-transparent border-bottom-0"
                                                                                style={{width:'5%'}}>Tracking Id</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Product</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Customer</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Date</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Amount</th>
                                                                            <th
                                                                                class="bg-transparent border-bottom-0">
                                                                                Payment Mode</th>
                                                                            <th class="bg-transparent border-bottom-0"
                                                                                style={{width: '10%'}}>Status</th>
                                                                            <th class="bg-transparent border-bottom-0"
                                                                                style={{width:'5%'}}>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>

                                                                    {vendorsList.map((value, key) => {
                                                                        return (
                                                                        <tr class="border-bottom">
                                                                            <td class="text-center">
                                                                                <div class="mt-0 mt-sm-2 d-block">
                                                                                    <h6
                                                                                        class="mb-0 fs-14 fw-semibold">
                                                                                        {value.id}</h6>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="d-flex">
                                                                                    <span class="avatar bradius"
                                                                                        style={{backgroundImage: 'url(../assets/images/orders/10.jpg)'}}></span>
                                                                                    <div
                                                                                        class="ms-3 mt-0 mt-sm-2 d-block">
                                                                                        <h6
                                                                                            class="mb-0 fs-14 fw-semibold">
                                                                                            {value.business_name}</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="d-flex">
                                                                                    <div
                                                                                        class="mt-0 mt-sm-3 d-block">
                                                                                        <h6
                                                                                            class="mb-0 fs-14 fw-semibold">
                                                                                            {value.User.first_name}</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                            <div class="d-flex">
                                                                                <div
                                                                                    class="mt-0 mt-sm-3 d-block">
                                                                                    <h6
                                                                                        class="mb-0 fs-14 fw-semibold">
                                                                                        {value.business_type}</h6>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                         
                                                                            <td><span
                                                                                    class="fw-semibold mt-sm-2 d-block">{value.location}</span>
                                                                            </td>
                                                                            <td>
                                                                                <div class="d-flex">
                                                                                    <div
                                                                                        class="mt-0 mt-sm-3 d-block">
                                                                                        <h6
                                                                                            class="mb-0 fs-14 fw-semibold">
                                                                                            {value.User.phone_no}</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="mt-sm-1 d-block">
                                                                                    <span
                                                                                        class="badge bg-success-transparent rounded-pill text-success p-2 px-3">active</span>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div class="g-2">
                                                                                    <a class="btn text-primary btn-sm"
                                                                                        data-bs-toggle="tooltip"
                                                                                        data-bs-original-title="Edit"><span
                                                                                            class="fe fe-edit fs-14"></span></a>
                                                                                    <a class="btn text-danger btn-sm"
                                                                                        data-bs-toggle="tooltip"
                                                                                        data-bs-original-title="Delete"><span
                                                                                            class="fe fe-trash-2 fs-14"></span></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        )
                                                                    }
                                                                    )}

                                                                    
                                                                    
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
                        Copyright © <span id="year"></span> <a href="javascript:void(0)">PataMtaani</a>. Designed with <span
                            class="fa fa-heart text-danger"></span> by <a href="javascript:void(0)"> Frankcode20 </a> All rights reserved.
                    </div>
                </div>
            </div>
        </footer>














</div>
    
    
    
    </div>
    </div>
   
  )
}

export default Vendors