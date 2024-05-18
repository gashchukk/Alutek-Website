import React from 'react';
import Card from "react-bootstrap/Card";

const Contacts = () => {
    const addresses = [
        'm. Львів, vul. Promyslova, 45',
        'm. Львів, vul. Luhanska, 4',
        'm. Львів, vul. Hnizdovskogo, 2',
        'm. Іvano-Frankivsk, vul. Pobutova, 4',
    ];

    const phoneNumbers = [
        '+38 067 209 02 33',
        '+38 098 765 43 21',
        '+38 032 222 11 11',
        '+38 034 333 22 22',
    ];

    const email = 'designpolyprint@gmail.com';
    const imageUrls = [
        '/promyslova.png',
        '/luhanska.png',
        '/hnizdovskoho.png',
        '/pobutova.png',
    ];

    const cards = [
        { title: 'м. Львів', addressLine2: 'Промислова 45' },
        { title: 'м. Львів', addressLine2: 'Луганська 4' },
        { title: 'м. Львів', addressLine2: 'Гніздовського 2' },
        { title: 'м.Івано-Франківськ', addressLine2: 'Побутова 4' },
    ];

    return (

        <div className="business-card" style={{ display: 'flex', flexDirection: 'column', alignItems: "center", marginTop:"50px" }}>
            {cards.map((cardData, index) => (
                <Card key={index} style={{ width: '60%', margin: '10px' }}>
                    <div className="card-content" style={{ display: 'flex' }}>
                        <div className="map-container">
                            <img className="map" src={imageUrls[index]} style={{width:"300px" , padding:"30px"}} alt="Map of Business Location" />
                        </div>
                        <div className="info-container">
                            <h2>{cardData.addressLine2}</h2>
                            <p>{cardData.title}</p>
                            <p>{addresses[index]}</p>
                            <p>тел.: {phoneNumbers[index]}</p>
                            <p>email: {email}</p>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default Contacts;
