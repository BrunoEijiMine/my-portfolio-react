import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedinIn,} from "@fortawesome/free-brands-svg-icons";
import "../Content/content.css";

function Header() {

  return (
    <div className="container-content">
      <div className="container-name">
        <p className="title">Welcome.</p>
        <p className="name">BRUNO EIJI</p>
        <p className="description">
          Sou um entusiasta de tecnologia e fotografia, sempre em busca de
          inovação e capturando momentos com uma abordagem criativa e única.
        </p>
      </div>

      <div className="container-social">
      <a href="https://www.instagram.com/brunoeiji1/" target="_blank" rel="noopener noreferrer" title="Instagram">
        <FontAwesomeIcon className="icon" icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com/in/bruno-eiji-1b47b1206/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
      </a>
      <a href="https://github.com/BrunoEijiMine" target="_blank" rel="noopener noreferrer" title="Github">
        <FontAwesomeIcon className="icon" icon={faGithub} />
      </a>
    </div>

      <div className="container-loader">
        <span class="loader"></span>
      </div>
    </div>
  );
}

export default Header;
