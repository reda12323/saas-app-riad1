import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [stinkyBarActive, setStinkyBarActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    const handleScroll = () => {
        setStinkyBarActive(window.scrollY > 30);
    };

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`header ${stinkyBarActive ? 'stinky-bar-active' : ''}`}>
            <div className="nav-bar">
                <ul className={`nav-bar-part-one ${menuActive ? 'active' : ''}`}>
                    <li>ACCUEIL</li>
                    <li>LA VILLA</li>
                    <li>LA GALERIE</li>
                </ul>
                <span className="nav-bar-title">
                    <span>Riad</span>
                    <span>ROMANA</span>
                </span>
                <ul className={`nav-bar-part-two ${menuActive ? 'active' : ''}`}>
                    <li>LES SERVICES</li>
                    <li>CONTACT</li>
                    <li>ACTUALITÉS</li>
                </ul>
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuActive ? '✖' : '☰'} {/* Toggle between hamburger and X icons */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
