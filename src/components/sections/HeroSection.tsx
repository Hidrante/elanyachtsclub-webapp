import React, { forwardRef } from 'react';
import { SectionKey, SectionRefs } from '../types';
import { Button } from '../SectionWrappers';

interface HeroSectionProps {
  scrollToSection: (sectionId: SectionKey) => void;
  openChatbot: () => void;
}

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ scrollToSection, openChatbot }, ref) => {
  // --- NOTA: Reemplaza 'YOUR_VIDEO_ID' con el ID de tu video de YouTube ---
  const videoId = '734iMAZ48BE'; 
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&rel=0`;

  return (
    <section ref={ref} id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Contenedor para el video de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* --- CAMBIO DE URL DEL VIDEO --- */}
        <iframe
          src={videoSrc}
          frameBorder="0"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Fondo de video de yates de lujo"
          className="pointer-events-none"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            minWidth: '177.77vh', // 16/9 aspect ratio
            height: '56.25vw',   // 16/9 aspect ratio
            minHeight: '100vh',
            transform: 'translate(-50%, -50%)',
          }}
        ></iframe>
      </div>
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Contenido de texto */}
      <div className="relative z-20 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-shadow-md fade-in-up">
          ¡Navega Más Allá del Lujo!
        </h1>
        <p className="mt-6 text-base sm:text-lg max-w-2xl mx-auto text-shadow fade-in-up animation-delay-300">
          Una travesía diseñada y personalizada. Un servicio excepcional para crear tu santuario flotante personal.
        </p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-4 fade-in-up animation-delay-600">
          <Button onClick={() => scrollToSection('flota')} variant="gold">
            Descubre Tu Yate
          </Button>
          <Button onClick={openChatbot} variant="secondary-white">
            Llama al Concierge
          </Button>
        </div>
      </div>
    </section>
  );
});