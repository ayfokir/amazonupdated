import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStatevalue } from "../StateProvider/Stateprovider";
import Ordered from "./Ordered";
      
function Orders({ latest, adminOrder }) {
  const [{ basket, user }, dispatch] = useStatevalue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // get the product from the server
    const response = fetch("http://localhost:7000/get-order");
    response
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setOrders(res);
      })
      .catch((ex) => {
        console.log(ex.message);
      });
  });

  // console.log(orders);
  return (
    <div className="orders">
      {!latest ? <h1>{!adminOrder ? <h1>Your Orders </h1> : <h1>Total Orders </h1>} </h1> : <h1> Latest Orders</h1>}

      <div className="orders__order">
        {orders.map((order) => {
          return (
            <div>
              <Ordered order={order} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
