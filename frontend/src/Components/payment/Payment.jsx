import React from 'react'
import { Tabs, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react';
import { SiPhonepe } from 'react-icons/si'
import { IoMdWallet, IoMdCard } from "react-icons/io";
import { RiBankLine } from "react-icons/ri";
import { FaMoneyBillAlt } from "react-icons/fa";
import payment from '../assets/payment-method.png';
import { Checkbox } from '@chakra-ui/react'
import cash from '../assets/cash.png';
import paytm from '../assets/paytm.png';
import amazon from '../assets/amazon.png';
import mobiwik from '../assets/mobiwik.png';
import freecharge from '../assets/freecharge.png';
import airtel from '../assets/airtel.png';
import phonepe from '../assets/phonepe.png'
import style from "../payment/Payment.module.css"
import Card from './../card/Card';

const Payment = () => {
    return (
        <div>
            <Tabs className={style.paymentMain}>
                <div className={style.paymentMainF}>
                    <div className={style.paymentmethod}>
                        <Tab className={style.UPI}><div className={style.icons}><SiPhonepe color="#636363" /></div><p>PhonePe</p></Tab>
                        <Tab className={style.UPI}><div className={style.icons}><IoMdWallet color="#636363" /></div><p>Wallets</p></Tab>
                        <Tab className={style.UPI}><div className={style.icons}><IoMdCard color="#636363" /></div><p>Card</p></Tab>
                        <Tab className={style.UPI}><div className={style.icons}><RiBankLine color="#636363" /></div><p>Net Banking</p></Tab>
                        <Tab className={style.UPI}><div className={style.icons}><FaMoneyBillAlt color="#636363" /></div><p>Pay On Delivery</p></Tab>
                    </div>
                </div>

                <div className={style.paymentMainS}>
                    <div className={style.paymentMainSF}>
                        <TabPanels>
                            <TabPanel className={style.upi}>
                                <img src={payment} alt="" />
                                <div className={style.savedupi}>
                                    <input placeholder='Ex: mobilenumber@upi' type='text' />
                                    <p>The UPI ID is in the format of name/phone <br />number@bankname</p>
                                    <Checkbox className={style.check}>Securely save this VPA for faster checkout<br /> next time</Checkbox>

                                </div><br />
                                <Button className={style.pay}>VERIFY & PAY</Button>
                            </TabPanel>
                            <TabPanel className={style.wallet}>
                                <div>
                                    <div className={style.paytm}>
                                        <img src={paytm} alt='' />
                                    </div>
                                    <div className={style.paytm}>
                                        <img src={amazon} alt='' />
                                    </div>
                                    <div className={style.paytm}>
                                        <img src={mobiwik} alt='' />
                                    </div>
                                    <div className={style.freecharge}>
                                        <img src={freecharge} alt='' />
                                    </div>
                                    <div className={style.paytm}>
                                        <img src={airtel} alt='' />
                                    </div>
                                    <div className={style.phonepe}>
                                        <img src={phonepe} alt='' />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className={style.card}>
                                <Card />
                            </TabPanel>
                            <TabPanel className={style.bank}>
                                <p>Net Banking</p>
                            </TabPanel>
                            <TabPanel >
                                <div className={style.deleviry}>
                                    <img src={cash} alt='' />
                                </div>
                            </TabPanel>
                        </TabPanels><br />
                    </div>

                </div>
            </Tabs>
        </div>
    )
}

export default Payment