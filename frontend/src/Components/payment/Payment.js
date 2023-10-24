import React, { useEffect, useState } from 'react'
import './Payment.css'
import { Link } from 'react-router-dom'
import { useStatevalue } from '../StateProvider/Stateprovider'
import CheckoutProduct from '../Chcekout/CheckoutProduct';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import Ordered from './../Order/Ordered';
import Footer from '../Footer/Footer'
// Elements: stripe metekem sinfelege, stripe yetetekmnbeten component wrape maderegia.   
function Payment ()
{
  const navigate = useNavigate();
  const [{ basket, user, order }, dispatch] = useStatevalue();
  //below is for doing stripe functionality(payment, confirmation client secret ec )
  const stripe = useStripe();
  const elements = useElements();

  //below is for button
  const [error, setError] = useState(null); // error kale  display lemadereg
  const [disabled, setDisabled] = useState(true); //first, the button is disabled

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  //clientSecret, strip yemeseten code
  const [clientSecret, setClientSecret] = useState(true);

  //yehone sew charge sitasderg le strip new tiyake yemeteykew
  //keza esu code ysetehal (yelakelnen code tetekmeh  new sewuyewun charge yemenadergew, yeseten code client secret ybalale )
  // payment yemnlkew codwun ayayzen new.
  //sent request to strip to get clientSecret.  
console.log(basket)
  const getBasketTotal = () =>
    basket?.reduce( ( amount, item ) => item.price + amount, 0 );
  
  useEffect(() => {
    const getClientSecret = async () =>
    {
      
      const data = {
        total: parseInt(( getBasketTotal( basket ) * 100 ))
      };
      console.log("the total is "+ data.total );
      const apiUrl = `http://localhost:7000/payments/create`;
        const requestOptions = {
          method: "post", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        };
   const response = fetch(apiUrl, requestOptions);
  response
        .then( ( res ) => res.json() )
        .then ((clientSecret)  => {
          console.log("yes");
          console.log( clientSecret );
          setClientSecret(clientSecret.clientSecret)
    })
    .catch((ex) => {
      console.log(ex.message);
    });
    };
     getClientSecret();
  }, [ basket ] );
  
  
  const handleSubmit = async ( e ) =>
  {
    e.preventDefault();
    setProcessing( true );
    try
    {  
      const payload = await stripe
        .confirmCardPayment( clientSecret, {
          // clientSecret yeseten rasu strip new bezeh charge adergew belo
          //ykenen card payment confirm aderglegne endemalet new  charge ladergew new.
          payment_method: {
            // yegna payment method card new.
            card: elements.getElement( CardElement ) // getElement(CardElement) to get the card number, yasgebanewun 
          }
        } )
        .then( ( { paymentIntent } ) =>  
        { //paymentInent: payment confirmation nw
          console.log( "below is paymentIntent for confirmation, to check is the user charged successfully or not " );
          console.log(paymentIntent);  
          // if user is paied successfully then let us send the user product to the database

          function orderInformation ()
          {
            const orderInformation = {
              LogedInUser_id: user?.uid,
              paymentIntent_id: paymentIntent?.id,
              amount: paymentIntent.amount/100,
              created: paymentIntent.created
            };
            console.log(orderInformation);
            // Send the data to the server
            const apiUrl = "http://localhost:7000/add-orderInformation";
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(orderInformation)
            };
            const response = fetch(apiUrl, requestOptions);
            response
              .then((res) => res.json())
              .then((res) => {
                console.log(res);
              })
              .catch((ex) => {
                console.log(ex.message);
              } );
          }
          orderInformation();  

          function order ()
              {
            for ( let i = 0; i < basket.length; i++ )
            {
              const order = {
                order_title: basket[i].title,
                order_image:basket[i].image,
                order_price: basket[i].price,
                order_rating: basket[i].rating
              };
              console.log(order);
              // Send the data to the server
              const orderapiUrl = "http://localhost:7000/add-orderInformation";
              const orderrequestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order)
              };
              const orderresponse = fetch(orderapiUrl, orderrequestOptions);
              orderresponse
                .then((res) => res.json())
                .then((res) => {
                  console.log(res);
                })
                .catch((ex) => {
                  console.log(ex.message);
                });
            }
          }

           order();
        
          setSucceeded( true ); //charge siladeregnew(user keflual) chnage into true
          setError( "" );
          setProcessing( false ); //process chersehal lemalet false
          dispatch( {
            type: 'EMPTY_BASKET', //kekefelke buhal basket empty medereg alebet
          } );
          setTimeout( () =>
          {
            navigate( "/orders" ); // userwu keflo kechrese wode gezaw mehede alebet.
          } , 100)
            
      
        } )
        .catch( ex  => {
              console.log(ex.message)
          })
    }
    catch ( ex )   
    {
    console.log(ex.message)
    };
  }

  const handleChange = (event) => {
    // console.log(event.error);
    // setDisabled(event.empty );
    setDisabled(false);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout <Link to="/checkout"> ({basket?.length} Items)</Link>
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p> {user?.email} </p>
            <p> 123 React Lane </p>
            <p> Chicago, IL </p>  
          </div>   
        </div>
        <div className="payment__section">
          <div className="payment__title ">
            <h3 className='leyu'>Review Items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
         
              {/* card element lay temolto submit siderege grap lemadereg  */}
              <CardElement onChange={handleChange} />{" "}
              {/*to prepare card element */}
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value} </h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
                <button disabled={processing || disabled || succeeded}>
                  <span> {processing ? <p>processing</p> : "Buy Now"} </span>
                </button>
                {error && <div> {error} </div>}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Payment;
