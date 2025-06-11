import React, { useState, useRef, useCallback } from 'react';
import { Header } from './src/components/Header';
import { Footer } from './src/components/Footer';
import { HeroSection } from './src/components/sections/HeroSection';
import { PorqueElegirnosSection } from './src/components/sections/PorqueElegirnosSection';
import { FlotaSection } from './src/components/sections/FlotaSection';
import { ExperienciasSection } from './src/components/sections/ExperienciasSection';
import { TripulacionSection } from './src/components/sections/TripulacionSection';
import { TransparenciaSection } from './src/components/sections/TransparenciaSection';
import { ServiciosSection } from './src/components/sections/ServiciosSection';
import { ContactoSection } from './src/components/sections/ContactoSection';
import { FlotaPresentationModal } from './src/components/FlotaPresentationModal';
import { ExperienciasModal } from './src/components/ExperienciasModal';
import { TestimonialsModal } from './src/components/TestimonialsModal';
import { experiencesData } from './src/data/experiencesData'; // Assuming experiencesData is also in src/data
import { testimonialsData } from './src/data/testimonialsData';
import type { SectionRefs, Location, SectionKey } from './types';
import useToggle from './hooks/useToggle';
import useModal from './hooks/useModal';
import useIntersectionObserverAnimation from './hooks/useIntersectionObserverAnimation';

declare global {
  interface Window {
    elevenlabs?: {
      convai?: {
        open?: () => void;
        close?: () => void;
      };
    };
  }
}

const App: React.FC = () => {
  const { value: isMobileMenuOpen, toggle: toggleMobileMenu, setFalse: closeMobileMenu } = useToggle(false);

  const { isOpen: isFlotaModalOpen, openModal: openFlotaModalHook, closeModal: closeFlotaModalHook } = useModal();
  const { isOpen: isExperienciasModalOpen, openModal: openExperienciasModal, closeModal: closeExperienciasModal } = useModal();
  const { isOpen: isTestimonialsModalOpen, openModal: openTestimonialsModal, closeModal: closeTestimonialsModal } = useModal();

  const [activeYachtIdForModal, setActiveYachtIdForModal] = useState<string | undefined>(undefined);
  const [activeLocationFilterForModal, setActiveLocationFilterForModal] = useState<Location | undefined>(undefined);

  const openFlotaModal = useCallback((yachtId?: string, location?: Location) => {
    setActiveYachtIdForModal(yachtId);
    setActiveLocationFilterForModal(location);
    openFlotaModalHook();
  }, [openFlotaModalHook]);

  const closeFlotaModal = useCallback(() => {
    closeFlotaModalHook();
    setActiveYachtIdForModal(undefined);
    setActiveLocationFilterForModal(undefined);
  }, [closeFlotaModalHook]);

  const openChatbot = useCallback(() => {
    setTimeout(() => {
      if (window.elevenlabs && window.elevenlabs.convai && typeof window.elevenlabs.convai.open === 'function') {
        try {
          window.elevenlabs.convai.open();
        } catch (error) {
          console.error('[App.tsx] Error al abrir el chatbot:', error);
          alert('Hubo un error al intentar abrir el Asistente Virtual.');
        }
      } else {
        alert('El Asistente Virtual no está disponible. Inténtalo de nuevo en unos segundos.');
      }
    }, 100);
  }, []);

  useIntersectionObserverAnimation('.fade-in-up', { threshold: 0.1 });

  const sectionRefs: SectionRefs = {
    hero: useRef<HTMLElement>(null),
    porqueElegirnos: useRef<HTMLElement>(null),
    flota: useRef<HTMLElement>(null),
    experiencias: useRef<HTMLElement>(null),
    tripulacion: useRef<HTMLElement>(null),
    transparencia: useRef<HTMLElement>(null),
    servicios: useRef<HTMLElement>(null),
    contacto: useRef<HTMLElement>(null),
  };

  const scrollToSection = useCallback((sectionId: keyof SectionRefs) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
    closeMobileMenu();
  }, [closeMobileMenu]);

  return (
    <div className="bg-brand-gray-light">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        sectionRefs={sectionRefs}
        scrollToSection={scrollToSection}
      />
      <main>
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
      </main>
      <footer>
        <Footer sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
      </footer>

      {isFlotaModalOpen && (
        <FlotaPresentationModal
          isOpen={isFlotaModalOpen}
          onClose={closeFlotaModal}
          initialYachtId={activeYachtIdForModal}
          locationFilter={activeLocationFilterForModal}
          openChatbot={openChatbot} // <-- Se añade el prop aquí
        />
      )}
      {isExperienciasModalOpen && (
        <ExperienciasModal
          isOpen={isExperienciasModalOpen}
          onClose={closeExperienciasModal}
          allExperiences={experiencesData}
          scrollToSection={scrollToSection}
        />
      )}
      {isTestimonialsModalOpen && (
        <TestimonialsModal
          isOpen={isTestimonialsModalOpen}
          onClose={closeTestimonialsModal}
          testimonials={testimonialsData}
        />
      )}
    </div>
  );
};

export default App;