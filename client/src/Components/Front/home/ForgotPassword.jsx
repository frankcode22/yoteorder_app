import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../helpers/AuthContext";

import API from '../../../services';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



function ForgotPassword() {


    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthState } = useContext(AuthContext);


  
    let history = useNavigate();
  
    const [isLoading,setLoading]=useState(false);



    const requestResent = () => {

        toast.success('Reset password send to your email')



    }


    const login = () => {
      
        const data = { username: username, password: password };
    
        setLoading(true);
        API.post("users/login", data).then((response) => {
        //axios.post("https://yoteorder-server.herokuapp.com/users/login", data).then((response) => {
          if (response.data.error) {
            alert(response.data.error);
            setLoading(false);
          } else {
            localStorage.setItem("accessToken", response.data.token);
            setAuthState({
              username: response.data.username,
              role: response.data.role,
              first_name: response.data.first_name,
              phone_no: response.data.phone_no,
              id: response.data.id,
              status: true,
            });
    
            console.log("Response is",response.data)
    
            if(response.data.role=="Admin"){
    
              setTimeout(() => {
                setLoading(false);
                history("/dashboard");
                window.location.reload(false);
            }, 1000);
    
            }

            else if(response.data.role=="Customer"){
    
                setTimeout(() => {
                  setLoading(false);
                  history('/dashboard-customer');
                  window.location.reload(false);
              }, 1000);
        
              }



          else if(response.data.role=="Vendor"){

         

         
    
            setTimeout(() => {
              setLoading(false);
              history('/dashboard-vendor');
              window.location.reload(false);
          }, 1000);
    
          }
          else{
            setTimeout(() => {
              setLoading(false);
              history("/dashboard");
          }, 1000);
    
    
          }
          
          }
        });
      };



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

            <div class="container-login100">
                    <div class="wrap-login100 p-6">
                        <form class="login100-form validate-form">
                            <span class="login100-form-title pb-5">
                                Forgot Password
                            </span>
                            <p class="text-muted">Enter the email address registered on your account</p>
                            <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                                <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                    <i class="zmdi zmdi-email" aria-hidden="true"></i>
                                </a>
                                <input class="input100 border-start-0 ms-0 form-control" type="email" placeholder="Email"/>
                            </div>
                            <div class="submit">
                                <a class="btn btn-primary d-grid" onClick={requestResent}>Submit</a>
                            </div>
                            <div class="text-center mt-4">
                                <p class="text-dark mb-0">Forgot It?<Link class="text-primary ms-1" to="/signin">Send me Back</Link></p>
                            </div>
                            <label class="login-social-icon"><span>OR</span></label>
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
                    <ToastContainer/>
                </div>
          
        </div>
    </div>
   

</div>
  )
}

export default ForgotPassword