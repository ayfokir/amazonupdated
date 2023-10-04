// Import the db connection file
const connection = require("../config/db.config");
// A function to handle the add employee request

async function updateProductImage(ImageFile, id) {
  if ( ImageFile )
  {
    try {
      console.log("See the data below Used to updat products");
      // console.log(productData);
      // Write the sql query to add an employee to the database;
      const sql = `UPDATE product_imagetable SET product_image = '${ImageFile.filename}' WHERE product_id = '${id}'`;
      // Execute the query
      const result = await connection.query(sql);
      console.log(result);
      // If the query returns a result, return the result. Otherwise, return null
      if (result) {
        // Get the newly inserted ID
        return result;
      } else {
        return null;
      }
    } catch (err) {
      // Log the error to the console
      console.error("An error occurred:", err);
      return null;
    }
    
  }
}

// Export the function
module.exports = {
  updateProductImage
};
