import React, { useCallback,useState,useEffect,useContext } from 'react';

import {useNavigate} from 'react-router-dom'

import {Link} from 'react-router-dom'
import HowToGetStarted from './HowToGetStarted'

function Homepage() {

    const [pname, setpname] = useState("");

    const history = useNavigate();

    const isAuthenticated = localStorage.getItem("isAuthenticated")

    const [isLoading,setLoading]=useState(false);


    console.log("THE AUTHENTICATION STATUS",isAuthenticated)




    // const searchItem = () => {
    //    // setLoading(true);
       
        
    //     setTimeout(() => {
    //     setLoading(false);
    //       //setAddress(string_lng)
    //      // history.push('/search-location-avon-park-florida');
    //      history('/ordered-product/'+pname);
    //     }, 2000);
        
    //       };


         const searchItem = () => {
    setLoading(true);
   
    
    setTimeout(() => {
      setLoading(false);
      //setAddress(string_lng)
     // history.push('/search-location-avon-park-florida');
     history('/ordered-product/'+pname);
    }, 3000);
    
      };




          localStorage.setItem('ordered_item', JSON.stringify(pname));
  return (
    <div className='app ltr landing-page horizontal'>

    <div class="switcher-wrapper">
    <div class="demo_changer">
        <div class="form_holder sidebar-right1">
            <div class="row">
                <div class="predefined_styles">
                    <div class="swichermainleft text-center">
                        <div class="p-3 d-grid gap-2">
                            <a href="../../index.html" class="btn ripple btn-primary mt-0">View Demo</a>
                            <a href="https://themeforest.net/item/sash-bootstrap-5-admin-dashboard-template/35183671"
                                class="btn ripple btn-secondary">Buy Now</a>
                            <a href="https://themeforest.net/user/spruko/portfolio" class="btn ripple btn-pink">Our
                                Portfolio</a>
                        </div>
                    </div>
                    <div class="swichermainleft">
                        <h4>LTR and RTL VERSIONS</h4>
                        <div class="skin-body">
                            <div class="switch_section">
                                <div class="switch-toggle d-flex">
                                    <span class="me-auto">LTR Version</span>
                                    <p class="onoffswitch2"><input type="radio" name="onoffswitch7"
                                            id="myonoffswitch23" class="onoffswitch2-checkbox" checked/>
                                        <label for="myonoffswitch23" class="onoffswitch2-label"></label>
                                    </p>
                                </div>
                                <div class="switch-toggle d-flex mt-2">
                                    <span class="me-auto">RTL Version</span>
                                    <p class="onoffswitch2"><input type="radio" name="onoffswitch7"
                                            id="myonoffswitch24" class="onoffswitch2-checkbox"/>
                                        <label for="myonoffswitch24" class="onoffswitch2-label"></label>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swichermainleft">
                        <h4>Light Theme Style</h4>
                        <div class="skin-body">
                            <div class="switch_section">
                                <div class="switch-toggle d-flex">
                                    <span class="me-auto">Light Theme</span>
                                    <p class="onoffswitch2"><input type="radio" name="onoffswitch1"
                                            id="myonoffswitch1" class="onoffswitch2-checkbox" checked/>
                                        <label for="myonoffswitch1" class="onoffswitch2-label"></label>
                                    </p>
                                </div>
                                <div class="switch-toggle d-flex mt-2">
                                    <span class="me-auto">Dark Theme</span>
                                    <p class="onoffswitch2"><input type="radio" name="onoffswitch1"
                                            id="myonoffswitch2" class="onoffswitch2-checkbox"/>
                                        <label for="myonoffswitch2" class="onoffswitch2-label"></label>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swichermainleft">
                        <h4>Reset All Styles</h4>
                        <div class="skin-body">
                            <div class="switch_section my-4">
                                <button class="btn btn-danger btn-block" onclick="localStorage.clear();
                                        document.querySelector('html').style = '';
                                        resetData() ;" type="button">Reset All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    


<div id="global-loader">
<img src="assets/images/loader.svg" class="loader-img" alt="Loader"/>
</div>


<div class="page">
<div class="page-main">


<div class="hor-header header">
<div class="container main-container">
    <div class="d-flex">
        <a aria-label="Hide Sidebar" class="app-sidebar__toggle" data-bs-toggle="sidebar"
            href="javascript:void(0)"></a>
       
        <a class="logo-horizontal " href="index.html">
            <img src="/assets/images/brand/logo_pink.png" class="header-brand-img desktop-logo" alt="logo"/>
            <img src="/assets/images/brand/logo_pink.png" class="header-brand-img light-logo1"
                alt="logo"/>
        </a>
        
        <div class="d-flex order-lg-2 ms-auto header-right-icons">
            <button class="navbar-toggler navresponsive-toggler d-lg-none ms-auto" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon fe fe-more-vertical"></span>
            </button>
            <div class="navbar navbar-collapse responsive-navbar p-0">
                <div class="collapse navbar-collapse bg-white px-0" id="navbarSupportedContent-4">
                    
                    <div class="header-nav-right p-5">
                        <a href="/signup" class="btn ripple btn-min w-sm btn-outline-primary me-2 my-auto"
                            >New User
                        </a>
                        {/*   <a href="/signin" class="btn ripple btn-min w-sm btn-primary me-2 my-auto"> */}
                        <a href="/signin" class="btn ripple btn-min w-sm btn-primary me-2 my-auto">
                        Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>





<div class="landing-top-header overflow-hidden">
<div class="top sticky overflow-hidden">
  
    <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
    <div class="app-sidebar bg-transparent horizontal-main">
        <div class="container">
            <div class="row">
                <div class="main-sidemenu navbar px-0">
                    <a class="navbar-brand ps-0 d-none d-lg-block" href="/">
                    <img alt="" class="logo-2" src="/assets/images/brand/logo_pink.png"/>
                    <img src="/assets/images/brand/logo_pink.png" class="logo-3" alt="logo"/>
                    </a>
                    <ul class="side-menu">
                        <li class="slide">
                            <a class="side-menu__item active" data-bs-toggle="slide" href="/"><span
                                    class="side-menu__label">Home</span></a>
                        </li>
                        <li class="slide">
                            <a class="side-menu__item" data-bs-toggle="slide" href="#Features"><span
                                    class="side-menu__label">Features</span></a>
                        </li>
                        <li class="slide">
                            <a class="side-menu__item" data-bs-toggle="slide" href="#About"><span
                                    class="side-menu__label">About</span></a>
                        </li>
                        <li class="slide">
                            <a class="side-menu__item" data-bs-toggle="slide" href="#Faqs"><span
                                    class="side-menu__label">Faq's</span></a>
                        </li>
                        <li class="slide">
                            <a class="side-menu__item" data-bs-toggle="slide" href="#Blog"><span
                                    class="side-menu__label">Blog</span></a>
                        </li>
                        <li class="slide">
                            <a class="side-menu__item" data-bs-toggle="slide" href="#Clients"><span
                                    class="side-menu__label">Clients</span></a>
                        </li>
                        <li class="slide">
                            <a class="side-menu__item" data-bs-toggle="slide" href="#Contact"><span
                                    class="side-menu__label">Contact</span></a>
                        </li>
                    </ul>
                    <div class="header-nav-right d-none d-lg-flex">
                        <a href="/signup"
                            class="btn ripple btn-min w-sm btn-outline-primary me-2 my-auto d-lg-none d-xl-block d-block"
                           >New User
                        </a>
                        <a href="/signin" class="btn ripple btn-min w-sm btn-primary me-2 my-auto d-lg-none d-xl-block d-block"
                           >Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
{/* <div class="demo-screen-headline main-demo main-demo-1 spacing-top overflow-hidden reveal" id="home">*/}
<div class="demo-screen-headline main-demo main-demo-1 spacing-top overflow-hidden" id="home" style={{ width: '100%',
    height: 'auto',
    background: 'url("assets/images/hero-bg.jpg") top center',
    backgroundSize: 'cover'
   }}>
    <div class="container px-sm-0">
        <div class="row">


        <div class="container" style={{ 
        height: 'auto',
        paddingTop:'30px',
        minHeight:'400px'
      
       }}>
        <div class="row mb-5 justify-content-center text-center">
            <div class="col">
                <h1 class="font-weight-bold mb-0">Get and Order anything?</h1>
                <p>All your needs are catered by Yote order</p>
            </div>
        </div>


        <div class="row mb-5 justify-content-center">


        <div class="row p-0 m-0">
        <div class="form-label mt-4 p-xl-0">What do you need?</div>

        <div class="col-xl-4">
            <div class="form-group">
                <select class="form-select form-select select2" id="inputGroupSelect01">
                        <option value="Product">Product</option>
                        <option value="Service">Service</option>
                       
                    </select>
            </div>
        </div>
       
        <div class="col-xl-4">
            <div class="form-group">
                <input class="form-control" onChange={(event) => {
                    setpname(event.target.value);
                  }} placeholder="Search here..." type="text"/>
            </div>
        </div>
        
        {/* <div class="col-xl-2 px-3 px-xl-1">
            <div class="form-group">
                <label class="custom-switch form-switch mb-0">
                        <input type="checkbox" name="custom-switch-radio" class="custom-switch-input"/>
                        <span class="custom-switch-indicator custom-switch-indicator-md"></span>
                        <span class="custom-switch-description">Toggle example</span>
                    </label>
            </div>
        </div>*/}
        
        

        <div class="col-xl-2 px-3 px-xl-0">
        <div class="">


        {!isLoading && <button type="submit" onClick={searchItem} class="btn btn-secondary mb-3 btn-block" value="Search"><i class="fe fe-search"></i>Search</button>

    }
    {isLoading &&
        <button class="btn btn-primary my-1" type="button" disabled="">
        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        Searching...
    </button>}



       
        </div>
    </div>
    </div>

       
        
        </div>


        

   


                                      


       
    </div>


        
           
        </div>
    </div>
</div>
</div>





<div class="main-content mt-0">
<div class="side-app">


    <div class="main-container">
        <div class="">


        <div class="section pb-0">
        <div class="container">
            <div class="row">
                <h4 class="text-center fw-semibold">Sellers</h4>
                <span class="landing-title"></span>
                <h2 class="text-center fw-semibold mb-7">Highly rated by clients.</h2>
            </div>


        <div class="row row-cols-4">
        <div class="col-xl-3 col-sm-6 col-md-6">
            <div class="card border p-0">
                <div class="card-header">
                    <h3 class="card-title">Contact card</h3>
                    <div class="card-options">
                        <a href="javascript:void(0)" class="card-options-collapse" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                        <a href="javascript:void(0)" class="card-options-remove" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a>
                    </div>
                </div>
                <div class="card-body text-center">
                    <span class="avatar avatar-xxl brround cover-image" data-bs-image-src="/assets/images/users/15.jpg"  style={{background: 'url(&quot;../assets/images/users/15.jpg&quot;)', center:'center'}}></span>
                    <h4 class="h4 mb-0 mt-3">Mike Rowe-Soft</h4>
                    <p class="card-text">Web designer</p>
                </div>
                <div class="card-footer text-center">
                    <div class="row user-social-detail">
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-google"></i></a>
                        </div>
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-facebook"></i></a>
                        </div>
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
        <div class="col-xl-3 col-sm-6 col-md-6">
            <div class="card border p-0">
                <div class="card-header">
                    <h3 class="card-title">Contact card</h3>
                    <div class="card-options">
                        <a href="javascript:void(0)" class="card-options-collapse" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                        <a href="javascript:void(0)" class="card-options-remove" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a>
                    </div>
                </div>
                <div class="card-body text-center">
                    <span class="avatar avatar-xxl brround cover-image" data-bs-image-src="assets/images/users/15.jpg"  style={{background: 'url(&quot;../assets/images/users/15.jpg&quot;)', center:'center'}}></span>
                    <h4 class="h4 mb-0 mt-3">Laura Norda</h4>
                    <p class="card-text">Web designer</p>
                </div>
                <div class="card-footer text-center">
                    <div class="row user-social-detail">
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-google"></i></a>
                        </div>
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-facebook"></i></a>
                        </div>
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="col-xl-3 col-sm-6 col-md-6">
            <div class="card border p-0">
                <div class="card-header">
                    <h3 class="card-title">Contact card</h3>
                    <div class="card-options">
                        <a href="javascript:void(0)" class="card-options-collapse" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                        <a href="javascript:void(0)" class="card-options-remove" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a>
                    </div>
                </div>
                <div class="card-body text-center">
                    <span class="avatar avatar-xxl brround cover-image" data-bs-image-src="/assets/images/users/15.jpg" style={{background: 'url(&quot;../assets/images/users/15.jpg&quot;)', center:'center'}}></span>
                    <h4 class="h4 mb-0 mt-3">Willie Makit</h4>
                    <p class="card-text">Web designer</p>
                </div>
                <div class="card-footer text-center">
                    <div class="row user-social-detail">
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-google"></i></a>
                        </div>
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-facebook"></i></a>
                        </div>
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-md-6">
            <div class="card border p-0">
                <div class="card-header">
                    <h3 class="card-title">Contact card</h3>
                    <div class="card-options">
                        <a href="javascript:void(0)" class="card-options-collapse" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                        <a href="javascript:void(0)" class="card-options-remove" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a>
                    </div>
                </div>
                <div class="card-body text-center">
                    <span class="avatar avatar-xxl brround cover-image" data-bs-image-src="assets/images/users/15.jpg"  style={{background: 'url(&quot;../assets/images/users/15.jpg&quot;)', center:'center'}}></span>
                    <h4 class="h4 mb-0 mt-3">Don Messwidme</h4>
                    <p class="card-text">Web designer</p>
                </div>
                <div class="card-footer text-center">
                    <div class="row user-social-detail">
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-google"></i></a>
                        </div>
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-facebook"></i></a>
                        </div>
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>

    </div>
    </div>



    <HowToGetStarted/>




        <div class="section pb-0">
        <div class="container">
            <div class="row">
                <h4 class="text-center fw-semibold">Statistics</h4>
                <span class="landing-title"></span>
                <h2 class="text-center fw-semibold mb-7">Sash Template Statistics.</h2>
            </div>
            <div class="row text-center services-statistics landing-statistics">
                <div class="col-xl-3 col-md-6 col-lg-6">
                    <div class="card">
                        <div class="card-body bg-primary-transparent">
                            <div class="counter-status">
                                <div
                                    class="counter-icon bg-primary-transparent box-shadow-primary">
                                    <i class="fe fe-layers text-primary fs-23"></i>
                                </div>
                                <div class="test-body text-center">
                                    <h1 class=" mb-0">
                                        <span class="counter fw-semibold counter ">100</span>+
                                    </h1>
                                    <div class="counter-text">
                                        <h5 class="font-weight-normal mb-0 ">HTML Pages</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 col-lg-6">
                    <div class="card">
                        <div class="card-body bg-secondary-transparent">
                            <div class="counter-status">
                                <div
                                    class="counter-icon bg-secondary-transparent box-shadow-secondary">
                                    <i class="fe fe-wind text-secondary fs-23"></i>
                                </div>
                                <div class="text-body text-center">
                                    <h1 class=" mb-0">
                                        <span class="counter fw-semibold counter ">60</span>+
                                    </h1>
                                    <div class="counter-text">
                                        <h5 class="font-weight-normal mb-0 ">Integrated Plugins
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 col-lg-6">
                    <div class="card">
                        <div class="card-body bg-success-transparent">
                            <div class="counter-status">
                                <div
                                    class="counter-icon bg-success-transparent box-shadow-success">
                                    <i class="fe fe-file-text text-success fs-23"></i>
                                </div>
                                <div class="text-body text-center">
                                    <h1 class=" mb-0">
                                        <span class="counter fw-semibold counter ">10</span>+
                                    </h1>
                                    <div class="counter-text">
                                        <h5 class="font-weight-normal mb-0 ">Form Elements</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 col-lg-6">
                    <div class="card">
                        <div class="card-body bg-danger-transparent">
                            <div class="counter-status">
                                <div
                                    class="counter-icon bg-danger-transparent box-shadow-danger">
                                    <i class="fe fe-grid text-danger fs-23"></i>
                                </div>
                                <div class="text-body text-center">
                                    <h1 class=" mb-0">
                                        <span class="counter fw-semibold counter ">30</span>+
                                    </h1>
                                    <div class="counter-text">
                                        <h5 class="font-weight-normal mb-0 ">Customize Widgets
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





                                  <div class="sptb section bg-white" id="Features">
                                      <div class="container">
                                          <div class="row">
                                              <h4 class="text-center fw-semibold">Features</h4>
                                              <span class="landing-title"></span>
                                              <h2 class="fw-semibold text-center">Sash Main Features</h2>
                                              <p class="text-default mb-5 text-center">The Sash admin template comes with
                                                  ready-to-use features that are completely easy-to-use for any user, even for
                                                  a beginner.</p>
                                              <div class="row mt-7">
                                                  <div class="col-lg-6 col-md-12">
                                                  {/* <div class="card features main-features main-features-1 wow fadeInUp reveal revealleft"
                                                          data-wow-delay="0.1s"> */}
                                                      <div class="card features main-features main-features-1 wow fadeInUp revealleft"
                                                          data-wow-delay="0.1s">
                                                          <div class="bg-img mb-2 text-left">
                                                              <svg width="50" height="50"
                                                                  viewBox="0 0 128 128">
                                                                  <circle cx="64" cy="64" r="64" fill="#42A3DB" />
                                                                  <path fill="#347CBE"
                                                                      d="M85.5 26.6L66.1 61 33.3 98.6 62.6 128H64c33.7 0 61.3-26 63.8-59.1L85.5 26.6z" />
                                                                  <path fill="#CD2F30"
                                                                      d="M73.1 57.7h-16c3.6 18.7 11.1 36.6 22.1 52.5.3-5 1-9.8 1.8-14.5 4.6 1.3 9.2 2.3 13.7 3-9.7-12.2-17-26.1-21.6-41z" />
                                                                  <path fill="#F04D45"
                                                                      d="M54.9 57.7c-4.6 15-11.9 28.9-21.6 40.9 4.5-.7 9.1-1.7 13.7-3 .9 4.7 1.5 9.5 1.8 14.5 11-15.9 18.4-33.8 22.1-52.5h-16z" />
                                                                  <path fill="#FFF"
                                                                      d="M93.5 52c1.8-1.8 1.8-4.7 0-6.5-1.3-1.3-1.7-3.3-1-5 1-2.4-.1-5-2.5-6-1.7-.7-2.8-2.4-2.8-4.3 0-2.5-2.1-4.6-4.6-4.6-1.9 0-3.5-1.1-4.3-2.8-1-2.4-3.7-3.5-6-2.5-1.7.7-3.7.3-5-1-1.8-1.8-4.7-1.8-6.5 0-1.3 1.3-3.3 1.7-5 1-2.4-1-5 .1-6 2.5-.7 1.7-2.4 2.8-4.3 2.8-2.5 0-4.6 2.1-4.6 4.6 0 1.9-1.1 3.5-2.8 4.3-2.4 1-3.5 3.7-2.5 6 .7 1.7.3 3.7-1 5-1.8 1.8-1.8 4.7 0 6.5 1.3 1.3 1.7 3.3 1 5-1 2.4.1 5 2.5 6 1.7.7 2.8 2.4 2.8 4.3 0 2.5 2.1 4.6 4.6 4.6 1.9 0 3.5 1.1 4.3 2.8 1 2.4 3.7 3.5 6 2.5 1.7-.7 3.7-.3 5 1 1.8 1.8 4.7 1.8 6.5 0 1.3-1.3 3.3-1.7 5-1 2.4 1 5-.1 6-2.5.7-1.7 2.4-2.8 4.3-2.8 2.5 0 4.6-2.1 4.6-4.6 0-1.9 1.1-3.5 2.8-4.3 2.4-1 3.5-3.7 2.5-6-.7-1.7-.3-3.7 1-5z" />
                                                                  <path fill="#FFCD0A"
                                                                      d="M64 70.8c-12.2 0-22.1-9.9-22.1-22.1 0-12.2 9.9-22.1 22.1-22.1 12.2 0 22.1 9.9 22.1 22.1 0 12.2-9.9 22.1-22.1 22.1z" />
                                                                  <path fill="#FFF"
                                                                      d="M59.9 61c-.6 0-1.1-.2-1.5-.7l-8.3-9.2c-.7-.8-.7-2.1.1-2.8.8-.7 2.1-.7 2.8.1l6.7 7.5 15.1-18.8c.7-.9 2-1 2.8-.3.9.7 1 2 .3 2.8L61.4 60.2c-.3.5-.9.8-1.5.8z" />
                                                              </svg>
                                                          </div>
                                                          <div class="text-left">
                                                              <h4 class="fw-bold">Quality &amp; Clean Code</h4>
                                                              <p class="mb-0">The Sash admin code is maintained very cleanly
                                                                  and well-structured with proper comments.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 col-md-12">

                                                   {/* <div class="card features main-features main-features-1 wow fadeInUp reveal revealleft"
                                                          data-wow-delay="0.1s"> */}
                                                      <div class="card  features main-features main-features-2 wow fadeInUp revealleft"
                                                          data-wow-delay="0.1s">
                                                          <div class="bg-img mb-2 text-left">

                                                              <svg width="50" height="50"
                                                                  viewBox="0 0 128 128">
                                                                  <circle cx="64" cy="64" r="64" fill="#FFCD0A" />
                                                                  <path fill="#F6AF1A"
                                                                      d="M127.7 57.7l-26.4-26.4-74.7 58.8L64.5 128c35.1-.3 63.5-28.8 63.5-64 0-2.1-.1-4.2-.3-6.3z" />
                                                                  <path fill="#CFD5DF" d="M76.2 102.9H51.8l2-13.6h20.4z" />
                                                                  <path fill="#545E70"
                                                                      d="M97.1 91.7H30.9c-3.5 0-6.4-2.9-6.4-6.4V36.1c0-3.5 2.9-6.4 6.4-6.4h66.2c3.5 0 6.4 2.9 6.4 6.4v49.3c0 3.5-2.9 6.3-6.4 6.3z" />
                                                                  <path fill="#E6E8EB"
                                                                      d="M24.5 81.4v4c0 3.5 2.9 6.4 6.4 6.4h66.2c3.5 0 6.4-2.9 6.4-6.4v-4h-79z" />
                                                                  <path fill="#49C7EF"
                                                                      d="M30.9 74.3c-1 0-1.8-.8-1.8-1.8V36.1c0-1 .8-1.8 1.8-1.8h66.2c1 0 1.8.8 1.8 1.8v36.4c0 1-.8 1.8-1.8 1.8H30.9z" />
                                                                  <path fill="#17B6EA" d="M37.8 34.3h52.5v40H37.8z" />
                                                                  <path fill="#E6E8EB"
                                                                      d="M76.7 105.3H51.3c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4h25.4c1.3 0 2.4 1.1 2.4 2.4-.1 1.3-1.1 2.4-2.4 2.4z" />
                                                                  <path fill="#ACB2B9" d="M53.2 91.7l22.7 8.8-1.3-8.8z" />
                                                                  <path fill="#FFF"
                                                                      d="M75.7 47.8H52.3c-.6 0-1.1-.5-1.1-1.1v-2.9c0-.6.5-1.1 1.1-1.1h23.3c.6 0 1.1.5 1.1 1.1v2.9c0 .6-.4 1.1-1 1.1zM75.7 57.1H52.3c-.6 0-1.1-.5-1.1-1.1v-2.9c0-.6.5-1.1 1.1-1.1h23.3c.6 0 1.1.5 1.1 1.1V56c0 .6-.4 1.1-1 1.1z" />
                                                                  <path fill="#FFCD0A"
                                                                      d="M62.8 65.9H52.3c-.6 0-1.1-.5-1.1-1.1v-2.9c0-.6.5-1.1 1.1-1.1h10.4c.6 0 1.1.5 1.1 1.1v2.9c0 .6-.4 1.1-1 1.1z" />
                                                                  <g fill="#CFD5DF">
                                                                      <circle cx="54.1" cy="45.3" r="1.2" />
                                                                      <circle cx="57.6" cy="45.3" r="1.2" />
                                                                      <circle cx="61" cy="45.3" r="1.2" />
                                                                      <circle cx="64.5" cy="45.3" r="1.2" />
                                                                      <circle cx="67.9" cy="45.3" r="1.2" />
                                                                  </g>
                                                                  <g fill="#CFD5DF">
                                                                      <circle cx="54.1" cy="54.6" r="1.2" />
                                                                      <circle cx="57.6" cy="54.6" r="1.2" />
                                                                      <circle cx="61" cy="54.6" r="1.2" />
                                                                      <circle cx="64.5" cy="54.6" r="1.2" />
                                                                      <circle cx="67.9" cy="54.6" r="1.2" />
                                                                  </g>
                                                                  <g fill="#FFF">
                                                                      <path
                                                                          d="M56.9 64.4c-.3.3-.6.4-1 .4s-.8-.1-1-.4c-.3-.3-.4-.6-.4-1s.1-.7.4-1c.3-.3.6-.4 1-.4s.8.1 1 .4c.3.3.4.6.4 1s-.1.7-.4 1zm-.2-1c0-.2-.1-.5-.2-.6-.2-.2-.4-.3-.6-.3s-.4.1-.6.3c-.2.2-.2.4-.2.6 0 .2.1.5.2.6.2.2.4.3.6.3s.4-.1.6-.3c.1-.2.2-.4.2-.6zM58.3 62h.6v1.1l1-1.1h.8l-1.1 1.2c.1.1.3.4.5.7s.4.6.6.8H60l-.8-1.1-.3.4v.8h-.6V62z" />
                                                                  </g>
                                                                  <circle cx="64" cy="86.6" r="2.8" fill="#545E70" />
                                                                  <g fill="#E6E8EB">
                                                                      <path
                                                                          d="M92.6 49.7v9.2c0 1.2 1.6 1.6 2.2.5l2.3-4.6c.2-.3.2-.7 0-1l-2.3-4.6c-.6-1.1-2.2-.7-2.2.5zM36.1 58.9v-9.2c0-1.2-1.6-1.6-2.2-.5l-2.3 4.6c-.2.3-.2.7 0 1l2.3 4.6c.6 1.1 2.2.7 2.2-.5z" />
                                                                  </g>
                                                              </svg>
                                                          </div>
                                                          <div class="text-left">
                                                              <h4 class="fw-bold">Multiple Demos</h4>
                                                              <p class="mb-0">
                                                                  We included multiple demos, preview video, and screen shots
                                                                  to give a quick overview of our Sash admin template.
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 col-md-12">
                                                   {/* <div class="card features main-features main-features-1 wow fadeInUp reveal revealleft"
                                                          data-wow-delay="0.1s"> */}
                                                      <div class="card features main-features main-features-11 wow fadeInUp revealleft"
                                                          data-wow-delay="0.1s">
                                                          <div class="bg-img mb-2 text-left">
                                                              <svg id="SvgjsSvg1001" width="50" height="50"
                                                                  version="1.1"

                                                              >
                                                                  <defs id="SvgjsDefs1002"></defs>
                                                                  <g id="SvgjsG1008"><svg
                                                                      viewBox="0 0 128 128" width="50" height="50">
                                                                      <circle cx="64" cy="64" r="64" fill="#bed530"
                                                                          class="colorBED530 svgShape"></circle>
                                                                      <path fill="#acc437"
                                                                          d="M112.8 53.7l-4.6-3.7L85 27l-.9 6.9H77L70 27l-1.3 3.7-6 5.7-9.4-9.4-.9 3.7-8.9 2.3-6-6-5 8.2-3.9 63.7 28.9 28.8c2.2.2 4.4.3 6.6.3 33.7 0 61.4-26.2 63.8-59.3l-15.1-15z"
                                                                          class="colorACC437 svgShape"></path>
                                                                      <path fill="#ffffff"
                                                                          d="M86.5 101.8H34.2c-3.6 0-6.5-2.9-6.5-6.5v-58c0-3.6 2.9-6.5 6.5-6.5h52.3c3.6 0 6.5 2.9 6.5 6.5v58c0 3.6-2.9 6.5-6.5 6.5z"
                                                                          class="colorFFF svgShape"></path>
                                                                      <path fill="#e6e8eb"
                                                                          d="M75.6 78l-9.5 12.3 11.5 11.5h8.8c3.6 0 6.5-2.9 6.5-6.5V67.7L75.6 78z"
                                                                          class="colorE6E8EB svgShape"></path>
                                                                      <path fill="#e2247e" d="M88.5 58.8h8v31.9h-8z"
                                                                          transform="rotate(-135.032 92.483 74.797)"
                                                                          class="colorE2247E svgShape"></path>
                                                                      <path fill="#ee3e88" d="M82.9 53.2h8v31.9h-8z"
                                                                          transform="rotate(-135.032 86.846 69.166)"
                                                                          class="colorEE3E88 svgShape"></path>
                                                                      <path fill="#f06197" d="M77.2 47.6h8v31.9h-8z"
                                                                          transform="rotate(-135.032 81.209 63.535)"
                                                                          class="colorF06197 svgShape"></path>
                                                                      <path fill="#cfd5df" d="M87 56h23.9v2.2H87z"
                                                                          transform="rotate(-135.032 98.922 57.076)"
                                                                          class="colorCFD5DF svgShape"></path>
                                                                      <path fill="#545e70"
                                                                          d="M102.2 43.2l10.5 10.5c1.8 1.8 1.8 4.6 0 6.4l-4.6 4.6-16.8-16.9 4.6-4.6c1.7-1.7 4.6-1.7 6.3 0z"
                                                                          class="color545E70 svgShape"></path>
                                                                      <path fill="#fcd65e"
                                                                          d="M67.1 72l-1.7 16.7c-.1 1.1.8 2 1.9 1.9L84 88.9 67.1 72z"
                                                                          class="colorFCD65E svgShape"></path>
                                                                      <path fill="#f6af1a"
                                                                          d="M65.4 88.7c-.1.6.2 1.1.5 1.5l9.6-9.6-8.4-8.6-1.7 16.7z"
                                                                          class="colorF6AF1A svgShape"></path>
                                                                      <path fill="#ffcd0a"
                                                                          d="M66.1 90.3l12.2-7-5.6-5.6-7 12.2c.2.1.3.3.4.4z"
                                                                          class="colorFFCD0A svgShape"></path>
                                                                      <path fill="#7d6c7c"
                                                                          d="M65.9 83.9l-.5 4.8c-.1 1.1.8 2 1.9 1.9l4.8-.5-6.2-6.2z"
                                                                          class="color7D6C7C svgShape"></path>
                                                                      <path fill="#5b4b57"
                                                                          d="M65.9 83.9l-.5 4.8c-.1.6.2 1.1.5 1.5l3.1-3.1-3.1-3.2z"
                                                                          class="color5B4B57 svgShape"></path>
                                                                      <path fill="#6b5969"
                                                                          d="M68 86l-2.2 3.9c.1.2.2.3.4.4l3.9-2.3-2.1-2z"
                                                                          class="color6B5969 svgShape"></path>
                                                                      <circle cx="84.1" cy="39.6" r="4.1" fill="#bed530"
                                                                          class="colorBED530 svgShape"></circle>
                                                                      <circle cx="68.2" cy="39.6" r="4.1" fill="#bed530"
                                                                          class="colorBED530 svgShape"></circle>
                                                                      <circle cx="52.4" cy="39.6" r="4.1" fill="#bed530"
                                                                          class="colorBED530 svgShape"></circle>
                                                                      <circle cx="36.5" cy="39.6" r="4.1" fill="#bed530"
                                                                          class="colorBED530 svgShape"></circle>
                                                                      <path fill="#545e70"
                                                                          d="M84.1 40.5c-1.1 0-1.9-.9-1.9-1.9v-10c0-1.1.9-1.9 1.9-1.9 1.1 0 1.9.9 1.9 1.9v10c.1 1.1-.8 1.9-1.9 1.9zM68.3 40.5c-1.1 0-1.9-.9-1.9-1.9v-10c0-1.1.9-1.9 1.9-1.9 1.1 0 1.9.9 1.9 1.9v10c0 1.1-.9 1.9-1.9 1.9zM52.4 40.6c-1.1 0-1.9-.9-1.9-1.9v-10c0-1.1.9-1.9 1.9-1.9 1.1 0 1.9.9 1.9 1.9v10c0 1-.9 1.9-1.9 1.9zM36.5 40.6c-1.1 0-1.9-.9-1.9-1.9v-10c0-1.1.9-1.9 1.9-1.9 1.1 0 1.9.9 1.9 1.9v10c0 1-.8 1.9-1.9 1.9z"
                                                                          class="color545E70 svgShape"></path>
                                                                  </svg></g>
                                                              </svg>
                                                          </div>
                                                          <div class="text-left">
                                                              <h4 class="fw-bold">Validation Forms</h4>
                                                              <p class="mb-0">
                                                                  Different types of “Form Validation” are implemented in this
                                                                  Sash admin template and used strict validation rules.
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 col-md-12">
                                                   {/* <div class="card features main-features main-features-1 wow fadeInUp reveal revealleft"
                                                          data-wow-delay="0.1s"> */}
                                                      <div class="card features main-features main-features-10 wow fadeInUp revealleft"
                                                          data-wow-delay="0.1s">
                                                          <div class="bg-img mb-2 text-left">
                                                              <svg width="50" height="50"
                                                                  version="1.1"
                                                              >
                                                                  <defs id="SvgjsDefs1055"></defs>
                                                                  <g id="SvgjsG1056"><svg
                                                                      viewBox="0 0 128 128" width="50" height="50">
                                                                      <circle cx="64" cy="64" r="64" fill="#58e1ef"
                                                                          class="colorD9B9A9 svgShape"></circle>
                                                                      <path fill="#47d4e4"
                                                                          d="M71.4 127.6c29.4-3.4 52.7-26.7 56.1-56.1L74.8 18.6 51.9 31.2 31.2 47.4 18.6 74.8l52.8 52.8z"
                                                                          class="colorD6AB9A svgShape"></path>
                                                                      <path fill="#6b5969"
                                                                          d="M64 101.5c-20.7 0-37.5-16.8-37.5-37.5S43.3 26.5 64 26.5s37.5 16.8 37.5 37.5-16.8 37.5-37.5 37.5zm0-70.3c-18.1 0-32.8 14.7-32.8 32.8S45.9 96.8 64 96.8 96.8 82.1 96.8 64 82.1 31.2 64 31.2z"
                                                                          class="color6B5969 svgShape"></path>
                                                                      <circle cx="64" cy="28.8" r="14.8" fill="#ffffff"
                                                                          class="colorFFF svgShape"></circle>
                                                                      <path fill="#8663a7"
                                                                          d="M64 39.1c-5.6 0-10.2-4.6-10.2-10.2S58.4 18.7 64 18.7s10.2 4.6 10.2 10.2S69.6 39.1 64 39.1z"
                                                                          class="color8663A7 svgShape"></path>
                                                                      <circle cx="64" cy="99.2" r="14.8" fill="#ffffff"
                                                                          class="colorFFF svgShape"></circle>
                                                                      <path fill="#3d9c46"
                                                                          d="M64 109.4c-5.6 0-10.2-4.6-10.2-10.2S58.4 89 64 89s10.2 4.6 10.2 10.2-4.6 10.2-10.2 10.2z"
                                                                          class="color3D9C46 svgShape"></path>
                                                                      <circle cx="99.2" cy="64" r="14.8" fill="#ffffff"
                                                                          class="colorFFF svgShape"></circle>
                                                                      <path fill="#ee3e88"
                                                                          d="M99.2 74.2C93.6 74.2 89 69.6 89 64s4.6-10.2 10.2-10.2 10.2 4.6 10.2 10.2-4.6 10.2-10.2 10.2z"
                                                                          class="colorEE3E88 svgShape"></path>
                                                                      <circle cx="28.8" cy="64" r="14.8" fill="#ffffff"
                                                                          class="colorFFF svgShape"></circle>
                                                                      <path fill="#ffcd0a"
                                                                          d="M28.8 74.2c-5.6 0-10.2-4.6-10.2-10.2s4.6-10.2 10.2-10.2S39.1 58.4 39.1 64s-4.6 10.2-10.3 10.2z"
                                                                          class="colorFFCD0A svgShape"></path>
                                                                      <path fill="#ffffff"
                                                                          d="M98.4 61.8v1.9h2.5v1.5h-2.5v2.7h4.4v1.6h-7.4v-1.6h1.2v-2.7h-1.3v-1.5h1.3v-1.9c0-1.2.3-2.1.9-2.6.6-.5 1.4-.8 2.4-.8 1.3 0 2.3.6 2.9 1.7l-1.2 1c-.4-.7-.9-1-1.6-1-.5 0-.9.1-1.2.4s-.4.7-.4 1.3z"
                                                                          class="colorFFF svgShape"></path>
                                                                  </svg></g>
                                                              </svg>
                                                          </div>
                                                          <div class="text-left">
                                                              <h4 class="fw-bold">Widgets</h4>
                                                              <p class="mb-0">
                                                                  30+ widgets are included in this template. Please check out
                                                                  the best option that suits you and implement it in your
                                                                  projects.
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 col-md-12">
                                                   {/* <div class="card features main-features main-features-1 wow fadeInUp reveal revealleft"
                                                          data-wow-delay="0.1s"> */}
                                                      <div class="card features main-features main-features-9 wow fadeInUp revealleft"
                                                          data-wow-delay="0.1s">
                                                          <div class="bg-img mb-2 text-left">
                                                              <svg id="SvgjsSvg1156" width="50" height="50"
                                                                  version="1.1"

                                                              >
                                                                  <defs id="SvgjsDefs1157"></defs>
                                                                  <g id="SvgjsG1158"><svg
                                                                      viewBox="0 0 128 128" width="50" height="50">
                                                                      <circle cx="64" cy="64" r="64" fill="#f579a2"
                                                                          class="color1F68B0 svgShape"></circle>
                                                                      <path fill="#d6607b"
                                                                          d="M128 64c0-2.7-.2-5.3-.5-7.9l-21.8-21.8-84 58.7 34.5 34.5c2.6.3 5.2.5 7.8.5 35.3 0 64-28.7 64-64z"
                                                                          class="color2A519C svgShape"></path>
                                                                      <path fill="#ffffff"
                                                                          d="M101.8 95H26.2c-3.3 0-6-2.7-6-6V39c0-3.3 2.7-6 6-6h75.7c3.3 0 6 2.7 6 6v50c-.1 3.3-2.7 6-6.1 6z"
                                                                          class="colorFFF svgShape"></path>
                                                                      <path fill="#ffffff"
                                                                          d="M20.2 44.9V89c0 3.3 2.7 6 6 6h75.7c3.3 0 6-2.7 6-6V44.9H20.2z"
                                                                          class="colorFFF svgShape"></path>
                                                                      <path fill="#3c29de"
                                                                          d="M107.8 45v-6c0-3.3-2.7-6-6-6H26.2c-3.3 0-6 2.7-6 6v6h87.6z"
                                                                          class="colorFFCD0A svgShape"></path>
                                                                      <circle cx="28.7" cy="39" r="3.3" fill="#ffffff"
                                                                          class="colorFFF svgShape"></circle>
                                                                      <circle cx="28.7" cy="39" r="1.9" fill="#543bc1"
                                                                          class="colorF04D45 svgShape"></circle>
                                                                      <circle cx="37.3" cy="39" r="3.3" fill="#ffffff"
                                                                          class="colorFFF svgShape"></circle>
                                                                      <circle cx="37.3" cy="39" r="1.9" fill="#9c583d"
                                                                          class="color3D9C46 svgShape"></circle>
                                                                      <circle cx="46" cy="39" r="3.3" fill="#ffffff"
                                                                          class="colorFFF svgShape"></circle>
                                                                      <circle cx="46" cy="39" r="1.9" fill="#6b595d"
                                                                          class="color6B5969 svgShape"></circle>
                                                                      <path fill="#ffffff"
                                                                          d="M99.3 42.3H57.2c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3h42.1c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3z"
                                                                          class="colorFFF svgShape"></path>
                                                                      <path fill="#dfdecf"
                                                                          d="M101.8 50.4H26.2c-.3 0-.5.2-.5.5V89c0 .3.2.5.5.5h75.7c.3 0 .5-.2.5-.5V50.9c-.1-.3-.3-.5-.6-.5zM34.5 66.6H41v6.6h-6.5v-6.6zm-1 6.7h-6.8v-6.6h6.8v6.6zm8.5-6.7h6.5v6.6H42v-6.6zm36.5-1H72V59h6.5v6.6zm1-6.6H86v6.6h-6.5V59zM57 66.6h6.5v6.6H57v-6.6zm-1 6.7h-6.5v-6.6H56v6.6zm8.5-6.7H71v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H72v-6.6zm-1-1h-6.5V59H71v6.6zm-7.5 0H57V59h6.5v6.6zm-7.5 0h-6.5V59H56v6.6zm-7.5 0H42V59h6.5v6.6zm0 8.7v6.6H42v-6.6h6.5zm1 0H56v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H57v-6.6zm7.5 0H71v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H72v-6.6zm7.5 0H86v6.6h-6.5v-6.6zm0-1v-6.6H86v6.6h-6.5zm7.5-6.7h6.5v6.6H87v-6.6zm7.5 0h6.8v6.6h-6.8v-6.6zm0-1V59h6.8v6.6h-6.8zm-1 0H87V59h6.5v6.6zM87 58v-6.6h6.5V58H87zm-1 0h-6.5v-6.6H86V58zm-7.5 0H72v-6.6h6.5V58zM71 58h-6.5v-6.6H71V58zm-7.5 0H57v-6.6h6.5V58zM56 58h-6.5v-6.6H56V58zm-7.5 0H42v-6.6h6.5V58zM41 58h-6.5v-6.6H41V58zm0 1v6.6h-6.5V59H41zm-7.5 6.6h-6.8V59h6.8v6.6zm-6.8 8.7h6.8v6.6h-6.8v-6.6zm7.8 0H41v6.6h-6.5v-6.6zm6.5 7.6v6.6h-6.5v-6.6H41zm1 0h6.5v6.6H42v-6.6zm7.5 0H56v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H57v-6.6zm7.5 0H71v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H72v-6.6zm7.5 0H86v6.6h-6.5v-6.6zm7.5 0h6.5v6.6H87v-6.6zm0-1v-6.6h6.5v6.6H87zm7.5-6.6h6.8v6.6h-6.8v-6.6zm6.8-16.3h-6.8v-6.6h6.8V58zm-67.8-6.6V58h-6.8v-6.6h6.8zm-6.8 30.5h6.8v6.6h-6.8v-6.6zm67.8 6.6v-6.6h6.8v6.6h-6.8z"
                                                                          class="colorCFD5DF svgShape"></path>
                                                                      <path fill="#fff591" d="M30.6 66.1h5.1V89h-5.1z"
                                                                          class="colorD7E14A svgShape"></path>
                                                                      <path fill="#9c583d" d="M40.9 61.6H46V89h-5.1z"
                                                                          class="color3D9C46 svgShape"></path>
                                                                      <path fill="#f5587b" d="M51.2 68.9h5.1V89h-5.1z"
                                                                          class="colorEE3E88 svgShape"></path>
                                                                      <path fill="#a76372" d="M61.5 61.6h5.1V89h-5.1z"
                                                                          class="color8663A7 svgShape"></path>
                                                                      <path fill="#c2633e" d="M92.3 69.6h5.1v19.5h-5.1z"
                                                                          class="color9AC23E svgShape"></path>
                                                                      <path fill="#543bc1" d="M71.7 54h5.1v35h-5.1z"
                                                                          class="colorF04D45 svgShape"></path>
                                                                      <path fill="#b0052b" d="M82 60.8h5.1V89H82z"
                                                                          class="color05B0A6 svgShape"></path>
                                                                  </svg></g>
                                                              </svg>
                                                          </div>
                                                          <div class="text-left">
                                                              <h4 class="fw-bold">9 Types of Charts</h4>
                                                              <p class="mb-0">
                                                                  We included nine (9) types of the best possible chart
                                                                  options for your project. You can customize with your
                                                                  requirement.
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 col-md-12">
                                                   {/* <div class="card features main-features main-features-1 wow fadeInUp reveal revealleft"
                                                          data-wow-delay="0.1s"> */}
                                                      <div class="card features main-features main-features-12 mb-4 wow fadeInUp revealleft"
                                                          data-wow-delay="0.1s">
                                                          <div class="bg-img mb-2 text-left">
                                                              <svg width="50" height="50"
                                                                  viewBox="0 0 128 128">
                                                                  <circle cx="64" cy="64" r="64" fill="#F49C20" />
                                                                  <path fill="#EC7B24"
                                                                      d="M127.5 56.2l-30-30-7.4 8.2-21-21h-6.7l-5.5 4.9 5.5 27.2h17.9l-50.1 56 26 26c2.6.3 5.2.5 7.8.5 35.3 0 64-28.7 64-64 0-2.6-.2-5.2-.5-7.8z" />
                                                                  <path fill="#545E70"
                                                                      d="M91.3 104.8H36.7c-4.4 0-8-3.6-8-8V31.2c0-4.4 3.6-8 8-8h54.6c4.4 0 8 3.6 8 8v65.6c0 4.4-3.6 8-8 8z" />
                                                                  <path fill="#FFF" d="M34.7 29.3h58.7V94H34.7z" />
                                                                  <path fill="#CFD5DF"
                                                                      d="M87.8 32.7H40.1c0-2.9 1.2-5.6 3.1-7.5 1.9-1.9 4.6-3.1 7.5-3.1h6.1v-3.8c0-3.9 3.2-7.1 7.1-7.1 3.9 0 7.1 3.2 7.1 7.1v3.8h6.1c6 0 10.7 4.8 10.7 10.6z" />
                                                                  <path fill="#ACB2B9"
                                                                      d="M40.7 29.3c-.4 1.1-.6 2.2-.6 3.4h47.7c0-1.2-.2-2.3-.6-3.4H40.7z" />
                                                                  <circle cx="64" cy="18.1" r="3.6" fill="#EC7B24" />
                                                                  <path fill="#E6E8EB" d="M79.7 80.4h13.6L79.7 94.1z" />
                                                                  <path fill="#CFD5DF"
                                                                      d="M79.7 94.1l13.6-13.7v13.7M52.3 51.4H41.5c-.4 0-.8-.3-.8-.8V39.9c0-.4.3-.8.8-.8h10.8c.4 0 .8.3.8.8v10.8c-.1.4-.4.7-.8.7zm-10-1.5h9.3v-9.3h-9.3v9.3zM52.3 68.6H41.5c-.4 0-.8-.3-.8-.8V57.1c0-.4.3-.8.8-.8h10.8c.4 0 .8.3.8.8v10.8c-.1.4-.4.7-.8.7zm-10-1.5h9.3v-9.3h-9.3v9.3zM67.9 42.7h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.4.8-.8.8zM80.6 42.7h-8.9c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h8.9c.4 0 .8.3.8.8s-.4.8-.8.8zM87.8 42.7h-3.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h3.5c.4 0 .8.3.8.8s-.3.8-.8.8zM61.4 46h-4.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h4.5c.4 0 .8.3.8.8s-.4.8-.8.8zM73 46h-7.8c-.4 0-.8-.3-.8-.8s.3-.8.8-.8H73c.4 0 .8.3.8.8s-.4.8-.8.8zM87.8 46h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.3.8-.8.8zM67.9 49.3h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.4.8-.8.8zM77.7 49.3h-6c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h6c.4 0 .8.3.8.8s-.3.8-.8.8zM87.8 49.3h-6.3c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h6.3c.4 0 .8.3.8.8s-.3.8-.8.8zM67.9 59.9h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.4.8-.8.8zM80.6 59.9h-8.9c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h8.9c.4 0 .8.3.8.8s-.4.8-.8.8zM87.8 59.9h-3.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h3.5c.4 0 .8.3.8.8s-.3.8-.8.8zM61.4 63.2h-4.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h4.5c.4 0 .8.3.8.8s-.4.8-.8.8zM73 63.2h-7.8c-.4 0-.8-.3-.8-.8s.3-.8.8-.8H73c.4 0 .8.3.8.8s-.4.8-.8.8zM87.8 63.2h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.3.8-.8.8z" />
                                                                  <g>
                                                                      <path fill="#CFD5DF"
                                                                          d="M67.9 66.5h-11c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h11c.4 0 .8.3.8.8s-.4.8-.8.8zM77.7 66.5h-6c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h6c.4 0 .8.3.8.8s-.3.8-.8.8zM87.8 66.5h-6.3c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h6.3c.4 0 .8.3.8.8s-.3.8-.8.8z" />
                                                                  </g>
                                                                  <path fill="#F04D45"
                                                                      d="M57.8 36.2c-1.3.2-2.5.7-3.6 1.5-1.1.7-2.1 1.6-2.9 2.5-.9.9-1.7 1.9-2.4 3-.3.4-.5.8-.8 1.2-.1-.1-.2-.2-.2-.3-.3-.4-.7-.7-1.2-1-.2-.1-.5-.3-.7-.4-.3-.1-.5-.2-.9-.2-.8-.1-1.5.5-1.6 1.4-.1.8.5 1.5 1.4 1.6h.2c.1 0 .2.1.3.1.2.1.4.3.6.4.2.2.4.4.5.6.2.2.3.5.4.8 0 .5.3 1 .8 1.1.6.2 1.3-.1 1.6-.7l.1-.4c.1-.2.2-.5.3-.8l.4-.8c.3-.5.5-1.1.8-1.6.6-1 1.2-2.1 1.9-3 .7-1 1.5-1.9 2.4-2.6.9-.8 1.9-1.4 3-1.7.2-.1.3-.2.3-.4-.3-.2-.5-.3-.7-.3zm-8.6 10.2zM57.8 54.9c-1.3.2-2.5.7-3.6 1.5-1.1.7-2.1 1.6-2.9 2.5-.9.9-1.7 1.9-2.4 3-.3.4-.5.8-.8 1.2-.1-.1-.2-.2-.2-.3-.3-.4-.7-.7-1.2-1-.2-.1-.5-.3-.7-.4-.3-.1-.5-.2-.9-.2-.8-.1-1.5.5-1.6 1.4-.1.8.5 1.5 1.4 1.6h.2c.1 0 .2.1.3.1.2.1.4.3.6.4.2.2.4.4.5.6.2.2.3.5.4.8 0 .5.3 1 .8 1.1.6.2 1.3-.1 1.6-.7l.1-.4c.1-.2.2-.5.3-.8l.4-.8c.3-.5.5-1.1.8-1.6.6-1 1.2-2.1 1.9-3 .7-1 1.5-1.9 2.4-2.6.9-.8 1.9-1.4 3-1.7.2-.1.3-.2.3-.4-.3-.2-.5-.4-.7-.3zm-8.6 10.2z" />
                                                              </svg>
                                                          </div>
                                                          <div class="text-left">
                                                              <h4 class="fw-bold">Documentation</h4>
                                                              <p class="mb-0">
                                                                  The documentation provides clear-cut material for the Sash
                                                                  admin template. The documentation is explained or instructed
                                                                  in such a way that every user can understand.
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>






                                  <div class="">
                                  <div class="container">
                                      <div class="testimonial-owl-landing buynow-landing revealrotate">
                                          <div class="row pt-6">
                                              <div class="col-md-12">
                                                  <div class="card bg-transparent">
                                                      <div class="card-body pt-5 px-7">
                                                          <div class="row">
                                                              <div class="col-lg-9">
                                                                  <h1 class="fw-semibold text-white">Get Started With YoteOrder.
                                                                    </h1>
                                                                  <p class="text-white">Sed ut perspiciatis unde omnis
                                                                      iste natus error sit voluptatem accusantium
                                                                      doloremque laudantium, totam rem aperiam, eaque ipsa
                                                                      quae ab illo inventore veritatis et quasi architecto
                                                                      beatae vitae dicta sunt
                                                                      explicabo.
                                                                  </p>
                                                              </div>
                                                              <div class="col-lg-3 text-end my-auto">
                                                                  <a href="#"
                                                                      target="_blank"
                                                                      class="btn btn-pink w-lg pt-2 pb-2"><i
                                                                          class="fe fe-shopping-cart me-2"></i>Start Now
                                                                  </a>
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



</div>

<div class="demo-footer">
<div class="container">
    <div class="row">
        <div class="card">
            <div class="card-body">
                <div class="top-footer">
                    <div class="row">

                    {/* <div class="col-lg-4 col-sm-12 col-md-12 reveal revealleft"> */}
                        <div class="col-lg-4 col-sm-12 col-md-12 revealleft">
                            <h6>About</h6>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta sunt
                                explicabo.
                            </p>
                            <p class="mb-5 mb-lg-2">Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat .
                            </p>
                        </div>
                        <div class="col-lg-2 col-sm-6 col-md-4 revealleft">
                            <h6>Pages</h6>
                            <ul class="list-unstyled mb-5 mb-lg-0">
                                <li><a href="index.html">Dashboard</a></li>
                                <li><a href="alerts.html">Elements</a></li>
                                <li><a href="form-elements.html">Forms</a></li>
                                <li><a href="charts.html">Charts</a></li>
                                <li><a href="datatable.html">Tables</a></li>
                                <li><a href="file-attachments.html">Other Pages</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-sm-6 col-md-4 revealleft">
                            <h6>Information</h6>
                            <ul class="list-unstyled mb-5 mb-lg-0">
                                <li><a href="about.html">Our Team</a></li>
                                <li><a href="about.html">Contact US</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="terms.html">Terms and Services</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-sm-12 col-md-4 revealleft">
                            <div class="">
                                <a href="index.html"><img loading="lazy" alt="" class="logo-2 mb-3"
                                        src="assets/images/brand/logo-3.png"/></a>
                                <a href="index.html"><img src="assets/images/brand/logo.png"
                                        class="logo-3" alt="logo"/></a>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur Excepteur sint occaecat.</p>
                                <div class="form-group">
                                    <div class="input-group">
                                        <input type="text" class="form-control"
                                            placeholder="Enter your email"
                                            aria-label="Example text with button addon"
                                            aria-describedby="button-addon1"/>
                                        <button class="btn btn-primary" type="button"
                                            id="button-addon2">Submit</button>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-list mt-6">
                                <button type="button" class="btn btn-icon rounded-pill"><i
                                        class="fa fa-facebook"></i></button>
                                <button type="button" class="btn btn-icon rounded-pill"><i
                                        class="fa fa-youtube"></i></button>
                                <button type="button" class="btn btn-icon rounded-pill"><i
                                        class="fa fa-twitter"></i></button>
                                <button type="button" class="btn btn-icon rounded-pill"><i
                                        class="fa fa-instagram"></i></button>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
                <footer class="main-footer px-0 pb-0 text-center">
                    <div class="row ">
                        <div class="col-md-12 col-sm-12">
                            Copyright © <span id="year"></span> <a href="javascript:void(0)">Sash</a>.
                            Designed with <span class="fa fa-heart text-danger"></span> by <a
                                href="javascript:void(0)"> Spruko </a> All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</div>
</div>
</div>
<a href="#top" id="back-to-top"><i class="fa fa-angle-up"></i></a>

    </div>
  )
}

export default Homepage