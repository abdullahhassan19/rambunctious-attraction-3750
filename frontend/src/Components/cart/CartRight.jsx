import React from 'react';
import style from "../cart/CartRight.module.css";
import { BsExclamationCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const CartRight = () => {
    const Navigate = useNavigate();

const manageClick = (e) => {
    Navigate("/summary")
}

    return (
        <div className={style.CartRightMAin}>

            {/* First Div   */}
            <div className={style.CartRightMAinF}>
                <div className={style.CartRightMAinFF}>Type Care</div>
                <div>
                    <h3>You can save extra ₹234 on this order</h3>
                    <h5>Become a member</h5>
                    <h4>Care plan membership ₹165 ₹549 / 3 months</h4>
                </div>
                <div className={style.CartRightMAinFButton}>
                    <div>
                        <button>Know More</button>
                    </div>
                    <div>
                        <button className={style.CartRightMAinFButton1}>Add to Cart</button>
                    </div>
                </div>
            </div>

            {  /* Second Div */}

            <div className={style.CartRightMAinS}>
                <div className={style.CartRightMAinSF}>
                    <div>Check the health of your vital organs</div>
                    <div className={style.CartRightMAinSFIcon}><BsExclamationCircle /></div>
                </div>
                <div className={style.CartRightMAinSS}>
                    <div><input type="checkbox" /></div>
                    <div><h4>Book Good Health Silver Package for just ₹649
                    </h4></div>
                </div>
                <div className={style.CartRightMAinSTH}>
                    <div></div>
                    <div><p>Get the tests done easily from your home. This package will help you in identifying potential disorders and deficiencies at an early stage.</p></div>
                </div>
                <div className={style.CartRightMAinSFO}>
                    <div></div>
                    <div><p>Pay later on home sample collection
                    </p></div>
                </div>
            </div>

            {  /* Third Div */}

            <div className={style.CartRightMAinTH}>
                <div className={style.CartRightMAinTHF}>
                    <div><h5>Item Total(MRP)</h5></div>
                    <div className={style.CartRightMAinTHFL}><h5>₹6095</h5></div>
                </div>
                <div className={style.CartRightMAinTHF}>
                    <div><h5>Item Total(MRP)</h5></div>
                    <div className={style.CartRightMAinTHFL}><h5>₹6095</h5></div>
                </div>
                <div className={style.CartRightMAinTHF}>
                    <div><h5>Item Total(MRP)</h5></div>
                    <div className={style.CartRightMAinTHFL}><h5>₹6095</h5></div>
                </div>
                <div className={style.CartRightMAinTHF}>
                    <div><h5><strong>To be Paid</strong></h5></div>
                    <div className={style.CartRightMAinTHFL}><h5>₹1200</h5></div>
                </div>
                <div className={style.CartRightMAinTHFLL}>
                    <div><h5>Total Saving</h5></div>
                    <div className={style.CartRightMAinTHFL}><h5>₹1252</h5></div>
                </div>
            </div>

            {  /* Fourth Div */}

            <div  className={style.CartRightMAinFO}>
                <div className={style.CartRightMAinFOF}>
                    <div><p>Your delivery location</p></div>
                    <div className={style.CartRightMAinFOFL}><h3>Aurangabad Bihar</h3></div>
                </div>
                <div className={style.CartRightMAinFOL}><button onClick={() => manageClick()}>Checkout</button></div>
            </div>
        </div>
    )
}

export default CartRight
