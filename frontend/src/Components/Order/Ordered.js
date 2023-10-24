import React, { useEffect, useState } from 'react'
import './Ordered.css'
import CheckoutProduct from '../Chcekout/CheckoutProduct';
import moment from 'moment'
import CurrencyFormat from 'react-currency-format';
import Order from './../Admin/Order';
function Ordered ( { order } )
{
  const [ orders, setOrders ] = useState( [] );
  // console.log(orders)
  // const [ tester, setTester ] = useState( [1,2,3,4] );
  useEffect( () =>
  {
    // get the product from the server
    const response = fetch( "http://localhost:7000/get-order" );
    response
      .then( ( res ) => res.json() )
      .then( ( res ) =>
      {
        console.log( res );
        setOrders( res );
      } )
      .catch( ( ex ) =>
      {
        console.log( ex.message );
      } );
  }, [] );
  console.log( order?.created)
  return (
    <div>
      {/* <div className="order">
           <h2>Order</h2>
        { array2D.map( ( order1 ) =>
        {
          // console.log(array2D)
          // console.log(order1)
          return <div>

            { order1.map( (order) =>
            {
              // console.log( order )
              return <div>
                {
                  order.map( order =>
                  {
                    // console.log(order)
                 return   <div>
             
              <p> {moment.unix(order?.created).format("MMMM Do YYYY, h:mma")} </p>
              <p className="order_id">
                <small>{order?.paymentIntent_id}</small>
              </p>{" "}
                  <CheckoutProduct
                    id={order.order_id}
                    title={order.order_title}
                    image={order.order_image}
                    price={order.order_price}
                    rating={order.order_rating}
                    hideButton
                  />
                    </div>
                  })
              }
            
          </div>
            })
        }
        </div>
           } ) }
          <CurrencyFormat
            renderText={(value) => (
              <h3 className="order_total">Order Total: {value} </h3>
            )}
            decimalScale={2}
            value={order?.amount}
            displayType={"text"}
            thousandSeparator={true}
            prefix="$"
          />
      </div>
       */}
      <div className="order">
        <h2>Order</h2>
        <p> {moment.unix(order?.created).format("MMMM Do YYYY, h:mma")} </p>
        <p className="order_id">
          <small>{order?.paymentIntent_id}</small>
        </p>
        {
          <CheckoutProduct
            id={order.order_id}
            title={order.order_title}
            image={order.order_image}
            price={order.order_price}
            rating={order.order_rating}
            hideButton
          />
        }

        {/* <CurrencyFormat
          renderText={(value) => (
            <h3 className="order_total">Order Total: {value} </h3>
          )}
          decimalScale={2}
          value={order?.LogedInUser_id}
          displayType={"text"}
          thousandSeparator={true}
          prefix="$"
        /> */}

        <div className="customerId">
          <h3>{order.LogedInUser_id}</h3>
        </div>
      </div>
    </div>
  );
}

export default Ordered;
