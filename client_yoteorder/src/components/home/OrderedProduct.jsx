import React from 'react'


import HeaderFloating from '../navbars/HeaderFloating'

import { useEffect,useState } from 'react';

import {useParams} from "react-router-dom"
import OrderedProductContent from './OrderedProductContent';

import { Helmet } from "react-helmet";

function OrderedProduct() {
    let { item } = useParams();

  return (
    <div>
    <Helmet>

    <link rel="stylesheet" href="/fonts/favland.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
    <link href="/css/theme.min.css" rel="stylesheet"/>



    </Helmet>


    <HeaderFloating></HeaderFloating>

    <React.StrictMode>
    
    

   <OrderedProductContent/>



   </React.StrictMode>




   <Helmet>

   <script src="/js/jquery/jquery-3.5.1.min.js"></script>
   <script src="/js/popper/popper.min.js"></script>
   <script src="/js/bootstrap/bootstrap.min.js"></script>
   <script src="/js/aos/aos.js"></script>
   <script src="/js/wave-effect/waves.min.js"></script>

   <script src="/js/parallax/simpleParallax.min.js"></script>
   <script src="/js/swiper/swiper.min.js"></script>
   <script src="/js/swiper/swiper.init.js"></script>
   <script src="/js/shuffle/shuffle.min.js"></script>
   <script src="/js/countup/countUp.js"></script>


   <script src="../js/theme.js"></script>


   </Helmet>
    
    
    
    
    </div>
  )
}

export default OrderedProduct