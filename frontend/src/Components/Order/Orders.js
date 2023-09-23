import React from "react";
import "./Orders.css";
import { useStatevalue } from "../StateProvider/Stateprovider";
import Ordered from "./Ordered";
      
function Orders() {
  const [ { basket, user, orders }, dispatch ] = useStatevalue();      
  return (
    <div className="orders">
      <h1> Your Orders</h1>   
      <div className="orders__order">
     
            <Ordered order={orders} />             
      </div>
    </div>
  );
}

export default Orders;
