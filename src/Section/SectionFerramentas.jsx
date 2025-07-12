import React, { useEffect } from 'react';
import './SectionFerramentas.css';

const SectionFerramentas = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.section-ferramentas');
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.3;

      if (sectionTop < triggerPoint) {
        section.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ferramentas = [
    { nome: 'HTML', img: require('../assets/iconesFerramenta/html.png') },
    { nome: 'CSS', img: require('../assets/iconesFerramenta/css.png') },
    { nome: 'JavaScript', img: require('../assets/iconesFerramenta/js.png') },
    { nome: 'PHP', img: require('../assets/iconesFerramenta/php.png') },
    { nome: 'Bootstrap', img: require('../assets/iconesFerramenta/bootstrap.png') },
    { nome: 'Laravel', img: require('../assets/iconesFerramenta/laravel.png') },
    { nome: 'Next.js', img: require('../assets/iconesFerramenta/next.png') },
    { nome: 'MySQL', img: require('../assets/iconesFerramenta/mysql.png') },
    { nome: 'Docker', img: require('../assets/iconesFerramenta/docker.png') }
  ];

  return (
    <div className="section-ferramentas">
      <div className="section-container">
        <div className="section-headers">
          <h2>Conheça nossas ferramentas</h2>
          <div className="separator"></div>
          <p className="intro-text">
            Na <strong>MyIdea</strong>, transformamos ideias em soluções digitais inovadoras utilizando as melhores tecnologias do mercado.
          </p>
        </div>

        <div className="content-wrapper">
          <div className="texto">
            <p>
              Somos especialistas em <strong>tecnologia web</strong>, desenvolvendo sites e sistemas de alta performance 
              para ajudar empresas a prosperar no ambiente digital. Nossas soluções são personalizadas, 
              eficazes e construídas com as ferramentas mais modernas disponíveis.
            </p>
          </div>

          <div className="ferramentas-container">
            <div className="ferramentas-grid">
              {ferramentas.map((ferramenta, index) => (
                <div className="ferramenta-card" key={index}>
                  <img src={ferramenta.img} alt={ferramenta.nome} className="icone" />
                  <span className="ferramenta-nome">{ferramenta.nome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFerramentas;