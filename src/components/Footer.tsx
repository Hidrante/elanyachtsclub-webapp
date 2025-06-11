import React from 'react';
import type { NavLinkItem, SectionRefs, SectionKey } from '../types';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './Icons';

interface FooterProps {
  sectionRefs: SectionRefs;
  scrollToSection: (sectionId: SectionKey) => void;
}

const kebabToCamelCase = (str: string): string => {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

export const Footer: React.FC<FooterProps> = ({
  sectionRefs,
  scrollToSection,
}) => {
  const handleQuickLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const kebabCaseKey = href.substring(1);
    const sectionKey = kebabToCamelCase(kebabCaseKey) as SectionKey;
    if (sectionRefs[sectionKey]) {
      scrollToSection(sectionKey);
    } else {
      console.warn(
        `Footer: Section ID "${sectionKey}" (derived from href "${href}") not found in sectionRefs.`,
      );
    }
  };

  const quickLinks: NavLinkItem[] = [
    { href: '#hero', label: 'Inicio', isScrollLink: true },
    { href: '#flota', label: 'Nuestra Flota', isScrollLink: true },
    { href: '#experiencias', label: 'Experiencias Únicas', isScrollLink: true },
    { href: '#porque-elegirnos', label: 'Filosofía', isScrollLink: true },
    { href: '#contacto', label: 'Contacto', isScrollLink: true },
  ];

  const legalLinks: NavLinkItem[] = [
    { href: '#', label: 'Política de Privacidad' }, // These should eventually link to actual pages
    { href: '#', label: 'Términos y Condiciones' },
    { href: '#', label: 'Política de Cookies' },
  ];

  const socialLinks = [
    {
      href: '#',
      label: 'Facebook',
      icon: <FacebookIcon className="w-6 h-6" />,
    },
    {
      href: '#',
      label: 'Instagram',
      icon: <InstagramIcon className="w-6 h-6" />,
    },
    {
      href: '#',
      label: 'LinkedIn',
      icon: <LinkedInIcon className="w-6 h-6" />,
    },
  ];

  return (
    <footer className="bg-brand-gray-dark text-gray-400 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5">
              elanyachts.club
            </h4>
            <p className="text-sm leading-relaxed">
              Navegando más allá del lujo, creando experiencias que transforman
              y perduran en la memoria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-5">
              Enlaces Rápidos
            </h5>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.isScrollLink && link.href) {
                        handleQuickLinkClick(e, link.href);
                      }
                      // If not a scroll link, default behavior applies.
                    }}
                    className="hover:text-brand-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-5">Legal</h5>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-brand-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-5">Síguenos</h5>
            <div className="flex space-x-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors duration-300 transform hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-gray-700 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} elanyachts.club. Todos los
            derechos reservados.
          </p>
          <p className="mt-1.5 text-gray-500">
            Una empresa con visión única, diseñada para el viajero exigente.
          </p>
        </div>
      </div>
    </footer>
  );
};
