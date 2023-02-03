
import { lazy, Suspense } from 'react';

import React, { useState, useEffect,useContext } from "react";

import {Formik,Form,Field, ErrorMessage} from "formik"
// import { useEffect,useState } from 'react';
//import './home.css';



import axios from 'axios';

import API from '../../../services';

import { useNavigate,Link} from "react-router-dom";


import * as Yup from "yup";


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './styles.css'

import { Helmet } from "react-helmet";



import { Modal, Button } from "react-bootstrap";
import { AuthContext } from "../../../helpers/AuthContext";
import TopHeader from "../../Dashboards/seller/TopHeader";
import HowToGetStarted from "./HowToGetStarted";
import FooterComponent from "./FooterComponent";
//import TopHeaderHome from "./TopHeaderHome";

const TopHeaderHome = lazy(() => import('./TopHeaderHome'));

function HomePatamtaani() {
    const { setAuthState } = useContext(AuthContext);

    const {authState} = useContext(AuthContext);
   

    const [first_name, setFirst_name] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [account_type, setAccount_type] = useState(1);

    const [password, setPassword] = useState("");



    
    const [show, setShow] = useState(false);


    const [nameinvalid,setnameinvalid]=useState(false);

    const [phoneNoInvalid,setPhoneNoInvalid]=useState(false);

    const [emailNoInvalid,setEmailNoInvalid]=useState(false);

    

    const [isLoading,setLoading]=useState(false);
    // const [password, setPassword] = useState("");

    let history = useNavigate();


    const handleShow = () =>{

        setLoading(true)

        setShow(true);
      
        setTimeout(() => {

        setLoading(false)

        history("/dashboard-vendor");
        window.location.reload(false);

      

        
    }, 4000);


      }


      const initialValues = {
        name:"",
        last_name:"",
        username:"",
        email:"",
        phoneNo:"",
        account_type:"",
        password:"",
        state:"",
        city:null,
        role:'Vendor',
      };


      const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

     
    
      const validationSchema = Yup.object().shape({

        name: Yup.string().min(3).max(40).required('Please enter your names'),

        phoneNo:  Yup.string().min(9).max(12).matches(phoneRegExp, 'Enter a valid phone number').required('Please enter your phone no'),

        email:Yup.string().email('Invalid email').required('Please enter your email'),

        password: Yup.string().min(4).max(20).required(),
      });


      const onSubmit = (data) => {
        setLoading(true);
        
     // axios.post("https://yoteorder-server.herokuapp.com/users", data).then((response) => {
        API.post("users", data).then((response) => {


            if(response.data.error) {

                setTimeout(() => {
                   
                    toast.error(response.data.error);
                    setLoading(false);
                   
                }, 1000);

                //alert();
                //setLoading(false);
              }



              setTimeout(() => {
                setLoading(false);

                console.log('THE PHONE NUMBER IS'+data.phoneNo)
      
      
                
             
            toast.info('Credentials saved!');

              
      
      
              
            }, 2000);

              


        });
      };





  

    
  return (
    <div class="main-body">

    <Helmet>

    <link href="assets_home/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet"></link>

    <link href="assets_home/css/style.css" rel="stylesheet"></link>

    <link href="assets_home/css/plugins.css" rel="stylesheet"></link>

    <link href="assets_home/css/icons.css" rel="stylesheet"></link>

    <link href="assets_home/switcher/css/switcher.css" rel="stylesheet"></link>

    <link href="assets_home/switcher/css/demo.css" rel="stylesheet"></link>

    
   
    
    
    </Helmet>

    

  
  
   
<div class="horizontalMenucontainer">

        <div id="global-loader" style={{display: "none"}}> 
        <img src="assets/images/products/products/loader.png" class="loader-img floating" alt="" />
        </div>



        <Suspense fallback={<div>Loading...</div>}>

          
        <TopHeaderHome></TopHeaderHome>


        </Suspense>



    

   
    


    





  
<section>
<div class="banner-1 cover-image sptb-2 sptb-tab bg-background2"
  data-bs-image-src="assets_home/images/banners/banner4d.jpg"
 >
  <div class="header-text mb-0">
    <div class="container">
      <div class="text-center text-white mb-7">
        <h1 class="mb-1">Software solutions for your business on subscription basis</h1>
        <p>Subscribe to any of our software products for a monthly fee of less than Ksh. 500</p>
      </div>
      <div class="row">
        {/* <div class="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
          <div class="search-background bg-transparent" data-select2-id="10">
            <div class="form row g-0 " data-select2-id="9">
              <div class="form-group  col-xl-4 col-lg-3 col-md-12 mb-0 bg-white "> <input type="text"
                  class="form-control input-lg br-te-md-0 br-be-md-0 border-start-0" id="text4"
                  placeholder="Product name"/> </div>
              <div class="form-group  col-xl-3 col-lg-3 col-md-12 mb-0 bg-white"> <input type="text"
                  class="form-control input-lg br-md-0 border-start-0" id="text5"
                  placeholder="Enter Location"/> <span><i
                    class="fa fa-map-marker location-gps me-1"></i></span> </div>
              <div class="form-group col-xl-3 col-lg-3 col-md-12 select2-lg  mb-0 bg-white"
                data-select2-id="8"> <select
                  class="form-control select2-show-search border-bottom-0 select2-hidden-accessible"
                  data-placeholder="Select Category" data-select2-id="1" tabindex="-1"
                  aria-hidden="true">
                  <optgroup label="Categories" data-select2-id="14">
                    <option data-select2-id="3">Select</option>
                    <option value="1" data-select2-id="15">Private</option>
                    <option value="2" data-select2-id="16">Software</option>
                    <option value="3" data-select2-id="17">Banking</option>
                    <option value="4" data-select2-id="18">Finaces</option>
                    <option value="5" data-select2-id="19">Corporate</option>
                    <option value="6" data-select2-id="20">Driver</option>
                    <option value="7" data-select2-id="21">Sales</option>
                  </optgroup>
                </select><span
                  class="select2 select2-container select2-container--default select2-container--below"
                  dir="ltr" data-select2-id="2" style={{width: "100%"}}><span class="selection"><span
                      class="select2-selection select2-selection--single" role="combobox"
                      aria-haspopup="true" aria-expanded="false" tabindex="0"
                      aria-labelledby="select2-jrf2-container"><span
                        class="select2-selection__rendered" id="select2-jrf2-container"
                        role="textbox" aria-readonly="true"
                        title="Private">Private</span><span class="select2-selection__arrow"
                        role="presentation"><b
                          role="presentation"></b></span></span></span><span
                    class="dropdown-wrapper" aria-hidden="true"></span></span> </div>
              <div class="col-xl-2 col-lg-3 col-md-12 mb-0"> <a href="#"
                  class="btn btn-lg btn-block btn-primary br-ts-md-0 br-bs-md-0">Search Here</a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
</div>
</section>



  

    
    <div class="row">
    <div class="col-md-12">
      <HowToGetStarted></HowToGetStarted>
    </div>
   </div>

<FooterComponent></FooterComponent>
    
    </div>


    <Helmet>



<script type="text/jsx" src="assets_home/js/jquery.js"></script>

<script src="assets_home/plugins/bootstrap/js/popper.min.js"></script>

<script type="text/jsx" src="assets_home/plugins/bootstrap/js/bootstrap.min.js"></script>

<script src="assets_home/js/vendors/jquery.sparkline.min.js"></script>

<script src="assets_home/js/vendors/circle-progress.min.js"></script>

<script src="assets_home/plugins/Horizontal2/Horizontal-menu/horizontal.js"></script>

<script src="assets_home/js/jquery.touchSwipe.min.js"></script>

<script src="assets_home/plugins/select2/select2.full.min.js"></script>

<script src="assets_home/js/select2.js"></script>
<script src="assets_home/js/sticky.js"></script>

<script src="assets_home/js/custom-sticky.js"></script>

<script src="assets_home/plugins/pscrollbar/pscrollbar.js"></script>

<script src="assets_home/js/swipe.js"></script>

<script src="assets_home/js/custom.js"></script>

<script src="assets_home/switcher/js/switcher.js"></script>


</Helmet>
  

</div>
  )
}

export default HomePatamtaani