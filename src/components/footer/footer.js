import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../footer/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Email: retrotop@gmail.com</p>
                <p>Phone: +380632223330</p>
            </div>
            <div className="social-media">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter/>
                </a>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 RetroTop. All rights reserved</p>
            </div>


        </footer>
    );
};

export default Footer;