import React from 'react'
import { useStateValue } from '../StateProvider';
import Subtotal from '../Subtotal/Subtotal'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

  return (
    <>
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/Pre_Book_Banner_PC.jpg" alt="" className="checkout__ad" />

                <div>
                    <h3>{user ? ['Hello,', user.email] : ''}</h3>
                    {/* <h3>Hello, {user?.email}</h3> */}
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
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
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    </>
  )
}

export default Checkout //4:51