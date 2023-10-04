// Import express module
const express = require("express");
// Import the router module
const router = express.Router();
// Import the employee controller
const deleteController = require("../controller/delet.controller");
// Create a post request handler for the add employee route
router.delete("/delete", deleteController.deleteProduct);
// Export the router
module.exports = router;
