import React, { useEffect, useState } from 'react'
import './Home.css';
import backgroundimage from '../../CommonResource/images/amazon-Background.png'
import Product from './Product/Product';
import children from '../../CommonResource/images/product-1.jpg'
import camera from '../../CommonResource/images/camera.jpg'
import watches from '../../CommonResource/images/watches.jpg'
import watch from '../../CommonResource/images/watch.jpg'
import fitnessNeeds from '../../CommonResource/images/fitnessNeeds.jpg'
import puppy from '../../CommonResource/images/puppy.jpg'
import springNewArrivals from '../../CommonResource/images/springNewArrivals.jpg'
import cup from '../../CommonResource/images/cup.jpg'
import tshirt from '../../CommonResource/images/T-shirt.jpg'
import shoe from '../../CommonResource/images/shoe.jpg'
import cups from '../../CommonResource/images/newcup.jpg'
import harryPotter from '../../CommonResource/images/HarryPotter.jpg'




function Home ()
{
   const [ Products, setProducts ] = useState([]);
  useEffect( () =>
  {
   // get the product from the server  
   const response = fetch("http://localhost:7000/get-product");
   response
     .then((res) => res.json())
     .then( ( res ) =>
     {
       console.log("See below the product");
       console.log( res );
       setProducts(res)
     })
     .catch((ex) => {
       console.log(ex.message);
     });
}, [])

  console.log( Products );
    return (
      <div className="home">
        <div className="home__container ">
          <img className="home__image" src={backgroundimage} alt="" />
        </div>
        <div className="FethedProduct horizontalScrollAllow" >
          { Products?.map( singlProduct =>
          {
            return <div className='singleImage'>
              <Product
                id = {singlProduct?.product_id}
                title={ singlProduct?.product_title }   
                price={ singlProduct?.product_price }
                rating={ singlProduct?.product_rating }
                image={`http://localhost:7000/images/` + singlProduct?.product_image }
              />
              </div>
          })}
            
        </div>

      </div>
    );
}

export default Home
