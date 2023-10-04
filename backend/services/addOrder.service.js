// Import the db connection file
const connection = require("../config/db.config");
// A function to handle the add employee request
async function addOrder(order) {
  try {
    console.log("below is the whole user information");
    console.log(order);
      // Write the sql query to add an employee to the database
      let select = ` SELECT  * FROM orderInformation_table ORDER BY orderInformation_id DESC LIMIT 1`;
  
      const results = await connection.query( select );
      console.log( "below is yemetfelegew " )
      console.log(results)
      console.log( results[0].orderInformation_id );
      console.log(order) 

    // const sql = `INSERT INTO order_table (order_title, order_image, order_price, order_rating, orderInformation_id) VALUES('${ orderInformation.order_title }', '${ orderInformation.order_image }', '${ orderInformation.order_price }', '${ orderInformation.order_rating }', '${ orderInformation_id }')`;

      
      
//     // Execute the query
//     const result = await connection.query(sql);
//     console.log(result);
//     // If the query returns a result, return the result. Otherwise, return null
//     // let orderInformation_id = result.insertId
//     // const result2 = await connection.query(sqla);
//     if (result.insertId) {
//       // Get the newly inserted ID
//       const insertedId = result.insertId;
//       return insertedId;
//     } else {
//       return null;
//     }
  } catch (err) {
    // Log the error to the console
    console.error("An error occurred:", err);
    return null;
  }
}

// Export the function
module.exports = {
  addOrder
};
