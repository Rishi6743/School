import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ position: 'relative', background: '#343a40', color: '#fff' }}>
      <Container fluid className="py-4">
        <Row>
          <Col md={4} className="text-center">
            <div>
              <img
                src="path/to/school/image.png"
                alt="School Logo"
                style={{ width: '100px', marginBottom: '10px' }}
              />
              <p>VASANT VIHAR, SECL SEEPAT ROAD</p>
              <p>BILASPUR, C.G.-495006</p>
              <p>Contact no: 07752240262</p>
              <p>Email: davps.bsp@gmail.com</p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div>
              <h5>Quick Links</h5>
              <p>FEE STRUCTURE</p>
              <p>EXAMINATION SYSTEM</p>
              <p>STUDENTS COUNCIL</p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div>
              <h5>Contact Us</h5>
              <p>P.T.M</p>
              <p>CONTACT US</p>
              <p>FEEDBACK</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col md={12} className="text-center">
          <div>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.368434456212!2d82.18021511492108!3d22.091814985395364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280afa375f7a19%3A0x1b37270dceb6b1df!2sD.A.V.%20Public%20School%20Bilaspur!5e0!3m2!1sen!2sin!4v1665323446717!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
