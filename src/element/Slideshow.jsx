import React, { useEffect, useState } from 'react';
import '../App.css';
import './Slideshow.css';

const Slideshow = () => {
  const imagePaths = [
    `${process.env.PUBLIC_URL}/images/0.jpg`,
    `${process.env.PUBLIC_URL}/images/2.png`,
    `${process.env.PUBLIC_URL}/images/3.png`,
    `${process.env.PUBLIC_URL}/images/4.jpg`,
    `${process.env.PUBLIC_URL}/images/5.png`,
    // Add more image paths as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % imagePaths.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [imagePaths.length]);

  return (
    <div className="Slideshow">
      <div
        className="slideshow_wrapper"
        style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }} // Adjust for multiple images
      >
        {imagePaths.map((path, index) => (
          <img className="slideshow_image" key={index} src={path} alt={`img-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
