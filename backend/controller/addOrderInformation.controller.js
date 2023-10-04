// Import the employee service
const orderInformationService = require("../services/addOrderInformation.service");
// A function to handle the add employee request

async function addOrderInformation(req, res) {
  console.log(req.body);
  // Call the employee service to add an employee to the database
  const orderInformationAdded = await orderInformationService.addOrderInformation(req.body);
  // If the employee is added successfully, return success response. Otherwise, return failure response
  console.log(orderInformationAdded);
  if (orderInformationAdded) {
    // Send a success response back to the client  
    const response = {
      status: "success",
      message: "orderInformation added successfully"
    };
    res.status(200).json(response);
  } else {
    // Send a failur response back to the client
    const response = {
      status: "failure",
      message: "orderInformation could not be added"
    };
    res.status(403).json(response);
  }
}

// Export the function
module.exports = {
  addOrderInformation
};
