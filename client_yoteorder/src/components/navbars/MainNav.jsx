import React from 'react'

export default function MainNav() {
  return (
    <div>
    
    <nav class="navbar navbar-expand-lg navbar-light py-2 py-lg-0">
    <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        
        <a class="navbar-brand font-weight-semibold" href="/">
  {/*<img class="img-fluid" src="images/logos/logo-dark.png" alt=""/> */}
        <h3>Yoteoder</h3>
        </a>
        <button class="btn btn-primary btn-sm d-lg-none">Buy</button>

    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <div class="p-3 border-bottom sticky-top bg-white d-block d-lg-none">
                <h5 class="font-weight-semibold mb-0">Menu</h5>
                <button class="navbar-toggler navbar-closer d-lg-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <i class="icon-x"></i>
                </button>
            </div>
         
            <ul class="navbar-nav mx-auto">
               
           
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="landingsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Landings
                    </a>
                    
                    <div class="dropdown-menu overflow-hidden py-0" aria-labelledby="landingsDropdown">
                        <a class="dropdown-item border-bottom border-light py-3" href="./web-application.html">
                            <h6 class="fs-15 font-weight-medium mb-1">Web application</h6>
                            <span class="text-gray-400 font-size-sm">Great for web and other apps</span>
                        </a>
                        <a class="dropdown-item border-bottom border-light py-3" href="./service-provider.html">
                            <h6 class="fs-15 font-weight-medium mb-1">Service provider</h6>
                            <span class="text-gray-400 font-size-sm">Good place for services provider</span>
                        </a>
                        <a class="dropdown-item border-bottom border-light py-3" href="./product-landing.html">
                            <h6 class="fs-15 font-weight-medium mb-1">Product landing</h6>
                            <span class="text-gray-400 font-size-sm">A good place to start from</span>
                        </a>
                        <a class="dropdown-item border-bottom border-light py-3" href="./saas-analytics.html">
                            <h6 class="fs-15 font-weight-medium mb-1">Saas analytics</h6>
                            <span class="text-gray-400 font-size-sm">A good place to start from</span>
                        </a>
                        <a class="dropdown-item py-3" href="./marketing-agency.html">
                            <h6 class="fs-15 font-weight-medium mb-1">Marketing agency</h6>
                            <span class="text-gray-400 font-size-sm">A good place to start from</span>
                        </a>
                    </div>
                </li>

               
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages
                    </a>
                    <div class="dropdown-menu dropdown-megamenu px-2 py-3" aria-labelledby="pagesDropdown">
                        <div class="row">
                            <div class="col-lg-4">
                                <h6 class="dropdown-header px-3 py-2">COMPANY</h6>
                                <ul class="list-unstyled mb-4 mb-lg-0">
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./about-us-1.html">About us 1</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./about-us-2.html">About us 2</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./customers.html">Customers</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./customers-stories.html">Customers story</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./services.html">Services</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./services-details.html">Service details</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./integration.html">integration</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-4">
                                <h6 class="dropdown-header px-3 py-2">Pricing</h6>
                                <ul class="list-unstyled mb-4">
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./pricing-1.html">Pricing 1</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./pricing-2.html">Pricing 2</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./pricing-3.html">Pricing 3</a></li>
                                </ul>

                                <h6 class="dropdown-header px-3 py-2">Contact</h6>
                                <ul class="list-unstyled mb-4 mb-lg-0">
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./contact-us-1.html">Contact us 1</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./contact-us-2.html">Contact us 2</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./contact-us-3.html">Contact us 3</a></li>
                                </ul>
                                
                            </div>

                            <div class="col-lg-4">
                                <h6 class="dropdown-header px-3 py-2">CAREER</h6>
                                <ul class="list-unstyled mb-4">
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./careers.html">Careers</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./careers-details.html">Careers details</a></li>
                                </ul>

                                <h6 class="dropdown-header px-3 py-2">EVENTS</h6>
                                <ul class="list-unstyled mb-4">
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./events.html">All events</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./event-details.html">Event details</a></li>
                                    
                                </ul>

                                <h6 class="dropdown-header px-3 py-2">HELP CENTER</h6>
                                <ul class="list-unstyled">
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./help-center.html">Overview</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./help-center-category.html">Category</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./help-center-article.html">Article</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

               
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="moreDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        More
                    </a>
                    <div class="dropdown-menu dropdown-megamenu-sm px-2 py-3" aria-labelledby="moreDropdown">
                        <div class="row">
                            <div class="col-lg-6">
                                <h6 class="dropdown-header px-3 py-2">BLOG</h6>
                                <ul class="list-unstyled mb-4 mb-lg-0">
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./blog-1.html">Blog with sidebar</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./blog-2.html">Blog classic</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./blog-post-1.html">Blog post 1</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./blog-post-2.html">Blog post 2</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <h6 class="dropdown-header px-3 py-2">AUTHENTICATION</h6>
                                <ul class="list-unstyled">
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./signin.html">Sign in</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./signup.html">Sign up</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./authentication-modals.html">Modals</a></li>
                                    <li class="megamenu-item"><a class="megamenu-link px-3 py-2" href="./forgot-password.html">Forgot password</a></li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </li>

               
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="docsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Docs
                    </a>
                    <div class="dropdown-menu overflow-hidden py-0" aria-labelledby="docsDropdown">
                        <a class="dropdown-item border-bottom border-light py-3" href="./docs/documentation.html">
                            <div class="d-flex align-items-center">
                                <img class="mr-4" src="./images/icons/book.svg" alt=""/>
                                <div>
                                    <h6 class="fs-15 font-weight-medium mb-1">Documentation</h6>
                                    <span class="text-gray-400 font-size-sm">Quick setup and build tools</span>
                                </div>
                            </div>
                        </a>
                        <a class="dropdown-item py-3" href="./docs/changelog.html">
                            <div class="d-flex align-items-center">
                                <img class="mr-4" src="images/icons/changelog.svg" alt=""/>
                                <div>
                                    <h6 class="fs-15 font-weight-medium mb-1">Changelog</h6>
                                    <span class="text-gray-400 font-size-sm">Updates and changelog</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>

            <a href="" class="btn btn-primary btn-sm d-none d-lg-block">Buy now</a>
        </div>
    </div>
</nav>
    
    </div>
  )
}
