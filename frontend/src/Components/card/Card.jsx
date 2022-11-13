import React from 'react';
import style from "../card/Card.module.css";
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const Navigate = useNavigate();
    const handlePaymentSubmit = () => {
        Navigate("/payment/otp")
    }


    return (
        <div>
            <div className={style.container}>

                <form action="">
                    <h1 className={style.credit}>Credit & Debit Cards</h1>
                    <p>Add New Card For Payment</p>
                    <div className={style.inputBox}>
                        <span>card number</span>
                        <input type="text" maxlength="16" className={style.cardnumberinput} placeholder='XXXX XXXX XXXX XXXX' />
                    </div>
                    <div className={style.inputBox}>
                        <span>card holder</span>
                        <input type="text" class="card-holder-input" placeholder='Nam on Card' />
                    </div>
                    <div className={style.flexbox}>
                        <div className={style.inputBox}>
                            <span>expiration mm</span>
                            <select name="" id="" className={style.monthinput}>
                                <option value="month" selected disabled>month</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div className={style.inputBox}>
                            <span>expiration yy</span>
                            <select name="" id="" className={style.yearinput}>
                                <option value="year" selected disabled>year</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                            </select>
                        </div>
                        <div className={style.inputBox}>
                            <span>Security code</span>
                            <input type="text" maxlength="3" className={style.cvvinput} placeholder='cvv' />
                        </div>
                    </div>
                    <input type="submit" value="Make-Payment" className={style.submitbtn} onClick={() => handlePaymentSubmit()}/>
                </form>

            </div>
        </div>
    )
}

export default Card
