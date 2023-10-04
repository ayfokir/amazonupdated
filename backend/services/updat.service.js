// Import the db connection file
const connection = require("../config/db.config");
// A function to handle the add employee request

async function updateProduct ( productData )
{
    if (productData.product_price && productData.product_rating && productData.product_title) {
    try {
      console.log("See the data below Used to updat products");
      console.log(productData);
      // Write the sql query to add an employee to the database
      const sql = `UPDATE product_table SET product_price = '${productData.product_price}', product_rating = '${productData.product_rating}', product_title = '${productData.product_title}' WHERE product_id = '${productData.product_id}'`;

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
 if (productData.product_title && productData.product_price) {
   try {
     console.log("See the data below Used to updat products");
     console.log(productData);
     // Write the sql query to add an employee to the database
     const sql = `UPDATE product_table SET product_title = '${productData.product_title}', product_price = '${productData.product_price}' WHERE product_id = '${productData.product_id}'`;

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
if (productData.product_title && productData.product_rating) {
  try {
    console.log("See the data below Used to updat products");
    console.log(productData);
    // Write the sql query to add an employee to the database
    const sql = `UPDATE product_table SET product_title = '${productData.product_title}', product_rating = '${productData.product_rating}' WHERE product_id = '${productData.product_id}'`;

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

if (productData.product_price && productData.product_rating) {
  try {
    console.log("See the data below Used to updat products");
    console.log(productData);
    // Write the sql query to add an employee to the database
    const sql = `UPDATE product_table SET product_price = '${productData.product_price}', product_rating = '${productData.product_rating}' WHERE product_id = '${productData.product_id}'`;

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
 if (productData.product_title) {  
   try {
     console.log("See the data below Used to updat products");
     console.log(productData);
     // Write the sql query to add an employee to the database
     const sql = `UPDATE product_table SET product_title = '${productData.product_title}' WHERE product_id = '${productData.product_id}'`;
  
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

 if (productData.product_price) {
   try {
     console.log("See the data below Used to updat products");
     console.log(productData);
     // Write the sql query to add an employee to the database
     const sql = `UPDATE product_table SET product_price = '${productData.product_price}' WHERE product_id = '${productData.product_id}'`;

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
 if (productData.product_rating) {
   try {
     console.log("See the data below Used to updat products");
     console.log(productData);
     // Write the sql query to add an employee to the database
     const sql = `UPDATE product_table SET product_rating = '${productData.product_rating}' WHERE product_id = '${productData.product_id}'`;

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
  updateProduct
};


