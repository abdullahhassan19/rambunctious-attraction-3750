import React from 'react';
import style from "../cart/Cart.module.css"
import CartRight from '../cart/CartRight';
import CartLeft from "../cart/CartLeft"

const Cart = () => {
    return (
        <div className={style.main}>
            <div>
                <CartLeft />
            </div>
            <div>
                <CartRight />
            </div>
        </div>
    )
}

export default Cart
