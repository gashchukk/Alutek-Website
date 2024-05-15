import React from 'react';
import "./ImageWithtext.css"
const ImageWithText = ({ imageUrl, text }) => {
    return (
        <div className="image-with-text-container" style={{alignItems: "center", padding: "30px"}}>
            <div className="image-container">
                <img style={{width:"500px", height:"300px"}} src={imageUrl} alt="Image" className="image" />
            </div>
            <div className="text-container">
                <p className="text" style={{color:"white", lineHeight:"2.0"}}>{text}</p>
            </div>
        </div>
    );
};

export default ImageWithText;
