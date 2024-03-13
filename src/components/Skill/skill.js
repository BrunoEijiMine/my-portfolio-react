import "../Skill/skill.css";
import htmlIcon from "../../img/html.svg"
import cssIcon from "../../img/css.svg"
import jsIcon from "../../img/javascript.svg"
import bootstrapIcon from "../../img/bootstrap.svg"
import reactIcon from "../../img/react.svg"
import psIcon from "../../img/photoshop.svg"
import figmaIcon from "../../img/figma.svg"

function Skill() {
  
  return (
    <div className="wrapper-s">
      <h1 className="title-skill">HABILIDADES</h1>
      <div className="container-skill">
        <article className="skill">
          <img src={htmlIcon} />
        </article>
        <article className="skill">
          <img src={cssIcon} />
        </article>
        <article className="skill">
          <img src={jsIcon} />
        </article>
        <article className="skill">
          <img src={bootstrapIcon} />
        </article>
        <article className="skill">
          <img src={reactIcon} />
        </article>
        <article className="skill">
          <img src={psIcon} />
        </article>
        <article className="skill">
          <img src={figmaIcon} />
        </article>
      </div>
    </div>
  );
}

export default Skill;
