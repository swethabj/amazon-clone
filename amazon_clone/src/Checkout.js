import React from 'react';
import './Checkout.css';
import checkout_ad from './images/offer.PNG';
import Subtotal from './Subtotal'


function Checkout() {
    return (
        <div className="checkout">

                <div className="checkout_left">
                        <img className="checkout_add" src={checkout_ad} alt="offer image"/>
                        <div>
                                <h2 className="checkout_title">
                                    Your Shopping Basket
                                </h2>
                        </div>
                </div>


                <div className="checkout_right">
                        <Subtotal className="checkout_title">
                        </Subtotal>        
                </div>
                
        </div>
    )
}

export default Checkout
