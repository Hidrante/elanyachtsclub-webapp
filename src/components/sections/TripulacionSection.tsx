import React from 'react';
import {
  Section,
  SectionTitle,
  SectionSubtitle,
  Button,
} from '../SectionWrappers';
import type { TeamMemberProps } from '../../types';

const teamMembersData: TeamMemberProps[] = [
  {
    imgSrc:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600', // Placeholder
    imgAlt: 'Retrato del Capitán [Nombre Ejemplo]',
    name: 'Capitán Alejandro Vega',
    role: 'Experto en navegación astronómica maya y conocedor de caletas secretas.',
    ctaText: 'Conocer Perfil',
    ctaHref: '#',
  },
  {
    imgSrc:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600', // Placeholder
    imgAlt: 'Retrato de la Chef [Nombre Ejemplo]',
    name: 'Chef Isabella Rossi',
    role: 'Especialista en cocina local con ingredientes frescos y presentaciones innovadoras.',
    ctaText: 'Conocer Perfil',
    ctaHref: '#',
  },
  {
    imgSrc:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600', // Placeholder
    imgAlt: 'Retrato de la Guía [Nombre Ejemplo]',
    name: 'Guía Sofía Castillo',
    role: 'Apasionada por la historia local y la conexión con comunidades auténticas.',
    ctaText: 'Conocer Perfil',
    ctaHref: '#',
  },
  {
    imgSrc:
      'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600', // Placeholder
    imgAlt: 'Retrato del Anfitrión [Nombre Ejemplo]',
    name: 'Anfitrión Ricardo Morales',
    role: 'Dedicado a asegurar tu confort y anticipar cada una de tus necesidades a bordo.',
    ctaText: 'Conocer Perfil',
    ctaHref: '#',
  },
];

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  imgSrc,
  imgAlt,
  name,
  role,
  ctaText,
  ctaHref,
}) => (
  <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-card-hover transition-all duration-300 flex flex-col items-center">
    <img
      src={imgSrc}
      alt={imgAlt}
      className="w-36 h-36 md:w-44 md:h-44 rounded-full mx-auto mb-5 object-cover shadow-md border-4 border-white"
    />
    <h3 className="text-xl md:text-2xl font-semibold text-brand-gray-dark mb-1.5">
      {name}
    </h3>
    <p className="text-sm text-brand-gray-text mb-3 px-2 h-16 overflow-hidden">
      {role}
    </p>{' '}
    {/* Fixed height for alignment */}
    <a
      href={ctaHref}
      className="text-sm text-brand-gold hover:text-brand-gold-dark font-semibold mt-auto transition-colors duration-300"
    >
      {ctaText} &rarr;
    </a>
  </div>
);

export const TripulacionSection = React.forwardRef<HTMLElement>(
  (_props, ref) => (
    <Section id="tripulacion" variant="default" ref={ref}>
      <SectionTitle delay="0s">
        Maestros del Mar y Embajadores de tu Experiencia
      </SectionTitle>
      <SectionSubtitle delay="0.2s">
        Nuestra tripulación es el corazón de tu viaje. No solo son marineros
        expertos que garantizan tu seguridad y confort, sino verdaderos
        anfitriones apasionados por la cultura local, la historia natural y las
        experiencias únicas que ofrecemos. Están aquí para anticipar tus
        necesidades y enriquecer cada momento a bordo. Conoce a las personas que
        harán tu travesía inolvidable.
      </SectionSubtitle>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 fade-in-up"
        style={{ animationDelay: '0.4s' }}
      >
        {teamMembersData.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
      <div
        className="text-center mt-12 md:mt-16 fade-in-up"
        style={{ animationDelay: '0.6s' }}
      >
        <Button href="#" variant="secondary" className="!py-4 !px-10">
          Conoce a Todo Nuestro Equipo
        </Button>
      </div>
    </Section>
  ),
);
TripulacionSection.displayName = 'TripulacionSection';
