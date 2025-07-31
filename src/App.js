import React, { useRef, useEffect } from 'react';
import './App.css';
import { DropDown } from './DropDown/DropDown';
import Footer from './DropDown/Footer';
import SectionFerramentas from './Section/SectionFerramentas';
import SectionHome from './Section/SectionHome';
import SectionQuemSomos from './Section/SectionQuemSomos';
import SectionServices from './Section/SectionServices';
import SectionContact from './Section/SectionContact';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const homeRef = useRef(null);
  const quemSomosRef = useRef(null);
  const servicesRef = useRef(null);
  const ferramentasRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Efeito para adicionar classe sticky ao header no scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <ScrollProgress />
      
      <DropDown
        scrollToSection={scrollToSection}
        refs={{ homeRef, quemSomosRef, servicesRef, ferramentasRef, contactRef }}
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

        <section ref={contactRef}>
          <SectionContact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
