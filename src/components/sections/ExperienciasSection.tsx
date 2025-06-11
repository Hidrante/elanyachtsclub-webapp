import React from 'react';
import {
  Section,
  SectionTitle,
  SectionSubtitle,
  Card,
  Button,
} from '../SectionWrappers';
import type { CardProps, SectionKey } from '../../types';
import { experiencesData } from '../../data/experiencesData';

interface ExperienciasSectionProps {
  openExperienciasModal: () => void;
  scrollToSection: (sectionId: SectionKey) => void;
  openChatbot: () => void;
}

export const ExperienciasSection = React.forwardRef<
  HTMLElement,
  ExperienciasSectionProps
>((props, ref) => {
  const displayedExperiences = experiencesData.slice(0, 3);

  const handleCtaClick = (experience: CardProps) => {
    // This function now primarily handles CTAs within the *cards* if they are scroll links.
    // The main section buttons are handled separately.
    if (experience.ctaHref && experience.ctaHref.startsWith('#')) {
      const sectionId = experience.ctaHref.substring(1) as SectionKey;
      props.scrollToSection(sectionId);
    } else if (experience.ctaHref) {
      window.open(experience.ctaHref, '_blank');
    }
  };

  const handleDisenaTuAventuraClick = () => {
    console.log(
      '[ExperienciasSection] "Diseña Tu Aventura" button clicked. Calling props.openChatbot.',
    );
    console.log(
      '[ExperienciasSection] props.openChatbot is:',
      props.openChatbot,
    );
    if (typeof props.openChatbot === 'function') {
      props.openChatbot();
    } else {
      console.error(
        '[ExperienciasSection] props.openChatbot is not a function!',
      );
      alert('Error: La función para abrir el chat no está disponible.');
    }
  };

  return (
    <Section id="experiencias" variant="light" ref={ref}>
      <SectionTitle delay="0s">
        Sumérgete en lo Inesperado: Nuestras Experiencias Únicas
      </SectionTitle>
      <SectionSubtitle delay="0.2s">
        Hemos diseñado itinerarios temáticos que te conectan con la esencia de
        cada destino. Desde inmersiones culturales y aventuras marinas hasta
        momentos de puro lujo y relajación, cada viaje es una oportunidad para
        transformar tu perspectiva.
      </SectionSubtitle>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 fade-in-up"
        style={{ animationDelay: '0.4s' }}
      >
        {displayedExperiences.map((exp, index) => (
          <Card
            key={index}
            {...exp}
            // If ctaOnClick is defined on the experience data, it will be used.
            // Otherwise, if it's a scroll link, handleCtaClick is used.
            ctaOnClick={
              exp.ctaOnClick
                ? exp.ctaOnClick
                : exp.ctaHref && exp.ctaHref.startsWith('#')
                  ? () => handleCtaClick(exp)
                  : undefined
            }
            ctaHref={
              exp.ctaHref && exp.ctaHref.startsWith('#')
                ? undefined
                : exp.ctaHref
            }
          />
        ))}
      </div>
      <div
        className="text-center mt-12 md:mt-16 fade-in-up"
        style={{ animationDelay: '0.6s' }}
      >
        <Button
          onClick={props.openExperienciasModal}
          variant="primary"
          className="mr-0 mb-4 sm:mr-5 sm:mb-0 !py-4 !px-10"
        >
          Más Experiencias
        </Button>
        <Button
          onClick={handleDisenaTuAventuraClick}
          variant="gold"
          className="!py-4 !px-10"
        >
          Diseña Tu Aventura
        </Button>
      </div>
    </Section>
  );
});
ExperienciasSection.displayName = 'ExperienciasSection';
