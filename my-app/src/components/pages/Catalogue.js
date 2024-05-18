import React from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

function Catalogue() {
    const cardData = [
        {
            id: 1,
            imageUrl: '/ручки/119.png',
            title: '119 '

        },
        {
            id: 2,
            imageUrl: '/ручки/120.png',
            title: '120 ',
        },
        {
            id: 3,
            imageUrl: '/ручки/800.png',
            title: '800 ',
        },
        {
            id: 4,
            imageUrl: '/ручки/106.png',
            title: '106',
        },
        {
            id: 5,
            imageUrl: '/ручки/107.png',
            title: '107 ',
        },
        {
            id: 6,
            imageUrl: '/ручки/110.png',
            title: '110 ',
        },
        {
            id: 7,
            imageUrl: '/ручки/111.png',
            title: '111 ',
        },
        {
            id: 8,
            imageUrl: '/ручки/112.png',
            title: '112 ',
        },
        {
            id: 9,
            imageUrl: '/ручки/114.png',
            title: '114 ',
        },
        {
            id: 10,
            imageUrl: '/ручки/115.png',
            title: '115 ',
        },
        {
            id: 11,
            imageUrl: '/ручки/201.png',
            title: '201 ',
        },
        {
            id: 12,
            imageUrl: '/ручки/202.png',
            title: '202 ',
        },
    ];
    return(
        <>
            <h1 style={{display: "flex", justifyContent: "center", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>Розсувні системи</h1>
            <div style={{
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                padding: '20px'
            }}>

                <Row xs={1} sm={2} md={2} lg={6} className="g-4"
                     style={{ display: "flex", justifyContent: "space-between" }}> {/* Remove padding from Row */}
                    {cardData.map((card) => (
                        <Col key={card.id}>

                            <Card style={{
                                width: 'auto', // Remove fixed width
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '15px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#fff'
                            }}>
                                <Card.Img variant="top" src={card.imageUrl} style={{ width: '100px' }} />
                                <Card.Body style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '10px 0'
                                }}>
                                    <Card.Title>{card.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <h2 style={{display: "flex", justifyContent: "center", marginTop:"30px"}}>Кольори в наявності</h2>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img src="/AvailableColors.png" style={{width: "600px", margin: "auto"}}/>
            </div>

        </>
    );
}

export default Catalogue;