// Import the employee service
const updateService = require("../services/update-ProductImage.service");
// A function to handle the add employee request

async function updateProductImage(req, res) {
    console.log(req.body);
    console.log("below is params and Image files");
    // console.log( req.params.id );  
    const id = req.params.id;
    console.log( req.file );
  // Call the employee service to add an employee to the database
  const updatedProduct = await updateService.updateProductImage(req.file, id);
    // If the employee is added successfully, return success response. Otherwise, return failure response
    console.log( "image is updated sucessfully" );
  console.log(updatedProduct);
  if (updatedProduct) {
    // Send a success response back to the client
    const response = {
      status: "success",
      message: "productImage updated successfully"
    };
    res.status(200).json(response);
  } else {
    // Send a failur response back to the client
    const response = {
      status: "failure",
      message: "productImage could not be updated"
    };
    res.status(403).json(response);
  }
}

// Export the function
module.exports = {
  updateProductImage
};
