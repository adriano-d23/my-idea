import React from 'react';
import './SectionPorQueEscolher.css'; // Arquivo de estilos CSS para a seção
import titulo from '../assets/titulo.png';

const SectionPorQueEscolher = () => {
  return (
    <div className="section-por-que-escolher">
      <img src={titulo} alt="titulo" />
        <a href="#">Fale conosco</a>
    </div>
  );

}

export default SectionPorQueEscolher;
