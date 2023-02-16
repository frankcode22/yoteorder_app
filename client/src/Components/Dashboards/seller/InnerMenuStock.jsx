import React from 'react'

function InnerMenuStock(props) {
  return (
    <div class="col-lg-4 col-xl-3">
          <div class="card custom-card">

              <div class="main-content-left main-content-left-mail card-body pt-0 app">
                  <div class="main-settings-menu custom_large">
                      <nav class="nav main-nav-column">
                          <a class="nav-link thumb active mb-2" href="/product_inventory"><i class="fe fe-home"></i> Main </a>


                          {/* <a class="nav-link border-top-0 thumb mb-2" href="/products_tabular"><i class="fe fe-grid"></i>Common Products</a> */}

                          <a class="nav-link thumb active mb-2" href="javascript:void(0);" onClick={props.displayPOS}><i class="fe fe-grid"></i> Common Products </a>


                          <a class="nav-link border-top-0 thumb mb-2" href="/products_tabular"><i class="fe fe-grid"></i>Tabular View</a>

                          {/* <a class="nav-link border-top-0 thumb mb-2" href="/product_cat"><i class="fe fe-layers"></i>Product Categories</a> */}

                          <a class="nav-link border-top-0 thumb mb-2" href="javascript:void(0);"><i class="fe fe-bell"></i> Notifications</a>
                      </nav>
                  </div>


                  <div class="sidebar-navs onmobile"> <ul class="nav  nav-pills-circle">
                      <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="POS" aria-describedby="tooltip365540">
                          <a class="nav-link text-center m-2" href="/home_retailer">
                              <i class="fe fe-home"></i> </a>
                      </li>
                      <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="POS">
                          <a class="nav-link text-center m-2" href="/pos"><i class=" fe fe-shopping-cart"></i>
                          </a>
                      </li>
                      <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Orders" aria-describedby="tooltip143427">
                          <a class="nav-link text-center m-2" href="/product_inventory">
                              <i class="fas fa-clipboard-list">
                              </i>

                          </a>
                      </li>

                      <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Common Brands" aria-describedby="tooltip143427">
                          <a class="nav-link text-center m-2"  href="javascript:void(0);" onClick={props.displayPOS}>
                              <i class="fas fa-archive">
                              </i>

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

export default InnerMenuStock