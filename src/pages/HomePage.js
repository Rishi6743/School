import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import PrincipalMessage from '../components/PrincipalMessage';
import AboutSchool from '../components/AboutSchool';


const HomePage = () => {
  return (
    <Container className="mt-4">
      {/* <Row>
        <Col sm={12} md={6}>
          <AboutSchool />
        </Col>
        <Col sm={12} md={6}> */}
<PrincipalMessage/>
        {/* </Col>
      </Row> */}
    </Container>
  );
};

export default HomePage;
