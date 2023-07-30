import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const TeachingFaculty = () => {
    const teachingStaffList = [
        { name: 'Mrs. Rajni Shewalkar', designation: 'PGT' },
        { name: 'Mr. Anil V. Pandhare', designation: 'PGT' },
        { name: 'Mr. Subhashis Basak', designation: 'PGT' },
        { name: 'Mrs. S. Suchitra Rao', designation: 'PGT' },
        { name: 'Mr. Ajay Barnard Innes', designation: 'PGT' },
        { name: 'Mrs. Ruchira Mukherjee', designation: 'PGT' },
        { name: 'Mr. Udai Rajpal', designation: 'TGT' },
        { name: 'Mrs. Pinky Gaur', designation: 'TGT' },
        { name: 'Mr. Sanjay Sharma', designation: 'TGT' },
        { name: 'Mrs. Sangita Joseph', designation: 'TGT' },
        { name: 'Mr. Pranav Banerjee', designation: 'TGT' },
        { name: 'Mrs. Alokeparna', designation: 'TGT' },
        { name: 'Mr. Ramesh Singh', designation: 'TGT' },
        { name: 'Mr. Arvind Chaddha', designation: 'TGT' },
        { name: 'Mrs. Vidya Ramesh', designation: 'TGT' },
        { name: 'Mrs. Papri Ahmed', designation: 'TGT' },
        { name: 'Mr. Subrata Tiwari', designation: 'TGT' },
        { name: 'Mrs. Sadhana Acharya', designation: 'TGT' },
        { name: 'Mr. Austin Vivek Pratap', designation: 'TGT' },
        { name: 'Mr. Premanand Panda', designation: 'TGT' },
        { name: 'Mrs. Manisha Khullar', designation: 'TGT' },
        { name: 'Ms. Ranju Sharma', designation: 'TGT' },
        { name: 'Mrs. Timmy Sood', designation: 'TGT' },
        { name: 'Mrs. Jyotsna Sinha', designation: 'TGT' },
        { name: 'Mrs. Reshu Chadhary', designation: 'TGT' },
        { name: 'Mrs. Sharbani Chatterjee', designation: 'TGT' },
        { name: 'Mr. Satish Chandra Sharma', designation: 'PRT' },
        { name: 'Mrs. Ashpinder Kaur', designation: 'PRT' },
        { name: 'Mrs. Seema Mishra', designation: 'PRT' },
        { name: 'Mrs. Manju Sahu', designation: 'PRT' },
        { name: 'Mrs. Shipra Bhoumick', designation: 'PRT' },
        { name: 'Mrs. S. L. Sreeja', designation: 'PRT' },
        { name: 'Mrs. Ranjana Dubey', designation: 'PRT' },
        { name: 'Mr. Chandreswar Tiwari', designation: 'PRT' },
        { name: 'Mrs. Anjushree Dani', designation: 'PRT' },
        { name: 'Mrs. Shatkashi', designation: 'PRT' },
        { name: 'Mrs. B. Padmaja', designation: 'PRT' },
        { name: 'Mr. Pramod Singh Tiwari', designation: 'PRT' },
        { name: 'Mr. Trilochan Panda', designation: 'PRT' },
        { name: 'Mrs. Shipra Chaddha', designation: 'PRT' },
        { name: 'Mr. Brahma Paricha', designation: 'PRT' },
        { name: 'Mrs. Anshu Nikera', designation: 'PRT' },
        { name: 'Mr. Anil Varghese', designation: 'PRT' },
        { name: 'Mr. Nilesh Pradhan', designation: 'PRT' },
        { name: 'Mr. Surti Sudarshan Jaiswal', designation: 'PRT' },
        { name: 'Mr. Hasan Khan', designation: 'PRT' },
        { name: 'Mrs. Aradhana Mishra', designation: 'PRT' },
        { name: 'Ms. Pinku Das', designation: 'PRT' },
        { name: 'Mrs. Manjusha Singh', designation: 'PRT' },
        { name: 'Mrs. M. Aruna', designation: 'PRT' },
        { name: 'Mrs. Sonila Lata', designation: 'PRT' },
        { name: 'Ms. Mitu Rani Mallick', designation: 'PRT' },
        { name: 'Mrs. Asha R. Joseph', designation: 'PRT' },
        { name: 'Mr. Rakesh Kumar Dey', designation: 'PRT' },
        { name: 'Mrs. Bindu Anthony', designation: 'PRT' },
        { name: 'Mrs. Pranita Kundu', designation: 'PRT' },
        { name: 'Mrs. Shaily Raj', designation: 'PRT' },
        { name: 'Mrs. Jitu Rani Mitra', designation: 'PRT' },
        { name: 'Mrs. Prantika Adhkari', designation: 'PRT' },
        { name: 'Mrs. Rupa Dubey', designation: 'PRT' },
        { name: 'Mrs. Yashmita Singh', designation: 'PRT' },
        { name: 'Mrs. S. Madhavi', designation: 'PRT' },
        { name: 'Mrs. Sangita Phadke', designation: 'N/KG TR' },
        { name: 'Mrs. T. Srilalita Sarma', designation: 'PRE-PRIM TR' },
        { name: 'Mrs. P. Kamla Kumari', designation: 'PRE-PRIM TR' },
        { name: 'Mrs. S. Manjula', designation: 'NUR. TR' },
        { name: 'Mrs. Geetu Manchanda', designation: 'PRE-PRIM TR' },
        { name: 'Mrs. Shahnaz Khan Khokhar', designation: 'NUR. TR' },
        { name: 'Mrs. A. R. Choudhary', designation: 'PRE-PRIM TR' },
        { name: 'Mrs. Deepa Bhattacharya', designation: 'PRE-PRIM TR' },
        { name: 'Mrs. Swati Tiwari', designation: 'PRE-PRIM TR' },
      ];
      

        return (
          <Container className="mt-4 my-4">
            <h2 className="text-center mb-4 bg-dark p-3 text-white">Teaching Staff</h2>
            <Row className="gx-4 gy-3">
              {teachingStaffList.map((staff, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                  <Card className="h-100 shadow">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Title className="text-center">{staff.name}</Card.Title>
                      <Card.Subtitle className="text-muted">Designation: {staff.designation}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        );
      };
      
      export default TeachingFaculty;