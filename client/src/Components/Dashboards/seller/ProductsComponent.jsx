import { lazy, Suspense } from 'react';
import React from 'react'
import { useEffect,useState,useContext,useCallback} from 'react';



//import axios from 'axios';

import { Helmet } from "react-helmet";

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../../helpers/AuthContext'
import SidebarS from './SidebarS'
import TopbarS from './TopbarS'

import { useNavigate,Link} from "react-router-dom"

import API from '../../../services';
import { Progress } from 'reactstrap';

import DataContext from '../../../helpers/DataContext';

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import LocationDataContextInit from '../../../helpers/LocationDataContextInit';
import LocationDataContext from '../../../helpers/LocationDataContext';
import ContentLoader from '../../../utils/ContentLoader';
//import SearchPlaces from './SearchPlaces';



import { Modal, Button } from "react-bootstrap";

function ProductsComponent(props) 
{

    const {businessDetails,setBusinessDetails} = useContext(DataContext);

  const {userPos, setUserPos} = useContext(LocationDataContextInit);

  const {position, setPosition} = useContext(LocationDataContext);

  const [isLoadingT,setLoadingT]=useState(false);
  const [category, setcategory] = useState("");

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

    const [productId, setProductId] = useState("");





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


    const {productsList1, setProductsList1 } = useContext(DataContext);

    const [businessId, setbusinessId] = useState('');

    const[openTime,setOpenTime]=useState('')

    const[closeTime,setCloseTime]=useState('')

    const[serviceId,setServiceId]=useState('')


    const [servicesList, setServicesList] = useState([]);

    const [retailerCatList, setRetailerCatList] = useState([]);

    const[retailerProductCategoryId,setRetailerProductCategoryId]=useState('')

    

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


      const [nameinvalid,setnameinvalid]=useState(false);

      const [priceinvalid,setpriceinvalid]=useState(false);
  
      const [showActionBtn,setShowActionBtn]=useState(true);

      const [showSuccessAlert,setShowSucessAlert]=useState(false);

      const [hidesavebtn,sethidesavebtn]=useState(false);
  
  
    const [address, setAddress] = React.useState("");

    
    const [showErrorAlert,setShowErrorAlert] = useState(false);


    const [isBusinessSet,setIsBusinessSet] = useState(false);


    const [productStatus,setProductStatus]=useState('available');


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

  const [notifications, setNotifications] = useState([]);


  const [showUpdateButton, setShowUpdateButton] = useState(false);





    

    const [isLoading,setLoading]=useState(false);


    
    

     
    const [mapCenter, setMapCenter] = useState({
      lat: userPos.lat,
      lng: userPos.long
  });









  const [bussSetup,setBussSetup]=useState(false);
  const [showServicesDiv,setShowServicesDiv]=useState(false);


  const [showProductsDiv,setShowProductsDiv]=useState(true);

  const [showBusinessSetupDiv,setShowBusinessSetupDiv]=useState(false);


  const [cloudinaryUrl, setCloudinaryUrl] = useState("");
  //const [service_type, set_service_type] = useState("");

  const [accountProfile, setAccountProfile] = useState("");


  let history = useNavigate();
  const [showSetUpError,setShowSetUpError]=useState(false);


  useEffect(()=>{

    setLat(userPos.lat)

    setLng(userPos.long)


    let buss_status=localStorage.getItem('business_set')

     console.log("BUSS STATUS",buss_status)
    
    setIsBusinessSet(buss_status)


   


     //axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
     API.get('users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

        setUserId(response.data.id)
  
  
       })



       console.log("YOUR VENDOR BUSINESS DETAILS  IS ",businessDetails);





     if(businessDetails.my_buss!=null){

           setIsBusinessSet(true)
     
           setbusinessId(businessDetails.my_buss.id);
 
           //setServicesList(response.data.Services);

          setServicesList(businessDetails.my_buss.Services);

         
 
           setStaffList(businessDetails.my_buss.Staffs);
 
           setbusiness_name(businessDetails.my_buss.business_name);

           console.log("YOUR  BUSINESS NAME  IS ",businessDetails.my_buss.business_name);

           setCloudinaryUrl(businessDetails.my_buss.cloudinary_url)

       

           setbusiness_type(businessDetails.my_buss.business_type);
 
           setbusiness_description(businessDetails.my_buss.business_description);
 
 
           setImagePath(businessDetails.imagePath)
           
           setprofile_photo(businessDetails.my_buss.profile_photo)
 
           setlocation(businessDetails.my_buss.location)
           setLatitude(businessDetails.my_buss.latitude)
           setLongitude(businessDetails.my_buss.longitude)
          
 
           
 
           setbuss_contacts(businessDetails.my_buss.contacts)
 
           setBussSetup(true);
 
           //setOrdersList(response.data.Orders)
 
           setCustomersCount(businessDetails.my_buss.Customers.length)
 
           //setcustomer_contacts(response.data.Customers.)
       
         
       
         }
         else{
       
           setIsBusinessSet(false)
           setbusinessId(0)
           setBussSetup(false);
           setbusiness_name('nobuzz')
           //setOrdersList([])
         } 



      






         API.get('users/mybizz', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
          if(response.data.my_buss!=null){
  
            setIsBusinessSet(true)
      
           // setbusinessId(response.data.my_buss.id);
  
            setlocation(response.data.my_buss.location)
  
           // setServicesList(response.data.my_buss.Services);
  
            //setStaffList(response.data.my_buss.Staffs);

            // setProductsList(response.data.my_buss.Products);


  
            setbusiness_name(response.data.my_buss.business_name);
  
            setbusiness_type(response.data.my_buss.business_type);
  
            setbusiness_description(response.data.my_buss.business_description);
  
  
           // setImagePath(response.data.imagePath)
            
            //setprofile_photo(response.data.my_buss.profile_photo)

            setAccountProfile(response.data.my_buss.cloudinary_url)
  
           
  
            
  
            setbuss_contacts(response.data.my_buss.contacts)
  
            setBussSetup(true);
        
          
        
          }
          else{
        
            setIsBusinessSet(false)
            //setbusinessId(0)
            setBussSetup(false);
            setbusiness_name('nobuzz')
          }
      
          
           })













       console.log("YOUR PRODUCT LIST DETAILS  IS ",productsList1);


         if(productsList1!=null){
          
    
            setTimeout(() => {

                setProductsList(productsList1)
               

        
               // setImagePath(response.data.imagePath)
        
               // setSeller_name(response.data.Users);
                setIsDivLoading(false)   // Hide loading screen 
               // toast.info('Product saved successfully');
            }, 1000);
        
          
        
          }
          else{
        
            setErrorMessage("Unable to fetch your products list.Kindly check your internet connection!!");
            setIsDivLoading(false);
          }



          API.get("retailerproductcat/mycategories",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
       

            if(response.data){
       
              setRetailerCatList(response.data)
       
            }
            else{
              setRetailerCatList([])
       
            }
             
       
             
              })
 

      


       


      
    
    
    
           //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
          API.get("customer/mycustomers").then((response) => {
          setCustomersList(response.data);
          })
    

       




},[businessDetails,productsList1,position,userPos]);



const handleFileInputChange = (e) => {
  e.preventDefault();
  //const { file } = e.target.files[0];
  const file = e.target.files[0];
  previewFile(file);
  setSelectedFile(file);
  setFileInputState(e.target.value);
  
};


const previewFile = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
      setPreviewSource(reader.result);
  };
};





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
 



    const saveBusinessInfor = ()  => {
        setLoading(true);
    
         //axios.post("https://yoteorder-server.herokuapp.com/business",buss_data).then((response)=>{


          try {
        
        API.post("business/bussinfor",buss_data).then((response)=>{


       // setBusinessDetails(b.map(post => post.id === id ? { ...response.data } : post));

       const newDetails = response.data;
       setBusinessDetails(newDetails ?{ ...response.data } : businessDetails);


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

        //setbusinessId(response.data.id)


       // console.log("THE NEW BUSINESS OBJECT AFTER SETTING UP MY BUSS IS "+businessDetails)



           
            setTimeout(() => {
                setLoading(false);
                toast.success('Saved');
                setIsBusinessSet(true)
            }, 500);
         
           //  history("/dashboard");
          
           
        });

      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    
    }


    const handleChange = async e => {
      let formData = new FormData();

    
      setImage(e.target.files[0]);

      formData.append('businessId',businessId);

      formData.append('file', e.target.files[0]);
     
      setUploding(true);
      let { data } = await API.post('business/single-upload', formData,{headers: {
          "Content-Type": "multipart/form-data",
      }}, {
          onUploadProgress: ({ loaded, total }) => {
              let progress = ((loaded / total) * 100).toFixed(2);
              setProgress(progress);
             
          }
      });
      setUplodedImg(data.imagePath);

     // localStorage.setItem('product_photo', JSON.stringify(data.imagePath));
      console.log("tTHE IMAGE NAME IS "+data.imagePath)
      console.log("THE FILE NAME IS "+data.ImageName)
      console.log("THE BUSS ID IS "+businessId)
      setUploding(false);
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
    
    // setCloudinaryUrl(data.cloudinary_url)
    setUploding(false);



    //setPosts(posts.map(post => post.id === id ? { ...response.data } : post));

    //setBusinessDetails.my_buss(businessDetails.my_buss.map(post => businessDetails.my_buss.id === businessId ? { ...data.data.my_buss } : businessDetails));

    //const customer = customersList.find(post => (post.id).toString() === selectedOption);

    setCloudinaryUrl(data.cloudinaryUrl)

   

    setTimeout(() => {
    
        setLoading(false);

        
        toast.success('Profile set successfully');
    }, 2000);
    
}



  const data={
    name:name,
    type:type,
    product_description:product_description,
    price: price,
    quantity:quantity,
    geo_location:address_line_2,
    unit_of_measure:unit_of_measure,
    latitude:lat,
    longitude:lng,
    UserId:userId,
      
  }


  
  const addDetails = ()  => {
    setLoading(true);

 //axios.post("https://kilimomazaoapi-dmi-cyber.herokuapp.com/product",data).then((response)=>{
    
  API.post("product",data).then((response)=>{
     

    console.log("The response is"+response.data)

       
        setTimeout(() => {
            setLoading(false);
            toast.info('Product saved successfully');
        }, 3000);
     
       //  history("/dashboard");
      
       
    })

}

const service_data={

    service_name:service_name,
    service_type:service_type,
    description:description,
    service_cost:service_cost,
    BusinessId:businessId,
    
      
  }




  const addService = ()  => {
    setLoading(true);

    if(businessId==0){

      setTimeout(() => {
        setLoading(false);
        toast.error('You must Have a business');
    }, 1000);
    
    }
    else{

    // axios.post("https://yoteorder-server.herokuapp.com/service",service_data).then((response)=>{

     
    
    API.post("service",service_data).then((response)=>{

      console.log("The response is"+response.data)

      setServicesList([
        ...servicesList,
        {
    service_name:service_name,
    service_type:service_type,
    description:description,
    service_cost:service_cost,
    BusinessId:businessId,
  
        },
      ]);

  

       
        setTimeout(() => {
            setLoading(false);
            toast.info('Service saved');
        }, 1000);
     
       //  history("/dashboard");
      
       
    })

  }

}



const showStaffSection=()=>{

  setShowErrorAlert(true)
  setShowServicesDiv(false)
  setShowBusinessSetupDiv(false)
  setShowProductsDiv(false)
}



const showServicesSection=()=>{

  setShowServicesDiv(true)

  setShowErrorAlert(false)
  setShowBusinessSetupDiv(false)
  setShowProductsDiv(false)
  
}




const openSelectedProduct=(pId,e)=>{

    //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
     API.get('product/byId/'+pId).then((response) => {
 
         console.log("THE PRODUCT NAME IS "+response.data.name)
 
         setProductId(pId)
         setPrice(response.data.price)
         setQuantity(response.data.quantity)

         setName(response.data.name)
         setunit_of_measure(response.data.unit_of_measure)

         setcategory(response.data.category)

         setType(response.data.category)
         setbusinessId(response.data.BusinessId)


         

      
         
 
 
        

 
         setProduct_description(response.data.product_description)
             
 
             })
 
 
 
     }

     
    const updateAvailability=(pId)=>{

        

        setLoading(true);

       // setLoadingT(false)

        //setProductStatus('avalilable')

        const p_details={
            product_status:'available',
          
          }

      


        API.put('product/updatestatus/'+pId,p_details).then((res_b)=>{
    
           // console.log("THE ACTUAL ID IS "+actualId)
            
            //setProductId(res_b.data.id)
            getAllMyProducts()
           
            setTimeout(() => {
                setLoading(false);
                // handleShow()
                toast.warning("Available Status updated")
            }, 1000);
            
            })


        
    }



    
    const updateAvailabilityN=(pId)=>{

        setLoadingT(true);
       // setLoading(false)

        setProductStatus('unavailable')

        const p_details={
            product_status:'unavailable',
          
          }

      


        API.put('product/updatestatus/'+pId,p_details).then((res_b)=>{
    
           // console.log("THE ACTUAL ID IS "+actualId)
            
            //setProductId(res_b.data.id)

            getAllMyProducts()
            
           
            setTimeout(() => {
                setLoadingT(false);
                // handleShow()
                toast.warning("Status updated")
            }, 1000);
            
            })


        
    }


const showProductsSection=()=>{

     
    setShowProductsDiv(true)

    setShowErrorAlert(false)
    setShowBusinessSetupDiv(false)
    setShowServicesDiv(false)
    //showErrorAlert(false)
   
  }


  
  const saveDetails = async e => {
    setLoading(true)

    if(name==""){
        setnameinvalid(true)
        setLoading(false)

        setTimeout(() => {
            setnameinvalid(false)
           
         }, 2000);
        return
    }

    if(price==""){
        setpriceinvalid(true)
        setLoading(false)

        setTimeout(() => {
            setpriceinvalid(false)
           
         }, 2000);
        return
    }



   
    
    let formData = new FormData();
    formData.append('businessId', businessId);
    formData.append('file',selectedFile);
    formData.append('name', name);


    formData.append('product_description', product_description);
    formData.append('price',price);
    formData.append('quantity', quantity);

    formData.append('type',type);
    // formData.append('address_line_2', address_line_2);

    formData.append('unit_of_measure',unit_of_measure);
    formData.append('latitude', lat);

    formData.append('longitude', lng);

    formData.append('UserId', userId);

    formData.append('retailerProductCategoryId', retailerProductCategoryId);


   
    let { data } = await API.post('product/save_item', formData, {});
    


    
    



  //   setUploding(true);
  //   let { data } = await API.post('images/save-product', formData, {
  //       onUploadProgress: ({ loaded, total }) => {
  //           let progress = ((loaded / total) * 100).toFixed(2);
  //           setProgress(progress);
           
  //       }
  //   });
  //   setUplodedImg(data.imagePath);

  //  // localStorage.setItem('product_photo', JSON.stringify(data.imagePath));
  //   console.log("tTHE IMAGE NAME IS "+data.imagePath)
  //   console.log("THE FILE NAME IS "+data.ImageName)
  //   console.log("THE BUSS ID IS "+data.businessId)

  //   setUploding(false);


    setProductsList1([
        ...productsList1,
        {
            name:name,
            type:type,
            product_description:product_description,
            price: price,
            quantity:quantity,
            geo_location:address_line_2,
            unit_of_measure:unit_of_measure,
            latitude:lat,
            longitude:lng,
           // cloudinary_url:data.cloudinary_url,
            //cloudinary_url:data.imagePath,
            UserId:userId,
            BusinessId:businessId,
        },
      ]); 


    



    


    setTimeout(() => {

      

        
        setLoading(false);
        setShowActionBtn(false)
        setShowSucessAlert(true)
        sethidesavebtn(true)
        
        toast.success('Product saved successfully');
    }, 3000);
    
}



const getAllMyProducts=()=>{

    //setIsDivLoading(true)


    API.get('images/myproducts', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

      
  
  
        setTimeout(() => {

          setProductsList(response.data.products)
  
          setImagePath(response.data.imagePath)
  
         // setSeller_name(response.data.Users);
         // setIsDivLoading(false)   // Hide loading screen 
         // toast.info('Product saved successfully');
      }, 1000);
  
      //setSeller_name(response.data.Users.first_name)
      
  }).catch(() => {
      setErrorMessage("Unable to fetch your PRODUCTS.Kindly check your internet connection!!");
      setIsDivLoading(false);
   });
      
}



const showBusinessSetUpSection=()=>{

  setShowErrorAlert(false)
  setShowBusinessSetupDiv(true)
  setShowServicesDiv(false)
  setShowProductsDiv(false)
  
}





const staff_data={
  staff_name:staff_name,

  email:email,
  phone_no:phone_no,
  BusinessId:businessId,

}



const addStaff = ()  => {
  setLoading(true);

 
  //  axios.post("https://yoteorder-server.herokuapp.com/staff",staff_data).then((response)=>{

      API.post("staff",staff_data).then((response)=>{


      setStaffList([
        ...staffList,
        {
          staff_name:staff_name,

          email:email,
          phone_no:phone_no,
        },
      ]);
  


  console.log("The response is"+response.data)

     
      setTimeout(() => {
          setLoading(false);
          toast.info('Staff Added successfully');
      }, 3000);
   
     //  history("/dashboard");
    
     
  })

}


const openSelectedService=(sId)=>{

  //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
   API.get('service/getbyId/'+sId).then((response) => {

      // console.log("THE SERVICE NAME IS "+response.data.service_name)

       setServiceId(sId)
       set_service_name(response.data.service_name)
       set_service_type(response.data.service_type)

       set_service_cost(response.data.service_cost)
       set_description(response.data.description)

       
           

           })



   }


   const updateService=()=>{

    setLoading(true)

    const data={
      sId:serviceId,
      service_name:service_name,
      service_type:service_type,
      description:description,
      service_cost:service_cost,
      BusinessId:businessId,
          
      }

     
    API.put('service/update_service/'+serviceId,data).then((res_b)=>{

        //console.log("THE ACTUAL ID IS "+actualId)
        
       // setorderId(res_b.data.id)
        
        
        
        console.log("THE  SERVICE ID IS "+res_b.data.id)
        
       // console.log("THE  ORDER ID TWO IS "+randomNo)



       API.get('users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
        if(response.data!=null){

        
          setServicesList(response.data.Services);
    
      
        }
       
         })

   

    
    
        setTimeout(() => {
            setLoading(false);
            toast.success("Service Updated")
        }, 3000);
        
        })

}


const openSelectedStaff=(sId)=>{

  //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
   API.get('staff/getbyId/'+sId).then((response) => {

       console.log("THE Staff NAME IS "+response.data.service_name)

       setStaffId(sId)
       SetStaff_name(response.data.staff_name)
       setEmail(response.data.email)

       setPhone_no(response.data.phone_no)
      // set_description(response.data.description)

       
           

           })



   }


   const updateStaff=()=>{

    setLoading(true)

   

      const staff_data={
        staffId:staffId,
        staff_name:staff_name,
        email:email,
        phone_no:phone_no,
        BusinessId:businessId,
      
      }

     
    API.put('staff/updatestaff/'+staffId,staff_data).then((res_b)=>{

        //console.log("THE ACTUAL ID IS "+actualId)
        
       // setorderId(res_b.data.id)
        
        
        
        console.log("THE  Staff ID IS "+res_b.data.id)
        
       // console.log("THE  ORDER ID TWO IS "+randomNo)


       API.get('users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
        if(response.data!=null){

        
          setStaffList(response.data.Staffs);
    
      
        }
       
         })

   

    
    
        setTimeout(() => {
            setLoading(false);
            toast.success("Staff Updated")
        }, 3000);
        
        })

}


const initiateEdit=()=>{

  

  setIsBusinessSet(false)

  setShowErrorAlert(false)
  setShowServicesDiv(false)
  setShowServicesDiv(false)
  setShowBusinessSetupDiv(true)
  setShowBusinessSetupDiv(true)
  setShowUpdateButton(true)

 

  }



  const updateBusinessInfor = ()  => {
    setLoading(true);

     //axios.post("https://yoteorder-server.herokuapp.com/business",buss_data).then((response)=>{
    
    API.put(`business/updateBuss/${businessId}`,buss_data).then((response)=>{

    console.log("The response is"+response.data)


    console.log("START tIME"+openTime)


    console.log("END TIME"+closeTime)


    console.log("THE BUSINESS ID IS "+response.data.id)

    setbusinessId(response.data.id)


    setbusiness_name(response.data.business_name)

    setlocation(response.data.location)
    setLatitude(response.data.latitude)
    setLongitude(response.data.longitude)


       
        setTimeout(() => {
            setLoading(false);
            toast.success('Saved');
            setIsBusinessSet(true)
        }, 500);
     
       //  history("/dashboard");
      
       
    })

}



const updateProductNew = async e => {
  setLoading(true)
  
  let formData = new FormData();
  formData.append('businessId', businessId);
  formData.append('file',image);
  formData.append('name', name);


  formData.append('product_description', product_description);
  formData.append('price',price);
  formData.append('quantity', quantity);

  formData.append('type',type);
  // formData.append('address_line_2', address_line_2);

  formData.append('unit_of_measure',unit_of_measure);
  formData.append('latitude', lat);

  formData.append('longitude', lng);

  formData.append('UserId', userId);



  setUploding(true);
  let { data } = await API.put('product/update-product/'+productId, formData, {
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

  setUploding(false);

  getAllMyProducts();


  setTimeout(() => {
      setLoading(false);
      setShowActionBtn(false)
      setShowSucessAlert(true)
      
      toast.success('Product update successfully');
  }, 2000);
  
}



  return (
   <div>

  
   
   <div class="card">
       <div class="card-body p-2">
       <div class="row">
       <div class="col-xl-5 col-lg-8 col-md-8 col-sm-8">
           <div class="input-group d-flex w-100 float-start">
               <input type="text" class="form-control border-end-0 my-2" placeholder="Search ..."/>
               <button class="btn input-group-text bg-transparent border-start-0 text-muted my-2">
                   <i class="fe fe-search text-muted" aria-hidden="true"></i>
               </button>
           </div>
       </div>
       <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
           <ul class="nav item2-gl-menu float-end my-2">
               <li class="border-end"><a href="#tab-11" class="show active" data-bs-toggle="tab" title="List style"><i class="fa fa-th"></i></a></li>
               <li><a href="#tab-12" data-bs-toggle="tab" class="" title="Grid"><i class="fa fa-list"></i></a></li>
           </ul>
       </div>
       <div class="col-xl-3 col-lg-12">
      
           <a class="btn btn-primary btn-block float-end my-2" data-bs-effect="effect-flip-horizontal" data-bs-toggle="modal" href="#modaldemo801"><i class="fa fa-plus-square me-2"></i>New Product</a>
       </div>
   </div>
       </div>
   </div>
   <div class="row row-sm">

   {productsList.map((value, key) => {
    return (
    
      
       <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
           <div class="product-card card">
               <div class="card-body h-100">
                   <div class="d-flex">
                       <span class="text-secondary small text-uppercase">{value.category}</span>
                       <span class="ms-auto"><i class="far fa-heart"></i></span>
                   </div>
                   <h3 class="h6 mb-2 font-weight-bold text-uppercase">{value.name}</h3>
                   <div class="d-flex">
                       <h4 class="h5 w-50 font-weight-bold text-danger">Ksh {value.price}</h4>
                       <span class="tx-15 ms-auto">
                           <i class="ion ion-md-star text-warning"></i>
                           <i class="ion ion-md-star text-warning"></i>
                           <i class="ion ion-md-star text-warning"></i>
                           <i class="ion ion-md-star-half text-warning"></i>
                           <i class="ion ion-md-star-outline text-warning"></i>
                       </span>
                   </div>
                   

                   <button  type="submit" class="btn btn-primary mb-1"
             
             
                   onClick={() => {
                       openSelectedProduct(value.id);
                         }}
                   
               
                         data-bs-effect="effect-slide-in-bottom" data-bs-toggle="modal" href="#modaldemo9">Edit</button>
                  
               </div>
           </div>
       </div>

       )
    })}






                  
<div class="modal fade" id="modaldemo801">
<div class="modal-dialog modal-dialog-centered text-center" role="document">
    <div class="modal-content modal-content-demo">
        <div class="modal-header">
            <h6 class="modal-title">Add Product</h6><button aria-label="Close" class="btn-close" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">


      

        {showSuccessAlert &&

          <div>

          <i class="icon icon-check fs-70 text-success lh-1 my-4 d-inline-block"></i>
          <h4 class="text-success mb-4">Product saved successfully!</h4>

          </div>
      }


      {!showSuccessAlert &&  <div>

        <div class="row">
        <div class="col mb-3">
          <label for="nameWithTitle" class="form-label">Item Name</label>
          <input type="text" id="item_name" class="form-control" placeholder="Eg.Chrome Gine"
          
          onChange={(event) => {
              setName(event.target.value);
            }}
             
          />
        </div>
      </div>

      <div class="row">
      <div class="col mb-3">
        <label for="nameWithTitle" class="form-label">Description</label>


        <textarea id="basic-icon-default-message" class="form-control" placeholder="Eg.Im only reliable type-c cable seller around!" aria-label="Hi, My business deals with beauty services?" 
                                  
        onChange={(event) => {
          setProduct_description(event.target.value)
        }}

        aria-describedby="basic-icon-default-message2"></textarea> 
        
      </div>
    </div>


    
    <div class="form-row">

      <div class="form-group col-md-6 mb-0">


        <label class="form-label" for="multicol-country">Category</label>
        <select id="multicol-country" class="form-control select2 form-select"
            onChange={(event) => {
              setRetailerProductCategoryId(event.target.value);
            }}

            data-allow-clear="true">
            <option value="">Select Category</option>

            {retailerCatList.map((value,key)=>{

              return (

                <option value={value.id}>{value.cat_name}</option>

              )

            })}


            


        </select>


         
        </div>

        <div class="form-group col-md-6 mb-0">

       
            <div class="form-group">
            <label for="dobWithTitle" class="form-label">Quantity</label>
            <input type="number" id="price" class="form-control"

                onChange={(event) => {
                    setQuantity(event.target.value);
                }}


            />
         
            </div>
        



        </div>
        </div>

        <div class="form-row">

      <div class="form-group col-md-6 mb-0">


        <label class="form-label" for="multicol-country">Unit Of Measure</label>
        <select id="multicol-country" class="form-control select2 form-select"
       
        onChange={(event) => {
            setunit_of_measure(event.target.value);
        }}

            data-allow-clear="true">
            <option value="">Select Unit Of Measure</option>

            <option value="Litre">Litres</option>
           
            <option value="Item">Item</option>
          

            
           
            <option value="Package">Package</option>

            <option value="Order">Order</option>

            


        </select>


         
        </div>

        <div class="form-group col-md-6 mb-0">

       
            <div class="form-group">
            <label for="dobWithTitle" class="form-label">Price(Per Item)</label>
            <input type="number" id="price" class="form-control"

            onChange={(event) => {
              setPrice(event.target.value);
          }}

            />
            {priceinvalid && <div class="invalid-feedback-p">Please provide a product price.</div> } 
            </div>

            <input type="text" value={businessId}  onChange={(event) => {
              setbusinessId(event.target.value);
            }} placeholder="bussId"/>
        



        </div>
        </div>
        <div class="form-row">
        


    {/** <div class="form-group">
        <label class="form-label mt-0">Upload Product Photo</label>
        <input class="form-control" type="file"
        name="image"

        onChange={(e) => {
          handleFileInputChange(e)
        }}
       
        value={fileInputState}
       
    /> 
    
    <input type="hidden" value={businessId}  onChange={(event) => {
        setbusinessId(event.target.value);
      }} placeholder="bussId"/>
        </div>


        {previewSource && (
            <img
                src={previewSource}
                alt="chosen"
                style={{ height: '300px' }}
            />
        )} */}

       
      </div>
        
        
        </div> }
     
      </div>
        <div class="modal-footer">
          


            {!isLoading && !hidesavebtn &&<button type="submit" onClick={saveDetails} class="btn btn-primary">Save</button>

        } 
        {isLoading &&
          <button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled><div class="spinner-grow spinner-grow-sm me-2" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>Saving Infor</button>
        }
    
            
            
            <button class="btn btn-light" data-bs-dismiss="modal">Close</button>
        </div>
    </div>
</div>
</div>
      
   </div>

   
   
   </div>
  )
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAOJjEor9H6PWdsKLAQSr3dIH1fWJNveGI')
  })(ProductsComponent)
  