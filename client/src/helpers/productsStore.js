// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to


const productsArray = [
    {
        id: "001",
        title: "Gilbey's 250ml",
        quantity: 20,
        price: 550
    },
    {
        id: "002",
        title: "Gilbey's 500ml",
        quantity: 20,
        price: 750
    },
    {
        id: "003",
        title: "Gilbey's 750ml",
        quantity: 20,
        price: 1450
    },
    {
        id: "004",
        title: "Gilbey's 1Litre",
        quantity: 20,
        price: 1600
    },
    {
        id: "005",
        title: "Red Lebel 750ml",
        quantity: 10,
        price: 1800
    },
    {
        id: "006",
        title: "Red Lebel 1Litre",
        quantity: 10,
        price: 2500
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvyIcJ7to",
        title: "Chrome Gin 250ml",
        quantity: 10,
        price: 250
    }, 
    {
        id: "price_1LnUUoDM1jwCEz8OvzIcJ7to",
        title: "Chrome Gin 1Lite",
        quantity: 10,
        price: 650
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvdIcJ7to",
        title: "Chrome Vodka 250ml",
        quantity: 10,
        price: 300
    },

    {
        id: "price_1LnUUoDM1jwCEz8OvzIcJ7to",
        title: "Chrome Vodka 1Litre",
        quantity: 10,
        price: 650
    },
   


    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        title: "Tusker Lite Bottle",
        quantity: 10,
        price: 250
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        title: "Tusker Lite Can",
        quantity: 10,
        price: 250
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvyIcJ7to",
        title: "Tusker Cider Chupa",
        quantity: 10,
        price: 250
    }, 
    {
        id: "price_1LnUUoDM1jwCEz8xOvzIcJ7to",
        title: "Tusker Cider Can",
        quantity: 10,
        price: 250
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvyIcJ7to",
        title: "Guiness Chupa",
        quantity: 10,
        price: 250
    }, 
    {
        id: "price_1LnUUoDM1jwCEz8xOvzIcJ7to",
        title: "Guiness Can",
        quantity: 10,
        price: 250
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvdIcJ7to",
        title: "Konyagi 250ml",
        quantity: 10,
        price: 300
    },
    {
        id: "price_1LnUUoDM1jwCEz8sOvdIcJ7to",
        title: "Konyagi 500ml",
        quantity: 10,
        price: 300
    },
    {
        id: "price_1LnUUoDM1jwCEz8OxvdIcJ7to",
        title: "Konyagi 1 Litre",
        quantity: 10,
        price: 300
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvdIccJ7to",
        title: "Vat 69 250ml",
        quantity: 10,
        price: 300
    },
    {
        id: "price_1LnUUoDM1jwCEnz8OvdIcJ7to",
        title: "Vat 69 500ml",
        price: 300
    },
    {
        id: "price_1LnUUoDM1jwCEzk8OvdIcJ7to",
        title: "Vat 69 1 Litre",
        quantity: 10,
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