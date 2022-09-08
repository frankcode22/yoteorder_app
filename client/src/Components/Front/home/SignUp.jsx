import React from 'react'

import {Formik,Form,Field, ErrorMessage} from "formik"
import { useEffect,useState } from 'react';
//import './home.css';



import axios from 'axios';

import { useNavigate } from "react-router-dom";


import * as Yup from "yup";


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

//import GoogleLogin from "./GoogleLogin";

function SignUp() {

    const [first_name, setFirst_name] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [account_type, setAccount_type] = useState(1);

    // const [password, setPassword] = useState("");





    const data={
        first_name:first_name,
        last_name:first_name,
        username:email,
        email:email,
        phone_no:phone_no,
        account_type:account_type,
        password:phone_no,
        state:'Nairobi',
        city:null,
        role:'Buss_Owner',
    }

    const [isLoading,setLoading]=useState(false);



    const initialValues = {
        first_name:"",
        last_name:"",
        username:"",
        email:"",
        phone_no:"",
        account_type:"",
        password:"",
        state:"",
        city:null,
        role:'Vendor',
      };
    
      const validationSchema = Yup.object().shape({

        first_name: Yup.string().min(3).max(40).required(),

        phone_no: Yup.string().min(3).max(15).required(),

        email:Yup.string().email('Invalid email').required('Required'),
      });


      const onSubmit = (data) => {
        setLoading(true);
        
       //axios.post("http://localhost:3001/users", data).then((response) => {
        axios.post("https://yoteorder-server.herokuapp.com/users", data).then((response) => {


            if(response.data.error) {

                setTimeout(() => {
                   
                    toast.error(response.data.error);
                    setLoading(false);
                }, 500);

                //alert();
                //setLoading(false);
              }

              else{
          

       // axios.post("https://tunepapi.herokuapp.com/users", data).then(() => {
          console.log(data);


          setTimeout(() => {
            setLoading(false);
            toast.info('Signed Up successfully');
        }, 1000);

    }


        });
      };

  return (
    <div class="app sidebar-mini ltr login-img">

  
    <div id="global-loader">
        <img src="assets/images/loader.svg" class="loader-img" alt="Loader"/>
    </div>

    <div class="page">
        <div class="">

       
            <div class="col col-login mx-auto mt-7">
                <div class="text-center">
                <a href='/'><img src="assets/images/brand/logo_pink.png"  class="header-brand-img" alt=""/></a>
                    
                </div>
            </div>

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

                        <ErrorMessage name="first_name" component="span" />
                        
                        <Field class="input100 border-start-0 ms-0 form-control"   autocomplete="off"
                        id="inputCreatePost"
                        name="first_name"
                        placeholder="(Ex. John Kamau)" type="text"/>
                    </div>

                    <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                    <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                        <i class="mdi mdi-account" aria-hidden="true"></i>
                    </a>

                
                    <ErrorMessage name="phone_no" component="span" />
                  
                    
                    <Field class="input100 border-start-0 ms-0 form-control"   autocomplete="off"
                    id="inputCreatePost"
                      name="phone_no"
                      placeholder="+245713292421"
                    type="text"/>
                </div>
                    <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                        <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                            <i class="zmdi zmdi-email" aria-hidden="true"></i>
                        </a>


                        <ErrorMessage name="email" component="span" />
                       
                        <Field class="input100 border-start-0 ms-0 form-control"   autocomplete="off"
                        id="inputCreatePost"
                        name="email"/>
                    </div>
                    <div class="wrap-input100 validate-input input-group" id="Password-toggle">
                        <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                            <i class="zmdi zmdi-eye" aria-hidden="true"></i>
                        </a>
                        <input class="input100 border-start-0 ms-0 form-control" type="password" placeholder="Password"/>
                    </div>
                    <label class="custom-control custom-checkbox mt-4">
                            <input type="checkbox" class="custom-control-input"/>
                            <span class="custom-control-label">Agree the <a href="terms.html">terms and policy</a></span>
                        </label>
                    <div class="container-login100-form-btn">


                    {!isLoading && <button type="submit"  class="login100-form-btn btn-primary">Sign Up</button>
   
                } 
                {isLoading &&
                    <button type="submit"  class="login100-form-btn btn-primary" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
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
          
        </div>
    </div>
   

</div>
  )
}

export default SignUp