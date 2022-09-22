import { createContext, useState, useEffect } from 'react';

import axios from 'axios';


const OrderDetailsContext = createContext({});


export const OrderDetailsDataProvider = ({ children }) => {
  
  

 
    const[customerOrders,setCustomerOrders]=useState([])

    const[businessDetails,setBusinessDetails]=useState([])

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [imagePath, setImagePath] = useState("");

    const [isLoading, setIsLoading] = useState(false);


   const my_orders = localStorage.getItem("order_details");


    useEffect(()=>{


        
       
         axios.get('http://localhost:3001/order/myorders', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

         

            console.log("MY ORDER DETAILS FROM THE CONTEXT"+response.data)

          
        


            console.log("LOCAL STORAGE ORDERS LIST FROM THE CONTEXT "+my_orders)

           
            setTimeout(() => {

                setCustomerOrders(response.data)

             
            }, 1000);

            //setSeller_name(response.data.Users.first_name)
            
        }).catch((error) => {
            

            console.log("CONTEXT ERROR OCCURED"+error)
          
         });


         
      
  
  
  },[setCustomerOrders]);

    

    return (
        <OrderDetailsContext.Provider value={{
            search, setSearch,
            searchResults,customerOrders,
            setCustomerOrders,imagePath, setImagePath
           
        }}>
            {children}
        </OrderDetailsContext.Provider>
    )
}

export default OrderDetailsContext;