import React, { useEffect, useState } from 'react'
import './Payment.css'
import { Link } from 'react-router-dom'
import { useStatevalue } from '../StateProvider/Stateprovider'
import CheckoutProduct from '../Chcekout/CheckoutProduct';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from '../Axios';
import { useNavigate } from 'react-router-dom';
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

  // useEffect(() => {
  //   const getClientSecret = async () => {
  //     const response = await axios({
  //       method: "post",
  //       url: `/payments/create?total = ${getBasketTotal(basket) * 100}` // this 'url' dont have base url, yaleke aydelem;
  //     });
  //     setClientSecret( response.data.clientSecret );
  //     console.log(response.data.clientSecret);
  //   };
  //   getClientSecret();
  // }, [basket]);



  const getBasketTotal = () => basket?.reduce( ( amount, item ) => item.price + amount, 0 );
  
  const handleSubmit = async ( e ) =>
  {
    console.log( basket );
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
        .then( ( { paymentInent } ) =>  
        { //paymentInent: payment confirmation nw
          setSucceeded( true ); //charge siladeregnew(user keflual) chnage into true
          setError( "" );
          setProcessing( false ); //process chersehal lemalet false
          dispatch( {
            type: 'EMPTY_BASKET', //kekefelke buhal basket empty medereg alebet
          
          } );
          // navigate("/orders"); userwu keflo kechrese wode gezaw mehede alebet.
        } )
    }
    catch ( err ) 
    {
      dispatch( {
        type: "EMPTY_BASKET" //kekefelke buhal basket empty medereg alebet
      } );
      navigate('/orders')
      console.log( order );
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
              {" "}
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
    </div>
  );
}

  export default Payment;
