import React from 'react'

function InnerMenuHome(props) {
    return (
      <div class="col-lg-4 col-xl-3 onmobile">
                            <div class="card custom-card">
                            <div class="card-header">
            <div class="card-title"></div>
        </div>
                                
                            <div class="main-content-left main-content-left-mail card-body pt-0 app">
                                   
                                   
  
                                    <div class="sidebar-navs onmobile"> <ul class="nav  nav-pills-circle">
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Home" aria-describedby="tooltip365540">
              <a class="nav-link text-center m-2"  href="/home_retailer">
                  <i class="fe fe-home"></i> </a>
          </li>
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Inventory" aria-describedby="tooltip143427">
              <a class="nav-link text-center m-2" href="/product_inventory">
                  <i class="fa fa-list">
                  </i>
  
              </a>
          </li>
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Sales">
              <a class="nav-link text-center m-2" href="/sales"><i class="fas fa-dollar-sign"></i>  </a> </li>
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="POS">
              <a class="nav-link text-center m-2"href="/pos"><i class=" fe fe-shopping-cart"></i>
              </a>
          </li>
  
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Setting">
              <a class="nav-link text-center m-2" href="/my-account"><i class="fe fe-settings"></i>
              </a>
          </li>
      </ul>
      </div>
                               
  
         
      </div>
                            </div>
                        </div>
    )
  }

export default InnerMenuHome