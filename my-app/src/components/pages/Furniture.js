import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


function Furniture() {
    const cardData = [
        {
            id: 1,
            imageUrl: '/завіси/1.jpg'

        },
        {
            id: 2,
            imageUrl: '/завіси/2.jpg'
        },
        {
            id: 3,
            imageUrl: '/завіси/3.jpg'

        },
        {
            id: 4,
            imageUrl: '/завіси/4.jpg'
        },
        {
            id: 5,
            imageUrl: '/завіси/5.jpg'

        },
        {
            id: 6,
            imageUrl: '/завіси/6.jpg'

        },
        {
            id: 7,
            imageUrl: '/завіси/7.jpg'

        },
        {
            id: 8,
            imageUrl: '/завіси/8.jpg'
        },
        {
            id: 9,
            imageUrl: '/завіси/9.jpg'
        },
        {
            id: 10,
            imageUrl: '/завіси/10.jpg'
        },
    ];
    return(
        <>
            <h1 style={{display: "flex", justifyContent: "center", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>Фурнітура</h1>
            <div style={{
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                padding: '20px'
            }}>

                <Row xs={1} sm={2} md={2} lg={5} className="g-4"
                     style={{ display: "flex", justifyContent: "space-between", padding: "100px", marginBottom: "50px" }}>
                    {cardData.map((card) => (
                        <Col key={card.id}>

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


export default Furniture;