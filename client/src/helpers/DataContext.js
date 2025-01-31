import { createContext, useState, useEffect } from 'react';

// import axios from 'axios';

import API from '../services';


const DataContext = createContext({});


export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [bussinessList, setBussinessList] = useState([])

    const [retailerList, setRetailerList] = useState([])

    const [supplierList, setSupplierList] = useState([]);

    const [productsList1, setProductsList1] = useState([]);

    const[businessDetails,setBusinessDetails]=useState([])

    const[supplierDetails,setSupplierDetails]=useState([])

    const[itemsList,setItemsList]=useState([])

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [imagePath, setImagePath] = useState("");

    const [isLoading, setIsLoading] = useState(false);


   


   

    useEffect(()=>{


        API.get('business/bestRated').then((response) => {
          // axios.get('https://yoteorder-server.herokuapp.com/business/bestRated').then((response) => {

         

            console.log("BUSSINESS LIST FROM THE CONTEXT"+response.data)

           
            setTimeout(() => {

                setPosts(response.data)
                setBussinessList(response.data)

             
            }, 1000);

            //setSeller_name(response.data.Users.first_name)
            
        }).catch((error) => {
            

            console.log("CONTEXT ERROR OCCURED"+error)
          
         });


         API.get('retailer/allretailers').then((response) => {
            // axios.get('https://yoteorder-server.herokuapp.com/business/bestRated').then((response) => {
  
           
  
              console.log("RETAILER LIST FROM THE CONTEXT"+response.data)
  
             
              setTimeout(() => {
  
                  //setPosts(response.data)
                  setRetailerList(response.data);
                  
  
               
              }, 500);
  
              //setSeller_name(response.data.Users.first_name)
              
          }).catch((error) => {
              
  
              console.log("CONTEXT ERROR OCCURED"+error)
            
           });



           API.get("suppliers/getall",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
            // axios.get('https://yoteorder-server.herokuapp.com/business/bestRated').then((response) => {
  
           
  
              console.log("SUPPLIER LIST FROM THE CONTEXT"+response.data)
  
             
              setTimeout(() => {
  
                  //setPosts(response.data)
                  setSupplierList(response.data);
                  
  
               
              }, 500);
  
              //setSeller_name(response.data.Users.first_name)
              
          }).catch((error) => {
              
  
              console.log("CONTEXT ERROR OCCURED"+error)
            
           });




      {/**  API.get('users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

         

            //console.log("MY BUSINESS DETAILS FROM THE CONTEXT"+response.data)


        if (response.data.error) {
            console.log("BACKEND ERROR HERE:"+response.data.error)
              }


            if(response.data.my_buss!=null){

            localStorage.setItem("business_set", true);
            setProductsList1(response.data.my_buss.Products)
            setBusinessDetails(response.data)

            }
            else{
                localStorage.setItem("business_set", false);
                setProductsList1([])

            }



           
            // setTimeout(() => {

              
            //     setBusinessDetails(response.data)

             
            // }, 1000);

            //setSeller_name(response.data.Users.first_name)
            
        }).catch((error) => {
            

            console.log("CONTEXT ERROR OCCURED"+error)
          
         }); */}
         
       





            
         API.get('users/mybizz', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

         

            //console.log("MY BUSINESS DETAILS FROM THE CONTEXT"+response.data)


        if (response.data.error) {
            console.log("BACKEND ERROR HERE:"+response.data.error)
              }


            if(response.data.my_buss!=null){

            localStorage.setItem("business_set", true);
            setProductsList1(response.data.my_buss.Products)
            setBusinessDetails(response.data.my_buss)

            console.log("CONTEXT BIZZ DETAILS:"+response.data.my_buss)

            }
            else{
                localStorage.setItem("business_set", false);
                setProductsList1([])

            }



           
            // setTimeout(() => {

              
            //     setBusinessDetails(response.data)

             
            // }, 1000);

            //setSeller_name(response.data.Users.first_name)
            
        }).catch((error) => {
            

            console.log("CONTEXT ERROR OCCURED"+error)
          
         });





         API.get('users/mystore', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

         
            //console.log("MY BUSINESS DETAILS FROM THE CONTEXT"+response.data)


        if (response.data.error) {
            console.log("BACKEND ERROR HERE:"+response.data.error)
              }


            if(response.data.my_buss!=null){

            localStorage.setItem("business_set", true);
            setSupplierDetails(response.data)
            setItemsList(response.data.my_buss.SupplyStores)

            console.log("HERE IS YOUR SUPPLIER ACCOUNT DETAILS",response.data);

            


            }
            else{
                localStorage.setItem("business_set", false);
                setItemsList([])

            }



           
            // setTimeout(() => {

              
            //     setBusinessDetails(response.data)

             
            // }, 1000);

            //setSeller_name(response.data.Users.first_name)
            
        }).catch((error) => {
            

            console.log("CONTEXT ERROR OCCURED"+error)
          
         });



        



       
          
  
  
  },[setPosts,setBussinessList,setRetailerList,setSupplierList,setBusinessDetails,setProductsList1,setSupplierDetails]);

    

    return (
        <DataContext.Provider value={{
            search, setSearch,
            searchResults,retailerList,setRetailerList,supplierList,setSupplierList,
            bussinessList,setBussinessList,businessDetails,setBusinessDetails,productsList1, setProductsList1,imagePath, setImagePath,
            posts, setPosts,supplierDetails,setSupplierDetails,itemsList,setItemsList
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;