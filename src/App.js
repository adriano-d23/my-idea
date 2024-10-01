import React, { useRef } from 'react';
import './App.css';
import { DropDown } from './DropDown/DropDown';
import Footer from './DropDown/Footer';
import SectionFerramentas from './Section/SectionFerramentas';
import SectionHome from './Section/SectionHome';
import SectionQuemSomos from './Section/SectionQuemSomos';
import SectionServices from './Section/SectionServices';
import SectionContact from './Section/SectionContact';

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

  return (
    <div className="App">
      <DropDown
        scrollToSection={scrollToSection}
        refs={{ homeRef, quemSomosRef, servicesRef, ferramentasRef, contactRef }}
      />

      <div ref={homeRef}>
        <SectionHome />
      </div>

      <div ref={quemSomosRef}>
        <SectionQuemSomos />
      </div>

      <div ref={servicesRef}>
        <SectionServices />
      </div>

      <div ref={ferramentasRef}>
        <SectionFerramentas />
      </div>

      <div ref={contactRef}>
        <SectionContact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
