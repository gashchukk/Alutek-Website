import React from 'react';
import './ImageRow.css';
import CountUp from "./CountUp";

const ImageRow = () => {
    return (
        <div className="image-row">
            <div className="image-container">
                <CountUp startCount={0} targetCount={15} />
                <h2 style={{color: "white"}}>Років на ринку</h2>
            </div>
            <div className="image-container">
                <CountUp startCount={40} targetCount={100} />
                    <h2 style={{color: "white"}}>Постійних клієнтів</h2>
            </div>
            <div className="image-container">
                <CountUp startCount={800} targetCount={1000}/>
                <h2 style={{color: "white"}}>Схвальних відгуків</h2>
            </div>

        </div>
    );
};

export default ImageRow;