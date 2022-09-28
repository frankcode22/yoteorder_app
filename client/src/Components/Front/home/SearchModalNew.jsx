
import React, { useCallback,useState,useEffect,useContext } from 'react';

import { Modal, Button } from "react-bootstrap";


import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


import './authocompleteStyles.css'




function truncate(number, index = 2) {
  // cutting the number
return +number.toString().slice(0, (number.toString().indexOf(".")) + (index + 1));
}







function SearchModalNew({userPos,lat,lng,lat1,lng1,setLat,setLat1,setLng1,setLng,show,closeModal,google,searchItem1}) {

  const [online, setOnline] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  const [state, setState] = useState({});
  
  const [city, setCity] = useState("");
  

  const [country, setCountry] = useState("");


  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [address_line_1, setaddress_line_1] = useState("");
 

  const [address_line_2, setaddress_line_2] = useState("");

  const [address, setAddress] = React.useState("");




 

  const [postal_code, setPostal_code] = useState("");



   

    const [loclat, setLoclat] = useState(null);
    const [status, setStatus] = useState(null);


    
    // setLat('-1.2868168624372893')

    // setLng('36.94613823944229')





  const [mapCenter, setMapCenter] = useState({
    lat: -1.2868168624372893,
    lng: 36.94613823944229
  });
  
  // useEffect(() => {
  //    performRefresh(); //children function of interest
  //  }, [props.refresh]);


  const getOnLineStatus = () =>{

    {navigator.onLine? setOnline(true):setOnline(false)}
  

  }


   useEffect(() => {
    performRefresh(); //children function of interest

    getOnLineStatus();


    const interval = setInterval(() => {
      fetch('https://www.google.com/', {
        mode: 'no-cors',
      })
        .then(() => !isOnline && setIsOnline(true))
        .catch(() => isOnline && setIsOnline(false));
    }, 2000);

    return () => clearInterval(interval);

   
    
  }, [lat1,lat,lng,setLat1,lng1,setLng1,mapCenter,searchItem1,isOnline]);



 



  const handleAddressChange = address => {
    setAddress(address);
      };



      const handleCustomerSelect= async (event) => {

       

        
        setMapCenter({
          lat: -1.142352,
          lng: 36.835763
        });
    
        
    
       
    
    
       }
  
  
  
      
      const handleSelect = address => {
        setAddress(address);
         geocodeByAddress(address)
          .then(results =>  getLatLng(results[0]))
          .then(latLng => {
            console.log('Success', latLng);
            
            // const address_one = address.results[0].formatted_address;
           
    
            // console.log('Formated Addres', address_one);
    
    
            // update center state
            setMapCenter(latLng);

            

            // setLat(latLng.lat)

            // setLng(latLng.lng)


           // userPos(latLng)
    
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

  // mapCenter({
  //   lat: lat,
  //   lng: lng
  // });

  
  


 
  
  const performRefresh=()=>{

  

   
  let lat_val=parseFloat(mapCenter.lat);
  
  let lng_val=parseFloat(mapCenter.lng);

    setLat1(truncate(lat_val, 2))

    setLng1(truncate(lng_val, 2))

  //  setLat1(mapCenter.lat)

  //  setLng1(mapCenter.lng)


   //alert(mapCenter.lat)

    
  
  };
  
  
  



  

  
  return (
    <div>

    <Modal show={show}>

    <Modal.Header>
        <Modal.Title>Search</Modal.Title>
    </Modal.Header>
    <Modal.Body class="modal-body text-center p-4 pb-5">



    <div class="row row-sm">
    <div class="col-lg-12">
        <div class="card mg-b-20">

            <div class="card-body">


           {!isOnline && <PlacesAutocomplete
            value={address}
            onChange={handleAddressChange}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: 'Search location ...',
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
          </PlacesAutocomplete> }  


          {isOnline && <PlacesAutocomplete
            value={address}
            onChange={handleAddressChange}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: 'Search location ...',
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
          </PlacesAutocomplete> }  

          
           
               

       
   
         


            </div>

           <div class="card" style={{height:"350px",marginTop:'20px'}}>


            
            <Map 
            google={google}
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


            <div class="row g-3">

  <div class="col-md-6">
  <div class="row">
    <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-first-name">Lat</label>
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
  
    <label class="col-sm-3 col-form-label text-sm-end" for="formtabs-last-name">Lng</label>
    <div class="col-sm-9">
    <input type="text" id="formtabs-buss-name" class="form-control" 
      
    value={mapCenter.lng}

    onChange={(event) => {
      setLongitude(event.target.value);
      
    }}
    
    placeholder="Eg. Longitude" />
    </div>

 

   {/**   <h1> {online?'uko online':'offline'}</h1> */} 

   {/**    <h1> {isOnline?'uko online':'offline'}</h1>  */} 

  
    
  </div>
</div>

{/** 
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
</div>*/}


</div>
        </div>
    </div>
    </div>





    </Modal.Body>
    <Modal.Footer>
    

    <Button variant="primary" onClick={searchItem1}>
    Search Now
   </Button>

        <Button variant="secondary" onClick={closeModal}>
            Close
        </Button>

   
        {/* 
<Button variant="primary" onClick={handleClose}>
Save Changes
</Button> */}

    </Modal.Footer>
</Modal>
    
    
    
    
    </div>
  )
}

export default SearchModalNew
