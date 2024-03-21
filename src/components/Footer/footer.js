import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
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
                <p className="footer-back-to-home">TOPO</p>
                <p className="footer-name">EIJI™</p>
            </div>
            <div className="container-footer">
                <div>teste</div>
                <div>teste</div>
            </div>
        </div>
    );
}

export default Footer;
