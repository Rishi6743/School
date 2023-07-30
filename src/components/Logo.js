import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const LogoOnlyNavBar = () => {
  return (
    <Navbar bg="dark" variant="light" expand="lg">
      <Container className='d-flex justify-content-between align-items-center'>
        <Navbar.Brand className='text-white' >
          <img
            src="http://davbsp.org/MyImages/LOGO.png"
            alt="Your Logo"
            style={{ height: '7rem' }}
          />
         D.A.V Public School
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default LogoOnlyNavBar;
