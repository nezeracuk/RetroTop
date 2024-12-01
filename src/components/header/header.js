import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../context/images/logo.webp';
import './header.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authOperations';
import { clearCart } from '../../redux/cartAction';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearCart());
        localStorage.removeItem('token');
        navigate('/login');
    };

    const getUserEmail = () => {
        return localStorage.getItem('email') || 'Guest';
    };

    return (
        <header className="header">
            <img src={logo} alt="Company Logo" className="logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home page</Link></li>
                    <li><Link to="/description">Website history</Link></li>
                    <li><Link to="/services">Catalog</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li>
                        <div className="logout" onClick={handleLogout}>
                            {getUserEmail()}
                            <div className="tooltip">Log out?</div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
