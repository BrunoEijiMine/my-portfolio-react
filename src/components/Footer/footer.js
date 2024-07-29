import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedinIn, } from "@fortawesome/free-brands-svg-icons";
import "../Footer/footer.css";

function Footer() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div className="footer" data-aos="fade">
                <div id="wrapper-circle"
                    data-aos="zoom-in-down"
                    data-aos-easing="linear">
                    <span id="circle"></span>
                </div>
                <div className="container-title">
                    <p className="title-footer"
                        data-aos="zoom-in-up"
                        data-aos-easing="linear">CONTATO</p>
                </div>
            </div>
            <div className="container-footer">
                <a href="https://www.instagram.com/brunoeiji1/"
                    target="_blank"
                    data-aos="fade-up"
                    rel="noopener noreferrer"
                    title="Instagram"
                >
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/bruno-eiji-1b47b1206/"
                    target="_blank"
                    data-aos="fade-up"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                >
                    <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                </a>
                <a href="https://github.com/BrunoEijiMine"
                    target="_blank"
                    data-aos="fade-up"
                    rel="noopener noreferrer"
                    title="Github"
                >
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                </a>
            </div>
        </>
    );
}

export default Footer;
