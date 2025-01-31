import {React, useEffect,useState,useContext,useCallback} from 'react';
import { lazy, Suspense } from 'react';



//import axios from 'axios';

import API from '../../../services';

import { Helmet } from "react-helmet";

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../../helpers/AuthContext'


import { useNavigate,Link} from "react-router-dom"

import { Progress } from 'reactstrap';

import DataContext from '../../../helpers/DataContext';

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import LocationDataContextInit from '../../../helpers/LocationDataContextInit';
import LocationDataContext from '../../../helpers/LocationDataContext';
//import SearchPlaces from './SearchPlaces';

import { Modal, Button } from "react-bootstrap";

import {useParams} from "react-router-dom"


import {VendorAccount,Player} from '../../../utils/VideoPlayers'


import SideBarMenu from './SideBarMenu'
import SupplierDetails from './SupplierDetails';
import TopBarNew from './TopBarNew';

function PataMtaaniSuppliers() {


    const {supplierList, setSupplierList} = useContext(DataContext);

    const [isLoading,setLoading]=useState(false);



    const [showSupplierDetails,setShowSupplierDetails]=useState(true);


    const [showGridView,setShowGridView]=useState(false);


    const[requestDetails,setRequestDetails]=useState([]);
    
   
    //const [service_type, set_service_type] = useState("");

    let { id } = useParams();
  
  
    let history = useNavigate();
    
    
    
    useEffect(()=>{
    
       
       
    
    
   



        //    API.get("suppliers/getall",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
           
    
        //     if(response.data){
       
        //        setSupplierList(response.data)
       
        //     }
        //     else{
        //         setSupplierList([])
       
        //     }
             
       
        //       console.log("THE SUPPLIER LIST DATA "+response.data)
        //       })
       
    
    
    
        
    
    
    
    },[supplierList]);
    
    
    const viewSelectedProduct=(id)=>{
    
        history('/products/'+id)
    
    }

    const viewSelectedSupplier= (id)=>{


        const request_ = supplierList.find(post => (post.id) === id);

        console.log('SELECTED SUPPLIER',request_)

        setRequestDetails(request_)

        //setBus


    
       // history('/products/'+id)
    
    }

    const handleChange = (event) => {
        setRequestDetails({...requestDetails, [event.target.name]: event.target.value});

        //setRequestDetails({...requestDetails, [event.target.email]: event.target.value});
    }


    const saveSupplierDetails = ()  => {
        setLoading(true);
    
         //API.post("business",buss_data).then((response)=>{
    
    
          try {
    
    
    
    
             API.post('users',requestDetails).then((response)=>{
      
          console.log("THE SUPPLIER DATA IS"+response.data)
      
         // setCustomerId(response.data.id)
      
      
         
    
    
          if(response.data.error) {
    
            setTimeout(() => {
               
                toast.error(response.data.error);
                setLoading(false);
            }, 500);
    
            //alert();
            //setLoading(false);
          }
    
          else{
    
    
    
    
    
    
        
        API.post("suppliers/bussinfor",requestDetails).then((response)=>{
    
    
       // setBusinessDetails(b.map(post => post.id === id ? { ...response.data } : post));
    
       //const newDetails = response.data;
      // setBusinessDetails(newDetails ?{ ...response.data } : businessDetails);
    
     
    
       setSupplierList([
        ...supplierList,
        {requestDetails
    
        },
      ]);
    
    
    
    //    setBussSetup(true)
    
    //   // localStorage.setItem("business_set", true);
    
    //    setbusiness_name(response.data.business_name)
    
    //    setlocation(response.data.location)
    //    setLatitude(response.data.latitude)
    //    setLongitude(response.data.longitude)
    
    //     console.log("The response is"+response.data)
    
    
    //   //  console.log("START tIME"+openTime)
    
    
    //    // console.log("END TIME"+closeTime)
    
    
    //     console.log("THE BUSINESS ID IS "+response.data.id)
    
    //     setbusinessId(response.data.id)
    
    
    
       
    
    
    
       // console.log("THE NEW BUSINESS OBJECT AFTER SETTING UP MY BUSS IS "+businessDetails)
    
    
    
           
            setTimeout(() => {
                setLoading(false);
                toast.success('Saved');
                //setIsBusinessSet(true)
            }, 500);
         
           //  history("/dashboard");
          
           
        });
    
      }
    
    });
    
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    
    }
    

    const updateUserRequest=async (rId) => {
        setLoading(true)
    
        let { data } = await API.put('subscription/updatesubscription/'+rId, requestDetails, {});


        console.log("AFTER UPDATE "+data)


        setTimeout(() => {

      

        
            setLoading(false);
           // setShowActionBtn(false)
           // setShowSucessAlert(true)
            //sethidesavebtn(true)
            
            toast.success('Product saved successfully');
        }, 1000);


    }


    const showSupportEntryForm=()=>{

        setShowSupplierDetails(true)

        
      }

      const showInGridView=()=>{
    
        setShowSupplierDetails(false)
        setShowGridView(true)
      
        //setShowBusinessSetupDiv(false)
        //setShowHelpAndSupport(false)
      }
    
      const showInTabularView=()=>{
        
        setShowSupplierDetails(true)
        setShowGridView(false)
      
        //setShowBusinessSetupDiv(false)
        //setShowHelpAndSupport(false)
      }
    


      

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
                                    <li class="breadcrumb-item"><a   href="javascript:void(0);">Suppliers</a></li>
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


                    <div class="row">
                    <div class="col-lg-4 col-xl-3">
                        <div class="card custom-card">
                            <div class="card-header">
                                <div class="card-title">Settings</div>
                            </div>
                            <div class="main-content-left main-content-left-mail card-body pt-0 ">
                                <div class="main-settings-menu">
                                    <nav class="nav main-nav-column">
                                    <a class="nav-link thumb active mb-2" href="javascript:void(0);" onClick={showInTabularView}><i class="fe fe-home"></i> Main </a>
                                    <a class="nav-link border-top-0 thumb mb-2" href="javascript:void(0);"  onClick={showInGridView}><i class="fe fe-grid"></i>Grid View</a>
                                        
                                        <a class="nav-link border-top-0 thumb mb-2" href="javascript:void(0);"><i class="fe fe-bell"></i> Notifications</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">

                    

                    <div class="card custom-card">
                    <div class="card-header">
                        {/* <div class="card-title">Overview</div> */}



                        <div class="card-body p-2">
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
                       

                            <a onClick={showSupportEntryForm} class="btn btn-primary btn-block float-end my-2" data-bs-effect="effect-flip-horizontal"><i class="fa fa-plus-square me-2"></i>New Supplier</a>
                        </div>
                    </div>
                        </div>






                            

                               


                    </div>
                </div>


                <div class="card">
                {showSupplierDetails &&  
                        <div class="card-body">
                            <div class="mb-4 main-content-label">Supplier Information</div>

                            <div class="table-responsive mb-0">
                                        <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap table-striped ">
                                            <thead>
                                                <tr>
                                                <th class="text-center">

                                                #

                                                </th>
                                               
                                                <th>Name</th>
                                                <th>Industry</th>
                                                <th>Town</th>
                                                <th>Contacts</th>
                                                
                                               
                                             
                                                <th class="text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {supplierList.map((value,key)=>{

                                                return (
                                                <tr>
                                                    <td>
                                                    {key} 
                                                    </td>
                                                   
                                        <td class="text-nowrap align-middle">{value.name}</td>
                                        <td class="text-nowrap align-middle">{value.supplier_type}</td>

                                       
                                
                                       

                                        
                                     
                                       

                                        <td class="text-nowrap align-middle">{value.city}</td>

                                        <td class="text-nowrap align-middle">{value.contacts}</td>

                                       
                                         {/** <td class="text-nowrap align-middle">{value.Business.longitude?value.Business.longitude:'no bizz'}</td> */}
                                        

                                        

                                      

                                       

                                        <td class="text-center align-middle">
                                            <div class="btn-group align-top">
                                            <button class="btn btn-sm btn-primary badge" onClick={() => {
                                                viewSelectedSupplier(value.id);
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

                                        }

                        <div class="card-body">


                        {showGridView &&  

<div class="row">
{supplierList.map((value,key)=>{

    return (
        <div class="col-xl-6 col-lg-12 col-md-12">
            <div class="card border p-0 over-flow-hidden">
                <div class="media card-body media-xs overflow-visible ">
                    <img class="avatar brround avatar-md me-3" src="../assets/img/faces/12.jpg" alt="avatar-img"/>
                    <div class="media-body valign-middle">
                        <a href="" class=" fw-semibold text-dark">{value.name}</a>
                        <p class="text-muted mb-0">{value.contacts}</p>
                    </div>
                    <div class="media-body valign-middle text-end overflow-visible mt-2">
                        <button class="btn btn-primary" type="button">View More</button>
                    </div>
                </div>
            </div>
        </div>
        
        )




    })}
        
        
        
    </div>
   }





                        </div>
                        <div class="card-footer">


                    
                            

                            
                  
                       
                        </div>
                    </div>



                    <div class="card">
                        <div class="card-body">
                            <div class="mb-4 main-content-label">Supplier Information</div>

                          




                            <SupplierDetails setSupplierList={setSupplierList} supplierList={supplierList} requestDetails={requestDetails} handleChange={handleChange} saveSupplierDetails={saveSupplierDetails}></SupplierDetails>

                         





                       
                        
                           
                            
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

export default PataMtaaniSuppliers