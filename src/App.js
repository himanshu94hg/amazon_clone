import React, { useEffect } from 'react';
import Header from './Header/Header.js';
import Home from './Home/Home.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from './Checkout/Checkout.js';
import Login from './Login/Login.js';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider.js';
import Payment from './Payment/Payment.js';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders/Orders.js';

const promise = loadStripe("pk_test_51LmNS6SJNA8RfZhcx9E34KZfZhCzuLgX84aqxX8nwewVquNnBGMJh1dngb8bx0RpRscu3lWobUJOnhTONHFsoZn100oQ8IfCYS");

function App() {
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {

    // will only loads once when app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>', authUser);
      
      if(authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  return (
  <>
  <BrowserRouter>
    <div className="app">
    
      <Routes>
        <Route path='/orders' element={<><Header/><Orders/></>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/checkout' element={<><Header/><Checkout/></>} />

        <Route path='/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>

        <Route path='/' element={<><Header/><Home/></>} />

      </Routes>
    </div>  
  </BrowserRouter>
  </>
  );
}

export default App; //3.26
