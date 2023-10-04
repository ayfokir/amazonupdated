// Import express module
const express = require("express");
// Import the router module
const router = express.Router();
const path = require("path");
const multer = require("multer");
// Import the employee controller
const productImageController = require("../controller/addProductImage.controller");
// Create a post request handler for the add employee route
 const storage = multer.diskStorage({
   destination: (req, file, cb) => {
     cb(null, "public/images");
   },
   filename: (req, file, cb) => {
     cb(
       null,
       file.fieldname + "_" + Date.now() + path.extname(file.originalname)
     );
   }
 });
 const upload = multer({
   storage: storage
 } );
 

router.post("/upload",upload.single( 'image' ), productImageController.addProductImage);
// router.post( "/add-product", upload.single( "image" ), ( req, res ) =>
// {
//   console.log("below is body file")
//     console.log(req.body)
//     console.log( "below is image file" )
//   console.log( req.file )
//     res.send("yes man")

//  });

// Export the router
module.exports = router;
