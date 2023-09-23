import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStatevalue } from '../StateProvider/Stateprovider';
import { useNavigate } from 'react-router-dom';
function Subtotal ()
{
  const [ { basket }, dispatch ] = useStatevalue();
  const navigate = useNavigate();
  const getBasketTotal = () => basket?.reduce( ( amount, item ) => item.price + amount, 0 )

  // console.log( getBasketTotal( basket ) );
    return (
      <div className='subtotal'>
          <CurrencyFormat
          renderText={(value) =>(     // render text yemeseraw render the value below yalutn as a text   
          <div>
          <p>
                Subtotal ( { basket.length } items): <strong> Total Price:  { value } </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This Order contains a gift
      </small> 
         </div>     
  )}
                decimalScale={ 2 }
                value={ getBasketTotal(basket) }
                displayType={ 'text' }
                thousandSeparator = {true}
                prefix={'$'}
            />
            
          <button onClick={(e) => navigate('/payment')}>Proceed to Checkout</button>  
    </div>
    );
}

export default Subtotal
