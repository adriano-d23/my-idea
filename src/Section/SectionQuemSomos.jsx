import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEye, faUsers } from '@fortawesome/free-solid-svg-icons';
import './SectionQuemSomos.css'; // Arquivo de estilos CSS para a seção

const SectionQuemSomos = () => {
  return (
    <div className="section-quem-somos">
      <h2 style={{ color: '#101645' }}>Quem somos</h2>
      <div className="quem-somos-cards">
        <div className="quem-somos-card" style={{ fontSize: '24px' }}>
          <FontAwesomeIcon icon={faBriefcase} size="3x" style={{ color: '#101645' }} />
          <p>Nossa missão é capacitar empresas com soluções tecnológicas sob medida, impulsionando crescimento e inovação.</p>
        </div>
        <div className="quem-somos-card" style={{ fontSize: '24px' }}>
          <FontAwesomeIcon icon={faEye} size="3x" style={{ color: '#101645' }} />
          <p>Visamos ser reconhecidos pela qualidade, inovação e compromisso com a satisfação do cliente.</p>
        </div>
        <div className="quem-somos-card" style={{ fontSize: '24px' }}>
          <FontAwesomeIcon icon={faUsers} size="3x" style={{ color: '#101645' }} />
          <p>Valorizamos inovação, qualidade, transparência e colaboração em todos os nossos projetos.</p>
        </div>
      </div>
    </div>
  );
}

export default SectionQuemSomos;
