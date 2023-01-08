import { Card, Button, Form, Row, Col } from 'react-bootstrap';
// import { CartContext } from '../CartContext';
import API from '../../../services';
import {CartContext} from '../../../helpers/CartContext';
import DataContext from '../../../helpers/DataContext';
import {useEffect,useContext,useState } from 'react';

function ProductCard(props) { // props.product is the product we are selling

   
    const product = props.product;
    const {businessDetails,setBusinessDetails} = useContext(DataContext);
    const cart = useContext(CartContext);
    const [bussId, setbussId] = useState('');

    
 
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);

    useEffect(()=>{

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


    },[bussId]);

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
                           
                            
                
                            <a class="shop-title fs-18">{product.name}</a>
                            
                        </div>
                    </div>
                    
                    <div>
                   
                        <p class="shop-description fs-13 text-muted mt-2 mb-0"><span class="badge bg-success">In Stock: {product.quantity}</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer text-center">
            <div class="text-center px-2">

            { productQuantity > 0 ?
                <>
                    <Form>
                    <a class="shop-title fs-18">In Cart: {productQuantity}</a>

                               <div class="btn-icon-list">

                               <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>

                               <Button sm="6" onClick={() => cart.addOneToCart(product.id,product.price,bussId)} className="mx-2">+</Button>
                           
												
												
												
											</div>

                    
												
												
                       
                        
                    </Form>
                    
                    <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                </>
                :
                <Button variant="primary" onClick={() => cart.addOneToCart(product.id,product.price,bussId)}>Add To Cart</Button>
            }


                
            </div>
         </div>
    </div>
    



          
  
    )
}

export default ProductCard;