// Import the employee service
const deleteService = require("../services/delete.service");
// A function to handle the add employee request

async function deleteProduct(req, res) {
    console.log( req.body );
    console.log( "below is id used to delete Product" )
  console.log( req.body.id );
  // Call the employee service to add an employee to the database
  const producteAdded = await deleteService.deleteProduct(req.body.id);
  // If the employee is added successfully, return success response. Otherwise, return failure response
  console.log(producteAdded);
  if (producteAdded) {
    // Send a success response back to the client
    const response = {
      status: "success",
      message: "product deleted successfully"
    };
    res.status( 200 ).json( response );
    console.log("product deleted successfully")
  } else {
    // Send a failur response back to the client
    const response = {
      status: "failure",
      message: "product could not be deleted"
    };
    res.status(403).json(response);
  }
}

// Export the function
module.exports = {
  deleteProduct
};
