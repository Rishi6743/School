import React from 'react';
import { Card, Button } from 'react-bootstrap';

const AboutSchool = () => {
  return (
    <Card className='shadow-lg p-2'>
               <Card.Title>About School</Card.Title>
      <Card.Img variant="top" src="http://davbsp.org/File/6707/d5f7d77a-3582-4984-a59a-7fb76b6ecdc4_14_03_2014_03.06.10banner.jpg" alt="School" />
      <Card.Body>
 
        <Card.Text style={{ textAlign: 'left' }}>
          The foundation stone was laid on 8 August 1988 as a middle school in collaboration with South Eastern Coalfields Ltd. With 58 students and 11 staff, it has now grown into a full-fledged institution with a strength of 3132 students and 128 staff.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default AboutSchool;
