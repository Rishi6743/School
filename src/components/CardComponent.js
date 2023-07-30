import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardComponent = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cardData = [
    {
      title: "Chairman's Message",
      path: '/chairmans-message',
    },
    {
      title: 'Transfer Certificate',
      path: '/transfer-certificate',
    },
    {
      title: 'Sports Achievements',
      path: '/sports-achievements',
    },
    {
      title: 'Fee Structure',
      path: '/schoolfeestructure',
    },
    {
      title: 'Notice Board',
      path: '/notice-board',
    },
  ];

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <Container>
      <Row className="mt-4 my-2 justify-content-center">
        {cardData.map((data, index) => (
          <Col sm={12} md={6} lg={4} key={index} className="my-2">
            <Link to={data.path} className="text-decoration-none">
              <Card
                style={{ cursor: "pointer", borderRadius: "10px" }}
                className={`shadow-lg bg-dark text-white`}
                // style={{ cursor: "pointer"}}
                onClick={() => handleCardClick(index)}
              >
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardComponent;
