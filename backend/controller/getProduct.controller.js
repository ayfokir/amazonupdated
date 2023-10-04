// Import the employee service
const getproductService = require("../services/getProduct.service");
// A function to handle the add employee request

async function getProduct(req, res) {

  // Call the employee service to add an employee to the database
  const result = await getproductService.getProduct();
  // If the employee is added successfully, return success response. Otherwise, return failure response
  // console.log(result);
  if (result) {
    // Send a success response back to the client
    const response = {
      status: "success",
      message: "product get successfully"
    };
    res.status(200).json(result);
  } else {
    // Send a failur response back to the client
    const response = {
      status: "failure",
      message: "product could not be get"
    };
    res.status(403).json(response);
  }
}

// Export the function
module.exports = {
  getProduct
};
