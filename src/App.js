import React, {useEffect, useState} from 'react'; 
import "./App.css";
import Header from'./Header';
import Home from'./Home';
import Checkout from './Checkout';
import Payment from './Payment';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe('pk_test_51KKlZnSI5dJ8VOUx3VlSI8NBtUz4ryxpEOmMcGuADj8MWegd26rLHsdhTMgIf745tceAgpIRtxico0ADzUsTlDgU000bUtUWSK');

function App() {
const [{}, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(
     authUser => {
      console.log('THE USER IS :', authUser);
     
     if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
     } 
     else{
         dispatch(
           {
             type: 'SET_USER',
             user: null
           }
         )
     }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/Orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
            <Route path="/Checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>   
        </Switch>
      </div>
    </Router>
  );
}

export default App;