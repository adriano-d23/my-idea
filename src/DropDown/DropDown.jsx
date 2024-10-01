import React, { useState } from 'react';
import "./DropDown.css";
import { FaBars } from 'react-icons/fa';
import logo1 from '../assets/logo1.png';

export const DropDown = ({ scrollToSection, refs }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Função de clique para cada seção, com verificação
  const handleScroll = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      scrollToSection(sectionRef);
    } else {
      console.error('Section ref is not defined:', sectionRef);
    }
  };

  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <img src={logo1} alt="Logo" className="menu-logo" />
          <p className="logo-text">MY IDEA</p>
        </div>
        <span className="bar_menu" onClick={toggleMenu}>
          <FaBars />
        </span>
        <ul className={`navigation ${showMenu ? 'active' : ''}`}>
          <li className="list-menu" onClick={() => handleScroll(refs.homeRef)}>
            <a href="#home">Home</a>
          </li>
          <li className="list-menu" onClick={() => handleScroll(refs.quemSomosRef)}>
            <a href="#quem-somos">Quem somos</a>
          </li>
          <li className="list-menu" onClick={() => handleScroll(refs.servicesRef)}>
            <a href="#servicos">Serviços</a>
          </li>
          <li className="list-menu" onClick={() => handleScroll(refs.ferramentasRef)}>
            <a href="#ferramentas">Ferramentas</a>
          </li>
          <li className="list-menu" onClick={() => handleScroll(refs.contactRef)}>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
