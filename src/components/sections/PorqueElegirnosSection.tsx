import React, { useState, forwardRef } from 'react';
import { Section, SectionTitle, Button, TextLead } from '../SectionWrappers';
import { ImageGallerySlider } from '../ImageGallerySlider';
import FilosofiaModal from '../FilosofiaModal'; // <--- ¡ESTA SE QUEDA!
const galleryImages = [
  { src: '/assets/gallery-1.webp', alt: 'Gallery image 1' },
  { src: '/assets/gallery-2.webp', alt: 'Gallery image 2' },
  { src: '/assets/gallery-3.webp', alt: 'Gallery image 3' },
  { src: '/assets/gallery-4.webp', alt: 'Gallery image 4' },
  { src: '/assets/gallery-5.webp', alt: 'Gallery image 5' },
  { src: '/assets/gallery-6.webp', alt: 'Gallery image 6' },
  { src: '/assets/gallery-7.webp', alt: 'Gallery image 7' },
  { src: '/assets/gallery-8.webp', alt: 'Gallery image 8' },
  { src: '/assets/gallery-9.webp', alt: 'Gallery image 9' },
  { src: '/assets/gallery-10.webp', alt: 'Gallery image 10' },
  { src: '/assets/gallery-11.webp', alt: 'Gallery image 11' },
  { src: '/assets/gallery-12.webp', alt: 'Gallery image 12' },
];

interface PorqueElegirnosSectionProps {
  openChatbot: () => void;
}

export const PorqueElegirnosSection = forwardRef<
  HTMLElement,
  PorqueElegirnosSectionProps
>(({ openChatbot }, ref) => {
  const [isFilosofiaModalOpen, setIsFilosofiaModalOpen] = useState(false);

  const openFilosofiaModal = () => setIsFilosofiaModalOpen(true);
  const closeFilosofiaModal = () => setIsFilosofiaModalOpen(false);

  return (
    <>
      <Section
        id="porque-elegirnos"
        variant="light"
        ref={ref}
        className="relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-brand-gold/5 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-brand-blue/5 rounded-full filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-x-12 lg:gap-x-20 items-center">
          <div className="md:order-1">
            <SectionTitle delay="0s" className="md:text-left">
              Más Allá de lo Ordinario: <br className="hidden md:block" />
              La Diferencia elanyachts.club
            </SectionTitle>

            <div className="max-w-3xl md:ml-0 mx-auto md:text-left">
              <TextLead
                className="fade-in-up mb-8 md:mb-10"
                style={{ animationDelay: '0.2s' }}
              >
                En un océano de ofertas convencionales,{' '}
                <strong>elanyachts.club</strong> se distingue. No nos
                conformamos con ofrecer solo opulencia. Creamos viajes que
                resuenan contigo, que integran la riqueza de la cultura local,
                el compromiso con la sostenibilidad y la promesa de momentos
                auténticos e inesperados.
              </TextLead>
              <p
                className="text-brand-gray-text mb-8 md:mb-10 fade-in-up md:text-lg"
                style={{ animationDelay: '0.3s' }}
              >
                Con experiencia y pasión en el sector, entendemos al viajero de
                lujo que busca significado, personalización y una ejecución
                impecable. Te invitamos a ser parte de una tribu que valora las
                experiencias que inspiran y merecen ser compartidas.
              </p>
            </div>

            <div
              className="text-center md:text-left fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <Button onClick={openFilosofiaModal} variant="gold">
                Conoce Nuestra Filosofía
              </Button>
            </div>
          </div>

          <div
            className="md:order-2 mt-12 md:mt-0 fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <ImageGallerySlider images={galleryImages} />
          </div>
        </div>
      </Section>
      <FilosofiaModal
        isOpen={isFilosofiaModalOpen}
        onClose={closeFilosofiaModal}
        openChatbot={openChatbot}
      />
    </>
  );
});
PorqueElegirnosSection.displayName = 'PorqueElegirnosSection';
