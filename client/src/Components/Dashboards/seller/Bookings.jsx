import React from 'react'
import {useEffect,useState,useContext} from 'react';



import API from '../../../services';



import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useNavigate,Link,useParams} from "react-router-dom";

import { AuthContext } from "../../../helpers/AuthContext";



import { Modal, Button } from "react-bootstrap";


import ContentLoader from '../../../utils/ContentLoader';
import OrderDetailsContext from '../../../helpers/OrderDetailsContext';
import DataContext from '../../../helpers/DataContext';

import 'react-toastify/dist/ReactToastify.css';





import SidebarS from './SidebarS';
import TopbarS from './TopbarS';

function Bookings() {
    
    
const {authState} = useContext(AuthContext);


const [item_name, setitem_name] = useState('');




const [name, setName] = useState("");
const [username, setUsername] = useState("");

const [email, setEmail] = useState("");



const [phone_no, setPhone_no] = useState("");

const [businessId, setbusinessId] = useState('');

const [business_name, setbusiness_name] = useState("");

const [dateJoined, setdateJoined] = useState('');




const [business_type, setbusiness_type] = useState("");

const [business_description, setbusiness_description] = useState("");

const [industry, setindustry] = useState("");
const [location, setlocation] = useState("");


const [servicesList, setServicesList] = useState([]);

const [staffList, setStaffList] = useState([]);



const [city, setCity] = useState("");


const [state, setState] = useState("");
const [country, setcountry] = useState("");
const [status, setStatus] = useState("");



const [latitude, setLatitude] = useState("");
const [longitude, setLongitude] = useState("");
const [address_line_1, setaddress_line_1] = useState("");
const [address_line_2, setaddress_line_2] = useState("");

const [postal_code, setPostal_code] = useState("");



const [isLoading,setLoading]=useState(false);

const [bussSetup,setBussSetup]=useState(false);

const [showSetUpError,setShowSetUpError]=useState(false);

const [notifications, setNotifications] = useState([]);






const {customerOrders,setCustomerOrders} = useContext(OrderDetailsContext);

const [userId, setUserId] = useState('');

const [actualId, setactualId] = useState('');

const [ordersList, setOrdersList] = useState([]);

const [bookingList, setBookingList] = useState([]);


const [orderId, setorderId] = useState('');


const [quantity_ordered, setquantity_ordered] = useState('');




const [customerPhoneNo, setCustomerPhoneNo] = useState("");

const [sellerTillNo, setsellerTillNo] = useState("174379");

const [amount, setAmount] = useState("");

const [randomNo, setRandomNo] = useState(0);

const [showOrderConfirmed, setShowOrderConfirmed] = useState(false);

const [customer_contacts, setcustomer_contacts] = useState('');

const [confirmationMessage, setConfirmationMessage] = useState("");


const [accessToken, setAccessToken] = useState("");

const [isBusinessSet,setIsBusinessSet] = useState(false);

const {businessDetails,setBusinessDetails } = useContext(DataContext);


let history = useNavigate();




const [order_description, setorder_description] = useState('');



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


    setIsDivLoading(true) 
   
     //axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
     API.get('users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

        setUserId(response.data.id)

        setName(response.data.first_name)

        setEmail(response.data.email)

        setPhone_no(response.data.phone_no)

        setdateJoined(response.data.createdAt)
  
  
       })
       

       API.get('bookings/servicerequests',{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

        console.log("THE PRODUCT NAME IS "+response.data)  

        if(response.data){
          setBookingList(response.data);
          //console.log("THE PRODUCT NAME IS "+response.data)

        }
        else{
          setBookingList([]);

          console.log("Pleas login ")

         // history('/sigin')

        }


        
    setTimeout(() => {
     
     // setSeller_name(response.data.Users);
      setIsDivLoading(false)   // Hide loading screen 
     // toast.info('Product saved successfully');
  }, 2000);


}).catch(() => {
    setErrorMessage("Unable to fetch services Booked list.Kindly check your internet connection!!");
    setIsDivLoading(false);
 });


     



},[businessDetails]);

const openSelectedOrder=(oId)=>{

//axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
    API.get('order/orderById/'+oId).then((response) => {

    console.log("THE PRODUCT NAME IS "+response.data.name)

    setorderId(response.data.orderId)

    setitem_name(response.data.item_name)

    setquantity_ordered(response.data.quantity_ordered)

    setorder_description(response.data.order_description)
        

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





const loadServicesBookedContent=(


    <div class="row">
    {bookingList.map((value, key) => {
      return (
        <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="card overflow-hidden border p-0 shadow-none">
                <div class="card-body">
                    <div class="row g-0">
                        <div class="col-xl-3 col-lg-12 col-md-12">
                            <div class="product-list">
                                <div class="product-image">
                                    <ul class="icons">
                                        <li><a href="#" class="btn btn-primary"><i class="fe fe-eye text-white "></i></a></li>
                                        <li><a href="#" class="btn btn-success"><i class="fe fe-edit text-white "></i></a></li>
                                        <li><a href="#" class="btn btn-danger"><i class="fe fe-x text-white"></i></a></li>
                                    </ul>
                                </div>
                                <div class="br-be-0 br-te-0">
                                    <a href="#" class="">
                                        <img src="assets/images/pngs/9.jpg" alt="img" class="cover-image br-7 w-100"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-12 col-md-12 border-end my-auto">
                            <div class="card-body">
                                <div class="mb-3">
                                    <a href="#" class="">
                                        <h3 class="fw-bold fs-30 mb-3">{value.item_name}</h3>
                                        <div class="mb-2 text-warning">
                                            <i class="fa fa-star fs-18 text-warning"></i>
                                            <i class="fa fa-star fs-18 text-warning"></i>
                                            <i class="fa fa-star fs-18 text-warning"></i>
                                            <i class="fa fa-star-half-o fs-18 text-warning"></i>
                                            <i class="fa fa-star-o fs-18 text-warning"></i>
                                        </div>
                                    </a>
                                    <div class="d-flex align-items-center mb-3 mt-3">
                                    <span class="tag tag-radius tag-round tag-primary">Price {value.Service.service_cost}</span>


                            

                                    <span class="tag tag-radius tag-round tag-orange">Items Ordered {value.quantity_ordered}</span>


                                  
                                <span class="tag tag-rounded tag-icon tag-green"><i class="fe fe-calendar"></i>Order Id:{value.orderId}<a href="javascript:void(0)" class="tag-addon tag-addon-cross tag-green"><i class="fe fe-x text-white m-1"></i></a></span>
                                </div>
                                <div class="d-flex align-items-center mb-3 mt-3">
                                    <div class="me-4 text-center text-primary">
                                        <span><i class="fe fe-mail fs-20"></i></span>
                                    </div>
                                    <div>
                                        <strong>Customer Email:<a  href="#" class="mb-3">{value.User.email}</a></strong>
                                    </div>
                                </div>

                                <div class="d-flex align-items-center mb-3 mt-3">
                                    <div class="me-4 text-center text-primary">

                                        <span><i class="fe fe-phone fs-20"></i></span>
                                    </div>
                                    <div>
                                        <strong>Provide Phone No:<a  href="#" class="mb-3">{value.Business.phone_no}</a> </strong>
                                    </div>
                                </div>

                                <div><i class="task-icon bg-primary"></i><h6 class="fw-semibold">The order is  <a href="javascript:void(0)" class="fw-semibold tag-green">{value.order_status}</a> .Made on <span class="text-muted fs-11 mx-2 fw-normal">{value.createdAt}</span></h6><p class="text-muted fs-12"> By <a href="javascript:void(0)" class="fw-semibold">{value.User.name}</a></p></div>

                                    

                                    <div class="border br-7">

                                    <p class="fs-16">{value.order_description} </p>


                                    </div>


                                    
                                
                                    
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
                                <div class="price h3 text-center mb-5 fw-bold">Total:Ksh {value.Service.service_cost} </div>

                             
                                <button type="submit"  onClick={() => {
                                    openSelectedOrder(value.id,value.orderId,value.User.phone_no);
                                      }} class="btn btn-primary btn-block" data-bs-toggle="modal" href="#modaldemo80"><i class="fe fe-check"></i>Confirm Order</button>
                             
                             
                             
                                {!isLoading && <button type="submit" onClick={() => {
                                    completeOrder(value.id);
                                      }} class="btn btn-primary btn-block"><i class="fe fe-edit mx-2"></i>Complete Order</button>
      
                            } 
                            {isLoading &&
                                <button type="submit" class="btn btn-primary btn-block" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Completing Order...</button>
                            }



                            {!isLoading && <button type="submit" onClick={() => {
                                cancelOrder(value.id);
                                  }} class="btn btn-danger btn-block mt-2"><i class="fe fe-x text-white"></i>Cancel Order</button>
  
                        } 
                        {isLoading &&
                            <button type="submit" class="btn btn-danger btn-block mt-2" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Processing...</button>
                        }
                               
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)})}




           
<div class="modal fade" id="modaldemo80">
<div class="modal-dialog modal-dialog-centered text-center" role="document">
<div class="modal-content modal-content-demo">
    <div class="modal-header">
        <h6 class="modal-title">Confirm Order Now</h6><button aria-label="Close" class="btn-close" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
    </div>
    <div class="modal-body">

  

    {showOrderConfirmed &&

        <div>

        <i class="icon icon-check fs-70 text-success lh-1 my-4 d-inline-block"></i>
        <h4 class="text-success mb-4">Order Confirmed Successfully!</h4>

        </div>


    }
   
    <h6>{orderId}</h6>

    {!showOrderConfirmed &&

        <div class="form-row">



        <div class="form-group col-md-12 mb-0">
        <label class="form-label">Order ID</label>
           

        <input type="text" class="form-control" id="order_id"
        
        onChange={(event) => {
            setorderId(event.target.value);
          }} 
        
        value={orderId} disabled/>
        </div>



        <div class="form-group col-md-12 mb-0">

      
            <div class="form-group">
            <label class="form-label">Customer Contact</label>
                <input type="text" class="form-control" id="customer_contacts" value={customer_contacts}
                
                onChange={(event) => {
                    setcustomer_contacts(event.target.value);
                  }} 
                
                placeholder="customer_contacts" disabled/>
            </div>
        </div>
     

        
       
        <div class="form-group col-md-12 mb-0">
        <label class="form-label">Any Message to Customer</label>
           
        

            <textarea class="form-control"  onChange={(event) => {
                setConfirmationMessage(event.target.value);
                
              }}  placeholder="Enter any message to customer" id="floatingTextarea2" style={{height: '100px'}}></textarea>
        </div>
       
    </div>


    }
   
  

<div class="form-footer mt-2">

</div>
    
    </div>
    <div class="modal-footer">

    {!isLoading &&  <button  onClick={() => {

        confirmOrder(actualId);

    }} class="btn btn-primary"><i class="fe fe-check"></i>Confirm Now</button>

    

} 
{isLoading &&

    <button class="btn btn-primary my-1" type="button" disabled="">
                                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                            Confirming order...
                                        </button>
   
}
       
        
        
        <button class="btn btn-light" data-bs-dismiss="modal">Close</button>
    </div>
</div>
</div>
</div>




<ToastContainer></ToastContainer>

        <Modal class="modal fade" id="modaldemo8" show={show}>

<Modal.Header>
<Modal.Title>Completing Order</Modal.Title>
</Modal.Header>
<Modal.Body class="modal-body text-center p-4 pb-5">




<i class="icon icon-check fs-70 text-success lh-1 my-5 d-inline-block"></i>
<h4 class="text-success tx-semibold">Order Completed!</h4>





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


)








return (
<div>

<div class="app sidebar-mini ltr light-mode">


{/** <div id="global-loader">
<img src="assets/images/loader.svg" class="loader-img" alt="Loader"/>
</div>*/}







<div class="page">
<div class="page-main">

<TopbarS></TopbarS>












<SidebarS notifications={notifications}></SidebarS>









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
                            <h3 class="card-title">Latest Orders</h3>
                        </div>


                        {isDivLoading ? <ContentLoader/>: loadServicesBookedContent}

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

export default Bookings