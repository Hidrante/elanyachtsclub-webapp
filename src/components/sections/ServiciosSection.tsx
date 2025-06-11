import React from 'react';
import {
  Section,
  SectionTitle,
  SectionSubtitle,
  ServiceItemCard,
  Button,
} from '../SectionWrappers';
import type { ServiceItemProps, SectionKey } from '../../types';
import {
  ChatIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  UsersIcon,
  CalendarDaysIcon,
  SunIcon,
} from '../Icons';

const servicesData: ServiceItemProps[] = [
  {
    title: 'Concierge Personalizado 24/7',
    description:
      'Asistencia dedicada para planificar y disfrutar tu viaje, disponible a cualquier hora.',
    icon: <ChatIcon />,
  },
  {
    title: 'Planificación de Rutas a Medida',
    description:
      'Itinerarios y actividades diseñados exclusivamente para ti y tus acompañantes.',
    icon: <CalendarDaysIcon />,
  },
  {
    title: 'Alta Gastronomía a Bordo',
    description:
      'Experiencias culinarias excepcionales con chefs privados, adaptadas a tus preferencias.',
    icon: <UsersIcon />,
  },
  {
    title: 'Equipamiento Acuático Premium',
    description:
      'Una selección de los mejores juguetes acuáticos para la máxima diversión en el mar.',
    icon: <SunIcon />,
  },
  {
    title: 'Gestión de Eventos Especiales',
    description:
      'Organización impecable para celebraciones, aniversarios y encuentros corporativos.',
    icon: <CheckCircleIcon />,
  },
  {
    title: 'Soporte Integral de Viaje',
    description:
      'Asistencia completa antes, durante y después de tu travesía para una experiencia sin preocupaciones.',
    icon: <ShieldCheckIcon />,
  },
];

interface ServiciosSectionProps {
  scrollToSection: (sectionId: SectionKey) => void;
  openChatbot: () => void;
}

export const ServiciosSection = React.forwardRef<
  HTMLElement,
  ServiciosSectionProps
>(({ scrollToSection, openChatbot }, ref) => (
  <Section id="servicios" variant="default" ref={ref}>
    <SectionTitle delay="0s">
      Cuidado en Cada Detalle: Nuestros Servicios a tu Disposición
    </SectionTitle>
    <SectionSubtitle delay="0.2s">
      Desde la planificación inicial con nuestro Concierge Digital y Humano
      hasta el soporte durante tu viaje, nos aseguramos de que cada aspecto de
      tu experiencia sea perfecto y memorable.
    </SectionSubtitle>
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 text-center fade-in-up"
      style={{ animationDelay: '0.4s' }}
    >
      {servicesData.map((service, index) => (
        <ServiceItemCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
    <div
      className="text-center mt-12 md:mt-16 fade-in-up"
      style={{ animationDelay: '0.6s' }}
    >
      <Button
        onClick={() => {
          /* Placeholder for future 'Discover All Services' modal or page */ alert(
            'Próximamente: Página/Modal de Todos los Servicios',
          );
        }}
        variant="secondary"
        className="mr-0 mb-4 sm:mr-5 sm:mb-0 !py-4 !px-10"
      >
        Descubre Todos Los Servicios
      </Button>
      <Button onClick={openChatbot} variant="gold" className="!py-4 !px-10">
        Contacta a Tu Concierge
      </Button>
    </div>
  </Section>
));
ServiciosSection.displayName = 'ServiciosSection';
