import React from 'react'
import { useEffect,useState,useContext} from 'react';



import axios from 'axios';

import { Helmet } from "react-helmet";

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../../helpers/AuthContext'
import SidebarS from './SidebarS'
import TopbarS from './TopbarS'




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



  useEffect(()=>{

   




     //axios.get('http://localhost:3001/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
     axios.get('http://localhost:3001/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

        setUserId(response.data.id)
  
  
       })


       axios.get('http://localhost:3001/users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
        if(response.data!=null){
    
          setbusinessId(response.data.id);

         

          setbusiness_name(response.data.business_name);

          setBussSetup(true);
      
        
      
        }
        else{
      
      
          setbusinessId(0)
          setBussSetup(false);
          setbusiness_name('nobuzz')
        }
    
        
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
    UserId:userId,
    BusinessId:businessId,
      
  }


  
  const addDetails = ()  => {
    setLoading(true);

 //axios.post("https://kilimomazaoapi-dmi-cyber.herokuapp.com/product",data).then((response)=>{
    
  axios.post("http://localhost:3001/product",data).then((response)=>{
     

    console.log("The response is"+response.data)

       
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
            <h1 class="page-title">Email-Compose</h1>
            <div>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Pages</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Email-Compose</li>
                </ol>
            </div>
        </div>
       
        <div class="row">
            <div class="col-xl-3">
                <div class="card">
                    <div class="list-group list-group-transparent mb-0 mail-inbox pb-3">
                        <div class="mt-4 mb-4 mx-4 text-center">
                        <div class="col-sm-6 col-md-6 col-xl-3">
                        <a class="modal-effect btn btn-info-light d-grid mb-3" data-bs-effect="effect-flip-horizontal" data-bs-toggle="modal" href="#modaldemo8">Flip Horizontal</a>


                        <button class="btn btn-primary off-canvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
                    </div>
                            <a href="email-inbox.html" class="btn btn-primary btn-lg d-grid">Inbox</a>
                        </div>
                        <a href="email-inbox.html" class="list-group-item d-flex align-items-center active mx-4">
                            <span class="icons"><i class="ri-mail-line"></i></span> Inbox <span class="ms-auto badge bg-secondary bradius">14</span>
                        </a>
                        <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                            <span class="icons"><i class="ri-mail-open-line"></i></span> Drafts
                        </a>
                        <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                            <span class="icons"><i class="ri-star-line"></i></span> Starred <span class="ms-auto badge bg-success bradius">03</span>
                        </a>
                        <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                            <span class="icons"><i class="ri-price-tag-3-line"></i></span> Tags
                        </a>
                        <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                            <span class="icons"><i class="ri-mail-send-line"></i></span> Sent Mail
                        </a>
                        <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                            <span class="icons"><i class="ri-delete-bin-line"></i></span> Trash
                        </a>
                    </div>
                    <div class="card-body border-top p-0 py-3">
                        <div class="list-group list-group-transparent mb-0 mail-inbox mx-4">
                            <a href="javascript:void(0)" class="list-group-item list-group-item-action d-flex align-items-center py-2">
                                <span class="w-3 h-3 brround bg-primary me-2"></span> Friends
                            </a>
                            <a href="javascript:void(0)" class="list-group-item list-group-item-action d-flex align-items-center py-2">
                                <span class="w-3 h-3 brround bg-secondary me-2"></span> Family
                            </a>
                            <a href="javascript:void(0)" class="list-group-item list-group-item-action d-flex align-items-center py-2">
                                <span class="w-3 h-3 brround bg-success me-2"></span> Social
                            </a>
                            <a href="javascript:void(0)" class="list-group-item list-group-item-action d-flex align-items-center py-2">
                                <span class="w-3 h-3 brround bg-info me-2"></span> Office
                            </a>
                            <a href="javascript:void(0)" class="list-group-item list-group-item-action d-flex align-items-center py-2">
                                <span class="w-3 h-3 brround bg-warning me-2"></span> Work
                            </a>
                            <a href="javascript:void(0)" class="list-group-item list-group-item-action d-flex align-items-center py-2">
                                <span class="w-3 h-3 brround bg-danger me-2"></span> Settings
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-9">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Compose new message</h3>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <div class="row align-items-center">
                                    <label class="col-xl-2 form-label">To</label>
                                    <div class="col-xl-10">
                                        <input type="text" class="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row align-items-center">
                                    <label class="col-xl-2 form-label">CC</label>
                                    <div class="col-xl-10">
                                        <input type="text" class="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row align-items-center">
                                    <label class="col-xl-2 form-label">BC</label>
                                    <div class="col-xl-10">
                                        <input type="text" class="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row align-items-center">
                                    <label class="col-xl-2 form-label">Subject</label>
                                    <div class="col-xl-10">
                                        <input type="text" class="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row ">
                                    <label class="col-xl-2 form-label">Message</label>
                                    <div class="col-xl-10">
                                        <textarea rows="10" class="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer d-sm-flex">
                        <div class="mt-2 mb-2">
                            <a href="javascript:void(0)" class="btn btn-icon btn-white btn-svg" data-bs-toggle="tooltip" title="" data-bs-original-title="Attach"><span class="ri-attachment-2"></span></a>
                            <a href="javascript:void(0)" class="btn btn-icon btn-white btn-svg" data-bs-toggle="tooltip" title="" data-bs-original-title="Link"><span class="ri-link"></span></a>
                            <a href="javascript:void(0)" class="btn btn-icon btn-white btn-svg" data-bs-toggle="tooltip" title="" data-bs-original-title="Photos"><span class="ri-image-line"></span></a>
                            <a href="javascript:void(0)" class="btn btn-icon btn-white btn-svg" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete"><span class="ri-delete-bin-line"></span></a>
                        </div>
                        <div class="btn-list ms-auto my-auto">
                            <button class="btn btn-danger btn-space mb-0">Cancel</button>
                            <button class="btn btn-primary btn-space mb-0">Send message</button>
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
                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                            using 'Content here, content here', making it look like readable English.</p>
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


                    <input type="text" id="nameWithTitle" class="form-control" placeholder="Enter Name"
            
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
          <option value="">Select Type</option>
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