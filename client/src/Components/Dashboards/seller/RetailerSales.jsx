import React from 'react'
import RetailerSalesDetails from './RetailerSalesDetails'
import SideMenu from './SideMenu'
import TopHeader from './TopHeader'

function RetailerSales() {
  return (
    <div class="main-body app sidebar-mini ltr">
    <div class="page custom-index">

    <div class="main-header side-header sticky nav nav-item">


    <TopHeader></TopHeader>

             
               

            </div>


            <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
            <div class="sticky">
                <aside class="app-sidebar sidebar-scroll">
                <div class="main-sidebar-header active">
                <a class="desktop-logo logo-light active" href="/home_retailer"><img src="assets/img/brand/logo_c.jpeg" class="main-logo" alt="logo"/></a>
                <a class="desktop-logo logo-dark active" href="/home_retailer"><img src="assets/img/brand/logo_c.jpeg" class="main-logo" alt="logo"/></a>
                <a class="logo-icon mobile-logo icon-light active" href="/home_retailer"><img src="assets/img/brand/favicon.png" alt="logo"/></a>
                <a class="logo-icon mobile-logo icon-dark active" href="/home_retailer"><img src="assets/img/brand/favicon-white.png" alt="logo"/></a>
            </div>




               <SideMenu></SideMenu>




                    
                </aside>
            </div>



              <div class="main-content app-content">



              <RetailerSalesDetails></RetailerSalesDetails>

                 






              </div>




              <div class="main-footer ht-45">
            <div class="container-fluid pd-t-0-f ht-100p">
                <span> Copyright © 2022 <a href="javascript:void(0);" class="text-primary">PataMtaani Ltd</a>.All rights reserved.</span>
            </div>
        </div>


            



    </div>

    <a href="#top" id="back-to-top"><i class="las la-angle-double-up"></i></a>
    
    
    </div>
  )
}

export default RetailerSales