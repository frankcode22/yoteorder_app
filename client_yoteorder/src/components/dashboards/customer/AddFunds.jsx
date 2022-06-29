import React from 'react'
import HeaderFloating from '../../navbars/HeaderFloating'
import { useEffect,useState,useContext} from 'react';

import {useNavigate,useParams} from 'react-router-dom'

import { Helmet } from "react-helmet";

import axios from 'axios';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../../helpers/AuthContext'


function AddFunds() {

    let {id} = useParams();

    const {authState} = useContext(AuthContext);


    const [errorMessage, setErrorMessage] = useState("");

    const [amount, setAmount] = useState(40);

    // const [customerId, setCustomerId] = useState('');

    const [isDivLoading, setIsDivLoading] = useState(false);


    const [ordersList,setOrdersList] = useState([]);

    const [isLoading,setLoading]=useState(false);




    const order_details={
        OrderId:`${id}`,
        
      
        amount:amount,
        status:'unavailable',
        UserId:authState.id,
        SellerId:authState.id,
       
    }
   







    const confirmOrder = (orderId,customerId) => {


        setLoading(true);
        axios
        .post(
          "http://localhost:3001/running_orders",order_details).then((response)=>{
    
            console.log("The response is"+response.data)
    
            
                setTimeout(() => {
                    setLoading(false);
                    toast.info('Bid Placed Successfully ');
                }, 2000);
             
               //  history("/dashboard");
              
               
            })



            axios
            .post(
              "http://localhost:3001/order_payments",order_details).then((response)=>{
        
                console.log("The response is"+response.data)
        
                
                    setTimeout(() => {
                        setLoading(false);
                        toast.info('Bid Placed Successfully ');
                    }, 2000);
                 
                   //  history("/dashboard");
                  
                   
                })
    
    
      }


    

  return (
    <div>

    <Helmet>

    <link rel="stylesheet" href="/fonts/favland.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
    <link href="/css/theme.min.css" rel="stylesheet"/>



    </Helmet>

   <HeaderFloating/>

  

<section class="bg-light-primary py-6" style={{marginTop:'120px'}}>
<div class="container">
    <div class="row">
        <div class="col-lg-8 mb-4 mb-lg-0">
            <div class="card border-light" data-aos="fade-up" data-aos-delay="100">
                <div class="card-body p-lg-6">
                    <h2 class="font-weight-bold">Billing Information</h2>
                    <p class="text-muted mb-5">Please Fill All the Information</p>    
                    <hr class="pb-4"/>
                    <form>

                    <div class="form-row">
                    <div class="col-md px-2">
                        <div class="form-group">
                           <label for="fullName">Full name</label>
                           <input class="form-control" type="text" id="fullName" value="Francis Mbatha" placeholder="Francis Mbatha" aria-describedby="fullName"/>
                        </div>
                    </div>
                </div>
                        <div class="form-row">
                            <div class="col-md px-2">
                                <div class="form-group">
                                <label for="emailAddress">country</label>
                                <select class="custom-select">
                                    <option selected>Kenya</option>
                                    <option value="1">Kenya</option>
                                    <option value="2">Nigeria</option>
                                   
                                </select>
                                </div>
                            </div>
                            <div class="col-md px-2">
                                <div class="form-group">
                                    <label for="phoneNumber">Phone number</label>
                                    <input class="form-control" type="text" id="phoneNumber" placeholder="0714639774" aria-describedby="phoneNumber"/>
                                </div>
                            </div>
                        </div>
                       
                    
                       
                        
                     
                    </form>
                </div>
            </div>



            <div class="card blog-card border-0 mb-5" data-aos="fade-up" data-aos-delay="250">
            <div class="row">


            <div class="card-body p-lg-6 card light-shadow">
                    <h2 class="font-weight-bold">Pay Via Mpesa</h2>
                       
                    <hr class="pb-4"/>
                    <form>

                   
                        <div class="form-row">
                            <div class="col-md px-2">
                            <div class="form-group">
                            <label for="phoneNumber">Phone number</label>
                            <input class="form-control" type="text" id="phoneNumber" placeholder="" aria-describedby="phoneNumber"/>
                        </div>
                            </div>
                            <div class="col-md px-2">
                                <div class="form-group">
                                    <label for="phoneNumber">Till No Is</label>
                                    <input class="form-control" type="text" id="phoneNumber" placeholder="550065" aria-describedby="phoneNumber"/>
                                </div>
                            </div>
                        </div>
                       
                    
                       
                        <div class="form-row mt-5">
                            <div class="col-md px-2">
                                <button type="submit" onClick={confirmOrder} class="btn btn-primary font-size-sm">Pay By MPesa (ksh. 220)</button>
                            </div>
                        </div>
                     
                    </form>
                </div>
               

               
            </div>
        </div>



        <div class="card blog-card border-0 mb-5" data-aos="fade-up" data-aos-delay="250">
        <div class="row">


        <div class="card-body p-lg-6 card light-shadow">
                <h2 class="font-weight-bold">Pay Via Visa Card</h2>
                   
                <hr class="pb-4"/>
                <form>

               
                    <div class="form-row">
                        <div class="col-md px-2">
                        <div class="form-group">
                        <label for="phoneNumber">Card Number</label>
                        <input class="form-control" type="text" id="cardNo" placeholder="XXXX XXXX XXXX XXXX" aria-describedby="cardNo"/>
                    </div>
                        </div>
                        <div class="col-md px-2">
                            <div class="form-group">
                                <label for="expDate">Expiration Date</label>
                                <input class="form-control" type="text" id="expDate" placeholder="MM/YY" aria-describedby="expDate"/>
                            </div>
                        </div>

                        <div class="col-md px-2">
                            <div class="form-group">
                                <label for="phoneNumber">CVV</label>
                                <input class="form-control" type="text" id="cvv" placeholder="XXX" aria-describedby="cvv"/>
                            </div>
                        </div>
                    </div>
                   
                
                   
                    <div class="form-row mt-5">
                        <div class="col-md px-2">
                            <button type="submit" class="btn btn-primary font-size-sm">Add Funds (ksh. 220)</button>
                        </div>
                    </div>
                 
                </form>
            </div>
           

           
        </div>
    </div>






        </div>

        <div class="col-lg-4">
        <div class="card border-light text-center pt-2 pb-0 mb-4" data-aos="fade-up">

        <div class="card-body">
        <div class="mb-5">
        <h5 class="font-weight-semibold mb-3">Order Summary</h5>

            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="fullTimeJob" checked/>
                <label class="custom-control-label" for="fullTimeJob">Price</label>
                <label  >Kes. 300</label>
            </div>

            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="partTimeJob"/>
                <label class="custom-control-label" for="partTimeJob">Order Total</label>
                <label> Ksh.300</label>
            </div>
        </div>

        <div class="mb-5">
         <hr></hr>

            <div class="custom-control custom-checkbox">
               <p  class="text-muted mb-0">Funds will be held in your account until you get the order</p>
            </div>

            <div class="custom-control custom-checkbox">
            <a href="./careers-details.html#applyForJob" class="btn btn-primary w-100 w-sm-auto mb-2 mb-sm-0 waves-effect">Add funds</a>
            </div>

            
        </div>

      
    </div>
            <div class="card-body">
                

               
            
            </div>
            <div class="card-footer bg-soft-success border-0">
                <a href="mailto:sales@uichamp.com" class="d-inline-block link link-success">sales@uichamp.com</a>
            </div>
        </div>
        <div class="card border-light text-center py-2 mb-4" data-aos="fade-up">

        <div class="card light-shadow">
        <div class="card-body">
            <h4 class="h5 font-weight-bold mb-4">Popular Posts</h4>


            <div class="popular-post">
                <a href="" class="h6 font-weight-semibold link-unstyled text-limit-2-line line-height-reset mb-1">The 10 Most In-Demand Career and Business Skills for 2020</a>
                <div class="text-gray-500 font-size-sm">
                    <span><a href="" class="link-unstyled">Charline Mathis</a></span>
                    <span>• 5 min to read</span>
                </div>
            </div>
            <hr/>
            <div class="popular-post">
                <a href="" class="h6 font-weight-semibold link-unstyled text-limit-2-line line-height-reset mb-1">How To Succeed With People According To The Most Connected Man In Business</a>
                <div class="text-gray-500 font-size-sm">
                    <span><a href="" class="link-unstyled">Charline Mathis</a></span>
                    <span>• 5 min to read</span>
                </div>
            </div>
            <hr/>
            <div class="popular-post">
                <a href="" class="h6 font-weight-semibold link-unstyled text-limit-2-line line-height-reset mb-1">How training my brain to focus helped me to build two profitable businesses</a>
                <div class="text-gray-500 font-size-sm">
                    <span><a href="" class="link-unstyled">Charline Mathis</a></span>
                    <span>• 5 min to read</span>
                </div>
            </div>
            <hr/>
          
        </div>
    </div>
        
        </div>
        
    </div>
    </div>
</div>
</section>



<Helmet>

<script src="/js/jquery/jquery-3.5.1.min.js"></script>
<script src="/js/popper/popper.min.js"></script>
<script src="/js/bootstrap/bootstrap.min.js"></script>
<script src="/js/aos/aos.js"></script>
<script src="/js/wave-effect/waves.min.js"></script>

<script src="/js/parallax/simpleParallax.min.js"></script>
<script src="/js/swiper/swiper.min.js"></script>
<script src="/js/swiper/swiper.init.js"></script>
<script src="/js/shuffle/shuffle.min.js"></script>
<script src="/js/countup/countUp.js"></script>


<script src="/js/theme.js"></script>


</Helmet>
    
    
    
    
    </div>
  )
}

export default AddFunds