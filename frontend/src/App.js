import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Main/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shared from "./Components/SharedComponent/Shared";
import Chekout from "./Components/Chcekout/Chekout";
import Login from "./Components/Login/Login";
import { useStatevalue } from "./Components/StateProvider/Stateprovider";
import { useEffect } from "react";
import { auth } from "./Components/Firbase";
import Payment from "./Components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Order/Orders";
import Footer from "./Components/Footer/Footer";
const promise = loadStripe(
  "pk_test_51NXOrgCBiUKA11IcVYRSRdhzft8mVKrVltXfZVtggsd2KdhS5ldojNtz76LE6PkwfDFWHzj4csySAzHxWPj146ld00ECoomGO4"
);
function App() {
  // const {onRequest} = require("firebase-functions/v2/https");
  // const logger = require("firebase-functions/logger");

  // const express = require('express');
  // const cors = require( 'cors' );
  // const stripe = require("stripe")(
  //   sk_test_51NXOrgCBiUKA11IcQrbtvTcCLOSAjkmNjf323D8TflpFiAFag8AFSDGvW9NQjfKC7Neh1KVImMXlf6HM6StDWgEV0002nXmdPT);
  // // the above is stripe secret key

  // const app = express();
  // app.use( cors( { origin: true } ) );
  // app.use( express.json() );

  // app.get( '/', ( req, res ) => res.status( 200 ).send( 'Hello, World' ) );

  // exports.api = functions.https.onRequest( app ); // onrequest express appn run adergew

  // //functinun function lemasmesel  or run lemareg emulator yasfelgal cloud funcion lemasmesel

  const [{}, dispatch] = useStatevalue();
  useEffect(() => {
    auth.onAuthStateChanged((auther) => {
      if (auther) {
        dispatch({
          // here dispatch is action
          type: "SET__USER", // action type
          user: auther // sign in siaderg(email and password)
        });
      } else {
        dispatch({
          type: "SET__USER",
          user: null // logout siyareg bado adergew
        });
      }
    });
  }, []);
  return (
    <div className="App horizontalScrollHide">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/orders" element={ <><Header /> <Orders />  </> } > </Route>
        <Route path="/" element={ <>   <Header /> <Home /> <Footer /> </> }></Route>
        <Route   path="/payment"element={   <> <Header /><Elements stripe={promise}>  <Payment /> </Elements></> } ></Route>
        <Route path="/checkout" element={<Chekout />} /></Routes>
    </div>
  );
}

export default App;
