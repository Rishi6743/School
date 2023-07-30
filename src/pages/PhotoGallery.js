import React, { useState } from "react";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PhotoGallery = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages = [
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", 
    "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    "https://plus.unsplash.com/premium_photo-1681701892410-c22d446a0567?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1198&q=80",
    "https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowSlider(true);
  };

  const handleCloseSlider = () => {
    setShowSlider(false);
  };

  return (
    <Container className="border border-dark my-4">
      <h2 className="my-4 bg-dark p-4 text-white">Photo Gallery</h2>
      <Row>
        {galleryImages.map((image, index) => (
          <Col key={index} xs={6} md={4} lg={3} className="my-2">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="img-fluid"
              style={{ cursor: "pointer" }}
              onClick={() => handleImageClick(index)}
            />
          </Col>
        ))}
      </Row>

      <Modal show={showSlider} onHide={handleCloseSlider} size="xl" centered>
        <Modal.Header closeButton>
       
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '80vh' }}>
          <Carousel
            selectedItem={selectedImageIndex}
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            showArrows={true}
            dynamicHeight={true}
          >
            {galleryImages.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="img-fluid"
                  style={{ maxWidth: '100%', maxHeight: '60vh', margin: '0 auto' }}
                />
              </div>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default PhotoGallery;





