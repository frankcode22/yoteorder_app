import {useEffect,useState,useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import {productsArray} from '../../../helpers/productsStore';
import DataContext from '../../../helpers/DataContext';
//import ProductCard from './ProductCard';
import ProductCardCommon from './ProductCardCommon';
import { ProductsContext } from '../../../helpers/ProductsContext';
function CommonProductsStore() {

    const {productsList1, setProductsList1} = useContext(DataContext);

    const [startquantity, setStartQuantity] = useState(0);

   // const [price, setPrice] = useState('initial value');

    const cart = useContext(ProductsContext);

    

    


    

   

    //console.log('MY STOCK DATA')
   // console.log(productsList1)
    return (


        <div class="row">
        {productsArray.map((product, idx) => (
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 alert wishlist-card" key={product.id}>

        <ProductCardCommon  product={product} startquantity={startquantity} setStartQuantity={setStartQuantity} handleQuantityChange={cart.handleQuantityChange}  handleInputChange={cart.handleInputChange}></ProductCardCommon>

        {/* <ProductCard product={product}/> */}
        </div>
        ))}

        </div>
       

         
    )
}

export default CommonProductsStore