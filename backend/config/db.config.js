const mysql2 = require("mysql2/promise");
//mysql2 lay promise feature techemerual not found in mysql
  
//below configuration data bezeh melke yasgebanbet reason
//live lay silemekeyeru and sensitive data silehonu new
const dbConfig = {  
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
};
const pool = mysql2.createPool(dbConfig);
  
async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);

  return rows;
}

pool.getConnection((err) => {
  if (err) throw err;
  console.log("connected");
} );

var sql = "DELETE FROM product_imagetable WHERE productimage_id = ?";
pool.query(sql, [33], function (err, result) {
  if (err) throw err;
  console.log("Number of records deleted: " + result.affectedRows);
});

module.exports = { query, pool };
  
