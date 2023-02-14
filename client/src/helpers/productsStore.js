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
        id: "7",
        title: "Chrome Gin 250ml",
        quantity: 10,
        price: 250
    }, 
    {
        id: "8",
        title: "Chrome Gin 1Lite",
        quantity: 10,
        price: 650
    },
    {
        id: "9",
        title: "Chrome Vodka 250ml",
        quantity: 10,
        price: 300
    },

    {
        id: "10",
        title: "Chrome Vodka 1Litre",
        quantity: 10,
        price: 650
    },
   


    {
        id: "11",
        title: "Tusker Lite Bottle",
        quantity: 10,
        price: 250
    },
    {
        id: "12",
        title: "Tusker Lite Can",
        quantity: 10,
        price: 250
    },
    {
        id: "13",
        title: "Tusker Cider Chupa",
        quantity: 10,
        price: 250
    }, 
    {
        id: "14",
        title: "Tusker Cider Can",
        quantity: 10,
        price: 250
    },
    {
        id: "15",
        title: "Guiness Chupa",
        quantity: 10,
        price: 250
    }, 
    {
        id: "16",
        title: "Guiness Can",
        quantity: 10,
        price: 250
    },
    {
        id: "22",
        title: "Konyagi 250ml",
        quantity: 10,
        price: 300
    },
    {
        id: "17",
        title: "Konyagi 500ml",
        quantity: 10,
        price: 300
    },
    {
        id: "18",
        title: "Konyagi 1 Litre",
        quantity: 10,
        price: 300
    },
    {
        id: "19",
        title: "Vat 69 250ml",
        quantity: 10,
        price: 300
    },
    {
        id: "25",
        title: "Vat 69 500ml",
        price: 300
    },
    {
        id: "20",
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