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

import DivLoader from '../../../utils/DivLoader';

// import { productsArray } from '../../../helpers/productsStore';


import { CartContext } from "../../../helpers/CartContext";
import CartProduct from './CartProduct';

function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function CustomerBills() {

    const {businessDetails,setBusinessDetails} = useContext(DataContext);

    //const {userPos, setUserPos} = useContext(LocationDataContextInit);
  
    //const {position, setPosition} = useContext(LocationDataContext);

    const [businessId, setbusinessId] = useState('');

    const [name, setName] = useState('');

    //const [amountPaid, setAmountPaid] = useState('');

    


	const [phone_no, setPhone_no] = useState("");

	const [amountPaid, setAmountPaid] = useState("");


    const [initialAmountPaid, setInitialAmountPaid] = useState("");




	

	const [purchase_type, setpurchase_type] = useState('');

    const [quantity_ordered, setquantity_ordered] = useState('');

    const [price, setPrice] = useState('');

	const [customerId, setCustomerId] = useState('');

	
	

	const [orderNo,setOrderNo] = useState('');
    const [showUpdateButton, setShowUpdateButton] = useState(false);

    const {productsList1, setProductsList1 } = useContext(DataContext);

    const [productsList, setProductsList] = useState([]);

    const [cartList, setCartList] = useState([]);

    const [sales, setSales] = useState([]);

    
    // const [bussSetup,setBussSetup]=useState(false);

    const [isBusinessSet,setIsBusinessSet] = useState(false);

	

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

 


    const [customersList, setCustomersList] = useState([]);
    const [bussSetup,setBussSetup]=useState(false);

    const [business_name, setbusiness_name] = useState("");
    const [business_type, setbusiness_type] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const [isDivLoading, setIsDivLoading] = useState(false);
    const [ordersList, setOrdersList] = useState([]);
    const [customersCount, setCustomersCount] = useState(0);


    const [notifications, setNotifications] = useState([]);

    const [customerBill, setCustomerBill] = useState([]);

    

    const [displayBill,setDisplayBill] = useState(false);







    

    const [isLoading,setLoading]=useState(false);


    
  useEffect(()=>{

   // setLat(userPos.lat)

   // setLng(userPos.long)


    let buss_status=localStorage.getItem('business_set')

     console.log("BUSS STATUS",buss_status)
    
   // setIsBusinessSet(buss_status)


   setIsDivLoading(true);


   
   API.get('sales/allbills', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
    setTimeout(() => {

    if(response.data.my_buss!=null){

setIsBusinessSet(true)

setbusinessId(response.data.my_buss.RetailerId);

//setServicesList(response.data.Services);

//setStaffList(response.data.my_buss.Staffs);

//setbusiness_name(response.data.my_buss.business_name);

setBussSetup(true);

//setOrdersList(response.data.Orders)

setSales(response.data.my_buss)

//setCustomersCount(response.data.my_buss.Customers.length)

//setcustomer_contacts(response.data.Customers.)



}
else{

setIsBusinessSet(false)
setbusinessId(0)
setBussSetup(false);
setbusiness_name('nobuzz')
//setOrdersList([])
}


// setSeller_name(response.data.Users);
setIsDivLoading(false)   // Hide loading screen 
// toast.info('Product saved successfully');
}, 1000);




}).catch(() => {
setErrorMessage("Unable to fetch Latest Orders.Check your Internet connection please");
setIsDivLoading(false);
});



   





        




           
      



    
    
        //    //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
        //   API.get("customer/mycustomers").then((response) => {
        //   setCustomersList(response.data);
        //   })
    

       




},[businessDetails])



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
    BusinessId:businessId,
   
}


 const saleItems=()=>{

	setLoading(true);
	

 	API.post('sales',sale_data).then((res)=>{
    
       // console.log("THE CUSTOMER DATA IS->"+res.data)

    
         //setOrderId(res.data.id)
        setCustomerId(res.data.id)

		setName(res.data.name)
		setPhone_no(res.data.phone_no)

		
		setTimeout(() => {
			setLoading(false);
			toast.info('Sale Made');
		}, 3000);

		

		

    })
 }

// const saveCustomer=()=>{

	

    
//         //setOrderId(res.data.id)
//         // setCustomerId(res.data.id)

// 		setName("Kamau")
// 		setPhone_no('0718654231')
// 		setbusinessId(businessId)

// 		setRandomNo(randomNumberInRange(1, 10000));

   
// }






// const checkout = async () => {

// 	setLoading(true);

// 	//saveCustomer()


// 	await fetch('https://apibackend.patamtaani.com/api/order/checkout', {
// 		method: "POST",
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({items: cart.items})
// 	}).then((response) => {
// 		//console.log(response.order_no)
// 		//setOrderNo(response.order_no)

// 		setTimeout(() => {
// 			setLoading(false);
// 			toast.success('Saved');
// 			//setIsBusinessSet(true)
// 		}, 1500);
		
// 		return response.json();
// 	}).then((response) => {
// 		console.log(response.order_no)

// 		setOrderNo(response.order_no)

// 		setTimeout(() => {
// 			setLoading(false);
// 			toast.success('Saved');
// 			//setIsBusinessSet(true)
// 		}, 1500);


		
	
// 		if(response.url) {
// 			window.location.assign(response.url); // Forwarding user to Stripe
// 		}

// 	});





// }


const handleSubCategorySelect= async (event) => {

	const selectedOption=event.target.value
  
  
	const customer = customersList.find(post => (post.id).toString() === selectedOption);
  
	// setUserId(JSON.stringify(customer))
  
	setName(customer.name)
  
	//setsubcategoryId(customer.id)
  
	setPhone_no(customer.phone_no)

  
	// setsubcategory_name(wordEntered)
	

   }

   const handleCustomerSelect= async (event) => {

	const selectedOption=event.target.value
  
  
	const customer = customersList.find(post => (post.id).toString() === selectedOption);
  
	// setUserId(JSON.stringify(customer))

    console.log('CUSTOMER ID IS',customer.id)

    setCustomerId(customer.id)

    API.get('sales/getcustomerbill/'+customer.id).then((response) => {
        // axios.get('https://yoteorder-server.herokuapp.com/business/bestRated').then((response) => {

       

          console.log("Customer Bill"+response.data)

         
          setTimeout(() => {

              setCustomerBill(response.data)
             // setBussinessList(response.data)
             setDisplayBill(true)

           
          }, 1000);

          //setSeller_name(response.data.Users.first_name)
          
      }).catch((error) => {
          

          console.log("ERROR OCCURED WHEN FETCHING DATA"+error)
        
       });



  // console.log('CUSTOMER BILL IS',bill)


   //setCustomerBill(bill)


  
	setName(customer.name)

	
  
	//setsubcategoryId(customer.id)

	setbusinessId(customer.BusinessId)
  
	setPhone_no(customer.phone_no)

  
	// setsubcategory_name(wordEntered)
	

   }

   const getSelectedCustomerBill= (cId,orderId,amntPaid) => {

	
    //cId=customer.id

    setInitialAmountPaid(amntPaid)

    console.log("Amount Paid So Far "+amntPaid)

    API.get('sales/getselectedcustomerbill/'+cId+'/'+orderId).then((response) => {
        // axios.get('https://yoteorder-server.herokuapp.com/business/bestRated').then((response) => {

       

          console.log("Customer Bill"+response.data)

         
          setTimeout(() => {

              setCustomerBill(response.data)
             // setBussinessList(response.data)
             setDisplayBill(true)

           
          }, 1000);

          //setSeller_name(response.data.Users.first_name)
          
      }).catch((error) => {
          

          console.log("ERROR OCCURED WHEN FETCHING DATA"+error)
        
       });



  // console.log('CUSTOMER BILL IS',bill)


   //setCustomerBill(bill)


  
	

   }



   const payCustomerBill= (cId,orderId,total) => {

    let total_paid=initialAmountPaid+amountPaid;

    let bal=total-total_paid;

    const data={
        balance:bal,
        amount_paid:total_paid,
        
    }

	
    //cId=customer.id

    API.put('sales/paycustomerbill/'+cId+'/'+orderId,data).then((response) => {
        // axios.get('https://yoteorder-server.herokuapp.com/business/bestRated').then((response) => {

       

          console.log("Customer Bill"+response.data)

         
          setTimeout(() => {

              setCustomerBill(response.data)
             // setBussinessList(response.data)
             setDisplayBill(true)

           
          }, 1000);

          //setSeller_name(response.data.Users.first_name)
          
      }).catch((error) => {
          

          console.log("ERROR OCCURED WHEN FETCHING DATA"+error)
        
       });



  // console.log('CUSTOMER BILL IS',bill)


   //setCustomerBill(bill)


  
	

   }


const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);


const loadOrdersContent=(

    <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap table-striped ">
    <thead>
        <tr>
            <th>#</th>
            <th>Order Id</th>
            <th>Total</th>
            <th>Amount Paid</th>
            <th>Balance</th>
            <th>Customer Contacts</th>
            <th>Date</th>
            <th>Actions</th>
           
        </tr>
    </thead>
    <tbody>

    {sales.map((value, key) => {
      return (
        <tr>
        <td>
                <div class="project-contain">
                    <h6 class="mb-1 tx-13">{key}</h6>
                </div>
            </td>
            <td>
                <div class="project-contain">
                    <h6 class="mb-1 tx-13">{value.orderId}</h6>
                </div>
            </td>
            <td>{value.total}</td>
            <td><span class="badge bg-primary-gradient">{value.amount_paid}</span></td>
           
            <td><span class="badge bg-warning">{value.balance}</span></td>
            <td>{value.customer_phone_no}</td>
            <td>{value.createdAt}</td>
          
           
            <td class="text-center align-middle">
            <div class="btn-group align-top">


            <button type="button" onClick={() => {
                getSelectedCustomerBill(value.CustomerId,value.orderId,value.amount_paid);
                  }}  class="btn btn-success"><i class="fe fe-eye me-2"></i>View Bill</button>
            <button type="button" class="btn btn-success"><i class="fe fe-edit me-2"></i>Edit</button>


            <button type="button" class="btn btn-danger"><i class="fe fe-trash me-2"></i>Cancel</button>
            
               
            </div>
        </td>
        </tr>
    )
    })}
       
        
        
    
    </tbody>
</table>


)


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


    <div class="card">
    <div class="card-body p-2">
    <div class="row">
    <div class="col-xl-5 col-lg-8 col-md-8 col-sm-8">
        <div class="input-group d-flex w-100 float-start">
        <select name="alabama" onChange={handleCustomerSelect}
										
        class="form-control select2-no-search">

        
          <option label="Select Customer"></option>
          {customersList.map((value, key) => {
              return (
          <option value={value.id}>{value.name}</option>
          
          )})}
          
          
          
      </select>
            <button class="btn input-group-text bg-transparent border-start-0 text-muted my-2">
                <i class="fe fe-search text-muted" aria-hidden="true"></i>
            </button>
        </div>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
        <ul class="nav item2-gl-menu float-end my-2">
            <li class="border-end"><a href="#tab-11" class="show active" data-bs-toggle="tab" title="List style"><i class="fa fa-th"></i></a></li>
            <li><a href="#tab-12" data-bs-toggle="tab" class="" title="Grid"><i class="fa fa-list"></i></a></li>
        </ul>
    </div>
    <div class="col-xl-3 col-lg-12">
   
        <a class="btn btn-primary btn-block float-end my-2" href="javascript:void(0);"><i class="fa fa-plus-square me-2"></i>New Order</a>
    </div>
</div>
    </div>
</div>
   

    <div class="row">
					<div class="col-md-12 col-xl-12">
						<div class="card">
							
                            
                                      <div class="table-responsive mb-0">
                                   




                                      {isDivLoading ? <DivLoader/>: loadOrdersContent}

                                      {errorMessage && 
            
            
            
            
                                          <div class="col-sm-12 border">
                                          <h3 class="card-title">{errorMessage}</h3>
                                      
                                          
                                          
                                          
                                     </div>}














                                  </div>
                                      
								
							
						</div>
					</div>
				
				</div>


                <div class="card">
                <div class="card-body p-2">
                <div class="row">

                <div class="col-md-12 col-xl-12">
                {displayBill &&  <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap table-striped ">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Order Id</th>
                        <th>Item Name</th>
                        <th>Quantity Ordered</th>
                        <th>Price Per Item</th>
                        <th>Total Cost</th>
                        <th>Customer</th>
                        <th>Time</th>
                        <th>Actions</th>
      
                    </tr>
                </thead>
                <tbody>
      
                    {customerBill.map((value, key) => {
                        return (
                            <tr>
                                <td>
                                    <div class="project-contain">
                                        <h6 class="mb-1 tx-13">{key}</h6>
                                    </div>
                                </td>
                                <td>
                                    <div class="project-contain">
                                        <h6 class="mb-1 tx-13">{value.orderId}</h6>
                                    </div>
                                </td>
                                <td>{value.item_name}</td>
                                <td><span class="badge bg-primary-gradient">{value.quantity_ordered}</span></td>
      
                                <td><span class="badge bg-warning-gradient">{value.price}</span></td>
      
                                <td><span class="badge bg-info-gradient">{value.price * value.quantity_ordered}</span></td>
      
      
                                <td>{value.customer_phone_no}</td>
                                <td><input type='number' name='amount' class="form-control"  onChange={(event) => {
                                    setAmountPaid(event.target.value);
                                  }} id='amount'/></td>
      
      
                                <td class="text-center align-middle">
                                    <div class="btn-group align-top">
                                        <button type="button"onClick={() => {
                                            payCustomerBill(value.CustomerId,value.orderId);
                                              }} class="btn btn-success"><i class="fe fe-money me-2"></i>Pay Bill</button>
      
                                        <button type="button" class="btn btn-danger"><i class="fe fe-trash me-2"></i>Cancel</button>
      
      
      
      
      
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
      
      
      
      
                </tbody>
      
                <tfoot>
                
                </tfoot>
            </table>}
                
                
                
                </div>

                
             
               
               
            </div>
                </div>
            </div>

				

			

</div>
  )
}

export default CustomerBills