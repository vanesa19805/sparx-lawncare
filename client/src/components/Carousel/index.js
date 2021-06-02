import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../assets/mowing.jpg";
import Image2 from "../../assets/landscaping.jpg";
import Image3 from "../../assets/bushTreatment.jpg";

function ImageCarousel(props) {
  return (
    <div className="col-8 mx-auto p-5">

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-75"
            src={Image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-75"
            src={Image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-75"
            src={Image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
