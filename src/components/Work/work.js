import React, { useEffect } from 'react';

import "../Work/work.css"

function Work() {
    // useEffect(() => { ... }, []);: Este é o hook useEffect. Ele é executado após a renderização do componente
    useEffect(() => {
        // const logosSlide = document.querySelector(".slide");: Aqui, está sendo feita uma busca no DOM pelo elemento com a classe "slide".
        const logosSlide = document.querySelector(".slide");
        // if (logosSlide) { ... }: Esta linha verifica se o elemento com a classe "slide" foi encontrado.
        if (logosSlide) {
            const copy = logosSlide.cloneNode(true);
            document.querySelector(".slide-container").appendChild(copy);
        }
    }, []);

    return (
        <section>
            <div className="slide-container">
                <div className="slide">
                    <h1>WORK</h1>
                    <h1 className='color-text'>JOB</h1>
                    <h1>WORK</h1>
                    <h1 className='color-text'>JOB</h1>
                    <h1>WORK</h1>
                    <h1 className='color-text'>JOB</h1>
                </div>
            </div>
            <div className='wrapper-w'>
                <div className='work-container'>
                    <div className='company'>
                        <h1>Hospital de Amor</h1>
                        <p className='work-date'>Atualmente</p>
                    </div>
                    <div className='office'>
                        <h1>Assistente Programador III</h1>
                        <p>Atualmente, como Assistente Programador 3, trabalho no desenvolvimento tanto front-end quanto back-end. Sou responsável por projetos internos e colaboro em outras áreas da empresa. Minha ênfase principal é no front-end, onde busco melhorar minhas habilidades e oferecer soluções eficientes aos usuários.</p>
                    </div>
                </div>
                <div className='work-container'>
                    <div className='company'>
                        <h1>Hospital de Amor</h1>
                        <p className='work-date'>Nov 2021 - Abr 2023(1 ano 6 meses)</p>
                    </div>
                    <div className='office'>
                        <h1>Jovem Aprendiz - TI</h1>
                        <p>Trabalhei na empresa ajudando em projetos, principalmente no desenvolvimento front-end, mesmo sendo minha primeira experiência prática. Agora, estou focado em melhorar minhas habilidades no desenvolvimento back-end, com o apoio da equipe.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;
