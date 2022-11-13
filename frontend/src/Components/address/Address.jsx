import React from 'react';
import { useState } from 'react';
import style from "../address/Address.module.css";
import { useNavigate } from 'react-router-dom';




const Address = () => {

    const initialState = {
        custAddress : "",
        custLand : "",
        custPinCode : "",
        custLocality : "",
        custCity : "",
        custState : "",
        custNumber : ""
    };

    const [customer, setCustomer] = useState(initialState);
    const Navigate = useNavigate();

    const handleChange = (e) => {
        const {name , value} = e.target;
        setCustomer({ ...customer , [name] : value })
    }

    const handleSave = (e) => {
        // localStorage.setItem(customer)
        Navigate('/payment');
    }
    return (
        <form>
            <div className={style.addressMain}>
                <h2>Add New Address</h2>
                <div className={style.addressMainF}>
                    <div className={style.addMainFF}>
                        <input type="text" placeholder='Flat Number, Building Name, Locality/Street' onChange={handleChange} name="custAddress" value={customer.custAddress}/>
                    </div>

                    <div className={style.addMainFF}>
                        <input type="text" placeholder='Landmark(optional)' onChange={handleChange} name="custLand" value={customer.custLand}/>
                    </div>

                    <div className={style.addMainFF}>
                        <input type="number" placeholder='Pincode' onChange={handleChange} name="custPinCode" value={customer.custPinCode} />
                    </div>

                    <div className={style.addMainFF}>
                        <input type="text" placeholder='Locality' onChange={handleChange} name="custLocality" value={customer.custLocality} />
                    </div>

                    <div className={style.addMainFF}>
                        <input type="text" placeholder='City' onChange={handleChange} name="custCity" value={customer.custCity} />
                    </div>

                    <div className={style.addMainFF}>
                        <input type="text" placeholder='State' onChange={handleChange} name="custState" value={customer.custState} />
                    </div>

                    <div className={style.addMainFF}>
                        <input type="number" placeholder='10 Digit Mobile No' onChange={handleChange} name="custNumber" value={customer.custNumber} />
                    </div>

                    <div className={style.addMainFFbUTTON}>
                        <div className={style.addMainFFbUTTONSave}><button onClick= {(e) => handleSave()}>SAVE</button></div>
                        <div><button>CANCEL</button></div>
                    </div>

                </div>
            </div>
        </form>
    )
}

export default Address