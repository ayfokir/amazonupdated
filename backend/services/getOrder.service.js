// Import the db connection file
const connection = require("../config/db.config");
// A function to handle the add employee request
async function getOrder() {
  try {
    // Write the sql query to add an employee to the database
    const sql = `SELECT * FROM orderInformation_table JOIN order_table ON orderInformation_table.orderInformation_id = order_table.orderInformation_id ORDER BY order_id DESC`;
    // Execute the query
    const result = await connection.query(sql);
    //  console.log(result);
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

// Export the function
module.exports = {
  getOrder
};
