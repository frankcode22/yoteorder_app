import React, { useState, useEffect,useContext } from "react";

import {Formik,Form,Field, ErrorMessage} from "formik"
// import { useEffect,useState } from 'react';
//import './home.css';



//import axios from 'axios';

import API from '../../../services';

import { useNavigate,Link} from "react-router-dom";


import * as Yup from "yup";


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './styles.css'

import { Modal, Button } from "react-bootstrap";
import { AuthContext } from "../../../helpers/AuthContext";

//import GoogleLogin from "./GoogleLogin";

function SignUp() {

    const { setAuthState } = useContext(AuthContext);

    const [first_name, setFirst_name] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [account_type, setAccount_type] = useState(1);

    const [password, setPassword] = useState("");



    
    const [show, setShow] = useState(false);


    const [nameinvalid,setnameinvalid]=useState(false);

    const [phoneNoInvalid,setPhoneNoInvalid]=useState(false);

    const [emailNoInvalid,setEmailNoInvalid]=useState(false);

    

    const [isLoading,setLoading]=useState(false);
    // const [password, setPassword] = useState("");

    let history = useNavigate();


    const handleShow = () =>{

        setLoading(true)

        setShow(true);
      
        setTimeout(() => {

        setLoading(false)

        history("/dashboard-vendor");
        window.location.reload(false);

      

        
    }, 4000);


      }





    const data={
        first_name:first_name,
        last_name:first_name,
        username:email,
        email:email,
        phone_no:phone_no,
        account_type:account_type,
        password:password,
        state:'Nairobi',
        city:null,
        role:'Vendor',
    }


    
    

   

    const addDetails = ()  => {
        setLoading(true);

        if(first_name==""){
            setnameinvalid(true)
            setLoading(false)

            setTimeout(() => {
                setnameinvalid(false)
               
             }, 2000);
            return
        }

        if(phone_no==""){
            setPhoneNoInvalid(true)
            setLoading(false)

            setTimeout(() => {
                setPhoneNoInvalid(false)
               
             }, 2000);
            return
        }

        if(email==""){
            setEmailNoInvalid(true)
            setLoading(false)

            setTimeout(() => {
                setEmailNoInvalid(false)
               
             }, 2000);
            return
        }

        API.post("users/",data).then((response)=>{
        
      // axios.post("https://yoteorder-server.herokuapp.com/users",data).then((response)=>{

        console.log("The response is"+response.data)

        
            setTimeout(() => {
                setLoading(false);
                toast.info('Signed Up successfully');
            }, 3000);
         
           //  history("/dashboard");
          
           
        })

    }

   



    const initialValues = {
        name:"",
        last_name:"",
        username:"",
        email:"",
        phoneNo:"",
        account_type:"",
        password:"",
        state:"",
        city:null,
        role:'Vendor',
      };


      const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

     
    
      const validationSchema = Yup.object().shape({

        name: Yup.string().min(3).max(40).required('Please enter your names'),

        phoneNo:  Yup.string().min(9).max(12).matches(phoneRegExp, 'Enter a valid phone number').required('Please enter your phone no'),

        email:Yup.string().email('Invalid email').required('Please enter your email'),

        password: Yup.string().min(4).max(20).required(),
      });


      const onSubmit = (data) => {
        setLoading(true);
        
     // axios.post("https://yoteorder-server.herokuapp.com/users", data).then((response) => {
        API.post("users", data).then((response) => {


            if(response.data.error) {

                setTimeout(() => {
                   
                    toast.error(response.data.error);
                    setLoading(false);
                   
                }, 1000);

                //alert();
                //setLoading(false);
              }

              else{




                
  //const details = { username:response.username, password: response.password};

  API.post("users/login", data).then((rense) => {
    if (rense.data.error) {
      alert(rense.data.error);
      setLoading(false);
    } else {
      localStorage.setItem("accessToken", rense.data.token);
      setAuthState({
        username: rense.data.username,
        role: rense.data.role,
        first_name: rense.data.first_name,
        phone_no: rense.data.phone_no,
        id: rense.data.id,
        status: true,
      });

      console.log("Response is",rense.data)

      console.log("THE RETURNED USER ID IS ",rense.data.id)


      
      if(rense.data.role=="Vendor"){


        API.get('users/auth', { headers: { accessToken: localStorage.getItem("accessToken") }}).then((res_auth) => {

            //setUserId(res_auth.data.id)
    
    
        console.log("THE USER ID IS "+res_auth.data.id)
    
    
    
        // const customer_details={
        //     name:name,
        //    email:email,
        //    phone_no:phone_no,
        //    BusinessId:businessId,
        //    UserId:res_auth.data.id,
           
        //   }
    
        // API.post('customer',customer_details).then((res)=>{
        
        //     console.log("The response is"+res.data)
        
        //     setBookingId(res.data.id)
        // })
    
    
    
    
    //             const order_details={
    //                         item_name:item_name,
    //                         quantity_ordered:quantity_ordered,
    //                         customer_phone_no:rense.data.phone_no,
    //                         order_description:order_description,
    //                         orderId:randomNo,
    //                         UserId:res_auth.data.id,
    //                         BusinessId:businessId,
    //                       }
    //             API.post('order',order_details).then((res_b)=>{
    
    //  // console.log("The response is"+res_b.data)
    
    //   setorderId(res_b.data.id)
    
      
    
    //  console.log("THE  ORDER ID IS "+res_b.data.id)
    
    //  console.log("THE  ORDER ID TWO IS "+randomNo)
    
    //     })
    
          
          
               })
    
            setTimeout(() => {
              setLoading(false);
    
    
              
            //   //setLoading(false);
            //   //toast.info('Appointment saved!');
            //   setShowSuccessAlert(true)
      
            //   setShowCustomerDetailsForm(false)
    
            //   setShowAllServicesDiv(true)
    
            //   setShowBuyerDetailsModal(false)
    
              handleShow()
    
    
            
          }, 5000);
    
          }
          else{
            setTimeout(() => {
              setLoading(false);
              history("/dashboard");
          }, 1000);
      

        }
    



     
    
    }
  });
  
          

       // axios.post("https://tunepapi.herokuapp.com/users", data).then(() => {
          console.log(data);


          setTimeout(() => {
            setLoading(false);
            toast.info('Signed Up successfully');
            handleShow()
        }, 1500);

    }


        });
      };

      const style = { color: 'red' };

  return (
    <div class="app sidebar-mini ltr login-img">

    {/** <div id="global-loader">
        <img src="assets/images/loader.svg" class="loader-img" alt="Loader"/>
    </div> */}

  
   

    <div class="page">
        <div class="">

       
            <div class="col col-login mx-auto mt-7">
                <div class="text-center">

                 {/** <a href='/'><img src="assets/images/brand/logo_pink.png" class="header-brand-img" alt=""/></a> */}
                 <Link to={`/`}><img src="assets/images/brand/logo_pink.png" class="header-brand-img" alt=""/></Link>

                    
                </div>
            </div>


           

          
        {/**
        <div class="container-login100">
        <div class="wrap-login100 p-6">
            <form class="login100-form validate-form">
                <span class="login100-form-title">
                        Registration
                    </span>
                <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
              
                    <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                        <i class="mdi mdi-account" aria-hidden="true"></i>
                    </a>
                  
                    <input class="input100 border-start-0 ms-0 form-control" type="text"
                    
                    onChange={(event) => {
                        setFirst_name(event.target.value);
                      }}
                    
                    
                    placeholder="Eg. Ann Wanjiku"/>

                 
                </div>
                {nameinvalid && <div class="invalid-feedback-p">Please enter your name.</div> } 

                <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                    <i class="zmdi zmdi-phone" aria-hidden="true"></i>
                </a>
                <input class="input100 border-start-0 ms-0 form-control" type="email" 
                
                onChange={(event) => {
                    setPhone_no(event.target.value);
                  }}
                
                  placeholder="eg.0714639773"/>

               
            </div>
            {phoneNoInvalid && <div class="invalid-feedback-p">Please enter your phone number</div> } 
                
                <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                    <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                        <i class="zmdi zmdi-email" aria-hidden="true"></i>
                    </a>
                    <input class="input100 border-start-0 ms-0 form-control" type="email" 
                    
                    onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    
                    placeholder="Email"/>

                 
                </div>

                {emailNoInvalid && <div class="invalid-feedback-p">Please enter your email</div> } 
               
                <label class="custom-control custom-checkbox mt-4">
                        <input type="checkbox" class="custom-control-input"/>
                        <span class="custom-control-label">Agree the <a href="terms.html">terms and policy</a></span>
                    </label>
                <div class="container-login100-form-btn">
                {!isLoading && 
                    <button onClick={addDetails} class="login100-form-btn btn-primary">
                            Register
                        </button>
                }

                {isLoading &&
                    <button class="login100-form-btn btn-primary my-1" type="button" disabled="">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Signing up...
                </button>
                }
                </div>
                <div class="text-center pt-3">
                    <p class="text-dark mb-0">Already have account?<a href="/signin" class="text-primary ms-1">Sign In</a></p>
                </div>
                <label class="login-social-icon"><span>Register with Social</span></label>
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0)">
                        <div class="social-login me-4 text-center">
                            <i class="fa fa-google"></i>
                        </div>
                    </a>
                    <a href="javascript:void(0)">
                        <div class="social-login me-4 text-center">
                            <i class="fa fa-facebook"></i>
                        </div>
                    </a>
                    <a href="javascript:void(0)">
                        <div class="social-login text-center">
                            <i class="fa fa-twitter"></i>
                        </div>
                    </a>
                </div>
            </form>
        </div>
        <ToastContainer></ToastContainer>
    </div> */}



       <div class="container-login100">
            <div class="wrap-login100 p-6">





                  
            <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className="login100-form validate-form">
              
                    <span class="login100-form-title">
                            Registration
                        </span>
                    <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                        <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                            <i class="mdi mdi-account" aria-hidden="true"></i>
                        </a>

                     
                        
                        <Field class="input100 border-start-0 ms-0 form-control" autocomplete="off"
                      
                        name="name"
                        placeholder="Eg.Victor Kamau" type="text"/>
                    </div>
                   <span class="invalid-feedback-p"><ErrorMessage name="name"/></span> 

                   

                    <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                    <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                    <i class="zmdi zmdi-phone" aria-hidden="true"></i>
                    </a>

                
                   
                  
                    
                    <Field class="input100 border-start-0 ms-0 form-control" autocomplete="off"
                    id="phoneNo"
                      name="phoneNo"
                      placeholder="eg.0714639773"
                    type="text"/>
                </div>

              

                <span class="invalid-feedback-p"><ErrorMessage name="phoneNo"/></span> 

                    <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                        <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                            <i class="zmdi zmdi-email" aria-hidden="true"></i>
                        </a>


                       
                        <Field class="input100 border-start-0 ms-0 form-control"   autocomplete="off"

                        id="email"
                       
                        name="email"
                        
                        placeholder="Email"/>
                    </div>
                     
                  

                    <span class="invalid-feedback-p"><ErrorMessage name="email"/></span> 
                   

                    <div class="wrap-input100 validate-input input-group" id="Password-toggle">
                        <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                            <i class="zmdi zmdi-eye" aria-hidden="true"></i>
                        </a>

                        <Field
                        class="input100 border-start-0 ms-0 form-control"
                        autocomplete="off"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your Password..."
                      />
            
                       
                    </div>

                   
                    <span class="invalid-feedback-p"><ErrorMessage name="password"/></span> 
                    <label class="custom-control custom-checkbox mt-4">
                            <input type="checkbox" class="custom-control-input"/>
                            <span class="custom-control-label">Agree the <a href="terms.html">terms and policy</a></span>
                        </label>
                    <div class="container-login100-form-btn">


                    {!isLoading && <button  type="submit" class="login100-form-btn btn-primary">Register</button>

                } 
                {isLoading &&
                  <button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled><div class="spinner-grow spinner-grow-sm me-2" role="status">
                  <span class="visually-hidden">Loading...</span>
              </div>Signing up...</button>
                }



                

                      
                    </div>
                    <div class="text-center pt-3">
                        <p class="text-dark mb-0">Already have account?<a href="/signin" class="text-primary ms-1">Sign In</a></p>
                    </div>
                    <label class="login-social-icon"><span>Register with Social</span></label>
                    <div class="d-flex justify-content-center">
                        <a href="javascript:void(0)">
                            <div class="social-login me-4 text-center">
                                <i class="fa fa-google"></i>
                            </div>
                        </a>
                        <a href="javascript:void(0)">
                            <div class="social-login me-4 text-center">
                                <i class="fa fa-facebook"></i>
                            </div>
                        </a>
                        <a href="javascript:void(0)">
                            <div class="social-login text-center">
                                <i class="fa fa-twitter"></i>
                            </div>
                        </a>
                    </div>
                    </Form>
                    </Formik>
            </div>

            <ToastContainer></ToastContainer>
        </div> 


        <Modal class="modal fade" id="modaldemo8" show={show}>

<Modal.Header>
  <Modal.Title>Initiating Order</Modal.Title>
</Modal.Header>
<Modal.Body class="modal-body text-center p-4 pb-5">




<i class="icon icon-check fs-70 text-success lh-1 my-5 d-inline-block"></i>
<h4 class="text-success tx-semibold">Welcome to PataMtaani!</h4>
<p class="mg-b-20 mg-x-20">Redirecting to your account </p>

<div class="progress progress-md mb-3">
                                                <div class="progress-bar progress-bar-indeterminate bg-blue-1"></div>
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
          
        </div>
    </div>
   

</div>
  )
}

export default SignUp