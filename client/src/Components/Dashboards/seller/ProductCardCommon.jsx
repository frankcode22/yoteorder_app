import { Card, Button, Form, Row, Col } from 'react-bootstrap';
// import { CartContext } from '../CartContext';
import API from '../../../services';
//import {CartContext} from '../../../helpers/CartContext';
import DataContext from '../../../helpers/DataContext';
import {useEffect,useContext,useState } from 'react';
import { ProductsContext } from '../../../helpers/ProductsContext';

function ProductCardCommon(props) { // props.product is the product we are selling

   
    const product = props.product;
    const {businessDetails,setBusinessDetails} = useContext(DataContext);
   // const cart = useContext(CartContext);
    const cart = useContext(ProductsContext);
    const [bussId, setbussId] = useState('');

    const [supplierId, setSupplierId] = useState('');


    const [showCounters, setShowCounters] = useState(false);


 

     const [showCancelBtn, setShowCancelBtn] = useState(false);




    

    
 
    const productQuantity = cart.getProductQuantity(product.id);

    const itemsToOrder = cart.getItemQuantity(product.id);

    console.log(cart.items);

    console.log('ITEMS ADDED TO STOCK INVENTORY',cart.items);

    useEffect(()=>{


        //console.log('THE CARD STATUS IS',cart.displayCard(false));

        API.get('users/mybizz', { headers: { accessToken: localStorage.getItem("accessToken") } }).then((response) => {
    
            if(response.data.my_buss!=null){
    
           
    
                setbussId(response.data.my_buss.id);
    
             
    
            
          
            }
            else{
          
             // setIsBusinessSet(false)
             //setbusinessId(0)
             /// setBussSetup(false);
             // setbusiness_name('nobuzz')
            }
        
            
             })

    console.log('THE CARD STATUS IS',cart.showCard);

    },[bussId]);



    const displayCounters=()=>{

        setShowCounters(true)

        setShowCancelBtn(true)
        cart.displayCard(false)

    }

   const cancelAction=()=>{

        setShowCounters(false)

        setShowCancelBtn(false)

    }

    return (
       


        <div class="card item-card ">
        <div class="card-body pb-0">
        <div class="d-flex">
											<h4 class="h5 w-50 font-weight-bold text-danger">Ksh.{product.price} <span class="text-secondary font-weight-normal tx-13 ms-1 prev-price">Ksh.{product.price}</span></h4>
											<span class="tx-15 ms-auto">
												<i class="ion ion-md-star text-warning"></i>
												<i class="ion ion-md-star text-warning"></i>
												<i class="ion ion-md-star text-warning"></i>
												<i class="ion ion-md-star-half text-warning"></i>
												<i class="ion ion-md-star-outline text-warning"></i>
											</span>
										</div>
            <div class="text-center zoom">
            {/**  <a href="products.html"><img class="w-100 rounded-5" src="../assets/img/ecommerce/01.jpg"  alt="img"/></a>*/}
               
            </div>
            <div class="card-body px-0 pb-3">
                <div class="row">
                    <div class="col">
                        <div class="cardtitle">
                           
                            
                
                            <a class="shop-title fs-18"> <h3 class="card-title mb-0">{product.title}</h3></a>

                           
                            
                        </div>
                    </div>
                    
                    <div>
                   
                    {product.quantity<10? <p class="shop-description fs-13 text-muted mt-2 mb-0"><span class="badge bg-danger">Quantity: {product.quantity}</span></p>

                    :<p class="shop-description fs-13 text-muted mt-2 mb-0"><span class="badge bg-success">Quantity: {product.quantity}</span></p>}
                    </div>

                    {/* <div>
                   
                    { product.quantity > 10 ? <></>
                    
                    : <> {!showCancelBtn && <button onClick={displayCounters} class="fs-13 mt-2 mb-0"><span class="badge bg-warning">Add to Cart</span></button>}
                   
                    {showCancelBtn && <button onClick={cancelAction} class="fs-13 mt-2 mb-0"><span class="badge bg-warning">Cancel</span></button>}
                   </>
                   }
                  </div> */}


                    
              


                  

                

              

                    
                </div>
            </div>
        </div>
        <div class="card-footer text-center">
            <div class="text-center px-2">

            { productQuantity > 0 ?
                <>
                    <Form>
                    <a class="shop-title fs-18">Quantity: {productQuantity}</a>

                    <div class="form-group">
            <label for="dobWithTitle" class="form-label">Quantity</label>
            <input type="number" id="price" class="form-control"

            value={productQuantity}

                // onChange={(event) => {
                //     setQuantity(event.target.value);
                // }}

            />
         
            </div>

                               <div class="btn-icon-list">

                               <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>

                               <Button sm="6" onClick={() => cart.addOneToCart(product.id,product.price,product.title,bussId)} className="mx-2">+</Button>
                           
												
												
												
											</div>

                    
												
												
                       
                        
                    </Form>
                    
                    <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove</Button>
                </>
                :
                <Button variant="primary" onClick={() => cart.addOneToCart(product.id,product.price,product.title,bussId)}><i class="fe fe-check"></i>Select</Button>
            }


                
            </div>
         </div>
    </div>
    



          
  
    )
}


export default ProductCardCommon