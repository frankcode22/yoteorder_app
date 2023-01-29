import React from 'react'

import {useEffect,useState,useContext} from 'react';

import {useParams} from "react-router-dom"


//import axios from 'axios';

import API from '../../../services';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useNavigate,Link} from "react-router-dom";

import { Helmet } from "react-helmet";


import { Modal, Button } from "react-bootstrap";

//import ContentLoader from '../../../utils/ContentLoader';

import {getProductData } from '../../../helpers/productsStore';

import DivLoader from '../../../utils/DivLoader';

import { BusinessDetailsContext } from '../../../helpers/BusinessDetailsContext';
import DataContext from '../../../helpers/DataContext';

import { CartContext } from "../../../helpers/CartContext";
import CartProduct from './CartProduct';



const data = [
    {
      id: "1",
      name: "cargo",
      type: "transport",
      emoji: "🐶",
      keywords: ["transport", "uber", "cargo"]
    },
    {
      id: "2",
      name: "automotive",
      type: "automotive",
      emoji: "🐱",
      keywords: ["automotive", "repair","mechanic"]
    },
    {
      id: "3",
      name: "foxy",
      type: "fox",
      emoji: "🦊",
      keywords: ["fox", "inteligent"]
    },
    { id: "4", name: "sushi", type: "fish", emoji: "🐟", keywords: [] }
  ];





function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function OrdersComponent({data})  {

    const {businessDetails,setBusinessDetails} = useContext(DataContext);


    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");


    

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
    const [showUpdateButton, setShowUpdateButton] = useState(false);

    const {productsList1, setProductsList1 } = useContext(DataContext);

    const [productsList, setProductsList] = useState([]);

    const [cartList, setCartList] = useState([]);


    const [customerBill, setCustomerBill] = useState([]);

    const [sales, setSales] = useState([]);

    //const [ordersList, setOrdersList] = useState([]);
    const [business_name, setbusiness_name] = useState("");
	

	const [randomNo, setRandomNo] = useState(0);
    const [notifications, setNotifications] = useState([]);

    const [isBusinessSet,setIsBusinessSet] = useState(false);

    const [displayBill,setDisplayBill] = useState(false);


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

    const [errorMessage, setErrorMessage] = useState("");

    const [isDivLoading, setIsDivLoading] = useState(false);
    const [ordersList, setOrdersList] = useState([]);



    const [showPOS, setShowPOS] = useState(true);

    const [showSales, setShowSales] = useState(false);

    const [showOrders, setShowOrders] = useState(false);



    let history = useNavigate();


    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
   

    

    const [isLoading,setLoading]=useState(false);


    
  useEffect(()=>{

   // setLat(userPos.lat)

   // setLng(userPos.long)


    let buss_status=localStorage.getItem('business_set')

     console.log("BUSS STATUS",buss_status)
    
   // setIsBusinessSet(buss_status)


   


   setIsDivLoading(true);






  



    API.get('users/mybizz', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
        setTimeout(() => {
    
        if(response.data.my_buss!=null){
    
    setIsBusinessSet(true)
    
    setbusinessId(response.data.my_buss.id);
    
    //setServicesList(response.data.Services);
    
    //setStaffList(response.data.my_buss.Staffs);
    
    //setbusiness_name(response.data.my_buss.business_name);
    
    setBussSetup(true);
    
    
    //setOrdersList(response.data.my_buss.Orders)
    
    //setSales(response.data.my_buss.RetailerSales)
    
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


    
           //axios.get("https://yoteorder-server.herokuapp.com/customer/mycustomers").then((response) => {
          API.get("customer/mycustomers").then((response) => {
          setCustomersList(response.data);
          })


          console.log("HI VENDOR ALL MY CUSTOMERS FROM CONTEXT:",businessDetails);
    
    
       if(businessDetails.my_buss!=null){

        //setBusinessId(businessDetails.my_buss.id);

        setbusiness_name(businessDetails.my_buss.business_name)
 
    
        setTimeout(() => {
            
    
        //setVendorsList(businessDetails.my_buss.Customers)
        setCustomersList(businessDetails.my_buss.Customers)
        setNotifications(businessDetails.my_buss.Notifications)
        setIsDivLoading(false)  
            
         
        }, 3000);
    
       
    
    }
    else{
    
        setErrorMessage("Unable to fetch your bizz details");
        setIsDivLoading(false);
    }
    

  




},[businessDetails])



const handleChange = e =>{

    setSearchTerm(e.target.value);


    // const results = ordersList.filter(o => o.keywords.includes(searchTerm));
    // setSearchResults(results);

   // console.log('THE SEARCH RESULT IS',searchResults)

} 



const searchOrder =() =>{


    //const jeepAutos = ordersList.filter( (auto) => auto.orderId.includes('9092'))
//  this.setState({
//   filteredAutos: jeepAutos
//  })

 //setSearchResults(jeepAutos);


 //console.log('THE SEARCH RESULT IS',jeepAutos)


 //const newFilter = ordersList.filter((value) => {
   // return value.item_name.toLowerCase().includes(searchTerm.toLowerCase());
 // });

 //const num = 9092;


    //const results = ordersList.filter(o => o.String(num).includes('9092'));
    //setSearchResults(results);

     console.log('THE SEARCH RESULT IS',ordersList)

} 



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


// const handleSubCategorySelect= async (event) => {

// 	const selectedOption=event.target.value
  
  
// 	const customer = customersList.find(post => (post.id).toString() === selectedOption);
  
// 	// setUserId(JSON.stringify(customer))
  
// 	setName(customer.name)
  
// 	//setsubcategoryId(customer.id)
  
// 	setPhone_no(customer.phone_no)

  
// 	// setsubcategory_name(wordEntered)
	

//    }


const handleCustomerSelect= async (event) => {

	const selectedOption=event.target.value
  
  
	const customer = customersList.find(post => (post.id).toString() === selectedOption);
  
	// setUserId(JSON.stringify(customer))

    console.log('CUSTOMER ID IS',customer.id)

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

	setCustomerId(customer.id)
  
	//setsubcategoryId(customer.id)

	setbusinessId(customer.BusinessId)
  
	setPhone_no(customer.phone_no)

  
	// setsubcategory_name(wordEntered)
	

   }


   const displayPOS=()=>{

    setShowPOS(true)
    setShowOrders(false)
    setShowSales(false)
    



 }

 const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    //setHideSearchBtn(false)
  };


const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);


const loadOrdersContent=(



    <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap table-striped ">
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

    {data.map((value, key) => {
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

            <td><span class="badge bg-info-gradient">{value.price*value.quantity_ordered}</span></td>

           
            <td>{value.customer_phone_no}</td>
            <td>{value.createdAt}</td>
          
           
            <td class="text-center align-middle">
            <div class="btn-group align-top">
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
   
   
</div>
    </div>
</div>

<div class="row">
<div class="col mb-3">

<input class="form-control"
value={wordEntered}
onChange={handleFilter} type="text"/>
</div>

<div class="col mb-3">
<div className="results">
       
<ul class="list-group">

{searchResults &&
    searchResults.map(item =>
                                    
                                    <li key={item.id}>
                                    {item.name}
                                    </li>)}
                                </ul>
</div>
<a class="btn btn-primary btn-block float-end my-2" href="javascript:void(0);" onClick={searchOrder}><i class="fa fa-plus-square me-2"></i>Search</a>
</div>
</div>
   

    <div class="row">
					<div class="col-md-12 col-xl-12">
						<div class="card">



							
                            {!displayBill &&  <div class="table-responsive mb-0">
                                   




                            {isDivLoading ? <DivLoader/>: loadOrdersContent}

                            {errorMessage && 
  
  
  
  
                                <div class="col-sm-12 border">
                                <h3 class="card-title">{errorMessage}</h3>
                            
                                
                                
                                
                           </div>}


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
                          <td>{value.createdAt}</td>


                          <td class="text-center align-middle">
                              <div class="btn-group align-top">
                                  <button type="button" class="btn btn-success"><i class="fe fe-edit me-2"></i>Edit</button>

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
                           
           











                        </div> }




                        {displayBill &&  <div class="table-responsive mb-0">


                        <table class="table table-hover table-bordered mb-0 text-md-nowrap text-lg-nowrap text-xl-nowrap table-striped ">
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
                                        <td>{value.createdAt}</td>
                  
                  
                                        <td class="text-center align-middle">
                                            <div class="btn-group align-top">
                                                <button type="button" class="btn btn-success"><i class="fe fe-edit me-2"></i>Edit</button>
                  
                                                <button type="button" class="btn btn-danger"><i class="fe fe-trash me-2"></i>Cancel</button>
                  
                  
                  
                  
                  
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                  
                  
                  
                  
                        </tbody>
                    </table>
                                   




                       
                        {errorMessage && 




                            <div class="col-sm-12 border">
                            <h3 class="card-title">{errorMessage}</h3>
                        
                            
                            
                            
                       </div>}


     
                       
       











                    </div> }
                                     





                                      
								
							
						</div>
					</div>
				
				</div>

				




</div>
  )
}

export default OrdersComponent