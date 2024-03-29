import React, { useState } from 'react';
import style from "../otp/OTP.module.css";
import { PinInput, PinInputField, HStack } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const OTP = () => {
    const [otp, setOtp] = useState("");
    const Navigate = useNavigate();

    const callToast = () => {
        toast.success("Your OTP is 2222", {
            position: toast.POSITION.TOP_CENTER
        })
    }
    const successTost=()=>{
        toast.success("Order is Placed Successfully,  Redirecting you to Home Page", {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
            Navigate("/")
            
        }, 3000);
        
    }

    const handleClick = () => {
        if (otp == 2) {
            successTost()
            
        }
        else{
            toast.error("Your OTP is wrong", {
                position: toast.POSITION.TOP_CENTER
        })
    }
    }


    return (
        <div className={style.otpMain}>
            <h2>Enter OTP here</h2>
            <HStack className={style.otphstack}>
                <PinInput type='alphanumeric' className={style.otppinInput}>
                    <PinInputField onChange={(e) => setOtp(e.target.value)} className={style.otpInputField} />
                    <PinInputField onChange={(e) => setOtp(e.target.value)} className={style.otpInputField} />
                    <PinInputField onChange={(e) => setOtp(e.target.value)} className={style.otpInputField} />
                    <PinInputField onChange={(e) => setOtp(e.target.value)} className={style.otpInputField} />
                </PinInput>
            </HStack>

            <button className={style.getotpbtn} onClick={() => callToast()}>GET OTP</button>
            <ToastContainer />

            <button className={style.otpsubmitbn} onClick={() => handleClick()}>Submit</button>
            <ToastContainer />

        </div>
    )
}

export default OTP
