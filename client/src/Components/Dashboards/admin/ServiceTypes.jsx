import React from 'react'

import {useEffect,useState,useContext} from 'react';

import {useParams} from "react-router-dom"


//import axios from 'axios';

import API from '../../../services';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useNavigate,Link} from "react-router-dom";

import { AuthContext } from "../../../helpers/AuthContext";

import SideBar from './SideBar';
import Topbar from './Topbar';

function ServiceTypes() {
    const {authState} = useContext(AuthContext);
const [userId, setUserId] = useState('');

const [ordersList, setOrdersList] = useState([]);


const [productsList, setProductsList] = useState([]);

const [item_name, setitem_name] = useState('');

const [orderId, setorderId] = useState('');


const [quantity_ordered, setquantity_ordered] = useState('');
const [servicesList, setServicesList] = useState([]);

const [subcategoryList, setSubcategoryList] = useState([]);


const [order_description, setorder_description] = useState('');


const [name, setName] = useState("");
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [phone_no, setPhone_no] = useState("");



const [service_name, setservice_name] = useState("");

const [description, set_description] = useState("");


const [subcategory_name, setsubcategory_name] = useState("");

const [subcategory_des, setsubcategory_des] = useState("");

const [dateJoined, setdateJoined] = useState('');

const [showUpdateButton, setShowUpdateButton] = useState(false);


const[serviceId,setServiceId]=useState('')

const [isLoading,setLoading]=useState(false);

let history = useNavigate();



useEffect(()=>{

   
    //axios.get('https://yoteorder-server.herokuapp.com/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
        API.get('users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

       setUserId(response.data.id)

       setName(response.data.first_name)

       setEmail(response.data.email)

       setPhone_no(response.data.phone_no)

       setdateJoined(response.data.createdAt)
 
 
      })

   //    //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
   //   axios.get("https://yoteorder-server.herokuapp.com/order/getallorders").then((response) => {
   //   setOrdersList(response.data);
   //   })


//    API.get("product/allproducts",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
       

//      if(response.data){

//         setProductsList(response.data)

//      }
//      else{
//         setProductsList([])

//      }
      

//        console.log("THE Products LIST DATA "+response.data)
//        })





       API.get("servicetype/alltypes").then((response) => {
       

        if(response.data){
   
           setServicesList(response.data)
   
        }
        else{
           setServicesList([])
   
        }
         
   
         
          })



    



},[]);


const viewSelectedProduct=(id)=>{

    history('/products/'+id)

}


const viewSelectedItem=(sId)=>{

    //API.get("customer/mycustomers").then((response) => {
     API.get('servicetype/getbyId/'+sId).then((response) => {
  
        // console.log("THE SERVICE NAME IS "+response.data.service_name)
        setShowUpdateButton(true)
  
         setServiceId(sId)
         setservice_name(response.data.name)

         set_description(response.data.description)

         setSubcategoryList(response.data.ServiceTypeSubcategory)
  
         
  
             })
  
  
  
     }


const service_data={

    service_name:service_name,
 
    description:description,
   
    UserId:userId,
    added_by:userId,
    
    
      
  }




  const addService = ()  => {
    setLoading(true);

   

     
    
    API.post("servicetype",service_data).then((response)=>{

      console.log("The response is"+response.data)

      setServicesList([
        ...servicesList,
        {
    name:service_name,
   
    description:description,
    added_by:userId,
    
  
        },
      ]);

  

       
        setTimeout(() => {
            setLoading(false);
            toast.info('Service saved');
        }, 1000);
     
       //  history("/dashboard");
      
       
    })

  

}



const updateService=()=>{

    setLoading(true)


     
    API.put('servicetype/update_service/'+serviceId,service_data).then((res_b)=>{

       
        
        setServicesList([
            ...servicesList,
            {
        name:service_name,
       
        description:description,
        added_by:userId,
        
      
            },
          ]);


   
    
        setTimeout(() => {
            setLoading(false);
            toast.success("Service Updated")
        }, 3000);
        
        })

}



const data={

    name:subcategory_name,
 
    description:subcategory_des,
    ServiceTypeId:serviceId,
    UserId:userId,
    added_by:userId,
    
      
  }




  const addSubcategory = ()  => {
    setLoading(true);

   

     
    
    API.post("servicetype/subcategory",data).then((response)=>{

      console.log("The response is"+response.data)

      setServicesList([
        ...servicesList,
        {
    name:service_name,
   
    description:description,
    added_by:userId,
    
  
        },
      ]);

  

       
        setTimeout(() => {
            setLoading(false);
            toast.info('Saved');
        }, 1000);
     
       //  history("/dashboard");
      
       
    })

  

}






  return (
    <div>

    
    <div class="app sidebar-mini ltr light-mode">






<div class="page">
<div class="page-main">

<Topbar></Topbar>











<SideBar></SideBar>









        <div class="main-content app-content mt-0">
        <div class="side-app">

           
            <div class="main-container container-fluid">

              
                <div class="page-header">
                    <h1 class="page-title">ADMIN HOME</h1>
                    <div>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Welcome: {authState.first_name}</li>

                        </ol>
                    </div>
                </div>



                <div class="row row-cards">


                <div class="col-md-12 col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Floating Labels Inputs, textarea </h3>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="floatingInput"
                                            value={service_name}
                                            onChange={(event) => {
                                                setservice_name(event.target.value);
                                              }}
                                            
                                            placeholder="name"/>
                                            <label for="floatingInput">Type Name</label>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="form-floating floating-label">
                                            <textarea class="form-control" placeholder="review" value={description}  onChange={(event) => {
                                                set_description(event.target.value);
                                              }} id="floatingTextarea"></textarea>
                                            <label for="floatingTextarea">Desription</label>
                                        </div>
                                    </div>
                                   
                                </div>

                                <div class="col-md-6">
                                <div class="form-group">



                                {!isLoading && !showUpdateButton && <button type="submit" onClick={addService} class="btn btn-primary btn-space mb-0">Save</button>
          
                            } 
          
          
                       {!isLoading && showUpdateButton &&  <button type="button" onClick={updateService} class="btn btn-success"><i class="fe fe-check me-2"></i>Update</button> }    
          
                            {isLoading &&
                                <button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled><div class="spinner-grow text-success me-2" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>Saving...</button>
                            }


                                
                        
                    </div>
                                   
                                </div>

                            
                        </div></form>
                    </div>

                    <ToastContainer></ToastContainer>
                </div>
            </div>
           


                <div class="col-lg-12 col-xl-12">
                    <div class="input-group mb-5">
                        <input type="text" class="form-control" placeholder="Search"/>
                        <div class="input-group-text btn btn-primary">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header border-bottom-0">
                            <h2 class="card-title">1 - 30 of 546 users</h2>
                            <div class="page-options ms-auto">
                                <select class="form-control select2 w-100">
                                        <option value="asc">Latest</option>
                                        <option value="desc">Oldest</option>
                                    </select>
                            </div>
                        </div>
                        <div class="e-table px-5 pb-5">
                            <div class="table-responsive table-lg">
                                <table class="table border-top table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th class="text-center">

                                            </th>
                                            
                                            <th>Service Name</th>
                                            <th>Description</th>
                                            <th>Added By</th>
                                           
                                           
                                         
                                            <th class="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    {servicesList.map((value,key)=>{

                                        return (

                                            <tr>
                                            <td class="align-middle text-center">
                                                <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                                    <input class="custom-control-input" id="item-1" type="checkbox"/> <label class="custom-control-label" for="item-1"></label>
                                                </div>
                                            </td>
                                           
                                            <td class="text-nowrap align-middle">{value.name}</td>
                                            <td class="text-nowrap align-middle">{value.description}</td>
                                    
                                            <td class="text-nowrap align-middle">{value.User && value.User.first_name?value.User.first_name:'nobiz'}</td>

                                            
                                            {/** <td class="text-nowrap align-middle">{!value.Business.business_name && ''}</td> */}
                                           

                                           
                                             {/** <td class="text-nowrap align-middle">{value.Business.longitude?value.Business.longitude:'no bizz'}</td> */}
                                            

                                            

                                          

                                           

                                            <td class="text-center align-middle">
                                                <div class="btn-group align-top">


                                                <a onClick={() => {
                                                    viewSelectedItem(value.id);
                                                      }}
                                                
                                            
                                                      data-bs-effect="effect-slide-in-bottom" data-bs-toggle="modal" href="#modaldemo80" class="btn btn-primary btn-block"><i class="fa fa-plus-square mx-2"></i>Add Subcategory</a>


                                                <button class="btn btn-sm btn-primary badge" onClick={() => {
                                                    viewSelectedItem(value.id);
                                                      }} type="button">Edit</button>


                                                      <a onClick={() => {
                                                        viewSelectedItem(value.id);
                                                          }}
                                                    
                                                
                                                          data-bs-effect="effect-slide-in-bottom" data-bs-toggle="modal" href="#modaldemo801" class="btn btn-primary btn-block"><i class="fa fa-plus-square mx-2"></i>View Categories</a>
                                                
                                                    <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
                                                </div>
                                            </td>
                                        </tr>



                                        )




                                    })}
                                        
                                       
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <ul class="pagination float-end">
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
                    </div>
                </div>
                
            </div>




                
        <div class="modal fade" id="modaldemo80">
        <div class="modal-dialog modal-dialog-centered text-center" role="document">
            <div class="modal-content modal-content-demo">
                <div class="modal-header">
                    <h6 class="modal-title">Service Subcategory</h6><button aria-label="Close" class="btn-close" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                <div class="row">
                  <div class="col mb-3">
                    <label for="nameWithTitle" class="form-label">Service Name</label>
                    <input type="text" id="service_name" class="form-control" placeholder="Eg. Automotive"

                    value={service_name}
                    
                    onChange={(event) => {
                        setservice_name(event.target.value);
                      }}
                       
                    />
                  </div>
                </div>
        
                <div class="row">
                <div class="col mb-3">
                  <label for="nameWithTitle" class="form-label">Service Description</label>
        
        
                  <textarea id="basic-icon-default-message" class="form-control"   value={description} placeholder="Eg. For Best automotive services!" aria-label="Hi, My business deals with beauty services?" 
                                            
                  onChange={(event) => {
                    set_description(event.target.value);
                  }}
        
                  aria-describedby="basic-icon-default-message2"></textarea> 
                  
                </div>
              </div>


              <div class="row">
              <div class="col mb-3">
                <label for="nameWithTitle" class="form-label">Subcategory Name</label>
                <input type="text" id="service_name" class="form-control" placeholder="Eg. Automotive"

               
                
                onChange={(event) => {
                    setsubcategory_name(event.target.value);
                  }}
                   
                />
              </div>
            </div>
    
            <div class="row">
            <div class="col mb-3">
              <label for="nameWithTitle" class="form-label">Subcategory Description</label>
    
    
              <textarea id="basic-icon-default-message" class="form-control"  placeholder="Eg. For Best automotive services!" aria-label="Hi, My business deals with beauty services?" 
                                        
              onChange={(event) => {
                setsubcategory_des(event.target.value);
              }}
    
              aria-describedby="basic-icon-default-message2"></textarea> 
              
            </div>
          </div>
              
              </div>
                <div class="modal-footer">
                  


                    {!isLoading && <button type="submit" onClick={addSubcategory} class="btn btn-primary">Save</button>

                } 
                {isLoading &&
                    <button type="submit" class="btn btn-primary" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving...</button>
                }
            
                    
                    
                    <button class="btn btn-light" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
        <ToastContainer></ToastContainer>
    </div>


    <div class="modal fade" id="modaldemo801">
    <div class="modal-dialog modal-dialog-centered text-center" role="document">
        <div class="modal-content modal-content-demo">
            <div class="modal-header">
                <h6 class="modal-title">Edit Definition</h6><button aria-label="Close" class="btn-close" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
            <div class="row">
              <div class="col mb-3">
                <label for="nameWithTitle" class="form-label">Service Name</label>
                <input type="text" id="service_name" class="form-control" placeholder="Eg. Automotive"

                value={service_name}
                
                onChange={(event) => {
                    setservice_name(event.target.value);
                  }}
                   
                />
              </div>
            </div>
    
            <div class="row">
            <div class="col mb-3">
              <label for="nameWithTitle" class="form-label">Service Description</label>
    
    
              <textarea id="basic-icon-default-message" class="form-control"   value={description} placeholder="Eg. For Best automotive services!" aria-label="Hi, My business deals with beauty services?" 
                                        
              onChange={(event) => {
                set_description(event.target.value);
              }}
    
              aria-describedby="basic-icon-default-message2"></textarea> 
              
            </div>
          </div>


          <div class="row">

          <div class="col mb-3">

          <table class="table border-top table-bordered mb-0">
          <thead>
              <tr>
                  <th class="text-center">

                  </th>
                  
                  <th>Service Name</th>
                 
                  <th>Added By</th>
                 
                 
               
                  <th class="text-center">Actions</th>
              </tr>
          </thead>
          <tbody>

          {servicesList.map((value,key)=>{

              return (

                  <tr>
                  <td class="align-middle text-center">
                      <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                          <input class="custom-control-input" id="item-1" type="checkbox"/> <label class="custom-control-label" for="item-1"></label>
                      </div>
                  </td>
                 
                  <td class="text-nowrap align-middle">{value.name}</td>
                  
          
                  <td class="text-nowrap align-middle">{value.User && value.User.first_name?value.User.first_name:'nobiz'}</td>

                  
                  {/** <td class="text-nowrap align-middle">{!value.Business.business_name && ''}</td> */}
                 

                 
                   {/** <td class="text-nowrap align-middle">{value.Business.longitude?value.Business.longitude:'no bizz'}</td> */}
                  

                  

                

                 

                  <td class="text-center align-middle">
                      <div class="btn-group align-top">


                     


                      <button class="btn btn-sm btn-primary badge" onClick={() => {
                          viewSelectedItem(value.id);
                            }} type="button">Edit</button>


                          
                      
                          <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
                      </div>
                  </td>
              </tr>



              )




          })}
              
             
              
          </tbody>
      </table>
          </div>

          
         
        </div>

        <div class="row">
        <div class="col mb-3">
          <label for="nameWithTitle" class="form-label">Subcategory Description</label>


          <textarea id="basic-icon-default-message" class="form-control"  placeholder="Eg. For Best automotive services!" aria-label="Hi, My business deals with beauty services?" 
                                    
          onChange={(event) => {
            setsubcategory_des(event.target.value);
          }}

          aria-describedby="basic-icon-default-message2"></textarea> 
          
        </div>
      </div>
          
          </div>
            <div class="modal-footer">
              


                {!isLoading && <button type="submit" onClick={addSubcategory} class="btn btn-primary">Save</button>

            } 
            {isLoading &&
                <button type="submit" class="btn btn-primary" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving...</button>
            }
        
                
                
                <button class="btn btn-light" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
    <ToastContainer></ToastContainer>
</div>




                
             
                
             
               
               
               
            </div>
           
        </div>
    </div>










</div>










<div class="sidebar sidebar-right sidebar-animate">
<div class="panel panel-primary card mb-0 shadow-none border-0">
<div class="tab-menu-heading border-0 d-flex p-3">
    <div class="card-title mb-0"><i class="fe fe-bell me-2"></i><span
            class=" pulse"></span>Notifications</div>
    <div class="card-options ms-auto">
        <a href="javascript:void(0);" class="sidebar-icon text-end float-end me-3 mb-1"
            data-bs-toggle="sidebar-right" data-target=".sidebar-right"><i
                class="fe fe-x text-white"></i></a>
    </div>
</div>
<div class="panel-body tabs-menu-body latest-tasks p-0 border-0">
    <div class="tabs-menu border-bottom">
      
        <ul class="nav panel-tabs">
            <li class=""><a href="#side1" class="active" data-bs-toggle="tab"><i
                        class="fe fe-settings me-1"></i>Feeds</a></li>
            <li><a href="#side2" data-bs-toggle="tab"><i class="fe fe-message-circle"></i> Chat</a></li>
            <li><a href="#side3" data-bs-toggle="tab"><i class="fe fe-anchor me-1"></i>Timeline</a></li>
        </ul>
    </div>
    <div class="tab-content">
        <div class="tab-pane active" id="side1">
            <div class="p-3 fw-semibold ps-5">Feeds</div>
            <div class="card-body pt-2">
                <div class="browser-stats">
                    <div class="row mb-4">
                        <div class="col-sm-2 mb-sm-0 mb-3">
                            <span class="feeds avatar-circle brround bg-primary-transparent"><i
                                    class="fe fe-user text-primary"></i></span>
                        </div>
                        <div class="col-sm-10 ps-sm-0">
                            <div class="d-flex align-items-end justify-content-between ms-2">
                                <h6 class="">New user registered</h6>
                                <div>
                                    <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                    <a href="javascript:void(0)"><i class="fe fe-x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-2 mb-sm-0 mb-3">
                            <span
                                class="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent"><i
                                    class="fe fe-shopping-cart text-secondary"></i></span>
                        </div>
                        <div class="col-sm-10 ps-sm-0">
                            <div class="d-flex align-items-end justify-content-between ms-2">
                                <h6 class="">New order delivered</h6>
                                <div>
                                    <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                    <a href="javascript:void(0)"><i class="fe fe-x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-2 mb-sm-0 mb-3">
                            <span
                                class="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent"><i
                                    class="fe fe-bell text-danger"></i></span>
                        </div>
                        <div class="col-sm-10 ps-sm-0">
                            <div class="d-flex align-items-end justify-content-between ms-2">
                                <h6 class="">You have pending tasks</h6>
                                <div>
                                    <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                    <a href="javascript:void(0)"><i class="fe fe-x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-2 mb-sm-0 mb-3">
                            <span
                                class="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent"><i
                                    class="fe fe-gitlab text-warning"></i></span>
                        </div>
                        <div class="col-sm-10 ps-sm-0">
                            <div class="d-flex align-items-end justify-content-between ms-2">
                                <h6 class="">New version arrived</h6>
                                <div>
                                    <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                    <a href="javascript:void(0)"><i class="fe fe-x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-2 mb-sm-0 mb-3">
                            <span
                                class="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent"><i
                                    class="fe fe-database text-pink"></i></span>
                        </div>
                        <div class="col-sm-10 ps-sm-0">
                            <div class="d-flex align-items-end justify-content-between ms-2">
                                <h6 class="">Server #1 overloaded</h6>
                                <div>
                                    <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                    <a href="javascript:void(0)"><i class="fe fe-x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2 mb-sm-0 mb-3">
                            <span
                                class="feeds avatar-circle avatar-circle-info brround bg-info-transparent"><i
                                    class="fe fe-check-circle text-info"></i></span>
                        </div>
                        <div class="col-sm-10 ps-sm-0">
                            <div class="d-flex align-items-end justify-content-between ms-2">
                                <h6 class="">New project launched</h6>
                                <div>
                                    <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                    <a href="javascript:void(0)"><i class="fe fe-x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-3 fw-semibold ps-5">Settings</div>
            <div class="card-body pt-2">
                <div class="browser-stats">
                    <div class="row mb-4">
                        <div class="col-sm-2 mb-sm-0 mb-3">
                            <span class="feeds avatar-circle brround bg-primary-transparent"><i
                                    class="fe fe-settings text-primary"></i></span>
                        </div>
                        <div class="col-sm-10 ps-sm-0">
                            <div class="d-flex align-items-end justify-content-between ms-2">
                                <h6 class="">General Settings</h6>
                                <div>
                                    <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-2 mb-sm-0 mb-3">
                            <span
                                class="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent"><i
                                    class="fe fe-map-pin text-secondary"></i></span>
                        </div>
                        <div class="col-sm-10 ps-sm-0">
                            <div class="d-flex align-items-end justify-content-between ms-2">
                                <h6 class="">Map Settings</h6>
                                <div>
                                    <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-2 mb-sm-0 mb-3">
                            <span
                                class="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent"><i
                                    class="fe fe-headphones text-danger"></i></span>
                        </div>
                        <div class="col-sm-10 ps-sm-0">
                            <div class="d-flex align-items-end justify-content-between ms-2">
                                <h6 class="">Support Settings</h6>
                                <div>
                                    <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-2 mb-sm-0 mb-3">
                            <span
                                class="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent"><i
                                    class="fe fe-credit-card text-warning"></i></span>
                        </div>
                        <div class="col-sm-10 ps-sm-0">
                            <div class="d-flex align-items-end justify-content-between ms-2">
                                <h6 class="">Payment Settings</h6>
                                <div>
                                    <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-2 mb-sm-0 mb-3">
                            <span
                                class="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent"><i
                                    class="fe fe-bell text-pink"></i></span>
                        </div>
                        <div class="col-sm-10 ps-sm-0">
                            <div class="d-flex align-items-end justify-content-between ms-2">
                                <h6 class="">Notification Settings</h6>
                                <div>
                                    <a href="javascript:void(0)"><i class="fe fe-settings me-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane" id="side2">
            <div class="list-group list-group-flush">
                <div class="pt-3 fw-semibold ps-5">Today</div>
                <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md brround cover-image"
                            data-bs-image-src="../assets/images/users/2.jpg"></span>
                    </div>
                    <div class="">
                        <a href="chat.html">
                            <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                data-target="#chatmodel">Addie Minstra</div>
                            <p class="mb-0 fs-12 text-muted"> Hey! there I' am available.... </p>
                        </a>
                    </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md brround cover-image"
                            data-bs-image-src="../assets/images/users/11.jpg"><span
                                class="avatar-status bg-success"></span></span>
                    </div>
                    <div class="">
                        <a href="chat.html">
                            <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                data-target="#chatmodel">Rose Bush</div>
                            <p class="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                        </a>
                    </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md brround cover-image"
                            data-bs-image-src="../assets/images/users/10.jpg"></span>
                    </div>
                    <div class="">
                        <a href="chat.html">
                            <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                data-target="#chatmodel">Claude Strophobia</div>
                            <p class="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                            </p>
                        </a>
                    </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md brround cover-image"
                            data-bs-image-src="../assets/images/users/13.jpg"></span>
                    </div>
                    <div class="">
                        <a href="chat.html">
                            <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                data-target="#chatmodel">Eileen Dover</div>
                            <p class="mb-0 fs-12 text-muted"> New product Launching... </p>
                        </a>
                    </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md brround cover-image"
                            data-bs-image-src="../assets/images/users/12.jpg"><span
                                class="avatar-status bg-success"></span></span>
                    </div>
                    <div class="">
                        <a href="chat.html">
                            <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                data-target="#chatmodel">Willie Findit</div>
                            <p class="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                        </a>
                    </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md brround cover-image"
                            data-bs-image-src="../assets/images/users/15.jpg"></span>
                    </div>
                    <div class="">
                        <a href="chat.html">
                            <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                data-target="#chatmodel">Manny Jah</div>
                            <p class="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                            </p>
                        </a>
                    </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md brround cover-image"
                            data-bs-image-src="../assets/images/users/4.jpg"></span>
                    </div>
                    <div class="">
                        <a href="chat.html">
                            <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                data-target="#chatmodel">Cherry Blossom</div>
                            <p class="mb-0 fs-12 text-muted"> Hey! there I' am available....</p>
                        </a>
                    </div>
                </div>
                <div class="pt-3 fw-semibold ps-5">Yesterday</div>
                <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md brround cover-image"
                            data-bs-image-src="../assets/images/users/7.jpg"><span
                                class="avatar-status bg-success"></span></span>
                    </div>
                    <div class="">
                        <a href="chat.html">
                            <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                data-target="#chatmodel">Simon Sais</div>
                            <p class="mb-0 fs-12 text-muted">Schedule Realease...... </p>
                        </a>
                    </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md brround cover-image"
                            data-bs-image-src="../assets/images/users/9.jpg"></span>
                    </div>
                    <div class="">
                        <a href="chat.html">
                            <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                data-target="#chatmodel">Laura Biding</div>
                            <p class="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                            </p>
                        </a>
                    </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md brround cover-image"
                            data-bs-image-src="../assets/images/users/2.jpg"><span
                                class="avatar-status bg-success"></span></span>
                    </div>
                    <div class="">
                        <a href="chat.html">
                            <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                data-target="#chatmodel">Addie Minstra</div>
                            <p class="mb-0 fs-12 text-muted">Contact me for details....</p>
                        </a>
                    </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md brround cover-image"
                            data-bs-image-src="../assets/images/users/9.jpg"></span>
                    </div>
                    <div class="">
                        <a href="chat.html">
                            <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                data-target="#chatmodel">Ivan Notheridiya</div>
                            <p class="mb-0 fs-12 text-muted"> Hi we can explain our new project......
                            </p>
                        </a>
                    </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md brround cover-image"
                            data-bs-image-src="../assets/images/users/14.jpg"></span>
                    </div>
                    <div class="">
                        <a href="chat.html">
                            <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                data-target="#chatmodel">Dulcie Veeta</div>
                            <p class="mb-0 fs-12 text-muted"> Okay...I will be waiting for you </p>
                        </a>
                    </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md brround cover-image"
                            data-bs-image-src="../assets/images/users/11.jpg"></span>
                    </div>
                    <div class="">
                        <a href="chat.html">
                            <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                data-target="#chatmodel">Florinda Carasco</div>
                            <p class="mb-0 fs-12 text-muted">New product Launching...</p>
                        </a>
                    </div>
                </div>
                <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md brround cover-image"
                            data-bs-image-src="../assets/images/users/4.jpg"><span
                                class="avatar-status bg-success"></span></span>
                    </div>
                    <div class="">
                        <a href="chat.html">
                            <div class="fw-semibold text-dark" data-bs-toggle="modal"
                                data-target="#chatmodel">Cherry Blossom</div>
                            <p class="mb-0 fs-12 text-muted">cherryblossom@gmail.com</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane" id="side3">
            <ul class="task-list timeline-task">
                <li class="d-sm-flex mt-4">
                    <div>
                        <i class="task-icon1"></i>
                        <h6 class="fw-semibold">Task Finished<span
                                class="text-muted fs-11 mx-2 fw-normal">09 July 2021</span></h6>
                        <p class="text-muted fs-12">Adam Berry finished task on<a href="javascript:void(0)"
                                class="fw-semibold"> Project Management</a></p>
                    </div>
                    <div class="ms-auto d-md-flex me-3">
                        <a href="javascript:void(0)" class="text-muted me-2"><span class="fe fe-edit"></span></a>
                        <a href="javascript:void(0)" class="text-muted"><span class="fe fe-trash-2"></span></a>
                    </div>
                </li>
                <li class="d-sm-flex">
                    <div>
                        <i class="task-icon1"></i>
                        <h6 class="fw-semibold">New Comment<span
                                class="text-muted fs-11 mx-2 fw-normal">05 July 2021</span></h6>
                        <p class="text-muted fs-12">Victoria commented on Project <a href="javascript:void(0)"
                                class="fw-semibold"> AngularJS Template</a></p>
                    </div>
                    <div class="ms-auto d-md-flex me-3">
                        <a href="javascript:void(0)" class="text-muted me-2"><span class="fe fe-edit"></span></a>
                        <a href="javascript:void(0)" class="text-muted"><span class="fe fe-trash-2"></span></a>
                    </div>
                </li>
                <li class="d-sm-flex">
                    <div>
                        <i class="task-icon1"></i>
                        <h6 class="fw-semibold">New Comment<span
                                class="text-muted fs-11 mx-2 fw-normal">25 June 2021</span></h6>
                        <p class="text-muted fs-12">Victoria commented on Project <a href="javascript:void(0)"
                                class="fw-semibold"> AngularJS Template</a></p>
                    </div>
                    <div class="ms-auto d-md-flex me-3">
                        <a href="javascript:void(0)" class="text-muted me-2"><span class="fe fe-edit"></span></a>
                        <a href="javascript:void(0)" class="text-muted"><span class="fe fe-trash-2"></span></a>
                    </div>
                </li>
                <li class="d-sm-flex">
                    <div>
                        <i class="task-icon1"></i>
                        <h6 class="fw-semibold">Task Overdue<span
                                class="text-muted fs-11 mx-2 fw-normal">14 June 2021</span></h6>
                        <p class="text-muted mb-0 fs-12">Petey Cruiser finished task <a href="javascript:void(0)"
                                class="fw-semibold"> Integrated management</a></p>
                    </div>
                    <div class="ms-auto d-md-flex me-3">
                        <a href="javascript:void(0)" class="text-muted me-2"><span class="fe fe-edit"></span></a>
                        <a href="javascript:void(0)" class="text-muted"><span class="fe fe-trash-2"></span></a>
                    </div>
                </li>
                <li class="d-sm-flex">
                    <div>
                        <i class="task-icon1"></i>
                        <h6 class="fw-semibold">Task Overdue<span
                                class="text-muted fs-11 mx-2 fw-normal">29 June 2021</span></h6>
                        <p class="text-muted mb-0 fs-12">Petey Cruiser finished task <a href="javascript:void(0)"
                                class="fw-semibold"> Integrated management</a></p>
                    </div>
                    <div class="ms-auto d-md-flex me-3">
                        <a href="javascript:void(0)" class="text-muted me-2"><span class="fe fe-edit"></span></a>
                        <a href="javascript:void(0)" class="text-muted"><span class="fe fe-trash-2"></span></a>
                    </div>
                </li>
                <li class="d-sm-flex">
                    <div>
                        <i class="task-icon1"></i>
                        <h6 class="fw-semibold">Task Finished<span
                                class="text-muted fs-11 mx-2 fw-normal">09 July 2021</span></h6>
                        <p class="text-muted fs-12">Adam Berry finished task on<a href="javascript:void(0)"
                                class="fw-semibold"> Project Management</a></p>
                    </div>
                    <div class="ms-auto d-md-flex me-3">
                        <a href="javascript:void(0)" class="text-muted me-2"><span class="fe fe-edit"></span></a>
                        <a href="javascript:void(0)" class="text-muted"><span class="fe fe-trash-2"></span></a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>

</div>




 <footer class="footer">
        <div class="container">
            <div class="row align-items-center flex-row-reverse">
                <div class="col-md-12 col-sm-12 text-center">
                    Copyright © <span id="year"></span> <a href="javascript:void(0)">PataMtaani</a>. Designed by <a href="javascript:void(0)"> FrankCode Ltd </a> All rights reserved.
                </div>
            </div>
        </div>
    </footer>





</div>



</div>
    
    
    </div>
  )
}

export default ServiceTypes