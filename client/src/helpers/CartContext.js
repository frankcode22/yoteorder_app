import { createContext, useContext,useState,useEffect } from "react";
import { productsArray, getProductData } from "./productsStore";

import DataContext from './DataContext';


export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},

    getItemQuantity: () => {},

    addOneToRetailerCart: () => {},
    removeOneFromRetailerCart: () => {},
    handleClick: () => {},

    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);

    const [cartItems, setCartItems] = useState([]);

    const {productsList1, setProductsList1 } = useContext(DataContext);

    const [productsList, setProductsList] = useState([]);

    const [errorMessage, setErrorMessage] = useState("");

    let audio = new Audio("assets/sounds/cash_reg_beep.mp3")
    
    // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]


    useEffect(()=>{



    console.log("YOUR PRODUCT LIST DETAILS  IS ",productsList1);
  
  
    if(productsList1!=null){
     

    

           setProductsList(productsList1)
          

   
   
     
   
     }
     else{
   
       setErrorMessage("Unable to fetch your products list.Kindly check your internet connection!!");
      // setIsDivLoading(false);
     }



   



},[productsList1]);






    
function getProductData(id) {
   
    let productData = productsList.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

       
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }


    function getItemQuantity(id) {
        const quantity = cartItems.find(product => product.id === id)?.quantity;

       
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }


    function getProductPrice(id) {
        const price = cartProducts.find(product => product.id === id)?.price;

       
        
        if (price === undefined) {
            return 0;
        }

        return price;
    }

    function addOneToCart(id,price,bId) {
        const quantity = getProductQuantity(id);

        //const price = getProductPrice(id);


        audio.play()

        if (quantity === 0) { // product is not in cart
          
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1,
                        price:price,
                        businessId:bId
                    }
                ]
            )


            setProductsList1(
                productsList.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )





        } else { // product is in cart
            // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )

            
            setProductsList1(
                productsList.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);
        audio.play()

        if(quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )

            setProductsList1(
                productsList.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }


    
    function addOneToRetailerCart(id,price,name,bId,sId) {
        const quantity = getItemQuantity(id);

        //const price = getProductPrice(id);


        audio.play()

        if (quantity === 0) { // product is not in cart
          
            setCartItems(
                [
                    ...cartItems,
                    {
                        id: id,
                        quantity: 1,
                        price:price,
                        name:name,
                        businessId:bId,
                        supplier:sId,
                    }
                ]
            )


           





        } else { // product is in cart
            // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
            setCartItems(
                cartItems.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )

            
            
        }
    }

    function removeOneFromRetailerCart(id) {
        const quantity = getItemQuantity(id);
        audio.play()

        if(quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartItems(
                cartItems.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )

           
        }
    }



    function handleClick(sId) {


       


        const nextShapes = cartItems.map(shape => {
        
            // Return a new circle 50px below
            return {
              ...shape,
              supplier: sId,
            };
          
        });
        // Re-render with the new array
        setCartItems(nextShapes);
      }



    function addSupplierDetails(id,price,name,bId,supplier) {
        const quantity = getItemQuantity(id);

        //const price = getProductPrice(id);


        audio.play()

        if (quantity === 0) { // product is not in cart
          
            setCartItems(
                [
                    ...cartItems,
                    {
                        id: id,
                        quantity:quantity,
                        price:price,
                        name:name,
                        businessId:bId,
                        supplier:supplier,
                    }
                ]
            )


           





        } else { // product is in cart
            // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
            setCartItems(
                cartItems.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )

            
            
        }
    }


    function deleteFromCart(id) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
        audio.play()
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })  
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        
        addOneToCart,
        removeOneFromCart,

        citems: cartItems,
        getItemQuantity,

        addOneToRetailerCart,
        removeOneFromRetailerCart,
        handleClick,

        deleteFromCart,
        getTotalCost,
        productsList1,
        productsList,
        getProductData

    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context