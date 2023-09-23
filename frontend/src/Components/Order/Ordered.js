import React from 'react'
import './Ordered.css'
import CheckoutProduct from '../Chcekout/CheckoutProduct';
function Ordered ( { order } )
{
  return (
    <div>
      <div className="order">
        {/* <p> {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")} </p> */}
        <p className="order__id"></p>
        {order?.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={ item.rating }
            hideButton
                
          />
        ))}
      </div>
    </div>
  );
}

export default Ordered;
