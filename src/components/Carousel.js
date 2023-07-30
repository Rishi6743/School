import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = ({ images }) => {
  return (
    <Carousel prevIcon={<span style={{fontSize:7+"rem"}}  className="carousel-control-icon">&#8249;</span>} 
              nextIcon={<span  style={{fontSize:7+"rem"}} className="carousel-control-icon">&#8250;</span>}
   className='m-4' >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.url}
            alt={`Slide ${index + 1}`}
            style={{ maxHeight: '600px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;

