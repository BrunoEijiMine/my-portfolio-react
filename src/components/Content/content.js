import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import "../Content/content.css"

function Header() {

    return (
        <div className='container-content'>

            <div className='container-name'>
                <p className='title'>Welcome.</p>
                <p className='name'>BRUNO EIJI</p>
                <p className="description">Sou um entusiasta de tecnologia e fotografia, sempre em busca de inovação e capturando momentos com uma abordagem criativa e única.</p>
            </div>

            <div className="container-social">
                <FontAwesomeIcon className='icon' icon={faInstagram} />
                <FontAwesomeIcon className='icon' icon={faTwitter} />
                <FontAwesomeIcon className='icon' icon={faGithub} />
            </div>

        </div>
    );
}

export default Header;