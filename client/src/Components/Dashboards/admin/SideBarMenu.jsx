import React from 'react'

import {useEffect,useState,useContext } from 'react';
import { AuthContext } from '../../../helpers/AuthContext'
import{useNavigate,Link} from 'react-router-dom'

function SideBarMenu() {
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
                <a href='/communicate'  class="nav-link text-center m-2">
                    <i class="fe fe-mail"></i>
                </a>
            </li>
            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Followers">
                <a class="nav-link text-center m-2">
                    <i class="fe fe-user"></i>
                </a>
            </li>
            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Logout">
                <a class="nav-link text-center m-2">
                    <i class="fe fe-power"></i>
                </a>
            </li>
        </ul>
    </div>
    <div class="slide-left disabled" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"/></svg></div>
    <ul class="side-menu ">
        <li class="slide">
            <a class="side-menu__item" href="/home_admin"><i class="side-menu__icon fe fe-airplay"></i><span class="side-menu__label">Dashboard</span></a>
        </li>
        <li class="slide">
       
         <a class="side-menu__item" data-bs-toggle="slide"   href="/retailers"><i class="side-menu__icon fe fe-box"></i><span class="side-menu__label">Retailers</span><i class="angle fe fe-chevron-down"></i></a>
            <ul class="slide-menu">
                <li class="side-menu__label1"><Link to="/retailers">Retailors</Link></li>
                <li><a class="slide-item" href="cards.html">Cards</a></li>
                <li><a class="slide-item" href="darggablecards.html">Darggablecards</a></li>
               
                <li class="sub-slide">
                    <a class="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span class="sub-side-menu__label">Mail</span><i class="sub-angle fe fe-chevron-down"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-side-menu__item" href="mail.html">Mail</a></li>
                        <li><a class="sub-side-menu__item" href="mail-compose.html">Mail Compose</a></li>
                        <li><a class="sub-side-menu__item" href="mail-read.html">Read-mail</a></li>
                        <li><a class="sub-side-menu__item" href="mail-settings.html">mail-settings</a></li>
                        <li><a class="sub-side-menu__item" href="chat.html">Chat</a></li>
                    </ul>
                </li>
                <li class="sub-slide">
                    <a class="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span class="sub-side-menu__label">Maps</span><i class="sub-angle fe fe-chevron-down"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-side-menu__item" href="map-leaflet.html">Mapel Maps</a></li>
                        <li><a class="sub-side-menu__item" href="map-vector.html">Vector Maps</a></li>
                    </ul>
                </li>
                <li class="sub-slide">
                    <a class="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span class="sub-side-menu__label">File-Manager</span><i class="sub-angle fe fe-chevron-down"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-side-menu__item" href="file-manager.html">File-Manager</a></li>
                        <li><a class="sub-side-menu__item" href="file-manager-list.html">File-Manager-List</a></li>
                        <li><a class="sub-side-menu__item" href="file-manager-details.html">File-Manager-Details</a></li>
                        <li><a class="sub-side-menu__item" href="file-attachments.html">File-Attachments</a></li>
                    </ul>
                </li>
            </ul>
        </li>
      
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide"   href="/suppliers"><i class="side-menu__icon fe fe-layers "></i><span class="side-menu__label">Suppliers</span><i class="angle fe fe-chevron-down"></i></a>
            <ul class="slide-menu">
                <li class="side-menu__label1"><a href="javascript:void(0);">Suppliers</a></li>
                <li><a class="slide-item" href="alerts.html">Alerts</a></li>
               
                
            </ul>
        </li>

        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide"   href="/subscription-requests"><i class="side-menu__icon fe fe-grid"></i><span class="side-menu__label">Subscriptions</span><i class="angle fe fe-chevron-down"></i></a>
            <ul class="slide-menu">
                <li class="side-menu__label1"><a href="javascript:void(0);">Subscriptions</a></li>
                <li><a class="slide-item" href="alerts.html">Alerts</a></li>
               
                
            </ul>
        </li>
       
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide"   href="javascript:void(0);"><i class="side-menu__icon fe fe-file"></i><span class="side-menu__label">Reports</span><span class="badge bg-info side-badge">6</span><i class="angle fe fe-chevron-down  hor-angle"></i></a>
            <ul class="slide-menu">
                <li class="side-menu__label1"><a href="javascript:void(0);">Reports</a></li>
                <li><a class="slide-item" href="form-elements.html">Form Elements</a></li>
                <li><a class="slide-item" href="form-advanced.html">Advanced Forms</a></li>
                <li><a class="slide-item" href="form-layouts.html">Form Layouts</a></li>
                <li><a class="slide-item" href="form-validation.html">Form Validation</a></li>
                <li><a class="slide-item" href="form-wizards.html">Form Wizards</a></li>
                <li><a class="slide-item" href="form-editor.html">WYSIWYG Editor</a></li>
                <li><a class="slide-item" href="form-sizes.html">Form-Sizes</a></li>
            </ul>
        </li>
      
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide"   href="javascript:void(0);"><i class="side-menu__icon fe fe-compass"></i><span class="side-menu__label">Pages</span><i class="angle fe fe-chevron-down"></i></a>
            <ul class="slide-menu">
                <li class="side-menu__label1"><a href="javascript:void(0);">Pages</a></li>
                <li><a class="slide-item" href="profile.html">Profile</a></li>
                <li><a class="slide-item" href="editprofile.html">Edit-Profile</a></li>
                <li><a class="slide-item" href="about.html">About-Us</a></li>
                <li><a class="slide-item" href="settings.html">Settings</a></li>
                <li><a class="slide-item" href="invoice.html">Invoice</a></li>
                <li><a class="slide-item" href="pricing.html">Pricing</a></li>
                <li><a class="slide-item" href="gallery.html">Gallery</a></li>
                <li><a class="slide-item" href="todotask.html">Todotask</a></li>
                <li><a class="slide-item" href="faq.html">Faqs</a></li>
                <li><a class="slide-item" href="empty.html">Empty Page</a></li>
                <li><a class="slide-item" href="Switcher-1.html">switcher-1</a></li>
                <li class="sub-slide">
                    <a class="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span class="sub-side-menu__label">Tables</span><i class="sub-angle fe fe-chevron-down"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-side-menu__item" href="table-basic.html">Basic Tables</a></li>
                        <li><a class="sub-side-menu__item" href="table-data.html">Data Tables</a></li>
                        <li><a class="sub-side-menu__item" href="edit-table.html">Edit Tables</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide"   href="javascript:void(0);"><i class="side-menu__icon fe fe-grid"></i><span class="side-menu__label">Submenus</span><i class="angle fe fe-chevron-down"></i></a>
            <ul class="slide-menu">
                <li class="side-menu__label1"><a href="javascript:void(0);">Submenus</a></li>
                <li><a class="slide-item"   href="javascript:void(0);">Level1</a></li>
                <li class="sub-slide">
                    <a class="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span class="sub-side-menu__label">Level-2</span><i class="sub-angle fe fe-chevron-down"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-side-menu__item" href="javascript:void(0);">Level-2.1</a></li>
                        <li class="sub-slide2">
                            <a class="sub-side-menu__item" data-bs-toggle="sub-slide2" href="javascript:void(0);"><span class="sub-side-menu__label">Level-2.2</span><i class="sub-angle2 fe fe-chevron-down"></i></a>
                            <ul class="sub-slide-menu1">
                                <li><a class="sub-slide-item2" href="javascript:void(0);">Level-2.2.1</a></li>
                                <li><a class="sub-slide-item2" href="javascript:void(0);">Level-2.2.2</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
      
        
      
    </ul>

    <div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"/></svg></div>
</div>
  )
}

export default SideBarMenu