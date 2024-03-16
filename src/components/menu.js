import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return (
        <div className='menu'>
            <nav className='header-menu'>
                <h1><img className='logo' src='supplier.png'/>Складовка</h1>

                <div className='address-bar'>
                <img src='phone.png' alt='phone'/><p>Свяжитесь с нами<p>+7 800 000 0000</p></p>
                    <img src='clock.png' alt='clock'/><p>Пн-Пт с 9:00 до 18:00</p>
                </div>
            </nav>
        <div className='menu-link'>
            <ul className="menu-list">
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/services">Услуги</Link>
                </li>
                <li>
                    <Link to="/about">О нас</Link>
                </li>
                <li>
                    <Link to="/contact">Контакты</Link>
                </li>
            </ul>
        </div>
        </div>
    );
};

export default Menu;