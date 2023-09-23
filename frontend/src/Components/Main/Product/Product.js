import React, { useContext, useEffect } from 'react'
import './Product.css';
import { useStatevalue } from '../../StateProvider/Stateprovider';
import { StateContext } from '../../StateProvider/Stateprovider';

function Product({id, title, image, price, rating}) {
  // const [ { basket }, dispatch ] = useStatevalue();
  const [{ basket }, dispatch] = useContext(StateContext);
  
  
  // console.log("this is the basket"+ basket)  
  //useStatevalue(): used to push and pull
  //dispatch: push
  //basket: pull (consume data)
  const addToBasket = () =>
  {
    dispatch( { // click sinareg happen yemetareg, dispach(action)
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    } )
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price} </strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product
