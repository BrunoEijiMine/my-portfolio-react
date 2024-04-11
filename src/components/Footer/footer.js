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
        <div className="footer"
            data-aos="zoom-in-up"
            data-aos-easing="linear">
            <div className="footer-title">
                <p className="footer-name">W3B D3S1GN</p>
            </div>
            <div className="container-footer">
                <a href="https://www.instagram.com/brunoeiji1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    data-aos="fade-up"
                >
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/bruno-eiji-1b47b1206/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    data-aos="fade-up"
                >
                    <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                </a>
                <a href="https://github.com/BrunoEijiMine"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                    data-aos="fade-up"
                >
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
