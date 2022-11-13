import React from 'react';
import style from "./Summary.module.css";
import { useNavigate } from 'react-router-dom';

const Summary = () => {

const Navigate = useNavigate(); 

const handleSummaryClick = () => {
    Navigate("/payment")
}

const handleClick = (e) => {
    Navigate("/address")
}

    return (
        <div className={style.summaryMain}>
            <div className={style.summaryMainMa}>
                <div className={style.summaryMainF}>
                    <div><input type="radio" /></div>
                    <div className={style.summaryMainFAdd}>
                        <h4>HOME</h4>
                        <p>Raviranjan Kumar</p>
                        <p>7631403613</p>
                        <p>Karmi Bigha Rafiganj Aurangabad Bihar Residential Address, Karmi Bigha Rafiganj Aurangabad Bihar</p>
                        <p>Aurangabad Bihar, Bihar - 824125</p>
                    </div>
                </div>
                <div className={style.summaryMainS}>
                    <div className={style.summaryMainSf}><button onClick={() => handleClick()}> + ADD NEW ADDRESS</button></div>
                    <div className={style.summaryMainSs}><button onClick={() => handleSummaryClick()}>CONTINUE</button></div>
                </div>
            </div>
        </div>
    )
}

export default Summary
