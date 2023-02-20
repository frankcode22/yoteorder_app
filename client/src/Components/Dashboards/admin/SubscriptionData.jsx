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



import { Modal, Button } from "react-bootstrap";

import {useParams} from "react-router-dom"
import PataMtaaniAdminContext from '../../../helpers/PataMtaaniAdminContext';
import { set } from 'lodash';


function SubscriptionData() {
    const [isLoading,setLoading]=useState(false);


    const{requestList,setRequestList}=useContext(PataMtaaniAdminContext)

    const[requestDetails,setRequestDetails]=useState([]);

    const [showSupplierDetails,setShowSupplierDetails]=useState(true);


    const [showGridView,setShowGridView]=useState(false);

    const [showSuccessAlert,setShowSucessAlert]=useState(false);

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

    const [accountType, setAccountType] = useState("");





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


    const [error, setError] = useState(null);


    //const [error, setError] = useState(null);

    const [hasError, setHasError] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const [retry, setRetry] = useState(false);
    const [retryCount, setRetryCount] = useState(0);

    const maxRetries = 10;
   
    //const [service_type, set_service_type] = useState("");

    let { id } = useParams();

    
    const [requestId, setRequestId] = useState('');
  
  
    let history = useNavigate();


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () =>{

		//setRandomNo(randomNumberInRange(1, 10000));

		setShow(true);
	} 

   
    
    
    useEffect(()=>{
    
       
       
    
    
   



            // API.get("subscription/currentrequests",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
           
    
            // if(response.data){
       
            //     setRequestList(response.data)
       
            //  }
            //  else{
            //     setRequestList([])
       
            //  }
             
       
            //    console.log("THE REQUEST LIST DATA "+response.data)
            //   })
       

            console.log("REQUESTS FOR SUB SCRIPTIONS FROM ADMIN DATA PROVIDER "+requestList)
    
    
    
        
    
    
  
    },[requestList]);



    const acceptRequest= (id)=>{

       
     // setLoading(true);

     setLoading(id);

  

     API.put('subscription/acceptsubscription/'+id).then((res_b)=>{
 
        // console.log("THE ACTUAL ID IS "+actualId)
         
         //setProductId(res_b.data.id)
         //getAllMyProducts()
        
         setTimeout(() => {
             setLoading(false);
             // handleShow()
             toast.success("Accepted")
         }, 1000);
         
         })
   
   }


   
   const declineRequest= (id)=>{


      
       setLoading(id);
 
   
 
       API.put('subscription/declinesubscription/'+id).then((res_b)=>{
   
          // console.log("THE ACTUAL ID IS "+actualId)
           
           //setProductId(res_b.data.id)
           //getAllMyProducts()
          
           setTimeout(() => {
               setLoading(false);
               // handleShow()
               toast.warning("Declined")
           }, 1000);
           
           })
     
     }
 

   

   const handleChange = (event) => {
       setRequestDetails({...requestDetails, [event.target.name]: event.target.value});

       //setRequestDetails({...requestDetails, [event.target.email]: event.target.value});
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

   const viewSelectedRequest= (id)=>{


    const request_ = requestList.find(post => (post.id) === id);

   

    console.log('SELECTED REQUEST',request_)

    setName(request_.first_name)

    setbusiness_name(request_.business_name)

    setRequestId(request_.id)

    setAccountType(request_.account_type)

    setRequestDetails(request_)

    setUserId(request_.User.id)

    setEmail(request_.User.email)

    setPhone_no(request_.User.phone_no)

    setShow(true)

    //setBus



   // history('/products/'+id)

}

    
  return (
    <div>


<div class="table-responsive mb-0">
                                        <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap table-striped ">
                                            <thead>
                                                <tr>
                                                <th class="text-center">

                                                #

                                                </th>
                                               
                                                <th>Name</th>
                                             
                                                <th>Contacts</th>
                                               
                                                <th>Account</th>
                                                
                                                
                                               
                                             
                                                <th class="text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {requestList.map((value,key)=>{

                                                return (
                                                <tr>
                                                    <td>
                                                    {key} 
                                                    </td>
                                                   
                                        <td class="text-nowrap align-middle">{value.first_name}</td>
                                        

                                        <td class="text-nowrap align-middle">{value.phone_no}</td>

                                        <td class="text-nowrap align-middle">{value.account_type}</td>

                                       
                                         {/** <td class="text-nowrap align-middle">{value.Business.longitude?value.Business.longitude:'no bizz'}</td> */}
                                        

                                        

                                      

                                       

                                        <td class="text-center align-middle">
                                            <div class="btn-group align-top">
                                            <button class="btn btn-sm btn-primary badge" onClick={() => {
                                                viewSelectedRequest(value.id);
                                                  }} type="button">View More</button>






{isLoading === value.id ? (
                <span><div class="spinner-grow spinner-grow-sm me-2" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>Updating...</span>
              ) : (
                <>
                <button class="btn btn-sm btn-success badge" onClick={() => {
                    acceptRequest(value.id);
                      }}  type="button"><i class="fa fa-check"></i>Accept</button> 

                      <button class="btn btn-sm btn-danger badge"  onClick={() => {
                        declineRequest(value.id);
                          }}  type="button"><i class="fa fa-close"></i>Decline</button> 
                
                </>
                
                      
                   )}






                                                  
                                            
                                               
                                               
                                            </div>
                                        </td>
                                                </tr>
                                                )




                                            })}
                                                
                                                
                                                
                                            
                                            </tbody>
                                        </table>
                                    </div>


                                    <Modal show={show} onHide={handleClose}>

<Modal.Header>
                    <Modal.Title>New Product</Modal.Title>
                </Modal.Header>

    
       

    <Modal.Body>



        

{error && !retry && <div class="badge bg-danger">{error}</div>}



{showSuccessAlert &&

  <div>

  <i class="icon icon-check fs-70 text-success lh-1 my-4 d-inline-block"></i>
  <h4 class="text-success mb-4">Product saved successfully!</h4>

  </div>
}


{!showSuccessAlert &&  <div>

<div class="row">
<div class="col mb-3">
  <label for="nameWithTitle" class="form-label">Customer Name</label>
  <input type="text" id="item_name" class="form-control" placeholder="Customer name"

  value={name}
  
  onChange={(event) => {
      setName(event.target.value);     }}
     
  />
</div>
</div>

<div class="row">
<div class="col mb-3">
  <label for="nameWithTitle" class="form-label">Business Name</label>
  <input type="text" id="item_name" class="form-control" placeholder="Business name"

  value={business_name}
  
  onChange={(event) => {
      setbusiness_name(event.target.value);     }}
     
  />
</div>
</div>





<div class="form-row">

<div class="form-group col-md-6 mb-0">


<label class="form-label" for="multicol-country">Account Requested</label>
<select id="multicol-country" class="form-control select2 form-select"

 onChange={(event) => {
 set(event.target.value);
 }}

data-allow-clear="true">

<option value={accountType}>{accountType}</option>
<option value="Retailer">Retailer</option>

<option value="Supplier">Supplier</option>









</select>



</div>

{/**<div class="form-group col-md-6 mb-0">


<label class="form-label" for="multicol-country">Category</label>
<select id="multicol-country" class="form-control select2 form-select"
    onChange={(event) => {
      setRetailerProductCategoryId(event.target.value);
    }}

    data-allow-clear="true">
    <option value="">Select Category</option>

    {retailerCatList.map((value,key)=>{

      return (

        <option value={value.id}>{value.cat_name}</option>

      )

    })}


    


</select>


 
</div> */}

<div class="form-group col-md-6 mb-0">


    <div class="form-group">
    <label for="dobWithTitle" class="form-label">Quantity</label>
    <input type="number" id="price" class="form-control"

        // onChange={(event) => {
        //     setQuantity(event.target.value);
        // }}


    />
 
    </div>




</div>
</div>

<div class="form-row">



<div class="form-group col-md-12 mb-0">


    <div class="form-group">
    <label for="dobWithTitle" class="form-label">Phone No</label>
    <input type="number" id="price" class="form-control"

    value={phone_no}

    onChange={(event) => {
       setPhone_no(event.target.value);
   }}

    />
  
    </div>

    {/* <input type="hidden" value={businessId}  onChange={(event) => {
      setbusinessId(event.target.value);
    }} placeholder="bussId"/> */}




</div>
</div>


<div class="form-row">



<div class="form-group col-md-12 mb-0">


    <div class="form-group">
    <label for="dobWithTitle" class="form-label">Email</label>
    <input type="number" id="price" class="form-control"

    value={email}

    onChange={(event) => {
       setEmail(event.target.value);
   }}

    />
  
    </div>

    {/* <input type="hidden" value={businessId}  onChange={(event) => {
      setbusinessId(event.target.value);
    }} placeholder="bussId"/> */}




</div>
</div>



</div> }



    </Modal.Body>
     
      

          <Modal.Footer>

          {!isLoading &&  <button type="button"   onClick={() => {
                      updateUserRequest(requestId);
                         }} class="btn btn-success"><i class="fe fe-check me-2"></i>Update</button> }    
  
        {isLoading &&
            <button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled><div class="spinner-grow text-success me-2" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>Saving Infor</button>
        }

    
    
    <button class="btn btn-light" onClick={handleClose}>Close</button>


          </Modal.Footer>
          


          
   
   











</Modal>



    </div>
  )
}

export default SubscriptionData