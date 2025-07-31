import React, { useRef, useEffect } from 'react';
import './App.css';
import './styles/theme.css';
import { DropDown } from './DropDown/DropDown';
import Footer from './DropDown/Footer';
import SectionFerramentas from './Section/SectionFerramentas';
import SectionHome from './Section/SectionHome';
import SectionQuemSomos from './Section/SectionQuemSomos';
import SectionServices from './Section/SectionServices';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const homeRef = useRef(null);
  const quemSomosRef = useRef(null);
  const servicesRef = useRef(null);
  const ferramentasRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Efeito para controlar o header baseado no scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (!header) return;

      const currentScrollY = window.scrollY;
      
      // Sempre mostrar o header, apenas mudar a opacidade
      header.classList.remove('hidden');
      
      // Adicionar classe scrolled quando scrollar para baixo
      if (currentScrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    // Executar imediatamente para configurar o estado inicial
    handleScroll();
    
    window.addEventListener('scroll', requestTick);
    
    return () => {
      window.removeEventListener('scroll', requestTick);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <ScrollProgress />
        
        <DropDown
          scrollToSection={scrollToSection}
          refs={{ homeRef, quemSomosRef, servicesRef, ferramentasRef }}
        />

        <main>
          <section ref={homeRef}>
            <SectionHome />
          </section>

          <section ref={quemSomosRef}>
            <SectionQuemSomos />
          </section>

          <section ref={servicesRef}>
            <SectionServices />
          </section>

          <section ref={ferramentasRef}>
            <SectionFerramentas />
          </section>
        </main>

        <Footer />
        
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
