import React from 'react'


import { useEffect,useState } from 'react';

import axios from 'axios';

import {useParams,useNavigate} from "react-router-dom"


import { Helmet } from "react-helmet";
import MainNav from '../../navbars/MainNav';

import LoadingSpinner from '../../../utils/LoadingSpinner';
import HeaderFloating from './HeaderFloating';



function MyOrders() {

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
        axios.get('http://localhost:3001/users/getmyorders', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
          setItem_name(response.data.item_name)
    
          setOrder_description(response.data.order_description)
    
          setOrderData(response.data)
    
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


    const myOrdersLoader = (

        <section class="py-6" style={{marginTop:'100px'}}>
    <div class="container">
        <div class="row justify-content-center text-center">
        <div class="card mb-5">
            <div class="col-xl-10 col-lg-9">
            <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Order Name</th>
                <th scope="col">Date</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>

            {ordersList.map((value, key) => {
                return (
              <tr>
                <th scope="row">{value.id}</th>
                <td>{value.item_name}</td>
                <td>{value.createdAt}</td>
                <td>Kes:340</td>
                <td>{value.status}</td>

                <td>

                <button>Delete</button>

                <button>Edit</button>
                
                
                </td>
              </tr>

              );
            })}
             
              
            </tbody>
          </table>
            </div>
        </div>
        </div>

    
    </div>
</section>




    )

  return (
    <div>

  <HeaderFloating/>


    {isDivLoading ? <LoadingSpinner/>: myOrdersLoader}

    {errorMessage && <div className="error">{errorMessage}</div>}




    

    </div>
  )
}

export default MyOrders