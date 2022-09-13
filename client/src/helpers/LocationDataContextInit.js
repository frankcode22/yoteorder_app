import { createContext, useState, useEffect } from 'react';



const LocationDataContextInit = createContext({});


export const LocationDataContextInitProvider = ({ children }) => {
  
  

 
    const[latitude,setLatitude]=useState('')

    const[longitude,setLongitude]=useState('')

    const [userPos, setUserPos] = useState({lat: null, long: null})

    const [status, setStatus] = useState(null);

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

   

  // const my_orders = localStorage.getItem("order_details");


  


  useEffect(() => {

    if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
        return;
      } else {
        navigator.geolocation.getCurrentPosition((pos) => {


            
        console.log('YOUR LATITUDE IS '+pos.coords.latitude + " YOUR LATITUDE IS  " + pos.coords.longitude) // display VALUE
        const newUserPos =  { 
              lat: pos.coords.latitude,
              long: pos.coords.longitude,
         };
        setUserPos(newUserPos) // store data in usestate
        console.log('YOUR LOCATION DATA IS',newUserPos) // Display your values
   }, (err) => {
        console.log(err);
   });
}
  },[]);



  

    

    return (
        <LocationDataContextInit.Provider value={{
            search, setSearch,
            userPos,latitude,setLatitude,longitude,setLongitude, setUserPos,status, setStatus
           
        }}>
            {children}
        </LocationDataContextInit.Provider>
    )
}

export default LocationDataContextInit;