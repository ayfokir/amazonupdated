// Import express module
const express = require( "express" );
const path = require("path");
const multer = require("multer");
// Import the router module
const router = express.Router();
// Import the employee controller
const updateController = require("../controller/updateProductImage.Controller");
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
 });
router.patch("/update-ProductImage/:id", upload.single( 'image' ), updateController.updateProductImage);
// Export the router
module.exports = router;
