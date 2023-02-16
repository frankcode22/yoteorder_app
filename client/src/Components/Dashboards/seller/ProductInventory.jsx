import React from 'react'
import { useEffect,useState,useContext,useCallback} from 'react';

import SideMenu from './SideMenu'
import TopHeader from './TopHeader'



import 'react-toastify/dist/ReactToastify.css';
import ProductsComponent from './ProductsComponent';
import SupplierSearchResults from './SupplierSearchResults';



import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../../helpers/AuthContext'
import SidebarS from './SidebarS'
import TopbarS from './TopbarS'

import { useNavigate,Link} from "react-router-dom"

import API from '../../../services';
import { Progress } from 'reactstrap';

import DataContext from '../../../helpers/DataContext';

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import LocationDataContextInit from '../../../helpers/LocationDataContextInit';
import LocationDataContext from '../../../helpers/LocationDataContext';
import ContentLoader from '../../../utils/ContentLoader';
//import SearchPlaces from './SearchPlaces';

import './devicestyles.css'

import { Modal, Button } from "react-bootstrap";
import InnerMenuStock from './InnerMenuStock';
import CommonProductsView from './CommonProductsView';
import CommonProductsStore from './CommonProductsStore';




function ProductInventory() {

    const [defaultList, setDefaultList] = useState(true);

    const [showSales, setShowSales] = useState(false);

    const {businessDetails,setBusinessDetails} = useContext(DataContext);

  const {userPos, setUserPos} = useContext(LocationDataContextInit);

  const {position, setPosition} = useContext(LocationDataContext);

  const [isLoadingT,setLoadingT]=useState(false);
  const [category, setcategory] = useState("");

 // const { posts, setPosts } = useContext(DataContext);

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [product_description, setProduct_description] = useState("");
    const [price, setPrice] = useState("");

    const [email, setEmail] = useState("");
    const [phone_no, setPhone_no] = useState("");

    const [buss_contacts, setbuss_contacts] = useState("");


 

    const [isUploding, setUploding] = useState(false);
    const [uploadedImg, setUplodedImg] = useState("");
    const [uploadProgress, setProgress] = useState(0);

    const [image, setImage] = useState('')

    const [productId, setProductId] = useState("");

    const [searchItemId, setSearchItemId] = useState("");




    const [itemId, setItemId] = useState("");







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


    const {productsList1, setProductsList1 } = useContext(DataContext);

    const [businessId, setbusinessId] = useState('');

    const [retailerId, setretailerId] = useState('');

    

    const[openTime,setOpenTime]=useState('')

    const[closeTime,setCloseTime]=useState('')

    const[serviceId,setServiceId]=useState('')


    const [servicesList, setServicesList] = useState([]);

    const [retailerCatList, setRetailerCatList] = useState([]);

    const[retailerProductCategoryId,setRetailerProductCategoryId]=useState('')

    

    const [staffList, setStaffList] = useState([]);


    const[staffId,setStaffId]=useState('')
    const [staff_name, SetStaff_name] = useState("");



    const [service_name, set_service_name] = useState("");
    const [service_type, set_service_type] = useState("");
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


      const [nameinvalid,setnameinvalid]=useState(false);

      const [priceinvalid,setpriceinvalid]=useState(false);
  
      const [showActionBtn,setShowActionBtn]=useState(true);

      const [showSuccessAlert,setShowSucessAlert]=useState(false);

      const [hidesavebtn,sethidesavebtn]=useState(false);
  
  
    const [address, setAddress] = React.useState("");

    
    const [showErrorAlert,setShowErrorAlert] = useState(false);


    const [isBusinessSet,setIsBusinessSet] = useState(false);


    const [productStatus,setProductStatus]=useState('available');


    const [customersList, setCustomersList] = useState([]);

  
    const [productsList, setProductsList] = useState([]);

    const [errorMessage, setErrorMessage] = useState("");

    const [isDivLoading, setIsDivLoading] = useState(false);


    const [imagePath, setImagePath] = useState("");

    const [profile_photo, setprofile_photo] = useState("");

    const [customersCount, setCustomersCount] = useState(0);


    const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const [notifications, setNotifications] = useState([]);


  const [showUpdateButton, setShowUpdateButton] = useState(false);





    

    const [isLoading,setLoading]=useState(false);


    
    

     
    const [mapCenter, setMapCenter] = useState({
      lat: userPos.lat,
      lng: userPos.long
  });









  const [bussSetup,setBussSetup]=useState(false);
  const [showServicesDiv,setShowServicesDiv]=useState(false);


  const [showProductsDiv,setShowProductsDiv]=useState(true);

  const [showBusinessSetupDiv,setShowBusinessSetupDiv]=useState(false);


  const [cloudinaryUrl, setCloudinaryUrl] = useState("");
  //const [service_type, set_service_type] = useState("");

  const [accountProfile, setAccountProfile] = useState("");


  let history = useNavigate();
  const [showSetUpError,setShowSetUpError]=useState(false);


  const [productsData, setProductsData] = useState([]);


  const [supplierData, setSuppliersData] = useState([]);

    useEffect(()=>{

        setLat(userPos.lat)
    
        setLng(userPos.long)
    
    
        let buss_status=localStorage.getItem('business_set')
    
         console.log("BUSS STATUS",buss_status)
        
        setIsBusinessSet(buss_status)
    
    
       
    
    
         //axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
         API.get('users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
            setUserId(response.data.id)
      
      
           })
    
    
    
           console.log("YOUR VENDOR BUSINESS DETAILS  IS ",businessDetails);
    
    
    
    
    
         if(businessDetails.my_buss!=null){
    
               setIsBusinessSet(true)
         
               setbusinessId(businessDetails.my_buss.id);
     
               //setServicesList(response.data.Services);
    
              setServicesList(businessDetails.my_buss.Services);
    
             
     
               setStaffList(businessDetails.my_buss.Staffs);
     
               setbusiness_name(businessDetails.my_buss.business_name);
    
               console.log("YOUR  BUSINESS NAME  IS ",businessDetails.my_buss.business_name);
    
               setCloudinaryUrl(businessDetails.my_buss.cloudinary_url)
    
           
    
               setbusiness_type(businessDetails.my_buss.business_type);
     
               setbusiness_description(businessDetails.my_buss.business_description);
     
     
               setImagePath(businessDetails.imagePath)
               
               setprofile_photo(businessDetails.my_buss.profile_photo)
     
               setlocation(businessDetails.my_buss.location)
               setLatitude(businessDetails.my_buss.latitude)
               setLongitude(businessDetails.my_buss.longitude)
              
     
               
     
               setbuss_contacts(businessDetails.my_buss.contacts)
     
               setBussSetup(true);
     
               //setOrdersList(response.data.Orders)
     
               setCustomersCount(businessDetails.my_buss.Customers.length)
     
               //setcustomer_contacts(response.data.Customers.)
           
             
           
             }
             else{
           
               setIsBusinessSet(false)
               setbusinessId(0)
               setBussSetup(false);
               setbusiness_name('nobuzz')
               //setOrdersList([])
             } 
    
    
    
          
    
    
    
    
    
    
             API.get('users/mybizz', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
        
              if(response.data.my_buss!=null){
      
                setIsBusinessSet(true)
          
               // setbusinessId(response.data.my_buss.id);
      
                setlocation(response.data.my_buss.location)
      
               // setServicesList(response.data.my_buss.Services);
      
                //setStaffList(response.data.my_buss.Staffs);
    
                // setProductsList(response.data.my_buss.Products);
    
    
      
                setbusiness_name(response.data.my_buss.business_name);
      
                setbusiness_type(response.data.my_buss.business_type);
      
                setbusiness_description(response.data.my_buss.business_description);
      
      
               // setImagePath(response.data.imagePath)
                
                //setprofile_photo(response.data.my_buss.profile_photo)
    
                setAccountProfile(response.data.my_buss.cloudinary_url)
      
               
      
                
      
                setbuss_contacts(response.data.my_buss.contacts)
      
                setBussSetup(true);
            
              
            
              }
              else{
            
                setIsBusinessSet(false)
                //setbusinessId(0)
                setBussSetup(false);
                setbusiness_name('nobuzz')
              }
          
              
               })
    
    
    
    
    
    
    
    
    
    
    
    
    
           console.log("YOUR PRODUCT LIST DETAILS  IS ",productsList1);
    
    
             if(productsList1!=null){
              
        
                setTimeout(() => {
    
                    setProductsList(productsList1)


                    setProductsData(productsList1)
                   
    
            
                   // setImagePath(response.data.imagePath)
            
                   // setSeller_name(response.data.Users);
                    setIsDivLoading(false)   // Hide loading screen 
                   // toast.info('Product saved successfully');
                }, 1000);
            
              
            
              }
              else{
            
                setErrorMessage("Unable to fetch your products list.Kindly check your internet connection!!");
                setIsDivLoading(false);
              }
    
    
    
              API.get("retailerproductcat/mycategories",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
           
    
                if(response.data){
           
                  setRetailerCatList(response.data)
           
                }
                else{
                  setRetailerCatList([])
           
                }
                 
           
                 
                  })
     
    
          
    
    
           
    
    
          
        
        
        
               //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
              API.get("customer/mycustomers").then((response) => {
              setCustomersList(response.data);
              })
        
    
           
    
    
    
    
    },[productsList1,businessDetails]);





    const displayPOS=()=>{

      setDefaultList(false)
     // setShowOrders(false)
      setShowSales(false)
      
      //setShowCustBill(false)


   }


     const viewOrders=()=>{
      
      setDefaultList(false)
        setShowSales(false)
       
        
 
 
 
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


                        <InnerMenuStock displayPOS={displayPOS}></InnerMenuStock>
                     













                      <div class="col-md-9">
                      <div class="card">
                          <div class="card-body">

                         


                            



                              
  
  
  
  
                          {defaultList &&  <ProductsComponent productsData={productsData} setProductsData={setProductsData} setSuppliersData={setSuppliersData}  setSearchItemId={setSearchItemId} setDefaultList={setDefaultList} setShowSales={setShowSales} ></ProductsComponent>}


                          {showSales &&  <SupplierSearchResults supplierData={supplierData} businessId={businessId} searchItemId={searchItemId}></SupplierSearchResults>}
  
                           
  
                          {!defaultList && <CommonProductsStore></CommonProductsStore>}


                          {!defaultList && <CommonProductsView productsData={productsData}></CommonProductsView>}
  
  
  
                         
                          
                             
                              
                          </div>
                          <div class="card-footer">
  
  
                      
                              
  
                              
                    
                          <ToastContainer/>
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

export default ProductInventory