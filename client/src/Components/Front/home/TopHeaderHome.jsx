import React from 'react'
import {Link,useNavigate} from 'react-router-dom'


function TopHeaderHome() {



    const history = useNavigate();

    const getStarted=()=>{
        history('/get-started')
     }

     const signIn=()=>{
        history('/login')
     }

  return (
    
    <div class="header-main">
    
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8 col-sm-4 col-7">
            <div class="top-bar-left d-flex">
              <div class="clearfix">
                <ul class="socials">
                  <li> <a class="social-icon text-dark" href="#"><i class="fa fa-facebook"></i></a> </li>
                  <li> <a class="social-icon text-dark" href="#"><i class="fa fa-twitter"></i></a> </li>
                  <li> <a class="social-icon text-dark" href="#"><i class="fa fa-linkedin"></i></a> </li>
                  <li> <a class="social-icon text-dark" href="#"><i class="fa fa-google-plus"></i></a>
                  </li>
                </ul>
              </div>
              <div class="clearfix">
                <ul class="contact border-start">
                  <li class="me-5 d-lg-none"> <a href="#" class="callnumber text-dark"><span><i
                          class="fa fa-phone me-1"></i>: +254 714 639 773</span></a> </li>
                  <li class="select-country me-5"> <select
                      class="form-control select2-flag-search select2-hidden-accessible"
                      data-placeholder="Select Country" data-select2-id="4" tabindex="-1"
                      aria-hidden="true">
                      <option value="KE" data-select2-id="6">Kenya</option>
                      <option value="AF">Uganda</option>
                      <option value="AL">Tanzania</option>
                      <option value="AD">Burundi</option>
                      <option value="AG">Rwanda</option>
                      
                     
                    </select><span class="select2 select2-container select2-container--default"
                      dir="ltr" data-select2-id="5" style={{width: "100%"}}><span class="selection"><span
                          class="select2-selection select2-selection--single" role="combobox"
                          aria-haspopup="true" aria-expanded="false" tabindex="0"
                          aria-labelledby="select2-8juu-container"><span
                            class="select2-selection__rendered" id="select2-8juu-container"
                            role="textbox" aria-readonly="true"
                            title="United States of America"><span><img
                                src="../assets/images/flags/um.svg" class="img-flag"/> Kenya
                              </span></span><span
                            class="select2-selection__arrow" role="presentation"><b
                              role="presentation"></b></span></span></span><span
                        class="dropdown-wrapper" aria-hidden="true"></span></span> </li>
                  <li class="dropdown me-5"> <a href="#" class="text-dark"
                      data-bs-toggle="dropdown"><span> Language <i
                          class="fa fa-caret-down text-muted"></i></span> </a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"> <a href="#"
                        class="dropdown-item"> English </a> <a class="dropdown-item" href="#">
                        Arabic </a> <a class="dropdown-item" href="#"> German </a> <a href="#"
                        class="dropdown-item"> Greek </a> <a href="#" class="dropdown-item"> Spanish
                      </a> </div>
                  </li>
                  <li class="dropdown"> <a href="#" class="text-dark"
                      data-bs-toggle="dropdown"><span>Currency <i
                          class="fa fa-caret-down text-muted"></i></span></a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"> <a href="#"
                        class="dropdown-item"> Ksh </a> <a class="dropdown-item" href="#"> USD </a>
                      <a class="dropdown-item" href="#"> EUR </a> <a href="#" class="dropdown-item">
                        GBP </a> </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-sm-8 col-5">
            <div class="top-bar-right">
              <ul class="custom">
                <li> <Link to='/create_account' class="text-dark"><i class="fa fa-user me-1"></i>
                    <span>Register</span></Link> </li>
                <li> <Link to="/login" class="text-dark"><i class="fa fa-sign-in me-1"></i>
                    <span>Login</span></Link> </li>
                <li class="dropdown"> <a href="#" class="text-dark" data-bs-toggle="dropdown"><i
                      class="fa fa-home me-1"></i><span> My Dashboard</span></a>
                  <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"> <a href="mydash.html"
                      class="dropdown-item"> <i class="dropdown-icon icon icon-user"></i> My Profile
                    </a> <a class="dropdown-item" href="#"> <i
                        class="dropdown-icon icon icon-speech"></i> Inbox </a> <a
                      class="dropdown-item" href="#"> <i class="dropdown-icon icon icon-bell"></i>
                      Notifications </a> <a href="mydash.html" class="dropdown-item"> <i
                        class="dropdown-icon  icon icon-settings"></i> Account Settings </a> <a
                      class="dropdown-item" href="#"> <i class="dropdown-icon icon icon-power"></i>
                      Log out </a> </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div class="sticky" style={{marginBottom: "0px"}}>
      <div class="horizontal-header clearfix ">
        <div class="container"> <a id="horizontal-navtoggle" class="animated-arrow"><span></span></a> <span
            class="smllogo"> <img class="mobile-light-logo" src="assets/img/brand/logo_pink.png" width="120"
              alt=""/> <img class="mobile-dark-logo" src="assets/img/brand/logo_pink.png" width="120" alt=""/>
          </span> <a href="tel:245-6325-3256" class="callusbtn"><i class="fa fa-phone" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
    <div class="jumps-prevent" style={{paddingTop: "0px"}}></div> 
    <div id="sticky-wrapper" class="sticky-wrapper" style={{height: "87"}}>
      <div class="horizontal-main bg-dark-transparent clearfix" style={{width: "1583px"}} >
        <div class="horizontal-mainwrapper container clearfix">
          <div class="desktoplogo"> <a href="/"><img src="assets/img/brand/logo_pink.png" alt=""/></a>
          </div>
          <div class="desktoplogo-1"> <a href="/"><img src="/assets/img/brand/logo_pink.png" alt=""/></a>
          </div> 
          <nav class="horizontalMenu clearfix d-md-flex">
            <div class="overlapblackbg"></div>
            <ul class="horizontalMenu-list">
              
              <li aria-haspopup="true"><Link to='/' class="active">Home</Link></li>
              <li aria-haspopup="true"><a href="#">Features </a></li>
            


              {/**   <li aria-haspopup="true"><span class="horizontalMenu-click"><i
                    class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#">Blog <span
                    class="fa fa-caret-down m-0"></span></a>
                <ul class="sub-menu">
                  <li aria-haspopup="true"><span class="horizontalMenu-click02"><i
                        class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#">Blog
                      Grid <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></a>
                    <ul class="sub-menu">
                      <li aria-haspopup="true"><a href="blog-grid.html">Blog Grid Left</a></li>
                      <li aria-haspopup="true"><a href="blog-grid-right.html">Blog Grid Right</a></li>
                      <li aria-haspopup="true"><a href="blog-grid-center.html">Blog Grid Center</a>
                      </li>
                    </ul>
                  </li>
                  <li aria-haspopup="true"><span class="horizontalMenu-click02"><i
                        class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#">Blog
                      List <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></a>
                    <ul class="sub-menu">
                      <li aria-haspopup="true"><a href="blog-list.html">Blog List Left</a></li>
                      <li aria-haspopup="true"><a href="blog-list-right.html">Blog List Right</a></li>
                      <li aria-haspopup="true"><a href="blog-list-center.html">Blog List Center</a>
                      </li>
                    </ul>
                  </li>
                  <li aria-haspopup="true"><span class="horizontalMenu-click02"><i
                        class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#">Blog
                      Details <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></a>
                    <ul class="sub-menu">
                      <li aria-haspopup="true"><a href="blog-details.html">Blog Details Left</a></li>
                      <li aria-haspopup="true"><a href="blog-details-right.html">Blog Details
                          Right</a></li>
                      <li aria-haspopup="true"><a href="blog-details-center.html">Blog Details
                          Center</a></li>
                    </ul>
                  </li>
                </ul>
              </li>*/}
            
            
              <li aria-haspopup="true"><span class="horizontalMenu-click"><i
                    class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#">Services
                  <span class="fa fa-caret-down m-0"></span></a>
                <ul class="sub-menu">
                  <li aria-haspopup="true"><a href="classified.html">Classifieds Left</a></li>
                  <li aria-haspopup="true"><a href="classified-right.html">Classifieds Rights </a></li>
                  <li aria-haspopup="true"><a href="switcher.html">Switcher</a></li>
                 
                </ul>
              </li>
              <li aria-haspopup="true"><Link to={'/helpcentre'}>Help Center <span class="wsarrow"></span></Link>
              </li>
              <li aria-haspopup="true" class="d-lg-none mt-5 pb-5 mt-lg-0"> <span><a class="btn btn-orange"
                    href="ad-posts.html">Post Free Ad</a></span> </li>
            </ul>
            <ul class="mb-0">
              <li aria-haspopup="true" class="mt-5 d-none d-lg-block "> <span><a
                    class="btn btn-orange ad-post " href="ad-posts.html">Post Free Ad</a></span> </li>
            </ul>
          </nav> 
        </div>
      </div>
    </div>
  </div>
  )
}

export default TopHeaderHome