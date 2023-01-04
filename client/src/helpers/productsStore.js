// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to


const productsArray = [
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        title: "Gilbey's",
        price: 250
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        title: "Black Lebel",
        price: 4000
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvyIcJ7to",
        title: "Chrome Gin",
        price: 250
    }, 
    {
        id: "price_1LnUUoDM1jwCEz8OvzIcJ7to",
        title: "Chrome Gin Mzinga",
        price: 650
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvdIcJ7to",
        title: "Konyagi Quater",
        price: 300
    }
];

function getProductData(id) {
   
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };