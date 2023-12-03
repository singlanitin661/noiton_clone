import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './DarkVariantExample.css'; 
import slides_1 from "../assets/images/slides_1.png"
import slides_2 from "../assets/images/slides_2.png"
import slides_3 from "../assets/images/slides_3.png"
import slides_4 from "../assets/images/slides_4.png"
import CarousalWrapper from '../Components/CarousalWrapper';


function DarkVariantExample() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <CarousalWrapper index = {index}/>
    <div className="custom-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" className='carousel_slide'>
        <Carousel.Item >
          <img
            className="d-block w-100 "
            src={slides_1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slides_2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slides_3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slides_4}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  );
}

export default DarkVariantExample;
