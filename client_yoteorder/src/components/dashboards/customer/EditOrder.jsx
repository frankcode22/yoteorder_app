import React from 'react'

import {useEffect,useState,useContext} from 'react';

import {useParams} from "react-router-dom"

import GoogleLogin from 'react-google-login';


import axios from 'axios';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../helpers/AuthContext";

import { Helmet } from "react-helmet";
import HeaderFloating from './HeaderFloating';

function EditOrder() {
    // let { item } = useParams();

    let { id } = useParams();

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

      const [ordered_item, setOrdered_item] = useState("");


      const [order_description, setOrder_description] = useState("Need just the best");


      const [quantity_ordered, setQuantity_Ordered] = useState("2");

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




      useEffect(() => {
        axios.get(`http://localhost:3001/order/orderById/${id}`).then((response) => {

            setOrdered_item(response.data.item_name)
            setOrder_description(response.data.order_description)
            
           
            setQuantity_Ordered(response.data.quantity_ordered)
            setUserId(response.data.user_id)
            
        //   setFirst_name(response.data.first_name);
        //   setLast_name(response.data.last_name)
    
        });


       



    }, []);





    



      const addOrder = ()  => {


        const order_detils={
          item_name:ordered_item,
          order_description:order_description,
          quantity_ordered:quantity_ordered,
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


    const editOrder = () => {
        setLoading(true);
  
  
     
  
        const data={
            item_name:ordered_item,
            order_description:order_description,
            quantity_ordered:quantity_ordered,
            customer_lat:lat,
            customer_longitude:lng,
            status:order_status,
            UserId:user_id,
           
        }
      
        axios.put("http://localhost:3001/order/updateorder/"+id, data).then((response) => {
      
      
              console.log("STATUS UPDATED "+response.data)
      
      
              setTimeout(() => {
                setLoading(false);
                toast.info('Order Updated');
                // navigate.push('/add-property');
                // history.push(`/description/${id}`)
            }, 1000);
         
        });
      };


  return (
    <div>

  <HeaderFloating></HeaderFloating>



    <div class="py-6" style={{marginTop:'150px'}}>
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
                        <div class="form-group col-md-4">
                   
                        <label for="inputState">Ordered Item/Service</label>
                          
            
                          <input type="hidden" id="price" class="form-control" 
            
            
                          
                          />
            
                          
                          <input type="text" id="nameWithTitle" class="form-control" placeholder="Enter Name"
            
                          value={ordered_item}


                          onChange={(event) => {
                            setOrdered_item(event.target.value);
                          }}

                          />
                        </div>

                        <div class="form-group col-md-4">
      <label for="inputState">Quantity</label>
      <select id="inputState" class="form-control" 

     
      
      onChange={(event) => {
        setQuantity_Ordered(event.target.value);
      }}>
        
        <option value={quantity_ordered} selected>{quantity_ordered}</option>

        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>

        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
    </div>
            
                        <div class="form-group col-md-4">
                        <label for="inputState">Detailed Description</label>
                            
                            
                               <textarea name="address" class="form-control" 
                               
                               onChange={(event) => {
                                setOrder_description(event.target.value);
                              }}
                               
                               id="order_description" rows="5" placeholder="Your Product desciption"></textarea>
                          </div>
            
                        <div class="col mb-3">
                        
            
                        { !isLoading &&  <button class="btn btn-primary form-control" onClick={editOrder} style={{backgroundColor:"#ff7b59"}}>Edit Order</button>
                          }
                       
                        {isLoading &&
                            <button type="submit" class="btn btn-primary form-control"  style={{color:'#000'}} disabled> <i class="fas fa-sync fa-spin"></i>Placing Bid...</button>
                        }
                  
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

            <ToastContainer />
            
          
        </div>
    </div>
</div>
    
    
    
    
    
    </div>
  )
}

export default EditOrder