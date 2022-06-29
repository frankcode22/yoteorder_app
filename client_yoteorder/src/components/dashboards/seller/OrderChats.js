import React from 'react'

import io from "socket.io-client";
import { useEffect,useState } from 'react';

import HeaderFloating from './HeaderFloating';
import './ChatStyles.css'
import Chat from '../chat/Chat';

import axios from 'axios';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import LoadingSpinner from '../../../utils/LoadingSpinner';



import {useParams,useNavigate} from "react-router-dom"

import { Helmet } from "react-helmet";

const socket = io.connect("http://localhost:3001");

function OrderChats() {

     let {id} = useParams();

    const [username, setUsername] = useState("mbatha");
    const [room, setRoom] = useState("123");
    const [showChat, setShowChat] = useState(false);


    const [errorMessage, setErrorMessage] = useState("");

    const [amount, setAmount] = useState("");

    // const [customerId, setCustomerId] = useState('');

    const [isDivLoading, setIsDivLoading] = useState(false);


    const [ordersList,setOrderData] = useState([]);

    const [item_name,setItem_name] = useState("");

    const [orderId,setOrderId] = useState('');

    const [order_description,setOrder_description] = useState("");

    const [isLoading,setLoading]=useState(false);




  useEffect(()=>{

    setIsDivLoading(true)
    axios.get(`http://localhost:3001/order/orderById/${id}`).then((response) => {

      setItem_name(response.data.item_name)

      setOrder_description(response.data.order_description)

      setOrderId(response.data.id)

         setTimeout(() => {
          //setOrderData(response.data);
         
            // setSeller_name(response.data.Users);
             setIsDivLoading(false)   // Hide loading screen 
            // toast.info('Product saved successfully');
         }, 1000);

         //setSeller_name(response.data.Users.first_name)
         
     }).catch(() => {
         setErrorMessage("Unable to fetch your products list");
         setIsDivLoading(false);
      });
        
   


},[])







  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };



  const orderChatLoader = (

    <section class="py-6 bg-light-primary" id='openPositions' style={{marginTop:'120px'}}>
    <div class="container">
        <div class="row align-items-center justify-content-center justify-content-lg-between mb-6">
            <div class="col-lg-6 col-md-10 mb-5 mb-lg-0 text-center text-lg-left">

            <div class="card light-shadow mb-3" data-aos="fade-up" data-aos-delay="50">
            <div class="card-body">
                <div class="d-flex mb-3">
                    <span class="badge badge-primary mr-1">Fulltime</span>
                    <span class="badge badge-info mx-1">Remote</span>
                </div>

                <h4 class="font-weight-bold mb-0">{item_name}</h4>
                <p class="text-muted mb-0">Order Id:{orderId}</p>
                <p class="pt-4">{order_description}.</p>

                <div class="d-flex flex-column flex-sm-row align-items-center mt-5">
                    <a href="./careers-details.html#applyForJob" class="btn btn-primary w-100 w-sm-auto mb-2 mb-sm-0 waves-effect">Remove Bid</a>
                   
                </div>
            </div>
        </div>

                
            </div>
            
            <div class="col-xxl-4 col-lg-5 col-md-9" data-aos="fade-up" data-aos-delay="200">
               <div class="card shadow-lg p-3 p-xl-5">





             
               <div class="card light-shadow sticky-panel-top">
                   <div class="card-body">

                   {!showChat ? (
                       <div className="joinChatContainer">
                         <h3>Join A Chat</h3>
                         <input
                           type="text"
                           value={username}
                           placeholder="John..."
                           onChange={(event) => {
                             setUsername(event.target.value);
                           }}
                         />
                         <input
                           type="text"
                           placeholder="Room ID..."
                           value={room}
                           onChange={(event) => {
                             setRoom(event.target.value);
                           }}
                         />
                         <button onClick={joinRoom}>Join A Room</button>
                       </div>
                     ) : (
                       <Chat socket={socket} username={username} room={room} />
                     )}
                       

                      

                     
                   </div>
              
           </div>

                   
                    
                   
                    
                
               </div>
            </div>
        </div>   
    </div>

    <div class="text-white">
        <svg preserveAspectRatio="none" viewBox="0 0 2000 150" xmlns="http://www.w3.org/2000/svg">
          <polygon fill="currentColor" points="2000 0 2000 150 0 150"></polygon>
        </svg>
    </div>
</section>



  )


  return (
    <div>
    <HeaderFloating></HeaderFloating>

   


    {isDivLoading ? <LoadingSpinner/>: orderChatLoader}

    {errorMessage && <div className="error">{errorMessage}</div>}

  
    
    
    
    
    </div>
  )
}

export default OrderChats