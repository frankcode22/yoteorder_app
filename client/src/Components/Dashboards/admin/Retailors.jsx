import React from 'react'


import {useEffect,useState,useContext} from 'react';

import {useParams} from "react-router-dom"


//import axios from 'axios';

import API from '../../../services';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useNavigate,Link} from "react-router-dom";

import { AuthContext } from "../../../helpers/AuthContext";

import SideBar from './SideBar';
import Topbar from './Topbar';
import SupplierDetails from './SupplierDetails';






import ContentLoader from '../../../utils/ContentLoader';
import DataContext from '../../../helpers/DataContext';

import LocationDataContextInit from '../../../helpers/LocationDataContextInit';

import LocationDataContext from '../../../helpers/LocationDataContext';

function Retailors(props) {

    const {businessDetails,setBusinessDetails} = useContext(DataContext);

    // const {bussinessList, setBussinessList} = useContext(DataContext);
  
    const {userPos, setUserPos} = useContext(LocationDataContextInit);
  
    const {position, setPosition} = useContext(LocationDataContext);
  
   // const { posts, setPosts } = useContext(DataContext);
  
      const [name, setName] = useState("");
      const [type, setType] = useState("");
      const [product_description, setProduct_description] = useState("");
      const [price, setPrice] = useState("");
  
      const [email, setEmail] = useState("");
      const [phone_no, setPhone_no] = useState("");
  
      const [buss_contacts, setbuss_contacts] = useState("");
  
  
      let { idx, label, uploadUrl } = props;
  
      const [isUploding, setUploding] = useState(false);
      const [uploadedImg, setUplodedImg] = useState("");
      const [uploadProgress, setProgress] = useState(0);
  
      const [image, setImage] = useState('')
  
  
  
  
  
      const [business_name, setbusiness_name] = useState("");
      const [business_type, setbusiness_type] = useState("");
    
      const [business_description, setbusiness_description] = useState("");
    
      const [industry, setindustry] = useState("");
      const [location, setlocation] = useState("");
  
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
  
  
  
  
      const [businessId, setbusinessId] = useState('');
  
      const[openTime,setOpenTime]=useState('')
  
      const[closeTime,setCloseTime]=useState('')
  
      const[serviceId,setServiceId]=useState('')
  
  
      const [servicesList, setServicesList] = useState([]);
  
      const [serviceTypeList, setServiceTypeList] = useState([]);
  
      const [subcategoryList, setSubcategoryList] = useState([]);
  
      const [staffList, setStaffList] = useState([]);
  
  
      const[staffId,setStaffId]=useState('')
      const [staff_name, SetStaff_name] = useState("");
  
  
  
      const [service_name, set_service_name] = useState("");
      const [service_type, set_service_type] = useState("");
  
      const [subcatId, setSubcatId] = useState("");
  
      
      const [service_cost, set_service_cost] = useState("");
  
      const [description, set_description] = useState("");
    
  
      const [postal_code, setPostal_code] = useState("");
  
  
    
        const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  
        const [activeMarker, setActiveMarker] = useState({});
        const [selectedPlace, setSelectedPlace] = useState({});
  
        const [lat, setLat] = useState(null);
        const [lng, setLng] = useState(null);
  
        const [loclat, setLoclat] = useState(null);
        const [status, setStatus] = useState(null);
    
    
      const [address, setAddress] = React.useState("");
  
      
      const [showErrorAlert,setShowErrorAlert] = useState(false);
  
  
      const [isBusinessSet,setIsBusinessSet] = useState(false);
  
      const [contacts,setcontacts] = useState('');

      const [dateJoined,setdateJoined] = useState('');

      const {authState} = useContext(AuthContext);
  
      
  
  
  
      const [customersList, setCustomersList] = useState([]);
  
    
      const [productsList, setProductsList] = useState([]);

      const [supplierList, setSupplierList] = useState([]);
  
      const [errorMessage, setErrorMessage] = useState("");
  
      const [isDivLoading, setIsDivLoading] = useState(false);
  
  
      const [imagePath, setImagePath] = useState("");
  
      const [profile_photo, setprofile_photo] = useState("");
  
      const [customersCount, setCustomersCount] = useState(0);
  
  
      const [fileInputState, setFileInputState] = useState('');
  
      const [previewSource, setPreviewSource] = useState('');
  
  
  
     const [serviceIconInputState, setServiceIconInputState] = useState('');
     const [previewIconSource, setPreviewIconSource] = useState('');
  
  
  
    const [selectedFile, setSelectedFile] = useState();
  
    const [selectedIconFile, setSelectedIconFile] = useState();
  
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
  
    const [notifications, setNotifications] = useState([]);
  
  
    const [showUpdateButton, setShowUpdateButton] = useState(false);
  
  
    const [showVideoModal, setShowVideoModal] = useState(false);
  
    const [showSuccessAlert,setShowSucessAlert]=useState(false);
  
   
  
  
  
  
  
      
  
      const [isLoading,setLoading]=useState(false);
  
  
      
      
  
       
      const [mapCenter, setMapCenter] = useState({
        lat: userPos.lat,
        lng: userPos.long
    });
  
  
  
  
  
  
  
  
  
    const [bussSetup,setBussSetup]=useState(false);
  
    const [showSetUpError,setShowSetUpError]=useState(false);
  
    const [showServicesDiv,setShowServicesDiv]=useState(false);
  
    const [showBusinessSetupDiv,setShowBusinessSetupDiv]=useState(true);
  
  
    const [showHelpAndSupport,setShowHelpAndSupport]=useState(false);
  
  
    const [cloudinary_url, setCloudinaryUrl] = useState("");


    const [showSupplierDetails,setShowSupplierDetails]=useState(false);

    
   
    //const [service_type, set_service_type] = useState("");

    let { id } = useParams();
  
  
    let history = useNavigate();
    
    
    
    useEffect(()=>{
    
       
        //axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
            API.get('users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
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
    
    
       API.get("product/allproducts",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
           
    
         if(response.data){
    
            setProductsList(response.data)
    
         }
         else{
            setProductsList([])
    
         }
          
    
           console.log("THE Products LIST DATA "+response.data)
           })



           API.get("suppliers/getall",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
           
    
            if(response.data){
       
               setSupplierList(response.data)
       
            }
            else{
                setSupplierList([])
       
            }
             
       
              console.log("THE SUPPLIER LIST DATA "+response.data)
              })
       
    
    
    
        
    
    
    
    },[]);
    
    
    const viewSelectedProduct=(id)=>{
    
        history('/products/'+id)
    
    }


    const showSupportEntryForm=()=>{

        setShowSupplierDetails(true)

        
      }


      const buss_data={

        business_name:business_name,
        business_type:industry,
        industry:industry,
        location:address,
        contacts:buss_contacts,
      
        address_line_1:address_line_1,
        latitude:mapCenter.lat,
        longitude:mapCenter.lng,
        city:city,
        state:state,
        country:country,
        business_description:business_description,
        status:status,
        UserId:userId,
       
      }


      const saveBusinessInfor = ()  => {
        setLoading(true);
    
         //axios.post("https://yoteorder-server.herokuapp.com/business",buss_data).then((response)=>{
        
        API.put(`https://yoteorder-server.herokuapp.com/business/updateBuss/${id}`,buss_data).then((response)=>{
    
        console.log("The response is"+response.data)
  
  
        console.log("START tIME"+openTime)
  
  
        console.log("END TIME"+closeTime)
  
  
        console.log("THE BUSINESS ID IS "+response.data.id)
  
        setbusinessId(response.data.id)
  
  
        setbusiness_name(response.data.business_name)
  
        setlocation(response.data.location)
        setLatitude(response.data.latitude)
        setLongitude(response.data.longitude)


       
  
    
           
            setTimeout(() => {
                setLoading(false);
                toast.success('Saved');
                setIsBusinessSet(true)
            }, 500);
         
           //  history("/dashboard");
          
           
        })
    
    }
      
    
    
    
    
      return (
        <div>
    
    
        <div class="app sidebar-mini ltr light-mode">
    
    
    
    
    
    
    
    <div class="page">
    <div class="page-main">
    
    <Topbar></Topbar>
    
    
    
    
    
    
    
    
    
    
    
    <SideBar></SideBar>
    
    
    
    
    
    
    
    
    
            <div class="main-content app-content mt-0">
            <div class="side-app">
    
               
                <div class="main-container container-fluid">
    
                  
                    <div class="page-header">
                        <h1 class="page-title">ADMIN HOME</h1>
                        <div>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Welcome: {authState.first_name}</li>
    
                            </ol>
                        </div>
                    </div>
    
    
    
                    <div class="row row-cards">
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
                               
                                    <a onClick={showSupportEntryForm} class="btn btn-primary btn-block float-end my-2" data-bs-effect="effect-flip-horizontal"><i class="fa fa-plus-square me-2"></i>New Retailor</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!showSupplierDetails &&   <div class="col-lg-12 col-xl-12">
                     
                <div class="card">
                    <div class="card-header border-bottom-0">
                        <h2 class="card-title">1 - 30 of 546 users</h2>
                        <div class="page-options ms-auto">
                            <select class="form-control select2 w-100">
                                    <option value="asc">Latest</option>
                                    <option value="desc">Oldest</option>
                                </select>
                        </div>
                    </div>
                    <div class="e-table px-5 pb-5">
                        <div class="table-responsive table-lg">
                            <table class="table border-top table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th class="text-center">

                                        </th>
                                        <th class="text-center">Photo</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Industry</th>
                                        <th>Contacts</th>
                                        <th>Latitude</th>
                                        <th>Longitude</th>
                                       
                                     
                                        <th class="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {supplierList.map((value,key)=>{

                                    return (

                                        <tr>
                                        <td class="align-middle text-center">
                                            <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                <input class="custom-control-input" id="item-1" type="checkbox"/> <label class="custom-control-label" for="item-1"></label>
                                            </div>
                                        </td>
                                        <td class="align-middle text-center"><img alt="image" class="avatar avatar-md br-7" src="assets/images/users/16.jpg"/></td>
                                        <td class="text-nowrap align-middle">{value.name}</td>
                                        <td class="text-nowrap align-middle">{value.supplier_type}</td>

                                       
                                
                                       

                                        
                                     
                                       

                                        <td class="text-nowrap align-middle">{value.industry}</td>

                                        <td class="text-nowrap align-middle">{value.contacts}</td>

                                        <td class="text-nowrap align-middle">{value.latitude}</td>

                                        <td class="text-nowrap align-middle">{value.longitude}</td>
                                         {/** <td class="text-nowrap align-middle">{value.Business.longitude?value.Business.longitude:'no bizz'}</td> */}
                                        

                                        

                                      

                                       

                                        <td class="text-center align-middle">
                                            <div class="btn-group align-top">
                                            <button class="btn btn-sm btn-primary badge" onClick={() => {
                                                viewSelectedProduct(value.id);
                                                  }} type="button">View</button>
                                            
                                                <button class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Edit</button> <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>



                                    )




                                })}
                                    
                                   
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <ul class="pagination float-end">
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
            </div>}
                  


                   {showSupplierDetails &&  <div class="col-lg-12 col-xl-12">


                   <SupplierDetails/>
                   
                   
                   </div> }
                    
                    
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
                        Copyright © <span id="year"></span> <a href="javascript:void(0)">PataMtaani</a>. Designed by <a href="javascript:void(0)"> Frankcode20 </a> All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    
    
    
    
    
    </div>
    
    
    
    </div>
        
        
        
        
        </div>
      )
    }

export default Retailors