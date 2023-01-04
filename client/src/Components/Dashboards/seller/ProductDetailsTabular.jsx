import React from 'react'

import {useEffect,useState,useContext} from 'react';

import {useParams} from "react-router-dom"


//import axios from 'axios';

import API from '../../../services';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useNavigate,Link} from "react-router-dom";

import { AuthContext } from "../../../helpers/AuthContext";

import DataContext from '../../../helpers/DataContext';

function ProductDetailsTabular() {
    const {authState} = useContext(AuthContext);
    const [userId, setUserId] = useState('');

    const [name, setName] = useState("");
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [phone_no, setPhone_no] = useState("");



const [service_name, setservice_name] = useState("");

const [description, set_description] = useState("");


const {productsList1, setProductsList1 } = useContext(DataContext);


const [subcategory_name, setsubcategory_name] = useState("");

const [subcategory_des, setsubcategory_des] = useState("");

const [dateJoined, setdateJoined] = useState('');

const [servicesList, setServicesList] = useState([]);

const [subcategoryList, setSubcategoryList] = useState([]);

const [showUpdateButton, setShowUpdateButton] = useState(false);


const[serviceId,setServiceId]=useState('')
const [bussSetup,setBussSetup]=useState(false);

const [isBusinessSet,setIsBusinessSet] = useState(false);

const [isLoading,setLoading]=useState(false);

const [productsList, setProductsList] = useState([]);

const [errorMessage, setErrorMessage] = useState("");

const [isDivLoading, setIsDivLoading] = useState(false);

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

       API.get("retailerproductcat/mycategories",{ headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
       

        if(response.data){
   
           setServicesList(response.data)
   
        }
        else{
           setServicesList([])
   
        }
         
   
         
          })


          

         API.get('users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
            if(response.data.my_buss!=null){
    
            //  setIsBusinessSet(true)
        
              //setbusinessId(response.data.my_buss.id);
    
            //   setlocation(response.data.my_buss.location)
    
            //   setServicesList(response.data.my_buss.Services);
    
            //   setStaffList(response.data.my_buss.Staffs);
  
            //   // setProductsList(response.data.my_buss.Products);
  
  
    
            //   setbusiness_name(response.data.my_buss.business_name);
    
            //   setbusiness_type(response.data.my_buss.business_type);
    
            //   setbusiness_description(response.data.my_buss.business_description);
    
    
             // setImagePath(response.data.imagePath)
              
              //setprofile_photo(response.data.my_buss.profile_photo)
  
             // setAccountProfile(response.data.my_buss.cloudinary_url)
    
             
    
              
    
            //   setbuss_contacts(response.data.my_buss.contacts)
    
              setBussSetup(true);
          
            
          
            }
            else{
          
              setIsBusinessSet(false)
              //setbusinessId(0)
              setBussSetup(false);
              //setbusiness_name('nobuzz')
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
   
  
      
          



},[productsList1]);


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

   

     
    
    API.post("retailerproductcat",service_data).then((response)=>{

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
                                <label for="floatingInput">Category Name</label>
                            </div>

                           <input type="hidden" class="form-control" id="floatingInput"
                            value={userId}
                            onChange={(event) => {
                                setUserId(event.target.value);
                              }}
                            
                            placeholder="name"/>
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
     
        <div class="card">
           
            <div class="e-table px-5 pb-5">
                <div class="table-responsive table-lg">
                    <table class="table border-top table-bordered mb-0">
                        <thead>
                            <tr>
                                <th class="text-center">

                                </th>
                                
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Price</th>
                               
                               
                             
                                <th class="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                        {productsList.map((value,key)=>{

                            return (

                                <tr>
                                <td class="align-middle text-center">
                                    <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                        <input class="custom-control-input" id="item-1" type="checkbox"/> <label class="custom-control-label" for="item-1"></label>
                                    </div>
                                </td>
                               
                                <td class="text-nowrap align-middle">{value.name}</td>
                                <td class="text-nowrap align-middle">{value.category}</td>

                                <td class="text-nowrap align-middle">{value.quantity}</td>

                                <td class="text-nowrap align-middle">{value.price}</td>
                        
                              

                                
                                {/** <td class="text-nowrap align-middle">{!value.Business.business_name && ''}</td> */}
                               

                               
                                 {/** <td class="text-nowrap align-middle">{value.Business.longitude?value.Business.longitude:'no bizz'}</td> */}
                                

                                

                              

                               

                                <td class="text-center align-middle">
                                    <div class="btn-group align-top">


                                    <a onClick={() => {
                                        viewSelectedItem(value.id);
                                          }}
                                    
                                
                                          data-bs-effect="effect-slide-in-bottom" data-bs-toggle="modal" href="#modaldemo80" class="btn btn-primary btn-block"><i class="fa fa-plus-square mx-2"></i>Edit</a>


                                    <button class="btn btn-sm btn-primary badge" onClick={() => {
                                        viewSelectedItem(value.id);
                                          }} type="button">Edit</button>


                                          <a onClick={() => {
                                            viewSelectedItem(value.id);
                                              }}
                                        
                                    
                                              data-bs-effect="effect-slide-in-bottom" data-bs-toggle="modal" href="#modaldemo801" class="btn btn-primary btn-block"><i class="fa fa-plus-square mx-2"></i>View</a>
                                    
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
    
    
    
    </div>
  )
}

export default ProductDetailsTabular