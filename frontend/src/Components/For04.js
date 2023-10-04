import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import './For04.css'
import { Link } from 'react-router-dom';

function For04() {
  return (
    <div>
          <Header />
<div className='for04'>
              
          <h1>Sorry, the page you are looking for couldn't be found.</h1>
          <h3>
            Please go back to the <Link to= "/" >home</Link> page and try again. If it still
            doesn't work for you, please reach out to our team at
            ayfotsega19.27@gmail.com.
          </h3>
</div>
      <Footer />
    </div>
  );
}

export default For04
