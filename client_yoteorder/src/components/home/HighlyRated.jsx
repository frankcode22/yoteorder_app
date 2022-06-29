import React from 'react'

import './HighlyRated.css'

function HighlyRated() {
  return (
    <div>


    <section class="py-6 bg-light-primary">
    <div class="container">
        <div class="row mb-5">
            <div class="col-12">
                <div class="d-flex flex-column flex-md-row justify-content-md-between align-items-start align-items-md-center">
                    <div class="mb-3 mb-md-0 mr-auto">
                        <h2 class="font-weight-bold mb-1">HIGLY RATED BY CLIENTS</h2>
                        <p class="text-muted">Join a live event - learn, interact and be entertained.</p>
                    </div>
                    
                    <div>
                        <select class="custom-select custom-select-sm">
                            <option selected>All Events</option>
                            <option value="1">Free</option>
                            <option value="2">Paid</option>
                        </select>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="swiper-container event-details-carousel" data-aos="fade-up">
                    <div class="swiper-wrapper">
                        
                        <div class="swiper-slide">


                       
                            <a href="./event-details.html" class="card card-event shadow-sm text-reset hover-shadow">

                            


                                <picture>
                                    <source srcset="./images/media/event-01.webp" type="image/webp"/>
                                    <source srcset="./images/media/event-01.jpg" type="image/jpg"/> 
                                    <img src="./images/media/event-01.jpg" alt="" class="card-img-top"/>
                                </picture>
                    
                                <div class="card-body">
                                    <div class="font-size-xs text-primary mb-3 text-uppercase font-weight-medium d-block">Seminars</div>
                                    <div class="d-flex">
                                        <div class="text-right">
                                            <span class="font-size-xs d-block font-weight-medium text-uppercase mt-1 text-muted">Sep</span>
                                            <span class="h3 d-block font-weight-bold text-primary">25</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                <div class="avatar avatar-xs">
                                    <img class="avatar-img rounded-circle" src="./images/avatar/user-6.jpg" alt=""/>
                                </div>
            
                                <div class="ml-3">
                                    <h6 class="font-size-sm font-weight-semibold line-height-1 mb-0">Jane Kamotho</h6>
                                    <div class="rating-group mb-4">
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/rating.svg" alt=""/>
                                </div>
                                </div>
                            </div>
                                    </div>

                                    
                                </div>

                               

                                <div class="bg-gray-50 border-top border-light p-3">
                                <div class="d-flex flex-wrap">
                              
                                <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 mr-1 small" style={{color:'#000'}}>Onion</span>
                                <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 mr-1 small" style={{color:'#000'}}>Tomatoes</span>
                                <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 small" style={{color:'#000'}}>Potatoes</span>
                            </div>
                            </div>

                                <div class="bg-gray-50 border-top border-light p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="badge badge-soft-warning border border-warning py-2 px-3" style={{color:'#000'}}>Hire Seller</div>
                                       
                                    </div>
                                </div>
                            </a>



                         
                        </div>
                        
                        <div class="swiper-slide">
                        <a href="./event-details.html" class="card card-event shadow-sm text-reset hover-shadow">

                            


                        <picture>
                            <source srcset="./images/media/event-01.webp" type="image/webp"/>
                            <source srcset="./images/media/event-01.jpg" type="image/jpg"/> 
                            <img src="./images/media/event-01.jpg" alt="" class="card-img-top"/>
                        </picture>
            
                        <div class="card-body">
                            <div class="font-size-xs text-primary mb-3 text-uppercase font-weight-medium d-block">Seminars</div>
                            <div class="d-flex">
                                <div class="text-right">
                                    <span class="font-size-xs d-block font-weight-medium text-uppercase mt-1 text-muted">Sep</span>
                                    <span class="h3 d-block font-weight-bold text-primary">25</span>
                                </div>
                                <div class="d-flex align-items-center">
                        <div class="avatar avatar-xs">
                            <img class="avatar-img rounded-circle" src="./images/avatar/user-6.jpg" alt=""/>
                        </div>
    
                        <div class="ml-3">
                            <h6 class="font-size-sm font-weight-semibold line-height-1 mb-0">Fatuma Mohammed</h6>
                            <div class="rating-group mb-4">
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/rating.svg" alt=""/>
                        </div>
                        </div>
                    </div>
                            </div>

                            
                        </div>

                       

                        <div class="bg-gray-50 border-top border-light p-3">
                        <div class="d-flex flex-wrap">
                      
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 mr-1 small" style={{color:'#000'}}>Oranges</span>
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 mr-1 small"style={{color:'#000'}}>Water melon</span>
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 small"style={{color:'#000'}}>Banana</span>
                    </div>
                    </div>

                        <div class="bg-gray-50 border-top border-light p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <button class="badge badge-soft-warning border border-warning py-2 px-3" style={{color:'#000'}}>Hire Seller</button>
                               
                            </div>
                        </div>
                    </a>
                        </div>
                        
                        <div class="swiper-slide">
                        <a href="./event-details.html" class="card card-event shadow-sm text-reset hover-shadow">

                            


                                <picture>
                                    <source srcset="./images/media/event-01.webp" type="image/webp"/>
                                    <source srcset="./images/media/event-01.jpg" type="image/jpg"/> 
                                    <img src="./images/media/event-01.jpg" alt="" class="card-img-top"/>
                                </picture>
                    
                                <div class="card-body">
                                    <div class="font-size-xs text-primary mb-3 text-uppercase font-weight-medium d-block">Seminars</div>
                                    <div class="d-flex">
                                        <div class="text-right">
                                            <span class="font-size-xs d-block font-weight-medium text-uppercase mt-1 text-muted">Sep</span>
                                            <span class="h3 d-block font-weight-bold text-primary">25</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                <div class="avatar avatar-xs">
                                    <img class="avatar-img rounded-circle" src="./images/avatar/user-6.jpg" alt=""/>
                                </div>
            
                                <div class="ml-3">
                                    <h6 class="font-size-sm font-weight-semibold line-height-1 mb-0">Charline Mathis</h6>
                                    <div class="rating-group mb-4">
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/star.svg" alt=""/>
                                    <img src="/images/icons/rating.svg" alt=""/>
                                </div>
                                </div>
                            </div>
                                    </div>

                                    
                                </div>

                               

                                <div class="bg-gray-50 border-top border-light p-3">
                                <div class="d-flex flex-wrap">
                              
                                <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 mr-1 small">Cloud server</span>
                                <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 mr-1 small">Integration</span>
                                <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 small">Reports</span>
                            </div>
                            </div>

                                <div class="bg-gray-50 border-top border-light p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <button class="badge badge-soft-warning border border-warning py-2 px-3">Hire Seller</button>
                                       
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        <div class="swiper-slide">
                        <a href="./event-details.html" class="card card-event shadow-sm text-reset hover-shadow">

                            


                        <picture>
                            <source srcset="./images/media/event-01.webp" type="image/webp"/>
                            <source srcset="./images/media/event-01.jpg" type="image/jpg"/> 
                            <img src="./images/media/event-01.jpg" alt="" class="card-img-top"/>
                        </picture>
            
                        <div class="card-body">
                            <div class="font-size-xs text-primary mb-3 text-uppercase font-weight-medium d-block">Seminars</div>
                            <div class="d-flex">
                                <div class="text-right">
                                    <span class="font-size-xs d-block font-weight-medium text-uppercase mt-1 text-muted">Sep</span>
                                    <span class="h3 d-block font-weight-bold text-primary">25</span>
                                </div>
                                <div class="d-flex align-items-center">
                        <div class="avatar avatar-xs">
                            <img class="avatar-img rounded-circle" src="./images/avatar/user-6.jpg" alt=""/>
                        </div>
    
                        <div class="ml-3">
                            <h6 class="font-size-sm font-weight-semibold line-height-1 mb-0">Charline Mathis</h6>
                            <div class="rating-group mb-4">
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/rating.svg" alt=""/>
                        </div>
                        </div>
                    </div>
                            </div>

                            
                        </div>

                       

                        <div class="bg-gray-50 border-top border-light p-3">
                        <div class="d-flex flex-wrap">
                      
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 mr-1 small">Cloud server</span>
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 mr-1 small">Integration</span>
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 small">Reports</span>
                    </div>
                    </div>

                        <div class="bg-gray-50 border-top border-light p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="badge badge-soft-warning border border-warning py-2 px-3">Hire Seller</div>
                               
                            </div>
                        </div>
                    </a>
                        </div>
                        
                        <div class="swiper-slide">
                        <a href="./event-details.html" class="card card-event shadow-sm text-reset hover-shadow">

                            


                        <picture>
                            <source srcset="./images/media/event-01.webp" type="image/webp"/>
                            <source srcset="./images/media/event-01.jpg" type="image/jpg"/> 
                            <img src="./images/media/event-01.jpg" alt="" class="card-img-top"/>
                        </picture>
            
                        <div class="card-body">
                            <div class="font-size-xs text-primary mb-3 text-uppercase font-weight-medium d-block">Seminars</div>
                            <div class="d-flex">
                                <div class="text-right">
                                    <span class="font-size-xs d-block font-weight-medium text-uppercase mt-1 text-muted">Sep</span>
                                    <span class="h3 d-block font-weight-bold text-primary">25</span>
                                </div>
                                <div class="d-flex align-items-center">
                        <div class="avatar avatar-xs">
                            <img class="avatar-img rounded-circle" src="./images/avatar/user-6.jpg" alt=""/>
                        </div>
    
                        <div class="ml-3">
                            <h6 class="font-size-sm font-weight-semibold line-height-1 mb-0">Charline Mathis</h6>
                            <div class="rating-group mb-4">
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/rating.svg" alt=""/>
                        </div>
                        </div>
                    </div>
                            </div>

                            
                        </div>

                       

                        <div class="bg-gray-50 border-top border-light p-3">
                        <div class="d-flex flex-wrap">
                      
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 mr-1 small">Cloud server</span>
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 mr-1 small">Integration</span>
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 small">Reports</span>
                    </div>
                    </div>

                        <div class="bg-gray-50 border-top border-light p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="badge badge-soft-warning border border-warning py-2 px-3">Hire Seller</div>
                               
                            </div>
                        </div>
                    </a>
                        </div>
                        
                        <div class="swiper-slide">
                        <a href="./event-details.html" class="card card-event shadow-sm text-reset hover-shadow">

                            


                        <picture>
                            <source srcset="./images/media/event-01.webp" type="image/webp"/>
                            <source srcset="./images/media/event-01.jpg" type="image/jpg"/> 
                            <img src="./images/media/event-01.jpg" alt="" class="card-img-top"/>
                        </picture>
            
                        <div class="card-body">
                            <div class="font-size-xs text-primary mb-3 text-uppercase font-weight-medium d-block">Seminars</div>
                            <div class="d-flex">
                                <div class="text-right">
                                    <span class="font-size-xs d-block font-weight-medium text-uppercase mt-1 text-muted">Sep</span>
                                    <span class="h3 d-block font-weight-bold text-primary">25</span>
                                </div>
                                <div class="d-flex align-items-center">
                        <div class="avatar avatar-xs">
                            <img class="avatar-img rounded-circle" src="./images/avatar/user-6.jpg" alt=""/>
                        </div>
    
                        <div class="ml-3">
                            <h6 class="font-size-sm font-weight-semibold line-height-1 mb-0">Charline Mathis</h6>
                            <div class="rating-group mb-4">
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/rating.svg" alt=""/>
                        </div>
                        </div>
                    </div>
                            </div>

                            
                        </div>

                       

                        <div class="bg-gray-50 border-top border-light p-3">
                        <div class="d-flex flex-wrap">
                      
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 mr-1 small">Cloud server</span>
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 mr-1 small">Integration</span>
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 small">Reports</span>
                    </div>
                    </div>

                        <div class="bg-gray-50 border-top border-light p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="badge badge-soft-warning border border-warning py-2 px-3">Hire Seller</div>
                               
                            </div>
                        </div>
                    </a>
                        </div>
                        
                        <div class="swiper-slide">
                        <a href="./event-details.html" class="card card-event shadow-sm text-reset hover-shadow">

                            


                        <picture>
                            <source srcset="./images/media/event-01.webp" type="image/webp"/>
                            <source srcset="./images/media/event-01.jpg" type="image/jpg"/> 
                            <img src="./images/media/event-01.jpg" alt="" class="card-img-top"/>
                        </picture>
            
                        <div class="card-body">
                            <div class="font-size-xs text-primary mb-3 text-uppercase font-weight-medium d-block">Seminars</div>
                            <div class="d-flex">
                                <div class="text-right">
                                    <span class="font-size-xs d-block font-weight-medium text-uppercase mt-1 text-muted">Sep</span>
                                    <span class="h3 d-block font-weight-bold text-primary">25</span>
                                </div>
                                <div class="d-flex align-items-center">
                        <div class="avatar avatar-xs">
                            <img class="avatar-img rounded-circle" src="./images/avatar/user-6.jpg" alt=""/>
                        </div>
    
                        <div class="ml-3">
                            <h6 class="font-size-sm font-weight-semibold line-height-1 mb-0">Charline Mathis</h6>
                            <div class="rating-group mb-4">
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/star.svg" alt=""/>
                            <img src="/images/icons/rating.svg" alt=""/>
                        </div>
                        </div>
                    </div>
                            </div>

                            
                        </div>

                       

                        <div class="bg-gray-50 border-top border-light p-3">
                        <div class="d-flex flex-wrap">
                      
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 mr-1 small">Cloud server</span>
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 mr-1 small">Integration</span>
                        <span class="badge badge-soft-primary font-weight-semibold px-2 py-1 my-1 small">Reports</span>
                    </div>
                    </div>

                        <div class="bg-gray-50 border-top border-light p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="badge badge-soft-warning border border-warning py-2 px-3">Hire Seller</div>
                               
                            </div>
                        </div>
                    </a>
                        </div>
                    </div>
                    
                   
                    <div class="swiper-pagination text-left text-lg-center position-relative pt-4"></div>
                </div>
            </div>
        </div>
    </div>
</section>
    
    
    </div>
  )
}

export default HighlyRated