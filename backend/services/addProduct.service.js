// Import the db connection file
const connection = require( "../config/db.config" );
// A function to handle the add employee request
const path = require('path');
async function addProduct ( productData )
{  
  if ( productData )
  {
    try {
      console.log("Let us add product detail");
      // Write the sql query to add an employee to the database
      const sql = `INSERT INTO product_table (product_title, product_price, product_rating) VALUES ('${productData.product_title}', '${productData.product_price}', '${productData.product_rating}')`;
      // Execute the query
      const result = await connection.query(sql);
      console.log("see Below after product detail is added");
      console.log(result);
      // If the query returns a result, return the result. Otherwise, return null
      if (result.insertId) {
        // Get the newly inserted ID
        const insertedId = result.insertId;
        return insertedId;
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
  addProduct
};
