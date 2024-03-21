import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import "../About/about.css";

function About() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="container-about">
      <div>
        <h1 className="title-about" data-aos="fade-down">SOBRE MIM</h1>
        <section className="about" data-aos="fade-up">
          <span>
            Olá, sou Bruno Eiji, mas prefiro ser chamado de Eiji. É um prazer
            conhecê-lo! Há dois anos, entrei de cabeça no universo da
            programação, cheio de determinação e paixão. Desde então, tenho sido
            dedicado ao meu trabalho, sempre em busca de novas formas de inovar.
            Para mim, cada linha de código representa uma chance emocionante de
            dar vida a ideias e transformá-las em realidade. Estou comprometido
            em crescer constantemente, aprendendo e contribuindo para o avanço
            da tecnologia.
          </span>
        </section>
        <div className="container-service">
          <article className="service"
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <p>User Interface</p>
          </article>
          <article className="service"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <p>User Experience Design</p>
          </article>
          <article className="service" data-aos="fade-up">
            <p>Frontend Development</p>
          </article>
        </div>
      </div>
      <section >
        <div class="parallax"></div>
      </section>
    </div>
  );
}

export default About;
