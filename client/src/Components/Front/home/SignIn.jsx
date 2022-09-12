import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../helpers/AuthContext";


function SignIn() {


    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthState } = useContext(AuthContext);


  
    let history = useNavigate();
  
    const [isLoading,setLoading]=useState(false);


    const login = () => {
      
        const data = { username: username, password: password };
    
        setLoading(true);
       axios.post("http://localhost:3001/users/login", data).then((response) => {
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

  
    <div id="global-loader">
        <img src="assets/images/loader.svg" class="loader-img" alt="Loader"/>
    </div>

    <div class="page">
        <div class="">

       
            <div class="col col-login mx-auto mt-7">
                <div class="text-center">
                
                <a href='/'><img src="assets/images/brand/logo_pink.png" class="header-brand-img" alt=""/></a>
                </div>
            </div>

            <div class="container-login100">
                <div class="wrap-login100 p-6">
                    <form class="login100-form validate-form">
                        <span class="login100-form-title pb-5">
                            Login
                        </span>
                        <div class="panel panel-primary">
                            <div class="tab-menu-heading">
                                <div class="tabs-menu1">
                                  
                                    <ul class="nav panel-tabs">
                                        <li class="mx-0"><a href="#tab5" class="active" data-bs-toggle="tab">Email</a></li>
                                        <li class="mx-0"><a href="#tab6" data-bs-toggle="tab">Mobile</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="panel-body tabs-menu-body p-0 pt-5">
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tab5">
                                        <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                                            <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                                <i class="zmdi zmdi-email text-muted" aria-hidden="true"></i>
                                            </a>
                                            <input class="input100 border-start-0 form-control ms-0" type="email"
                                            
                                            onChange={(event) => {
                                                setUsername(event.target.value);
                                              }}
                                            
                                            placeholder="Email"/>
                                        </div>
                                        <div class="wrap-input100 validate-input input-group" id="Password-toggle">
                                            <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                                <i class="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
                                            </a>
                                            <input class="input100 border-start-0 form-control ms-0" type="password"
                                            
                                            onChange={(event) => {
                                                setPassword(event.target.value);
                                              }}
                                            
                                            placeholder="Password"/>
                                        </div>
                                        <div class="text-end pt-4">
                                            <p class="mb-0"><a href="forgot-password.html" class="text-primary ms-1">Forgot Password?</a></p>
                                        </div>
                                              <div class="container-login100-form-btn">



                                                  {!isLoading && <button type="button" class="login100-form-btn btn-primary" onClick={login}>Login</button>

                                                  }


                                                  {isLoading &&
                                                      <button id="wp-login-but" class="login100-form-btn btn-primary" data-mixval="1745" disabled>

                                                      <img src="assets/images/loader.svg" class="loader-img" alt="Loader"  style={{zIndex:1}}/>
                                                          Signing In</button>

                                                  }


                                                
                                              </div>
                                        <div class="text-center pt-3">
                                            <p class="text-dark mb-0">Not a member?<a href="/signup" class="text-primary ms-1">Sign UP</a></p>
                                        </div>
                                        <label class="login-social-icon"><span>Login with Social</span></label>
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
                                    </div>
                                    <div class="tab-pane" id="tab6">
                                        <div id="mobile-num" class="wrap-input100 validate-input input-group mb-4">
                                            <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                                <span>+91</span>
                                            </a>
                                            <input class="input100 border-start-0 form-control ms-0"/>
                                        </div>
                                        <div id="login-otp" class="justify-content-around mb-5">
                                            <input class="form-control text-center w-15" id="txt1" maxlength="1"/>
                                            <input class="form-control text-center w-15" id="txt2" maxlength="1"/>
                                            <input class="form-control text-center w-15" id="txt3" maxlength="1"/>
                                            <input class="form-control text-center w-15" id="txt4" maxlength="1"/>
                                        </div>
                                        <span>Note : Login with registered mobile number to generate OTP.</span>
                                        <div class="container-login100-form-btn ">
                                            <a href="javascript:void(0)" class="login100-form-btn btn-primary" id="generate-otp">
                                                Proceed
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
          
        </div>
    </div>
   

</div>
  )
}

export default SignIn