import React from 'react'
import './Checkout.css';
import Header from '../Header/Header';
import couple from '../../CommonResource/images/coupleShopping.jpg'
import Subtotal from './../Subtotal/Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStatevalue } from '../StateProvider/Stateprovider';
function Chekout ()
{
  const [ { basket }, dispatch ] = useStatevalue();

  return (
    <>
      <Header />

      <div className='checkout'>
          {<img
            className='checkout__ad' 
            src= {couple}
            alt=''  
          /> }     
        <div className='checkout__left'>
          <h3>Hello</h3>
          <h2 className='checkout__title'>Your shopping Basket</h2>

      { basket.map( (item) => ( <CheckoutProduct
        id={ item.id }
        title={ item.title }   
        image={ item.image }   
        price={ item.price }
        rating = {item.rating}
          /> ) )}
        </div>
        <div className='checkout__right'>

       <Subtotal />
        </div>
      </div>
    </>
  )
}

export default Chekout;
