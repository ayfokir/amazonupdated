// Import the db connection file
const connection = require("../config/db.config");
// A function to handle the add employee request
const path = require("path");
async function addProductImage ( productImage )
{
    console.log("below is productImage")
  console.log( productImage )
  if ( productImage )
  {
    setTimeout( async() =>
    {
      try
    {
          let sql1 = "SELECT * FROM product_table ORDER BY product_id DESC LIMIT 1";
          console.log("below is productImage_id")
        let results = await connection.query( sql1 );
        console.log( "see below the product_id used to insert image" );
          console.log(results)
    // Write the sql query to add an employee to the database
    const sql = `INSERT INTO product_imagetable (product_image, product_id) VALUES ('${productImage.filename}', '${results[0].product_id}')`;
    // Execute the query
        const result = await connection.query( sql );
        console.log("see below the result after image is inserted")
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
  }, 1000) 
    
  }
}

// Export the function
module.exports = {
  addProductImage
};
