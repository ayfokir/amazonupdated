// Import express module
const express = require("express");
// Import the router module
const router = express.Router();
// Import the employee controller
const getproductController = require("../controller/getProduct.controller");
// Create a post request handler for the add employee route
router.get("/get-product",getproductController.getProduct);
// Export the router
module.exports = router;
