import React from 'react';
import type { SectionProps as AppSectionProps, CardProps as AppCardProps, ServiceItemProps as AppServiceItemProps } from '../types';

interface ExtendedSectionProps extends AppSectionProps {
  variant?: 'default' | 'light' | 'accent';
}

export const Section = React.forwardRef<HTMLElement, ExtendedSectionProps>(
  ({ id, className, children, variant = 'default' }, ref) => {
    let bgColorClass = 'bg-brand-gray-light'; 
    if (variant === 'light') bgColorClass = 'bg-white';
    if (variant === 'accent') bgColorClass = 'bg-brand-blue text-white';

    let sectionSpecificClass = '';
    if (id === 'hero') {
      sectionSpecificClass = '!py-0'; 
    } else if (id === 'contacto') {
      bgColorClass = 'bg-brand-blue text-white';
    }

    return (
      <section ref={ref} id={id} className={`py-12 md:py-16 ${bgColorClass} ${sectionSpecificClass} ${className || ''}`.trim()}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = "Section";


export const SectionTitle: React.FC<React.PropsWithChildren<{ className?: string, delay?: string, lightText?: boolean }>> = ({ children, className, delay, lightText }) => (
  <h2 className={`text-3xl md:text-4xl font-bold ${lightText ? 'text-white' : 'text-brand-gray-dark'} mb-6 md:mb-8 text-center fade-in-up ${className || ''}`.trim()} style={delay ? { animationDelay: delay } : {}}>
    {children}
  </h2>
);

export const SectionSubtitle: React.FC<React.PropsWithChildren<{ className?: string, delay?: string, lightText?: boolean }>> = ({ children, className, delay, lightText }) => (
  <p className={`text-base md:text-lg ${lightText ? 'text-blue-100' : 'text-brand-gray-text'} mb-10 md:mb-12 text-center max-w-3xl mx-auto fade-in-up ${className || ''}`.trim()} style={delay ? { animationDelay: delay } : {}}>
    {children}
  </p>
);

export const TextLead: React.FC<React.PropsWithChildren<{ className?: string; style?: React.CSSProperties }>> = ({ children, className, style }) => (
  <p className={`text-lg md:text-xl text-brand-gray-text mb-6 ${className || ''}`.trim()} style={style}>
    {children}
  </p>
);

interface ButtonProps extends React.PropsWithChildren<{
  href?: string;
  variant?: 'primary' | 'secondary' | 'secondary-white' | 'gold';
  size?: 'sm' | 'md';
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  disabled?: boolean;
}> {}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  className, 
  type = "button", 
  onClick,
  disabled 
}) => {
  const baseClasses = "inline-block font-semibold rounded-lg shadow-md hover:shadow-interactive transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses = {
    sm: 'py-2 px-5 text-sm',
    md: 'py-3 px-8 text-base',
  };

  const variantClasses = {
    primary: "bg-brand-navy hover:bg-brand-navy-light text-white focus:ring-brand-navy",
    secondary: "bg-transparent hover:bg-brand-navy-50 border-2 border-brand-navy text-brand-navy hover:border-brand-navy hover:text-brand-navy focus:ring-brand-navy",
    'secondary-white': "bg-transparent hover:bg-white/20 border-2 border-white text-white hover:text-gray-100 focus:ring-white",
    gold: "bg-brand-gold hover:bg-brand-gold-dark text-white focus:ring-brand-gold",
  };
  
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className || ''}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
     <button type={type} className={combinedClasses} onClick={onClick} disabled={disabled}>
        {children}
    </button>
  );
};

export const Card: React.FC<AppCardProps> = ({ imgSrc, imgAlt, title, description, ctaText, ctaHref, ctaOnClick, children, className, accentBorder }) => (
  <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-card-hover h-full flex flex-col group ${accentBorder ? `border-l-4 ${accentBorder}` : ''} ${className || ''}`.trim()}>
    <div className="overflow-hidden">
      {/* --- CAMBIO AQUÍ: ALTURA DE IMAGEN REDUCIDA OTRA VEZ --- */}
      <img src={imgSrc} alt={imgAlt} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-brand-gray-dark mb-2 group-hover:text-brand-blue transition-colors duration-300">{title}</h3>
      <p className="text-sm text-brand-gray-text mb-4 flex-grow leading-relaxed">{description}</p>
      {children}
      {ctaText && (ctaHref || ctaOnClick) && (
        <Button 
          href={ctaOnClick ? undefined : ctaHref}
          onClick={ctaOnClick} 
          variant="secondary" 
          className="w-full text-center mt-auto !py-2.5 !text-base"
        >
          {ctaText}
        </Button>
      )}
    </div>
  </div>
);

export const ServiceItemCard: React.FC<AppServiceItemProps> = ({ title, description, icon }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg text-center h-full flex flex-col items-center justify-start hover:shadow-card-hover transition-shadow duration-300 group">
    {icon && <div className="mb-4 text-brand-blue group-hover:text-brand-gold transition-colors duration-300 transform group-hover:scale-110">{React.cloneElement(icon, { className: 'w-10 h-10 md:w-12 md:h-12' })}</div>}
    <h3 className="text-lg font-semibold text-brand-gray-dark mb-2 group-hover:text-brand-blue transition-colors duration-300">{title}</h3>
    <p className="text-sm text-brand-gray-text leading-relaxed">{description}</p>
  </div>
);