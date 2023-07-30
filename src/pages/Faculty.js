import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Faculty = () => {
  return (
    <Container className="mt-4">
      <h2>Faculty</h2>
      <Row className="mt-4">
        <Col xs={12} sm={6} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Teaching Faculty</Card.Title>
            
              <Link to="/teachingfaculty" className="btn btn-primary">View Details</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Non-Teaching Faculty</Card.Title>
             
              <Link to="/faculty/non-teaching" className="btn btn-primary">View Details</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Management</Card.Title>
            
              <Link to="/faculty/management" className="btn btn-primary">View Details</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Faculty;
