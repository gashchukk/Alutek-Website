import React from 'react';
import "./ImageWithtext.css"
const ImageWithText = ({ imageUrl, text }) => {
    return (
        <div className="image-with-text-container">
            <div className="image-container">
                <img src={imageUrl} alt="Image" className="image" />
            </div>
            <div className="text-container">
                <p className="text">{text}</p>
            </div>
        </div>
    );
};

export default ImageWithText;
