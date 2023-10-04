// Import the employee service
const productImageService = require("../services/addProductImage.service");

// A function to handle the add employee request

async function addProductImage(req, res) {
  console.log("below is input product Information");
  console.log(req.body);
  console.log("below is image");
  console.log(req.file);

  // Call the employee service to add an employee to the database
  const producteAdded = await productImageService.addProductImage(req.file);
  // If the employee is added successfully, return success response. Otherwise, return failure response
  console.log("Image is Added Successfully")
  console.log(producteAdded);
  if (producteAdded) {
    // Send a success response back to the client
    const response = {
      status: "success",
      message: "product added successfully"
    };
    res.status(200).json(response);
  } else {
    // Send a failur response back to the client
    const response = {
      status: "failure",
      message: "product could not be added"
    };
    res.status(403).json(response);
  }
}

// Export the function
module.exports = {
  addProductImage
};
