import React from 'react'
import { useEffect,useState,useContext} from 'react';



import axios from 'axios';

import { Helmet } from "react-helmet";

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import SideBar from './SideBar';
import Topbar from './Topbar';
import DataContext from '../../../helpers/DataContext';



function EmailCompose() {

    const [displayCompose,setDisplayCompose]=useState(false);

    const [showInbox,setShowInbox]=useState(true);


    const {bussinessList, setBussinessList} = useContext(DataContext);


    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [receiver_email, setreceiver_email] = useState("");
    const [phone_no, setPhone_no] = useState("");

    const [business_name, setbusiness_name] = useState("");

    const [errorMessage, setErrorMessage] = useState("");
    const [vendorsList, setVendorsList] = useState([]);

    const [notifications, setNotifications] = useState([]);

    const [userId, setUserId] = useState('');

    const [businessId, setBusinessId] = useState('');
    
const [isDivLoading, setIsDivLoading] = useState(false);
const [isLoading,setLoading]=useState(false);



    useEffect(()=>{

   
       
    
    
     
    
           setIsDivLoading(true);
    
    
           
    
    
       console.log("HI ADMIN ALL BUSINESS DETAILS FROM CONTREXT:",bussinessList);
    
    
       if(bussinessList!=null){
    
    
        setTimeout(() => {
    
        setVendorsList(bussinessList)

        setIsDivLoading(false)  
            
         
        }, 3000);
    
       
    
    
    }
    else{
    
        setErrorMessage("Unable to fetch your vendors list");
        setIsDivLoading(false);
    }



    axios.get('https://yoteorder-server.herokuapp.com/notification/allnotifications').then((response) => {
        // axios.get('https://yoteorder-server.herokuapp.com/business/bestRated').then((response) => {

       

       

         
          setTimeout(() => {

            setNotifications(response.data)

           
          }, 1000);

          //setSeller_name(response.data.Users.first_name)
          
      }).catch((error) => {
          

          console.log("Error occured while fetching notifications "+error)
        
       });
    
    
       
    
    
    },[bussinessList])





    const activateInbox=()=>{

      
        setDisplayCompose(false)
        setShowInbox(true)
      }
      
      
      
      const activateEmailCompose=()=>{
        
        setShowInbox(false)
        setDisplayCompose(true)
       
      }


      const handleUserSelect= async (event) => {

        const selectedOption=event.target.value


        const vendor = vendorsList.find(post => (post.id).toString() === selectedOption);

       // setUserId(JSON.stringify(customer))

        setUserId(vendor.User.id)
        setreceiver_email(vendor.User.email)

        setBusinessId(vendor.id)


        
    
        console.log("THE SELECT OPTION IS "+JSON.stringify(vendor))
    
    
       }



      
const payload={

        subject:subject,
        message:message,
        receiver_email:receiver_email,
        from_:'patamtaani',
       
        UserId:userId,
        BusinessId:businessId,
  }


      const sendMail = ()  => {
        setLoading(true);
    
         //axios.post("https://yoteorder-server.herokuapp.com/business",buss_data).then((response)=>{
        
        axios.post('https://yoteorder-server.herokuapp.com/notification',payload).then((response)=>{
    
        
  
    
           
            setTimeout(() => {
                setLoading(false);
                toast.success('Saved');
           
            }, 1500);
         
           //  history("/dashboard");
          
           
        })
    
    }
      

     
  return (
    <div class="app sidebar-mini ltr">


    {/*  <div id="global-loader">
    <img src="assets/images/loader.svg" class="loader-img" alt="Loader"/>
    </div> */}


  

    
    <div class="page">
<div class="page-main">






<Topbar></Topbar>






<SideBar></SideBar>




<div class="main-content app-content mt-0">
<div class="side-app">







<div class="main-container container-fluid">


                        <div class="page-header">
                            <h1 class="page-title">Shop</h1>
                            <div>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="javascript:void(0)">E-Commerce</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Shop</li>
                                </ol>
                            </div>
                        </div>
                     
                        <div class="row">
                        <div class="col-xl-3">
                        <div id="scroll-stickybar" class="position-lg-relative w-100">
                            <div class="card">
                                <div class="list-group list-group-transparent mb-0 mail-inbox pb-3">
                                    <div class="mt-4 mx-4 mb-4 text-center">
                                        <a onClick={activateEmailCompose} class="btn btn-primary btn-lg d-grid">Compose</a>
                                    </div>
                                    <a href="javascript:void(0)" onClick={activateInbox} class="list-group-item d-flex align-items-center active mx-4">
                                        <span class="icons"><i class="ri-mail-line"></i></span> Inbox <span class="ms-auto badge bg-secondary bradius">14</span>
                                    </a>
                                    <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                                        <span class="icons"><i class="ri-mail-open-line"></i></span> Drafts
                                    </a>
                                    <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                                        <span class="icons"><i class="ri-star-line"></i></span> Starred <span class="ms-auto badge bg-success bradius">03</span>
                                    </a>
                                    <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                                        <span class="icons"><i class="ri-price-tag-3-line"></i></span> Tags
                                    </a>
                                    <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                                        <span class="icons"><i class="ri-mail-send-line"></i></span> Sent Mail
                                    </a>
                                    <a href="javascript:void(0)" class="list-group-item d-flex align-items-center mx-4">
                                        <span class="icons"><i class="ri-delete-bin-line"></i></span> Trash
                                    </a>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                    {showInbox &&   <div class="col-xl-9">
                    <div class="card">
                        <div class="card-body p-6">
                            <div class="inbox-body">
                                <div class="mail-option">
                                    <div class="chk-all">
                                        <div class="btn-group">
                                            <a data-bs-toggle="dropdown" href="javascript:void(0)" class="btn mini all" aria-expanded="false">
                                                    All
                                                    <i class="fa fa-angle-down "></i>
                                                </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="javascript:void(0)"> None</a></li>
                                                <li><a href="javascript:void(0)"> Read</a></li>
                                                <li><a href="javascript:void(0)"> Unread</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="btn-group">
                                        <a href="javascript:void(0)" class="btn mini tooltips">
                                            <i class=" fa fa-refresh"></i>
                                        </a>
                                    </div>
                                    <div class="btn-group hidden-phone">
                                        <a data-bs-toggle="dropdown" href="javascript:void(0)" class="btn mini blue" aria-expanded="false">
                                                More
                                                <i class="fa fa-angle-down "></i>
                                            </a>
                                        <ul class="dropdown-menu">
                                            <li><a href="javascript:void(0)"><i class="fa fa-pencil me-2"></i> Mark as Read</a></li>
                                            <li><a href="javascript:void(0)"><i class="fa fa-ban me-2"></i> Spam</a></li>
                                            <li class="divider"></li>
                                            <li><a href="javascript:void(0)"><i class="fa fa-trash-o me-2"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                    <ul class="unstyled inbox-pagination">
                                        <li><span class="fs-13">1-50 of 234</span></li>

                                        <li>
                                            <a class="np-btn" href="javascript:void(0)"><i class="fa fa-angle-right pagination-right"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-inbox table-hover text-nowrap mb-0">
                                        <tbody>
                                        {notifications.map((value, key) => {
                                            return (
            
                                                <tr class="">
                                                <td class="inbox-small-cells">
                                                    <label class="custom-control custom-checkbox mb-0 ms-3">
                                                            <input type="checkbox" class="custom-control-input" name="example-checkbox2" value="option2"/>
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                </td>
                                                <td class="inbox-small-cells"><i class="fa fa-star inbox-started"></i></td>
                                                <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                                                <td class="view-message dont-show fw-semibold clickable-row" data-href='#'>{value.subject}</td>
                                                <td class="view-message view-message clickable-row" data-href='email-read.html'>{value.message}</td>
                                                <td class="view-message text-end fw-semibold clickable-row" data-href='email-read.html'>{value.createdAt}</td>
                                            </tr>
            
                                           )})}
                                           
                                           
                                           
                                            
                                         

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="pagination mb-4">
                        <li class="page-item page-prev disabled">
                            <a class="page-link" href="javascript:void(0)" tabindex="-1">Prev</a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">5</a></li>
                        <li class="page-item page-next">
                            <a class="page-link" href="javascript:void(0)">Next</a>
                        </li>
                    </ul>
                </div> }
                            
                  


         {displayCompose &&   <div class="col-xl-9">
         <div class="card">
             <div class="card-header">
                 <h3 class="card-title">Compose new message</h3>
             </div>
             <div class="card-body">
                 <form>
                     <div class="form-group">
                         <div class="row align-items-center">
                             <label class="col-xl-2 form-label">To</label>
                             <div class="col-xl-10">
                               

                                 <select id="buss_email" class="form-control form-select"
                             
                             
                                 onChange={handleUserSelect}
                 
                                 
                                 data-allow-clear="true">
                                   <option value="">Select</option>
    
                                   {vendorsList.map((value, key) => {
                                    return (

                                      
    
                                   <option value={value.id}>{value.business_name}</option>
    
                                   )})}
                                   
                                   
                                 </select>
                             </div>

                           
                         </div>
                     </div>
                    
                     <div class="form-group">
                         <div class="row align-items-center">
                             <label class="col-xl-2 form-label">CC</label>
                             <div class="col-xl-10">
                                 <input type="text" class="form-control"/>
                             </div>
                         </div>
                     </div>
                     
                     <div class="form-group">
                         <div class="row align-items-center">
                             <label class="col-xl-2 form-label">Subject</label>
                             <div class="col-xl-10">
                                 <input type="text"      onChange={(event) => {
                                    setSubject(event.target.value);
                                  }} class="form-control"/>
                             </div>
                         </div>
                     </div>
                     <div class="form-group">
                         <div class="row ">
                             <label class="col-xl-2 form-label">Message</label>
                             <div class="col-xl-10">
                                 <textarea rows="10"    
                                   onChange={(event) => {
                                    setMessage(event.target.value);
                                  }} class="form-control"> </textarea>
                             </div>
                         </div>
                     </div>
                 </form>
             </div>
             <div class="card-footer d-sm-flex">
                 <div class="mt-2 mb-2">
                     <a href="javascript:void(0)" class="btn btn-icon btn-white btn-svg" data-bs-toggle="tooltip" title="" data-bs-original-title="Attach"><span class="ri-attachment-2"></span></a>
                     <a href="javascript:void(0)" class="btn btn-icon btn-white btn-svg" data-bs-toggle="tooltip" title="" data-bs-original-title="Link"><span class="ri-link"></span></a>
                     <a href="javascript:void(0)" class="btn btn-icon btn-white btn-svg" data-bs-toggle="tooltip" title="" data-bs-original-title="Photos"><span class="ri-image-line"></span></a>
                     <a href="javascript:void(0)" class="btn btn-icon btn-white btn-svg" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete"><span class="ri-delete-bin-line"></span></a>
                 </div>
                 <div class="btn-list ms-auto my-auto">
                     <button class="btn btn-danger btn-space mb-0">Cancel</button>

                      
                  {!isLoading && <button type="submit" onClick={sendMail} class="btn btn-primary btn-space mb-0">Send message</button>
        
                } 
                {isLoading &&
                    <button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled><div class="spinner-grow text-success me-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>Saving Infor</button>
                }
                   
                 </div>
             </div>
         </div>
     </div>}
              




                        
                        <ToastContainer />



                        
                       
                  





       
                







                          
                        </div>
                       
                    </div>








   

</div>
</div>

















</div>

</div>

    
    
    
    
    
      
    
    
    </div>
  )
}

export default EmailCompose