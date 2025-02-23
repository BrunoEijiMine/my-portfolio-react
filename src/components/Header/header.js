import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Skill from '../Skill/skill'
import Aos from "aos";
import 'aos/dist/aos.css'
import "../Header/header.css"

import logo from "../../img/logo.png"

function Header() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
        })
    }, [])

    const navRef = useRef();

    const shadowNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <img src={logo}
                className='logo'
                data-aos="fade-down"
                data-aos-delay="3000"
            />
            <nav ref={navRef}>
                <a href="#"
                    data-aos="fade-down"
                    data-aos-delay="3000">
                    Inicio
                </a>

                <a href="#experiencia"
                    data-aos="fade-down"
                    data-aos-delay="3000">
                    Experiência
                </a>

                <a href=""
                    data-aos="fade-down"
                    data-aos-delay="3000">
                    Currículo
                </a>

                <button className='nav-btn 
                nav-close-btn'
                    onClick={shadowNavBar}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>

            </nav>
            <button className='nav-btn'
                data-aos="fade-down"
                data-aos-delay="3000"
                onClick={shadowNavBar}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </header>
    );
}

export default Header;