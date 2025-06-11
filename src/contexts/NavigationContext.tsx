import React, { createContext, useContext, useRef, useCallback, ReactNode } from 'react';
import { SectionRefs, SectionKey } from '../types';

interface NavigationContextType {
  sectionRefs: SectionRefs;
  scrollToSection: (sectionId: SectionKey) => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
  }, [sectionRefs]);

  const value = {
    sectionRefs,
    scrollToSection,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};