// Import express module
const express = require("express");
// Import the router module
const router = express.Router();
// Import the employee controller
const getorderController = require("../controller/getOrder.controller");
// Create a post request handler for the add employee route
router.get("/get-order", getorderController.getOrder);
// Export the router
module.exports = router;
