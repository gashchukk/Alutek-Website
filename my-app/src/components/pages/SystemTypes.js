import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


function SystemTypes() {
    const cardData = [
        {
            id: 1,
            imageUrl: '/зборка/800.jpg'

        },
        {
            id: 2,
            imageUrl: '/зброка/відкривнв.jpg'
        },
        {
            id: 3,
            imageUrl: '/зброка/монорельс.jpg'

        },
        {
            id: 4,
            imageUrl: '/зброка/підвісна.jpg'
        },
        {
            id: 5,
            imageUrl: '/зброка/Розсувна.jpg'

        },
        {
            id: 6,
            imageUrl: '/зброка/Складна.jpg'

        },
        {
            id: 7,
            imageUrl: '/Зброка/Скошена.jpg'

        }

    ];
    return(
        <>
            <h1 style={{
                display: "flex",
                justifyContent: "center",
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>Види Систем</h1>
            <div style={{
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                padding: '20px'
            }}>

                <Row xs={1} sm={2} md={2} lg={4} className="g-4 justify-content-center">
                    {cardData.map((card) => (
                        <Col key={card.id} className="mx-auto">

                            <Card style={{
                                width: '120px',
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
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

        </>
    );
}

export default SystemTypes;
