import { useState, useEffect } from 'react';
import Navbar from '../accueil/Navbar';
import './Slider.css';

const Slider = () => {
    const images = [
        'https://riadmarrakech.net/wp-content/uploads/2024/08/image-5.jpeg.webp', 
        'https://t4.ftcdn.net/jpg/05/55/98/93/360_F_555989302_UccbXgClldzfyHmTjYO1zY1wxCo2RGbe.jpg',
        'https://c1.wallpaperflare.com/preview/110/27/758/morocco-hotel-indoor-pool.jpg',
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
                style={{ backgroundImage: `url(${images[currentIndex]})`,backgroundSize: "cover" }}
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
