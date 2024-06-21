import React from 'react';
import Projects from './Projects';
import imgproject1 from "../Assets/ESCOLINE.png";
import imgproject2 from "../Assets/Logo_Elege_Mais.png";

function Work() {
  return (
    <div id='features'>
        <h1>Nossos Projetos</h1>
        <div className='a-container'>
            <a href="https://escolinedigital.com.br" target="_blank" rel="noopener noreferrer">
              <Projects image={imgproject1} title="Escoline Digital" subtitle="Escoline Digital nasceu com o objetivo de ser a principal solução para o gerenciamento de instituições educacionais." />
            </a>
            <a href="http://elegemais.com.br" target="_blank" rel="noopener noreferrer">
              <Projects image={imgproject2} title="Elege Mais" subtitle="Elege+ é um projeto inovador criado para transformar a maneira como candidatos a vereadores e prefeitos se preparam para as eleições." />
            </a>
        </div>
    </div>
  )
}

export default Work