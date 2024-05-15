import React from 'react';
import { Link } from 'react-router-dom';
import './ImageFrames.css';

const ImageFrames = () => {
    return (
        <div className="image-frames">
            <Link to="/doorscoupe" className="image-frame">
                <img src="path/to/image1.jpg" alt="Image 1" />
                <p>Розсувні системи до шаф купе</p>
            </Link>
            <Link to="/frameprofile" className="image-frame">
                <img src="/2706074222_2706074222.jpg.webp" alt="Image 2"/>
                <p>Алюмінієвий рамковий профіль</p>

            </Link>
            <Link to="/furniture" className="image-frame">
                <img src="path/to/image3.jpg" alt="Image 3"/>
                <p>Фурнітура</p>

            </Link>
            <Link to="/systemtypes" className="image-frame">
                <img src="path/to/image4.jpg" alt="Image 4"/>
                <p>Види алюмініжвих меблевих систем</p>

            </Link>
        </div>
    );
};

export default ImageFrames;