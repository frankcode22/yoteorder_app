import React from 'react'

import { useEffect,useState,useContext,useCallback} from 'react';


import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import LocationDataContextInit from '../../../helpers/LocationDataContextInit';

function SearchPlaces() {

    const {userPos, setUserPos} = useContext(LocationDataContextInit);
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

    const [staffList, setStaffList] = useState([]);


    const[staffId,setStaffId]=useState('')
    const [staff_name, SetStaff_name] = useState("");



    const [service_name, set_service_name] = useState("");
    const [service_type, set_service_type] = useState("");
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



    const [customersList, setCustomersList] = useState([]);

  
    const [productsList, setProductsList] = useState([]);

    const [errorMessage, setErrorMessage] = useState("");

    const [isDivLoading, setIsDivLoading] = useState(false);


    const [imagePath, setImagePath] = useState("");

    const [profile_photo, setprofile_photo] = useState("");

    const [customersCount, setCustomersCount] = useState(0);


    const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');



    

    const [isLoading,setLoading]=useState(false);


    
    

     
    const [mapCenter, setMapCenter] = useState({
      lat: userPos.lat,
      lng: userPos.long
  });




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
  return (
    <div>


    {!userPos.lat==null &&      <PlacesAutocomplete
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

  
    
    
    </div>
  )
}

export default SearchPlaces