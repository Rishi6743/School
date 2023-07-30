import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const ImportantMessage = () => {
  return (
<Container>

      <Alert variant="m-4" className='bg-danger my-4 text-dark'>
        <Alert.Heading>Important Message by DAV Management:</Alert.Heading>
        <p style={{fontSize:"1.2rem"}} className='fw-bold text-white'>
          Governor of Uttarakhand Lieutenant General Gurmeet Singh and Hon'ble Chancellor, Uttarakhand Sanskrit University has conferred Honorary Degree (D.Litt) to Shri Punam Suri, President DAV College Managing Committee. For more details visit <a className='text-primary' href="http://davcmc.net.in" target="_blank" rel="noopener noreferrer">davcmc.net.in</a>
        </p>
      </Alert>
</Container>

  );
};

export default ImportantMessage;
