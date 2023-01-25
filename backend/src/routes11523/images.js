//import _ from 'lodash';

module.exports = (app) => {

    const  {Router}  =require('express');
// const { baseURL}=require('../config');
const uploadMiddleware = require('../middlewares/uploaderMiddleware');

const cloudinary = require("../middlewares/cloudinary");
const {Images,Products,Users,Suppliers,SupplyStores} = require("../models");

const { validateToken } = require("../middlewares/AuthMiddleware");





const baseURL=process.env.baseURL

const router = Router();

/**
 * @DESC Route to upload single file
 * @END-PT 'api/images/single-upload'
 * @Access Public
 * @TYPE POST
 */
router.post('/single-upload', uploadMiddleware.upload, async (req, res) => {
    let imagePath = req.file.path.replace("public", baseURL);
    imagePath = imagePath.split('src')[1].substring(1, imagePath.length);

    let ImageName=req.file.filename

    let businessId=req.body.businessId;


    //console.log("THE IMAGE PATH IS:",imagePath);

    //console.log("THE IMAGE NAME IS:",ImageName);
    


    
    
    return res.json({imagePath:imagePath,
        ImageName:ImageName,businessId:businessId
    });
});



router.post('/save-product', uploadMiddleware.upload, async (req, res) => {

    try {

    let imagePath = req.file.path.replace("public", baseURL);
    imagePath = imagePath.split('src')[1].substring(1, imagePath.length);

    //  const result = await cloudinary.uploader.upload(req.file.path, {
    //      upload_preset: 'dev_setups',
    //  });

    let buss_id=req.body.businessId;

      const result = await cloudinary.uploader.upload(req.file.path, {
         folder: buss_id
     });

   

    // const result = await cloudinary.uploader.upload("/uploads/"+bid+"/"+req.file.filename,{
    //     upload_preset: 'dev_setups'})
    // .then(result=>console.log(result));

   

    let ImageName=req.file.filename

    let businessId=req.body.businessId;

    let product_name=req.body.name;

    let userId=req.body.UserId;

    let quantity=req.body.quantity;

    let unit_of_measure=req.body.unit_of_measure;

    let type=req.body.type;

    let product_description=req.body.product_description;

    let latitude=req.body.latitude;

    let longitude=req.body.longitude;

  

    

    let price=req.body.price;


    let status='available';

   
  
   

   

    
    Products.create({
        name: product_name,
        price: price,
        product_image: ImageName,
        quantity: quantity,
        product_description:product_description,
        category:type,
        latitude:latitude,
        longitude:longitude,
        status: status,
        unit_of_measure:unit_of_measure,
        cloudinary_url: result.secure_url,
        cloudinary_id: result.public_id,
        UserId: userId,
        BusinessId:businessId,
    }).then((image) => {
        try{
               

            console.log('File uploaded successfully');

            console.log(image);

            console.log("THE IMAGE NAME IS:",ImageName);

            console.log("THE CLOUDINARY URL IS "+ result.secure_url);

        
            console.log("THE CLODINARY ID IS "+result.public_id);
            
           
        }catch(e){
            console.log(e);
           // res.json({'err': e});
        }
    });
    
    
    return res.json({imagePath:imagePath,cloudinary_url:result.secure_url,
        ImageName:ImageName,businessId:businessId
    });

} catch (err) {
    console.error(err.message)
  }
});






router.post('/save-store', uploadMiddleware.upload, async (req, res) => {

    try {

    let imagePath = req.file.path.replace("public", baseURL);
    imagePath = imagePath.split('src')[1].substring(1, imagePath.length);

    //  const result = await cloudinary.uploader.upload(req.file.path, {
    //      upload_preset: 'dev_setups',
    //  });

    let buss_id=req.body.businessId;

      const result = await cloudinary.uploader.upload(req.file.path, {
         folder: buss_id
     });

   

    // const result = await cloudinary.uploader.upload("/uploads/"+bid+"/"+req.file.filename,{
    //     upload_preset: 'dev_setups'})
    // .then(result=>console.log(result));

   

    let ImageName=req.file.filename

    let businessId=req.body.businessId;

    let product_name=req.body.name;

    let userId=req.body.UserId;

    let quantity=req.body.quantity;

    let unit_of_measure=req.body.unit_of_measure;

    let type=req.body.type;

    let product_description=req.body.product_description;

    let latitude=req.body.latitude;

    let longitude=req.body.longitude;

  

    

    let price=req.body.price;


    let status='available';

   
  
   

   

    
    SupplyStores.create({
        name: product_name,
        price: price,
        product_image: ImageName,
        quantity: quantity,
        product_description:product_description,
        category:type,
        latitude:latitude,
        longitude:longitude,
        status: status,
        unit_of_measure:unit_of_measure,
        cloudinary_url: result.secure_url,
        cloudinary_id: result.public_id,
        UserId: userId,
        SupplierId:businessId,
    }).then((image) => {
        try{
               

            console.log('File uploaded successfully');

            console.log(image);

            console.log("THE IMAGE NAME IS:",ImageName);

            console.log("THE CLOUDINARY URL IS "+ result.secure_url);

        
            console.log("THE CLODINARY ID IS "+result.public_id);
            
           
        }catch(e){
            console.log(e);
           // res.json({'err': e});
        }
    });
    
    
    return res.json({imagePath:imagePath,cloudinary_url:result.secure_url,
        ImageName:ImageName,businessId:businessId
    });

} catch (err) {
    console.error(err.message)
  }
});





router.get("/myproducts", validateToken, async (req, res) => {
    let imagePath =  baseURL;


    try {
   

    const products = await Products.findAll({
      where: { UserId: req.user.id },include: [Users]
    });
    
    res.json({products:products,imagePath:imagePath});
} catch (err) {
    console.error(err.message)
  }
  });
  

/**
 * @DESC Route to upload multiple file
 * @END-PT 'api/images/multi-upload'
 * @Access Public
 * @TYPE POST
 */
 router.post('/multi-upload', uploadMiddleware.upload, async(req, res) => {



    var serial=123;
    var message="hdchhfhhsb";
    var serial =+1;
    var cover_photo=0;

 

    let { files } = req;
    // let propertyID=req;
    let resp = [];
    _.forEach(files, (file) => {
        let imagePath = file.path.replace("public", baseURL);
        imagePath = imagePath.split('src')[1].substring(1, imagePath.length);
        resp.push(imagePath);

   
        Images.create({
            photo: file.filename,
            message: message,
            cover_photo: cover_photo,
            serial: serial,
            PropertyId:req.body.PropertyId
        }).then((image) => {
            try{
               	

                console.log('File uploaded successfully');

                console.log(image);
                
               
            }catch(e){
                console.log(e);
               // res.json({'err': e});
            }
        });

    });
    return res.json(resp);
});

app.use('/api/images', router);


}

