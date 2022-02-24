import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Payment from './Payment'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders'

const promise = loadStripe
('pk_test_51KVV68SIPxUtjJ6xb83euTPqM9MmbSDNBNQozDYgKSwxA0aSlUkUM82jFzC5mIEO1x1qr4mEzscdVbKbAxO4C5w30036vI12sk');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/orders'>
              <Header/>
              <Orders/>
          </Route>
          <Route path='/login'>
              <Login/>
          </Route>
          <Route path='/checkout'>
              <Header/>
              <Checkout/>
          </Route>
          <Route path='/payment'>
            <Header/>
            <Elements stripe={promise}>
            {/* <Elements> */}
              <Payment/>
            </Elements>
          </Route>
          <Route path='/'>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
