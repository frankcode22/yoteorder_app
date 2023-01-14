import {React, useEffect,useState,useContext,useCallback} from 'react';
import { lazy, Suspense } from 'react';



//import axios from 'axios';

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


import {VendorAccount,Player} from '../../../utils/VideoPlayers'


function AccountDetails(props) {
    const {businessDetails,setBusinessDetails} = useContext(DataContext);

    const {supplierDetails,setSupplierDetails} = useContext(DataContext);
  
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

      const [supplierId, setsupplierId] = useState('');
  
  
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
        //const [status, setStatus] = useState('');
    
    
      const [address, setAddress] = useState("");
  
      
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
  
  
   
  
   
  
   
   // const post = bussinessList.find(post => (post.id).toString() === businessId);
  
  
  
    useEffect(()=>{
  
      let buss_status=localStorage.getItem('business_set')
  
       console.log("BUSS STATUS",buss_status)
      
      setIsBusinessSet(buss_status)




      
      if(supplierDetails.my_buss!=null){
       
  
      
  
        setsupplierId(supplierDetails.my_buss.id)
        setIsBusinessSet(true)
      
        setbusinessId(supplierDetails.my_buss.id);
        
        setlocation(supplierDetails.my_buss.location)

       // setServicesList(response.data.my_buss.Services);

      

       // setStaffList(response.data.my_buss.Staffs);

        setbusiness_name(supplierDetails.my_buss.name);
        setEmail(supplierDetails.my_buss.User.email)

        setbusiness_type(supplierDetails.my_buss.business_type);

        setbusiness_description(supplierDetails.my_buss.business_description);


        setImagePath(supplierDetails.imagePath)
        
       // setprofile_photo(response.data.my_buss.profile_photo)

        setCloudinaryUrl(supplierDetails.my_buss.cloudinary_url)

       

        

        setbuss_contacts(supplierDetails.my_buss.contacts)
            
  
     
     
       
     
       }
       else{
     
         setErrorMessage("Unable to fetch your account details.Kindly check your internet connection!!");
        // setIsDivLoading(false);
       }
  
  
  
     
  
  
       //API.get('users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
       API.get('users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
  
          setUserId(response.data.id)
    
    
         })
  
  
  
  
    
  
       
  
        
  
  
  
  
  
  
        
      
      
      
             //API.get("customer/mycustomers").then((response) => {
            API.get("customer/mycustomers").then((response) => {
            setCustomersList(response.data);
            })
  
  
  
            API.get("servicetype/alltypes").then((response) => {
         
  
              if(response.data){
         
                 setServiceTypeList(response.data)
         
              }
              else{
                setServiceTypeList([])
         
              }
               
                })
      
  
         
  
  
  
  },[position,userPos,cloudinary_url,supplierDetails]);
  
  
  
  const handleFileInputChange = (e) => {
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
  
  
  
  const handleServiceIconInputChange = (e) => {
    const file = e.target.files[0];
    previewServiceIconFile(file);
    setSelectedIconFile(file);
    setServiceIconInputState(e.target.value);
  };
  
  
  const previewServiceIconFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewIconSource(reader.result);
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
      //status:status,
      UserId:userId,
     
  }
   
  
  
  
      const saveBusinessInfor = ()  => {
          setLoading(true);
      
           //API.post("business",buss_data).then((response)=>{
  
  
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
  
          setbusinessId(response.data.id)
  
  
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
  
  
    const handleChangeServiceIcon = async e => {
      let formData = new FormData();
  
    
      setImage(e.target.files[0]);
  
      formData.append('businessId',businessId);
  
      formData.append('file', e.target.files[0]);
     
      setUploding(true);
      let { data } = await API.post('service/single-upload', formData,{headers: {
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
      
      setCloudinaryUrl(data.cloudinary_url)
    
      setUploding(false);
  
  
  
     
  
      setTimeout(() => {
      
          setLoading(false);
          setShowSucessAlert(true)
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
  
   //API.post("https://kilimomazaoapi-dmi-cyber.herokuapp.com/product",data).then((response)=>{
      
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
      latitude:mapCenter.lat,
      longitude:mapCenter.lng,
      city:city,
      state:state,
      country:country,
      cloudinary_url:cloudinary_url,
      subcatId:subcatId,
      
        
    }
  
  
  
  
    const addService = async e => {
      setLoading(true);
  
      if(businessId==0){
  
        setTimeout(() => {
          setLoading(false);
          toast.error('You must Have a business');
      }, 1000);
      
      }
      else{
  
  
  
        let formData = new FormData();
        formData.append('businessId', businessId);
        formData.append('file',selectedIconFile);
        formData.append('service_name', service_name);
      
      
        formData.append('description', description);
        formData.append('service_cost',service_cost);
        formData.append('quantity', quantity);
      
        formData.append('service_type',service_type);
        // formData.append('address_line_2', address_line_2);
      
        formData.append('latitude',mapCenter.lat);
      
        formData.append('longitude',mapCenter.lng);
  
        formData.append('city',state);
      
        formData.append('state',state);
  
        formData.append('subcatId', subcatId);
      
      
        setUploding(true);
        let { data } = await API.post('service/addservice', formData, {
            onUploadProgress: ({ loaded, total }) => {
                let progress = ((loaded / total) * 100).toFixed(2);
                setProgress(progress);
               
            }
        });
       // setUplodedImg(data.imagePath);
  
        setUploding(false);
  
  
        setServicesList([
          ...servicesList,
          {
      service_name:service_name,
      service_type:service_type,
      description:description,
      service_cost:service_cost,
      cloudinary_url:data.cloudinary_url,
      BusinessId:businessId,
    
          },
        ]);
  
      
  
    
          setTimeout(() => {
              setLoading(false);
              toast.info('Service saved');
          }, 1000);
       
         //  history("/dashboard");
      
    }
  
  }
  
  
  const updateServiceNew = async e => {
    setLoading(true);
  
    if(businessId==0){
  
      setTimeout(() => {
        setLoading(false);
        toast.error('You must Have a business');
    }, 1000);
    
    }
    else{
  
  
      let formData = new FormData();
      formData.append('businessId', businessId);
      formData.append('file',image);
      formData.append('service_name', service_name);
    
    
      formData.append('description', description);
      formData.append('service_cost',service_cost);
   
      formData.append('service_type',service_type);
      // formData.append('address_line_2', address_line_2);
    
      formData.append('latitude',mapCenter.lat);
    
      formData.append('longitude',mapCenter.lng);
  
      formData.append('city',state);
    
      formData.append('state',state);
  
      formData.append('subcatId', subcatId);
    
    
      setUploding(true);
      let { data } = await API.put('service/update-service/'+serviceId, formData, {
          onUploadProgress: ({ loaded, total }) => {
              let progress = ((loaded / total) * 100).toFixed(2);
              setProgress(progress);
             
          }
      });
     // setUplodedImg(data.imagePath);
  
      setUploding(false);
  
  
      setServicesList([
        ...servicesList,
        {
    service_name:service_name,
    service_type:service_type,
    description:description,
    service_cost:service_cost,
    cloudinary_url:data.cloudinary_url,
    BusinessId:businessId,
  
        },
      ]);
  
    
  
  
        setTimeout(() => {
            setLoading(false);
            toast.info('Service updated');
        }, 2000);
     
       //  history("/dashboard");
    
  }
  
  }
  
  
  
  
  
  
  
  
  const showStaffSection=()=>{
  
    setShowErrorAlert(true)
    setShowServicesDiv(false)
    setShowBusinessSetupDiv(false)
    setShowHelpAndSupport(false)
  }
  
  
  
  const showServicesSection=()=>{
  
    setShowErrorAlert(false)
    setShowBusinessSetupDiv(false)
     setShowHelpAndSupport(false)
    setShowServicesDiv(true)
  }
  
  
  
  const showBusinessSetUpSection=()=>{
  
    setShowErrorAlert(false)
    setShowBusinessSetupDiv(true)
    setShowServicesDiv(false)
    setShowHelpAndSupport(false)
    
  }
  
  
  const showHelpAndSupportSection=()=>{
  
  
    setShowHelpAndSupport(true)
    setShowBusinessSetupDiv(false)
    setShowErrorAlert(false)
  
    setShowServicesDiv(false)
    
  }
  
  
  
  
  
  const staff_data={
    staff_name:staff_name,
  
    email:email,
    phone_no:phone_no,
    BusinessId:businessId,
  
  }
  
  
  
  const addStaff = ()  => {
    setLoading(true);
  
   
    //  API.post("staff",staff_data).then((response)=>{
  
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
  
    //API.get("customer/mycustomers").then((response) => {
     API.get('service/getbyId/'+sId).then((response) => {
  
        // console.log("THE SERVICE NAME IS "+response.data.service_name)
  
         setServiceId(sId)
         setSubcatId(sId)
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
  
  
  
  const handleServiceSelect= async (event) => {
  
    const selectedOption=event.target.value
  
  
    const customer = serviceTypeList.find(post => (post.id).toString() === selectedOption);
  
    // setUserId(JSON.stringify(customer))
  
    set_service_type(customer.name)
    //set_description(customer.description)
  
   
  
  
  
  
    API.get('servicetype/getbyId/'+customer.id).then((response) => {
    
      // console.log("THE SERVICE NAME IS "+response.data.service_name)
     
  
      setSubcategoryList(response.data.ServiceTypeSubcategories)
  
       
  
           })
  
  
    //console.log("THE SELECT OPTION IS "+JSON.stringify(customer))
  
  
   }
  
  
  const openSelectedStaff=(sId)=>{
  
    //API.get("customer/mycustomers").then((response) => {
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
  
  
  
  const closeDemoVideo = () =>{
    // setLoading(false)
   // e.preventDefault();
    //handleClose();
     setShowVideoModal(false);
     
    
     
       };
  
  
  
       const viewVideo = () =>{
      
          
   
        setShowVideoModal(true)
        
       
        
          };
  
  return (
    <div>


    
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
                  <option value="Beer">Beer</option>
                  <option value="Senator Keg">Senator Keg</option>
                 

                
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
              <input type="text" id="email" name="email" class="form-control phone-mask"

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

    
    
    
    
    </div>
  )
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAOJjEor9H6PWdsKLAQSr3dIH1fWJNveGI')
  })(AccountDetails)