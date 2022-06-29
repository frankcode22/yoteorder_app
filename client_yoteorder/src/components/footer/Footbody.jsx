import React from 'react'

export default function Footbody() {
    return (
        <div>
            <div class="container_fuid" style={{backgroundColor:"#222222", color:"#999"}}>
                <div class="row m-3">
                    <div class="col-md-2 mr-5">
                        
                        <p><b style={{color:"#ffbe00"}}>Booking software to manage and grow your business.</b></p>
                        <div class="footer-icons">
                        <ul>
                          <li>
                            <a href="#"><i class="bi bi-facebook"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="bi bi-twitter"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="bi bi-instagram"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="bi bi-linkedin"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr class="clearfix w-100 d-md-none" />
                    <div class="col-md-2 mx-auto">
                        <p class="font-weight-bold  m-auto border-top border-danger"><b style={{color:"#ffbe00"}}><u>Industries</u></b> </p>
                        <ul class="list-unstyled">
                            <li>Salon & Beauty</li>
                            <li> Barbershops</li>
                            <li>Creative</li>
                            <li> Wellbeing & Fitness </li>
                            <li>Healthcare </li>
                            <li>Automotive & Repair</li>
                            <li>Maintenance & Repair Services</li>
                            {/* <li>Education</li>
                            <li>Professional Services</li>
                            <li>Homecare Services</li> */}
                        </ul>
                    </div>
                    <hr class="clearfix w-100 d-md-none" />
                    <div class="col-md-2 mx-auto">
                        <p class="font-weight-bold m-auto border-top border-danger"><b style={{color:"#ffbe00"}}><u>Features</u></b> </p>
                        <ul class="list-unstyled">
                            <li>Online Booking</li>
                            <li>Appointment Scheduling</li>
                            <li>Notifications & Reminders</li>
                            <li>Integrations </li>
                            <li>Marketing </li>
                            <li>Book Keeping </li>
                            {/* <li>Analytics & Reports</li>
                            <li>Feedback System</li>
                            <li>Manage Multi-Location</li>
                            <li>Sell Online</li>
                            <li>Business Intelligence </li>
                            <li>Security </li> */}
                        </ul>
                    </div>
                    <hr class="clearfix w-100 d-md-none" />
                    <div class="col-md-2 mx-auto">
                        <p class="font-weight-bold m-auto border-top border-danger"><b style={{color:"#ffbe00"}}><u>Company info</u></b></p>
                        <ul class="list-unstyled">
                            <li><a href='/about-us'>About myTunep</a></li>
                            <li> <a href='/contact-us'>Contact Us</a></li>
                            <li><a href='#'>News</a></li>
                            <li> <a href='#'>Blog</a> </li>
                            <li><a href='#'>Guide</a> </li>
                            <li><a href='#'>Partner</a> </li>
                            <li><a href='/support'>Support</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
