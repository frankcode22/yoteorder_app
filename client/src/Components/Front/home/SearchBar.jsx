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

  const [isLoading,setLoading]=useState(false);

  const [isDivLoading, setIsDivLoading] = useState(false);

  const [productFound, setProductFound] = useState(false);


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

  setsubcategory_name(wordEntered)
  


 }



 const searchProviders= () => {


 
  history('/searchresults/'+catId+'/'+lat+'/'+lng);
  
  


 }



  return (
   
    <div className="search">
      <div className="searchInputs">


     
      <div class="form-group">
     
          <input class="form-control" placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter} type="text"/>

          {!isLoading && <span class="input-group-text btn btn-primary" onClick={searchService}><i class="fe fe-search"></i>Search</span>}

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
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a href="javascript:void(0)" className="dataItem" onClick={() => {
                setWordEntered(value.name)
                setServiceId(value.id)
                setFilteredData([]);
              }}>
                <p>{value.name} </p>
              </a>
            );
          })}
        </div>
      )}


      <Modal class="modal fade" id="modaldemo8" show={show}>

      <Modal.Header>
          <Modal.Title>Initiating your Search</Modal.Title>
      </Modal.Header>
      <Modal.Body class="modal-body text-center p-4 pb-5">



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
