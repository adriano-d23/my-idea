import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEye, faUsers, faRocket, faHandshake, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './SectionQuemSomos.css';

const SectionQuemSomos = () => {
  const cards = [
    {
      icon: faRocket,
      title: "Missão",
      description: "Capacitar empresas com soluções tecnológicas sob medida, impulsionando crescimento e inovação através de desenvolvimento web de alta qualidade.",
      color: "#667eea"
    },
    {
      icon: faEye,
      title: "Visão",
      description: "Ser reconhecidos como líderes em desenvolvimento web, referência em inovação e compromisso com a excelência e satisfação do cliente.",
      color: "#764ba2"
    },
    {
      icon: faHandshake,
      title: "Valores",
      description: "Inovação, qualidade, transparência, colaboração e compromisso com resultados excepcionais em todos os nossos projetos.",
      color: "#667eea"
    },
    {
      icon: faLightbulb,
      title: "Inovação",
      description: "Sempre buscando as tecnologias mais modernas e eficientes para criar soluções que superem as expectativas dos nossos clientes.",
      color: "#764ba2"
    },
    {
      icon: faUsers,
      title: "Colaboração",
      description: "Trabalhamos em parceria com nossos clientes, entendendo suas necessidades e criando soluções personalizadas que geram valor real.",
      color: "#667eea"
    },
    {
      icon: faBriefcase,
      title: "Profissionalismo",
      description: "Compromisso total com prazos, qualidade e comunicação transparente em todas as etapas do desenvolvimento do projeto.",
      color: "#764ba2"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="section-quem-somos">
      <div className="quem-somos-container">
        <motion.div 
          className="quem-somos-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Quem Somos</h2>
          <div className="separator"></div>
          <p className="intro-text">
            Somos uma empresa de desenvolvimento web apaixonada por criar soluções digitais 
            que transformam ideias em realidade. Nossa equipe combina criatividade, 
            tecnologia e experiência para entregar projetos excepcionais.
          </p>
        </motion.div>

        <motion.div 
          className="quem-somos-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              className="quem-somos-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="card-icon" style={{ backgroundColor: card.color }}>
                <FontAwesomeIcon icon={card.icon} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="quem-somos-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="stats-container">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Projetos Entregues</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Clientes Satisfeitos</p>
            </div>
            <div className="stat-item">
              <h3>3+</h3>
              <p>Anos de Experiência</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Suporte Técnico</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SectionQuemSomos;
