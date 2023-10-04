// Import express module
const express = require( "express" );
// Import the router module
const router = express.Router();
// Import the employee controller
const productController = require("../controller/addProduct.controller");
// Create a post request handler for the add employee route

 
router.post("/add-product", productController.addProduct);
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
