// Import express module
const express = require("express");
// Import the router module
const router = express.Router();
// Import the employee controller
const updateController = require("../controller/update.controller");
// Create a post request handler for the add employee route
router.patch("/update-product/:id", updateController.updateProduct);
// Export the router
module.exports = router;
