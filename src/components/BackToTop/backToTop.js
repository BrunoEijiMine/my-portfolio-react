import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../BackToTop/backToTop.css";


function BackToTop() {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1000) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTopButton && (
                <button class="custom-button"
                    onClick={scrollUp}
                    title="Back to top"
                    >
                    <span class="icon"><FontAwesomeIcon icon={faArrowUp} beatFade /></span>
                </button>
            )}
        </div>
    );
}

export default BackToTop;
