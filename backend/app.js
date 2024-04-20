const express = require( 'express' );
const cors = require( 'cors' );
require( 'dotenv' ).config();
  const stripe = require("stripe")("sk_test_51NXOrgCBiUKA11IcQrbtvTcCLOSAjkmNjf323D8TflpFiAFag8AFSDGvW9NQjfKC7Neh1KVImMXlf6HM6StDWgEV0002nXmdPT");
// the above is stripe secret key
    


const app = express();             
const router = require('./router')         
app.use( cors() );    
app.use( express.json() );             
app.use( router );         
app.use(express.static('public'))
app.post("/payments/create", async (req, res) => {
  const total = req.body.total;
    console.log( typeof ( total ) );
    console.log( "the total is below" );
    console.log( total );
  
  if ( total > 0 )
  {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,  
      currency: "usd",               
    });  
    console.log("below is payment intent");
    console.log(paymentIntent);
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  }
} );    
    
    
// app.post( "/upload", upload.single( 'image' ), ( req, res ) =>
// {
//   console.log("below is image file ")
//   console.log( req.file )
//   // productController({file: req.file.filename})
//   console.log( req.body );
    
// })
// app.post( "/upload", upload.single( 'image' ))








const port =  process.env.PORT;
app.listen( port, () =>
{
    console.log(`Server  is running at http://localhost:${port}`)
} )   



