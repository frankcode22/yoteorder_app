import React from 'react'

import {useEffect,useState,useContext} from 'react';
import GoogleLogin from 'react-google-login';

import axios from 'axios';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from 'react-helmet'
import {useParams,Link,useNavigate} from "react-router-dom"

import { AuthContext } from '../../helpers/AuthContext'

function LogInModal() {

    const {authState} = useContext(AuthContext);

   const {setAuthState} = useContext(AuthContext);

   const [first_name, setFirst_name] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");

  let history = useNavigate();


  const [isLoading,setLoading]=useState(false);


  const isAuthenticated = localStorage.getItem("isAuthenticated")



  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );



  const navigate = useNavigate();


  console.log("THE AUTHENTICATION STATUS IS ",isAuthenticated)



  const login = () => {

      
          
    const data = { username: username, password: password };

    setLoading(true);
    // axios.post("https://ngeritbackend.herokuapp.com/users/login", data).then((response) => {
      axios.post("http://localhost:3001/users/login", data).then((response) => {
      if (response.data.error) {
        //alert(response.data.error);
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

        // setUserId(response.data.id)

      

        // addOrder()
        localStorage.setItem("isAuthenticated", "true");

        console.log("Response is",response.data)

        if(response.data.role=="Admin"){

          setTimeout(() => {
            setLoading(false);
            history("/new-dashboard");
        }, 3500);

        }

        else if(response.data.role=="Customer"){
          const isAuthenticated = localStorage.getItem("isAuthenticated");
          console.log("This is my authentication", isAuthenticated);

          setTimeout(() => {
            setLoading(false);
            history('/order/10');
            window.location.reload(false);
        }, 3500);
  
        }
      else if(response.data.role=="Seller"){

        setTimeout(() => {
          setLoading(false);
          history("/new_requests");
          window.location.reload(false);
      }, 1500);

      }
      else{
        setTimeout(() => {
          setLoading(false);
          history("/new-dashboard");
      }, 3500);


      }
      
      }
    });
  }



  const handleFailure = (result) => {
    // alert(result);
     console.log("Failure Error is"+ JSON.stringify(result))
   };
   
   const handleLogin = async (googleData) => {
     const res = await fetch('/api/google-login', {
       method: 'POST',
       body: JSON.stringify({
         token: googleData.tokenId,
       }),
       headers: {
         'Content-Type': 'application/json',
       },
     });
   
     const data = await res.json();
     setLoginData(data);
     localStorage.setItem('loginData', JSON.stringify(data));
   };



   const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };



  return (
    <div>



    <div class="modal fade" id="startTrialModal2" tabindex="-1" aria-labelledby="startTrialModalLabel2" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-xl">
<div class="modal-content overflow-hidden">
    <button type="button" class="modal-close close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>

    <div class="modal-body p-0">
    
    <div class="container">
        <div>


        
          

                <div class="card p-3 p-md-5">
                <h2 class="h3 font-weight-bold">Create an Account</h2>
                <p class="text-muted font-size-sm">100% Money-back guarantee, cancel any time.</p>

                <p class="font-size-sm">New user? <a data-toggle="modal" data-target="#startTrialModal3">Create an account</a></p>

                {loginData ? (
                    <div>
                      <h3>You logged in as {loginData.email}</h3>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  ) : (

                <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
              ></GoogleLogin>


              )}

                

                <div class="divider font-size-sm">Or Signup with</div>


                <form>
               
                <div class="form-row">
                    <div class="col-lg px-2">
                        <div class="form-group">
                            <label for="emailAddress">Email address</label>
                            <input class="form-control" type="email" id="emailAddress"
                            
                            onChange={(event) => {
                              setUsername(event.target.value);
                            }}
                            
                            placeholder="robertmatthews@email.com" aria-describedby="emailAddress"/>
                        </div>
                    </div>
                    <div class="col-lg px-2">
                        <div class="form-group">
                        <label>Password</label>
                        <div class="input-group password-input">
                            <input type="password" class="form-control rounded password"
                            
                            onChange={(event) => {
                              setPassword(event.target.value);
                            }}
                            placeholder="Enter your password" required=""/>
                            
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="pw-btn-toggle icon-eye"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="col-lg px-2">

                   {!isLoading && <button type="button" class="btn btn-primary font-size-sm" onClick={login}>Sign in</button>
                   } 

                  {isLoading &&
                  <button id="wp-login-but"  class="btn btn-primary font-size-sm" disabled>
                  <i class="fas fa-spinner fa-spin"></i>Signing In</button>
                 }
                      
                        <div class="small text-muted mt-3">By submitting this form you agree to our <a href="">terms and conditions</a>  and our <a href="">Privacy Policy</a>.</div>
                    
                    </div>
                </div>
                
            </form>
                
            </div>
        </div>
    </div>
    </div>

</div>
</div>
</div> 

    
    
    
    </div>
  )
}

export default LogInModal