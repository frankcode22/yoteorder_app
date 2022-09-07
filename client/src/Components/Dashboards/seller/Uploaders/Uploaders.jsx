import './main.scss';
import _ from 'lodash';
import API from '../../../../services';
import { Progress } from 'reactstrap';
import React, { useState,useEffect} from 'react';
import uplodIcon from './img/upload.png';
import axios from 'axios';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

export const SingleUploader = (props) => {
    let { idx, label, uploadUrl } = props;

    const [userId, setUserId] = useState("");

    const [type, setType] = useState("");
    const [product_description, setProduct_description] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit_of_measure, setunit_of_measure] = useState("");


    const [isUploding, setUploding] = useState(false);
    const [uploadedImg, setUplodedImg] = useState("");
    const [uploadProgress, setProgress] = useState(0);

   

    const [id, setId] = useState('');

    const [businessId, setbusinessId] = useState('');
    const [name, setName] = useState("");

 


    const [isLoading,setLoading]=useState(false);

    const [business_name, setbusiness_name] = useState("");
    const [image, setImage] = useState('')

  



    useEffect(()=>{

          //axios.get('http://localhost:3001/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
     axios.get('http://localhost:3001/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

        setUserId(response.data.id)
  
  
       })


   
    
           axios.get('http://localhost:3001/users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
        
            if(response.data!=null){
        
              setbusinessId(response.data.id);

              setId(response.data.id)
    
             
    
              setbusiness_name(response.data.business_name);

              console.log("THE BUSS ID IS FROM USE EFFECT "+response.data.id)
    
          
          
            
          
            }
            else{
          
          
              setbusinessId(null)
           
              setbusiness_name('nobuzz')
            }
        
            
             })
    
    
    
           
    
    
    
    
    },[]);

    const handleChange = async e => {
        let formData = new FormData();

      
        setImage(e.target.files[0]);

        formData.append('businessId',businessId);

        formData.append('file', e.target.files[0]);
       
        setUploding(true);
        let { data } = await API.post(uploadUrl, formData,{headers: {
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



    const saveDetails = async e => {
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
        // formData.append('latitude', latitude);

        // formData.append('longitude', lng);

        formData.append('UserId', userId);

    

        setUploding(true);
        let { data } = await API.post('images/save-product', formData, {
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
            
            toast.success('Product saved successfully');
        }, 2000);
        
    }

    return (
        <div>
        <div class="card-body">
          {/*<label htmlFor={idx} className="text-primary font-weight-bold">{label}</label> */}  
           
      
               

                        <div class="form-group ">

                            <label for="nameWithTitle" class="form-label">Product Name</label>


                            <input type="hidden" id="nameWithTitle" class="form-control" placeholder="Enter Name"

                                value={businessId}

                                onChange={(event) => {
                                    setbusinessId(event.target.value);
                                }}

                            />

                            <input type="hidden" id="price" class="form-control" value={userId}

                                onChange={(event) => {
                                    setUserId(event.target.value);
                                }}
                            />

                            <input type="text" id="product_name" class="form-control" placeholder="Enter Name"

                                onChange={(event) => {
                                    setName(event.target.value);
                                }}

                            />
                        </div>
                        <div class="form-group ">

                            <label class="form-label" for="multicol-country">Type</label>
                            <select id="multicol-country" class="form-control select2 form-select"
                                onChange={(event) => {
                                    setType(event.target.value);
                                }}

                                data-allow-clear="true">
                                <option value="">Select Category</option>
                                <option value="Eateries">Eateries</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Automotive">Automotive</option>

                                <option value="Contruction">Contruction</option>

                                <option value="Drinks">Drinks</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Computing">Computing</option>


                                <option value="Domestic">Domestic Use</option>
                                <option value="Home-Based">Home-Based</option>
                                <option value="Beauty">Beauty</option>

                                <option value="Agricultural">Agricultural</option>
                                <option value="Livestock">Livestock</option>
                                <option value="Aquatic">Aquatic</option>


                            </select>


                        </div>


                        <div class="form-row">

                            <label for="description" class="form-label">Description</label>


                            <textarea name="address" class="form-control" onChange={(event) => {
                                setProduct_description(event.target.value);
                            }} id="address" rows="2" placeholder="Your Product desciption"></textarea>

                        </div>






                        <div class="form-row">
                            <div class="form-group col-md-6 mb-0">
                                <div class="form-group">
                                    <label for="dobWithTitle" class="form-label">Price(Per unit)</label>
                                    <input type="number" id="price" class="form-control"

                                        onChange={(event) => {
                                            setPrice(event.target.value);
                                        }}


                                    />
                                </div>
                            </div>
                            <div class="form-group col-md-6 mb-0">
                                <div class="form-group">
                                    <label for="dobWithTitle" class="form-label">Quantity</label>
                                    <input type="number" class="form-control"

                                        onChange={(event) => {
                                            setQuantity(event.target.value);
                                        }}
                                        id="quantity" placeholder="eg.7" />
                                </div>
                            </div>
                        </div>


                        <div class="form-row">
                            <div class="form-group col-md-6 mb-0">
                                <div class="form-group ">

                                    <label class="form-label" for="multicol-country">Unit Of Measure</label>
                                    <select id="multicol-country" class="form-control select2 form-select"
                                        value={unit_of_measure}
                                        onChange={(event) => {
                                            setunit_of_measure(event.target.value);
                                        }}



                                        data-allow-clear="true">
                                        <option value="">Select Unit Of Measure</option>
                                        <option value="Kgs">Kgs</option>
                                        <option value="Litre">Litres</option>
                                        <option value="Plate">Plates</option>

                                        <option value="Item">Item</option>

                                        <option value="Piece">Piece</option>
                                        <option value="Package">Package</option>
                                        <option value="Order">Order</option>





                                    </select>


                                </div>
                            </div>
                            <div class="form-group col-md-6 mb-0">
                                <div class="form-group">
                                    <label for="dobWithTitle" class="form-label">Availability</label>
                                    <div class="col-xl-2 px-3 px-xl-1">
                                        <div class="form-group">
                                            <label class="custom-switch form-switch mb-0">
                                                <input type="checkbox" name="custom-switch-radio" class="custom-switch-input" />
                                                <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
                                                <span class="custom-switch-description">Set Availability</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>




                    

                   
                  
               


                    <div class="form-group">
                    <label class="form-label mt-0">Default file input example</label>
                    <input class="form-control" type="file" id={idx} onChange={handleChange}/>
                    </div>


                    <input type="hidden" value={businessId}  onChange={(event) => {
                        setbusinessId(event.target.value);
                      }} placeholder="bedrooms"/>

                    
             
                {
                    isUploding ? (
                        <div className="flex-grow-1 px-2">
                            <div className="text-center">{uploadProgress}%</div>
                            <Progress value={uploadProgress} />
                        </div>
                    ) : null
                }
                {
                    uploadedImg && !isUploding ? (
                        <img
                            src={uploadedImg}
                            alt="UploadedImage"
                            className="img-thumbnail img-fluid uploaded-img ml-3"
                        />
                    ) : null
                }
            

          

            </div>



            <div class="modal-footer">


            {!isLoading && <button type="submit" onClick={saveDetails} class="btn btn-primary">Save</button>
          
                } 
                {isLoading &&
                    <button type="submit" class="btn btn-primary" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
                }


                 <button class="btn btn-light" data-bs-dismiss="modal">Close</button>
            </div>

            <ToastContainer/>
            </div>
    )
}


export const SingleUploaderUpdateProduct = (props) => {
    let { idx, label, uploadUrl } = props;

    const [userId, setUserId] = useState("");

    const [type, setType] = useState("");
    const [product_description, setProduct_description] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit_of_measure, setunit_of_measure] = useState("");


    const [isUploding, setUploding] = useState(false);
    const [uploadedImg, setUplodedImg] = useState("");
    const [uploadProgress, setProgress] = useState(0);

   

    const [id, setId] = useState('');

    const [businessId, setbusinessId] = useState('');
    const [name, setName] = useState("");

 


    const [isLoading,setLoading]=useState(false);

    const [business_name, setbusiness_name] = useState("");
    const [image, setImage] = useState('')

  



    useEffect(()=>{

          //axios.get('http://localhost:3001/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
     axios.get('http://localhost:3001/users/auth', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {

        setUserId(response.data.id)
  
  
       })


   
    
           axios.get('http://localhost:3001/users/mybusiness', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
        
            if(response.data!=null){
        
              setbusinessId(response.data.id);

              setId(response.data.id)
    
             
    
              setbusiness_name(response.data.business_name);

              console.log("THE BUSS ID IS FROM USE EFFECT "+response.data.id)
    
          
          
            
          
            }
            else{
          
          
              setbusinessId(null)
           
              setbusiness_name('nobuzz')
            }
        
            
             })
    
    
    
           
    
    
    
    
    },[]);

    const handleChange = async e => {
        let formData = new FormData();

      
        setImage(e.target.files[0]);

        formData.append('businessId',businessId);

        formData.append('file', e.target.files[0]);
       
        setUploding(true);
        let { data } = await API.post(uploadUrl, formData,{headers: {
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



    const saveDetails = async e => {
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
        // formData.append('latitude', latitude);

        // formData.append('longitude', lng);

        formData.append('UserId', userId);

    

        setUploding(true);
        let { data } = await API.post('images/save-product', formData, {
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
            
            toast.success('Product saved successfully');
        }, 2000);
        
    }


    const updateProduct = async e => {
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
        // formData.append('latitude', latitude);

        // formData.append('longitude', lng);

        formData.append('UserId', userId);

    

        setUploding(true);
        let { data } = await API.post('images/save-product', formData, {
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
            
            toast.success('Product saved successfully');
        }, 2000);
        
    }






    return (
        <div>
        <div class="card-body">
          {/*<label htmlFor={idx} className="text-primary font-weight-bold">{label}</label> */}  
           
      
               

                        <div class="form-group ">

                            <label for="nameWithTitle" class="form-label">Product Name</label>


                            <input type="hidden" id="nameWithTitle" class="form-control" placeholder="Enter Name"

                                value={businessId}

                                onChange={(event) => {
                                    setbusinessId(event.target.value);
                                }}

                            />

                            <input type="hidden" id="price" class="form-control" value={userId}

                                onChange={(event) => {
                                    setUserId(event.target.value);
                                }}
                            />

                            <input type="text" id="product_name" class="form-control" placeholder="Enter Name"

                            value={name}

                                onChange={(event) => {
                                    setName(event.target.value);
                                }}

                            />
                        </div>
                        <div class="form-group ">

                            <label class="form-label" for="multicol-country">Type</label>
                            <select id="multicol-country" class="form-control select2 form-select"
                                onChange={(event) => {
                                    setType(event.target.value);
                                }}
                                value={type}

                                data-allow-clear="true">
                                <option value="">Select Category</option>
                                <option value="Eateries">Eateries</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Automotive">Automotive</option>

                                <option value="Contruction">Contruction</option>

                                <option value="Drinks">Drinks</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Computing">Computing</option>


                                <option value="Domestic">Domestic Use</option>
                                <option value="Home-Based">Home-Based</option>
                                <option value="Beauty">Beauty</option>

                                <option value="Agricultural">Agricultural</option>
                                <option value="Livestock">Livestock</option>
                                <option value="Aquatic">Aquatic</option>


                            </select>


                        </div>


                        <div class="form-row">

                            <label for="description" class="form-label">Description</label>


                            <textarea name="address" class="form-control" onChange={(event) => {
                                setProduct_description(event.target.value);
                            }} id="address" rows="2" placeholder="Your Product desciption"></textarea>

                        </div>






                        <div class="form-row">
                            <div class="form-group col-md-6 mb-0">
                                <div class="form-group">
                                    <label for="dobWithTitle" class="form-label">Price(Per unit)</label>
                                    <input type="number" id="price" class="form-control"

                                    value={price}

                                        onChange={(event) => {
                                            setPrice(event.target.value);
                                        }}


                                    />
                                </div>
                            </div>
                            <div class="form-group col-md-6 mb-0">
                                <div class="form-group">
                                    <label for="dobWithTitle" class="form-label">Quantity</label>
                                    <input type="number" class="form-control"

                                    value={quantity}

                                        onChange={(event) => {
                                            setQuantity(event.target.value);
                                        }}
                                        id="quantity" placeholder="eg.7" />
                                </div>
                            </div>
                        </div>


                        <div class="form-row">
                            <div class="form-group col-md-6 mb-0">
                                <div class="form-group ">

                                    <label class="form-label" for="multicol-country">Unit Of Measure</label>
                                    <select id="multicol-country" class="form-control select2 form-select"
                                        value={unit_of_measure}
                                        onChange={(event) => {
                                            setunit_of_measure(event.target.value);
                                        }}



                                        data-allow-clear="true">
                                        <option value="">Select Unit Of Measure</option>
                                        <option value="Kgs">Kgs</option>
                                        <option value="Litre">Litres</option>
                                        <option value="Plate">Plates</option>

                                        <option value="Item">Item</option>

                                        <option value="Piece">Piece</option>
                                        <option value="Package">Package</option>
                                        <option value="Order">Order</option>





                                    </select>


                                </div>
                            </div>
                            <div class="form-group col-md-6 mb-0">
                                <div class="form-group">
                                    <label for="dobWithTitle" class="form-label">Availability</label>
                                    <div class="col-xl-2 px-3 px-xl-1">
                                        <div class="form-group">
                                            <label class="custom-switch form-switch mb-0">
                                                <input type="checkbox" name="custom-switch-radio" class="custom-switch-input" />
                                                <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
                                                <span class="custom-switch-description">Set Availability</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>




                    

                   
                  
               


                    <div class="form-group">
                    <label class="form-label mt-0">Default file input example</label>
                    <input class="form-control" type="file" id={idx} onChange={handleChange}/>
                    </div>


                    <input type="hidden" value={businessId}  onChange={(event) => {
                        setbusinessId(event.target.value);
                      }} placeholder="bedrooms"/>

                    
             
                {
                    isUploding ? (
                        <div className="flex-grow-1 px-2">
                            <div className="text-center">{uploadProgress}%</div>
                            <Progress value={uploadProgress} />
                        </div>
                    ) : null
                }
                {
                    uploadedImg && !isUploding ? (
                        <img
                            src={uploadedImg}
                            alt="UploadedImage"
                            className="img-thumbnail img-fluid uploaded-img ml-3"
                        />
                    ) : null
                }
            

          

            </div>



            <div class="modal-footer">


            {!isLoading && <button type="submit" onClick={saveDetails} class="btn btn-primary">Save</button>
          
                } 
                {isLoading &&
                    <button type="submit" class="btn btn-primary" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
                }


                 <button class="btn btn-light" data-bs-dismiss="modal">Close</button>
            </div>

            <ToastContainer/>
            </div>
    )
}

export const MultiUploader = (props) => {
    let { id, label, uploadUrl } = props;
    const [isUploding, setUploding] = useState(false);
    const [uploadedImgs, setUplodedImgs] = useState([]);
    const [uploadProgress, setProgress] = useState(0);

    const handleChange = async e => {
        let { files } = e.target;

        let formData = new FormData();
        _.forEach(files, file => {
            formData.append('files', file);
        });

        setUploding(true);
        let { data } = await API.post(uploadUrl, formData, {
            onUploadProgress: ({ loaded, total }) => {
                let progress = ((loaded / total) * 100).toFixed(2);
                setProgress(progress);
            }
        });
        setUplodedImgs(data);
        setUploding(false);
    }

    return (
        <div className="form-group">
            <label htmlFor={id} className="text-primary font-weight-bold">{label}</label>
            <div className="d-flex">
                <div className="d-flex">
                    <div className="file-uploader-mask d-flex justify-content-center align-items-center">
                        <img className="file-uploader-icon" src={uplodIcon} alt="Upload-Icon" />
                    </div>
                    <input multiple className="file-input" type="file" id={id} onChange={handleChange} />
                </div>
                {
                    isUploding ? (
                        <div className="flex-grow-1 px-2">
                            <div className="text-center">{uploadProgress}%</div>
                            <Progress value={uploadProgress} />
                        </div>
                    ) : null
                }
            </div>
            <div className="d-flex flex-wrap mt-4">
                {
                    uploadedImgs && !isUploding ? (
                        uploadedImgs.map(uploadedImg => (
                            <img src={uploadedImg} key={uploadedImg} alt="UploadedImage" className="img-thumbnail img-fluid uploaded-img mr-2" />
                        ))
                    ) : null
                }
            </div>
        </div>
    )
}

export const Dropzone = (props) => {
    let { id, label, uploadUrl } = props;
    const [isUploding, setUploding] = useState(true);
    const [uploadedImgs, setUplodedImgs] = useState([]);
    const [uploadProgress, setProgress] = useState(0);

    const handleChange = async e => {
        let { files } = e.target;

        let formData = new FormData();
        formData.append('file', files[0]);

        setUploding(true);
        let { data } = await API.post(uploadUrl, formData, {
            onUploadProgress: ({ loaded, total }) => {
                let progress = ((loaded / total) * 100).toFixed(2);
                setProgress(progress);
            }
        });
        setUplodedImgs([...uploadedImgs, data.imagePath]);
        setUploding(false);
    }

    return (
        <div className="form-group">
            <label htmlFor={id} className="text-primary font-weight-bold">{label}</label>
            <div className="d-flex dropzone-container">
                <div className="dropzone-uploader-mask d-flex justify-content-center align-items-center">
                    <img className="file-uploader-icon" src={uplodIcon} alt="Upload-Icon" />
                </div>
                <input className="dropzone-input" type="file" id={id} onChange={handleChange} />
            </div>
            {
                isUploding ? (
                    <div className="flex-grow-1">
                        <div className="text-center">{uploadProgress}%</div>
                        <Progress value={uploadProgress} />
                    </div>
                ) : null
            }
            <div className="d-flex flex-wrap mt-4">
                {
                    uploadedImgs ? (
                        uploadedImgs.map(uploadedImg => (
                            <img src={uploadedImg} key={uploadedImg} alt="UploadedImage" className="mt-2 img-thumbnail img-fluid uploaded-img mr-2" />
                        ))
                    ) : null
                }
            </div>
        </div>
    )
}
