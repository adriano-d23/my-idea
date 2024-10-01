import React, { useEffect } from 'react';
import './SectionFerramentas.css'; // Arquivo de estilos CSS para a seção

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


  return (
    <div className="section-ferramentas">
      <div className="section-headers">
        <h2>Conheça nossas ferramentas</h2>
        <div className="separator"></div>

      </div>
      <div className="column">
        <div className="ferramentas">
          <img src={require('../assets/iconesFerramenta/html.png')} alt="HTML" className="icone" />
          <img src={require('../assets/iconesFerramenta/css.png')} alt="CSS" className="icone" />
          <img src={require('../assets/iconesFerramenta/php.png')} alt="PHP" className="icone" />
          <img src={require('../assets/iconesFerramenta/bootstrap.png')} alt="Bootstrap" className="icone" />
          <img src={require('../assets/iconesFerramenta/docker.png')} alt="Docker" className="icone" />
          <img src={require('../assets/iconesFerramenta/js.png')} alt="JavaScript" className="icone" />
          <img src={require('../assets/iconesFerramenta/laravel.png')} alt="Laravel" className="icone" />
          <img src={require('../assets/iconesFerramenta/mysql.png')} alt="MySQL" className="icone" />
          <img src={require('../assets/iconesFerramenta/next.png')} alt="Next.js" className="icone" />
        </div>
        <div className="texto">
          <p>Na <strong>MyIdea</strong>, somos apaixonados por transformar ideias em soluções digitais inovadoras. Com foco na área da <strong>tecnologia web</strong>, dedicamos nosso talento e conhecimento para desenvolver sites e sistemas de alta performance, utilizando as melhores tecnologias disponíveis no mercado. Nossa missão é ajudar empresas a prosperar no ambiente digital com soluções personalizadas e eficazes.</p>

        </div>
      </div>
    </div>
  );
}

export default SectionFerramentas;
