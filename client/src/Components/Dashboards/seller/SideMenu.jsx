import React from 'react'

import {useEffect,useState,useContext } from 'react';
import { AuthContext } from '../../../helpers/AuthContext'
import{useNavigate,Link} from 'react-router-dom'

function SideMenu() {
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
    <div class="main-sidemenu">
    <div class="main-sidebar-loggedin">
        <div class="app-sidebar__user">
            <div class="dropdown user-pro-body text-center">
                <div class="user-pic">
                    <img src="assets/img/faces/6.jpg" alt="user-img" class="rounded-circle mCS_img_loaded"/>
                </div>
                <div class="user-info">
                    <h6 class=" mb-0 text-dark">{authState.first_name}</h6>
                    <span class="text-muted app-sidebar__user-name text-sm">{authState.role}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="sidebar-navs">
        <ul class="nav  nav-pills-circle">
            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Settings" aria-describedby="tooltip365540">
                <a class="nav-link text-center m-2">
                    <i class="fe fe-settings"></i>
                </a>
            </li>
            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Chat" aria-describedby="tooltip143427">
                <a class="nav-link text-center m-2">
                    <i class="fe fe-mail"></i>
                </a>
            </li>
            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Followers">
                <a class="nav-link text-center m-2">
                    <i class="fe fe-user"></i>
                </a>
            </li>
            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Logout">
                <a class="nav-link text-center m-2" href='/'>
                    <i class="fe fe-power"></i>
                </a>
            </li>
        </ul>
    </div>
    <div class="slide-left disabled" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"/></svg></div>
    <ul class="side-menu ">
        <li class="slide">
            <a class="side-menu__item" href="/home_retailer"><i class="side-menu__icon fe fe-home"></i><span class="side-menu__label">Home</span></a>
        </li>


        <li class="slide">
        
        <a class="side-menu__item" data-bs-toggle="slide"   href="/pos"><i class="side-menu__icon fe fe-shopping-cart"></i><span class="side-menu__label">POS</span><span class="badge bg-success side-badge">3</span><i class="angle fe fe-chevron-down  hor-angle"></i></a>
        <ul class="slide-menu">
            <li><a class="slide-item" href="products.html">Products</a></li>
            <li><a class="slide-item" href="product-details.html">Product-Details</a></li>
            <li><a class="slide-item" href="product-cart.html">Cart</a></li>
            <li><a class="slide-item" href="check-out.html">Check-out</a></li>
            <li><a class="slide-item" href="wish-list.html">Wish-list</a></li>
        </ul>
    </li>


    <li class="slide">

   
        
    <a class="side-menu__item" data-bs-toggle="slide"   href="/sales"><i class="side-menu__icon fas fa-dollar-sign"></i><span class="side-menu__label">Sales</span><span class="badge bg-success side-badge">3</span><i class="angle fe fe-chevron-down  hor-angle"></i></a>
    <ul class="slide-menu">
        <li><a class="slide-item" href="products.html">Products</a></li>
        <li><a class="slide-item" href="product-details.html">Product-Details</a></li>
        <li><a class="slide-item" href="product-cart.html">Cart</a></li>
        <li><a class="slide-item" href="check-out.html">Check-out</a></li>
        <li><a class="slide-item" href="wish-list.html">Wish-list</a></li>
    </ul>
</li>

       
     
       
      
      
      
        <li class="slide">
        <a class="side-menu__item" data-bs-toggle="slide"   href="/product_inventory"><i class="side-menu__icon fas fa-clipboard-list"></i><span class="side-menu__label">Stock</span><i class="angle fe fe-chevron-down"></i></a>
      
            <ul class="slide-menu">
                <li><a class="slide-item" href="products.html">Products</a></li>
                <li><a class="slide-item" href="product-details.html">Product-Details</a></li>
                <li><a class="slide-item" href="product-cart.html">Cart</a></li>
                <li><a class="slide-item" href="check-out.html">Check-out</a></li>
                <li><a class="slide-item" href="wish-list.html">Wish-list</a></li>
            </ul>
        </li>

        {/**<li class="slide">
        <a class="side-menu__item" href="/suppliers-around"><i class="side-menu__icon fe fe-airplay"></i><span class="side-menu__label">Suppliers</span></a>
        </li>*/}

        

        <li class="slide">
       
        <a class="side-menu__item" href="/product_inventory"><i class="side-menu__icon fe fe-bell"></i><span class="side-menu__label">Notifications</span></a>
    </li>

    <li class="slide">
       
    <a class="side-menu__item" href="/my-account"><i class="side-menu__icon fe fe-settings"></i><span class="side-menu__label">My Account</span></a>
</li>

   
     
    </ul>

    <div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"/></svg></div>
</div>
  )
}

export default SideMenu