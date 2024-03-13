import React, { useState, useEffect } from "react";

import "../LoadingPage/loadingPage.css";

function LoadingPage() {
  const [introStep, setIntroStep] = useState(1);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const loadingPage = setTimeout(() => {
      if (introStep < 6) {
        setIntroStep((prevStep) => prevStep + 1);
      } else {
        setShowIntro(false);
      }
    }, 350);

    return () => clearTimeout(loadingPage);
  }, [introStep]);

  return (
    <div
      id="intro-container"
      className={`intro ${showIntro ? "visible" : "hidden"}`}
    >
      <div id="intro-box">
        <h1
          className="text-intro"
          style={{ display: introStep === 1 ? "block" : "none" }}
        >
          Transformando
        </h1>
        <h1
          className="text-intro"
          style={{ display: introStep === 2 ? "block" : "none" }}
        >
          códigos
        </h1>
        <h1
          className="text-intro"
          style={{ display: introStep === 3 ? "block" : "none" }}
        >
          em
        </h1>
        <h1
          className="text-intro"
          style={{ display: introStep === 4 ? "block" : "none" }}
        >
          experiências
        </h1>
        <h1
          className="text-intro"
          style={{ display: introStep === 5 ? "block" : "none" }}
        >
          digitais
        </h1>
        <h1
          className="text-intro"
          style={{ display: introStep === 6 ? "block" : "none" }}
        >
          surpreendentes
        </h1>
      </div>
    </div>
  );
}

export default LoadingPage;
