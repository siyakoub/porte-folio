import React from 'react';
import './css/header.scss';
import Logo from '../../assets/img/logo/logoMS2.png';

const Header: React.FC = () => {
    return (
        <>
            <header className="header">
                {/* Logo */}
                <div className="header__logo">
                    <img src={Logo} alt="logo" height={50} />
                </div>

                {/* Liens de navigation */}
                <nav className="header__nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#service">Service</a>
                    <a href="#portfolio">PorteFolio</a>
                </nav>

                {/* Bouton Contact */}
                <button className="header__contact-btn">
                    Contact Me
                </button>
            </header>
        </>
    );
}
export default Header;
