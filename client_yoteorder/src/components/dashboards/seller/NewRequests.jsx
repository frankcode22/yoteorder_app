import React from 'react'

import { useEffect,useState } from 'react';

import {useParams,useNavigate} from "react-router-dom"




import { Helmet } from "react-helmet";
import MainNav from '../../navbars/MainNav';

import LoadingSpinner from '../../../utils/LoadingSpinner';
import HeaderFloating from './HeaderFloating';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import axios from 'axios';


import io from "socket.io-client";

import Chat from "../chat/Chat";

//const socket = io.connect("http://localhost:3001");


function NewRequests() {
    let {id} = useParams();


    const [errorMessage, setErrorMessage] = useState("");

    const [amount, setAmount] = useState(0);

    const [quantityOrdered, setQuantityOrdered] = useState('');

    // const [customerId, setCustomerId] = useState('');

    const [isDivLoading, setIsDivLoading] = useState(false);


    const [ordersList,setOrdersList] = useState([]);

    const [isLoading,setLoading]=useState(false);

    const [username, setUsername] = useState('');
    const [room, setRoom] = useState("123");
    const [showChat, setShowChat] = useState(false);


    const [books, updateBooks] = React.useState([]);

    // const [itemId, setitemId] = useState("");

    let history = useNavigate();



    useEffect(()=>{

        setIsDivLoading(true);

        


   
  
        axios.get("http://localhost:3001/order/getallorders").then((response) => {
            // axios.get(`https://ngeritbackend.herokuapp.com/product/search/${item}`).then((response) => {
 
            
 
          
             setTimeout(() => {
                 setOrdersList(response.data);
 
                // setSeller_name(response.data.Users);
                 setIsDivLoading(false)   // Hide loading screen 
                // toast.info('Product saved successfully');
             }, 2000);
 
             //setSeller_name(response.data.Users.first_name)
             
         }).catch(() => {
             setErrorMessage("Unable to fetch your products list");
             setIsDivLoading(false);
          });
            
       
  
  
  },[]);


 const handleFormchange = (e, quantity) => {
    setQuantityOrdered({[quantity] : e.target.value})
  }


  const placeBid = (orderId,customerId) => {

    let total_amount=amount * quantityOrdered

    console.log('THE TOTAL AMOUNT IS '+quantityOrdered)

    setLoading(true);
    axios
    .post(
      "http://localhost:3001/orderbids",
      { CustomerId: customerId,OrderId: orderId,Amount:total_amount},
      { headers: { accessToken: localStorage.getItem("accessToken") } }
    ).then((response)=>{

        console.log("The response is"+response.data)

        
            setTimeout(() => {
                setLoading(false);
                toast.info('Bid Placed Successfully ');
            }, 2000);
         
           //  history("/dashboard");
          
           
        })


  }




  const joinRoom = (id) => {


   
        history('/chat/'+id);
      
  
  
    }



   const onChange = (index, food) => {
    setOrdersList(prevState => {
          const ordersList = [...prevState.ordersList];
          ordersList[index] = food;
          return { ordersList };
        });
      };
    


  const chatClient = (orderId,customerId) => {


    setLoading(true);
    axios
    .post(
      "http://localhost:3001/orderbids",
      { CustomerId: customerId,OrderId: orderId,Amount:amount },
      { headers: { accessToken: localStorage.getItem("accessToken") } }
    ).then((response)=>{

        console.log("The response is"+response.data)

        
            setTimeout(() => {
                setLoading(false);
                toast.info('Bid Placed Successfully ');
            }, 2000);
         
           //  history("/dashboard");
          
           
        })


  }


  const buyerSearchLoader = (

    <div class="row justify-content-center">
    
    
    <div class="col-12">
        <div class="tab-content" id="reviewsTabContent">
            <div class="tab-pane fade show active" id="customers" role="tabpanel" aria-labelledby="customers">
            <div class="row text-center justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div class="col-xl-9 col-lg-10">
                <p class="mb-0 font-size-sm text-muted">Kindly bid only the relevant requests <a href="">4</a></p>
            </div>
        </div>


            <hr></hr>
                <div class="row row-cols-xl-4 row-cols-md-2 row-cols-1">
                 
                   
                 
                {ordersList.map((value, index) => 
                     (
                    
                    <div class="col mb-3">
                    <div class="swiper-slide">
                    <div class="card card-event shadow-sm text-reset hover-shadow">

                        


                            <picture>
                                <source srcset="./images/media/event-01.webp" type="image/webp"/>
                                <source srcset="./images/media/event-01.jpg" type="image/jpg"/> 
                                <img src="./images/media/event-01.jpg" alt="" class="card-img-top"/>
                            </picture>
                
                            <div class="card-body">
                                <div class="font-size-xs text-primary mb-3 text-uppercase font-weight-medium d-block">Buyer</div>
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
                                <div class="rating-group mb-4">
                                <img src="/images/icons/star.svg" alt=""/>
                               
                                <img src="/images/icons/rating.svg" alt=""/>
                            </div>

                            <p class="text-muted font-weight-medium font-size-sm">
                                                            <i class="icon-map-pin mr-2"></i>Item:{value.item_name}
                                                       </p>

                                                       <p class="font-size-sm"> {value.order_description}</p>

                                                       <p class="font-size-sm">Quantity Ordered: {value.quantity_ordered}</p>

                            

                           
                            <span class="js_bid_block_total_price"> 

                            <input type="number" class="form-control form-control-sm" 

                            key={value.id}
                          
                            onChange={(event) => {
                                setQuantityOrdered(event.target.value);
                              }}


                            value={value.quantity_ordered} name="quantity_ordered"

                        
                            

                            
                           /> 

                             <input type="number" class="form-control form-control-sm" id="bid_amount"

                             onChange={(event) => {
                                setAmount(event.target.value);
                              }}
                            
                            
                            name="bid_amount" aria-describedby="name"/> 
                            
                            </span>
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


                                    {!isLoading && <button type="submit" onClick={() => {
                                        placeBid(value.id,value.UserId);
                                      }}  class="badge badge-soft-warning border border-warning py-2 px-3"  style={{color:'#000'}}>Place Bid</button>

                                } 
                                {isLoading &&
                                    <button type="submit" class="badge badge-soft-warning border border-warning py-2 px-3"  style={{color:'#000'}} disabled> <i class="fas fa-sync fa-spin"></i>Placing Bid...</button>
                                }

                                  

                                   
                                   
                                </div>
                            </div>
                        </div>
                    </div>



                        

                        
                    </div>

                    ))}

                    <ul>
                    {books.map(book => (
                     <li key={book.id}>{book.name}</li>  
                    ))};
                </ul>
                <ToastContainer />
                   
       
                    
                </div>


               


                <hr></hr>


                

               
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

export default NewRequests