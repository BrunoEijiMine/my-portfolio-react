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
                    <h1>JOB</h1>
                    <h1>WORK</h1>
                    <h1>JOB</h1>
                    <h1>WORK</h1>
                    <h1>JOB</h1>
                </div>
            </div>
            <div className='work-container'>
                <div className='company'>
                    <h1>Hospital de Amor</h1>
                    <p>Atualmente</p>
                </div>
                <div className='office'>
                    <h1>Assistente Programador III</h1>
                    <p>Atualmente, desempenho o papel de Assistente Programador 3, sendo responsável por trabalhar tanto no desenvolvimento front-end quanto no back-end. Assumo a responsabilidade de criar projetos para o nosso sistema interno e também colaboro em projetos para outros setores da empresa. No entanto, minha principal ênfase está no front-end, onde concentro meus esforços em aprimorar minhas habilidades e proporcionar soluções atraentes e eficientes para os usuários.</p>
                </div>
            </div>
        </section>
    );
}

export default Work;
