import React from 'react';
import './SectionFerramentas.css';
import { motion } from 'framer-motion';

const SectionFerramentas = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="section-ferramentas">
      <div className="section-container">
        <motion.div 
          className="section-headers"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Conheça nossas ferramentas</h2>
          <div className="separator"></div>
          <p className="intro-text">
            Na <strong>MyIdea</strong>, transformamos ideias em soluções digitais inovadoras utilizando as melhores tecnologias do mercado.
          </p>
        </motion.div>

        <div className="content-wrapper">
          <motion.div 
            className="texto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              Somos especialistas em <strong>tecnologia web</strong>, desenvolvendo sites e sistemas de alta performance 
              para ajudar empresas a prosperar no ambiente digital. Nossas soluções são personalizadas, 
              eficazes e construídas com as ferramentas mais modernas disponíveis.
            </p>
          </motion.div>

          <motion.div 
            className="ferramentas-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="ferramentas-grid">
              {ferramentas.map((ferramenta, index) => (
                <motion.div 
                  className="ferramenta-card" 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={ferramenta.img} alt={ferramenta.nome} className="icone" />
                  <span className="ferramenta-nome">{ferramenta.nome}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SectionFerramentas;