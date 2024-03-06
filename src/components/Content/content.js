import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import "../Content/content.css"

function Header() {

    return (
        <div className='container-content'>

            <div className='container-name'>
                <p className='title'>Welcome!</p>
                <p className='name'>BRUNO EIJI</p>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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