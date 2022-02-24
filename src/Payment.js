// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { CardElement} from '@stripe/react-stripe-js';
import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer';

const Payment = () => {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='payment'>
        <div className='payment_container'>
          <h1>
            Checkout( <Link to="/checkout">{basket?.length}</Link>)
          </h1>
            <div className='payment_section'>
                <div className='payment_title'>
                  <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                  <p>{user?.email}</p>
                  <p>123 React Lane</p>
                  <p>Los Angles, CA</p>
                </div>
            </div>

            <div className='payment_section'>
                <div className='payment _title'>
                  <h3>Review items and Delivery</h3>
                </div>
                <div className='payment_items'>
                  {basket.map(item => (
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                  ))}
                </div>
            </div>

            <div className='payment_section'>
                <div className='payment_title'>
                  <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                    
                    <form >
                        
                        <CardElement/>
                        <div className='payment_priceContainer'>
                          <CurrencyFormat
                            renderText={(value)=>(
                              <>
                              <h3>Order Total: {value}</h3>
                              </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                          />
                          <Link to='/orders'>                         
                            <button>
                              <span>Buy Now</span>
                            </button>
                          </Link>
                        </div>
                        
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment