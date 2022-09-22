import React from 'react'
import { lazy, Suspense } from 'react';
import { useEffect,useState,useContext} from 'react';



import axios from 'axios';

import { Helmet } from "react-helmet";

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../../helpers/AuthContext'
import SideBar from './SideBar';
import Topbar from './Topbar';

import {useNavigate,useParams} from "react-router-dom"

import API from '../../../services';
import { Progress } from 'reactstrap';
import LocationDataContextInit from '../../../helpers/LocationDataContextInit';

import { Modal, Button } from "react-bootstrap";

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import LocationDataContext from '../../../helpers/LocationDataContext';
//import BusinessDetailsComponet from './BusinessDetailsComponet';


const BusinessDetailsComponet = lazy(() => import('./BusinessDetailsComponet'));


function EditBusinessSetting(props) {

  let { id } = useParams();


  const {userPos, setUserPos} = useContext(LocationDataContextInit);

  const {position, setPosition} = useContext(LocationDataContext);
  
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


  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');


  

  const [isLoading,setLoading]=useState(false);

  const [cloudinaryUrl, setCloudinaryUrl] = useState("");


//   const [mapCenter, setMapCenter] = useState({
//     lat: 0,
//     lng: 0

// });

const [mapCenter, setMapCenter] = useState({
  lat: userPos.lat,
  lng: userPos.long
});



let history = useNavigate();


const [bussSetup,setBussSetup]=useState(false);

const [showSetUpError,setShowSetUpError]=useState(false);

const [showServicesDiv,setShowServicesDiv]=useState(false);


const [showOrderConfirmed, setShowOrderConfirmed] = useState(false);

const [showBusinessSetupDiv,setShowBusinessSetupDiv]=useState(true);


const [message, setMessage] = useState("");

const [show, setShow] = useState(false);



useEffect(()=>{



   //axios.get('http://localhost:3001/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
   axios.get('http://localhost:3001/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

      setUserId(response.data.id)


     })


     axios.get(`http://localhost:3001/business/getdetails/${id}`, { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
  
      if(response.data!=null){

        setIsBusinessSet(true)
  
        setbusinessId(response.data.id);

        setlocation(response.data.location)

        setServicesList(response.data.Services);

        setStaffList(response.data.Staffs);

        setbusiness_name(response.data.business_name);

        setbusiness_type(response.data.business_type);

        setbusiness_description(response.data.business_description);


        setImagePath(response.data.imagePath)
        
        setprofile_photo(response.data.profile_photo)

        setCloudinaryUrl(response.data.cloudinary_url)

       

        

        setbuss_contacts(response.data.contacts)

        setBussSetup(true);
    
      
    
      }
      else{
    
        setIsBusinessSet(false)
        setbusinessId(0)
        setBussSetup(false);
        setbusiness_name('nobuzz')
      }
  
      
       })
  
  
  
         //axios.get("http://localhost:3001/customer/mycustomers").then((response) => {
        axios.get("http://localhost:3001/customer/mycustomers").then((response) => {
        setCustomersList(response.data);
        })

        setMapCenter({  
          lat: position.latitude,
          lng: position.longitude})



          // setMapCenter({  
          //   lat: userPos.lat,
          //   lng: userPos.long})
  

     




},[userPos,position]);



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
  location:location,
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
  
       //axios.post("http://localhost:3001/business",buss_data).then((response)=>{
      
      axios.put(`http://localhost:3001/business/updateBuss/${id}`,buss_data).then((response)=>{
  
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
  formData.append('file',image);
  

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

  setUploding(false);

 

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
  
axios.post("http://localhost:3001/product",data).then((response)=>{
   

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

  // axios.post("http://localhost:3001/service",service_data).then((response)=>{

   
  
  axios.post("http://localhost:3001/service",service_data).then((response)=>{

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


const initiateEdit=()=>{

  setIsBusinessSet(false)

  setShowErrorAlert(false)
  setShowServicesDiv(false)
  setShowServicesDiv(false)
  setShowBusinessSetupDiv(true)

  }



const showStaffSection=()=>{

setShowErrorAlert(true)
setShowServicesDiv(false)
setShowBusinessSetupDiv(false)
}



const showServicesSection=()=>{

setShowErrorAlert(false)
setShowBusinessSetupDiv(false)
setShowServicesDiv(true)
}



const showBusinessSetUpSection=()=>{

setShowErrorAlert(false)
setShowBusinessSetupDiv(true)
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


//  axios.post("http://localhost:3001/staff",staff_data).then((response)=>{

    axios.post("http://localhost:3001/staff",staff_data).then((response)=>{


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

//axios.get("http://localhost:3001/customer/mycustomers").then((response) => {
 axios.get('http://localhost:3001/service/getbyId/'+sId).then((response) => {

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

   
  axios.put('http://localhost:3001/service/update_service/'+serviceId,data).then((res_b)=>{

      //console.log("THE ACTUAL ID IS "+actualId)
      
     // setorderId(res_b.data.id)
      
      
      
      console.log("THE  SERVICE ID IS "+res_b.data.id)
      
     // console.log("THE  ORDER ID TWO IS "+randomNo)



     axios.get('http://localhost:3001/users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
  
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

//axios.get("http://localhost:3001/customer/mycustomers").then((response) => {
 axios.get('http://localhost:3001/staff/getbyId/'+sId).then((response) => {

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

   
  axios.put('http://localhost:3001/staff/updatestaff/'+staffId,staff_data).then((res_b)=>{

      //console.log("THE ACTUAL ID IS "+actualId)
      
     // setorderId(res_b.data.id)
      
      
      
      console.log("THE  Staff ID IS "+res_b.data.id)
      
     // console.log("THE  ORDER ID TWO IS "+randomNo)


     axios.get('http://localhost:3001/users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
  
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


const openMessageDialog=()=>{

  setShow(true)
}


const handleClose = () =>{
  // setLoading(false)
 // e.preventDefault();
  //handleClose();
   setShow(false);
   
  
   
     };


const sendMsg=()=>{


  const msg_payload={
    buss_contacts:buss_contacts,
    message:message,
    businessId:businessId,
  }
  setLoading(true)

  axios.post('http://localhost:3001/business/send_msg',msg_payload).then((response) => {

     console.log("THE RESPONSE IS "+response.data)



     setTimeout(() => {
      setLoading(false);
      setShowOrderConfirmed(true)
      toast.success("Staff Updated")
  }, 1000);

    
      

         })


}




return (
  <div class="app sidebar-mini ltr">


  <Helmet>





 
    <link id="style" href="/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

    
    <link href="/assets/css/style.css" rel="stylesheet" />
    <link href="/assets/css/dark-style.css" rel="stylesheet" />

   
    <link href="/assets/css/icons.css" rel="stylesheet" />

   
    <link id="theme" rel="stylesheet" type="text/css" media="all" href="/assets/colors/color1.css" />

   
    <link href="/assets/switcher/css/switcher.css" rel="stylesheet" />
    <link href="/assets/switcher/demo.css" rel="stylesheet" />



   

    <link href="/assets/css/skin-modes.css" rel="stylesheet" />

    
    </Helmet>



  
 <BusinessDetailsComponet id={id}></BusinessDetailsComponet>



<Helmet>



<script src="/assets/js/jquery.min.js"></script>


<script src="/assets/plugins/bootstrap/js/popper.min.js"></script>

<script src="/assets/plugins/bootstrap/js/bootstrap.min.js"></script>


<script src="/assets/js/jquery.sparkline.min.js"></script>


<script src="/assets/js/sticky.js"></script>


<script src="/assets/js/circle-progress.min.js"></script>


<script src="/assets/plugins/peitychart/jquery.peity.min.js"></script>
<script src="/assets/plugins/peitychart/peitychart.init.js"></script>


<script src="/assets/plugins/sidebar/sidebar.js"></script>


<script src="/assets/plugins/p-scroll/perfect-scrollbar.js"></script>
<script src="/assets/plugins/p-scroll/pscroll.js"></script>
<script src="/assets/plugins/p-scroll/pscroll-1.js"></script>


<script src="/assets/plugins/chart/Chart.bundle.js"></script>
<script src="/assets/plugins/chart/rounded-barchart.js"></script>
<script src="/assets/plugins/chart/utils.js"></script>


<script src="/assets/plugins/select2/select2.full.min.js"></script>


<script src="/assets/plugins/datatable/js/jquery.dataTables.min.js"></script>
<script src="/assets/plugins/datatable/js/dataTables.bootstrap5.js"></script>
<script src="/assets/plugins/datatable/dataTables.responsive.min.js"></script>


<script src="/assets/js/apexcharts.js"></script>
<script src="/assets/plugins/apexchart/irregular-data-series.js"></script>


<script src="/assets/plugins/flot/jquery.flot.js"></script>
<script src="/assets/plugins/flot/jquery.flot.fillbetween.js"></script>
<script src="/assets/plugins/flot/chart.flot.sampledata.js"></script>
<script src="/assets/plugins/flot/dashboard.sampledata.js"></script>

<script src="/assets/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js"></script>
<script src="/assets/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>

<script src="/assets/plugins/sidemenu/sidemenu.js"></script>






<script src="/assets/plugins/bootstrap5-typehead/autocomplete.js"></script>
<script src="/assets/js/typehead.js"></script>


<script src="/assets/js/index1.js"></script>


<script src="/assets/js/themeColors.js"></script>

<script src="/assets/js/custom.js"></script>




</Helmet>





  
  
  
  
  
  
  
  
  
  
  </div>
)
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyAOJjEor9H6PWdsKLAQSr3dIH1fWJNveGI')
})(EditBusinessSetting)
