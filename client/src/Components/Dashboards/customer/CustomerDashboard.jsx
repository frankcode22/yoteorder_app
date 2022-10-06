import React from 'react'
import {useEffect,useState,useContext} from 'react';



//import axios from 'axios';

import API from '../../../services';



import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useNavigate,Link,useParams} from "react-router-dom";

import { AuthContext } from "../../../helpers/AuthContext";

import SidebarC from './SidebarC'
import TopbarC from './TopbarC'

import { Modal, Button } from "react-bootstrap";


import ContentLoader from '../../../utils/ContentLoader';
import OrderDetailsContext from '../../../helpers/OrderDetailsContext';

function CustomerDashboard() {


    const {authState} = useContext(AuthContext);

    const {customerOrders,setCustomerOrders} = useContext(OrderDetailsContext);

    const [userId, setUserId] = useState('');

    const [actualId, setactualId] = useState('');
  
    const [ordersList, setOrdersList] = useState([]);

    const [item_name, setitem_name] = useState('');

    const [orderId, setorderId] = useState('');


    const [quantity_ordered, setquantity_ordered] = useState('');

    const [businessId, setbusinessId] = useState('');

    const [business_name, setbusiness_name] = useState('');

    const [email, setEmail] = useState("");
    const [phone_no, setPhone_no] = useState("");


    const [customerPhoneNo, setCustomerPhoneNo] = useState("");

    const [sellerTillNo, setsellerTillNo] = useState("174379");

    const [amount, setAmount] = useState("");

    const [randomNo, setRandomNo] = useState(0);


    const [accessToken, setAccessToken] = useState("");


    let history = useNavigate();
    

  

    const [order_description, setorder_description] = useState('');

    const [isLoading,setLoading]=useState(false);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [isDivLoading, setIsDivLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const orderDetails = localStorage.getItem("order_details")

    const handleShow = () =>{

      setLoading(true)

      setShow(true);
    
      setTimeout(() => {

      setLoading(false)
      setShow(false)

     
      
  }, 2000);


    }



    useEffect(()=>{

       
         //API.get('users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
         API.get('users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
            setUserId(response.data.id)

           setCustomerPhoneNo(response.data.phone_no)
      
      
           })
    
        //    //API.get("customer/mycustomers").then((response) => {
        //   API.get("order/getallorders").then((response) => {
        //   setOrdersList(response.data);
        //   })
        setIsDivLoading(true);

        try {

           // orderDetails=JSON.stringify(orderDetails)
           // console.log("LOCAL STORANGE CONVERTED TO JSON",orderDetails)

        if(customerOrders!=null){


            setTimeout(() => {

              setOrdersList(customerOrders)
               setIsDivLoading(false)  
                
             
            }, 1000);

           


        }
        else{

            setOrdersList([]);

            setErrorMessage("Unable to fetch your orders list");
            setIsDivLoading(false);
        }


    } catch (err) {
        console.log(`Error: ${err.message}`);
        setErrorMessage("Unable to fetch your Orders list.Kindly check your internet connection!!");
        setIsDivLoading(false);
    }



        {/** API.get("order/myorders",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
            
          if(response.data!=null){
            setOrdersList(response.data);
            console.log("THE PRODUCT NAME IS "+response.data)

          }
          else{
            setOrdersList([]);

            console.log("Pleas login ")

           // history('/sigin')

          }


          
      setTimeout(() => {
       
       // setSeller_name(response.data.Users);
        setIsDivLoading(false)   // Hide loading screen 
       // toast.info('Product saved successfully');
    }, 4000);
          
           
            }).catch(() => {
                setErrorMessage("Unable to fetch your Orders list.Kindly check your internet connection!!");
                setIsDivLoading(false);
             });
 */}

         


           
    
    
             console.log("LOCAL STORANGE ORDER DETAILS",orderDetails)
         
    
    
    
    },[customerOrders]);



    const genAccessToken=()=>{


        API.get('mpesa/get_token').then((response) => {

            if (response.data.error) {

                toast.warn("MPESA ERROR!! Check internet connection and try again "+JSON.stringify(response.data.error))
               // toast.warn("Error Details",response.data)
                // alert(" ",);
                setLoading(false)
                
              } 
              else{
                setAccessToken(response.data)
                console.log('The ACCESS TOKEN IS '+response.data)

              }
    
             
      
      
           })

    }

    const openSelectedOrder=(oId)=>{

   //API.get("customer/mycustomers").then((response) => {
    API.get('order/orderById/'+oId).then((response) => {

        console.log("THE PRODUCT NAME IS "+response.data.name)

        setactualId(oId)

        setorderId(response.data.orderId)

        setitem_name(response.data.item_name)

        setquantity_ordered(response.data.quantity_ordered)

        setorder_description(response.data.order_description)
            

            })



    }



    const openOrderToPay=(oId,price)=>{

        //API.get("customer/mycustomers").then((response) => {
         API.get('order/orderById/'+oId).then((response) => {

            genAccessToken()
     
             console.log("THE PRODUCT NAME IS "+response.data.name)

             console.log("THE PRODUCT PRICE IS "+price)

             setAmount(price*response.data.quantity_ordered)
     
             setactualId(oId)
     
             setorderId(response.data.orderId)
     
             setitem_name(response.data.item_name)
     
             setquantity_ordered(response.data.quantity_ordered)
     
             setorder_description(response.data.order_description)

           

          
                 
     
                 })
     
     
     
         }


    const editOrder=()=>{


        const order_details={
            oId:actualId,
            orderId:orderId,
            item_name:item_name,
            quantity_ordered:quantity_ordered,
            customer_phone_no:phone_no,
            order_description:order_description,
          
          }
    API.put('order/updateorder/'+actualId,order_details).then((res_b)=>{
    
    console.log("THE ACTUAL ID IS "+actualId)
    
    setorderId(res_b.data.id)
    
    
    
    console.log("THE  ORDER ID IS "+res_b.data.id)
    
    console.log("THE  ORDER ID TWO IS "+randomNo)


    setTimeout(() => {
        setLoading(false);
        toast.success("Order Updated")
    }, 3000);
    
    })
    }

    const cancelOrder=()=>{

        const order_details={
            oId:actualId,
            order_status:'cancelled',
          
          }

      


        API.put('order/updatestatus/'+actualId,order_details).then((res_b)=>{
    
            console.log("THE ACTUAL ID IS "+actualId)
            
            setorderId(res_b.data.id)
            
            
            console.log("THE  ORDER ID IS "+res_b.data.id)
            
            console.log("THE  ORDER ID TWO IS "+randomNo)

            setTimeout(() => {
                setLoading(false);
                toast.warning("Order Cancelled")
            }, 3000);
            
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


    const cancelOrderC=(oId)=>{

        setLoading(true);

        const order_details={
            order_status:'cancelled',
          
          }

      


        API.put('order/updatestatus/'+oId,order_details).then((res_b)=>{
    
           // console.log("THE ACTUAL ID IS "+actualId)
            
            setorderId(res_b.data.id)
            
           
            setTimeout(() => {
                setLoading(false);
                handleShow()
               // toast.warning("Order Cancelled")
            }, 1000);
            
            })


        
    }


    const payOrder=()=>{

        setLoading(true);

        const order_details={
            "short_code":"174379",
            "buyer":"254714639773",    
          }

      


        API.post('mpesa/pay',order_details).then((response)=>{
    
            console.log("THE MPESA RESPONSE IS"+response.data)

            console.log("CUSTOMER NO IS"+customerPhoneNo)

            console.log("TILL NO IS "+sellerTillNo)
            
           // setorderId(res_b.data.id)
            
           
            setTimeout(() => {
                setLoading(false);
                handleShow()
               // toast.warning("Order Cancelled")
            }, 1000);
            
            })


        
    }



    const payOrderTest=()=>{

        setLoading(true);

      

        // console.log("AMOUNT IS "+amount)

        let formated_contact='254'+customerPhoneNo.substring(1);

        const order_details={
            "short_code":sellerTillNo,
            "buyer":formated_contact, 
            "amount":amount,
            "accesstoken":accessToken,

          }

      


        API.post('mpesa/pay',order_details).then((response)=>{

            if (response.data.error) {
                //alert(JSON.stringify(response.data.error));

                // toast.error("Error in MPesa server.You must have internet connection")
                toast.warn("STK PUSH ERROR! PLEASE TRY AGAIN",JSON.stringify(response.data.error))


                console.log("MPESA API ERROR"+JSON.stringify(response.data.error))
                setLoading(false);
               
              }
              else{

                console.log("THE MPESA RESPONSE IS"+response.data)

                console.log("CUSTOMER NO IS"+formated_contact)
    
                console.log("TILL NO IS "+sellerTillNo)
                
               // setorderId(res_b.data.id)
                
               
                setTimeout(() => {
                    setLoading(false);
                    //handleShow()
                    toast.success("Payment Done Successful")
                }, 4000);
                

              }
    
          
            })


        
    }


    const loadCutomerOrderContent=(

        <div class="row">



        {ordersList.map((value, key) => {
            return (
            <div class="col-md-6 col-xl-4 col-sm-6">
                <div class="card">
                    <div class="product-grid6">
                        <div class="product-image6 p-5">
                            <ul class="icons">
                                <li>
                                    <a onClick={() => {
                                        openSelectedOrder(value.id);
                                          }} class="btn btn-primary" data-bs-toggle="modal" href="#modaldemo8"> <i class="fe fe-eye">  </i> </a>
                                </li>
                                <li>
                                
                                <a onClick={() => {
                                    openSelectedOrder(value.id);
                                      }}
                                
                            
                                      data-bs-effect="effect-slide-in-bottom" data-bs-toggle="modal" href="#modaldemo8" class="btn btn-success"><i  class="fe fe-edit"></i></a></li>
                                <li><a href="#" onClick={() => {
                                    cancelOrderC(value.id);
                                      }} class="btn btn-danger"><i class="fe fe-x"></i></a></li>
                            </ul>
                            <a href="#" >
                            {/**<img class="img-fluid br-7 w-100" src="assets/images/pngs/9.jpg" alt="img"/> */}
                                <img class="img-fluid br-7 w-100" src={value.Product.cloudinary_url} alt="img"/>
                            </a>
                        </div>
                        <div class="card-body pt-0">
                            <div class="product-content text-center">
                                <h1 class="title fw-bold fs-20"><a href="#">{value.item_name}</a></h1>
                                <span class="tag tag-radius tag-round tag-primary">Ksh.{value.Product.price}</span>
                               
                                <span class="tag tag-radius tag-round tag-orange">Items Ordered {value.quantity_ordered}</span>
            
                                
                                <span class="tag tag-rounded tag-icon tag-green"><i class="fe fe-calendar"></i>Order Id:{value.orderId}<a href="javascript:void(0)" class="tag-addon tag-addon-cross tag-green"><i class="fe fe-x text-white m-1"></i></a></span>
                                
                               
                            </div>

                            <div>

                                    <div class="d-flex align-items-center mb-3 mt-3">
                                        <div class="me-4 text-center text-primary">

                                            <span><i class="fe fe-phone fs-20"></i></span>
                                        </div>
                                        <div>
                                      
                                            <strong>  <a href={`tel:${value.Business.contacts}`}>{value.Business.contacts} </a></strong>

                                       
                                        </div>
                                    </div>

                            </div>

                            <ul class="list-group border br-7">
                            
                    
                           
                    
                     <li class="list-group-item border-0">
                        Sub Total
                        <span class="h6 fw-bold mb-0 float-end">{value.Product.price}</span>
                    </li>
                    <li class="list-group-item border-0">
                        Discount
                        <span class="h6 fw-bold mb-0 float-end">5%</span>
                    </li>
                    <li class="list-group-item border-0">
                        Shipping
                        <span class="h6 fw-bold mb-0 float-end">Free</span>
                    </li>
                    <li class="list-group-item border-0">
                        Total
                        <span class="h4 fw-bold mb-0 float-end">Ksh.{value.Product.price*value.quantity_ordered}</span>
                       
                      
                    </li>
                </ul>
                        </div>
                        <div class="card-footer text-center">

                        <p>
                       

                        <button  type="submit" class="btn btn-primary mb-1"
                        
                        
                        onClick={() => {
                            openSelectedOrder(value.id);
                              }}
                        
                    
                              data-bs-effect="effect-slide-in-bottom" data-bs-toggle="modal" href="#modaldemo8">Edit</button>


                             

                      

                        <button type="submit" class="btn btn-success mb-1"
                        
                        
                        onClick={() => {

                            openOrderToPay(value.id,value.Product.price);
                    
                         }}


                         
                        
                         data-bs-effect="effect-slide-in-bottom" data-bs-toggle="modal" href="#modaldemo90">Pay Now</button>

                         {!isLoading && <button type="submit" onClick={() => {
                            cancelOrderC(value.id);
                              }} class="btn btn-danger btn btn-danger mb-1"><i class="fe fe-x text-white"></i>Cancel Order</button>

                    } 

                        
                        {isLoading &&
                            <button type="submit" class="btn btn-danger btn-block mt-2" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Processing...</button>
                        }
                             



                          {/*  {!isLoading && <button type="submit" onClick={() => {
                                openSelectedOrder(value.id);
                                  }}
                            class="btn btn btn-success mb-1"  data-bs-effect="effect-slide-in-bottom" data-bs-toggle="modal" href="#modaldemo8"><i class="fe fe-tick text-white"></i>Pay</button>
                            
  
                        } */}



                             

                        {/* <button type="submit" class="btn btn-success-light d-grid mb-3"
                        
                        
                        onClick={() => {

                            payOrder(value.id);
                    
                         }}



                        
                        data-bs-effect="effect-fall">Pay Test</button>*/}
                        




                      
                    </p>
                           
                        </div>
                    </div>
                </div>

              
            </div>

            )
        })}





        <Modal class="modal fade" show={show}>

        <Modal.Header>
          <Modal.Title>Cancel Order</Modal.Title>
        </Modal.Header>
        <Modal.Body class="modal-body text-center p-4 pb-5">
        
        
        
        
        <i class="icon icon-close fs-70 text-danger lh-1 my-4 d-inline-block"></i>
        <h4 class="text-danger mb-20">Order Cancelled</h4>
        
        
        
          
        
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



        
    

        




              

           

        </div>

    )

  return (
    <div>

    <div class="app sidebar-mini ltr light-mode">


  




<div class="page">
<div class="page-main">

<TopbarC></TopbarC>












<SidebarC></SidebarC>









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



                    <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Logged In As  <span class="tag tag-rounded tag-icon tag-green"><i class="fe fe-user"></i>{authState.first_name}<a href="javascript:void(0)" class="tag-addon tag-addon-cross tag-green"><i class="fe fe-x text-white m-1"></i></a></span></h3>
                            </div>



                            {isDivLoading ? <ContentLoader/>: loadCutomerOrderContent}

                            {errorMessage && 




                                <div class="col-sm-12 border">
                                <h3 class="card-title">{errorMessage}</h3>
                            
                                
                                
                                
                           </div>}




                           
                        </div>
                    </div>
                  
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                        <div class="card overflow-hidden">
                            <div class="card-body pb-0 bg-recentorder">
                                <h3 class="card-title text-white">Recent Orders</h3>
                                <div class="chartjs-wrapper-demo">
                                    <canvas id="recentorders" class="chart-dropshadow"></canvas>
                                </div>
                            </div>
                            <div id="flotback-chart" class="flot-background"></div>
                            <div class="card-body">
                                <div class="d-flex mb-4 mt-3">
                                    <div
                                        class="avatar avatar-md bg-secondary-transparent text-secondary bradius me-3">
                                        <i class="fe fe-check"></i>
                                    </div>
                                    <div class="">
                                        <h6 class="mb-1 fw-semibold">Delivered Orders</h6>
                                        <p class="fw-normal fs-12"> <span class="text-success">3.5%</span>
                                            increased </p>
                                    </div>
                                    <div class=" ms-auto my-auto">
                                        <p class="fw-bold fs-20"> 1,768 </p>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div class="avatar  avatar-md bg-pink-transparent text-pink bradius me-3">
                                        <i class="fe fe-x"></i>
                                    </div>
                                    <div class="">
                                        <h6 class="mb-1 fw-semibold">Cancelled Orders</h6>
                                        <p class="fw-normal fs-12"> <span class="text-success">1.2%</span>
                                            increased </p>
                                    </div>
                                    <div class=" ms-auto my-auto">
                                        <p class="fw-bold fs-20 mb-0"> 3,675 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    
                    <div class="modal fade" id="modaldemo90">
                    <div class="modal-dialog modal-dialog-centered text-center" role="document">
                        <div class="modal-content modal-content-demo">
                            <div class="modal-header">
                                <h6 class="modal-title">Pay Your Order</h6><button aria-label="Close" class="btn-close" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                            </div>
                            <div class="modal-body">
                            <img class="img-fluid" src="assets/images/brand/mpesa.png" alt="img"/>
                            <h6>{orderId}</h6>
                           
                            <div class="form-row">
            
            
            
                            <div class="form-group col-md-12 mb-0">
                            <label class="form-label">Your Phone No</label>
                               
                    
                            <input type="text" class="form-control" id="customerPhoneNo"
            
                            value={customerPhoneNo}
                            
                            onChange={(event) => {
                                setCustomerPhoneNo(event.target.value);
                              }} 
                            
                            />
                            </div>
            
            
            
                          
                            <div class="form-group col-md-12 mb-0">
                                <div class="form-group">
                                <label class="form-label">Seller Till No</label>
                                    <input type="text" class="form-control" id="till_no" value={sellerTillNo}
                                    
                                    onChange={(event) => {
                                        setsellerTillNo(event.target.value);
                                      }} 

                                      disabled
                                    
                                   />
                                </div>
                            </div>
            
            
                            <div class="form-group col-md-12 mb-0">
                            <div class="form-group">
                            <label class="form-label">Amount</label>

                            <span class="tag tag-radius tag-round tag-primary">Ksh.{amount}</span>
                               
                            </div>
                        </div>
                    
                            
                           
                          
                           
                        </div>
                    
                        <div class="form-footer mt-2">
                       
                    </div>
                            
                            </div>
                            <div class="modal-footer">
            
                            {!isLoading &&  <button  onClick={() => {
            
                                payOrderTest();
                       
                            }} class="btn btn-primary">Pay Now</button>
            
            
                          
            
                        } 
                        {isLoading &&
                            <button type="submit" class="btn btn-primary" disabled> <i class="spinner-border text-success me-2"></i>Initiating Payment....</button>
                        }
                               
                                
                                
                                <button class="btn btn-light" data-bs-dismiss="modal">Close</button>
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
                <h6>{orderId}</h6>
               
                <div class="form-row">



                <div class="form-group col-md-12 mb-0">
                <label class="form-label">Order ID</label>
                   
        
                <input type="text" class="form-control" id="order_id"
                
                onChange={(event) => {
                    setorderId(event.target.value);
                  }} 
                
                value={orderId} disabled/>

                </div>



                <div class="form-group col-md-6 mb-0">
        
               {/* <p>Product Id {productId} Seller Id {businessId}  </p>*/} 
                    <div class="form-group">
                    <label class="form-label">Product Name</label>
                        <input type="text" class="form-control" id="item_name" value={item_name}
                        
                        onChange={(event) => {
                            setitem_name(event.target.value);
                          }} 
                        
                        placeholder="Item name"/>
                    </div>
                </div>
                <div class="form-group col-md-6 mb-0">
                    <div class="form-group">
                    <label class="form-label">Quantity</label>
                        <input type="number" class="form-control" id="name2" value={quantity_ordered}
                        
                        onChange={(event) => {
                            setquantity_ordered(event.target.value);
                          }} 
                        
                        placeholder="Quantity"/>
                    </div>
                </div>
        
                
               
                <div class="form-group col-md-12 mb-0">
                <label class="form-label">Additional Infor</label>
                   
        
                    <textarea class="form-control" value={order_description}  onChange={(event) => {
                        setorder_description(event.target.value);
                      }}  placeholder="Comments" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                </div>
               
            </div>
        
            <div class="form-footer mt-2">
           
        </div>
                
                </div>
                <div class="modal-footer">

                {!isLoading &&  <button  onClick={() => {

                    editOrder()
           
                }} class="btn btn-primary">Save changes</button>

            } 
            {isLoading &&
                <button type="submit" class="btn btn-primary" disabled> <i class="fas fa-sync fa-spin"></i>Saving Changes....</button>
            }
                   
                    
                    
                    <button class="btn btn-light" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>


                  
 


<ToastContainer/>







                   
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

export default CustomerDashboard