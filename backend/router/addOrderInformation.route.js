// Import express module
const express = require("express");
// Import the router module
const router = express.Router();
// Import the employee controller
const addOrderInformation = require("../controller/addOrderInformation.controller");
// Create a post request handler for the add employee route
router.post("/add-orderInformation", addOrderInformation.addOrderInformation);
// Export the router
module.exports = router;
