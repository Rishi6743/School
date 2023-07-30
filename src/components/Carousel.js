import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ images }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      className='m-4'
      autoPlay
      interval={3000} // Set the time in milliseconds for each slide to remain visible
    >
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image.url}
            alt={`Slide ${index + 1}`}
            style={{ maxHeight: '600px', objectFit: 'cover' }}
          />
          <div className="legend">
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
