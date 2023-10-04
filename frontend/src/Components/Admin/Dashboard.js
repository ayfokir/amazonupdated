import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Sidebar from './Sidebar';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PaidIcon from "@mui/icons-material/Paid";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import Orders from './../Order/Orders';
import { colors } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useStatevalue } from '../StateProvider/Stateprovider';
import For04 from '../For04';

function Dashboard ()
{
  const [ { user } ] = useStatevalue();
  console.log( user );
  console.log( user?.email );
  let admin = user?.email;
  const [Products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
   useEffect(() => {
     // get the product from the server
     const response = fetch("http://localhost:7000/get-product");
     response
       .then((res) => res.json())
       .then((res) => {
        //  console.log(res);
         setProducts(res);
       })
       .catch((ex) => {
       console.log(ex.message);
      });
    }, []);
    console.log(Products);

  
    useEffect(() => {
      // get the product from the server
      const response = fetch("http://localhost:7000/get-order");
      response
        .then((res) => res.json())
        .then((res) => {
           console.log(res);
           setOrders(res);
        })
        .catch((ex) => {
          console.log(ex.message);
        });
    }, []);
  console.log( orders )
  // console.log(orders[1].amount)
  
  //let us get total sales 
  function calculatTotalSales ()
  {
    let sum = 0;
    for ( let i = 0; i < orders?.length;  i++)
    {
      sum += orders[i]?.order_price 
    }
    return( sum );
  }

  return (
    <>{admin == "ayfo@gmail.com"?  <>
      <Header />
      <div className="dashboard">
        <Sidebar />
        <div class="dashboard_mainpart">
          <h1 className='h1'> Dashboard </h1>
          <div class="dashboard_mainpart_detail">
            <div class="dashboard_mainpart_detail_detail">
              <PaidIcon sx={{ color: "blue" }} />
              <div>
                <p>Total Sales</p>
                <p class="amount"> {calculatTotalSales()} </p>
              </div>
            </div>
            <div class="dashboard_mainpart_detail_detail">
              <LockPersonIcon sx={{ color: "orange" }} />
              <div>
                <p>Total Orders</p>
                <p class="amount">{orders?.length}</p>
              </div>
            </div>
            <div class="dashboard_mainpart_detail_detail">
              <EnhancedEncryptionIcon sx={{ color: "green" }} />
              <div>
                <p>Total Products</p>
                <p class="amount">{Products?.length}</p>
              </div>
            </div>
          </div>
          <div>
            <Orders latest = {true} />
          </div>
        </div>
      </div>
      <Footer />
      </>
   : <For04 />}
      
    </>
  );
}

export default Dashboard
