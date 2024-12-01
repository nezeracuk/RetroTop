import React from 'react';
import { useNavigate } from 'react-router-dom';
import './success.css'

const SuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className="success-container">
            <h1>Order Successful!</h1>
            <p>Thank you for your order. Your game will arrive to you as soon, as possible!</p>
            <button onClick={() => navigate('/services')} className="home-button">
                Buy another game
            </button>
        </div>
    );
};

export default SuccessPage;
