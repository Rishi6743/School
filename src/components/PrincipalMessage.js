import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const PrincipalMessage = () => {
  return (
    <Container className="shadow p-4 rounded my-4" style={{ border: '2px solid grey' }}>
      <h2 className="mb-4 bg-dark text-white p-2">Principal's Message</h2>
      <Row>
        <Col md={6} className="d-flex align-items-top">
          <Image
            src="/images/Principle.jpg"
            style={{
              // width: '50%',
              // height: '50%',
              objectFit: 'cover',
              borderRadius: '1rem',
            }}
          />
        </Col>
        <Col md={6}>
          <p style={{ textAlign: 'left', fontSize:"1.2rem" }}>
            Truly believing in DAV Philosophy, the amalgam of Vedic and modern education. The school aims at holistic
            development of the students. We believe in preparing good human beings who will contribute their worth to the
            task of nation building. Moving along with the winds of change, we endeavor to provide ample opportunities to
            channelize the multifarious talent of our children. The school is committed to providing quality education
            through a plethora of scholastic and co-scholastic activities and events.
          </p>
          <p style={{ textAlign: 'left',  fontSize:"1.2rem" }}>
            Our sincere efforts, dedication, and can-do attitude have made us what we are today. We welcome you all to join
            us on this journey of excellence.
          </p>
          <div style={{ textAlign: 'left', marginTop: '2rem' }}>
            <p>With regards,</p>
            <p className="fw-bold">Mr. K. Parthipan</p>
            <p className="fw-bold">Principal</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PrincipalMessage;
