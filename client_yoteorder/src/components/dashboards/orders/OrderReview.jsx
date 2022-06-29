import React from 'react'
import HeaderFloating from '../customer/HeaderFloating'

import {useNavigate,useParams} from 'react-router-dom'

function OrderReview() {
    let {id} = useParams();

    const history = useNavigate();


    const addfunds = () => {
        // setLoading(true);


      
        
         
         setTimeout(() => {
         //   setLoading(false);
           //setAddress(string_lng)
          // history.push('/search-location-avon-park-florida');
          history(`/pay/order/${id}`);
         }, 500);
         
           };

  return (
    <div>

    <HeaderFloating/>


    <section class="py-6 bg-light-primary" id="openPositions"  style={{marginTop:'120px'}}>
    <div class="container">
        <div class="row">
        <div class="card light-shadow mb-3" data-aos="fade-up" data-aos-delay="150">
        <div class="card-body">
            <div class="d-flex mb-3">
                <span class="badge badge-primary mr-1">Fulltime</span>
                <span class="badge badge-info mx-1">Remote</span>
            </div>
            <div class="col mb-3">

            <h4 class="font-weight-bold mb-0">Order Name</h4>
            <p class="text-muted mb-0">Potatoes</p>
            <p class="pt-4">Just need cheap potatoes I am near astrol petrol station.</p>
            
            </div>

            <div class="col mb-3">
            <h1>Writer Infor</h1>
            
            </div>

          

         
        </div>
    </div>
        </div>

        <div class="row">
            <div class="col-lg-3 order-2 order-lg-1">
                <div class="card light-shadow sticky-panel-top">
                    <div class="card-body">
                        <div class="mb-5">
                            <h6 class="font-weight-bold mb-3">Order Summary</h6>

                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="fullTimeJob" checked/>
                                <label class="custom-control-label" for="fullTimeJob">Price</label>
                                <label  >Kes. 300</label>
                            </div>

                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="partTimeJob"/>
                                <label class="custom-control-label" for="partTimeJob">Order Total</label>
                                <label> Ksh.300</label>
                            </div>
                        </div>

                        <div class="mb-5">
                         <hr></hr>

                            <div class="custom-control custom-checkbox">
                               <p>Funds will be held in your account until you get the order</p>
                            </div>

                            <div class="custom-control custom-checkbox">
                          

                            <button type='submit' onClick={addfunds} class="btn btn-primary w-100 w-sm-auto mb-2 mb-sm-0 waves-effect">Add funds</button>
                           
                            </div>

                            
                        </div>

                      
                    </div>
                </div>
            </div>

            <div class="col-lg-9 order-1 order-lg-2">
               
             
               
                <div class="card light-shadow mb-3" data-aos="fade-up" data-aos-delay="150">
                    <div class="card-body">
                      

                        <h4 class="font-weight-bold mb-0"><span class="badge badge-primary mr-1">Useful services</span></h4>
                        <p class="text-muted mb-0">Ahmedabad</p>
                        <p class="pt-4">We are always trying to find opportunities to increase our team with new proficient and talented colleagues who love working during a start-up culture, and this point , we'd like a Senior Front-end Developer, with strong technical skills and relevant experience of a minimum of 15 years.</p>

                      {/**  <div class="d-flex flex-column flex-sm-row align-items-center mt-5">
                      <a href="./careers-details.html#applyForJob" class="btn btn-primary w-100 w-sm-auto mb-2 mb-sm-0 waves-effect">Apply Now</a>
                      <a href="./careers-details.html" class="btn btn-outline-primary w-100 w-sm-auto ml-sm-2 waves-effect">View Job</a>
                  </div>*/} 
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    
    
    
    </div>
  )
}

export default OrderReview