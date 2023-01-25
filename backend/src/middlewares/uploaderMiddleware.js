const multer=require( 'multer')
let fs = require('fs-extra');

//const { baseURL }= require('../config');

const baseURL=process.env.baseURL


const storage = multer.diskStorage({
    destination: (req, file, cb) => {



        try {


            //    let Id = req.body.propertyID;
               let buss_id=req.body.businessId;
        
    
               let path = `${__dirname}/../public/uploads/${buss_id}`;
               //cb(null, 'Images')
               fs.mkdirsSync(path);
               cb(null, path);
        
               console.log("THE BUSINESS ID IS "+buss_id);

               console.log("THE BASE URL IS "+baseURL);

             
        
               console.log("THE PATH IS "+path);
        
            } catch (err) {
                console.error(err.message)
              }



   

    },
    filename: (req, file, cb) => {
        let lastIndex = file.originalname.lastIndexOf(".");
        // get the original extension of the file
        let extension = file.originalname.substring(lastIndex);
        // Create the file on the server
       
        console.log("THE EXTENSION NAME IS "+extension);
        cb(null, `img-${Date.now()}${extension}`);
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: '25000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype) 
         let lastIndex = file.originalname.lastIndexOf(".");
        const extname = file.originalname.substring(lastIndex);
      

        if(mimeType && extname ) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }


}).single('file');

module.exports = {
    upload
    
}
