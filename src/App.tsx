import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { PorqueElegirnosSection } from './components/sections/PorqueElegirnosSection';
import { FlotaSection } from './components/sections/FlotaSection';
import { ExperienciasSection } from './components/sections/ExperienciasSection';
import { TripulacionSection } from './components/sections/TripulacionSection';
import { TransparenciaSection } from './components/sections/TransparenciaSection';
import { ServiciosSection } from './components/sections/ServiciosSection';
import { ContactoSection } from './components/sections/ContactoSection';
import { useNavigation } from './contexts/NavigationContext'; // Importamos el "walkie-talkie"

const App: React.FC = () => {
  const { sectionRefs, scrollToSection } = useNavigation();
  
  // Lógica de los modales y demás...
  const openChatbot = () => console.log('Opening chatbot...');
  const openFlotaModal = () => console.log('Opening flota modal...');
  const openExperienciasModal = () => console.log('Opening experiencias modal...');
  const openTestimonialsModal = () => console.log('Opening testimonials modal...');

  return (
    <>
      <HeroSection
        ref={sectionRefs.hero}
        scrollToSection={scrollToSection}
        openChatbot={openChatbot}
      />
      <PorqueElegirnosSection
        ref={sectionRefs.porqueElegirnos}
        openChatbot={openChatbot}
      />
      <FlotaSection
        ref={sectionRefs.flota}
        openFlotaModal={openFlotaModal}
        openChatbot={openChatbot}
      />
      <ExperienciasSection
        ref={sectionRefs.experiencias}
        openExperienciasModal={openExperienciasModal}
        scrollToSection={scrollToSection}
        openChatbot={openChatbot}
      />
      <TripulacionSection ref={sectionRefs.tripulacion} />
      <TransparenciaSection
        ref={sectionRefs.transparencia}
        openTestimonialsModal={openTestimonialsModal}
      />
      <ServiciosSection
        ref={sectionRefs.servicios}
        scrollToSection={scrollToSection}
        openChatbot={openChatbot}
      />
      <ContactoSection ref={sectionRefs.contacto} />
      {/* La lógica de los modales la reconectaremos después */}
    </>
  );
};

export default App;