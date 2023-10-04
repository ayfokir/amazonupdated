// Import the db connection file
const connection = require( "../config/db.config" );
// A function to handle the add employee request
async function addOrderInformation(orderInformation) {
    try
    {
      console.log("below is the whole user information");
        console.log( orderInformation );
        let result;
        // Write the sql query to add an employee to the database
        if ( orderInformation.LogedInUser_id )
        {
            const sql = `INSERT INTO orderInformation_table (LogedInUser_id, paymentIntent_id, amount, created) VALUES ('${orderInformation.LogedInUser_id}', '${orderInformation.paymentIntent_id}', '${orderInformation.amount}', '${orderInformation.created}')`;
             result = await connection.query(sql);
        }
      // Execute the query   
        setTimeout( async() =>
        {
         if ( orderInformation.order_title )
        {
               let select = ` SELECT  * FROM orderInformation_table ORDER BY orderInformation_id DESC LIMIT 1`;
               const selectionResult = await connection.query(select);
               console.log("below is yemetfelegew");
               console.log(selectionResult[0].orderInformation_id);
              const sql1 = `INSERT INTO order_table (order_title, order_image, order_price, order_rating, orderInformation_id) VALUES('${orderInformation.order_title}', '${orderInformation.order_image}', '${orderInformation.order_price}', '${orderInformation.order_rating}', '${selectionResult[0].orderInformation_id}')`;
              const Result = await connection.query(sql1);
        }
     }, 1000)   
    //   console.log(result);   
    //   // If the query returns a result, return the result. Otherwise, return null
    //   // let orderInformation_id = result.insertId
    //   // const sqla = `INSERT INTO order_table (order_title, order_image, order_price, order_rating, orderInformation_id) VALUES('${ orderInformation.order_title }', '${ orderInformation.order_image }', '${ orderInformation.order_price }', '${ orderInformation.order_rating }', '${ orderInformation_id }')`;
    //   // const result2 = await connection.query(sqla);
    //   if (result.insertId) {
    //     // Get the newly inserted ID
    //     const insertedId = result.insertId;
    //     return insertedId;
    //   } else {
    //     return null;
    //   }
    } catch (err) {
    // Log the error to the console
    console.error("An error occurred:", err);
    return null;
    }
}


// Export the function
module.exports = {
  addOrderInformation
};
