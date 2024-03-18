import React, { useState, useEffect } from "react";
import "../LoadingPage/loadingPage.css";

function LoadingPage() {
  const [introStep, setIntroStep] = useState(1);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
      const introContainer = document.getElementById("intro-container");
      if (introContainer) {
        setTimeout(() => {
          introContainer.parentNode.removeChild(introContainer);
        }, 500);
      }
    };

    const loadingPage = setTimeout(() => {
      if (introStep < 7) {
        setTimeout(() => {
          setIntroStep((prevStep) => prevStep + 1);
        }, 400);
      } else {
        setShowIntro(false);
        enableScroll();
      }
    }, 500);

    // Desabilita o scroll ao montar o componente
    disableScroll();

    return () => {
      clearTimeout(loadingPage);
    };
  }, [introStep]);

  useEffect(() => {
    if (!showIntro) {
      document.body.style.transition = "opacity 0.5s ease-in-out";
      document.body.style.opacity = "0";
      document.body.classList.add("slide-in");
      document.body.style.backgroundColor = "#030712";
  
      const opacityTimer = setTimeout(() => {
        document.body.style.transition = "";
        document.body.style.opacity = "";
        document.body.classList.remove("slide-in");
      }, 1500); 
  
      return () => clearTimeout(opacityTimer);
    }
  }, [showIntro]);
  
  

  return (
    <div id="intro-container" className={`intro ${showIntro ? "visible" : "hidden"}`}>
      <div id="intro-box">
        <h1 className="text-intro" style={{ display: introStep === 1 ? "block" : "none" }}>
          BRUNO EIJI
        </h1>
        <h1 className="text-intro" style={{ display: introStep === 2 ? "block" : "none" }}>
          DEVELOPER
        </h1>
        <h1 className="text-intro" style={{ display: introStep === 3 ? "block" : "none" }}>
          FRONT END
        </h1>
        <h1 className="text-intro" style={{ display: introStep === 4 ? "block" : "none" }}>
          UI/UX
        </h1>
        <h1 className="text-intro" style={{ display: introStep === 5 ? "block" : "none" }}>
          GRAPHIC DESIGNER
        </h1>
        <h1 className="text-intro" style={{ display: introStep === 6 ? "block" : "none" }}>
          WELCOME
        </h1>
        <h1 className="text-intro loader-page" style={{ display: introStep === 7 ? "block" : "none" }}>
        </h1>
      </div>
    </div>
  );
  
}

export default LoadingPage;
