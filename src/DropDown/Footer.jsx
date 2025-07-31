import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp,
  faInstagram, 
  faLinkedin, 
  faGithub,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const phoneNumber = '62995664176';
    const message = 'Olá! Gostaria de saber mais sobre os serviços de desenvolvimento web.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Seção Principal */}
        <div className="footer-main">
          <div className="footer-section">
            <motion.div 
              className="footer-logo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>MyIdea</h3>
              <p>Transformando ideias em soluções digitais inovadoras</p>
            </motion.div>
          </div>

          <div className="footer-section">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Serviços
            </motion.h4>
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <li>Desenvolvimento Web</li>
              <li>Marketing Digital</li>
              <li>Criação de Sites</li>
              <li>Sistemas Web</li>
            </motion.ul>
          </div>

          <div className="footer-section">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Contato
            </motion.h4>
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>(62) 9.9566-4176</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>mydeiasuport@gmail.com</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Goiânia, GO - Brasil</span>
              </div>
            </motion.div>
          </div>

          <div className="footer-section">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Redes Sociais
            </motion.h4>
            <motion.div 
              className="social-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a 
                href="#" 
                className="social-link whatsapp"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleWhatsAppClick}
                title="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/myideatecnologiaweb/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/profile.php?id=100077938535114"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link facebook"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link linkedin"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Linha divisória */}
        <motion.div 
          className="footer-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />

        {/* Copyright */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>&copy; {currentYear} MyIdea. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ e tecnologias modernas</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
