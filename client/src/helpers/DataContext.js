import { createContext, useState, useEffect } from 'react';

import axios from 'axios';


const DataContext = createContext({});


export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [bussinessList, setBussinessList] = useState([])

    const [productsList1, setProductsList1] = useState([]);

    const[businessDetails,setBusinessDetails]=useState([])

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [imagePath, setImagePath] = useState("");

    const [isLoading, setIsLoading] = useState(false);


    useEffect(()=>{


           axios.get('http://localhost:3001/business/bestRated').then((response) => {
          // axios.get('http://localhost:3001/business/bestRated').then((response) => {

         

            console.log("BUSSINESS LIST FROM THE CONTEXT"+response.data)

           
            setTimeout(() => {

                setPosts(response.data)
                setBussinessList(response.data)

             
            }, 1000);

            //setSeller_name(response.data.Users.first_name)
            
        }).catch((error) => {
            

            console.log("CONTEXT ERROR OCCURED"+error)
          
         });



         axios.get('http://localhost:3001/users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

         

            console.log("MY BUSINESS DETAILS FROM THE CONTEXT"+response.data)

           
            setTimeout(() => {

              
                setBusinessDetails(response.data)

             
            }, 1000);

            //setSeller_name(response.data.Users.first_name)
            
        }).catch((error) => {
            

            console.log("CONTEXT ERROR OCCURED"+error)
          
         });


         axios.get('http://localhost:3001/images/myproducts', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

    
  
  
            setTimeout(() => {
                setProductsList1(response.data.products)
      
              setImagePath(response.data.imagePath)
      
             
          }, 2000);
      
          //setSeller_name(response.data.Users.first_name)
          
      }).catch((error) => {
         
        console.log("CONTEXT ERROR OCCURED WHEN LOADING YOUR PRODUCTS"+error)
       });
          
      
  
  
  },[setPosts,setBussinessList,setBusinessDetails,setProductsList1]);

    

    return (
        <DataContext.Provider value={{
            search, setSearch,
            searchResults,
            bussinessList,setBussinessList,businessDetails,setBusinessDetails,productsList1, setProductsList1,imagePath, setImagePath,
            posts, setPosts
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;