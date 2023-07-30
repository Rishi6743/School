import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SchoolFeeStructure = () => {
  const feeData = [
    { class: 'UKG', monthlyFee: 5000, yearlyFee: 60000, admissionFee: 10000 },
    { class: '1st to 5th', monthlyFee: 6000, yearlyFee: 72000, admissionFee: 12000 },
    { class: '6th to 8th', monthlyFee: 7000, yearlyFee: 84000, admissionFee: 15000 },
    { class: '9th to 10th', monthlyFee: 8000, yearlyFee: 96000, admissionFee: 20000 },
    { class: '11th to 12th', monthlyFee: 9000, yearlyFee: 108000, admissionFee: 25000 },
  ];

  return (
    <Container className='border border-dark my-5'>
   
      <h1 className="mt-4 border border-dark bg-dark text-white">Fee Structure </h1>
      <Table striped bordered hover responsive className="mt-4">
        <thead>
          <tr>
            <th>Class</th>
            <th>Monthly Fee (INR)</th>
            <th>Yearly Fee (INR)</th>
            <th>Admission Fee (INR)</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((fee, index) => (
            <tr key={index}>
              <td>{fee.class}</td>
              <td>{fee.monthlyFee}</td>
              <td>{fee.yearlyFee}</td>
              <td>{fee.admissionFee}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p className="mb-4">Note: The fees are subject to change. Please remit the fees on or before the due dates.</p>
      
      <Link  to={"/"}><div className='bg-warning fw-bold text-white' style={{textDecoration:"none"}}>Back
      </div></Link> 
    </Container>
  );
};

export default SchoolFeeStructure;
