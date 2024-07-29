import React, { useEffect } from "react";
import "../Skill/skill.css";
import htmlIcon from "../../img/html.svg"
import cssIcon from "../../img/css.svg"
import jsIcon from "../../img/javascript.svg"
import bootstrapIcon from "../../img/bootstrap.svg"
import reactIcon from "../../img/react.svg"
import psIcon from "../../img/photoshop.svg"
import figmaIcon from "../../img/figma.svg"
import Aos from "aos";
import 'aos/dist/aos.css'

function Skill() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="wrapper-s" data-aos="fade-down" id="experiencia">
      <h1 className="title-skill" data-aos="fade-up">HABILIDADES</h1>
      <div className="container-skill">
        <article className="skill" data-aos="flip-left">
          <img src={htmlIcon} />
        </article>
        <article className="skill" data-aos="flip-right">
          <img src={cssIcon} />
        </article>
        <article className="skill" data-aos="flip-up">
          <img src={jsIcon} />
        </article>
        <article className="skill" data-aos="flip-down">
          <img src={bootstrapIcon} />
        </article>
        <article className="skill" data-aos="flip-left">
          <img src={reactIcon} />
        </article>
        <article className="skill" data-aos="flip-right">
          <img src={psIcon} />
        </article>
        <article className="skill" data-aos="flip-up">
          <img src={figmaIcon} />
        </article>
      </div>
    </div>
  );
}

export default Skill;
