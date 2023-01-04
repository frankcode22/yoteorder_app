
import React, { useCallback,useState,useEffect,useContext } from 'react';

import {useNavigate} from 'react-router-dom'

import axios from 'axios';

import {Link} from 'react-router-dom'


import DataContext from '../../../helpers/DataContext';


import LocationDataContext from '../../../helpers/LocationDataContext';
import LocationDataContextInit from '../../../helpers/LocationDataContextInit';

function BestRatedVendors() {
    const {bussinessList, setBussinessList} = useContext(DataContext);

    const {userPos, setUserPos} = useContext(LocationDataContextInit);

    const [errorMessage, setErrorMessage] = useState("");

    const[lat,setLat]=useState('')

    const[lng,setLng]=useState('')


    const [pname, setpname] = useState("");

    const history = useNavigate();

    const isAuthenticated = localStorage.getItem("isAuthenticated")

    const [bestList, setBestList] = useState([]);
    const [isDivLoading, setIsDivLoading] = useState(false);

    
  
    const [isLoading,setLoading]=useState(false);


    useEffect(()=>{


        console.log('YOUR INILIALIZING POSITION DATA IS ',userPos)

        setLat(userPos.lat)

        setLng(userPos.lng)

        

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





       




         
  
  
  },[bussinessList]);


  return (
    <div>

    <div class="row row-cols-4 bg-transparent">

    {bestList.map((value, key) => {
        return (


            <div class="col-xl-3 col-sm-6 col-md-6">

         
            
            <div class="card border p-0">
                <div class="card-header">
                    <h3 class="card-title">{value.business_name}</h3>
                    <div class="card-options">
                        <a href="javascript:void(0)" class="card-options-collapse" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                        <a href="javascript:void(0)" class="card-options-remove" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a>
                    </div>
                </div>
                    <a href='#'>
                        <div class="card-body text-center">
                            <span class="avatar avatar-xxl brround cover-image" data-bs-image-src={value.cloudinary_url}  style={{ background: `url(${value.cloudinary_url})`, center: 'center' }}></span>
                            <h4 class="h4 mb-0 mt-3">{value.User.first_name}</h4>
                            <p class="card-text">Vendor</p>


                            <div class="mb-2 text-warning">
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                            </div>

                          
                            <hr/> 
                            
                            <div>
                            <span><i class="fe fe-map-pin fs-20"></i></span><strong>{value.location}</strong>
                            </div>
                          
                            
                       

                           
                                <div>
                                <button type="button" class="btn btn-success  mt-1 mb-1 me-3">
                                <span>{value.industry}</span>
                                <span class="badge bg-white text-success ms-2">2</span>
                            </button>
                                </div>
                            
                        </div>
                    </a>
                
                <div class="card-footer text-center">
                    <div class="row user-social-detail">
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-google"></i></a>
                        </div>
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-facebook"></i></a>
                        </div>
                        <div class="social-profile me-4 rounded text-center">
                            <a href="javascript:void(0)"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
                 
        </div>


        )
    }
    )

    }
  

   
  
  
</div>
    
    
    
    </div>
  )
}

export default BestRatedVendors