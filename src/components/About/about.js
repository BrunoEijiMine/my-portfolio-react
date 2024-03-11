import "../About/about.css";

function About() {
  return (
    <div className="container-about">
      <div>
        <h1 className="title-about">SOBRE MIM</h1>
        <section className="about">
          <p className="gradient-text"></p>
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
      </div>
      <section>
        <div class="parallax"></div>
      </section>
    </div>
  );
}

export default About;
