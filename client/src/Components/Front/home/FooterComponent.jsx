import React from 'react'

function FooterComponent() {
  return (
    <div class="demo-footer">
<div class="container">
    <div class="row">
        <div class="card">
            <div class="card-body">


            
                <div class="top-footer">
                    <div class="row">

                    {/* <div class="col-lg-4 col-sm-12 col-md-12 reveal revealleft"> */}
                        <div class="col-lg-4 col-sm-12 col-md-12 revealleft">
                            <h6>About</h6>
                            <p>
                            PataMtaani is a platfom developed to provide software solutions to small and medium enterprises(Bussiness) across all the industries.
                            </p>
                            <p class="mb-5 mb-lg-2">PataMtaani has a couple of solutions,that will transform your business into a fully digital enterprise with a minimum cost possible. 
                            </p>
                        </div>
                        <div class="col-lg-2 col-sm-6 col-md-4 revealleft">
                            <h6>Pages</h6>
                            <ul class="list-unstyled mb-5 mb-lg-0">
                                <li><a href="#">Dashboard</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Customer Care</a></li>
                               
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-sm-6 col-md-4 revealleft">
                            <h6>Information</h6>
                            <ul class="list-unstyled mb-5 mb-lg-0">
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Contact US</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Services</a></li>
                              
                                <li><a href="#">Terms and Services</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-sm-12 col-md-4 revealleft">
                            <div class="">
                                <a href="#"><img loading="lazy" alt="" class="logo-2 mb-3"
                                        src="assets/images/brand/logo_new.png"/></a>
                               
                                <p>Pata Mtaani empowers all small-scale services providers such as cleaners,Beauty therapists,Kinyozi,Automotive etc..sell their services
                                to the local population.</p>
                                <div class="form-group">
                                    
                                </div>
                            </div>
                            <div class="btn-list mt-6">
                           
                                <button type="button" class="btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light"><i
                                        class="fa fa-facebook bg-facebook"></i></button>
                                <button type="button"  class="btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light"> <i
                                class="fa fa-twitter bg-info"></i></button>
                                <button type="button" class="btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light"> <i
                                class="fa fa-google-plus bg-danger"></i></button>
                                <button type="button" class="btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light"> <i
                                class="fa fa-linkedin bg-linkedin"></i></button>
                                <button type="button" class="btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light"><i
                                        class="fa fa-instagram bg-info"></i></button>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
                <footer class="main-footer px-0 pb-0 text-center">
                    <div class="row ">
                        <div class="col-md-12 col-sm-12">
                            Copyright © <span id="year"></span> <a href="javascript:void(0)">PataMtaani</a>.
                            Developed By<a
                                href="javascript:void(0)"> FrankCode Ltd</a> All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default FooterComponent