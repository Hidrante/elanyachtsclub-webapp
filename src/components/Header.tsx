import React, { useState, useEffect } from 'react';
// Quitamos todas las importaciones de react-router-dom
import { MenuIcon, XIcon } from './Icons';
import { Button } from './SectionWrappers';

// Definimos unas props vacías para que el componente no se queje
interface HeaderProps {}

// Este es un Header de EMERGENCIA para probar si el resto de la app funciona
export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDummyClick = (location: string) => {
    console.log(`Intento de ir a: ${location}`);
    alert(`Esto es un botón de prueba. Queremos ir a: ${location}`);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-2 flex justify-between items-center">
        <button onClick={() => handleDummyClick('Inicio')}>
            <img src="/logo-elanyachts.png" alt="Logo de Elan Yachts Club" className="h-9 lg:h-10" />
        </button>
        
        {/* Contenedor de navegación Desktop */}
        <div className="hidden md:flex items-center space-x-2">
            <button onClick={() => handleDummyClick('Nosotros')} className={`px-4 py-2 text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Nosotros</button>
            <button onClick={() => handleDummyClick('Flota')} className={`px-4 py-2 text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Flota</button>
            <Button onClick={() => handleDummyClick('Contacto')} variant="primary" size="sm">Contacto</Button>
            <button onClick={() => handleDummyClick('/login')} className={`p-2 rounded-full ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Login</button>
        </div> {/* <--- ¡ACÁ ESTABA EL CIERRE QUE FALTABA! */}

        {/* Contenedor del botón del menú móvil */}
        <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
        </div>
      </nav>
    </header>
  );
};