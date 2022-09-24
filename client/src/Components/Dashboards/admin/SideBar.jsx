import React from 'react'
import {useEffect,useState,useContext } from 'react';
import { AuthContext } from '../../../helpers/AuthContext'
import{useNavigate,Link} from 'react-router-dom'

function SideBar() {
    const {authState} = useContext(AuthContext);
    const {setAuthState} = useContext(AuthContext);
    let history = useNavigate();

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ username: "", id: 0, status: false });

        history('/');
        window.location.reload(false);
      };
  return (
   
<div class="sticky">
<div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
<div class="app-sidebar">
    <div class="side-header">
    <a class="header-brand1" href="/dashboard">
    <img src="/assets/images/brand/logo_pink.png" class="header-brand-img desktop-logo" alt="logo"/>
    <img src="/assets/images/brand/logo_pink.png" class="header-brand-img light-logo1"
        alt="logo"/>
    </a>
     
    </div>
    <div class="main-sidemenu">
        <div class="slide-left disabled" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg"
                fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
            </svg></div>
        <ul class="side-menu">
            <li class="sub-category">
                <h3>Main</h3>
            </li>
            <li class="slide">
                <a class="side-menu__item has-link" data-bs-toggle="slide" href="/dashboard"><i
                        class="side-menu__icon fe fe-home"></i><span
                        class="side-menu__label">Dashboard</span></a>
            </li>





            <li class="slide">
            <a class="side-menu__item has-link" href="/products">

          
            
            <i class="side-menu__icon fa fa-product-hunt" data-bs-toggle="tooltip" title="fa fa-product-hunt"></i><span
                    class="side-menu__label">Products</span><span class="badge bg-green br-5 side-badge blink-text pb-1">New</span></a>
        </li>

           
          
          
           
           
            
         
            <li class="sub-category">
                <h3>Misc Pages</h3>
            </li>
          
            <li class="slide">
                <Link class="side-menu__item" data-bs-toggle="slide" to="/vendors">
                    <i class="side-menu__icon fe fe-cpu"></i>
                    <span class="side-menu__label">Vendors</span><i
                        class="angle fe fe-chevron-right"></i></Link>
                <ul class="slide-menu">
                    <li class="side-menu-label1"><Link to="/vendors">Vendors</Link></li>
                    <li><a href="/vendors" class="slide-item">All Businness</a></li>
                   
                </ul>
            </li>

            <li class="sub-category">
            <h3>Account</h3>
        </li>

        <li class="slide">

      {/**
        <a class="side-menu__item" data-bs-toggle="slide" href="#">
        <i class="side-menu__icon fe fe-mail"></i> Inbox
        <span class="badge bg-danger rounded-pill float-end">5</span>
        </a> */}



        <a class="side-menu__item" data-bs-toggle="slide" href='/mail'>
        <i class="side-menu__icon fe fe-mail"></i> Inbox
        <span class="badge bg-danger rounded-pill float-end">5</span>
        </a>

        <li class="slide">
        <a class="side-menu__item" data-bs-toggle="slide" href="/users"><i
                class="side-menu__icon fe fe-users"></i><span
                class="side-menu__label">Users</span><i
                class="angle fe fe-chevron-right"></i></a>
        <ul class="slide-menu">
            <li class="side-menu-label1"><a href="javascript:void(0)">Authentication</a></li>
            <li><a href="login.html" class="slide-item"> Login</a></li>
            <li><a href="register.html" class="slide-item"> Register</a></li>
            <li><a href="forgot-password.html" class="slide-item"> Forgot Password</a></li>
            <li><a href="lockscreen.html" class="slide-item"> Lock screen</a></li>
            <li class="sub-slide">
                <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0)"><span
                        class="sub-side-menu__label">Error Pages</span><i
                        class="sub-angle fe fe-chevron-right"></i></a>
                <ul class="sub-slide-menu">
                    <li><a href="400.html" class="sub-slide-item"> 400</a></li>
                    <li><a href="401.html" class="sub-slide-item"> 401</a></li>
                    <li><a href="403.html" class="sub-slide-item"> 403</a></li>
                    <li><a href="404.html" class="sub-slide-item"> 404</a></li>
                    <li><a href="500.html" class="sub-slide-item"> 500</a></li>
                    <li><a href="503.html" class="sub-slide-item"> 503</a></li>
                </ul>
            </li>
        </ul>
    </li>
   
    <a type="submit" class="side-menu__item" data-bs-toggle="slide" onClick={logout}>
        <i class="side-menu__icon fe fe-alert-circle"></i> Logout
    </a>





        </li>
          
          
        </ul>
        <div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                width="24" height="24" viewBox="0 0 24 24">
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
            </svg></div>
    </div>
</div>

</div>
  )
}

export default SideBar