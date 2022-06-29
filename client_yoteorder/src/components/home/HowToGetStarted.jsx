import React from 'react'
function HowToGetStarted() {
  return (
      <div>
          <section class="py-1 bg-primary-light">
              <div class="container shadow-sm rounded p-1 p-sm-1" data-aos="fade-up" style={{ backgroundImage: 'linear-gradient(225deg,#00cf8a,#0084d6)' }}>
                  <div class="row text-center justify-content-center mb-2 mr-4">
                      <div class="col-xl-7 col-lg-10">
                          <h2 class="font-weight-bold text-warning">HOW TO GET STARTED</h2>
                          {/*<h6 class="font-weight-medium font-size-sm text-gray-600">We Provide Enterprises with Innovative Technology</h6> */}
                      </div>
                  </div>
                  <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1 text-center text-white">
                      <div class="col my-3 my-xl-0 divzoom" data-aos="fade-up">
                          <h2 class="font-weight-bold txt-orange">1 &#8594;</h2>
                          <img class="img-fluid" src="images/booking/01.jpg" alt="" />
                          <small class="d-block mb-2 mt-3 see-det">Submit your request</small>
                          <svg class="text-gray-100" width="141" height="36" viewBox="0 0 141 36" fill="none" >
                          </svg>
                      </div>
                      <div class="col my-3 my-xl-0" data-aos="fade-up" data-aos-delay="100">
                          <h2 class="font-weight-bold txt-orange">2 &#8594;</h2>
                          <img class="img-fluid" src="images/booking/002.jpeg" alt="" />
                          <small class="d-block mb-2 mt-3 see-det"> Choose the seller/Provider</small>
                      </div>
                      <div class="col my-3 my-xl-0" data-aos="fade-up" data-aos-delay="200">
                          <h2 class="font-weight-bold txt-orange">3     &#8594;</h2>
                          <img class="img-fluid" src="images/booking/03.jpg" alt="" />
                          <small class="d-block mb-2 mt-3 see-det">Deposit your payment</small>
                      </div>
                      <div class="col my-3 my-xl-0" data-aos="fade-up" data-aos-delay="300">
                          <h2 class="font-weight-bold txt-orange">4</h2>
                          <img class="img-fluid" src="images/booking/004.jpeg" alt="" />
                          <small class="d-block mb-2 mt-3 see-det">Relax & Wait like a Boss</small>

                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}
export default HowToGetStarted