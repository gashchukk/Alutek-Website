import React, { useState, useEffect } from 'react';
import './PhoneNumberPopup.css';

const PhoneNumberPopup = ({ delay }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            handleOpenPopup();
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setPhoneNumber('');
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the phone number
        console.log('Phone Number:', phoneNumber);
        handleClosePopup();
    };

    return (
        <div>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <span className="close-btn" onClick={handleClosePopup}>
                            &times;
                        </span>
                        <h3>Введіть номер телефону і ми вам зателефонуємо </h3>
                        <form style={{display:"flex", justifyContent:"center"}} onSubmit={handleSubmit}>
                            <input
                                type="tel"
                                placeholder="+380"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                required
                            />
                            <button type="submit" style={{color:"white", backgroundColor:"black"}}>Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhoneNumberPopup;
