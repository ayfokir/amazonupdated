// Import express module
const express = require("express");
// Import the router module
const router = express.Router();
// Import the employee controller
const addOrder = require("../controller/addOrder.controller");
// Create a post request handler for the add employee route
router.post("/add-order", addOrder.addOrder);
// Export the router
module.exports = router;
