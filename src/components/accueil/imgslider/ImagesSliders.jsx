import React, { useState, useEffect } from 'react';
import img1 from '../image/first-page.jpg';
import ImageSlider from './ImageSlider';

const ImagesSliders = () => {
  const slides = [
    { url: img1, title: "beach" },
    { url: img1, title: "boat" },
    { url: img1, title: "forest" },
    { url: img1, title: "city" },
    { url: img1, title: "italy" },
  ];

  
  const [parentWidth, setParentWidth] = useState(900);

 
  const updateWidth = () => {
    const width = window.innerWidth > 900 ? 900 : window.innerWidth * 0.8; 
    setParentWidth(width);
  };

  useEffect(() => {
    
    updateWidth();
    
    
    window.addEventListener('resize', updateWidth);

    
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  
  const containerStyles = {
    width: `${parentWidth}px`,  
    height: `${parentWidth * 0.46}px`,  
    margin: "0 auto",
    marginTop: "10px",
  };

  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={parentWidth} />
      </div>
    </div>
  );
};

export default ImagesSliders;
