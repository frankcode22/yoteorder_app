import React from 'react'
import { useEffect,useState } from 'react';

import axios from 'axios';

import {useParams,useNavigate} from "react-router-dom"




import { Helmet } from "react-helmet";
import MainNav from '../../navbars/MainNav';

import LoadingSpinner from '../../../utils/LoadingSpinner';
import HeaderFloating from '../customer/HeaderFloating'

//import '../../home/HighlyRated.css'


import io from "socket.io-client";

import Chat from "../chat/Chat";

//const socket = io.connect("http://localhost:3001");


function OrderView() {

    let {id} = useParams();


    const [errorMessage, setErrorMessage] = useState("");

    const [isDivLoading, setIsDivLoading] = useState(false);

    const [username, setUsername] = useState("Fedelis");
    const [room, setRoom] = useState("123");
    const [showChat, setShowChat] = useState(false);

    const [bidList,setBidList] = useState([]);

    let history = useNavigate();

    useEffect(()=>{

        setIsDivLoading(true);
  
        axios.get("http://localhost:3001/orderbids/sellerbids", 
        { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

            console.log("THE BID LIST IS"+response.data)
            
            

             setTimeout(() => {
                setBidList(response.data);
 
                // setSeller_name(response.data.Users);
                 setIsDivLoading(false)   // Hide loading screen 
                // toast.info('Product saved successfully');
             }, 1500);
 
             //setSeller_name(response.data.Users.first_name)
             
         }).catch(() => {
             setErrorMessage("Unable to fetch seller bids");
             setIsDivLoading(false);
          });
            
       
  
  },[]);



//   const orderReview = () => {
    

//     navigate('/')


//   };



const joinRoom = (orderId) => {

        history('/chat_seller/'+orderId);
  
    }



    const buyerSearchLoader = (

        <div class="row justify-content-center">
        
        
        <div class="col-12">
            <div class="tab-content" id="reviewsTabContent">
                <div class="tab-pane fade show active" id="customers" role="tabpanel" aria-labelledby="customers">
                <div class="row text-center justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div class="col-xl-9 col-lg-10">
                    <p class="mb-0 font-size-sm text-muted">Sellers recommended  by system <a href="">4</a></p>
                </div>
            </div>


                <hr></hr>
                    <div class="row row-cols-xl-4 row-cols-md-2 row-cols-1">
                     
                       
                     
                    {bidList.map((value, key) => {
                        return (
                        
                        <div class="col mb-3">
                        <div class="swiper-slide">
                        <div class="card card-event shadow-sm text-reset hover-shadow">

                            


                                <picture>
                                    <source srcset="./images/media/event-01.webp" type="image/webp"/>
                                    <source srcset="./images/media/event-01.jpg" type="image/jpg"/> 
                                    <img src="./images/media/event-01.jpg" alt="" class="card-img-top"/>
                                </picture>
                    
                                <div class="card-body">
                                    <div class="font-size-xs text-primary mb-3 text-uppercase font-weight-medium d-block">Seller</div>
                                    <div class="d-flex">
                                        <div class="text-right">
                                            <span class="font-size-xs d-block font-weight-medium text-uppercase mt-1 text-muted">Sep</span>
                                            <span class="h3 d-block font-weight-bold text-primary">25</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                <div class="avatar avatar-xs">
                                <a href="javascript:;">
                                    <img class="avatar-img rounded-circle" src="/images/avatar/user-6.jpg" alt=""/>

                                    </a>
                                </div>
            
                                <div class="ml-3">
                                <h6 class="font-size-sm font-weight-semibold line-height-1 mb-0">{value.User.first_name}</h6>

                                <p class="mb-0 font-size-sm text-muted">Completed Deliveries <a href="">24</a></p>

                              
                                <div class="rating-group mb-4">
                                <img src="/images/icons/star.svg" alt=""/>
                                <img src="/images/icons/star.svg" alt=""/>
                                <img src="/images/icons/star.svg" alt=""/>
                                <img src="/images/icons/star.svg" alt=""/>
                                <img src="/images/icons/rating.svg" alt=""/>
                            </div>
                            <span class="js_bid_block_total_price"> Ksh {value.Amount}                           </span>
                            </div>
                            </div>
                                    </div>

                                    
                                </div>

                               

                               

                                <div class="bg-gray-50 border-top border-light p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        
                                    <button class="badge badge-soft-warning border border-warning py-2 px-3"  onClick={() => {
                                        joinRoom(value.id);
                                      }}
                                      style={{color:'#000'}}>Chat</button>


                                        <button    onClick={() => {
                                            history('/order/pay/'+value.id+'/'+value.UserId);
                                          }} class="badge badge-soft-warning border border-warning py-2 px-3" style={{color:'#000'}}>Hire</button>

                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>



                            

                            
                        </div>
                        );
                    })}
    



                      

                      

                     

          
           
                        
                    </div>


                    <div class="row text-center justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="col-xl-9 col-lg-10">
                        <p class="mb-0 font-size-sm text-muted">Sellers Who placed their offers for your order <a href="">4</a></p>
                    </div>
                </div>


                    <hr></hr>


                     <div class="row row-cols-xl-4 row-cols-md-2 row-cols-1">
                     
                       
                     
                    
                        
                        <div class="col mb-3">
                        <div class="swiper-slide">
                        <div class="card card-event shadow-sm text-reset hover-shadow">

                            


                                <picture>
                                    <source srcset="./images/media/event-01.webp" type="image/webp"/>
                                    <source srcset="./images/media/event-01.jpg" type="image/jpg"/> 
                                    <img src="./images/media/event-01.jpg" alt="" class="card-img-top"/>
                                </picture>
                    
                                <div class="card-body">
                                    <div class="font-size-xs text-primary mb-3 text-uppercase font-weight-medium d-block">Seller</div>
                                    <div class="d-flex">
                                        <div class="text-right">
                                            <span class="font-size-xs d-block font-weight-medium text-uppercase mt-1 text-muted">Sep</span>
                                            <span class="h3 d-block font-weight-bold text-primary">25</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                <div class="avatar avatar-xs">
                                <a href="javascript:;">
                                    <img class="avatar-img rounded-circle" src="/images/avatar/user-6.jpg" alt=""/>

                                    </a>
                                </div>
            
                                <div class="ml-3">
                                    <h6 class="font-size-sm font-weight-semibold line-height-1 mb-0">Dennis Wanjala</h6>
                                    <div class="rating-group mb-4">
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/rating.svg" alt=""/>
                                </div>
                                <span class="js_bid_block_total_price"> Ksh 33.30                             </span>
                                </div>
                            </div>
                                    </div>

                                    
                                </div>

                               

                               

                                <div class="bg-gray-50 border-top border-light p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="badge badge-soft-warning border border-warning py-2 px-3"
                                        
                                    
                                        style={{color:'#000'}}>Chat</div>

                                        <button class="badge badge-soft-warning border border-warning py-2 px-3" style={{color:'#000'}}>Hire</button>

                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>



                            

                            
                        </div>



                        <div class="col mb-3">
                        <div class="swiper-slide">
                        <div class="card card-event shadow-sm text-reset hover-shadow">

                            


                                <picture>
                                    <source srcset="./images/media/event-01.webp" type="image/webp"/>
                                    <source srcset="./images/media/event-01.jpg" type="image/jpg"/> 
                                    <img src="./images/media/event-01.jpg" alt="" class="card-img-top"/>
                                </picture>
                    
                                <div class="card-body">
                                    <div class="font-size-xs text-primary mb-3 text-uppercase font-weight-medium d-block">Seller</div>
                                    <div class="d-flex">
                                        <div class="text-right">
                                            <span class="font-size-xs d-block font-weight-medium text-uppercase mt-1 text-muted">Sep</span>
                                            <span class="h3 d-block font-weight-bold text-primary">25</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                <div class="avatar avatar-xs">
                                <a href="javascript:;">
                                    <img class="avatar-img rounded-circle" src="/images/avatar/user-6.jpg" alt=""/>

                                    </a>
                                </div>
            
                                <div class="ml-3">
                                    <h6 class="font-size-sm font-weight-semibold line-height-1 mb-0">Dennis Wanjala</h6>
                                    <div class="rating-group mb-4">
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/rating.svg" alt=""/>
                                </div>
                                <span class="js_bid_block_total_price"> Ksh 33.30                             </span>
                                </div>
                            </div>
                                    </div>

                                    
                                </div>

                               

                               

                                <div class="bg-gray-50 border-top border-light p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="badge badge-soft-warning border border-warning py-2 px-3" style={{color:'#000'}}>Chat</div>

                                        <button class="badge badge-soft-warning border border-warning py-2 px-3" style={{color:'#000'}}>Hire</button>

                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>



                            

                            
                        </div>

                        <div class="col mb-3">
                        <div class="swiper-slide">
                        <div class="card card-event shadow-sm text-reset hover-shadow">

                            


                                <picture>
                                    <source srcset="./images/media/event-01.webp" type="image/webp"/>
                                    <source srcset="./images/media/event-01.jpg" type="image/jpg"/> 
                                    <img src="./images/media/event-01.jpg" alt="" class="card-img-top"/>
                                </picture>
                    
                                <div class="card-body">
                                    <div class="font-size-xs text-primary mb-3 text-uppercase font-weight-medium d-block">Seller</div>
                                    <div class="d-flex">
                                        <div class="text-right">
                                            <span class="font-size-xs d-block font-weight-medium text-uppercase mt-1 text-muted">Sep</span>
                                            <span class="h3 d-block font-weight-bold text-primary">25</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                <div class="avatar avatar-xs">
                                <a href="javascript:;">
                                    <img class="avatar-img rounded-circle" src="/images/avatar/user-6.jpg" alt=""/>

                                    </a>
                                </div>
            
                                <div class="ml-3">
                                    <h6 class="font-size-sm font-weight-semibold line-height-1 mb-0">Dennis Wanjala</h6>
                                    <div class="rating-group mb-4">
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/rating.svg" alt=""/>
                                </div>
                                <span class="js_bid_block_total_price"> Ksh 33.30                             </span>
                                </div>
                            </div>
                                    </div>

                                    
                                </div>

                               

                               

                                <div class="bg-gray-50 border-top border-light p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="badge badge-soft-warning border border-warning py-2 px-3" style={{color:'#000'}}>Chat</div>

                                        <button class="badge badge-soft-warning border border-warning py-2 px-3" style={{color:'#000'}}>Hire</button>

                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>



                            

                            
                        </div>

                        <div class="col mb-3">
                        <div class="swiper-slide">
                        <div class="card card-event shadow-sm text-reset hover-shadow">

                            


                                <picture>
                                    <source srcset="./images/media/event-01.webp" type="image/webp"/>
                                    <source srcset="./images/media/event-01.jpg" type="image/jpg"/> 
                                    <img src="./images/media/event-01.jpg" alt="" class="card-img-top"/>
                                </picture>
                    
                                <div class="card-body">
                                    <div class="font-size-xs text-primary mb-3 text-uppercase font-weight-medium d-block">Seller</div>
                                    <div class="d-flex">
                                        <div class="text-right">
                                            <span class="font-size-xs d-block font-weight-medium text-uppercase mt-1 text-muted">Sep</span>
                                            <span class="h3 d-block font-weight-bold text-primary">25</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                <div class="avatar avatar-xs">
                                <a href="javascript:;">
                                    <img class="avatar-img rounded-circle" src="/images/avatar/user-6.jpg" alt=""/>

                                    </a>
                                </div>
            
                                <div class="ml-3">
                                    <h6 class="font-size-sm font-weight-semibold line-height-1 mb-0">Dennis Wanjala</h6>
                                    <div class="rating-group mb-4">
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/rating.svg" alt=""/>
                                </div>
                                <span class="js_bid_block_total_price"> Ksh 33.30                             </span>
                                </div>
                            </div>
                                    </div>

                                    
                                </div>

                               

                               

                                <div class="bg-gray-50 border-top border-light p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="badge badge-soft-warning border border-warning py-2 px-3" style={{color:'#000'}}>Chat</div>

                                        <button class="badge badge-soft-warning border border-warning py-2 px-3" style={{color:'#000'}}>Hire</button>

                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>



                            

                            
                        </div>

        

           


          
           
                        
                    </div>

                    <div class="row text-center justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div class="col-xl-9 col-lg-10">
                            <p class="mb-0 font-size-sm text-muted">Trusted by companies who care about their customers rated 4.86/5 based on <a href="">19,456 reviews</a></p>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="expert" role="tabpanel" aria-labelledby="expert">
                    <div class="row row-cols-xl-4 row-cols-md-2 row-cols-1">
                        <div class="col mb-3">
                            <div class="testimonial-card testimonial-card-bg-1">
                                <div class="testimonial-body">
                                    <h5 class="font-size-sm line-height-reset mb-4">"I use Favland often. Wow what great template, I love it! Favland impressed me on multiple levels."</h5>

                                    <h6 class="font-size-sm font-weight-bold mb-0">Lindsy Clames</h6>
                                    <p class="small">Envanto Elements</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="testimonial-card testimonial-card-bg-2">
                                <div class="testimonial-body">
                                    <h5 class="font-size-sm line-height-reset mb-4">"I use Favland often. Wow what great template, I love it! Favland impressed me on multiple levels."</h5>

                                     <h6 class="font-size-sm font-weight-bold mb-0">Lindsy Clames</h6>
                                    <p class="small">Envanto Elements</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="testimonial-card testimonial-card-bg-1">
                                <div class="testimonial-body">
                                    <h5 class="font-size-sm line-height-reset mb-4">"I use Favland often. Wow what great template, I love it! Favland impressed me on multiple levels."</h5>

                                     <h6 class="font-size-sm font-weight-bold mb-0">Lindsy Clames</h6>
                                    <p class="small">Envanto Elements</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="testimonial-card testimonial-card-bg-2">
                                <div class="testimonial-body">
                                    <h5 class="font-size-sm line-height-reset mb-4">"I use Favland often. Wow what great template, I love it! Favland impressed me on multiple levels."</h5>

                                     <h6 class="font-size-sm font-weight-bold mb-0">Lindsy Clames</h6>
                                    <p class="small">Envanto Elements</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
      )

  return (
    <div>

   
   

 


    <Helmet>

    <link rel="stylesheet" href="/fonts/favland.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
    <link href="/css/theme.min.css" rel="stylesheet"/>



    </Helmet>


    <HeaderFloating/>


    <section class="py-6  mt-n1 mt-sm-0" style={{marginTop:'120px'}}>
    <div class="container">
        <div class="row justify-content-center text-center mb-5">
            <div class="col-xl-7 col-lg-10">
                <h2 class="font-weight-bold">Its time to choose the best seller</h2>
               
            </div>
        </div>

        
        {isDivLoading ? <LoadingSpinner/>: buyerSearchLoader}

        {errorMessage && <div className="error">{errorMessage}</div>}

       
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

export default OrderView