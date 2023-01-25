import React from 'react'

import { useEffect,useState,useContext,useCallback} from 'react';



import API from '../../../services';

import { Helmet } from "react-helmet";

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../../helpers/AuthContext'


import { useNavigate,Link} from "react-router-dom"

import { Progress } from 'reactstrap';

import DataContext from '../../../helpers/DataContext';

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import LocationDataContextInit from '../../../helpers/LocationDataContextInit';
import LocationDataContext from '../../../helpers/LocationDataContext';
//import SearchPlaces from './SearchPlaces';

import { Modal, Button } from "react-bootstrap";

function SubscriptionRequestsDetails(props) {

    const {businessDetails,setBusinessDetails} = useContext(DataContext);

  // const {bussinessList, setBussinessList} = useContext(DataContext);

  const {userPos, setUserPos} = useContext(LocationDataContextInit);

  const {position, setPosition} = useContext(LocationDataContext);

 // const { posts, setPosts } = useContext(DataContext);

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [product_description, setProduct_description] = useState("");
    const [price, setPrice] = useState("");

    const [email, setEmail] = useState("");
    const [phone_no, setPhone_no] = useState("");

    const [buss_contacts, setbuss_contacts] = useState("");


    let { idx, label, uploadUrl } = props;

    const [isUploding, setUploding] = useState(false);
    const [uploadedImg, setUplodedImg] = useState("");
    const [uploadProgress, setProgress] = useState(0);

    const [image, setImage] = useState('')





    const [business_name, setbusiness_name] = useState("");
    const [business_type, setbusiness_type] = useState("");
  
    const [business_description, setbusiness_description] = useState("");
  
    const [industry, setindustry] = useState("");
    const [location, setlocation] = useState("");

    const [quantity, setQuantity] = useState("");

    const [geo_location, setGeo_location] = useState("");

    const [userId, setUserId] = useState("");

    const [unit_of_measure, setunit_of_measure] = useState("");


    const [city, setCity] = useState("");
    const [state, setState] = useState("");
  
    const [country, setCountry] = useState("");


    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [address_line_1, setaddress_line_1] = useState("");
   

    const [address_line_2, setaddress_line_2] = useState("");




    const [businessId, setbusinessId] = useState('');

    const[openTime,setOpenTime]=useState('')

    const[closeTime,setCloseTime]=useState('')

    const[serviceId,setServiceId]=useState('')


    const [servicesList, setServicesList] = useState([]);

    const [serviceTypeList, setServiceTypeList] = useState([]);

    const [subcategoryList, setSubcategoryList] = useState([]);

    const [staffList, setStaffList] = useState([]);


    const[staffId,setStaffId]=useState('')
    const [staff_name, SetStaff_name] = useState("");



    const [service_name, set_service_name] = useState("");
    const [service_type, set_service_type] = useState("");

    const [subcatId, setSubcatId] = useState("");

    
    const [service_cost, set_service_cost] = useState("");

    const [description, set_description] = useState("");
  

    const [postal_code, setPostal_code] = useState("");


  
      const [showingInfoWindow, setShowingInfoWindow] = useState(false);

      const [activeMarker, setActiveMarker] = useState({});
      const [selectedPlace, setSelectedPlace] = useState({});

      const [lat, setLat] = useState(null);
      const [lng, setLng] = useState(null);

      const [loclat, setLoclat] = useState(null);
      const [status, setStatus] = useState(null);
  
  
    const [address, setAddress] = React.useState("");

    
    const [showErrorAlert,setShowErrorAlert] = useState(false);


    const [isBusinessSet,setIsBusinessSet] = useState(false);

    const [contacts,setcontacts] = useState('');

    



    const [customersList, setCustomersList] = useState([]);

  
    const [productsList, setProductsList] = useState([]);

    const [errorMessage, setErrorMessage] = useState("");

    const [isDivLoading, setIsDivLoading] = useState(false);


    const [imagePath, setImagePath] = useState("");

    const [profile_photo, setprofile_photo] = useState("");

    const [customersCount, setCustomersCount] = useState(0);


    const [fileInputState, setFileInputState] = useState('');

    const [previewSource, setPreviewSource] = useState('');



   const [serviceIconInputState, setServiceIconInputState] = useState('');
   const [previewIconSource, setPreviewIconSource] = useState('');



  const [selectedFile, setSelectedFile] = useState();

  const [selectedIconFile, setSelectedIconFile] = useState();

  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const [notifications, setNotifications] = useState([]);


  const [showUpdateButton, setShowUpdateButton] = useState(false);


  const [showVideoModal, setShowVideoModal] = useState(false);

  const [showSuccessAlert,setShowSucessAlert]=useState(false);

 





    

    const [isLoading,setLoading]=useState(false);


    
    

     
    const [mapCenter, setMapCenter] = useState({
      lat: userPos.lat,
      lng: userPos.long
  });









  const [bussSetup,setBussSetup]=useState(false);

  const [showSetUpError,setShowSetUpError]=useState(false);

  const [showServicesDiv,setShowServicesDiv]=useState(false);

  const [showBusinessSetupDiv,setShowBusinessSetupDiv]=useState(true);


  const [showHelpAndSupport,setShowHelpAndSupport]=useState(false);


  const [cloudinary_url, setCloudinaryUrl] = useState("");
 
  //const [service_type, set_service_type] = useState("");


  let history = useNavigate();



  const handleAddressChange = address => {
    setAddress(address);
      };
  
  
  
      
      const handleSelect = address => {
        setAddress(address);
         geocodeByAddress(address)
          .then(results =>  getLatLng(results[0]))
          .then(latLng => {
            console.log('Success', latLng);
            
            // const address_one = address.results[0].formatted_address;
           
    
            // console.log('Formated Addres', address_one);
    
    
            // update center state
            setMapCenter(latLng );
    
            setaddress_line_2(address);
    
            
           
          });

          geocodeByAddress(address).then(response=>{
    
          
            var add= response[0].formatted_address ;
            var  value=add.split(",");
      
          let  count=value.length;
          let  country=value[count-1];
          let   state=value[count-2];
          let  city=value[count-3];
          let  postal_code=value[count-4];
    
         
      
            console.log('COUNTRY'+country);
            console.log('CITY'+city);
            console.log('STATE'+state);
            console.log('ZIP CODE'+postal_code);
    
            // console.log('THE ID IS'+propid);
    
    
            setCity(city);
    
            setPostal_code(postal_code);
    
            setState(state);
    
          
          
      
           // console.log('ADDRESS COMPONENTS',addressComponent[2]);
            
          })
          .catch(error => console.error('Error', error));
      };



  
const buss_data={

  business_name:business_name,
  business_type:industry,
  industry:industry,
  location:address,
  contacts:buss_contacts,

  email:email,

  

  address_line_1:address_line_1,
  latitude:mapCenter.lat,
  longitude:mapCenter.lng,
  city:city,
  state:state,
  country:country,
  business_description:business_description,
  status:status,
  UserId:userId,

 
}



const user_details={
  name:business_name,
  last_name:business_name,
  email:email,
  phoneNo:buss_contacts,
  account_type:"",
  password:buss_contacts,

  state:"",
  city:null,
  role:'Supplier',
}


  
  const saveBusinessInfor = ()  => {
    setLoading(true);

     //API.post("business",buss_data).then((response)=>{


      try {




         API.post('users',user_details).then((response)=>{
  
      console.log("THE SUPPLIER DATA IS"+response.data)
  
     // setCustomerId(response.data.id)
  
  
     


      if(response.data.error) {

        setTimeout(() => {
           
            toast.error(response.data.error);
            setLoading(false);
        }, 500);

        //alert();
        //setLoading(false);
      }

      else{






    
    API.post("suppliers/bussinfor",buss_data).then((response)=>{


   // setBusinessDetails(b.map(post => post.id === id ? { ...response.data } : post));

   //const newDetails = response.data;
  // setBusinessDetails(newDetails ?{ ...response.data } : businessDetails);

 

   props.setRequestList([
    ...props.requestList,
    {
  id:response.data.id,
  name:business_name,
  business_type:industry,
  industry:industry,
  location:address,
  contacts:buss_contacts,
  email:email,


  address_line_1:address_line_1,
  latitude:mapCenter.lat,
  longitude:mapCenter.lng,
  city:city,
  state:state,
  country:country,
  business_description:business_description,
  status:status,
  UserId:userId,


    },
  ]);



   setBussSetup(true)

  // localStorage.setItem("business_set", true);

   setbusiness_name(response.data.business_name)

   setlocation(response.data.location)
   setLatitude(response.data.latitude)
   setLongitude(response.data.longitude)

    console.log("The response is"+response.data)


  //  console.log("START tIME"+openTime)


   // console.log("END TIME"+closeTime)


    console.log("THE BUSINESS ID IS "+response.data.id)

    setbusinessId(response.data.id)



   



   // console.log("THE NEW BUSINESS OBJECT AFTER SETTING UP MY BUSS IS "+businessDetails)



       
        setTimeout(() => {
            setLoading(false);
            toast.success('Saved');
            setIsBusinessSet(true)
        }, 500);
     
       //  history("/dashboard");
      
       
    });

  }

});

  } catch (err) {
    console.log(`Error: ${err.message}`);
  }

}



const updateBusinessInfor = ()  => {
  setLoading(true);

   //API.post("business",buss_data).then((response)=>{
  
  API.put(`business/updateBuss/${businessId}`,buss_data).then((response)=>{

  console.log("The response is"+response.data)


  // console.log("START tIME"+openTime)


  // console.log("END TIME"+closeTime)


  console.log("THE BUSINESS ID IS "+response.data.id)


 // setBussinessList(bussinessList.map(post => post.id === response.data.id ? { ...response.data } : post));


  setBusinessDetails({...businessDetails, [response.data.id]: businessDetails});







 


  //setBusinessDetails({ location: 'Advika' })

  setbusinessId(response.data.id)


  setbusiness_name(response.data.business_name)

  setlocation(response.data.location)
  setLatitude(response.data.latitude)
  setLongitude(response.data.longitude)
  setAddress(response.data.location)
  setbuss_contacts(response.data.buss_contacts)
  


 
 // setBusinessDetails({...businessDetails, business_name: 'Denmark'})

  
  // if (obj.id === 2) {
  //   return {...obj, country: 'Denmark'};
  // }


     
      setTimeout(() => {
      
          setLoading(false);
          toast.success('Saved');
          setIsBusinessSet(true)
      }, 500);
   
     //  history("/dashboard");
    
     
  })

}


 
const updateBusinessProfile= async e => {
  setLoading(true)
  
  let formData = new FormData();
  formData.append('businessId', businessId);
  formData.append('file',selectedFile);
  

  setUploding(true);
  let { data } = await API.put('business/update-profile/'+businessId, formData, {
      onUploadProgress: ({ loaded, total }) => {
          let progress = ((loaded / total) * 100).toFixed(2);
          setProgress(progress);
         
      }
  });
  setUplodedImg(data.imagePath);

 // localStorage.setItem('product_photo', JSON.stringify(data.imagePath));
  console.log("tTHE IMAGE NAME IS "+data.imagePath)
  console.log("THE FILE NAME IS "+data.ImageName)
  console.log("THE BUSS ID IS "+data.businessId)
  
  setCloudinaryUrl(data.cloudinary_url)

  setUploding(false);



 

  setTimeout(() => {
  
      setLoading(false);
      setShowSucessAlert(true)
      toast.success('Profile set successfully');
  }, 2000);
  
}



  return (
    <div>


    {!isBusinessSet && 
        <form class="bg-gray-100 pd-30 pd-sm-40">
        <div class="row g-3">
          <div class="col-md-6">
            <div class="row">
              <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-first-name">Business Name</label>
              <div class="col-sm-9">
                <input type="text" id="formtabs-buss-name" class="form-control" 

                value={business_name}
                
                onChange={(event) => {
                    setbusiness_name(event.target.value);
                  }}
                
                
                placeholder="Eg.Johnson Distributers" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
            
              <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-last-name">Brief Description</label>
              <div class="col-sm-9">
              <textarea id="basic-icon-default-message" class="form-control" value={business_description} placeholder="Eg. I supply wines and spirits" aria-label="Hi, My business deals with beauty services?" 
              
              onChange={(event) => {
                setbusiness_description(event.target.value);
              }}

              aria-describedby="basic-icon-default-message2"></textarea>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-country">County</label>
              <div class="col-sm-9">
                <select id="formtabs-country" class="select2 form-select"

                value={city}
                
                onChange={(event) => {
                    setCity(event.target.value);
                  }}

                
                data-allow-clear="true">
                  <option value="">Select</option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Kiambu">Kiambu</option>
                  <option value="Machakos">Machakos</option>
                  <option value="Kakuru">Kakuru</option>
                  <option value="Murang'a">Murang'a</option>
                  <option value="Kericho">Makueni</option>
                  <option value="Embu">Embu</option>
                  <option value="Meru">Meru</option>
                  <option value="Kakuru">Kericho</option>
                  <option value="Uasin-gishu">Uasin-gishu</option>
                  <option value="Nyeri">Nyeri</option>
                  
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-6 select2-primary">
            <div class="row">
              <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-language">Industry</label>
              <div class="col-sm-9">
                <select id="formtabs-language" class="select2 form-select"


                onChange={(event) => {
                    setindustry(event.target.value);
                  }}
                
                
                  data-allow-clear="true">

                  <option value="Wines-Spirits" selected>Drinks/Wines/Spirts/Alcohol</option>
                  <option value="Domestic-Products">Household Products</option>
                 

                  <option value="Domestic-Products">Domestic Products</option>

                  

                  <option value="Drinks">Drinks</option>
                  <option value="Ready Made Meals">Ready Made Meals</option>
               
                  <option value="Beauty">Beauty</option>
                  <option value="Education">Education</option>
                  <option value="Automotive">Wellbeing</option>
                  <option value="pt">Automotive</option>
                  <option value="home care">Home Care</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Electronics">Electronics</option>
               
                  <option value="Automotive">Automotive</option>

                  <option value="Contruction">Contruction</option>
        
                  
                  <option value="Clothing">Clothing</option>
                  <option value="Computing">Computing</option>
        
        
                  <option value="Domestic">Domestic Use</option>
                  <option value="Home-Based">Home-Based</option>
                  <option value="Beauty">Beauty</option>
        
                  <option value="Agricultural">Agricultural</option>
                  <option value="Livestock">Livestock</option>
                  <option value="Poultry">Poultry</option>
                  <option value="Aquatic">Aquatic</option>
                </select>
              </div>
            </div>
          </div>
          {/** <div class="col-md-6">
            <div class="row">
            <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-first-name">Location</label>
            <div class="col-sm-9">
              <input type="text" id="location" class="form-control"
              
              
              onChange={(event) => {
                setlocation(event.target.value);
              }}
              
              placeholder="Eg.Njogoo Road" />
            </div>

       
            </div>
          </div> */}
         
          <div class="col-md-6">
            <div class="row">
              <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-phone">Phone No</label>
              <div class="col-sm-9">
                <input type="text" id="buss-contacts" class="form-control phone-mask"

                value={buss_contacts}
                
                onChange={(event) => {
                    setbuss_contacts(event.target.value);
                  }}
                placeholder="eg.07xx xxx xxx" aria-label="0714639773" />
              </div>
              



            </div>

            
          </div>


          <div class="col-md-6">
          <div class="row">
            <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-phone">Email</label>
            <div class="col-sm-9">
              <input type="text" id="buss-contacts" class="form-control phone-mask"

              value={email}
              
              onChange={(event) => {
                  setEmail(event.target.value);
                }}
              placeholder="example@gmail.com"/>
            </div>
            



          </div>

          
        </div>


          <div>
          <div id='googleMaps'>
        
      {/** <p>Your Position {position.latitude}</p>
        */} 
          {/**<SearchPlaces></SearchPlaces> */}
        
        
        
          {position &&      <PlacesAutocomplete
            value={address}
            onChange={handleAddressChange}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'multisteps-form__input form-control',
                  })}
                />
        
              
        
                
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>}
 
          {!userPos.lat==null &&   
          <PlacesAutocomplete
            value={address}
            onChange={handleAddressChange}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'multisteps-form__input form-control',
                  })}
                />
        
              
        
                
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>}
        
        
        
        
        
     
        
           <div class="card" style={{height:"350px",marginTop:'20px'}}>
        
            <Map 
            google={props.google}
              initialCenter={{
                lat: mapCenter.lat,
                lng: mapCenter.lng
              }}
              center={{
                lat: mapCenter.lat,
                lng: mapCenter.lng
              }}
            >
              <Marker 
                position={{
                  lat: mapCenter.lat,
                  lng: mapCenter.lng
                }} />
            </Map>
         </div>
          </div>
        
        
          <div class="row g-3">
        
          <div class="col-md-6">
          <div class="row">
            <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-first-name">Latitude</label>
            <div class="col-sm-9">
              <input type="text" id="formtabs-buss-name" class="form-control" 
              
              value={mapCenter.lat}
        
              onChange={(event) => {
                setLatitude(event.target.value);
              }}
              
              
              placeholder="Latidude" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
          
            <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-last-name">Logitude</label>
            <div class="col-sm-9">
            <input type="text" id="formtabs-buss-name" class="form-control" 
              
            value={mapCenter.lng}
        
            onChange={(event) => {
              setLongitude(event.target.value);
            }}
            
            placeholder="Eg. Logitude" />
            </div>
          </div>
        </div>
        
        
        <div class="col-md-6">
        <div class="row">
          <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-first-name">City</label>
          <div class="col-sm-9">
            <input type="text" id="formtabs-buss-name" class="form-control" 
            
            value={address}
        
            onChange={(event) => {
              setCity(event.target.value);
            }}
            
            
            placeholder="Latidude" />
          </div>
        </div>
        </div>
        <div class="col-md-6">
        <div class="row">
        
          <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-last-name">State</label>
          <div class="col-sm-9">
          <input type="text" id="formtabs-buss-name" class="form-control" 
            
          value={state}
        
          onChange={(event) => {
            setState(event.target.value);
          }}
          
          placeholder="Eg. Logitude" />
          </div>
        </div>
        </div>
        
        </div>
        
          
        
        
        </div>


          <div class="col-md-6">


          <div class="btn-list ms-auto my-auto">

          <button class="btn btn-danger btn-space mb-0">Cancel</button>
  
          
          {!isLoading && !showUpdateButton && <button type="submit" onClick={saveBusinessInfor} class="btn btn-primary btn-space mb-0">Save</button>
  
        } 
  
  
   {!isLoading && showUpdateButton &&  <button type="button" onClick={updateBusinessInfor} class="btn btn-success"><i class="fe fe-check me-2"></i>Update</button> }    
  
        {isLoading &&
            <button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled><div class="spinner-grow text-success me-2" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>Saving Infor</button>
        }
             
          
          </div>
          
          
          </div>


          
        </div>


       
        <div class="row mt-4">
         
        </div>
      </form>

    
    }
    
    
    </div>
  )
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyAOJjEor9H6PWdsKLAQSr3dIH1fWJNveGI')
})(SubscriptionRequestsDetails)

