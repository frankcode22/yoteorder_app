import {useEffect,useState,useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import {productsArray} from '../../../helpers/productsStore';
import DataContext from '../../../helpers/DataContext';
//import ProductCard from './ProductCard';
import ProductCardCommon from './ProductCardCommon';

function CommonProductsStore() {

    const {productsList1, setProductsList1} = useContext(DataContext);


    

   

    //console.log('MY STOCK DATA')
   // console.log(productsList1)
    return (


        <div class="row">
        {productsArray.map((product, idx) => (
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 alert wishlist-card">

        <ProductCardCommon product={product}></ProductCardCommon>

        {/* <ProductCard product={product}/> */}
        </div>
        ))}

        </div>
       

         
    )
}

export default CommonProductsStore