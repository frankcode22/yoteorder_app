import React, { useState, useContext,useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../helpers/AuthContext";

import API from '../../../services';

import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import {useGoogleLogin} from '@react-oauth/google';

//import GoogleLogin from 'react-google-login';

import { gapi } from 'gapi-script';

import { CLIENT_ID } from "../../../services/config";

import useFetch from "../../../services/useFetch";

function SignInNew() {

    // const { CLIENT_ID } = useConfig();
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthState } = useContext(AuthContext);

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [hasError, setHasError] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const [retry, setRetry] = useState(false);
    const [retryCount, setRetryCount] = useState(0);
    const maxRetries = 3;


  
    let history = useNavigate();
  
    const [isLoading,setLoading]=useState(false);


    function handleCredentialResponse(response){
      console.log('jwt token',response.credential)
    }


    const { handleGoogle, loading, err } = useFetch(
      "https://apibackend.patamtaani.com/api/users/signup_google"
    );



    useEffect(() => {


      /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("loginDiv"), {
        // type: "standard",
        theme: "filled_black",
        // size: "small",
        text: "signin_with",
        shape: "pill",
      });

      // google.accounts.id.prompt()
    }

     
      if (hasError && retryCount < maxRetries) {
        setTimeoutId(setTimeout(() => {
          login();
        }, 1000));
      }
    }, [hasError, retryCount,handleGoogle]);


    function onClickHandler() {
      // Sign in the user
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signIn().then(googleUser => {
        const idToken = googleUser.getAuthResponse().id_token;
        // Send the idToken to your server for authentication
      });
    }


    const login_google = useGoogleLogin({
      onSuccess: async respose => {
          try {
              const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                  headers: {
                      "Authorization": `Bearer ${respose.access_token}`
                  }
              })

              console.log(res.data)
          } catch (err) {
              console.log(err)

          }

      }
  });



  const handleLogin = async googleData => {
    const res = await fetch("https://apibackend.patamtaani.com/api/users/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    // store returned user somehow
  }
  

 
  

  
      async function login(){

        setLoading(true);
        setError(null);

        try{
      
        const data = { username: username, password: password };
    
       // setLoading(true);
        await API.post("users/login", data).then((response) => {
        //axios.post("https://yoteorder-server.herokuapp.com/users/login", data).then((response) => {
          if (response.data.error) {
            alert(response.data.error);
            setLoading(false);
          } else {
            const data = response.data;
            const token = data.token;
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
              localStorage.setItem('accessToken', token);
              setTimeout(() => {
                setLoading(false);
                history("/home_admin");
                window.location.reload(false);
            }, 500);
    
            }

            else if(response.data.role=="User"){
    
                setTimeout(() => {
                  setLoading(false);
                  history('/home-user');
                  window.location.reload(false);
              }, 500);
        
              }



          else if(response.data.role=="Vendor"){

         

           // localStorage.clear();
            localStorage.setItem('accessToken', token);
    
            setTimeout(() => {
            
           
              setLoading(false);
             // history('/home_retailer');
              //window.location.reload(false);
              window.location.pathname = "/home_retailer";
          }, 500);
    


          }

          else if(response.data.role=="Supplier"){

            localStorage.setItem('accessToken', token);

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

        setTimeout(() => {
          setLoading(false);
          
         
      }, 1000);

      } catch (error) {
        setLoading(false);
        setError("An error occurred. Please try again.");
      }
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
            <div class="sign-up-body col-xl-6 col-lg-12 col-md-12 col-sm-12 wd-md-50p">
                <div class="main-signin-header">
                    <h2>Welcome back!</h2>
                    <h4>Please sign in to continue</h4>

                    {/* <button onClick={login_google}>
                    <i class="fa-brands fa-google"></i>
                    Continue with google
                </button> */}
                {/* <GoogleLogin
                    onSuccess={credentialResponse => {
                    console.log(credentialResponse.credential);
                    var decoded = jwt_decode(credentialResponse.credential);
                    console.log('RES DATA DECODED',decoded)
                }}
                    onError={() => {
                    console.log('Login Failed');
                }}/> */}



{/* <GoogleLogin
    clientId={process.env.GOOGLE_CLIENT_ID}
    buttonText="Log in with Google"
    onSuccess={handleLogin}
    onFailure={handleLogin}
   
/> */}


{err && <p style={{ color: "red" }}>{err}</p>}
        {loading ? <div>Loading....</div> : <div id="loginDiv"></div>}


                


 
                   

                    {/* <button type="button" onClick={backHome} class="btn btn-success"> <i class="si si-arrow-left" data-bs-toggle="tooltip" title="" data-bs-original-title="si-arrow-left" aria-label="si-arrow-left"></i>Back Home</button> */}
                    {error && !retry && <div className="error">{error}</div>}
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