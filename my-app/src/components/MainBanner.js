import React from 'react';
import ImageRow from "./ImageRow";
const MainBanner = () => {
    return (
        <>
            <div
                className="main-banner"
                style={{
                    backgroundImage: 'url("/photo_background.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div className="container" style={{marginLeft: '20px'}}>
                    <h1>Вітаємо в <b>Alutek</b></h1>
                    <p>
                        №1 імпортер алюмінієвого<br/> профілю в Україні. Since 2009.
                    </p>
                </div>
            </div>

        </>
    );
};



export default MainBanner;