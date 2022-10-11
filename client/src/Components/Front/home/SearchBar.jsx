import React, { useState,useEffect } from "react";
import "./SearchBar.css";
import {Link,useNavigate} from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search";

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import { Modal, Button } from "react-bootstrap";
import API from '../../../services';

import 'react-toastify/dist/ReactToastify.css';

import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, lat,lng, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");


  const[serviceId,setServiceId]=useState('')


  const [servicesList, setServicesList] = useState([]);

    const [service_name, set_service_name] = useState("");
    const [service_type, set_service_type] = useState("");
    const [service_cost, set_service_cost] = useState("");

    const [business_name, setbusiness_name] = useState("");

    const [description, set_description] = useState("");


    

    const [catId, setCatId] = useState("");


    const [subcategory_name, setsubcategory_name] = useState("");


    const [subcategoryId, setsubcategoryId] = useState("");


    

    const [cloudinary_url, setCloudinaryUrl] = useState("");

  const [show, setShow] = useState(false);

  const [hideSearchBtn, setHideSearchBtn] = useState(false);

  const [isLoading,setLoading]=useState(false);

  const [isDivLoading, setIsDivLoading] = useState(false);

  const [productFound, setProductFound] = useState(false);


  const [serviceCatNotAvailable, setServiceCatNotAvailable] = useState(false);


  const [subcategoryList, setSubcategoryList] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");


  


  const history = useNavigate();

  


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    setHideSearchBtn(false)
  };



  
  const handleClose = () =>{
    setLoading(false)

  

   setShow(false);

  
   

  
   
     };



  const searchService= () => {

   
    if(wordEntered==''){

      
    
    // alert("You must enter the item")

    toast.warn('You must enter the search item');

    
         return
    
      }

    setLoading(true)

    //loadServiceProviders(wordEntered)

   // loadServiceProvidersGeoLoc(wordEntered)

    loadServiceSubCat(serviceId)

    setShow(true);



  
    setTimeout(() => {

    
    setLoading(false)
  
    // history('/ordered-product/'+wordEntered+'/'+lat+'/'+lng);

    // setShow(false)

   
    
}, 1000);


} 

const loadServiceSubCat = (sId)  => {

  API.get(`servicetype/getbyId/${sId}`).then((response) => {


    setSubcategoryList(response.data.ServiceTypeSubcategories)
     
      //setServicesList(response.data);



  }).catch(() => {
      setErrorMessage("Unable to fetch your search.Make sure you have internet connection.");
      //setIsDivLoading(false);
   });
 


}



const loadServiceProvidersGeoLoc = (service_type)  => {

  setIsDivLoading(true);

  API.get(`service/search_geoloc/${service_type}/${lat}/${lng}`).then((response) => {




    


    setTimeout(() => {
      if(response.data.notfound){
          setProductFound(true)

          
          set_service_type('NOT FOUND')
         
          
           console.log("TEST FOUND"+response.data.notfound)
  
          }
          setServicesList(response.data);

      console.log("THIS IS YOUR SEARCH DETAILS "+response.data)

      // setImagePath(response.data.imagePath)


   

     // setShowP(false);


    

     // setSeller_name(response.data.Users);
      setIsDivLoading(false)   // Hide loading screen 
     // toast.info('Product saved successfully');
    // history(`/ordered-product/${pname}/${lat}/${lng}/#Features`)
  
   
  }, 2000);





  }).catch(() => {
      setErrorMessage("Unable to fetch your search.Make sure you have internet connection.");
      //setIsDivLoading(false);
   });
 


}



const handleCustomerSelect= async (event) => {

  const selectedOption=event.target.value


  const customer = servicesList.find(post => (post.id).toString() === selectedOption);

  // setUserId(JSON.stringify(customer))

  set_service_name(customer.service_name)
  set_description(customer.description)

  set_service_cost(customer.service_cost)

  setbusiness_name(customer.Business.business_name)

  setCloudinaryUrl(customer.cloudinary_url)




  API.get('servicetype/getbyId/'+serviceId).then((response) => {
  
    // console.log("THE SERVICE NAME IS "+response.data.service_name)
   

     //setSubcategoryList(response.data.ServiceTypeSubcategories)

     

         })


  


  


  

  console.log("THE SELECT OPTION IS "+JSON.stringify(customer))


 }


 const handleSubCategorySelect= async (event) => {

  const selectedOption=event.target.value


  const customer = subcategoryList.find(post => (post.id).toString() === selectedOption);

  // setUserId(JSON.stringify(customer))

  setsubcategory_name(customer.name)

  //setsubcategoryId(customer.id)

  setCatId(customer.id)

  // setsubcategory_name(wordEntered)
  


 }



 const searchProviders= () => {

  if(!catId){

    setServiceCatNotAvailable(true)

    return

  }

  localStorage.setItem('subcategory_name', JSON.stringify(subcategory_name));
 
  history('/searchresults/'+catId+'/'+lat+'/'+lng);
  
  


 }



  return (
   
    <div className="search">
      <div className="searchInputs">


     
      <div class="form-group">
     
          <input class="form-control" placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter} type="text"/>

          {!isLoading && hideSearchBtn && <span class="input-group-text btn btn-primary" onClick={searchService}><i class="fe fe-search"></i>Search</span>}

          {isLoading &&
            <span class="btn btn-primary my-1" type="button" disabled="">
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          
        </span>}



         

         
          
      </div>

      

     
        <div className="searhIcon">
          {filteredData.length === 0 ? (
            <hr></hr>
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
     
      </div>

    
          {filteredData.length != 0 && (

           <div class="dataResult dropdown-menu-end dropdown-menu-arrow">
                                                <div class="drop-heading border-bottom">
                                                    <div class="d-flex">
                                                        <h6 class="mt-1 mb-0 text-center fw-semibold fs-16">We have over 200
                                                            Services for you</h6>
                                                        
                                                    </div>
                                                </div>
                                                {filteredData.slice(0, 15).map((value, key) => {
                                                  return (
                                                <div class="message-menu message-menu-scroll">
                                                   
                                                <div class="dropdown-divider m-0"></div>
                                                    <a class="dropdown-item d-flex" href="javascript:void(0)" className="dataItem" onClick={() => {
                                                      setWordEntered(value.name)
                                                      setServiceId(value.id)
                                                    
                                                      setFilteredData([]);
                                                      setHideSearchBtn(true);
                                                    }}>
                                                        <span><i class="fe fe-check"></i></span>
                                                        <label class="colorinput">
                                                                                        <input type="checkbox" name="color" value="azure" class="colorinput-input" checked=""/>
                                                                                        <span class="colorinput-color bg-azure"></span>
                                                                                    </label>
                                                        <div class="wd-90p">
                                                            <div class="d-flex">
                                                                <h5 class="mb-1">{value.name}</h5>
                                                               
                                                            </div>
                                                           
                                                        </div>
                                                    </a>

                                                </div>
                                                );
                                              })}
                                                <div class="dropdown-divider m-0"></div>
                                                <a href="javascript:void(0)" class="dropdown-item text-center p-3 text-muted">See all
                                                    Services</a>
                                            </div>

                                            )}
      


      <Modal class="modal fade" id="modaldemo8" show={show}>

      <Modal.Header>
          <Modal.Title>Initiating your Search</Modal.Title>
      </Modal.Header>
      <Modal.Body class="modal-body text-center p-4 pb-5">




{serviceCatNotAvailable && <div class="card-body text-center">
<span class=""><svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 24 24"><path fill="#fad383" d="M15.728,22H8.272a1.00014,1.00014,0,0,1-.707-.293l-5.272-5.272A1.00014,1.00014,0,0,1,2,15.728V8.272a1.00014,1.00014,0,0,1,.293-.707l5.272-5.272A1.00014,1.00014,0,0,1,8.272,2H15.728a1.00014,1.00014,0,0,1,.707.293l5.272,5.272A1.00014,1.00014,0,0,1,22,8.272V15.728a1.00014,1.00014,0,0,1-.293.707l-5.272,5.272A1.00014,1.00014,0,0,1,15.728,22Z"></path><circle cx="12" cy="16" r="1" fill="#f7b731"></circle><path fill="#f7b731" d="M12,13a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v4A1,1,0,0,1,12,13Z"></path></svg></span>
<h4 class="h4 mb-0 mt-3">Service not available in your location</h4>

</div>}
      



         {isLoading &&    <div class="spinner-border text-primary me-2" style={{ width: '3rem', height: '3rem' }} role="status">
         <span class="visually-hidden">Loading...</span>
     </div>}
       


          
          <h4 class="h4 mb-0 mt-3"></h4>


          {productFound &&

      

            <div class="col-md-12  col-xl-12">
            <div class="card border">
                <div class="card-header">
                    <h3 class="card-title card-alert alert alert-danger mb-0 ">Product not found</h3>
                    <div class="card-options">
                        <a href="javascript:void(0)" class="card-options-collapse" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                        <a href="javascript:void(0)" class="card-options-remove" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a>
                    </div>
                </div>
                
                <div class="card-body">
                {service_type}
                    Sorry no vendor selling  <span class="tag tag-rounded tag-icon tag-orange"><i class="fe fe-product"></i>{wordEntered}<a href="javascript:void(0)" class="tag-addon tag-addon-cross tag-orange"><i class="fe fe-x text-white m-1"></i></a></span>
                     in your area.However, your search has been captured and our team will enroll vendors on your area within 72 hours.
                     <br/>
                   
    
                     <div class="text-center">
                                <a class="btn btn-secondary mt-5 mb-5"> <i class="fa fa-long-arrow-left"></i> Back to Home </a>
                            </div>
    
                 
                </div>
            </div>
        </div>
    
        }

         
        {!productFound &&
          <div class="card text-info bg-info-transparent card-transparent">
          <div class="card-body border border-secondary">

          <div>{lat} :: {lng}</div>


               <div class="row">
                      <div class="col mb-3">
                        <label for="nameWithTitle" class="form-label">Service Name</label>
                        <input type="text" id="service_name" class="form-control" placeholder="eg.laundry/cleaning services"

                        value={wordEntered}
                        
                        onChange={(event) => {
                            setWordEntered(event.target.value);
                          }}
                           
                        />
                      </div>
                    </div>



                    {/**
          <select id="buss_email" class="form-control form-select"
          onChange={handleCustomerSelect}

          
          data-allow-clear="true">
            <option value="">Select</option>

            {servicesList.map((value, key) => {
             return (

            <option value={value.id}>{value.service_name}</option>

            )})}
            
            
          </select>
 */}





          <select id="buss_email" class="form-control form-select"


          onChange={handleSubCategorySelect}

      
      
         //  onChange={(event) => {
         //      setreceiver_email(event.target.value);
         //    }}

          
          data-allow-clear="true">
            <option value="">Select</option>

            {subcategoryList.map((value, key) => {
             return (

            <option value={value.id}>{value.name}</option>

            )})}
            
            
          </select>





          <div class="text-center">
          <a class="btn btn-secondary mt-5 mb-5" onClick={() => {
            searchProviders(subcategoryId)
           
          }}> <i class="fa fa-long-arrow-right"></i>Get Providers</a>
      </div>

      
              
              
          
             
              </div>

             



            
      </div>

             }




      </Modal.Body>
      <Modal.Footer>

      {/**  <button class="btn btn-light" type="reset" onClick={() => {
        handleClose();
      }}>Cancel</button>
    */}

          <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>

     
          {/* 
<Button variant="primary" onClick={handleClose}>
Save Changes
</Button> */}

      </Modal.Footer>
  </Modal>
    </div>
   
  );
}

export default SearchBar;
