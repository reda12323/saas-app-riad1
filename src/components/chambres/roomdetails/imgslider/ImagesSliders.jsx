import  { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider';
import './ImagesSliders.css'

const ImagesSliders = (props) => {
  const slides = [
    { url: props.img1, title: "beach" },
    { url: props.img2, title: "boat" },
    { url: props.img3, title: "forest" },
    { url: props.img4, title: "city" },
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
