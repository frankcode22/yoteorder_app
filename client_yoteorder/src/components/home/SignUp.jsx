import React from 'react';

import {Formik,Form,Field, ErrorMessage} from "formik"
import { useEffect,useState } from 'react';
//import './home.css';

import axios from 'axios';

import { useNavigate } from "react-router-dom";


import * as Yup from 'yup';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import HeaderFloating from '../navbars/HeaderFloating';


function SignUp() {


    const [first_name, setFirst_name] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [account_type, setAccount_type] = useState(1);

    // const [password, setPassword] = useState("");





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
        role:'Seller',
    }

    const [isLoading,setLoading]=useState(false);

   

    const addDetails = ()  => {
        setLoading(true);

        //axios.post("https://ngeritbackend.herokuapp.com/users",data).then((response)=>{
        
       axios.post("http://localhost:3001/users",data).then((response)=>{

        console.log("The response is"+response.data)

        
            setTimeout(() => {
                setLoading(false);
                toast.info('Signed Up successfully');
            }, 3000);
         
           //  history("/dashboard");
          
           
        })

    }
  return (

    <div>

    <HeaderFloating></HeaderFloating>


    <section class="pt-6 cloud-pattern" style={{ backgroundImage: 'linear-gradient(225deg,#00cf8a,#0084d6)',marginTop:'80px' }}>
    <div class="container">
        <div class="row align-items-center justify-content-center justify-content-lg-between mb-6">
            <div class="col-lg-6 col-md-10 mb-5 mb-lg-0 text-center text-lg-left">
                <div class="d-none d-lg-block mb-2" data-aos="fade-up" >

                <div class="alert alert-modern text-white"  style={{backgroundColor:"#085781"}}>
                      <span class="badge badge-danger font-weight-medium badge-pill py-1 px-2 align-middle mr-2">News</span>
                      <span class="alert-content">Join YoteOrder App and Connect to millions of buyers near you</span>
                    </div>



                
                </div>

                <h1 class="title-lg" data-aos="fade-down" data-aos-easing="ease-in-out-back" data-aos-duration="1500">YoteOrder allows you to bid to thousands of buyers requests<span class="dot">.</span> </h1>

                <p data-aos="fade-down" data-aos-easing="ease-in-out-back" data-aos-delay="100" data-aos-duration="1500" class="mb-5 lg:maxw-md md:d-none">Just sell it by placing your bid</p>
              
                <figure class="md:d-none"> <picture> <source srcset=" https://assets.setmore.com/website/v2/images/start-now/setmore-clients-booking-calendar.webp, https://assets.setmore.com/website/v2/images/start-now/setmore-clients-booking-calendar@2x.webp 2x " type="image/webp"/> <source srcset=" https://assets.setmore.com/website/v2/images/start-now/setmore-clients-booking-calendar.png, https://assets.setmore.com/website/v2/images/start-now/setmore-clients-booking-calendar@2x.png 2x " type="image/png"/> <source srcset=" https://assets.setmore.com/website/v2/images/start-now/setmore-clients-booking-calendar-mob.webp, https://assets.setmore.com/website/v2/images/start-now/setmore-clients-booking-calendar-mob@2x.webp 2x " type="image/webp" media="(max-width: 767px)"/> <source srcset=" https://assets.setmore.com/website/v2/images/start-now/setmore-clients-booking-calendar-mob.png, https://assets.setmore.com/website/v2/images/start-now/setmore-clients-booking-calendar-mob@2x.png 2x " type="image/png" media="(max-width: 767px)"/> <img src="https://assets.setmore.com/website/v2/images/start-now/setmore-clients-booking-calendar.png" alt="Clients smiling using setmore"/> </picture> </figure>

               
          
            </div>
            
            <div class="col-xxl-4 col-lg-5 col-md-9" style={{marginTop:'80px'}} data-aos="fade-up" data-aos-delay="200">
      <div class="card shadow-lg p-3 p-xl-5">
           <div class="d-flex">
               <span class="mr-3 fs-32">👋</span>
               <div>
                   <h4 class="font-weight-bold mb-1">Request a FREE seller account </h4>
                  
               </div>
           </div>
           
           <hr/>

           
           
        
               <div class="form-row">
                   <div class="col-12">
                       <div class="form-group">
                           <label for="name">Name</label>
                         
                           <input type="text" class="form-control form-control-sm" id="first_name"
                           onChange={(event) => {
                            setFirst_name(event.target.value);
                          }}
                           
                           name="first_name" aria-describedby="name" placeholder="Mary Apondi"/>
                       </div>
                   </div>
                   <div class="col-12">
                       <div class="form-group">
                           <label for="number">Number</label>
                           
                           <input type="text" class="form-control form-control-sm" id="phone_no"  
                           onChange={(event) => {
                            setPhone_no(event.target.value);
                          }}
                           name="phone_no" aria-describedby="number" placeholder="+245 714 639 773"/>

                          
                       </div>
                   </div>
                   <div class="col-12">
                       <div class="form-group">
                           <label for="emailAddress">Email address</label>
                           <input type="email" class="form-control form-control-sm" 
                           onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                           
                           id="emailAddress"  name="email" aria-describedby="emailAddress" placeholder="kamau@email.com"/>
                       </div>
                   </div>
                   
                   <div class="col-12">

                   {!isLoading && <button type="submit" onClick={addDetails} class="btn btn-primary btn-md btn-block mt-3 waves-effect"  style={{backgroundColor:"#085781"}}>Submit</button>

                } 
                {isLoading &&
                    <button type="submit" class="btn btn-primary btn-md btn-block mt-3 waves-effect" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Contacting support...</button>
                }



                
                   </div>
                   <p class="text-muted font-size-sm mt-3 mb-0">By submitting, you agree to our <a class="font-weight-medium" href="">terms &amp; conditions</a></p>
               </div>

               

            <ToastContainer />
         
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

   </div>
      
      
    
      )
}

export default SignUp;
