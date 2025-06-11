import React from 'react';
import {
  Section,
  SectionTitle,
  SectionSubtitle,
  Button,
} from '../SectionWrappers';
import { CheckCircleIcon, LockClosedIcon, ShieldCheckIcon } from '../Icons';

interface KeyPointItemProps {
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const KeyPointItem: React.FC<KeyPointItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-card-hover transition-shadow duration-300 h-full">
    {React.cloneElement(icon, {
      className: 'w-12 h-12 md:w-14 md:h-14 text-brand-blue mb-4',
    })}
    <h4 className="text-xl font-semibold text-brand-gray-dark mb-2">{title}</h4>
    <p className="text-sm text-brand-gray-text leading-relaxed">
      {description}
    </p>
  </div>
);

interface TransparenciaSectionProps {
  openTestimonialsModal: () => void;
}

export const TransparenciaSection = React.forwardRef<
  HTMLElement,
  TransparenciaSectionProps
>(({ openTestimonialsModal }, ref) => (
  <Section id="transparencia" variant="light" ref={ref}>
    <SectionTitle delay="0s">
      Navega con Confianza: Nuestro Compromiso con la Transparencia
    </SectionTitle>
    <SectionSubtitle delay="0.2s">
      En el mundo del lujo, la confianza no es un extra, es fundamental. Nos
      enorgullece ofrecer una transparencia radical en cada detalle, desde la
      estructura clara de precios hasta nuestras operaciones y protocolos de
      seguridad. Tu tranquilidad es nuestra prioridad.
    </SectionSubtitle>

    <div
      className="max-w-4xl mx-auto fade-in-up"
      style={{ animationDelay: '0.4s' }}
    >
      <div className="bg-brand-blue-100 p-8 md:p-10 rounded-xl shadow-xl mb-12 md:mb-16 relative">
        <span className="absolute top-4 left-6 text-6xl text-brand-blue opacity-20 font-serif">
          &ldquo;
        </span>
        <blockquote className="relative z-10">
          <p className="text-lg md:text-xl italic text-brand-gray-dark mb-4">
            "La experiencia cultural a bordo fue increíble. La tripulación no
            solo era profesional, sino que nos compartió historias fascinantes
            del lugar. Realmente una perspectiva única que no hubiéramos
            encontrado en otro lado."
          </p>
          <cite className="block mt-4 text-md font-semibold text-brand-blue not-italic">
            — J. Rodriguez, Viajero Distinguido
          </cite>
        </blockquote>
        <span className="absolute bottom-4 right-6 text-6xl text-brand-blue opacity-20 font-serif">
          &rdquo;
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <KeyPointItem
          icon={<CheckCircleIcon />}
          title="Precios Claros"
          description="Sin sorpresas ni costos ocultos. Total transparencia en cada cotización."
        />
        <KeyPointItem
          icon={<LockClosedIcon />}
          title="Seguridad de Datos"
          description="Tu información personal y de pago, protegida con los más altos estándares."
        />
        <KeyPointItem
          icon={<ShieldCheckIcon />}
          title="Protocolos Rigurosos"
          description="Máximos estándares de seguridad y mantenimiento en todas nuestras embarcaciones."
        />
      </div>
    </div>

    <div
      className="text-center mt-12 md:mt-16 fade-in-up"
      style={{ animationDelay: '0.6s' }}
    >
      <Button
        onClick={openTestimonialsModal}
        variant="secondary"
        className="mr-0 mb-4 sm:mr-5 sm:mb-0 !py-4 !px-10"
      >
        Lee Más Testimonios
      </Button>
      <Button href="#" variant="secondary" className="!py-4 !px-10">
        Nuestra Estructura de Precios
      </Button>
    </div>
  </Section>
));
TransparenciaSection.displayName = 'TransparenciaSection';
