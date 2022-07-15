import React from 'react'

import io from "socket.io-client";
import { useEffect,useState } from 'react';

import HeaderFloating from '../../navbars/HeaderFloating';
import './ChatStyles.css'

import axios from 'axios';

import Chat from '../chat/Chat';

const socket = io.connect("http://localhost:3001");

let customId = "kx234";
socket.on("connect", () => {
socket.emit('storeClientInfo', { customId: customId });
});

function OrderChatsCustomer() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('9090');
  const [showChat, setShowChat] = useState(false);


  useEffect(()=>{

   // setIsDivLoading(true)

   
    axios.get('http://localhost:3001/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

      
      setUsername(response.data.username)
     
  
     })

     socket.emit("join_room", room);
     setShowChat(true);

    },[])


  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  return (


    <div>

    <HeaderFloating></HeaderFloating>


    <section class="py-6  mt-n1 mt-sm-0" style={{marginTop:'120px'}}>
    <div class="container">
        <div class="row justify-content-center text-center mb-5">
            <div class="col-xl-7 col-lg-10">
                <h2 class="font-weight-bold">Its time to choose the best seller</h2>
               
            </div>
        </div>


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
</section>


    
    
    
    
    </div>
  )
}
export default OrderChatsCustomer