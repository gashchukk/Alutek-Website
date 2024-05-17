import React from 'react';
import { Link } from 'react-router-dom';
import './ImageFrames.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const cardData = [
    {
        id: 1,
        imageUrl: '/ручки/16.png',
        title: 'Розсувні системи до шаф купе',
        link: '/catalogue'
    },
    {
        id: 2,
        imageUrl: '/IMG-1240.png',
        title: 'Алюмінієвий рамковий профіль',
        link: '/frameprofile'
    },
    {
        id: 3,
        imageUrl: '/IMG-1550.jpg',
        title: 'Фурнітура',
        link: '/furniture'
    },
    {
        id: 4,
        imageUrl: '/зборка/800.jpg',
        title: 'Види алюмінієвих меблевих систем',
        link: '/systemtypes'
    },
];

const ImageFrames = () => {
    return (
        <Row xs={1} sm={2} md={2} lg={4} className="g-4"  style={{display:"flex", justifyContent:"space-between", padding:"30px", marginBottom:"50px"}}>
            {cardData.map((card) => (
                <Col key={card.id}>
                    <Link to={card.link} className="card-link">
                        <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src={card.imageUrl} style={{ height: '12rem' }} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    );
};

export default ImageFrames;
