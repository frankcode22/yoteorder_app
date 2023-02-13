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
import InnerMenuHome from './InnerMenuHome';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const getFormattedDate2 = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString();
  }

  const getFormattedDate1 = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  }

function RetailerSalesDetails(){

    const [startDate, setStartDate] = useState(new Date());

    const {businessDetails,setBusinessDetails } = useContext(DataContext);


    // const my_buss_details = useContext(BusinessDetailsContext)

    const [userId, setUserId] = useState('');
  
    const [ordersList, setOrdersList] = useState([]);

    const [sales, setSales] = useState([]);

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

    const [total_sales, settotal_sales] = useState(0);

    const [total_paid, settotal_paid] = useState(0);

    const [total_balances, settotal_balnces] = useState(0);

    

  

    const [order_description, setorder_description] = useState('');

    const [isLoading,setLoading]=useState(false);


    const [isDivLoading, setIsDivLoading] = useState(false);

    const [showOrderConfirmed, setShowOrderConfirmed] = useState(false);

    

    const [errorMessage, setErrorMessage] = useState("");

    const [confirmationMessage, setConfirmationMessage] = useState("");

    const [notifications, setNotifications] = useState([]);

    const [filteredItems, setFilteredItems] = useState([]);


    const [showData, setShowData] = useState(false);


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



    var bills = [
        {
          "refNo": 17,
          "billDate": "1-apr-2016",
          "dueDate": "30-apr-2016",
          "pendingAmount": 58500,
          "overdueDays": 28
        },
        {
          "refNo": 20,
          "billDate": "15-apr-2016",
          "dueDate": "3-may-2016",
          "pendingAmount": 79550,
          "overdueDays": 15
        }
      ];


     // var res = bills.map(bill => bill.pendingAmount).reduce((acc, bill) => bill + acc);
//console.log(res)








    useEffect(()=>{

    setIsDivLoading(true);

     let buss_status=localStorage.getItem('business_set')

     console.log("BUSS STATUS",buss_status)

     setIsBusinessSet(buss_status)





      
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

          //setOrdersList(response.data.Orders)

          setSales(response.data.my_buss.RetailerSales)

          setCustomersCount(response.data.my_buss.Customers.length)

          //setcustomer_contacts(response.data.Customers.)
      
        
      
        }
        else{
      
          setIsBusinessSet(false)
          setbusinessId(0)
          setBussSetup(false);
          setbusiness_name('nobuzz')
          //setOrdersList([])
        }
    
        
          // setSeller_name(response.data.Users);
          setIsDivLoading(false)   // Hide loading screen 
          // toast.info('Product saved successfully');
       }, 1000);


   
       
        }).catch(() => {
           setErrorMessage("Unable to fetch Latest Orders.Check your Internet connection please");
           setIsDivLoading(false);
        });
            


      


         
    
    //getTotalSales()
    
    
    
    
    },[businessDetails]);

    //var res_ = sales.map(bill => bill.total).reduce((acc, bill) => bill + acc);
      //  console.log(res_)

    


    const getTotalSales=()=>{

        var res_ = sales.map(bill => bill.total).reduce((acc, bill) => bill + acc);

        var amnt_paid = sales.map(bill => bill.amount_paid).reduce((acc, bill) => bill + acc);

        var total_bal = sales.map(bill => bill.balance).reduce((acc, bill) => bill + acc);

        settotal_sales(res_)

        settotal_paid(amnt_paid)

        settotal_balnces(total_bal)
        

        

    }

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



    const handleDateChange =  date => {
        setLoading(true);
        setShowData(true)
        setStartDate(date);
        setFilteredItems(
            sales.filter(item => {
            const itemDate = new Date(item.createdAt);

            return getFormattedDate1(itemDate)== getFormattedDate1(date);
          })
        );

        // var res_ = filteredItems.map(bill => bill.total).reduce((acc, bill) => bill + acc);

        // var amnt_paid = filteredItems.map(bill => bill.amount_paid).reduce((acc, bill) => bill + acc);

        // var total_bal = filteredItems.map(bill => bill.balance).reduce((acc, bill) => bill + acc);

        // settotal_sales(res_)

        // settotal_paid(amnt_paid)

        // settotal_balnces(total_bal)

        console.log("THE SELECTED FORMATED DATE IS--->>>"+getFormattedDate1(date))

        setTimeout(() => {
            setLoading(false);
          }, 1500);
      };


    // const handleCustomerSelect= async (event) => {

    //     const selectedOption=event.target.value
      
      
    //     const customer = customersList.find(post => (post.id).toString() === selectedOption);
      
    //     // setUserId(JSON.stringify(customer))
    
    //     console.log('CUSTOMER ID IS',customer.id)
    
       
    
    
    
    //   // console.log('CUSTOMER BILL IS',bill)
    
    
    //    //setCustomerBill(bill)
    
    
      
       
        
    
    //    }


    const loadOrdersContent=(

        <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap table-striped ">
        <thead>
            <tr>
                <th>#</th>
                <th>Order Id</th>
                <th>Total</th>
                <th>Amount Paid</th>
                <th>Balance</th>
                <th>Customer Contacts</th>
                <th>Date</th>
                <th>Actions</th>
               
            </tr>
        </thead>
        <tbody>

        {sales.map((value, key) => {
          return (
            <tr>
            <td>
                    <div class="project-contain">
                        <h6 class="mb-1 tx-13">{key}</h6>
                    </div>
                </td>
                <td>
                    <div class="project-contain">
                        <h6 class="mb-1 tx-13">{value.orderId}</h6>
                    </div>
                </td>
                <td>{value.total}</td>
                <td><span class="badge bg-primary-gradient">{value.amount_paid}</span></td>
               
                <td><span class="badge bg-warning">{value.balance}</span></td>
                <td>{value.customer_phone_no}</td>
                <td>{getFormattedDate1(value.createdAt)}</td>
              
               
                <td class="text-center align-middle">
                <div class="btn-group align-top">


                <button type="button" class="btn btn-success"><i class="fe fe-edit me-2"></i>Edit</button>

            <button type="button" class="btn btn-danger"><i class="fe fe-trash me-2"></i>Cancel</button>
                
                   
                </div>
            </td>
            </tr>
        )
        })}
           
            
            
        
        </tbody>
        <tfoot>

        <h5>Total sales:{sales.length} </h5>

       

       
        
        </tfoot>
        
    </table>


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
                              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                  <div class="card overflow-hidden project-card">
                                      <div class="card-body">
                                          <div class="d-flex">
                                              <div class="my-auto">
                                                  <svg enable-background="new 0 0 469.682 469.682" version="1.1" class="me-4 ht-60 wd-60 my-auto primary" viewBox="0 0 469.68 469.68" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="m120.41 298.32h87.771c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449h-87.771c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449z" />
                                                      <path d="m291.77 319.22h-171.36c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h171.36c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449z" />
                                                      <path d="m291.77 361.01h-171.36c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h171.36c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449z" />
                                                      <path d="m420.29 387.14v-344.82c0-22.987-16.196-42.318-39.183-42.318h-224.65c-22.988 0-44.408 19.331-44.408 42.318v20.376h-18.286c-22.988 0-44.408 17.763-44.408 40.751v345.34c0.68 6.37 4.644 11.919 10.449 14.629 6.009 2.654 13.026 1.416 17.763-3.135l31.869-28.735 38.139 33.959c2.845 2.639 6.569 4.128 10.449 4.18 3.861-0.144 7.554-1.621 10.449-4.18l37.616-33.959 37.616 33.959c5.95 5.322 14.948 5.322 20.898 0l38.139-33.959 31.347 28.735c3.795 4.671 10.374 5.987 15.673 3.135 5.191-2.98 8.232-8.656 7.837-14.629v-74.188l6.269-4.702 31.869 28.735c2.947 2.811 6.901 4.318 10.971 4.18 1.806 0.163 3.62-0.2 5.224-1.045 5.493-2.735 8.793-8.511 8.361-14.629zm-83.591 50.155-24.555-24.033c-5.533-5.656-14.56-5.887-20.376-0.522l-38.139 33.959-37.094-33.959c-6.108-4.89-14.79-4.89-20.898 0l-37.616 33.959-38.139-33.959c-6.589-5.4-16.134-5.178-22.465 0.522l-27.167 24.033v-333.84c0-11.494 12.016-19.853 23.51-19.853h224.65c11.494 0 18.286 8.359 18.286 19.853v333.84zm62.693-61.649-26.122-24.033c-4.18-4.18-5.224-5.224-15.673-3.657v-244.51c1.157-21.321-15.19-39.542-36.51-40.699-0.89-0.048-1.782-0.066-2.673-0.052h-185.47v-20.376c0-11.494 12.016-21.42 23.51-21.42h224.65c11.494 0 18.286 9.927 18.286 21.42v333.32z" />
                                                      <path d="m232.21 104.49h-57.47c-11.542 0-20.898 9.356-20.898 20.898v104.49c0 11.542 9.356 20.898 20.898 20.898h57.469c11.542 0 20.898-9.356 20.898-20.898v-104.49c1e-3 -11.542-9.356-20.898-20.897-20.898zm0 123.3h-57.47v-13.584h57.469v13.584zm0-34.482h-57.47v-67.918h57.469v67.918z" />
                                                  </svg>
                                              </div>
                                              <div class="project-content">
                                                  <h6>Sales</h6>
                                                  <ul>
                                                      <li>
                                                          <strong>Paid</strong>
                                                          <span>5</span>
                                                      </li>

                                                      <li>
                                                          <strong>Unpaid</strong>
                                                          <span>56</span>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                             
                            
                              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
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
                                                          <span>Ksh 0</span>
                                                      </li>
                                                      <li>
                                                          <strong>Expensive</strong>
                                                          <span>Ksh 0</span>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                         


                          <div class="row row-sm ">
                              <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                              <div class="card">
    <div class="card-body p-2">
    <div class="row">
    <div class="col-xl-5 col-lg-8 col-md-8 col-sm-8">
        <div class="input-group d-flex w-100 float-start">

        
        <DatePicker
       className='form-control'
      selected={startDate}
      onChange={handleDateChange}
    />


            <button class="btn input-group-text bg-transparent border-start-0 text-muted my-2">
                <i class="fe fe-search text-muted" aria-hidden="true"></i>
            </button>
        </div>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
        {/* <ul class="nav item2-gl-menu float-end my-2">
            <li class="border-end"><a href="#tab-11" class="show active" data-bs-toggle="tab" title="List style"><i class="fa fa-th"></i></a></li>
            <li><a href="#tab-12" data-bs-toggle="tab" class="" title="Grid"><i class="fa fa-list"></i></a></li>
        </ul> */}
    </div>
    <div class="col-xl-3 col-lg-12">
   
       
        <button type="button" onClick={getTotalSales} class="btn btn-primary"><i class="fe fe-eye me-2"></i>View Analysis</button>
    </div>
</div>
    </div>
</div>

                                  <div class="card overflow-hidden">

                                      <div class="card-header bg-transparent pd-b-0 pd-t-20 bd-b-0">
                                          <div class="d-flex justify-content-between">
                                              <h4 class="card-title mg-b-10">Sales Made Today</h4>
                                              <i class="mdi mdi-dots-horizontal text-gray"></i>
                                          </div>

                                         
                                         
                                      </div>

                                     {!showData && 
                                      <div class="card-body pd-y-7">

                                      <div class="table-responsive mb-0">
                                   




                                      {isDivLoading ? <DivLoader/>: loadOrdersContent}

                                      {errorMessage && 
            
            
            
            
                                          <div class="col-sm-12 border">
                                          <h3 class="card-title">{errorMessage}</h3>
                                      
                                          
                                          
                                          
                                     </div>}











                                  </div>
                                      </div>
                                     
                                     } 
    

                                     

                                      {isLoading && showData ? (
        <div className="spinner-container">
          <p>Loading...</p>
        </div>
      ) : (
                           
                                      <div class="card-body pd-y-7">
        <div class="table-responsive mb-0">
        <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap table-striped ">
            <thead>
                <tr>
                <th>#</th>
                <th>Order Id</th>
                <th>Total</th>
                <th>Amount Paid</th>
                <th>Balance</th>
                <th>Cust Contacts</th>
                <th>Date</th>
                <th></th>
                </tr>
            </thead>
            <tbody>

            {filteredItems.map((value, key) => {
              return (
                <tr>
                    <td>
                        <div class="project-contain">
                            <h6 class="mb-1 tx-13">{value.id}</h6>
                        </div>
                    </td>
                    <td>{value.orderId}</td>
                    <td>{value.total}</td>
                    <td>{value.amount_paid}</td>
                    <td><span class="badge bg-primary-gradient">{value.balance}</span></td>
                    <td>{value.customer_phone_no}</td>
                    <td>{getFormattedDate1(value.createdAt)}</td>
                    <td>Cash</td>
                </tr>
            )
            })}
               
                
                
            
            </tbody>
        </table>
    </div>
        </div>

)}
        


                                  </div>
                              </div>
                              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                  <div class="card overflow-hidden">
                                      <div class="card-body pb-3">
                                          <div class="d-flex justify-content-between">
                                              <h4 class="card-title mg-b-10">Sales Made Over The week</h4>
                                              <i class="mdi mdi-dots-horizontal text-gray"></i>
                                          </div>
                                        
                                          <div class="table-responsive mb-0 projects-stat tx-14">
                                              <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap  ">
                                                  <thead>
                                                      <tr>
                                                          <th>Sales &amp; Analysis</th>
                                                          <th>Status</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <td>
                                                              <div class="project-names">
                                                                  <h6 class="bg-primary-transparent text-primary d-inline-block me-2 text-center">U</h6>
                                                                  <p class="d-inline-block font-weight-semibold mb-0">Total Sales</p>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <div class="badge bg-success">{total_sales}</div>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td>
                                                              <div class="project-names">
                                                                  <h6 class="bg-pink-transparent text-pink d-inline-block text-center me-2">R</h6>
                                                                  <p class="d-inline-block font-weight-semibold mb-0">Unpaid Amount</p>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <div class="badge bg-warning">{total_balances}</div>
                                                          </td>
                                                      </tr>
                                                     
                                                      <tr>
                                                          <td>
                                                              <div class="project-names">
                                                                  <h6 class="bg-purple-transparent text-purple d-inline-block me-2 text-center">P</h6>
                                                                  <p class="d-inline-block font-weight-semibold mb-0">Total Paid</p>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <div class="badge bg-teal">{total_paid}</div>
                                                          </td>
                                                      </tr>

                                                      <tr>
                                                      <td>
                                                          <div class="project-names">
                                                              <h6 class="bg-success-transparent text-success d-inline-block me-2 text-center">W</h6>
                                                              <p class="d-inline-block font-weight-semibold mb-0">Canceled Sales</p>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="badge bg-danger">0</div>
                                                      </td>
                                                  </tr>
                                                      
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      

                    
                    
                    
                    </div>



                  </div>
  )
}

export default RetailerSalesDetails