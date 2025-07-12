import React from 'react';
import './SectionContact.css'; // Importando estilos CSS para a seção

const SectionContact = () => {
  const handleContactClick = () => {
    const whatsappUrl = 'https://api.whatsapp.com/send?phone=5562995664176&text=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20as%20oportunidades%20na%20My%20Idea.';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="rodape">
      <div className="rodape-curve"></div> {/* Adicionando a curva */}
      <div className="rodape-content">
        <div className="text">
          <h2>MyIdea</h2>
          <p>Nascemos no mundo digital. Nos especializamos em oferecer soluções personalizadas para garantir que nossos clientes alcancem resultados precisos. Entre em contato conosco e solicite uma proposta personalizada, sem compromisso.</p>
          <button className="contact-button" onClick={handleContactClick}>Entrar em Contato</button>
        </div>
        <div className="contact">
          <h2>CONTATO</h2>
          <p>Telefone: (62) 9.95666-4176</p>
          <p>Email: <a href="mailto:mydeiasuport@gmail.com">mydeiasuport@gmail.com</a></p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100077938535114" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/myideatecnologiaweb/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://api.whatsapp.com/send?phone=5562995664176&text=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20as%20oportunidades%20na%20My%20Idea." target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
