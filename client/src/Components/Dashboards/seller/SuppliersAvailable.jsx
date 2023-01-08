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





import DataContext from '../../../helpers/DataContext';
import AccountDetails from './AccountDetails';
import SideMenu from './SideMenu';
import TopHeader from './TopHeader';

function SuppliersAvailable() {

    const {bussinessList, setBussinessList} = useContext(DataContext);

    const [myBussinesses, setMyBussinesses] =useState([]);
    const [retailerList, setRetailerList] = useState([]);

    const [isLoading,setLoading]=useState(false);

    const [show, setShow] = useState(false);

    const [name, setName] = useState(false);

    const [itemId, setItemId] = useState('');

    const [itemName, setItemName] = useState('');

    const [counter, setCounter] = useState(1);

    const [quantityOrdered, setQuantityOrdered] = useState(1);

    const [order_description, setorder_description] = useState('');

    

   

    const [supplierId, setSupplierId] = useState(false);


    const [supplier_contacts, setsupplier_contacts] = useState(false);

    

    const [message, setMessage] = useState("");

    const [notificationType, setNotificationType] = useState("");



    const [showSupplierDetails,setShowSupplierDetails]=useState(true);


    const [showSupplierProducts,setShowSupplierProducts]=useState(false);


    const [supplierList, setSupplierList] = useState([]);

    const [supplierStores, setSupplierStores] = useState([]);

    const [businessId, setbusinessId] = useState('');

    const [retailerName, setRetailerName] = useState('');

    const [retailerContacts, setRetailerContacts] = useState('');


    const [showGridView,setShowGridView]=useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    const [isDivLoading, setIsDivLoading] = useState(false);


    const [displayOrderModal,setDisplayOrderModal] = useState(false);
    
   
    //const [service_type, set_service_type] = useState("");

    let { id } = useParams();
  
  
    let history = useNavigate();

    const handleClose = () => setDisplayOrderModal(false);
    
    
    
    useEffect(()=>{



        API.get('users/mybizz', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
      
            if(response.data.my_buss!=null){
    
                setMyBussinesses(response.data.my_buss)
                setbusinessId(response.data.my_buss.id);

                setRetailerName(response.data.my_buss.business_name)

                setRetailerContacts(response.data.my_buss.contacts)
        
            
          
            }
            else{
          
             // setIsBusinessSet(false)
             // setbusinessId(0)
             // setBussSetup(false);
              //setbusiness_name('nobuzz')
            }
        
            
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


  const incrementOrder=(pId)=>{

    setItemId(pId)

    setQuantityOrdered(quantityOrdered+1)

  }

 
  const incrementCounter = () => setQuantityOrdered(quantityOrdered + 1);
  let decrementCounter = () => setQuantityOrdered(quantityOrdered - 1);
  if(quantityOrdered<=0) {
    decrementCounter = () => setQuantityOrdered(1);
  }


  const openSelectedSupplier=(sId,name,contacts)=>{

        
     
    console.log("THE Supplier ID IS "+sId)

    setName(name)

    setSupplierId(sId)

   setsupplier_contacts(contacts)

    
    console.log("THE CUSTOMER NO IS "+contacts)

    setShow(true)

  


}


const viewSupplierStores=(sId,name,contacts)=>{

        
     
    console.log("THE Supplier ID IS "+sId)

    setName(name)

    setSupplierId(sId)

   setsupplier_contacts(contacts)

   setShowSupplierProducts(true)


   API.get('suppliers/getsupplierdetails/'+sId).then((response) => {
    // axios.get('https://yoteorder-server.herokuapp.com/business/bestRated').then((response) => {

   

      console.log("SUPPLIER DETAILS ARE"+response.data)

      setSupplierStores(response.data.SupplyStores)

     
     

      //setSeller_name(response.data.Users.first_name)
      
  }).catch((error) => {
      

      console.log("CONTEXT ERROR OCCURED"+error)
    
   });

    
    // console.log("THE CUSTOMER NO IS "+contacts)

    // setShow(true)

  


}

const processOrder=(pId,sId,item)=>{

        
    console.log("THE Supplier ID IS "+pId)



    
   setItemId(pId)
   setItemName(item)
   setSupplierId(sId)
 

//     setSupplierId(sId)

//    setsupplier_contacts(contacts)

//    setShowSupplierProducts(true)

   setDisplayOrderModal(true)




    
    // console.log("THE CUSTOMER NO IS "+contacts)

    // setShow(true)

  


}


const postOrder=(pId,sId,item)=>{

        
    console.log("THE Supplier ID IS "+pId)


    setLoading(true);



   



    
   setItemId(pId)
   setItemName(item)
   setSupplierId(sId)
 




   const order_data={

    item_name:itemName,
    retailerName:retailerName,
    retailerContacts:retailerContacts,
    suppier_name:name,
    order_description:order_description,
    quantityOrdered:quantityOrdered,
    supplier_contacts:supplier_contacts,
    supplierId:supplierId,
    supplyStoresId:itemId,
    RetailerId:businessId,
   
}
    
   //API.post("business",buss_data).then((response)=>{


    try {
  
  API.post("order/orderfromretailer",order_data).then((response)=>{


 // setBusinessDetails(b.map(post => post.id === id ? { ...response.data } : post));





 


//  console.log("START tIME"+openTime)


 // console.log("END TIME"+closeTime)


  console.log("SERVER RESPONSE "+response.data)




 // console.log("THE NEW BUSINESS OBJECT AFTER SETTING UP MY BUSS IS "+businessDetails)



     
      setTimeout(() => {
          setLoading(false);
          toast.success('Saved');
         // setIsBusinessSet(true)
      }, 500);
   
     //  history("/dashboard");
    
     
  });

} catch (err) {
  console.log(`Error: ${err.message}`);
}


  // setDisplayOrderModal(true)




    
    // console.log("THE CUSTOMER NO IS "+contacts)

    // setShow(true)

  


}



const sendMsg=()=>{
  
  
    const msg_payload={
      buss_contacts:supplier_contacts,
      message:message,
      businessId:supplierId,
    }
    setLoading(true)
  
    API.post('business/send_msg',msg_payload, { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
  
       console.log("THE RESPONSE IS "+JSON.stringify(response.data))
  
  
  
       setTimeout(() => {
        setLoading(false);
        //setShowOrderConfirmed(true)
        toast.success("Staff Updated")
    }, 1000);
  
      
        
  
           })
  
  
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
                <a class="desktop-logo logo-light active" href="/home_retailer"><img src="assets/img/brand/logo_pink.png" class="main-logo" alt="logo"/></a>
                <a class="desktop-logo logo-dark active" href="/home_retailer"><img src="assets/img/brand/logo_pink.png" class="main-logo" alt="logo"/></a>
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
                                    <li class="breadcrumb-item"><a   href="javascript:void(0);">Retailers</a></li>
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
                                        <a class="nav-link border-top-0 thumb mb-2" href="javascript:void(0);"  onClick={showInGridView}><i class="fe fe-grid"></i>Detailed</a>

                                        <a class="nav-link border-top-0 thumb mb-2" href="javascript:void(0);"><i class="fe fe-bell"></i> Notifications</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">

                    

                    <div class="card custom-card">
                    <div class="card-header">
                        <div class="card-title">Overview</div>



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
                       

                            <a onClick={showSupportEntryForm} class="btn btn-primary btn-block float-end my-2" data-bs-effect="effect-flip-horizontal"><i class="fa fa-plus-square me-2"></i>New Action</a>
                        </div>
                    </div>
                        </div>



                          {showSupplierDetails &&  

                            <div class="col-md-12 col-xl-12">
                            <div class="card overflow-hidden review-project">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                       
                                        <i class="mdi mdi-dots-horizontal text-gray"></i>
                                    </div>
                                  
                                    <div class="table-responsive mb-0">
                                        <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap table-striped ">
                                            <thead>
                                                <tr>
                                                <th class="text-center">

                                                #

                                                </th>
                                               
                                                <th>Business Name</th>
                                                <th>Type</th>
                                                <th>Industry</th>
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

                                       
                                
                                       

                                        
                                     
                                       

                                        <td class="text-nowrap align-middle">{value.industry}</td>

                                        <td class="text-nowrap align-middle">{value.contacts}</td>

                                       
                                         {/** <td class="text-nowrap align-middle">{value.Business.longitude?value.Business.longitude:'no bizz'}</td> */}
                                        

                                        

                                      

                                       

                                        <td class="text-center align-middle">
                                            <div class="btn-group align-top">
                                            <button class="btn btn-sm btn-primary badge"onClick={() => {
                                                openSelectedSupplier(value.id,value.name,value.contacts);
                                                  }}  type="button">Contact Supplier</button>
                                            
                                                <button class="btn btn-sm btn-primary badge" onClick={() => {
                                                    viewSupplierStores(value.id,value.name,value.contacts);
                                                      }} type="button">View Products</button> 
                                                      
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
                        </div>
                               }



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
                                                        <p class="text-muted mb-0">{value.location}</p>
													</div>
													<div class="media-body valign-middle text-end overflow-visible mt-2">

                                                   
														<button class="btn btn-primary mb-1 me-1"  onClick={() => {
                                                            openSelectedSupplier(value.id,value.name,value.contacts);
                                                              }} type="button">Contact Supplier</button>

                                                              <br></br>

                                                              <button class="btn btn-success mb-1"  onClick={() => {
                                                                viewSupplierStores(value.id,value.name,value.contacts);
                                                                  }} type="button">View Products</button>
													</div>

                                                    

                                                    
												</div>
											</div>
										</div>
										
                                        )




                                    })}
										
										
										
									</div>
                                   }

                               


                    </div>
                </div>

                <Modal class="modal fade" id="modaldemo8" show={show}>

<Modal.Header>
<Modal.Title>Completing Order</Modal.Title>
</Modal.Header>
<Modal.Body class="modal-body text-center p-4 pb-5">



<div class="card-body">

                   
<div class="form-group mb-4">
<div class=" gutters-xs">

            <p class="mg-b-10">Supplier Name</p>

        

        <div class="form-group mb-0">
        <div class="form-group">
            <input type="text" class="form-control" id="postal"

            value={name}
            
            onChange={(event) => {
                setName(event.target.value);
              }} placeholder="Supplier Name"/>
        </div>
    </div>




    <div class="form-group mb-0">
        <div class="form-group">
        <textarea rows="10"    
        onChange={(event) => {
         setMessage(event.target.value);
       }} class="form-control"> </textarea>
        </div>
    </div>
            
    </div>

    <label class="form-label mt-4 fs-15">Agangement Type</label>
    <div class="gutters-xs">
        <select name="alabama" onChange={(event) => {
            setNotificationType(event.target.value);
          }} 
          class="form-control select2-no-search">
            <option label="Choose one"></option>
            <option value="">Permanent</option>
            <option value="Urgent">Urgent</option>
            <option value="Enquiry">Credit</option>
            
            
        </select>
    </div>
    
</div>
<div class="form-footer mt-2">

{!isLoading && <button type="submit"



class="btn btn-primary">Send</button>

} 
{isLoading &&
<button type="submit" class="btn btn-primary btn-md btn-block mt-3 waves-effect" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
}
    
</div>
</div>









</Modal.Body>
<Modal.Footer>

{/* <Button variant="secondary" onClick={handleClose}>
Close
</Button>
<Button variant="primary" onClick={handleClose}>
Save Changes
</Button> */}

</Modal.Footer>
            </Modal>



            <Modal show={displayOrderModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div class="card-body">

                   
                <div class="form-group mb-4">
                <div class=" gutters-xs">
                
                            <p class="mg-b-10">Supplier Name</p>
                
                        
                
                        <div class="form-group mb-0">
                        <div class="form-group">
                            <input type="text" class="form-control" id="postal"
                
                            value={name}
                            
                            onChange={(event) => {
                                setName(event.target.value);
                              }} placeholder="Supplier Name"/>
                        </div>
                    </div>

                    <div class="form-group mb-0">
                    <div class="form-group">
                        <input type="text" class="form-control" id="postal"
            
                        value={supplierId}
                        
                        onChange={(event) => {
                            setSupplierId(event.target.value);
                          }} placeholder="Supplier Id"/>
                    </div>
                </div>
                
                
                
                
                    <div class="form-group mb-0">
                        <div class="form-group">
                        <textarea rows="10"    
                        onChange={(event) => {
                         setorder_description(event.target.value);
                       }} class="form-control"> </textarea>
                        </div>
                    </div>
                            
                    </div>
                
                    <label class="form-label mt-4 fs-15">Order Quantity</label>

                    <a class="shop-title fs-18">In Cart: {quantityOrdered}</a>


                    


                    <div class="gutters-xs">

                    <div class="btn-icon-list">

                               <Button sm="6" onClick={() => decrementCounter()}  className="mx-2">-</Button>

                               <Button sm="6" onClick={() => incrementCounter()}  className="mx-2">+</Button>
                           
												
												
												
											</div>
                       
                    </div>
                    
                </div>
                <div class="form-footer mt-2">
                
                {!isLoading && <button type="submit" onClick={postOrder} 
                
                
                
                class="btn btn-primary">Make Order</button>
                
                } 
                {isLoading &&
                <button type="submit" class="btn btn-primary btn-md btn-block mt-3 waves-effect" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
                }
                    
                </div>
                </div>
                </Modal.Body>
            </Modal>




                    <div class="card">


                    <div class="card-body">
                    <div class="d-flex justify-content-between">
                       
                        <i class="mdi mdi-dots-horizontal text-gray"></i>
                    </div>
                  
                    <div class="table-responsive mb-0">
                        <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap table-striped ">
                            <thead>
                                <tr>
                                <th class="text-center">

                                #

                                </th>
                               
                                <th>Item Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Contacts</th>
                                
                               
                             
                                <th class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {supplierStores.map((value,key)=>{

                                return (
                                <tr>
                                    <td>
                                    {key} 
                                    </td>
                                   
                        <td class="text-nowrap align-middle">{value.product_name}</td>
                        <td class="text-nowrap align-middle">{value.product_description}</td>

                       
                
                       

                        
                     
                       

                        <td class="text-nowrap align-middle">{value.industry}</td>

                        <td class="text-nowrap align-middle">{value.contacts}</td>

                       
                         {/** <td class="text-nowrap align-middle">{value.Business.longitude?value.Business.longitude:'no bizz'}</td> */}
                        

                        

                      

                       

                        <td class="text-center align-middle">
                            <div class="btn-group align-top">

                            <button class="btn btn-sm btn-primary badge" onClick={() => {
                                processOrder(value.id,value.SupplierId,value.product_name);
                                  }}  type="button">Order</button> 
                           
                            <button class="btn btn-sm btn-primary badge" onClick={() => {
                                viewSelectedProduct(value.id);
                                  }} type="button">View More</button>
                            
                                
                            </div>
                        </td>
                                </tr>
                                )




                            })}
                                
                                
                                
                            
                            </tbody>
                        </table>
                    </div>
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
export default SuppliersAvailable