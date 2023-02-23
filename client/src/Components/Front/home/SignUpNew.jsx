import React, { useState, useEffect,useContext } from "react";

import {Formik,Form,Field, ErrorMessage} from "formik"
// import { useEffect,useState } from 'react';
//import './home.css';



import axios from 'axios';

import API from '../../../services';

import { useNavigate,Link} from "react-router-dom";


import * as Yup from "yup";


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './styles.css'

import { Modal, Button } from "react-bootstrap";
import { AuthContext } from "../../../helpers/AuthContext";

import useFetch from "../../../services/useFetch";



function SignUpNew() {
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


      const { handleGoogle, loading, error } = useFetch(
        "https://apibackend.patamtaani.com/api/users/signup_google"
      );
    
      useEffect(() => {
        /* global google */
        if (window.google) {
          google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: handleGoogle,
          });
    
          google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
            // type: "standard",
            theme: "filled_black",
            // size: "small",
            text: "continue_with",
            shape: "pill",
          });
    
          // google.accounts.id.prompt()
        }
      }, [handleGoogle]);


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
        role:'User',
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



              setTimeout(() => {
                setLoading(false);

                console.log('THE PHONE NUMBER IS'+data.phoneNo)
      
      
                
             
            toast.info('Credentials saved!');

              
      
      
              
            }, 2000);

              


        });
      };


      const backHome=()=>{
        history('/')
     }


  

    
  return (
    <div class="page">

	
		<div class="my-auto page page-h">
			<div class="main-signin-wrapper">
				<div class="main-card-signin d-md-flex">
				<div class="wd-md-50p login d-none d-md-block page-signin-style p-5 text-white" >
					<div class="my-auto authentication-pages">
						<div>
							<img src="assets/img/brand/logo_pink.png" class=" m-0 mb-4" alt="logo"/>
							<h5 class="mb-4">PataMtaani</h5>
							<p class="mb-5">PataMtaani is a platfom developed to provide software solutions to small and medium enterprises(Bussiness) across all the industries.

PataMtaani has a couple of solutions,that will transform your business into a fully digital enterprise with a minimum cost possible.</p>
							<Link to='/' class="btn btn-success">Back Home</Link>
						</div>
					</div>
				</div>
				<div class="sign-up-body wd-md-50p">
					<div class="main-signin-header">
						<h2>Welcome back!</h2>
           
						<h4>Create an account with PataMtaani</h4>

            {/* <button type="button" onClick={backHome} class="btn btn-success centre"> <i class="si si-arrow-left" data-bs-toggle="tooltip" title="" data-bs-original-title="si-arrow-left" aria-label="si-arrow-left"></i>Back Home</button> */}

            {error && <p style={{ color: "red" }}>{error}</p>}
        {loading ? (
          <div>Loading....</div>
        ) : (
          <div id="signUpDiv" data-text="signup_with"></div>
        )}
                        <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                      >
                        <Form className="login100-form validate-form">
                          
                                <span class="login100-form-title">
                                        Registration
                                    </span>


                                    <div class="form-group">
								<label>Firstname &amp; Lastname</label> 
                                
                                
                                <Field class="form-control" 
                                
                                autocomplete="off"
                                  
                                    name="name"
                                placeholder="Enter your firstname and lastname" type="text"/>
							     </div>
                                 <span class="invalid-feedback-p"><ErrorMessage name="name"/></span> 



                                 <div class="form-group">
                                 <label>Phone Number</label> 
                                 
                                 
                                 <Field class="form-control" 
                                 
                                 name="phoneNo"
                                  placeholder="eg.0714639773" type="text"/>
                                  </div>

                                  <span class="invalid-feedback-p"><ErrorMessage name="phoneNo"/></span> 


                                  <div class="form-group">
                                  <label>Email</label> <Field class="form-control"

                                  autocomplete="off"
            
                                    id="email"
                                   
                                    name="email"
                                  
                                  placeholder="Enter your email" type="text"/>
                              </div>
                              
            
                              <span class="invalid-feedback-p"><ErrorMessage name="email"/></span> 
            
                          
            
                              


                                <div class="form-group">
								<label>Password</label> <Field class="form-control"


                                autocomplete="off"
                                type="password"
                                id="password"
                                name="password"
                                
                                
                                placeholder="Enter your password"/>
							</div>


                            <span class="invalid-feedback-p"><ErrorMessage name="password"/></span> 
                            
                            
                           


                            
                            {!isLoading &&  <button class="btn btn-primary btn-block">Create Account</button>
            
                        } 
                        {isLoading &&
                          <button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled><div class="spinner-grow spinner-grow-sm me-2" role="status">
                          <span class="visually-hidden">Loading...</span>
                      </div>Signing up...</button>
                        }
            
                               
                              
                                <label class="custom-control custom-checkbox mt-4">
                                        <input type="checkbox" class="custom-control-input"/>
                                        <span class="custom-control-label">Agree the <a href="#">terms and policy</a></span>
                                    </label>
                               
                               
                              
                                </Form>
                                </Formik>
					
					</div>
					<div class="main-signup-footer mg-t-10">
						<p>Already have an account? <Link to='/login'>Sign In</Link></p>
           <p><Link to='/'>Back Home</Link></p> 
					</div>
					</div>
				</div>
                <ToastContainer></ToastContainer>
			</div>
		</div>
	</div>
  )
}

export default SignUpNew