import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import "../Header/header.css"

import logo from "../../img/LOGO.png"

function Header() {
    const navRef = useRef();

    const shadowNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
        <img src={logo} className='logo' />
            <nav ref={navRef}>
                <a href="">Inicio</a>
                <a href="">Experiência</a>
                <a href="">Currículo</a>
                <button className='nav-btn nav-close-btn' onClick={shadowNavBar}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </nav>
            <button className='nav-btn' onClick={shadowNavBar}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </header>
    );
}

export default Header;