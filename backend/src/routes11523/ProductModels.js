// import controllers review, products
const express = require("express");

const router=express.Router();
const { Products,Users,Business,ProductModels } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");

const db = require("../models");


const Sequelize=require('sequelize')

const Op=Sequelize.Op


// image Upload
const multer = require('multer')
const path = require('path')



router.post("/newProduct",async(req,res)=>{

    
    // let info = {
    //     image: req.file.path,
    //     title: req.body.title,
    //     price: req.body.price,
    //     description: req.body.description,
    //     published: req.body.published ? req.body.published : false
    // }


    const {image, title,price ,description, published}=req.body;
   try {

    const product= await ProductModels.create({
        image: image,
        title: title,
        price: price,
        description:description,
        published: published

    });

    // const product = await ProductModels.create(info)
    res.status(200).send(product)
    console.log(product)
}catch(err){
    console.log({ error: err });
  }
  
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')




module.exports = router