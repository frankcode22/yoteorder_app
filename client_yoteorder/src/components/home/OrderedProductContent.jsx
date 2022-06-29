import React from 'react'

import {useEffect,useState,useContext} from 'react';

import {useParams} from "react-router-dom"

import GoogleLogin from 'react-google-login';


import axios from 'axios';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../helpers/AuthContext";

import { Helmet } from "react-helmet";

export default function OrderedProductContent() {
    let { item } = useParams();

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
          ? JSON.parse(localStorage.getItem('loginData'))
          : null
      );

      const [first_name, setFirst_name] = useState("");
      const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [phone_no, setPhone_no] = useState("");

      const [user_id, setUserId] = useState(1);


      const [order_description, setOrder_description] = useState("");

      const [order_status, setOrderStatus] = useState("available");
      
      const [account_type, setAccount_type] = useState(1);


      const [orderId, setorderId] = useState('');
  
      // const [password, setPassword] = useState("");


      const [role, setRole] = useState("");
      const [password, setPassword] = useState("");
      const {setAuthState } = useContext(AuthContext);

      
    
      const [lat, setLat] = useState("-1.2865605");
      const [lng, setLng] = useState("36.9463368");
    
      let history = useNavigate();


      const [isLoading,setLoading]=useState(false);
    
    

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

            setUserId(response.data.id)

          

            addOrder()
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
              history("/seller-dashboard");
          }, 3500);
    
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
          role:'Customer',
      }
  
     
  
     
  
      const addDetails = ()  => {
          setLoading(true);
  
          //axios.post("https://ngeritbackend.herokuapp.com/users",data).then((response)=>{
          
         axios.post("http://localhost:3001/users",data).then((response)=>{
  
          console.log("The response is"+response.data)
  
          
              setTimeout(() => {
                addOrder()
                  setLoading(false);
                  toast.info('Signed Up successfully');
              }, 3000);
           
             //  history("/dashboard");
            
             
          })
  
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


      let ordered_item=localStorage.getItem('ordered_item')
      ordered_item=JSON.parse(ordered_item)


      const addOrder = ()  => {


        const order_detils={
          item_name:item,
          order_description:order_description,
          customer_lat:lat,
          customer_longitude:lng,
          status:order_status,
          UserId:user_id,
         
      }
     
        
       axios.post("http://localhost:3001/order",order_detils).then((response)=>{

        console.log("The order data is "+response.data)

        setorderId(response.data.id)


        console.log("THE ORDER ID IS "+response.data.id)




        
            setTimeout(() => {
                setLoading(false);
                toast.info('Signed Up successfully');
            }, 3000);
         
           //  history("/dashboard");
          
           
        })

    }

    const getOrderDetails=()=>{

      
      axios
      .get('http://localhost:3001/order/order/view/'+orderId)
      .then((response) => {


         setorderId(response.data.id)


      });



    }



  return (
    <div>


    <Helmet>

    <link rel="stylesheet" href="/fonts/favland.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
    <link href="/css/theme.min.css" rel="stylesheet"/>



    </Helmet>






    <div class="py-6" style={{marginTop:'120px'}}>
    <div class="container">
      

        <div class="row">
            <div class="col-12" data-aos="fade-up">
                <div class="card mb-5">
                    <div class="card-body bg-soft-primary">
                        <div class="card-title p-1 mb-0 ">
                            <div class="d-flex flex-column flex-md-row justify-content-md-between align-items-start align-items-md-center">
                                <div class="mb-3 mb-md-0">
                                    <h5 class="font-weight-bold mb-1">Getting Started</h5>
                                    <p class="mb-0 text-muted font-size-sm">Issues related to Integration of apps.</p>
                                </div>
                                <span class="badge badge-pill badge-primary py-1 px-2 border border-primary">03 Topics</span>
                            </div>
                        </div>
                    </div>

                    <div class="card-body border-top p-0">
                        <div class="accordion accordion-arrow-toggler" id="categoryGroup">


                    
                        <div class="card-body p-lg-6">
                            <h2 class="font-weight-bold">The product is available!</h2>
                            <p class="text-muted mb-5">Enter specific details, for sellers to bid</p>    
                            <hr class="pb-4"/>


                        <div class="row mb-5">
                        <div class="col mb-3">
                          <label for="nameWithTitle" class="form-label" style={{color: '#fff',fontWeight: '300!important'}}>Ordered Product/Service</label>
            
                          <input type="hidden" id="price" class="form-control" 
            
            
                          
                          />
            
                          
                          <input type="text" id="nameWithTitle" class="form-control" placeholder="Enter Name"
            
                          value={ordered_item}
                          
                        
                             
                          />
                        </div>
            
                        <div class="col mb-0" style={{padding: '0 10px'}}>
                            <label for="description" class="form-label">Detailed Description</label>
                            
                               <textarea name="address" class="form-control" 
                               
                               onChange={(event) => {
                                setOrder_description(event.target.value);
                              }}
                               
                               id="order_description" rows="5" placeholder="Your Product desciption"></textarea>
                          </div>
            
                        <div class="col mb-3">
                        <label class="form-label" for="multicol-country">Type</label>
            
                        <button class="btn btn-primary form-control"  data-toggle="modal" data-target="#startTrialModal2"  style={{backgroundColor:"#ff7b59"}}>Make Order</button>
                  
                      </div>
                      </div>

                      </div>
                   
                            
                        </div>
                    </div>

                    <div class="card-body text-right border-top">
                        <a href="#" class="font-size-sm font-weight-semibold">VIEW ALL POSTS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right icon-sm"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> </a>
                    </div>
                </div>
            </div>

            
            
          
        </div>
    </div>
</div>




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


<div class="modal fade" id="startTrialModal3" tabindex="-1" aria-labelledby="startTrialModalLabel3" aria-hidden="true">
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
                        <label for="firstName">Names</label>
                        <input class="form-control" type="text" id="firstName"
                        
                        onChange={(event) => {
                          setFirst_name(event.target.value);
                        }}
                         
                        placeholder="Robert" aria-describedby="firstName"/>
                    </div>
                </div>
                <div class="col-lg px-2">
                    <div class="form-group">
                        <label for="lastName">Phone Number</label>
                        <input class="form-control" type="text" id="phone_no"
                        
                        onChange={(event) => {
                          setPhone_no(event.target.value);
                        }}
                        
                        placeholder="eg. +254714639773" aria-describedby="Phone no"/>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-lg px-2">
                    <div class="form-group">
                        <label for="emailAddress">Email address</label>
                        <input class="form-control" type="email"
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                        
                        id="email" placeholder="damariskoki22@email.com" aria-describedby="emailAddress"/>
                    </div>
                </div>
                <div class="col-lg px-2">
                    <div class="form-group">
                    <label>Password</label>
                    <div class="input-group password-input">
                        <input type="password" class="form-control rounded password" placeholder="Enter your password" required=""/>
                        
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

                {!isLoading && <button type="submit" onClick={addDetails} class="btn btn-primary font-size-sm"  style={{backgroundColor:"#085781"}}>Submit</button>

              } 
              {isLoading &&
                  <button type="submit" class="btn btn-primary font-size-sm" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
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
