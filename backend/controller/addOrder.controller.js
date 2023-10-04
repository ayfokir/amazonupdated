// Import the employee service
const orderService = require("../services/addOrder.service");
// A function to handle the add employee request

async function addOrder(req, res) {
  console.log(req.body);
  // Call the employee service to add an employee to the database
  const orderAdded =
    await orderService.addOrder(req.body);
  // If the employee is added successfully, return success response. Otherwise, return failure response
  console.log(orderAdded);
  if (orderAdded) {
    // Send a success response back to the client
    const response = {
      status: "success",
      message: "order added successfully"
    };
    res.status(200).json(response);
  } else {
    // Send a failur response back to the client
    const response = {
      status: "failure",
      message: "order could not be added"
    };
    res.status(403).json(response);
  }
}

// Export the function
module.exports = {
  addOrder
};
