// Import the db connection file
const connection = require("../config/db.config");
// A function to handle the add employee request

async function deleteProduct(productId) {
  try {
    // Write the sql query to add an employee to the database
    const sql1 = `DELETE FROM product_imagetable WHERE product_id = '${productId}'`;
    const sql2 = `DELETE FROM product_table WHERE product_id = '${productId}'`;

    //  first delete product_imagetable
    const result1 = await connection.query(sql1);
    // second delet product_table
    const result2 = await connection.query(sql2);
    console.log(result2);
    // If the query returns a result, return the result. Otherwise, return null
    if (result2.insertId) {
      // Get the newly inserted ID
      const insertedId = result2.insertId;
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

// Export the function
module.exports = {
  deleteProduct
};
