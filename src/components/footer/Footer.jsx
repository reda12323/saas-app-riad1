import './Footer.css';
import { FaFacebookF, FaTwitter, FaFlickr, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-first-main">
            <div className="social-icons">
                <ul>
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="icon" />
                            <span className="icon-name">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="icon" />
                            <span className="icon-name">Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.flickr.com" target="_blank" rel="noopener noreferrer">
                            <FaFlickr className="icon" />
                            <span className="icon-name">Flickr</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="icon" />
                            <span className="icon-name">LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='footer-line-cut'></div>
            <div className='footer-of-footer'>
                © Copyright 2023 Villa marrakech By BillyStays.
            </div>
        </div>
    );
};

export default Footer;
