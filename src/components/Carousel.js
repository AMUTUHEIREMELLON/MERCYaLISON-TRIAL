import React from 'react';
import Grant from "../Assets/Grant.jpg";
import Tomato from "../Assets/Tomato.jpg";

function Carousel() {
  const images = [Grant, Tomato];
  
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Carousel ${index}`} />
      ))}
    </div>
  );
}

export default Carousel;