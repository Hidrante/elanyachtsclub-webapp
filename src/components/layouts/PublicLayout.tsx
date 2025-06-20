import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import ElansChatWidget from '../ElansChatWidget'; // <-- 1. IMPORTAMOS EL WIDGET
import { useNavigation } from '../../contexts/NavigationContext';

export const PublicLayout: React.FC = () => {
  const { sectionRefs, scrollToSection } = useNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
        <Outlet />
      </main>
      <Footer sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
      
      <ElansChatWidget /> {/* <-- 2. LO LLAMAMOS ACÁ PARA QUE APAREZCA */}
    </div>
  );
};