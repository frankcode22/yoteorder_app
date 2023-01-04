
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
    <div class="main-body login-img">

    <Helmet>

    <link href="/assets/css/homeStyles.css" rel="stylesheet"></link>
    
    
    </Helmet>

    

  
    <div id="global-loader">
        <img src="../assets/img/loaders/loader-4.svg" class="loader-img" alt="Loader"/>
    </div>
   
<div class="page">

    
    <div class="my-auto h-100 page">

    


    <div class="main-header side-header sticky nav nav-item">



   
    <div id="sticky-wrapper" class="sticky-wrapper" style={{height: '87px'}}><div class="horizontal-main bg-dark-transparent clearfix" style={{width: '1583'}}> <div class="horizontal-mainwrapper container clearfix"> <div class="desktoplogo"> <a href="index.html"><img src="assets/images/brand/logo1.png" alt=""/></a> </div> <div class="desktoplogo-1"> <a href="index.html"><img src="assets/images/brand/logo.png" alt=""/></a> </div>
    <nav class="horizontalMenu clearfix d-md-flex"><div class="overlapblackbg"></div> <ul class="horizontalMenu-list"> <li aria-haspopup="true"><span class="horizontalMenu-click"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#" class="active">Home <span class="fa fa-caret-down m-0"></span></a> <ul class="sub-menu"> <li aria-haspopup="true" class="active"><a href="index.html" class="active">Home-default</a></li> <li aria-haspopup="true"><a href="classifieds-text.html">Home style-1</a></li> <li aria-haspopup="true"><a href="classifieds-slides.html">Home style-2</a></li> <li aria-haspopup="true"><a href="classifieds-video.html">Home style-3</a></li> <li aria-haspopup="true"><a href="classifieds-animation.html">Home style-4 </a></li> <li aria-haspopup="true"><a href="classifieds-map.html">Home style-5</a></li> <li aria-haspopup="true"><a href="intro-page.html">Home Intro Page</a></li> <li aria-haspopup="true"><a href="popup-login.html">Home Pop-up login</a></li> <li aria-haspopup="true"><a href="banner.html">Banners</a></li> </ul> </li> <li aria-haspopup="true"><a href="about.html">About Us </a></li> <li aria-haspopup="true"><a href="widgets.html">Widgets</a></li> <li aria-haspopup="true"><span class="horizontalMenu-click"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#">Pages <span class="fa fa-caret-down m-0"></span></a> <div class="horizontal-megamenu clearfix"> <div class="container"> <div class="megamenu-content"> <div class="row"> <ul class="col link-list"> <li class="title">Custom pages</li> <li><a href="classifieds-list.html">Classifieds List</a></li> <li><a href="classifieds-list-right.html">Classifieds List Right</a></li> <li><a href="classifieds-list-map.html">Classifieds Map list</a></li> <li><a href="classifieds-list-map2.html">Classifieds Map list 02</a></li> <li><a href="classifieds-list-map3.html">Classifieds Map style 03</a></li> <li><a href="ad-list.html">Ad Listing</a></li> <li><a href="ad-list-right.html">Ad Listing Right</a></li> <li><a href="ad-details.html">Ad Details</a></li> <li><a href="ad-details-right.html">Ad Details Right</a></li> </ul> <ul class="col link-list"> <li class="title">Custom pages</li> <li><a href="categories.html">Categories</a></li> <li><a href="inovice.html">Invoice</a></li> <li><a href="usersall.html">User Lists</a></li> <li><a href="ad-posts.html">Ad Posts</a></li> <li><a href="edit-posts.html">Edit Posts</a></li> <li><a href="ad-posts2.html">Ad Posts2</a></li> <li><a href="edit-posts2.html">Edit Posts2</a></li> <li><a href="pricing.html">Pricing</a></li> <li><a href="typography.html">Typography</a></li> </ul> <ul class="col link-list"> <li class="title">User pages</li> <li><a href="userprofile.html"> User Profile</a></li> <li><a href="mydash.html">My Dashboard</a></li> <li><a href="myads.html">Ads</a></li> <li><a href="myfavorite.html">Favorite Ads</a></li> <li><a href="manged.html">Manged Ads</a></li> <li><a href="payments.html">Payments</a></li> <li><a href="orders.html"> Orders</a></li> <li><a href="settings.html"> Settings</a></li> <li><a href="tips.html">Tips</a></li> </ul> <ul class="col link-list"> <li class="title">User pages</li> <li><a href="underconstruction.html">Under Constructions</a></li> <li><a href="404.html">404</a></li> 
    <li><a href="register.html">Register</a></li> <li><a href="login.html">Login</a></li> <li><a href="login-2.html">Login 02</a></li> <li><a href="forgot.html">Forgot Password</a></li> <li><a href="lockscreen.html">Lock Screen</a></li> <li><a href="faq.html">Faq</a></li> </ul> <ul class="col link-list"> <li class="title">User pages</li> <li><a href="header-style1.html">Header Style 01</a></li> <li><a href="header-style2.html">Header Style 02</a></li> <li><a href="header-style3.html">Header Style 03</a></li> <li><a href="header-style4.html">Header Style 04</a></li> <li><a href="footer-style.html">Footer Style 01</a></li> <li><a href="footer-style2.html">Footer Style 02</a></li> <li><a href="footer-style3.html">Footer Style 03</a></li> <li><a href="footer-style4.html">Footer Style 04</a></li> </ul> </div> </div> </div> </div> </li> <li aria-haspopup="true"><span class="horizontalMenu-click"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#">Blog <span class="fa fa-caret-down m-0"></span></a> <ul class="sub-menu"> <li aria-haspopup="true"><span class="horizontalMenu-click02"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#">Blog Grid <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></a> <ul class="sub-menu"> <li aria-haspopup="true"><a href="blog-grid.html">Blog Grid Left</a></li> <li aria-haspopup="true"><a href="blog-grid-right.html">Blog Grid Right</a></li> <li aria-haspopup="true"><a href="blog-grid-center.html">Blog Grid Center</a></li> </ul> </li> <li aria-haspopup="true"><span class="horizontalMenu-click02"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#">Blog List <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></a> <ul class="sub-menu"> <li aria-haspopup="true"><a href="blog-list.html">Blog List Left</a></li> <li aria-haspopup="true"><a href="blog-list-right.html">Blog List Right</a></li> <li aria-haspopup="true"><a href="blog-list-center.html">Blog List Center</a></li> </ul> </li> <li aria-haspopup="true"><span class="horizontalMenu-click02"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#">Blog Details <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></a> <ul class="sub-menu"> <li aria-haspopup="true"><a href="blog-details.html">Blog Details Left</a></li> <li aria-haspopup="true"><a href="blog-details-right.html">Blog Details Right</a></li> <li aria-haspopup="true"><a href="blog-details-center.html">Blog Details Center</a></li> </ul> </li> </ul> </li> <li aria-haspopup="true"><span class="horizontalMenu-click"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#">Categories <span class="fa fa-caret-down m-0"></span></a> <ul class="sub-menu"> <li aria-haspopup="true"><a href="classified.html">Classifieds Left</a></li> <li aria-haspopup="true"><a href="classified-right.html">Classifieds Rights </a></li> <li aria-haspopup="true"><a href="switcher.html">Switcher</a></li> <li aria-haspopup="true"><span class="horizontalMenu-click02"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#">Submenu-01<i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></a> <ul class="sub-menu"> <li aria-haspopup="true"><a href="#">SubmenuLevel-01</a></li> <li aria-haspopup="true"><a href="#">SubmenuLevel-02</a></li> <li aria-haspopup="true"><span class="horizontalMenu-click02"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#">SubmenuLevel-03<i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></a> <ul class="sub-menu"> <li aria-haspopup="true"><a href="#">SubmenuLevel-11</a></li> <li aria-haspopup="true"><a href="#">SubmenuLevel-12</a></li> <li aria-haspopup="true"><a href="#">SubmenuLevel-13</a></li> </ul> </li> </ul> </li> </ul> </li> <li aria-haspopup="true"><a href="contact.html"> Contact Us <span class="wsarrow"></span></a></li> <li aria-haspopup="true" class="d-lg-none mt-5 pb-5 mt-lg-0"> <span><a class="btn btn-orange" href="ad-posts.html">Post Free Ad</a></span> </li> </ul> <ul class="mb-0"> <li aria-haspopup="true" class="mt-5 d-none d-lg-block "> <span><a class="btn btn-orange ad-post " href="ad-posts.html">Post Free Ad</a></span> </li> </ul> </nav>  </div>
     </div></div>




    


             
            </div>


            <div class="my-auto h-100 page">
			<div class="main-signin-wrapper">

            <div class="main-container container-fluid">

            <div class="row">


            <div class="col-md-12">
						<div class="card custom-card">
							<div class="card-body ht-100p">

              
								
								<div>
									<div class="carousel slide" data-bs-ride="carousel" id="carouselExample4">
										<ol class="carousel-indicators">
											<li class="active" data-bs-slide-to="0" data-bs-target="#carouselExample4"></li>
											<li data-bs-slide-to="1" data-bs-target="#carouselExample4"></li>
											<li data-bs-slide-to="2" data-bs-target="#carouselExample4"></li>
										</ol>
										<div class="carousel-inner bg-dark">
											<div class="carousel-item active">
												<img alt="img" class="d-block w-100 op-3" src="assets_old/images/brand/bg_img _1.png"/>
												<div class="carousel-caption d-none d-md-block">
													<h5>Sell, Buy,Order and do bizz mtaani!</h5>
													<p class="tx-14">All your needs are catered by PataMtaani</p>
												</div>
											</div>
											<div class="carousel-item">
												<img alt="img" class="d-block w-100 op-3" src="assets_old/images/brand/bg_img _1.png"/>
												<div class="carousel-caption d-none d-md-block">
													<h5>Second Slide</h5>
													<p class="tx-14">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
												</div>
											</div>
											<div class="carousel-item">
												<img alt="img" class="d-block w-100 op-3" src="assets_old/images/brand/PataMtaani.png"/>
												<div class="carousel-caption d-none d-md-block">
													<h5>Third Slide</h5>
													<p class="tx-14">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
            </div>







        
    </div>

    
    <div class="row">
    <div class="col-md-12">
      <HowToGetStarted></HowToGetStarted>
    </div>
   </div>

<FooterComponent></FooterComponent>
    
    </div>
  

</div>
  )
}

export default HomePatamtaani