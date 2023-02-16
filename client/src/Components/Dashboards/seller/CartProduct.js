import React from 'react'

import { useContext } from "react";

import Button from 'react-bootstrap/Button';
import { CartContext } from "../../../helpers/CartContext";
import { ProductsContext } from '../../../helpers/ProductsContext';


import { getProductData } from '../../../helpers/productsStore';

function CartProduct(props) {
    //const cart = useContext(CartContext);

    const cart = useContext(ProductsContext);

    const id = props.id;
    const quantity = props.quantity;

    const bId = props.bId;
    //const orderId = props.orderId;
   // const productData = cart.getProductData(id);

    const productData = getProductData(id);

   // console.log('DATA FETCHED FROM CartProduct Component')

   // console.log(productData)

    return (
        <>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>

          
         
            {/* <p>Ksh.{ (quantity * productData.price).toFixed(2) }</p> */}
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct