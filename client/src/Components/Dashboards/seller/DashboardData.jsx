import React from 'react'

import {useEffect,useState,useContext} from 'react';

import {useParams} from "react-router-dom"


//import axios from 'axios';

import API from '../../../services';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useNavigate,Link} from "react-router-dom";

import { Helmet } from "react-helmet";


import { Modal, Button } from "react-bootstrap";

import ContentLoader from '../../../utils/ContentLoader';

import DivLoader from '../../../utils/DivLoader';

import { BusinessDetailsContext } from '../../../helpers/BusinessDetailsContext';
import DataContext from '../../../helpers/DataContext';
import InnerMenuAccountSetting from './InnerMenuAccountSetting';
import InnerMenuHome from './InnerMenuHome';

function DashboardData() {
    const {businessDetails,setBusinessDetails } = useContext(DataContext);


    // const my_buss_details = useContext(BusinessDetailsContext)

    const [userId, setUserId] = useState('');
  
    const [ordersList, setOrdersList] = useState([]);

    const [businessId, setbusinessId] = useState('');

    const [business_name, setbusiness_name] = useState("");
    const [business_type, setbusiness_type] = useState("");

    const [actualId, setactualId] = useState('');


    
    const [item_name, setitem_name] = useState('');

    const [orderId, setorderId] = useState('');


    const [quantity_ordered, setquantity_ordered] = useState('');
    
    const [servicesList, setServicesList] = useState([]);

    const [staffList, setStaffList] = useState([]);

    const [bussSetup,setBussSetup]=useState(false);

    const [isBusinessSet,setIsBusinessSet] = useState(false);

    const [randomNo, setRandomNo] = useState(0);

    const [customersCount, setCustomersCount] = useState(0);


    const [customer_contacts, setcustomer_contacts] = useState('');

    

  

    const [order_description, setorder_description] = useState('');

    const [isLoading,setLoading]=useState(false);


    const [isDivLoading, setIsDivLoading] = useState(false);

    const [showOrderConfirmed, setShowOrderConfirmed] = useState(false);

    const [currentOrdersList, setCurrentOrdersList] = useState([]);

    

    const [errorMessage, setErrorMessage] = useState("");

    const [confirmationMessage, setConfirmationMessage] = useState("");

    const [notifications, setNotifications] = useState([]);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () =>{

      setLoading(true)

      setShow(true);
    
      setTimeout(() => {

      setLoading(false)
      setShow(false)

     
      
  }, 2000);


    }




    useEffect(()=>{

     let buss_status=localStorage.getItem('business_set')

     console.log("BUSS STATUS",buss_status)

     setIsBusinessSet(buss_status)





        setIsDivLoading(true);
       // setIsBusinessSet(buss_status)

       
         //API.get('users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
         API.get('users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
            setUserId(response.data.id)
      
      
           })
    
        //    //API.get("customer/mycustomers").then((response) => {
        //   API.get("order/getallorders").then((response) => {
        //   setOrdersList(response.data);
        //   })


        //   API.get("order/myorders",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
        //     setOrdersList(response.data);
        //     })



            // API.get("order/getallorders").then((response) => {
            //     setOrdersList(response.data);
            //     })

            console.log("YOUR VENDOR BUSINESS DETAILS  IS ",businessDetails);




            {/**  if(businessDetails.my_buss!=null){

                // setIsBusinessSet(true)
          
                setbusinessId(businessDetails.my_buss.id);
      
                //setServicesList(response.data.Services);
      
                setStaffList(businessDetails.my_buss.Staffs);
      
                setbusiness_name(businessDetails.my_buss.business_name);

                console.log("YOUR  BUSINESS NAME  IS ",businessDetails.my_buss.business_name);
      
                setBussSetup(true);

                setNotifications(businessDetails.my_buss.Notifications)
                
      
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
              }*/}

            



           
              API.get('users/mybizz', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
                setTimeout(() => {
   
                if(response.data.my_buss!=null){

      setIsBusinessSet(true)

      setbusinessId(response.data.my_buss.id);

      //setServicesList(response.data.Services);

      setStaffList(response.data.my_buss.Staffs);

      setbusiness_name(response.data.my_buss.business_name);

      setBussSetup(true);

      setOrdersList(response.data.my_buss.Orders)

      //setSales(response.data.my_buss.RetailerSales)

      setCustomersCount(response.data.my_buss.Customers.length)

      //setcustomer_contacts(response.data.Customers.)
  
    
  
    }
    else{
  
      setIsBusinessSet(false)
      setbusinessId(0)
      setBussSetup(false);
      setbusiness_name('nobuzz')
      setOrdersList([])
    }

    
      // setSeller_name(response.data.Users);
      setIsDivLoading(false)   // Hide loading screen 
      // toast.info('Product saved successfully');
   }, 1000);



   
    }).catch(() => {
       setErrorMessage("Unable to fetch Latest Orders.Check your Internet connection please");
       setIsDivLoading(false);
    });


    API.get('retailer/currentorders', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
        if(response.data!=null){


            setCurrentOrdersList(response.data.OrdersFromRetailors)

       

           // setbussId(response.data.my_buss.id);

         

        
      
        }
        else{
      
            setCurrentOrdersList([])
        }
    
        
         })
             

          
    


        


         
    
    
    
    
    
    
    },[businessDetails]);



    const openSelectedOrder=(oId,orderId,customer_contacts)=>{

        
     
             console.log("THE ORDER NAME IS "+oId)
     
             setactualId(oId)
     
             setorderId(orderId)
     
             setcustomer_contacts(customer_contacts)

             
             console.log("THE CUSTOMER NO IS "+customer_contacts)
     
           
                 
     
              
     
     
     
         }



         const custDetailsOrder=(userId)=>{


            API.get('customer/getById/'+userId).then((response) => {
     
                //console.log("THE PRODUCT NAME IS "+response.data.name)
        
              
                setcustomer_contacts(response.data.phone_no)
        
              
        
                    })
        



           
            }



            const confirmOrder=(oId)=>{

                setLoading(true);
        
                const order_details={
                    order_status:'confirmed',
                    confirmationMessage:confirmationMessage,
                  
                  }
        
              
        
        
                API.put('order/updatestatus/'+oId,order_details).then((res_b)=>{
            
                   // console.log("THE ACTUAL ID IS "+actualId)
                    
                    setorderId(res_b.data.id)
                    
                   
                    setTimeout(() => {
                        setLoading(false);
                        setShowOrderConfirmed(true)
                        setShow(false)
                        //handleShow()
                       // toast.warning("Cancel Cancelled")
                    }, 1000);
                    
                    })
            }
        


    const completeOrder=(oId)=>{

        setLoading(true);

        const order_details={
            order_status:'completed',
          
          }

      


        API.put('order/updatestatus/'+oId,order_details).then((res_b)=>{
    
           // console.log("THE ACTUAL ID IS "+actualId)
            
            setorderId(res_b.data.id)
            
           
            setTimeout(() => {
                setLoading(false);
                handleShow()
               // toast.warning("Cancel Cancelled")
            }, 1000);
            
            })
    }


    const cancelOrder=(oId)=>{

        setLoading(true);

        const order_details={
            order_status:'cancelled',
          
          }

      


        API.put('order/updatestatus/'+oId,order_details).then((res_b)=>{
    
           // console.log("THE ACTUAL ID IS "+actualId)
            
            setorderId(res_b.data.id)
            
           
            setTimeout(() => {
                setLoading(false);
                // handleShow()
                toast.warning("Order Cancelled")
            }, 1000);
            
            })


        
    }


    const loadOrdersContent=(

        <div class="row row-sm ">


        <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12">


        <div class="card overflow-hidden">
        <div class="card-header bg-transparent pd-b-0 pd-t-20 bd-b-0">
            <div class="d-flex justify-content-between">
                <h4 class="card-title mg-b-10">Sales Made Today</h4>
                <i class="mdi mdi-dots-horizontal text-gray"></i>
            </div>
           
        </div>
        <div class="card-body pd-y-7">
        <div class="table-responsive mb-0">
        <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap table-striped ">
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Order Time</th>
                    <th>Cost</th>
                    <th>Payment Method</th>
                </tr>
            </thead>
            <tbody>

            {ordersList.map((value, key) => {
              return (
                <tr>
                    <td>
                        <div class="project-contain">
                            <h6 class="mb-1 tx-13">{value.id}</h6>
                        </div>
                    </td>
                    <td>{value.item_name}</td>
                    <td>{value.quantity_ordered}</td>
                    <td>{value.createdAt}</td>
                    <td><span class="badge bg-primary-gradient">250</span></td>
                    <td>Cash</td>
                </tr>
            )
            })}
               
                
                
            
            </tbody>
        </table>
    </div>
        </div>
    </div>


        </div>

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4">
        <div class="card overflow-hidden">
            <div class="card-body pb-3">
                <div class="d-flex justify-content-between">
                    <h4 class="card-title mg-b-10">Your current orders</h4>
                    <i class="mdi mdi-dots-horizontal text-gray"></i>
                </div>
              
                <div class="table-responsive mb-0 projects-stat tx-14">
                    <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap  ">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Items</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                        {currentOrdersList.map((value, key) => {
              return (
                            <tr>
                                <td>
                                    <div class="project-names">
                                        <h6 class="bg-primary-transparent text-primary d-inline-block me-2">{value.orderId}</h6>
                                        <p class="d-inline-block font-weight-semibold mb-0">{value.item_name}</p>
                                    </div>
                                </td>
                                <td>
                                    <a class="badge bg-warning" href='#'>{value.quantity_ordered}</a>
                                </td>
                                <td>
                                    <a class="badge bg-info" href='#'>{value.order_status}</a>
                                </td>
                            </tr>
              )

              }
              )

              }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>



    )



  return (
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
                                            <span class="label ">TOTAL SALES</span>
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


                    <div class="row row-sm">


                        <InnerMenuHome></InnerMenuHome>



                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div class="card  overflow-hidden project-card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div class="my-auto">


                                    <img src="assets/img/icons/order-history.png"   class="me-4 ht-60 wd-60 my-auto warning"/>
                                       
                                    </div>
                                    <div class="project-content">
                                        <h6>Orders</h6>
                                        <ul>
                                            <li>
                                                <strong>Cash</strong>
                                                <span>0</span>
                                            </li>

                                            <li>
                                                <strong>Mpesa</strong>
                                                <span>0</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    
                    
                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div class="card  overflow-hidden project-card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div class="my-auto">

                                    <img src="assets/img/icons/sales.png"   class="me-4 ht-60 wd-60 my-auto info"/>

                                    
                                        
                                    </div>
                                    <div class="project-content">
                                        <h6>Sales</h6>
                                        <ul>
                                            <li>
                                                <strong>Cash</strong>
                                                <span>0</span>
                                            </li>

                                            <li>
                                                <strong>Mpesa</strong>
                                                <span>0</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div class="card overflow-hidden project-card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div class="my-auto">
                                        <svg enable-background="new 0 0 512 512" class="me-4 ht-60 wd-60 my-auto warning" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m259.2 317.72h-6.398c-8.174 0-14.824-6.65-14.824-14.824 1e-3 -8.172 6.65-14.822 14.824-14.822h6.398c8.174 0 14.825 6.65 14.825 14.824h29.776c0-20.548-13.972-37.885-32.911-43.035v-33.74h-29.777v33.739c-18.94 5.15-32.911 22.487-32.911 43.036 0 24.593 20.007 44.601 44.601 44.601h6.398c8.174 0 14.825 6.65 14.825 14.824s-6.65 14.824-14.825 14.824h-6.398c-8.174 0-14.824-6.65-14.824-14.824h-29.777c0 20.548 13.972 37.885 32.911 43.036v33.739h29.777v-33.74c18.94-5.15 32.911-22.487 32.911-43.035 0-24.594-20.008-44.603-44.601-44.603z" />
                                            <path d="m502.7 432.52c-7.232-60.067-26.092-111.6-57.66-157.56-27.316-39.764-65.182-76.476-115.59-112.06v-46.29l37.89-98.425-21.667-0.017c-6.068-4e-3 -8.259-1.601-13.059-5.101-6.255-4.559-14.821-10.802-30.576-10.814h-0.046c-15.726 0-24.292 6.222-30.546 10.767-4.799 3.487-6.994 5.081-13.041 5.081h-0.027c-6.07-5e-3 -8.261-1.602-13.063-5.101-6.255-4.559-14.821-10.801-30.577-10.814h-0.047c-15.725 0-24.293 6.222-30.548 10.766-4.8 3.487-6.995 5.081-13.044 5.081h-0.027l-21.484-0.017 36.932 98.721v46.117c-51.158 36.047-89.636 72.709-117.47 111.92-33.021 46.517-52.561 98.116-59.74 157.74l-9.304 77.285h512l-9.304-77.284zm-301.06-395.47c4.8-3.487 6.995-5.081 13.045-5.081h0.026c6.07 4e-3 8.261 1.602 13.062 5.101 6.255 4.559 14.821 10.802 30.578 10.814h0.047c15.725 0 24.292-6.222 30.546-10.767 4.799-3.487 6.993-5.081 13.041-5.081h0.026c6.068 5e-3 8.259 1.602 13.059 5.101 2.869 2.09 6.223 4.536 10.535 6.572l-21.349 55.455h-92.526l-20.762-55.5c4.376-2.041 7.773-4.508 10.672-6.614zm98.029 91.89v26.799h-83.375v-26.799h83.375zm-266.09 351.08 5.292-43.947c6.571-54.574 24.383-101.7 54.458-144.07 26.645-37.537 62.54-71.458 112.73-106.5h103.78c101.84 71.198 150.75 146.35 163.29 250.56l5.291 43.948h-444.85z" />
                                        </svg>
                                    </div>
                                    <div class="project-content">
                                        <h6>Revenue</h6>
                                        <ul>
                                            <li>
                                                <strong>Earnings</strong>
                                                <span>Ksh.0</span>
                                            </li>
                                            <li>
                                                <strong>Expenses</strong>
                                                <span>Ksh.0</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                        


                          {isDivLoading ? <DivLoader/>: loadOrdersContent}

                          {errorMessage && 




                              <div class="col-sm-12 border">
                              <h3 class="card-title">{errorMessage}</h3>
                          
                              
                              
                              
                         </div>}






                              
                             
                          

                      

                    
                    
                    
                    </div>



                  </div>
  )
}


export default DashboardData