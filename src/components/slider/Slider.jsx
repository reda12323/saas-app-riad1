import { useState, useEffect } from 'react';
import Navbar from '../sitebar/Navbar';
import './Slider.css';

const Slider = () => {
    const images = [
        'https://darchadia.com/wp-content/uploads/2022/06/20220618_111710v2-scaled.jpg', 
        'https://darchadia.com/wp-content/uploads/2022/06/20220618_105811-1024x768.jpg',
        'https://darchadia.com/wp-content/uploads/2022/06/20220618_110349-1024x768.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">
            <div
                className="slider-background"
                style={{ backgroundImage: `url(${images[currentIndex]})`,backgroundSize: "cover", }}
            >
                <Navbar />
            </div>
            <button className="slider-button previous" onClick={goToPrevious}>
                &#10094; {/* Left Arrow */}
            </button>
            <button className="slider-button next" onClick={goToNext}>
                &#10095; {/* Right Arrow */}
            </button>
        </div>
    );
};

export default Slider;
