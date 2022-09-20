import { createContext, useState, useEffect } from 'react';



const LocationDataContext = createContext({});


export const LocationDataDataProvider = ({ children }) => {

  const settings = {
    enableHighAccuracy: true,
   //enableHighAccuracy: false,
    //timeout: Infinity,
    timeout: 2000,
    maximumAge: 3600000
};


  
  

 
    const[latitude,setLatitude]=useState('')

    const[longitude,setLongitude]=useState('')

    const [userPos, setUserPos] = useState({lat: null, long: null})

    const [status, setStatus] = useState(null);

  

    const [watch, setwatch] = useState(false);

 


    const [position, setPosition] = useState();
    const [error, setError] = useState(null);

   

  // const my_orders = localStorage.getItem("order_details");

  

const onChange = ({coords, timestamp}) => {
  setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      speed: coords.speed,
      timestamp,
  });
};

const onError = (error) => {
  setError(error.message);
};

  


useEffect(() => {

  if (!navigator || !navigator.geolocation) {
      setError('Geolocation is not supported');
      return;
  }

  let watcher = null;
  if (watch) {
      watcher =
          navigator.geolocation.watchPosition(onChange, onError, settings);
          console.log('YOUR LOCATION DATA IS',JSON.stringify(position)) // Display your values
         // setPosition(position)
  } else {
      navigator.geolocation.getCurrentPosition(onChange, onError, settings);

      console.log('YOUR LOCATION DATA IS',JSON.stringify(position)) // Display your values

     // setPosition(position)


  }

  return () => watcher && navigator.geolocation.clearWatch(watcher);

}, [
  settings.enableHighAccuracy,
  settings.timeout,
  settings.maximumAge,
  setPosition,

]);


    

    return (
        <LocationDataContext.Provider value={{
          
            userPos,latitude,setLatitude,longitude,setLongitude, setUserPos,status, setStatus,onChange,position, setPosition,error, setError,watch, setwatch
           
        }}>
            {children}
        </LocationDataContext.Provider>
    )
}

export default LocationDataContext;