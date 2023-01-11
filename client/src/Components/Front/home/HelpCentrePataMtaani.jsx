import { lazy, Suspense } from 'react';

import React, { useState, useEffect,useContext } from "react";

import {Formik,Form,Field, ErrorMessage} from "formik"




import axios from 'axios';

import API from '../../../services';

import { useNavigate,Link} from "react-router-dom";


import * as Yup from "yup";


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './styles.css'

import { Helmet } from "react-helmet";




import { AuthContext } from "../../../helpers/AuthContext";
import TopHeader from "../../Dashboards/seller/TopHeader";
import HowToGetStarted from "./HowToGetStarted";
import FooterComponent from "./FooterComponent";
import { Modal, Button } from "react-bootstrap";
//import TopHeaderHome from "./TopHeaderHome";
import Player from './VideoPlayer';

const TopHeaderHome = lazy(() => import('./TopHeaderHome'));

function HelpCentrePataMtaani() {
    const { setAuthState } = useContext(AuthContext);

    const {authState} = useContext(AuthContext);
   

    const [first_name, setFirst_name] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [account_type, setAccount_type] = useState(1);

    const [password, setPassword] = useState("");


    const [showVideoModal, setShowVideoModal] = useState(false);
    
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


      const viewVideo = () =>{
      
          
   
        setShowVideoModal(true)
        
       
        
          };


          
       const closeDemoVideo = () =>{
        // setLoading(false)
       // e.preventDefault();
        //handleClose();
         setShowVideoModal(false);
         
        
         
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
  data-bs-image-src="assets/images/banners/banner1.jpg"
  style={{background: 'url("assets/images/banners/banner1.jpg") center center'}}>
  <div class="header-text mb-0">
    <div class="container">
      <div class="text-center text-white mb-7">
        <h1 class="mb-1">PataMtaani Help Centre</h1>
        <p>Get all the support you need</p>
      </div>
    
    </div>
  </div>
</div>
</section>


<section class="sptb">
<div class="container">
    <div class="col-md-12">
        <div class="items-gallery">
            <div class="items-blog-tab text-center">
                <h2 class="">We Operate With The Following Industries</h2>
                <div class="items-blog-tab-heading row">
                    <div class="col-12">
                        <ul class="nav items-blog-tab-menu">
                            <li class=""><a href="#tab-1" class="show active" data-bs-toggle="tab">Wines and Spirits</a></li>
                            <li><a href="#tab-2" data-bs-toggle="tab" class="">Business</a></li>
                            <li><a href="#tab-3" data-bs-toggle="tab" class="">Beauty</a></li>
                            <li><a href="#tab-4" data-bs-toggle="tab" class="">Real Estate</a></li>
                            <li><a href="#tab-5" data-bs-toggle="tab" class="">Restaurant</a></li>
                        </ul>
                    </div>
                </div>
                <div class="tab-content">
                    <div class="tab-pane active" id="tab-1">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="card mb-xl-0"> <span class="ribbon-1"> <span><i
                                                class="fa fa-cutlery"></i></span> </span>
                                    <div class="item-card8-img  rounded-top-7"> <img
                                            src="assets/images/products/f2.png" alt="img" class="cover-image"/>
                                    </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class=" fs-20 mb-0">Setting Up an Account</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                            <p class="text-muted">2 Jan 2023.</p>
                                            
                                            <h4 class="mb-2">Setting up vendor/business account</h4>
                                            <a class="btn btn-primary" onClick={() => {
                                                viewVideo();
                                                  }}>
                                                  
                                                        <i class="side-menu__icon fe fe-eye"></i>
                                                        <span>View demo video</span><i
                                                            class="angle fe fe-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="card mb-xl-0"> <span class="ribbon-2"> <span><i
                                                class="fa fa-home"></i></span> </span>
                                    <div class="item-card8-img  rounded-top-7"> <img
                                            src="../assets/images/products/h2.jpg" alt="img" class="cover-image"/>
                                    </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class="bg-primary fs-20 mb-0">Our Contacts</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                           
                                            <h4 class="font-weight-semibold">PataMtaani Contacts</h4>
                                            <p class="mb-0">0714639773 or 0780077090</p>
                                               

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="card mb-lg-0"> <span class="ribbon-3"> <span><i
                                                class="fa fa-paint-brush"></i></span> </span>
                                    <div class="item-card8-img  rounded-top-7"> <img
                                            src="../assets/images/products/j1.png" alt="img" class="cover-image"/>
                                    </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class="bg-info fs-20 mb-0">Electronic Mail</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                           
                                            <h4 class="font-weight-semibold">Electronic Mail</h4>
                                            <p class="mb-0">infor@patamtaani.com or frankcode20@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tab-2">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="card mb-xl-0"> <span class="ribbon-2"> <span><i
                                                class="fa fa-briefcase"></i></span> </span>
                                    <div class="item-card8-img  rounded-top-7"> <img
                                            src="../assets/images/products/f1.png" alt="img" class="cover-image"/>
                                    </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class="bg-primary fs-20 mb-0">Business</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                            <p class="text-muted">16 November 2018.</p>
                                            <h4 class="font-weight-semibold">Food &amp; Bar Restaurant</h4>
                                            <p class="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem
                                                ullam corporis suscipit laboriosam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="card mb-xl-0"> <span class="ribbon-1"> <span><i
                                                class="fa fa-briefcase"></i></span> </span>
                                    <div class="item-card8-img"> <img src="../assets/images/products/j2.png"
                                            alt="img" class="cover-image"/> </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class="bg-secondary fs-20 mb-0">Business</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                            <p class="text-muted">16 November 2018.</p>
                                            <h4 class="font-weight-semibold">Food &amp; Bar Restaurant</h4>
                                            <p class="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem
                                                ullam corporis suscipit laboriosam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="card mb-0"> <span class="ribbon-3"> <span><i
                                                class="fa fa-briefcase"></i></span> </span>
                                    <div class="item-card8-img"> <img src="../assets/images/products/j3.png"
                                            alt="img" class="cover-image"/> </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class="bg-info fs-20 mb-0">Business</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                            <p class="text-muted">16 November 2018.</p>
                                            <h4 class="font-weight-semibold">Food &amp; Bar Restaurant</h4>
                                            <p class="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem
                                                ullam corporis suscipit laboriosam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tab-3">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-12"> <span class="ribbon-3"> <span><i
                                            class="fa fa-paint-brush"></i></span> </span>
                                <div class="card mb-xl-0">
                                    <div class="item-card8-img  rounded-top-7"> <img
                                            src="../assets/images/products/b1.png" alt="img" class="cover-image"/>
                                    </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class="bg-info fs-20 mb-0">Spa</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                            <p class="text-muted">16 November 2018.</p>
                                            <h4 class="font-weight-semibold">Food &amp; Bar Restaurant</h4>
                                            <p class="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem
                                                ullam corporis suscipit laboriosam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="card mb-0"> <span class="ribbon-2"> <span><i
                                                class="fa fa-paint-brush"></i></span> </span>
                                    <div class="item-card8-img"> <img src="../assets/images/products/b2.png"
                                            alt="img" class="cover-image"/> </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class="bg-primary fs-20 mb-0">Spa</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                            <p class="text-muted">16 November 2018.</p>
                                            <h4 class="font-weight-semibold">Food &amp; Bar Restaurant</h4>
                                            <p class="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem
                                                ullam corporis suscipit laboriosam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="card mb-lg-0"> <span class="ribbon-1"> <span><i
                                                class="fa fa-paint-brush"></i></span> </span>
                                    <div class="item-card8-img  rounded-top-7"> <img
                                            src="../assets/images/products/j1.png" alt="img" class="cover-image"/>
                                    </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class="bg-secondary fs-20 mb-0">Spa</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                            <p class="text-muted">16 November 2018.</p>
                                            <h4 class="font-weight-semibold">Food &amp; Bar Restaurant</h4>
                                            <p class="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem
                                                ullam corporis suscipit laboriosam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tab-4">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-12"> <span class="ribbon-2"> <span><i
                                            class="fa fa-home"></i></span> </span>
                                <div class="card mb-xl-0">
                                    <div class="item-card8-img  rounded-top-7"> <img
                                            src="../assets/images/products/h4.png" alt="img" class="cover-image"/>
                                    </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class="bg-primary fs-20 mb-0">Real Estate</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                            <p class="text-muted">16 November 2018.</p>
                                            <h4 class="font-weight-semibold">Food &amp; Bar Restaurant</h4>
                                            <p class="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem
                                                ullam corporis suscipit laboriosam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="card mb-xl-0"> <span class="ribbon-3"> <span><i
                                                class="fa fa-home"></i></span> </span>
                                    <div class="item-card8-img"> <img src="../assets/images/products/h2.png"
                                            alt="img" class="cover-image"/> </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class="bg-info fs-20 mb-0">Real Estate</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                            <p class="text-muted">16 November 2018.</p>
                                            <h4 class="font-weight-semibold">Food &amp; Bar Restaurant</h4>
                                            <p class="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem
                                                ullam corporis suscipit laboriosam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="card mb-0"> <span class="ribbon-1"> <span><i
                                                class="fa fa-home"></i></span> </span>
                                    <div class="item-card8-img"> <img src="../assets/images/products/h3.png"
                                            alt="img" class="cover-image"/> </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class="bg-secondary fs-20 mb-0">Real Estate</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                            <p class="text-muted">16 November 2018.</p>
                                            <h4 class="font-weight-semibold">Food &amp; Bar Restaurant</h4>
                                            <p class="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem
                                                ullam corporis suscipit laboriosam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tab-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="card mb-xl-0"> <span class="ribbon-3"> <span><i
                                                class="fa fa-cutlery"></i></span> </span>
                                    <div class="item-card8-img  rounded-top-7"> <img
                                            src="../assets/images/products/f4.png" alt="img" class="cover-image"/>
                                    </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class="bg-info fs-20 mb-0">Restaurant</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                            <p class="text-muted">16 November 2018.</p>
                                            <h4 class="font-weight-semibold">Food &amp; Bar Restaurant</h4>
                                            <p class="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem
                                                ullam corporis suscipit laboriosam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="card mb-xl-0"> <span class="ribbon-1"> <span><i
                                                class="fa fa-cutlery"></i></span> </span>
                                    <div class="item-card8-img"> <img src="assets/images/products/f3.png"
                                            alt="img" class="cover-image"/> </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class="bg-secondary fs-20 mb-0">Restaurant</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                            <p class="text-muted">16 November 2018.</p>
                                            <h4 class="font-weight-semibold">Food &amp; Bar Restaurant</h4>
                                            <p class="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem
                                                ullam corporis suscipit laboriosam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="card mb-0"> <span class="ribbon-2"> <span><i
                                                class="fa fa-cutlery"></i></span> </span>
                                    <div class="item-card8-img"> <img src="../assets/images/products/f2.png"
                                            alt="img" class="cover-image"/> </div>
                                    <div class="item-card8-overlaytext">
                                        <h6 class="bg-primary fs-20 mb-0">Restaurant</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="item-card8-desc">
                                            <p class="text-muted">16 November 2018.</p>
                                            <h4 class="font-weight-semibold">Food &amp; Bar Restaurant</h4>
                                            <p class="mb-0">Ut enim ad minima veniam, quis nostrum exercitationem
                                                ullam corporis suscipit laboriosam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>




     
<Modal show={showVideoModal}>

<Modal.Header>
    <Modal.Title>How to set a vendor account</Modal.Title>
</Modal.Header>
<Modal.Body class="modal-body text-center p-4 pb-5">



<Player/>






</Modal.Body>
<Modal.Footer>



    <Button variant="secondary" onClick={closeDemoVideo}>
        Close
    </Button>


    {/* 
<Button variant="primary" onClick={handleClose}>
Save Changes
</Button> */}

</Modal.Footer>
</Modal>


             
          


         






        
  

    
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
export default HelpCentrePataMtaani