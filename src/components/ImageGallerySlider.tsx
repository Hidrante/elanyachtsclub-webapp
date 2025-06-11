import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Definimos los tipos para las props
interface Image {
  src: string;
  alt: string;
}

interface ImageGallerySliderProps {
  images: Image[];
}

// Variantes para la animación de Framer Motion
const variants = {
  enter: () => ({
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: () => ({
    zIndex: 0,
    opacity: 0.8, // Keep a slight opacity to prevent complete disappearance

  }),
};

export const ImageGallerySlider: React.FC<ImageGallerySliderProps> = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovering, setIsHovering] = useState(false);

  // Usamos el operador de módulo para que el índice siempre sea válido
  const imageIndex = page % images.length;
  // Corregimos el índice para números negativos
  const positiveImageIndex = (imageIndex + images.length) % images.length;

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  // useEffect para el autoplay
  useEffect(() => {
    // Si el usuario está sobre el slider, no hacemos nada
    if (isHovering) {
      return;
    }

    // Creamos un intervalo que llama a paginate(1) cada 4 segundos
    const interval = setInterval(() => {
      paginate(1);
    }, 4000); // 4000 milisegundos = 4 segundos

    // Limpiamos el intervalo cuando el componente se desmonta o isHovering cambia
    return () => clearInterval(interval);
  }, [isHovering, paginate]); // Se vuelve a ejecutar si isHovering o paginate cambian

  return (
    <div
      className="relative w-full h-96 flex justify-center items-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[positiveImageIndex].src}
          alt={images[positiveImageIndex].alt}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
 opacity: { duration: 0.8, ease: "easeInOut" }, // Longer opacity transition
          }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>
      <div
        className="absolute z-10 top-1/2 -translate-y-1/2 right-4 bg-white/50 rounded-full p-2 cursor-pointer hover:bg-white/80 transition-colors"
        onClick={() => paginate(1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div
        className="absolute z-10 top-1/2 -translate-y-1/2 left-4 bg-white/50 rounded-full p-2 cursor-pointer hover:bg-white/80 transition-colors"
        onClick={() => paginate(-1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </div>
    );
  };