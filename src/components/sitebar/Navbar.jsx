import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Navbar.css';

const Navbar = () => {
    const [stinkyBarActive, setStinkyBarActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    const handleScroll = () => {
        setStinkyBarActive(window.scrollY > 0);
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
                    <li>
                        <NavLink
                            className='Link'
                            to="/"
                            style={({ isActive }) => ({
                                opacity: isActive ? '0.5' : '1',
                            })}
                        >
                            ACCUEIL
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className='Link'
                            to="/riad"
                            style={({ isActive }) => ({
                                opacity: isActive ? '0.5' : '1',
                            })}
                        >
                            LE RIAD
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className='Link'
                            to="/galerie"
                            style={({ isActive }) => ({
                                opacity: isActive ? '0.5' : '1',
                            })}
                        >
                            GALERIE
                        </NavLink>
                    </li>
                </ul>
                <NavLink className='Link-title' to="/">
                    <span className="nav-bar-title">
                        <span>Riad</span>
                        <span>ROMANA</span>
                    </span>
                </NavLink>
                <ul className={`nav-bar-part-two ${menuActive ? 'active' : ''}`}>
                    <li>
                        <NavLink
                            className='Link'
                            to="/chambres"
                            style={({ isActive }) => ({
                                opacity: isActive ? '0.5' : '1',
                            })}
                        >
                            CHAMBRES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className='Link'
                            to="/tarifs"
                            style={({ isActive }) => ({
                                opacity: isActive ? '0.5' : '1',
                            })}
                        >
                            TARIFS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className='Link'
                            to="/contact"
                            style={({ isActive }) => ({
                                opacity: isActive ? '0.5' : '1',
                            })}
                        >
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuActive ? '✖' : '☰'}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
