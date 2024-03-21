import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedinIn, } from "@fortawesome/free-brands-svg-icons";
import "../Content/content.css";
import Aos from "aos";
import 'aos/dist/aos.css'

function Header() {

  useEffect(() => {
    Aos.init({
      duration: 3000,
    })
  }, [])

  return (
    <div className="container-content">
      <div className="container-name">
        <p className="title"
          data-aos="fade-down"
          data-aos-delay="3000"
        >
          Welcome.
        </p>

        <p className="name"
          data-aos="zoom-in"
          data-aos-delay="3000"
        >
          BRUNO EIJI
        </p>

        <p className="description"
          data-aos="fade-up"
          data-aos-delay="3000"
        >
          Sou um entusiasta de tecnologia e fotografia, sempre em busca de
          inovação e capturando momentos com uma abordagem criativa e única.
        </p>
      </div>

      <div className="container-social">
        <a href="https://www.instagram.com/brunoeiji1/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          data-aos="fade-down"
          data-aos-delay="3000"
        >
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/bruno-eiji-1b47b1206/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          data-aos="zoom-in"
          data-aos-delay="3000"
        >
          <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/BrunoEijiMine"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          data-aos="fade-up"
          data-aos-delay="3000"
        >
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
      </div>

      <div className="container-loader">
        <span class="loader">
        </span>
      </div>
    </div>
  );
}

export default Header;
