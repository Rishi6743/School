import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const NoticeBoard = () => {
  const notices = [
    {
      date: '02-06-2023',
      title: 'X RESULT ANALYSIS 2022-23',
      link: 'Download(pdf)',
    },
    {
      date: '02-06-2023',
      title: 'XII RESULT ANALYSIS 2022-23',
      link: 'Download',
    },
    {
      date: '22-06-2023',
      title: 'Class XI - Admission Criteria 2023-24',
      link: 'Download',
    },
    {
      date: '23-06-2023',
      title: 'Nursery Admission Lottery Date',
      link: 'Download',
    },
  ];

  return (
    <Container className="mt-4">
      <div className="bg-primary text-white py-2 px-3 rounded-top">
        <h3>Notice Board</h3>
      </div>
      <ListGroup variant="flush" className="rounded-bottom" style={{ maxHeight: '260px' }}>
        {notices.reverse().map((notice, index) => (
          <ListGroup.Item
            key={index}
            className={`p-3 ${index % 2 === 0 ? 'bg-light' : 'bg-info'}`}
          >
            <p className="text-muted mb-1">{notice.date} | {notice.link}</p>
            <h5>{notice.title}</h5>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default NoticeBoard;
