import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../helpers/AuthContext";

import API from '../../../services';

function SignInNew() {

    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthState } = useContext(AuthContext);


  
    let history = useNavigate();
  
    const [isLoading,setLoading]=useState(false);


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
                history("/home_admin");
                window.location.reload(false);
            }, 1000);
    
            }

            else if(response.data.role=="User"){
    
                setTimeout(() => {
                  setLoading(false);
                  history('/home-user');
                  window.location.reload(false);
              }, 1000);
        
              }



          else if(response.data.role=="Vendor"){

         

         
    
            setTimeout(() => {
              setLoading(false);
              history('/home_retailer');
              window.location.reload(false);
          }, 1000);
    


          }

          else if(response.data.role=="Supplier"){

            setTimeout(() => {
              setLoading(false);
              history('/supplier_home');
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
      }

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
                    <h4>Please sign in to continue</h4>
                   

                    <button type="button" onClick={backHome} class="btn btn-success"> <i class="si si-arrow-left" data-bs-toggle="tooltip" title="" data-bs-original-title="si-arrow-left" aria-label="si-arrow-left"></i>Back Home</button>
                    <form>
                        <div class="form-group">
                            <label>Email</label><input class="form-control" placeholder="Enter your email" type="text"

                            onChange={(event) => {
                                setUsername(event.target.value);
                              }}
                            
                            />
                        </div>
                        <div class="form-group">
                            <label>Password</label> <input class="form-control" placeholder="Enter your password" type="password" 
                            
                            onChange={(event) => {
                                setPassword(event.target.value);
                              }}
                            
                           
                            
                            />
                        </div>



                        {!isLoading &&  <button onClick={login} class="btn btn-primary btn-block">Login</button>
            
                      } 
                      {isLoading &&
                        <button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled><div class="spinner-grow spinner-grow-sm me-2" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>Signing in...</button>
                      }
          


                       
                    </form>
                </div>
                <div class="main-signin-footer mt-3 mg-t-5">
                    <p><Link to="/forgot-password" class="text-primary ms-1">Forgot Password?</Link></p>
                    <p>Don't have an account? <Link to='/create_account' class="text-primary ms-1">Sign UP</Link></p>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default SignInNew