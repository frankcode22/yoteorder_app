import React, { useCallback,useState,useEffect,useContext } from 'react';

import {useNavigate} from 'react-router-dom'

function FrontIntro() {

    const [item, setItem] = useState("");

    const history = useNavigate();

    const isAuthenticated = localStorage.getItem("isAuthenticated")


    console.log("THE AUTHENTICATION STATUS",isAuthenticated)




    const searchItem = () => {
       // setLoading(true);
       
        
        setTimeout(() => {
        //   setLoading(false);
          //setAddress(string_lng)
         // history.push('/search-location-avon-park-florida');
         history(`/product_ordered/${item}`);
        }, 500);
        
          };



          localStorage.setItem('ordered_item', JSON.stringify(item));




  return (
    <div>
   


    <section class="parallax-banner py-6 py-lg-8" style={{ backgroundImage: 'linear-gradient(225deg,#00cf8a,#24abff)',marginTop:'80px',height:'500px' }}>
    <div class="parallax-banner-wrapper">
        <img class="img-fluid" src="images/media/intro-bg.jpg" alt="image"/>
    </div>

    <div class="parallax-content">
        <div class="container">
            <div class="row mb-5 justify-content-center text-center">
                <div class="col">
               

                    <h1 class="font-weight-bold mb-0"> Get quality products and services!</h1>
                    <p>Order any product/service near you and save time save time</p>
                </div>
            </div>
            <form class="form-row justify-content-center align-items-center">
                <div class="col-md-6 col-lg-5">
                    <div class="input-group mb-3">
                        <input type="search" class="form-control"  onChange={(event) => {
                            setItem(event.target.value);
                          }} placeholder="Search here..."/>
                        <div class="input-group-append" role="button"  onClick={searchItem}>
                          <span class="input-group-text bg-primary text-white waves-effect">Order/Hire</span>
                        </div>
                    </div>
                   
                </div>
            </form>
        </div>
    </div>
</section>

    
    
    
    </div>
  )
}

export default FrontIntro