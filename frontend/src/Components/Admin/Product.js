import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Sidebar from './Sidebar';
import './Product.css';
import Products from '../Main/Product/Product';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';


function Product ()
{
    const [totalProducts, setProducts] = useState([]);
    useEffect(() => {
      // get the product from the server
      const response = fetch("http://localhost:7000/get-product");
      response
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setProducts(res);
        })
        .catch((ex) => {
          console.log(ex.message);
        });
    }, []);

    return (
      <>   
        <Header />
        <div class="getproduct">
          <Sidebar />
          <div class="getproduct_product_detail">
            <h1> Products</h1>
            <Link to={"/addmin/postProducts"} ><button >Create new</button></Link>
          </div>
        </div>
        
        <div className="getproduct_FethedProduct horizontalScrollAllow totalProducts">
          {totalProducts?.map((singlProduct) => {
            return (
              <div className="singleImage"> 
                <Products 
                  id={singlProduct?.product_id}
                  title={singlProduct?.product_title}
                  price={singlProduct?.product_price} 
                  rating={singlProduct?.product_rating}
                  image={`http://localhost:7000/images/`+ singlProduct?.product_image }
                  admin = {true}
                />
              </div>
            );
          })}
        </div>
        <Footer />
      </>
    );
}

export default Product
