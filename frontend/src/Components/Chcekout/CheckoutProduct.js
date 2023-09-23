import React from 'react'
import './CheckoutProduct.css'
import product1 from '../../CommonResource/images/product-1.jpg'
import { useStatevalue } from '../StateProvider/Stateprovider';
function CheckoutProduct ({id, title, image, price, rating, hideButton})
{

// let arr = [];
// for (let i = 0; i < rating; i++) {
//   arr.push("⭐");
// }
  
      const [{ basket }, dispatch] = useStatevalue();
    const removeFromBasket = () =>
    {
        dispatch( {
            type: 'REMOVE_FROM_BASKET',
            id: id,
    })
}
    return (
      
    <div className='checkoutProduct'>
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

          <div className="checkoutProduct__rating">
          {
            // arr.join("")
              Array( rating ).fill().map( () => ( <p>⭐</p>  
            ))} 
          </div>
          {
          !hideButton &&
              <button onClick={removeFromBasket} >Remove From Basket</button>
          }
      </div>
    </div>
  );
}
export default CheckoutProduct





