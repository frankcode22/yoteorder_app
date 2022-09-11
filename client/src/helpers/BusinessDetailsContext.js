import React, { createContext, useState } from 'react';

// import moment from "moment";

export const BusinessDetailsContext = createContext();


export const BusinessDetailsContextProvider = ({ children }) => {
  
    

   // const [startDate,setStartDate ] = useState(moment(new Date()).format("MM/DD/YYYY"));

   // const [endDate,setEndDate ] = useState(moment(new Date()).format("MM/DD/YYYY"));

   


    const[businessId,setbusinessId]= useState('');

    // const[longitude,setLongitude]= useState(0);

    const[businessDetails,setBusinessDetails]=useState({
      propertyName:"",
      property_id:"",
      guests:"",
      startDate:"",
      endDate:"",
      nights:0,
      property_price:0,
      base_price:0,
    })


    





  
    return (
      <BusinessDetailsContext.Provider value={{businessId,setbusinessId,businessDetails,setBusinessDetails}}>
        {
          children
        }
      </BusinessDetailsContext.Provider>
    );
  }