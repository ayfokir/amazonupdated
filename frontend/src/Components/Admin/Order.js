import React from 'react'
import Header from '../Header/Header'
import Sidebar from './Sidebar'
import Footer from '../Footer/Footer'
import Orders from '../Order/Orders'
import './Order.css'
function Order() {
  return (
    <>
      <Header />
      <div className="totalOrders">
        <Sidebar />
        <div className="totalOrders_adminOrder">
          <Orders adminOrder={true} />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Order


