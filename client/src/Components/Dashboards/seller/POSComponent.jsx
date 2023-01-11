import React from 'react'

import { useEffect,useState,useContext,useCallback} from 'react';



//import axios from 'axios';

import { Helmet } from "react-helmet";


import {Button, Container, Navbar, Modal} from 'react-bootstrap';

import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../../helpers/AuthContext'
import SidebarS from './SidebarS'
import TopbarS from './TopbarS'

import { useNavigate,Link} from "react-router-dom"

import API from '../../../services';
import { Progress } from 'reactstrap';

import DataContext from '../../../helpers/DataContext';

//import { getProductData} from './productsStore';

import {getProductData } from '../../../helpers/productsStore';
import ProductCard from './ProductCard';

import { productsArray } from '../../../helpers/productsStore';


import { CartContext } from "../../../helpers/CartContext";
import CartProduct from './CartProduct';

function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function POSComponent() {

    const {businessDetails,setBusinessDetails} = useContext(DataContext);

    //const {userPos, setUserPos} = useContext(LocationDataContextInit);
  
    //const {position, setPosition} = useContext(LocationDataContext);

    const [businessId, setbusinessId] = useState('');

    const [name, setName] = useState('');


	const [phone_no, setPhone_no] = useState("");

	const [amountPaid, setAmountPaid] = useState("");

	

	const [purchase_type, setpurchase_type] = useState('');

    const [quantity_ordered, setquantity_ordered] = useState('');

    const [price, setPrice] = useState('');

	const [customerId, setCustomerId] = useState('');

	
	

	const [orderNo,setOrderNo] = useState('');
	const [newCustomer,setNewCustomer] = useState(false);
    const [saveNewCustomerButton, setSaveNewCustomerButton] = useState(false);

    const {productsList1, setProductsList1 } = useContext(DataContext);

    const [productsList, setProductsList] = useState([]);

    const [cartList, setCartList] = useState([]);

	

	const [randomNo, setRandomNo] = useState(0);




	const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () =>{

		//setRandomNo(randomNumberInRange(1, 10000));

		setShow(true);
	} 


	const [showCustomerModal, setShowCustomerModal] = useState(false);
    const handleCloseCustomerModal = () => setShowCustomerModal(false);
    const handleShowCustomerModal = () =>{

		//setRandomNo(randomNumberInRange(1, 10000));

		setShowCustomerModal(true);
	} 


	const handleNewCustomer = () =>{

		//setRandomNo(randomNumberInRange(1, 10000));

		setNewCustomer(true);
		setSaveNewCustomerButton(true)
	} 


 


    const [customersList, setCustomersList] = useState([]);
    const [bussSetup,setBussSetup]=useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    const [isDivLoading, setIsDivLoading] = useState(false);







    

    const [isLoading,setLoading]=useState(false);


    
  useEffect(()=>{

   // setLat(userPos.lat)

   // setLng(userPos.long)


    let buss_status=localStorage.getItem('business_set')

     console.log("BUSS STATUS",buss_status)
    
   // setIsBusinessSet(buss_status)


   





       console.log("YOUR VENDOR BUSINESS DETAILS  IS ",businessDetails);



      // console.log("YOUR PRODUCT LIST DETAILS  IS ",productsList1);


    

         API.get('users/mybizz', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
          if(response.data.my_buss!=null){
  
           // setIsBusinessSet(true)
      
            setbusinessId(response.data.my_buss.id);

			setCustomersList(response.data.my_buss.Customers);
  
           
            setBussSetup(true);
        
          
        
          }
          else{
        
           // setIsBusinessSet(false)
            setbusinessId(0)
            setBussSetup(false);
            //setbusiness_name('nobuzz')
          }
      
          
           })



    
    
         

       




},[businessDetails,customerId,setOrderNo])



const addToCart=(pname,qnty,pprice)=>{

    setLoading(true);

    setName(pname)

    setquantity_ordered(qnty)

    setPrice(pprice)

    setCartList((previousCart)=>{
        return [{name:name,quantity:quantity_ordered,price:pprice},...previousCart];
    })



    setTimeout(() => {
        setLoading(false);
        toast.success('Saved');
       
    }, 1000);

}

function getTotalCost() {
    let totalCost = 0;
    cartList.map((cartItem) => {
        const productData = getProductData(cartItem.id);
        totalCost += (productData.price * cartItem.quantity);
    });
    return totalCost;
}


const customer_data={
	name:name,
	purchase_type:purchase_type,
   phone_no:phone_no,
   BusinessId:businessId,
   
}










const addDetails = (oId)  => {
	setLoading(true);

	
	
	API.put('order/savecustomerdetails/'+oId,customer_data).then((response)=>{



	console.log("The response is"+response.data)

	   
		setTimeout(() => {
			setLoading(false);
			toast.info('Customer saved successfully');
		}, 3000);
	 
	   //  history("/dashboard"); 
	})

}


 const saveCustomer=()=>{
	console.log("Order ID IS"+orderNo)

 	API.post('customer',customer_data).then((res)=>{
    
        console.log("THE CUSTOMER DATA IS->"+res.data)

    
         //setOrderId(res.data.id)
        setCustomerId(res.data.id)

		setName(res.data.name)
		setPhone_no(res.data.phone_no)

		setRandomNo(randomNumberInRange(1, 10000));

		console.log("Order No IS"+orderNo)

		const customer_data_update={
		   name:name,
		   purchase_type:purchase_type,
		   phone_no:phone_no,
		   BusinessId:businessId,
		   customerId:res.data.id
		   
		}

		// API.put('order/savecustomerdetails',customer_data_update).then((response)=>{



		// 	console.log("UPDATES DETAILS ARE is"+response.data)
		
			   
		// 		// setTimeout(() => {
		// 		// 	setLoading(false);
		// 		// 	toast.info('Customer saved successfully');
		// 		// }, 3000);
			 
		// 	   //  history("/dashboard"); 
		// 	})

    })
 }


 const sale_data={
	name:name,
	purchase_type:purchase_type,
    phone_no:phone_no,
	total:cart.getTotalCost().toFixed(2),
	amount_paid:amountPaid,
	orderId:orderNo,
	customerId:customerId,
    BusinessId:businessId,
   
}


 const saleItems=()=>{

	setLoading(true);

	if(!newCustomer){

	

		API.post('sales',sale_data).then((res)=>{
	   
		  // console.log("THE CUSTOMER DATA IS->"+res.data)
   
	   
			//setOrderId(res.data.id)
		   setCustomerId(res.data.id)
   
		   setName(res.data.name)
		   setPhone_no(res.data.phone_no)
   
		   
		   setTimeout(() => {
			   setLoading(false);
			   toast.info('Sale Made To Existing Customer');
		   }, 1000);
   
		   
   
		   
   
	   })

	}

	else{

	

		API.post('sales/newcustomer',sale_data).then((res)=>{
	   
		  // console.log("THE CUSTOMER DATA IS->"+res.data)
   
	   
			//setOrderId(res.data.id)
		   setCustomerId(res.data.id)
   
		   setName(res.data.name)
		   setPhone_no(res.data.phone_no)
   
		   
		   setTimeout(() => {
			   setLoading(false);
			   toast.info('Sale Made To New Customer');
		   }, 1000);
   
		   
   
		   
   
	   })

	}


 }

// const saveCustomer=()=>{

	

    
//         //setOrderId(res.data.id)
//         // setCustomerId(res.data.id)

// 		setName("Kamau")
// 		setPhone_no('0718654231')
// 		setbusinessId(businessId)

// 		setRandomNo(randomNumberInRange(1, 10000));

   
// }






const checkout = async () => {

	setLoading(true);

	//saveCustomer()


	// await fetch('https://apibackend.patamtaani.com/api/order/checkout', {
		await fetch('http://localhost:8080/api/order/checkout', {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({items: cart.items})
	}).then((response) => {
		//console.log(response.order_no)
		//setOrderNo(response.order_no)

		setTimeout(() => {
			setLoading(false);
			toast.success('Saved');
			//setIsBusinessSet(true)
		}, 1500);
		
		return response.json();
	}).then((response) => {
		console.log(response.order_no)

		setOrderNo(response.order_no)

		setTimeout(() => {
			setLoading(false);
			toast.success('Saved');
			//setIsBusinessSet(true)
		}, 1000);


		
	
		if(response.url) {
			window.location.assign(response.url); // Forwarding user to Stripe
		}

	});





}


const handleSubCategorySelect= async (event) => {

	const selectedOption=event.target.value
  
  
	const customer = customersList.find(post => (post.id).toString() === selectedOption);
  
	// setUserId(JSON.stringify(customer))
  
	setName(customer.name)

	setCustomerId(customer.id)
  
	//setsubcategoryId(customer.id)

	setbusinessId(customer.BusinessId)
  
	setPhone_no(customer.phone_no)

  
	// setsubcategory_name(wordEntered)
	

   }

const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);


  return (
    <div class="tab-pane" id="tab-81">

	{/** <div class="row">
       
        {productsList.map((value, key) => {
            return (
        <div class="col-xl-6 col-lg-12 col-md-12">
            <div class="card border p-0 over-flow-hidden">
                <div class="media card-body media-xs overflow-visible ">
                    <span class="avatar cover-image avatar-md brround bg-pink me-3">LQ</span>
                    <div class="media-body valign-middle mt-0">
                        <a href="" class="fw-semibold text-dark">{value.name}</a>
                        <p class="text-muted mb-0">{value.price}</p>
                    </div>
                    <div class="media-body valign-middle text-end overflow-visible mt-1">
                        <button class="btn btn-primary" onClick={() => {
                            addToCart(value.name,value.quantity,value.price);
                              }} type="button">Sell</button>
                    </div>
                </div>
            </div>
        </div>
        )
    })}
        
       
    <ToastContainer/>
     
    </div> */}
   

    <div class="row">
					<div class="col-md-12 col-xl-8">
						<div class="card">
							<div class="card-body">
								<div class="product-details table-responsive text-nowrap">

								{cart.items.map( (currentProduct, idx) => (
									<CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} orderId={randomNo}></CartProduct>
								))}
	
								<h1>Total: {cart.getTotalCost().toFixed(2)}</h1>


								{/**<table class="table table-bordered table-hover mb-0 text-nowrap">
										<thead>
											<tr>
												<th>Product</th>
												<th class="w-150">Quantity</th>
												<th >Price</th>
												<th >Action</th>
											</tr>
										</thead>
										<tbody>

                                        {cartList.map((value,key)=>{

                                            return (
											<tr>
												<td>
													<div class="media">
														<div class="card-aside-img">
															<img src="../assets/img/ecommerce/01.jpg" alt="img" class="h-60 w-60"/>
														</div>
														<div class="media-body">
															<div class="card-item-desc mt-0">
																<h6 class="font-weight-semibold mt-0 text-uppercase">{value.name}</h6>
																<dl class="card-item-desc-1">
																  <dt>Size: </dt>
																  <dd>XXL</dd>
																</dl>
																<dl class="card-item-desc-1">
																  <dt>Color: </dt>
																  <dd>Green and Black color</dd>
																</dl>
															</div>
														</div>
													</div>
												</td>
												<td>
													<div class="form-group">
														<select name="quantity" id="select-countries" class="form-control form-select select2">
															<option value="1" selected>1</option>
															<option value="2">2</option>
															<option value="3" >3</option>
															<option value="4">4</option>
														</select>
													</div>
												</td>
												<td>{value.price}</td>
												<td>
													<a class="btn btn-danger btn-sm text-white" data-bs-toggle="tooltip" data-bs-original-title="Delete"><i class="fe fe-trash"></i></a>
													<a class="btn btn-info btn-sm text-white" data-bs-toggle="tooltip" data-bs-original-title="Save to Wishlist"><i class="fe fe-heart"></i></a>
												</td>
											</tr>

                                            
                                    )




                                })}
											
										</tbody>
									</table> */}


									
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-12 col-xl-4">
						<div class="card">
							<div class="card-header pb-0">
								<h3 class="card-title mb-0">Customer Details</h3>
							</div>
							<div class="card-body">

							<Button onClick={handleShow}>Cart ({productsCount} Items)</Button>

							<Button onClick={handleShowCustomerModal}>+ customer</Button>
								
							</div>
						</div>

					<div class="col-lg-12">
						<div class="card">
							<div class="card-header pb-0">
								<div class="card-title mb-0">Order Summery</div>

							</div>
							<div class="card-body">
								
								<div class="table-responsive">
									<table class="table table-bordered">
										<tbody>
											<tr>
												<td>Subtotal</td>
												<td class="text-end">Ksh.{cart.getTotalCost().toFixed(2)}</td>
											</tr>
											<tr>
												<td><span>Totals</span></td>
												<td class="text-end text-muted"><span>{cart.getTotalCost().toFixed(2)}</span></td>
											</tr>
											<tr>
												<td><span>Order Total</span></td>
												<td><h2 class="price text-end mb-0">{cart.getTotalCost().toFixed(2)}</h2></td>
											</tr>
										</tbody>
									</table>
								</div>
								<form class="text-center">

								{!isLoading &&  <Button variant="success" onClick={checkout}>
                                Sale Now!
                            </Button>
	}  {isLoading &&
		<button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled><div class="spinner-grow spinner-grow-sm me-2" role="status">
		<span class="visually-hidden">Loading...</span>
	</div>Saving Infor</button>
	  }



								
									
									<button class="btn btn-success me-sm-3 me-1" type="submit" value="Continue Shopping">New Order</button>
								</form>
							</div>
						</div>
					</div>
					<ToastContainer/>
					</div>
				</div>

				<Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ordered Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map( (currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} orderId={randomNo}></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

						


		{!isLoading &&  <Button variant="success" onClick={checkout}>
                                Sale Now!
                            </Button>
	}  {isLoading &&
		<button type="submit" class="btn btn-primary me-sm-3 me-1" title="Save" disabled><div class="spinner-grow spinner-grow-sm me-2" role="status">
		<span class="visually-hidden">Loading...</span>
	</div>Saving Infor</button>
	  }
                        </>
                    :
                        <h1>There are no items in your cart!</h1>
                    }
                </Modal.Body>
            </Modal>


			<Modal show={showCustomerModal} onHide={handleCloseCustomerModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>


						<div class="form-group mb-4">
								<div class=" gutters-xs">
								
								<p class="mg-b-10">Order Id: {orderNo}</p>
								<Button onClick={handleNewCustomer}>+ New customer</Button>
											
                                    {!newCustomer &&
										<div class="form-group mb-0">
									<div class="form-group">
									<label class="form-label mt-4 fs-15">Select Customer</label>
										<select name="alabama" onChange={handleSubCategorySelect}
										
										  class="form-control select2-no-search">

										  
											<option label="Choose one"></option>
											{customersList.map((value, key) => {
												return (
											<option value={value.id}>{value.name}</option>
											
											)})}
											
											
											
										</select>
									</div>
									</div>


									
									}
									

									<p class="mg-b-10">Customer Name</p>

										

											<div class="form-group mb-0">
										<div class="form-group">
											<input type="text" class="form-control" id="postal" value={name} onChange={(event) => {
												setName(event.target.value);
											  }} placeholder="Customer Name"/>
										</div>
									</div>

									<div class="form-group mb-0">
										<div class="form-group">
											<input type="text" class="form-control" id="postal" value={phone_no} onChange={(event) => {
												setPhone_no(event.target.value);
											  }} placeholder="Phone No."/>
										</div>
									</div>

									
									<div class="form-group mb-0">
									<div class="form-group">
										<input type="text" class="form-control" id="postal" onChange={(event) => {
											setAmountPaid(event.target.value);
										  }} placeholder="Amount Paid"/>
									</div>
								</div>
											
									</div>

									{/**
									<label class="form-label mt-4 fs-15">Purchase Type</label>
									<div class="gutters-xs">
										<select name="alabama" onChange={(event) => {
											setpurchase_type(event.target.value);
										  }} 
										  class="form-control select2-no-search">
											<option label="Choose one"></option>
											<option value="">Cash</option>
											<option value="Alabama">Mpesa</option>
											<option value="Alaska">Credit</option>
											
											
										</select>
									</div> */}
								
									
								</div>
								<div class="form-footer mt-2">

								{!isLoading && !newCustomer && <button type="submit"
								onClick={() => {
									saleItems();
								  }}
								
								
								class="btn btn-primary">Save</button>

							} 


							{!isLoading && newCustomer && <button type="submit"
								onClick={() => {
									saleItems();
								  }}
								
								
								class="btn btn-primary">Save Customer</button>

							} 






							{isLoading &&
								<button type="submit" class="btn btn-primary btn-md btn-block mt-3 waves-effect" title="Save" disabled> <i class="fas fa-sync fa-spin"></i>Saving Infor</button>
							}
									
								</div>
                           
                           

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

						


		
                        </>
                    :
                        <h1>There are no items in your cart!</h1>
                    }
                </Modal.Body>
            </Modal>


</div>
  )
}

export default POSComponent