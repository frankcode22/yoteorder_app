import { lazy, Suspense } from 'react';

import React, { useCallback,useState,useEffect,useContext } from 'react';

import axios from 'axios';

import {Link,useNavigate} from 'react-router-dom'
//import HowToGetStarted from './HowToGetStarted'
//import CampaignBadge from './CampaignBadge';

// import ContentLoader from '../../../utils/ContentLoader';

// import DivLoader from '../../../utils/DivLoader'

// import LoadingSpinner from '../../../utils/LoadingSpinner'
import DataContext from '../../../helpers/DataContext';


import LocationDataContext from '../../../helpers/LocationDataContext';
import LocationDataContextInit from '../../../helpers/LocationDataContextInit';
import { UsePositions } from './geo';
import { usePosition } from './usePosition';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import { Modal, Button } from "react-bootstrap";

import 'react-toastify/dist/ReactToastify.css';

import './styles.css'

import SearchBar from "./SearchBar";

import API from '../../../services';

import BookData from "../../../Data.json";
//import SearchModal from './SearchModal';

import { ChildComponent } from './ChildComponent ';
import SearchService from './SearchService';

const CampaignBadge = lazy(() => import('./CampaignBadge'));

const HowToGetStarted = lazy(() => import('./HowToGetStarted'));

const BestRatedVendors = lazy(() => import('./BestRatedVendors'));






function truncate(number, index = 2) {
    // cutting the number
  return +number.toString().slice(0, (number.toString().indexOf(".")) + (index + 1));
}



function HeaderPtaMtaani() {
    const {bussinessList, setBussinessList} = useContext(DataContext);

    const {userPos, setUserPos} = useContext(LocationDataContextInit);

    const {position, setPosition} = useContext(LocationDataContext);


    const {latitude, longitude} = usePosition();

    const [trigger, setTrigger] = useState("Mbatha");


   // let [showSecret, setShowSecret] = useState(0)


    const[lat,setLat]=useState('')

    const[lng,setLng]=useState('')

    const[lat1,setLat1]=useState('')

    const[lng1,setLng1]=useState('')

    const[exitCode,setExitCode]=useState(null)



    const [pname, setpname] = useState("");

    const history = useNavigate();

    const isAuthenticated = localStorage.getItem("isAuthenticated")

    const [bestList, setBestList] = useState([]);
    const [isDivLoading, setIsDivLoading] = useState(false);

    
    const [errorMessage, setErrorMessage] = useState("");

    const [isLoading,setLoading]=useState(false);


    const [showServicesSearch,setShowServicesSearch]=useState(false);


    const [servicesList, setServicesList] = useState([]);


  const [online, setOnline] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  const [showOfflineAlert, setshowOfflineAlert] = useState(false);




    const [show, setShow] = useState(false);

    const [showErrorModal, setShowErrorModal] = useState(false);

    const [showManualSearchModal, setShowManualSearchModal] = useState(false);

   
    const handleShow = () =>{

      setLoading(true)

      setShow(true);
    
      setTimeout(() => {

      setLoading(false)
      setShow(false)

     
      
  }, 5000);


    }




   // console.log("THE AUTHENTICATION STATUS",isAuthenticated)


   const handleClose = () =>{
    setLoading(false)
 // e.preventDefault();
  //handleClose();
  
  

 

   setShow(false);

   setExitCode('stop')

   clearTimeout(searchItem)

   

  
   
     };


     const [contacts, setContacts] = useState([]);

     //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await API.get("servicetype/bestRated");
    return response.data;
  };




     




    useEffect(()=>{


        console.log('YOUR INILIALIZING POSITION DATA IS ',userPos)


        console.log('YOUR  POSITION DATA FROM THE WATCH CONTEXT IS ',position)

        //console.log("Lat Value is "+latitude)



        console.log('YOUR CONTEXT POSITION FROM THE INITALIZING CONTEXT IS',userPos)

         let lat_val=parseFloat(userPos.lat);
  
         let lng_val=parseFloat(userPos.long);
  
           setLat(truncate(lat_val, 2))
  
           setLng(truncate(lng_val, 2))

        
        // let lat_val=parseFloat(latitude);
  
        // let lng_val=parseFloat(longitude);
  
        //   setLat(truncate(lat_val, 2))
  
        //   setLng(truncate(lng_val, 2))



        //   console.log("Lat value is"+lat)

        //   console.log("Long value is"+lng)
  


  
          
  
          setIsDivLoading(true);
  
       
  
  
  
  
  
          if(bussinessList!=null){
  
  
              setTimeout(() => {
  
               setBestList(bussinessList)
              setIsDivLoading(false)  
                  
               
              }, 3000);
  
             
  
  
          }
          else{
  
              setErrorMessage("Unable to fetch your vendors list");
              setIsDivLoading(false);
          }
  
  
      {/** // axios.get('https://yoteorder-server.herokuapp.com/business/bestRated').then((response) => {
             axios.get('https://yoteorder-server.herokuapp.com/business/bestRated').then((response) => {
  
           
  
              console.log("BUSSINESS LIST IS"+response.data)
  
             
  
           
              setTimeout(() => {
  
                  setBestList(response.data)
  
                  setIsDivLoading(false)  
                  
  
               
              }, 3000);
  
              //setSeller_name(response.data.Users.first_name)
              
          }).catch(() => {
              setErrorMessage("Unable to fetch your vendors list");
              setIsDivLoading(false);
           }); */}
  
  
  
          // console.log("BUSSINESS LIST IS"+response.data)
  
         
  
  
  
  


        

       // setIsDivLoading(true);


        {/** if(bussinessList!=null){


            setTimeout(() => {

                setBestList(bussinessList)
            setIsDivLoading(false)  
                
             
            }, 3000);

           


        }
        else{

            setErrorMessage("Unable to fetch your vendors list");
            setIsDivLoading(false);
        } */}

     





       


    {/** // axios.get('https://yoteorder-server.herokuapp.com/business/bestRated').then((response) => {
           axios.get('https://yoteorder-server.herokuapp.com/business/bestRated').then((response) => {

         

            console.log("BUSSINESS LIST IS"+response.data)

           

         
            setTimeout(() => {

                setBestList(response.data)

                setIsDivLoading(false)  
                

             
            }, 3000);

            //setSeller_name(response.data.Users.first_name)
            
        }).catch(() => {
            setErrorMessage("Unable to fetch your vendors list");
            setIsDivLoading(false);
         }); */}



        // console.log("BUSSINESS LIST IS"+response.data)



        API.get('servicetype/bestRated').then((response) => {

            // setShowP(true);
      
      
         
               
                  setTimeout(() => {
                    
                      setContacts(response.data);
      
                    
                      setIsDivLoading(false)  
                  
                   
                  }, 1000);
      
                  //setSeller_name(response.data.Users.first_name)
                  
              }).catch(() => {
                  setErrorMessage("Unable to fetch your search.Make sure you have internet connection.");
                  setIsDivLoading(false);
               });


        

       


        console.log('ON PAGE LOAD EFFECT YOUR LOCATION DATA IS: Lat: ',lat,' :Lng:',lng)


        const interval = setInterval(() => {
            fetch('https://www.google.com/', {
              mode: 'no-cors',
            })
              .then(() => !isOnline && setIsOnline(true))
              .catch(() => isOnline && setIsOnline(false));
          }, 500);
      
          return () => clearInterval(interval);



  },[userPos,position,latitude,longitude,isOnline]);




 



  
 





  const handleSearchOption= async (event) => {

    const selectedOption=event.target.value

    if(selectedOption=='Product'){

        setShowServicesSearch(false)

    }
    else{
        setShowServicesSearch(true)
    }
    

    console.log("THE SELECT OPTION IS "+selectedOption)


   }



    
   const handleCloseError = () =>{
    // setLoading(false)
   // e.preventDefault();
    //handleClose();
     setShowErrorModal(false);
     
    
     
       };


       const searchManually = () =>{

       

        if(isOnline==true){

            setShowErrorModal(false)

            // setShowManualSearchModal(true)
            history('/manual-search')

        }

        else{

          toast.warn('You are offline!! Please connect to the internet')

            return

        }
       
      
        
         
        
         
           };




       

   


  const searchItem = () => {

    console.log("MAP CENTRE VALUES IS"+lat)


    if(isOnline==false){
        setshowOfflineAlert(true)
        return
    }


   
   
    // if(!latitude  || !longitude){

    if(!lat  || !lng){

     

          setShowErrorModal(true)

        return  
    
      }


    //  let lat_val=parseFloat(latitude);

  
    //  let lng_val=parseFloat(longitude);

    //  let search_lat= truncate(lat_val, 2)

    //  let search_lng=  truncate(lng_val, 2)



      //console.log("Lat value is"+search_lat)

    // console.log("Long value is"+search_lng)

    


    if(pname==''){

      
    
    // alert("You must enter the item")

    toast.warn('You must enter the search item');

    
         return
    
      }

    // setLoading(true);


    setLoading(true)

    setShow(true);

    if(exitCode){
        console.log('Exit code is'+exitCode)
        setExitCode(null)
        return
    }

  

  
    setTimeout(() => {

      

      

    setLoading(false)
    //history('/ordered-product/'+pname+'/'+search_lat+'/'+search_lng);

    history('/ordered-product/'+pname+'/'+lat+'/'+lng);

    setShow(false)

   
    
}, 4000);




} 



const searchItem1 = () => {

   
    // if(!latitude  || !longitude){

    if(!lat1  || !lng1){

     

          setShowErrorModal(true)

        return  
    
      }


    //  let lat_val=parseFloat(latitude);

  
    //  let lng_val=parseFloat(longitude);

    //  let search_lat= truncate(lat_val, 2)

    //  let search_lng=  truncate(lng_val, 2)



      //console.log("Lat value is"+search_lat)

    // console.log("Long value is"+search_lng)

    


    if(pname==''){

      
    
    // alert("You must enter the item")

    toast.warn('You must enter the search item');

    
         return
    
      }

    // setLoading(true);

    setShowManualSearchModal(false)
    setLoading(true)


    setShow(true);

    if(exitCode){
        console.log('Exit code is'+exitCode)
        setExitCode(null)
        return
    }

  

  
    setTimeout(() => {

      
      //  localStorage.setItem('pname', JSON.stringify(pname));
       
    setLoading(false)
    //history('/ordered-product/'+pname+'/'+search_lat+'/'+search_lng);
    localStorage.setItem('ordered_item', JSON.stringify(pname));
    history('/ordered-product/'+pname+'/'+lat1+'/'+lng1);

    setShow(false)

   
    
}, 4000);




} 







    
         const closeModal=()=>{
            setShowManualSearchModal(false)
         }


         const getStarted=()=>{
            history('/get-started')
         }

         const signIn=()=>{
            history('/signin')
         }

  return (
    <div>

    <div class="hor-header header">
<div class="container main-container">
    <div class="d-flex">
        <a aria-label="Hide Sidebar" class="app-sidebar__toggle" data-bs-toggle="sidebar"
            href="javascript:void(0)"></a>
       
        <a class="logo-horizontal " href="/">
            <img src="/assets/images/brand/logo_pink.png" class="header-brand-img desktop-logo" alt="logo"/>
            <img src="/assets/images/brand/logo_pink.png" class="header-brand-img light-logo1"
                alt="logo"/>
        </a>
        
        <div class="d-flex order-lg-2 ms-auto header-right-icons">
            <button class="navbar-toggler navresponsive-toggler d-lg-none ms-auto" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon fe fe-more-vertical"></span>
            </button>
            <div class="navbar navbar-collapse responsive-navbar p-0">
                <div class="collapse navbar-collapse bg-white px-0" id="navbarSupportedContent-4">
                    
                    <div class="header-nav-right p-5">
                        <Link to='/get-started' class="btn ripple btn-min w-sm btn-outline-primary me-2 my-auto"
                            >Get Started
                        </Link>
                        {/*   <a href="/signin" class="btn ripple btn-min w-sm btn-primary me-2 my-auto"> */}
                        <a href="/signin" class="btn ripple btn-min w-sm btn-primary me-2 my-auto">
                        Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>





<div class="landing-top-header overflow-hidden">
<div class="top sticky overflow-hidden">
  
    <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
    <div class="app-sidebar bg-transparent horizontal-main">
        <div class="container">
            <div class="row">
                <div class="main-sidemenu navbar px-0">
                    <a class="navbar-brand ps-0 d-none d-lg-block" href="/">
                    <img alt="" class="logo-2" src="/assets/images/brand/logo_pink.png"/>
                    <img src="/assets/images/brand/logo_pink.png" class="logo-3" alt="logo"/>
                    </a>
                    <ul class="side-menu">
                        <li class="slide">
                            <a class="side-menu__item active" data-bs-toggle="slide" href="/"><span
                                    class="side-menu__label">Home</span></a>
                        </li>
                        <li class="slide">
                            <Link class="side-menu__item" data-bs-toggle="slide" to="/features"><span
                                    class="side-menu__label">Features</span></Link>
                        </li>

                        <li class="slide">
                        <Link class="side-menu__item" data-bs-toggle="slide" to="/services"><span
                                class="side-menu__label">Services</span></Link>
                    </li>
                       
                       
                       
                        <li class="slide">
                            <Link class="side-menu__item" data-bs-toggle="slide" to="/helpcentre"><span
                                    class="side-menu__label">Help Centre</span></Link>
                        </li>
                       

                        <li class="slide onmobile">

                        
                        <div class=" btn-list side-menu__item" data-bs-toggle="slide">
                                                                <button type="button" onClick={getStarted} class="btn btn-success btn-sm mb-1"><i class="fa fa-registered" data-bs-toggle="tooltip" title="fa fa-registered"></i>Get Started</button>
                                                                <button type="button"  onClick={signIn} class="btn btn-primary btn-sm mb-1"><i class="icon icon-login"></i>Login</button>
                                                            </div>
                        
                    </li>





                        <li class="slide onmobile">
                            <Link class="side-menu__item" data-bs-toggle="slide" to="/get-started"><span
                                    class="side-menu__label"><i class="icon icon-login" data-bs-toggle="tooltip" title="" data-bs-original-title="icon-login" aria-label="icon-login" aria-describedby="tooltip377007"></i>Sign up</span></Link>
                        </li>

                        
                    </ul>

                   
                    <div class="header-nav-right d-none d-lg-flex">
                        <Link to='/get-started'
                            class="btn ripple btn-min w-sm btn-outline-primary me-2 my-auto d-lg-none d-xl-block d-block"
                           >Get Started
                        </Link>
                        <a href="/signin" class="btn ripple btn-min w-sm btn-primary me-2 my-auto d-lg-none d-xl-block d-block"
                           >Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
{/* <div class="demo-screen-headline main-demo main-demo-1 spacing-top overflow-hidden reveal" id="home">*/}
<div class="demo-screen-headline main-demo main-demo-1 spacing-top overflow-hidden" id="home" style={{ width: '100%',
    height: 'auto',
   
    background: 'url("assets/images/brand/bg_img.jpg") top center',
    backgroundSize: 'cover'
   }}>
    <div class="container px-sm-0">
        <div class="row">


        <div class="container" style={{ 
        height: 'auto',
        paddingTop:'30px',
        minHeight:'400px'
      
       }}>
        <div class="row mb-5 justify-content-center text-center">
            <div class="col">
                <h1 class="fw-semibold text-black mb-0">Sell, Buy,Order and do bizz  mtaani!</h1>
               
                <p style={{color:'grey'}}>All your needs are catered by PataMtaani</p>

                
    {showOfflineAlert && <div class="card-body text-center">

    
    <span class=""><svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 24 24">
    <path fill="#f07f8f" d="M20.05713,22H3.94287A3.02288,3.02288,0,0,1,1.3252,17.46631L9.38232,3.51123a3.02272,3.02272,0,0,1,5.23536,0L22.6748,17.46631A3.02288,3.02288,0,0,1,20.05713,22Z"></path><circle cx="12" cy="17" r="1" fill="#e62a45"></circle><path fill="#e62a45" d="M12,14a1,1,0,0,1-1-1V9a1,1,0,0,1,2,0v4A1,1,0,0,1,12,14Z"></path></svg></span>

  <div class="alert alert-danger" role="alert">
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-hidden="true">×</button>
  <i class="fa fa-frown-o me-2" aria-hidden="true"></i>Oh!You are offline.You need internet connection.
</div>
   
  </div>}

            </div>
        </div>


        <div class="row mb-5 text-black justify-content-center">


        <div class="row p-0 m-0">
        <div class="form-label mt-4 p-xl-0 mb-0 fw-semibold fs-16">What do you need?</div>


        

        <div class="col-xl-6">
            <div class="form-group">
                <select class="form-select form-select select2"
               
                                
                onChange={handleSearchOption}
                
                id="inputGroupSelect01">
                        <option value="Product">Product</option>
                        <option value="Service">Service</option>
                       
                    </select>
            </div>
        </div>

        {!showServicesSearch && 
       
        <div class="col-xl-6">
       
        <div class="input-group">
                                                    <input type="text" class="form-control" onChange={(event) => {
                                                        setpname(event.target.value);
                                                      }} placeholder="Search Eg.Watermelon..."/>
                                                      {!isLoading && <span class="input-group-text btn btn-primary" onClick={searchItem}><i class="fe fe-search"></i>Search</span>}

                                                      {isLoading &&
                                                        <span class="btn btn-primary my-1" type="button" disabled="">
                                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                      
                                                    </span>}

                                                </div>

                                                {/** <div class="form-group">
                <input class="form-control" onChange={(event) => {
                    setpname(event.target.value);
                  }} placeholder="Search eg.Pro Gas" type="text"/>
            </div> */}
           
        </div>

    }


        {showServicesSearch && 
            
             <div class="col-xl-6">

           



    <SearchBar placeholder="Enter a Service Name..." lat={lat} lng={lng} data={contacts} />
          


        


           

     
    

      
       
      </div>
    
    }

       
        
       
        
        

    <Modal class="modal fade" id="modaldemo8" show={showErrorModal}>

    <Modal.Header>
        <Modal.Title>Location Details Error</Modal.Title>
    </Modal.Header>
    <Modal.Body class="modal-body text-center p-4 pb-5">


    



    <div class="card-body text-center">
    <span class=""><svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 24 24"><path fill="#fad383" d="M15.728,22H8.272a1.00014,1.00014,0,0,1-.707-.293l-5.272-5.272A1.00014,1.00014,0,0,1,2,15.728V8.272a1.00014,1.00014,0,0,1,.293-.707l5.272-5.272A1.00014,1.00014,0,0,1,8.272,2H15.728a1.00014,1.00014,0,0,1,.707.293l5.272,5.272A1.00014,1.00014,0,0,1,22,8.272V15.728a1.00014,1.00014,0,0,1-.293.707l-5.272,5.272A1.00014,1.00014,0,0,1,15.728,22Z"></path><circle cx="12" cy="16" r="1" fill="#f7b731"></circle><path fill="#f7b731" d="M12,13a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v4A1,1,0,0,1,12,13Z"></path></svg></span>
    <h4 class="h4 mb-0 mt-3">Can't access your location! Allow location access please</h4>
   
  </div>



    <h4 class="text-center">OR</h4>

 

    <Button variant="btn btn-secondary" onClick={searchManually}><i class="fa fa-pinterest"></i>
     Activate search map
   </Button>



    </Modal.Body>
    <Modal.Footer>

    <Button class="btn btn-light"  variant="secondary"  onClick={() => {
        handleCloseError();
    }}>Cancel</Button>

        {/* <Button variant="secondary" onClick={handleClose}>
Close
</Button>
<Button variant="primary" onClick={handleClose}>
Save Changes
</Button> */}

    </Modal.Footer>
</Modal>


{/**<SearchModal setLat1={setLat1} setLng1={setLng1} userPos={userPos} show={showManualSearchModal} closeModal={closeModal} searchItem1={searchItem1}/> */}

 
{/**<p class="mb-4 mx-4">{lat1} : {lng1}</p> */}

{/**<SearchModal latitude={latitude} longitude={longitude} show={show} searchItem={searchItem}/> */}

                                              <Modal class="modal fade" id="modaldemo8" show={show}>

                                                  <Modal.Header>
                                                      <Modal.Title>Initiating your Search</Modal.Title>
                                                  </Modal.Header>
                                                  <Modal.Body class="modal-body text-center p-4 pb-5">




                                                      <div class="spinner-border text-primary me-2" style={{ width: '3rem', height: '3rem' }} role="status">
                                                          <span class="visually-hidden">Loading...</span>
                                                      </div>


                                                      
                                                      <h4 class="h4 mb-0 mt-3"></h4>

                                                     

                                                      <div class="card text-info bg-info-transparent card-transparent">
                                                      <div class="card-body border border-secondary">
                                                          <h4 class="card-title">Processing..</h4>

                                                          <p class="card-text">Please wait..we are making a search for you....</p>

                                                          <span class="badge bg-secondary fs-14 me-2">{pname}</span>
                                                          <p class="text-center"> <div class="me-4 text-center text-primary">
                                                          <span><i class="fe fe-map-pin fs-20"></i></span>
                                                      </div>{latitude?latitude:lat1} ::{longitude?longitude:lng1}</p>
                                                          
                                                      
                                                         
                                                          </div>
                                                  </div>




                                                  </Modal.Body>
                                                  <Modal.Footer>

                                                  {/**  <button class="btn btn-light" type="reset" onClick={() => {
                                                    handleClose();
                                                  }}>Cancel</button>
                                                */}

                                                      <Button variant="secondary" onClick={handleClose}>
                                                          Close
                                                      </Button>

                                                 
                                                      {/* 
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button> */}

                                                  </Modal.Footer>
                                              </Modal>






    </div>

       
        
        </div>


        
  <ToastContainer></ToastContainer>
   


                                      


       
    </div>


        
           
        </div>
    </div>
</div>
</div>


    
    
    
    </div>
  )
   
}

export default HeaderPtaMtaani