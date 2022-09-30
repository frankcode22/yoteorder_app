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
import BookData from "../../../Data.json";
import SearchModal from './SearchModal';

import { ChildComponent } from './ChildComponent ';
import Player from './VideoPlayer';
import HeaderPtaMtaani from './HeaderPtaMtaani';

const CampaignBadge = lazy(() => import('./CampaignBadge'));

const HowToGetStarted = lazy(() => import('./HowToGetStarted'));

const BestRatedVendors = lazy(() => import('./BestRatedVendors'));






function truncate(number, index = 2) {
    // cutting the number
  return +number.toString().slice(0, (number.toString().indexOf(".")) + (index + 1));
}





function HelpCentre(props) {

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




    const [show, setShow] = useState(false);


    const [showVideoModal, setShowVideoModal] = useState(false);


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

       


        console.log('ON PAGE LOAD EFFECT YOUR LOCATION DATA IS: Lat: ',lat,' :Lng:',lng)


     

             
       
  
 
  },[bussinessList,userPos,position,latitude,longitude,setLoading,lat1,handleClose]);


  
 





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




       const closeDemoVideo = () =>{
        // setLoading(false)
       // e.preventDefault();
        //handleClose();
         setShowVideoModal(false);
         
        
         
           };


       const searchManually = () =>{
      
         setShowErrorModal(false)

         setShowManualSearchModal(true)
         
        
         
           };



           const viewVideo = () =>{
      
          
   
            setShowVideoModal(true)
            
           
            
              };



       

   


  const searchItem = () => {

    console.log("MAP CENTRE VALUES IS"+lat)

   
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

      

    setLoading(false)
    //history('/ordered-product/'+pname+'/'+search_lat+'/'+search_lng);

    history('/ordered-product/'+pname+'/'+lat1+'/'+lng1);

    setShow(false)

   
    
}, 4000);




} 














          localStorage.setItem('ordered_item', JSON.stringify(pname));


    
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
    <div className='app ltr landing-page horizontal'>
   

    
    


{/* <div id="global-loader">
<img src="assets/images/loader.svg" class="loader-img" alt="Loader"/>
</div>*/}






<div class="page">
<div class="page-main">


<HeaderPtaMtaani></HeaderPtaMtaani>




<div class="main-content mt-0">
<div class="side-app">


    <div class="main-container">
        <div class="">








    <div class="sptb section bg-white" id="Features">
    <div class="container">
        
    <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
    <div class="card service border">
        <div class="card-body">
            <div class="item-box text-center">
                <div class=" text-center text-success mb-4"><i class="fa fa-email"></i></div>
                <div class="item-box-wrap">
                    <h5 class="mb-2">Setting up vendor/business account</h5>
                    <a class="btn btn-primary" onClick={() => {
                        viewVideo();
                          }}>
                                <i class="side-menu__icon fe fe-cpu"></i>
                                <span>View Demo</span><i
                                    class="angle fe fe-chevron-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div class="card service border">
            <div class="card-body">
                <div class="item-box text-center">
                    <div class=" text-center  mb-4 text-primary"><i class="icon icon-phone"></i></div>
                    <div class="item-box-wrap">
                        <h5 class="mb-2">Our Contacts</h5>
                        <p class="text-muted mb-0">0714639773 or 0780077090 </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 ">
        <div class="card service border">
            <div class="card-body">
                <div class="item-box text-center">
                    <div class=" text-center text-danger-gradient mb-4"><i class="icon icon-email"></i></div>
                    <div class="item-box-wrap">
                    <span class="icons"><i class="ri-mail-send-line"></i></span>
                        <h5 class="mb-2">Send us a mail on</h5>
                        <p class="text-muted mb-0"><a href='#'>infor@patamtaani.com or frankcode20@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div class="card service border">
            <div class="card-body">
                <div class="item-box text-center">
                    <div class="text-center text-warning-gradient mb-4"><i class="icon icon-action-redo"></i></div>
                    <div class="item-box-wrap">
                        <h5 class="mb-2">Social medial handles</h5>
                        <div class="d-flex justify-content-center">
                        <a href="javascript:void(0)">
                            <div class="social-login me-4 text-center">
                                <i class="fa fa-google"></i>
                            </div>
                        </a>
                        <a href="javascript:void(0)">
                            <div class="social-login me-4 text-center">
                                <i class="fa fa-facebook"></i>
                            </div>
                        </a>
                        <a href="javascript:void(0)">
                            <div class="social-login text-center">
                                <i class="fa fa-twitter"></i>
                            </div>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>


    <div class="container">
        
    <div class="row">


   
    
  
</div>
    </div>
</div>







                              


                                  <Suspense fallback={<div>Loading...</div>}>

          
                                  <HowToGetStarted/>
                          
                          
                          
                                  </Suspense>
                          






                                  <div class="">
                                  <div class="container">
                                      <div class="testimonial-owl-landing buynow-landing revealrotate">
                                          <div class="row pt-6">
                                              <div class="col-md-12">
                                                  <div class="card bg-transparent">
                                                      <div class="card-body pt-5 px-7">
                                                          <div class="row">
                                                              <div class="col-lg-9">
                                                                  <h1 class="fw-semibold text-white">Get Started With PataMtaani.
                                                                    </h1>
                                                                  <p class="text-white">Buy and sell within your residence.
                                                                  </p>
                                                              </div>
                                                              <div class="col-lg-3 text-end my-auto">
                                                                  <a href="#"
                                                                      target="_blank"
                                                                      class="btn btn-pink w-lg pt-2 pb-2"><i
                                                                          class="fe fe-shopping-cart me-2"></i>Start Now
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>      





        </div>

        </div>

        </div>
        </div>



</div>

<div class="demo-footer">
<div class="container">
    <div class="row">
        <div class="card">
            <div class="card-body">
                <div class="top-footer">
                    <div class="row">

                    {/* <div class="col-lg-4 col-sm-12 col-md-12 reveal revealleft"> */}
                        <div class="col-lg-4 col-sm-12 col-md-12 revealleft">
                            <h6>About</h6>
                            <p>
                            Pata Mtaani is a platfom developed to make it easy for residents to buy and sell any products within their area of residents.
                            </p>
                            <p class="mb-5 mb-lg-2">Pata Mtaani enables services prividers such as cleaners,Beauty therapists,Kinyozi,Automotive etc..sell their services
                            to the local population.
                            </p>
                        </div>
                        <div class="col-lg-2 col-sm-6 col-md-4 revealleft">
                            <h6>Pages</h6>
                            <ul class="list-unstyled mb-5 mb-lg-0">
                                <li><a href="#">Dashboard</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Customer Care</a></li>
                               
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-sm-6 col-md-4 revealleft">
                            <h6>Information</h6>
                            <ul class="list-unstyled mb-5 mb-lg-0">
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Contact US</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Services</a></li>
                              
                                <li><a href="#">Terms and Services</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-sm-12 col-md-4 revealleft">
                            <div class="">
                                <a href="#"><img loading="lazy" alt="" class="logo-2 mb-3"
                                        src="assets/images/brand/logo_new.png"/></a>
                               
                                <p>Pata Mtaani empowers all small-scale services providers such as cleaners,Beauty therapists,Kinyozi,Automotive etc..sell their services
                                to the local population.</p>
                                <div class="form-group">
                                    
                                </div>
                            </div>
                            <div class="btn-list mt-6">
                                <button type="button" class="btn btn-icon rounded-pill"><i
                                        class="fa fa-facebook"></i></button>
                                <button type="button" class="btn btn-icon rounded-pill"><i
                                        class="fa fa-youtube"></i></button>
                                <button type="button" class="btn btn-icon rounded-pill"><i
                                        class="fa fa-twitter"></i></button>
                                <button type="button" class="btn btn-icon rounded-pill"><i
                                        class="fa fa-instagram"></i></button>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
                <footer class="main-footer px-0 pb-0 text-center">
                    <div class="row ">
                        <div class="col-md-12 col-sm-12">
                            Copyright © <span id="year"></span> <a href="javascript:void(0)">PataMtaani</a>.
                            Developed By<a
                                href="javascript:void(0)"> FrankCode Ent </a> All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</div>
</div>
</div>
<a href="#top" id="back-to-top"><i class="fa fa-angle-up"></i></a>



    </div>
  )
}

export default HelpCentre