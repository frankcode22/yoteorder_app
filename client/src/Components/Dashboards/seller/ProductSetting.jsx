import React from 'react'
import { useEffect,useState,useContext} from 'react';



import axios from 'axios';

import { Helmet } from "react-helmet";

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../../helpers/AuthContext'
import SidebarS from './SidebarS'
import TopbarS from './TopbarS'


import { SingleUploader, MultiUploader, Dropzone } from './Uploaders/Uploaders';




function ProductSetting() {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [product_description, setProduct_description] = useState("");
    const [price, setPrice] = useState("");

    const [quantity, setQuantity] = useState("");

    const [geo_location, setGeo_location] = useState("");

    const [userId, setUserId] = useState("");

    const [unit_of_measure, setunit_of_measure] = useState("");


    const [city, setCity] = useState("");
    const [state, setState] = useState("");
  
    const [country, setCountry] = useState("");


    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [address_line_1, setaddress_line_1] = useState("");
    const [address_line_2, setaddress_line_2] = useState("");

    const [postal_code, setPostal_code] = useState("");


  
      const [showingInfoWindow, setShowingInfoWindow] = useState(false);


      const [showErrorAlert,setShowErrorAlert] = useState(false);

      const [activeMarker, setActiveMarker] = useState({});
      const [selectedPlace, setSelectedPlace] = useState({});

      const [lat, setLat] = useState(null);
      const [lng, setLng] = useState(null);

      const [loclat, setLoclat] = useState(null);
      const [status, setStatus] = useState(null);
  
  
    const [address, setAddress] = React.useState("");


    const [businessId, setbusinessId] = useState('');

    const [business_name, setbusiness_name] = useState("");

  
    const [productsList, setProductsList] = useState([]);

    const [errorMessage, setErrorMessage] = useState("");

    const [isDivLoading, setIsDivLoading] = useState(false);

    const [bussSetup,setBussSetup]=useState(false);

    const [isLoading,setLoading]=useState(false);


    const [mapCenter, setMapCenter] = useState({
      lat: 0,
      lng: 0
  
  });



  let product_image=localStorage.getItem('product_photo')
  product_image=JSON.parse(product_image)




  useEffect(()=>{

   




     //axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
     axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

        setUserId(response.data.id)
  
  
       })


       axios.get('https://yoteorder-server.herokuapp.com/users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
        if(response.data!=null){
    
          setbusinessId(response.data.id);

         

          setbusiness_name(response.data.business_name);

          setBussSetup(true);
      
        
      
        }
        else{
      
      
          setbusinessId(null)
          setBussSetup(false);
          setbusiness_name('nobuzz')
        }
    
        
         })



            //axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
     axios.get('https://yoteorder-server.herokuapp.com/users/myproducts', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

      setProductsList(response.data)
  
  
       })

    

       




},[]);




  const data={
    name:name,
    type:type,
    product_description:product_description,
    price: price,
    quantity:quantity,
    geo_location:address_line_2,
    unit_of_measure:unit_of_measure,
    latitude:lat,
    longitude:lng,
    product_image:product_image,
    UserId:userId,
    BusinessId:businessId,
      
  }


  
  const addDetails = ()  => {
    setLoading(true);


    if(businessId==null){
        toast.error('You must have a bussines');

        setShowErrorAlert(true)

        setLoading(false)

        setTimeout(() => {
            setShowErrorAlert(false);
        }, 3000);
    }

 //axios.post("https://kilimomazaoapi-dmi-cyber.herokuapp.com/product",data).then((response)=>{
    
  axios.post("https://yoteorder-server.herokuapp.com/product",data).then((response)=>{
     

    console.log("The response is"+response.data)



    console.log("THE IMAGE NAME IS "+product_image)



    

       
        setTimeout(() => {
            setLoading(false);
            toast.info('Product saved successfully');
        }, 3000);
     
       //  history("/dashboard");
      
       
    })

}


  return (
    <div class="app sidebar-mini ltr">


    <div id="global-loader">
    <img src="assets/images/loader.svg" class="loader-img" alt="Loader"/>
    </div>

    
    <div class="page">
<div class="page-main">





<TopbarS></TopbarS>


<SidebarS></SidebarS>




<div class="main-content app-content mt-0">
<div class="side-app">







<div class="main-container container-fluid">


                        <div class="page-header">
                            <h1 class="page-title">Shop</h1>
                            <div>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="javascript:void(0)">E-Commerce</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Shop</li>
                                </ol>
                            </div>
                        </div>
                     
                        <div class="row row-cards">
                            <div class="col-xl-3 col-lg-4">
                                <div class="row">
                                    <div class="col-md-12 col-lg-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <div class="card-title">Categories</div>
                                                <a class="btn btn-primary off-canvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                <span class="icons"><i class="ri-star-line"></i></span> Products <span class="ms-auto badge bg-success bradius">03</span></a>
                                            </div>
                                            <div class="card-body">
                                                <ul class="list-group">
                                                    <li class="list-group-item border-0 p-0"> <a href="javascript:void(0)"><i class="fe fe-chevron-right"></i> Mens </a><span class="product-label">22</span> </li>
                                                    <li class="list-group-item border-0 p-0"> <a href="javascript:void(0)"><i class="fe fe-chevron-right"></i> Womens </a><span class="product-label">15</span> </li>
                                                    <li class="list-group-item border-0 p-0"> <a href="javascript:void(0)"><i class="fe fe-chevron-right"></i> Kids </a><span class="product-label">10</span> </li>
                                                    <li class="list-group-item border-0 p-0"> <a href="javascript:void(0)"><i class="fe fe-chevron-right"></i> Others </a><span class="product-label">88</span> </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header">
                                                <div class="card-title">Price Range</div>
                                            </div>
                                            <div class="card-body">
                                                <label class="custom-control custom-radio mb-0 mt-1">
                                                    <input type="radio" class="custom-control-input" name="example-radios"
                                                        value="option1" checked/>
                                                    <span class="custom-control-label">Upto $500</span>
                                                </label>
                                                <label class="custom-control custom-radio mb-0 mt-1">
                                                    <input type="radio" class="custom-control-input" name="example-radios"
                                                        value="option1"/>
                                                    <span class="custom-control-label">$500 - $1000</span>
                                                </label>
                                                <label class="custom-control custom-radio mb-0 mt-1">
                                                    <input type="radio" class="custom-control-input" name="example-radios"
                                                        value="option1"/>
                                                    <span class="custom-control-label">$1000 - $1500</span>
                                                </label>
                                                <label class="custom-control custom-radio mb-0 mt-1">
                                                    <input type="radio" class="custom-control-input" name="example-radios"
                                                        value="option1"/>
                                                    <span class="custom-control-label">Over $2000</span>
                                                </label>
                                                <div class="d-flex">
                                                    <div class="card-body px-0">
                                                        <div id="mySlider"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header">
                                                <h3 class="card-title">
                                                    Colors
                                                </h3>
                                            </div>
                                            <div class="card-body">
                                                <form class="shop__filter">
                                                    <div class="row gutters-xs">
                                                        <div class="col-auto">
                                                            <label class="colorinput">
                                                                <input name="color" type="radio" value="azure"
                                                                    class="colorinput-input" checked=""/>
                                                                <span class="colorinput-color bg-azure"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-auto">
                                                            <label class="colorinput">
                                                                <input name="color" type="radio" value="indigo"
                                                                    class="colorinput-input"/>
                                                                <span class="colorinput-color bg-indigo"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-auto">
                                                            <label class="colorinput">
                                                                <input name="color" type="radio" value="purple"
                                                                    class="colorinput-input"/>
                                                                <span class="colorinput-color bg-purple"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-auto">
                                                            <label class="colorinput">
                                                                <input name="color" type="radio" value="pink"
                                                                    class="colorinput-input"/>
                                                                <span class="colorinput-color bg-pink"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-auto">
                                                            <label class="colorinput">
                                                                <input name="color" type="radio" value="red"
                                                                    class="colorinput-input"/>
                                                                <span class="colorinput-color bg-red"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-auto">
                                                            <label class="colorinput">
                                                                <input name="color" type="radio" value="orange"
                                                                    class="colorinput-input"/>
                                                                <span class="colorinput-color bg-orange"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-auto">
                                                            <label class="colorinput">
                                                                <input name="color" type="radio" value="yellow"
                                                                    class="colorinput-input"/>
                                                                <span class="colorinput-color bg-yellow"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-auto">
                                                            <label class="colorinput">
                                                                <input name="color" type="radio" value="lime"
                                                                    class="colorinput-input"/>
                                                                <span class="colorinput-color bg-lime"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-auto">
                                                            <label class="colorinput">
                                                                <input name="color" type="radio" value="green"
                                                                    class="colorinput-input"/>
                                                                <span class="colorinput-color bg-green"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <label class="form-label">Category</label>
                                                    <select name="beast" id="select-beast" class="form-control form-select select2">
                                                        <option value="0">--Select--</option>
                                                        <option value="1">Dress</option>
                                                        <option value="2">Bags &amp; Purses</option>
                                                        <option value="3">Coat &amp; Jacket</option>
                                                        <option value="4">Beauty</option>
                                                        <option value="5">Jeans</option>
                                                        <option value="5">Jewellery</option>
                                                        <option value="5">Electronics</option>
                                                        <option value="5">Sports</option>
                                                        <option value="5">Technology</option>
                                                        <option value="5">Watches</option>
                                                        <option value="5">Accessories</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Brand</label>
                                                    <select name="beast" id="select-beast1" class="form-control form-select select2">
                                                        <option value="0">--Select--</option>
                                                        <option value="1">White</option>
                                                        <option value="2">Black</option>
                                                        <option value="3">Red</option>
                                                        <option value="4">Green</option>
                                                        <option value="5">Blue</option>
                                                        <option value="6">Yellow</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Type</label>
                                                    <select name="beast" id="select-beast2" class="form-control form-select select2">
                                                        <option value="0">--Select--</option>
                                                        <option value="1">Extra Small</option>
                                                        <option value="2">Small</option>
                                                        <option value="3">Medium</option>
                                                        <option value="4">Large</option>
                                                        <option value="5">Extra Large</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Color</label>
                                                    <select name="beast" id="select-beast3" class="form-control form-select select2">
                                                        <option value="0">--Select--</option>
                                                        <option value="1">White</option>
                                                        <option value="2">Black</option>
                                                        <option value="3">Red</option>
                                                        <option value="4">Green</option>
                                                        <option value="5">Blue</option>
                                                        <option value="6">Yellow</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xl-9 col-lg-8">
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="card p-0">
                                            <div class="card-body p-4">
                                                <div class="row">
                                                    <div class="col-xl-5 col-lg-8 col-md-8 col-sm-8">
                                                        <div class="input-group d-flex w-100 float-start">
                                                            <input type="text" class="form-control border-end-0 my-2" placeholder="Search ..."/>
                                                            <button class="btn input-group-text bg-transparent border-start-0 text-muted my-2">
                                                                <i class="fe fe-search text-muted" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                                        <ul class="nav item2-gl-menu float-end my-2">
                                                            <li class="border-end"><a href="#tab-11" class="show active" data-bs-toggle="tab" title="List style"><i class="fa fa-th"></i></a></li>
                                                            <li><a href="#tab-12" data-bs-toggle="tab" class="" title="Grid"><i class="fa fa-list"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-xl-3 col-lg-12">
                                                   
                                                        <a class="btn btn-primary btn-block float-end my-2" data-bs-effect="effect-flip-horizontal" data-bs-toggle="modal" href="#modaldemo8"><i class="fa fa-plus-square me-2"></i>New Product</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tab-11">
                                        <div class="row">

                                       {showErrorAlert &&   <div class="alert alert-danger" role="alert">
                                       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-hidden="true">×</button>
                                       <strong>Oh snap!</strong> <a href="javascript:void(0)" class="alert-link">You must have a business</a>and try submitting again.
                                   </div>} 
                                       
                                     

                                        {productsList.map((value, key) => {
                                            return (
                                            <div class="col-md-6 col-xl-4 col-sm-6">
                                                <div class="card">
                                                    <div class="product-grid6">
                                                        <div class="product-image6 p-5">
                                                            <ul class="icons">
                                                                <li>
                                                                    <a href="shop-description.html" class="btn btn-primary"> <i class="fe fe-eye">  </i> </a>
                                                                </li>
                                                                <li><a href="#" class="btn btn-success"><i  class="fe fe-edit"></i></a></li>
                                                                <li><a href="javascript:void(0)" class="btn btn-danger"><i class="fe fe-x"></i></a></li>
                                                            </ul>
                                                            <a href="shop-description.html" >
                                                                <img class="img-fluid br-7 w-100" src="../assets/images/pngs/9.jpg" alt="img"/>
                                                            </a>
                                                        </div>
                                                        <div class="card-body pt-0">
                                                            <div class="product-content text-center">
                                                                <h1 class="title fw-bold fs-20"><a href="shop-description.html">{value.name}</a></h1>
                                                                <div class="mb-2 text-warning">
                                                                    <i class="fa fa-star text-warning"></i>
                                                                    <i class="fa fa-star text-warning"></i>
                                                                    <i class="fa fa-star text-warning"></i>
                                                                    <i class="fa fa-star-half-o text-warning"></i>
                                                                    <i class="fa fa-star-o text-warning"></i>
                                                                </div>
                                                                <div class="price">Ksh {value.price}<span class="ms-4">Ksh  {value.price}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card-footer text-center">
                                                            <a href="#" class="btn btn-primary mb-1"><i class="fe fe-shopping-cart mx-2"></i>Add to cart</a>
                                                            <a href="#" class="btn btn-outline-primary mb-1"><i class="fe fe-heart mx-2 wishlist-icon"></i>Add to wishlist</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            )
                                        })}

                                          
                                            <div class="mb-5">
                                                <div class="float-end">
                                                    <ul class="pagination ">
                                                        <li class="page-item page-prev disabled">
                                                            <a class="page-link" href="javascript:void(0)" tabindex="-1">Prev</a>
                                                        </li>
                                                        <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                                                        <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                                                        <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                                                        <li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
                                                        <li class="page-item"><a class="page-link" href="javascript:void(0)">5</a></li>
                                                        <li class="page-item page-next">
                                                            <a class="page-link" href="javascript:void(0)">Next</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="tab-12">
                                        <div class="row">
                                            <div class="col-xl-12 col-lg-12 col-md-12">
                                                <div class="card overflow-hidden">
                                                    <div class="card-body">
                                                        <div class="row g-0">
                                                            <div class="col-xl-3 col-lg-12 col-md-12">
                                                                <div class="product-list">
                                                                    <div class="product-image">
                                                                        <ul class="icons">
                                                                            <li><a href="shop-description.html" class="btn btn-primary"><i class="fe fe-eye text-white "></i></a></li>
                                                                            <li><a href="add-product.html" class="btn btn-success"><i class="fe fe-edit text-white "></i></a></li>
                                                                            <li><a href="wishlist.html" class="btn btn-danger"><i class="fe fe-x text-white"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="br-be-0 br-te-0">
                                                                        <a href="shop-description.html" class="">
                                                                            <img src="../assets/images/pngs/9.jpg" alt="img" class="cover-image br-7 w-100"/>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-6 col-lg-12 col-md-12 border-end my-auto">
                                                                <div class="card-body">
                                                                    <div class="mb-3">
                                                                        <a href="shop-description.html" class="">
                                                                            <h3 class="fw-bold fs-30 mb-3">Candy Pure Rose Water</h3>
                                                                            <div class="mb-2 text-warning">
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star-half-o fs-18 text-warning"></i>
                                                                                <i class="fa fa-star-o fs-18 text-warning"></i>
                                                                            </div>
                                                                        </a>
                                                                        <p class="fs-16">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat,quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat </p>
                                                                        <form class="shop__filter">
                                                                            <div class="row gutters-xs">
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="azure" class="colorinput-input" checked/>
                                                                                        <span class="colorinput-color bg-azure"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="indigo" class="colorinput-input"/>
                                                                                        <span class="colorinput-color bg-indigo"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="purple" class="colorinput-input"/>
                                                                                        <span class="colorinput-color bg-purple"></span>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3 col-lg-12 col-md-12 my-auto">
                                                                <div class="card-body p-0">
                                                                    <div class="price h3 text-center mb-5 fw-bold">$599</div>
                                                                    <a href="cart.html" class="btn btn-primary btn-block"><i class="fe fe-shopping-cart mx-2"></i>Add to cart</a>
                                                                    <a href="wishlist.html" class="btn btn-outline-primary btn-block mt-2"><i class="fe fe-heart mx-2 wishlist-icon"></i>Add to wishlist</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-12 col-lg-12 col-md-12">
                                                <div class="card overflow-hidden">
                                                    <div class="card-body">
                                                        <div class="row g-0">
                                                            <div class="col-xl-3 col-lg-12 col-md-12">
                                                                <div class="product-list">
                                                                    <div class="product-image">
                                                                        <ul class="icons">
                                                                            <li><a href="shop-description.html" class="btn btn-primary"><i class="fe fe-eye text-white "></i></a></li>
                                                                            <li><a href="add-product.html" class="btn btn-success"><i class="fe fe-edit text-white "></i></a></li>
                                                                            <li><a href="wishlist.html" class="btn btn-danger"><i class="fe fe-x text-white"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="br-be-0 br-te-0">
                                                                        <a href="shop-description.html" class="">
                                                                            <img src="../assets/images/pngs/10.jpg" alt="img" class="cover-image br-7 w-100"/>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-6 col-lg-12 col-md-12 border-end my-auto">
                                                                <div class="card-body">
                                                                    <div class="mb-3">
                                                                        <a href="shop-description.html" class="">
                                                                            <h3 class="fw-bold fs-30 mb-3">White Tshirt for Men</h3>
                                                                            <div class="mb-2 text-warning">
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star-half-o fs-18 text-warning"></i>
                                                                                <i class="fa fa-star-o fs-18 text-warning"></i>
                                                                            </div>
                                                                        </a>
                                                                        <p class="fs-16">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat,quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat </p>
                                                                        <form class="shop__filter">
                                                                            <div class="row gutters-xs">
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="azure" class="colorinput-input" checked=""/>
                                                                                        <span class="colorinput-color bg-azure"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="indigo" class="colorinput-input"/>
                                                                                        <span class="colorinput-color bg-indigo"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="purple" class="colorinput-input"/>
                                                                                        <span class="colorinput-color bg-purple"></span>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3 col-lg-12 col-md-12 my-auto">
                                                                <div class="card-body p-0">
                                                                    <div class="price h3 text-center mb-5 fw-bold">$1,399</div>
                                                                    <a href="cart.html" class="btn btn-primary btn-block"><i class="fe fe-shopping-cart mx-2"></i>Add to cart</a>
                                                                    <a href="wishlist.html" class="btn btn-outline-primary btn-block mt-2"><i class="fe fe-heart mx-2 wishlist-icon"></i>Add to wishlist</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-12 col-lg-12 col-md-12">
                                                <div class="card overflow-hidden">
                                                    <div class="card-body">
                                                        <div class="row g-0">
                                                            <div class="col-xl-3 col-lg-12 col-md-12">
                                                                <div class="product-list">
                                                                    <div class="product-image">
                                                                        <ul class="icons">
                                                                            <li><a href="shop-description.html" class="btn btn-primary"><i class="fe fe-eye text-white "></i></a></li>
                                                                            <li><a href="add-product.html" class="btn btn-success"><i class="fe fe-edit text-white "></i></a></li>
                                                                            <li><a href="wishlist.html" class="btn btn-danger"><i class="fe fe-x text-white"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="br-be-0 br-te-0">
                                                                        <a href="shop-description.html" class="">
                                                                            <img src="../assets/images/pngs/8.jpg" alt="img" class="cover-image br-7 w-100"/>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-6 col-lg-12 col-md-12 border-end my-auto">
                                                                <div class="card-body">
                                                                    <div class="mb-3">
                                                                        <a href="shop-description.html" class="">
                                                                            <h3 class="fw-bold fs-30 mb-3">Stylish Rockerz 255 Ear Pods</h3>
                                                                            <div class="mb-2 text-warning">
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star-half-o fs-18 text-warning"></i>
                                                                                <i class="fa fa-star-o fs-18 text-warning"></i>
                                                                            </div>
                                                                        </a>
                                                                        <p class="fs-16">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat,quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat </p>
                                                                        <form class="shop__filter">
                                                                            <div class="row gutters-xs">
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="azure" class="colorinput-input" checked=""/>
                                                                                        <span class="colorinput-color bg-azure"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="indigo" class="colorinput-input"/>
                                                                                        <span class="colorinput-color bg-indigo"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="purple" class="colorinput-input"/>
                                                                                        <span class="colorinput-color bg-purple"></span>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3 col-lg-12 col-md-12 my-auto">
                                                                <div class="card-body p-0">
                                                                    <div class="price h3 text-center mb-5 fw-bold">$16,599</div>
                                                                    <a href="cart.html"><span  class="btn btn-primary btn-block"><i class="fe fe-shopping-cart mx-2"></i>Add to cart</span></a>
                                                                    <a href="wishlist.html"><span  class="btn btn-outline-primary btn-block mt-2"><i class="fe fe-heart mx-2 wishlist-icon"></i>Add to wishlist</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-12 col-lg-12 col-md-12">
                                                <div class="card overflow-hidden">
                                                    <div class="card-body">
                                                        <div class="row g-0">
                                                            <div class="col-xl-3 col-lg-12 col-md-12">
                                                                <div class="product-list">
                                                                    <div class="product-image">
                                                                        <ul class="icons">
                                                                            <li><a href="shop-description.html" class="btn btn-primary"><i class="fe fe-eye text-white "></i></a></li>
                                                                            <li><a href="add-product.html" class="btn btn-success"><i class="fe fe-edit text-white "></i></a></li>
                                                                            <li><a href="wishlist.html" class="btn btn-danger"><i class="fe fe-x text-white"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="br-be-0 br-te-0">
                                                                        <a href="shop-description.html" class="">
                                                                            <img src="../assets/images/pngs/4.jpg" alt="img" class="cover-image br-7 w-100"/>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-6 col-lg-12 col-md-12 border-end my-auto">
                                                                <div class="card-body">
                                                                    <div class="mb-3">
                                                                        <a href="shop-description.html" class="">
                                                                            <h3 class="fw-bold fs-30 mb-3">Flower Pot for Home Decor</h3>
                                                                            <div class="mb-2 text-warning">
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star-half-o fs-18 text-warning"></i>
                                                                                <i class="fa fa-star-o fs-18 text-warning"></i>
                                                                            </div>
                                                                        </a>
                                                                        <p class="fs-16">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat,quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat </p>
                                                                        <form class="shop__filter">
                                                                            <div class="row gutters-xs">
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="azure" class="colorinput-input" checked=""/>
                                                                                        <span class="colorinput-color bg-azure"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="indigo" class="colorinput-input"/>
                                                                                        <span class="colorinput-color bg-indigo"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="purple" class="colorinput-input"/>
                                                                                        <span class="colorinput-color bg-purple"></span>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3 col-lg-12 col-md-12 my-auto">
                                                                <div class="card-body p-0">
                                                                    <div class="price h3 text-center mb-5 fw-bold">$1,299</div>
                                                                    <a href="cart.html"><span class="btn btn-primary btn-block"><i class="fe fe-shopping-cart mx-2"></i>Add to cart</span></a>
                                                                    <a href="wishlist.html"><span class="btn btn-outline-primary btn-block mt-2"><i class="fe fe-heart mx-2 wishlist-icon"></i>Add to wishlist</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-12 col-lg-12 col-md-12">
                                                <div class="card overflow-hidden">
                                                    <div class="card-body">
                                                        <div class="row g-0">
                                                            <div class="col-xl-3 col-lg-12 col-md-12">
                                                                <div class="product-list">
                                                                    <div class="product-image">
                                                                        <ul class="icons">
                                                                            <li><a href="shop-description.html" class="btn btn-primary"><i class="fe fe-eye text-white "></i></a></li>
                                                                            <li><a href="add-product.html" class="btn btn-success"><i class="fe fe-edit text-white "></i></a></li>
                                                                            <li><a href="wishlist.html" class="btn btn-danger"><i class="fe fe-x text-white"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="br-be-0 br-te-0">
                                                                        <a href="shop-description.html" class="">
                                                                            <img src="../assets/images/pngs/3.jpg" alt="img" class="cover-image br-7 w-100"/>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-6 col-lg-12 col-md-12 border-end my-auto">
                                                                <div class="card-body">
                                                                    <div class="mb-3">
                                                                        <a href="shop-description.html" class="">
                                                                            <h3 class="fw-bold fs-30 mb-3">Running Shoes for men</h3>
                                                                            <div class="mb-2 text-warning">
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star fs-18 text-warning"></i>
                                                                                <i class="fa fa-star-half-o fs-18 text-warning"></i>
                                                                                <i class="fa fa-star-o fs-18 text-warning"></i>
                                                                            </div>
                                                                        </a>
                                                                        <p class="fs-16">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat,quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat </p>
                                                                        <form class="shop__filter">
                                                                            <div class="row gutters-xs">
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="azure" class="colorinput-input" checked=""/>
                                                                                        <span class="colorinput-color bg-azure"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="indigo" class="colorinput-input"/>
                                                                                        <span class="colorinput-color bg-indigo"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col-auto">
                                                                                    <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="purple" class="colorinput-input"/>
                                                                                        <span class="colorinput-color bg-purple"></span>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3 col-lg-12 col-md-12 my-auto">
                                                                <div class="card-body p-0">
                                                                    <div class="price h3 text-center mb-5 fw-bold">$6,599</div>
                                                                    <a href="cart.html"><span class="btn btn-primary btn-block"><i class="fe fe-shopping-cart mx-2"></i>Add to cart</span></a>
                                                                    <a href="wishlist.html"><span class="btn btn-outline-primary btn-block mt-2"><i class="fe fe-heart mx-2 wishlist-icon"></i>Add to wishlist</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-5">
                                                <div class="float-end">
                                                    <ul class="pagination ">
                                                        <li class="page-item page-prev disabled">
                                                            <a class="page-link" href="javascript:void(0)" tabindex="-1">Prev</a>
                                                        </li>
                                                        <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                                                        <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                                                        <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                                                        <li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
                                                        <li class="page-item"><a class="page-link" href="javascript:void(0)">5</a></li>
                                                        <li class="page-item page-next">
                                                            <a class="page-link" href="javascript:void(0)">Next</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
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
                                    <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">Product Details</h3>
                                    </div>
                                    <div class="card-body">
                                    {/*  <div class="form-row">
                                            <div class="form-group col-md-6 mb-0">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="name1" placeholder="First Name"/>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 mb-0">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="name2" placeholder="Last Name"/>
                                                </div>
                                            </div>
                                        </div>*/}
                                       
                                        <div class="form-group ">
                                          
                                            <label for="nameWithTitle" class="form-label">Product Name</label>
                        
                        
                                            <input type="hidden" id="nameWithTitle" class="form-control" placeholder="Enter Name"
                                    
                                                value={businessId}
                                                
                                                onChange={(event) => {
                                                    setbusinessId(event.target.value);
                                                  }}
                                                   
                                                />
                        
                                            <input type="hidden" id="price" class="form-control" value={userId}
                                  
                                            onChange={(event) => {
                                                setUserId(event.target.value);
                                              }}
                                            />
                        
                                            <input type="text" id="product_name" class="form-control" placeholder="Enter Name"
                                  
                                            onChange={(event) => {
                                                setName(event.target.value);
                                              }}
                                               
                                            />
                                        </div>
                                        <div class="form-group ">
                        
                                        <label class="form-label" for="multicol-country">Type</label>
                                <select id="multicol-country" class="form-control select2 form-select"   
                                onChange={(event) => {
                                  setType(event.target.value);
                                }}
                                
                                data-allow-clear="true">
                                  <option value="">Select Category</option>
                                  <option value="Eateries">Eateries</option>
                                  <option value="Electronics">Electronics</option>
                                  <option value="Automotive">Automotive</option>

                                  <option value="Contruction">Contruction</option>
                        
                                  <option value="Drinks">Drinks</option>
                                  <option value="Clothing">Clothing</option>
                                  <option value="Computing">Computing</option>
                        
                        
                                  <option value="Domestic">Domestic Use</option>
                                  <option value="Home-Based">Home-Based</option>
                                  <option value="Beauty">Beauty</option>
                        
                                  <option value="Agricultural">Agricultural</option>
                                  <option value="Livestock">Livestock</option>
                                  <option value="Aquatic">Aquatic</option>
                                 
                                  
                                </select>
                                            
                                            
                                        </div>
                        
                        
                                        <div class="form-row">
                                        
                                        <label for="description" class="form-label">Description</label>
                                        
                        
                                        <textarea name="address" class="form-control"   onChange={(event) => {
                                         setProduct_description(event.target.value);
                                       }} id="address" rows="2" placeholder="Your Product desciption"></textarea>
                                        
                                        </div>
                        
                        
                                        <div className="col-12">
                                        <SingleUploader
                                          uploadUrl="images/single-upload"
                                          label="Single File Upload"
                                          id="single-uploder"
                                        />
                                      </div>
                        
                        
                        
                                        <div class="form-row">
                                            <div class="form-group col-md-6 mb-0">
                                                <div class="form-group">
                                                <label for="dobWithTitle" class="form-label">Price(Per unit)</label>
                                                <input type="number" id="price" class="form-control"
                        
                                                  onChange={(event) => {
                                                    setPrice(event.target.value);
                                                  }}
                        
                        
                                                />
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 mb-0">
                                                <div class="form-group">
                                                <label for="dobWithTitle" class="form-label">Quantity</label>
                                                    <input type="number" class="form-control"
                                                    
                                                    onChange={(event) => {
                                                        setQuantity(event.target.value);
                                                      }}
                                                    id="quantity" placeholder="eg.7"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-footer mt-2">
                                           
                        
                                           
                          
                          
                                    
                                            {!isLoading && <button type="submit" onClick={addDetails} class="btn btn-primary"  style={{backgroundColor:"#085781"}}>Save</button>
                                  
                                        } 
                                        {isLoading &&
                                            <button type="submit" class="btn btn-primary btn-md btn-block mt-3 waves-effect" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
                                        }
                        
                        
                                        <button type="button" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Close</button>
                                  
                                        <ToastContainer />
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-primary">Save changes</button> <button class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>




                        
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fe fe-x fs-18"></i></button>
        </div>
        <div class="offcanvas-body">




        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Product Details</h3>
            </div>
            <div class="card-body">
            {/*  <div class="form-row">
                    <div class="form-group col-md-6 mb-0">
                        <div class="form-group">
                            <input type="text" class="form-control" id="name1" placeholder="First Name"/>
                        </div>
                    </div>
                    <div class="form-group col-md-6 mb-0">
                        <div class="form-group">
                            <input type="text" class="form-control" id="name2" placeholder="Last Name"/>
                        </div>
                    </div>
                </div>*/}
               
                <div class="form-group ">
                  
                    <label for="nameWithTitle" class="form-label">Product Name</label>


                    <input type="hidden" id="nameWithTitle" class="form-control" placeholder="Enter Name"
            
                        value={businessId}
                        
                        onChange={(event) => {
                            setbusinessId(event.target.value);
                          }}
                           
                        />

                    <input type="hidden" id="price" class="form-control" value={userId}
          
                    onChange={(event) => {
                        setUserId(event.target.value);
                      }}
                    />

                    <input type="text" id="product_name" class="form-control" placeholder="Enter Name"
          
                    onChange={(event) => {
                        setName(event.target.value);
                      }}
                       
                    />
                </div>
                <div class="form-group ">

                <label class="form-label" for="multicol-country">Type</label>
        <select id="multicol-country" class="form-control select2 form-select"   
        onChange={(event) => {
          setType(event.target.value);
        }}
        
        data-allow-clear="true">
          <option value="">Select Category</option>
          <option value="Eateries">Eateries</option>
          <option value="Electronics">Electronics</option>
          <option value="Automotive">Automotive</option>
          <option value="Contruction">Contruction</option>

          <option value="Drinks">Drinks</option>
          <option value="Clothing">Clothing</option>
          <option value="Computing">Computing</option>


          <option value="Domestic">Domestic Use</option>
          <option value="Home-Based">Home-Based</option>
          <option value="Beauty">Beauty</option>

          <option value="Agricultural">Agricultural</option>
          <option value="Livestock">Livestock</option>
          <option value="Aquatic">Aquatic</option>
         
          
        </select>
                    
                    
                </div>


                <div class="form-row">
                
                <label for="description" class="form-label">Description</label>
                

                <textarea name="address" class="form-control"   onChange={(event) => {
                 setProduct_description(event.target.value);
               }} id="address" rows="2" placeholder="Your Product desciption"></textarea>
                
                </div>


                <div className="col-12">
                <SingleUploader
                  uploadUrl="images/single-upload"
                  label="Single File Upload"
                  id="single-uploder"
                />
              </div>



                <div class="form-row">
                    <div class="form-group col-md-6 mb-0">
                        <div class="form-group">
                        <label for="dobWithTitle" class="form-label">Price(Per unit)</label>
                        <input type="number" id="price" class="form-control"

                          onChange={(event) => {
                            setPrice(event.target.value);
                          }}


                        />
                        </div>
                    </div>
                    <div class="form-group col-md-6 mb-0">
                        <div class="form-group">
                        <label for="dobWithTitle" class="form-label">Quantity</label>
                            <input type="number" class="form-control"
                            
                            onChange={(event) => {
                                setQuantity(event.target.value);
                              }}
                            id="quantity" placeholder="eg.7"/>
                        </div>
                    </div>
                </div>
                <div class="form-footer mt-2">
                   

                   
  
  
            
                    {!isLoading && <button type="submit" onClick={addDetails} class="btn btn-primary"  style={{backgroundColor:"#085781"}}>Save</button>
          
                } 
                {isLoading &&
                    <button type="submit" class="btn btn-primary btn-md btn-block mt-3 waves-effect" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
                }


                <button type="button" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Close</button>
          
                <ToastContainer />
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
  )
}

export default ProductSetting