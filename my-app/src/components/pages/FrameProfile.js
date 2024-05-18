import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function FrameProfile() {

    const cardData = [
        {
            id: 1,
            imageUrl: '/рамковий/PF1.png',
            title: 'PF1 '

        },
        {
            id: 2,
            imageUrl: '/рамковий/PF2.png',
            title: 'PF2 '
        },
        {
            id: 3,
            imageUrl: '/рамковий/PF3.png',
            title: 'PF3 '
        },
        {
            id: 4,
            imageUrl: '/рамковий/PF4.png',
            title: 'PF4 '
        },
        {
            id: 5,
            imageUrl: '/рамковий/PF5.png',
            title: 'PF5 '
        },
        {
            id: 6,
            imageUrl: '/рамковий/PF6.png',
            title: 'PF6 '
        },
        {
            id: 7,
            imageUrl: '/рамковий/PF7.png',
            title: 'PF7'
        },
        {
            id: 8,
            imageUrl: '/рамковий/PF8.png',
            title: 'PF8'
        },
        ];
    return(
        <>
            <h1 style={{display: "flex", justifyContent: "center", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>Рамковий профіль</h1>
            <div style={{
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                padding: '20px'
            }}>

                <Row xs={1} sm={2} md={2} lg={4} className="g-4"
                     style={{ display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "50px" }}> {/* Remove padding from Row */}
                    {cardData.map((card) => (
                        <Col key={card.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Center Col */}

                            <Card style={{
                                width: 'auto', // Remove fixed width
                                display: 'flex',
                                flexDirection: 'column',
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
                <img src="/AvailableColorsFrames.png" style={{width: "600px",height:"350px", margin: "auto"}}/>
            </div>

        </>
    );
}


export default FrameProfile;