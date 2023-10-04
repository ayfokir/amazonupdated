// Import the employee service
const  updateService = require("../services/updat.service");
// A function to handle the add employee request

async function updateProduct(req, res) {  
    console.log( req.body );
    console.log("below is params")  
    console.log( req.params.id );
  // Call the employee service to add an employee to the database
  const updatedProduct = await updateService.updateProduct(req.body);
  // If the employee is added successfully, return success response. Otherwise, return failure response
  console.log(updatedProduct);
  if (updatedProduct) {
    // Send a success response back to the client
    const response = {  
      status: "success",
      message: "product updated successfully"
    };
    res.status(200).json(response);
  } else {
    // Send a failur response back to the client
    const response = {
      status: "failure",
      message: "product could not be updated"
    };
    res.status(403).json(response);
  }
}

// Export the function
module.exports = {
  updateProduct
};
