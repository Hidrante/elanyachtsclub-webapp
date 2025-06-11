import React, { useState } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, Button } from '../SectionWrappers';
import type { CardProps, Location } from '../../types'; 
import { yachtDetailsData, type YachtDetail } from '../../data/yachtDetails';
import { locations } from "../../../types";

const getLowestPriceValue = (yacht: YachtDetail): number => { // Moved this function declaration to the beginning
  if (yacht.hourlyPricing && yacht.hourlyPricing.length > 0) {
    const lowestHourly = yacht.hourlyPricing.reduce((min, p) => {
      const pPrice = parseFloat(p.price.replace(/,/g, ''));
      const minPrice = parseFloat(min.price.replace(/,/g, ''));
      return pPrice < minPrice ? p : min;
    });
    return parseFloat(lowestHourly.price.replace(/,/g, ''));
  }
  if (yacht.pricePerDay) {
    return parseFloat(yacht.pricePerDay.replace(/,/g, '').replace('$', ''));
  }
  return Infinity;
};

const mapYachtToCardProps = (yacht: YachtDetail, openModalFn?: (yachtId?: string, location?: Location) => void): CardProps => {
  let priceDisplay: React.ReactNode = null;

  const lowestHourly = (yacht.hourlyPricing && yacht.hourlyPricing.length > 0) 
    ? yacht.hourlyPricing.reduce((min, p) => parseFloat(p.price.replace(/,/g, '')) < parseFloat(min.price.replace(/,/g, '')) ? p : min)
    : null;

  if (lowestHourly) {
    priceDisplay = (
      <div className="mb-2">
        <p className="text-sm font-bold italic text-brand-gold">¡Promoción!</p>
        <p className="text-xl font-bold text-brand-blue-dark">${lowestHourly.price} <span className="text-base font-normal text-brand-gray-text">{lowestHourly.currency}</span></p>
        <p className="text-sm text-brand-gray-text">(por {lowestHourly.hours} horas)</p>
      </div>
    );
  } else if (yacht.pricePerDay) {
    priceDisplay = (
      <div className="mb-2">
        <p className="text-lg font-bold text-brand-blue-dark">Desde {yacht.pricePerDay}</p>
        <p className="text-sm text-brand-gray-text">por día</p>
      </div>
    );
  } else { // Consider adjusting mb-4 and mt-4 here as well if needed
    priceDisplay = <p className="text-base text-brand-gray-text mb-4 mt-4">Consultar precio</p>;
  }

  return {
    imgSrc: yacht.mainImage,
    imgAlt: `Yate ${yacht.name} en ${yacht.location}`,
    title: yacht.name,
    description: yacht.tagline,
    children: priceDisplay,
    ctaText: "Ver Detalles y Amenidades",
    ctaOnClick: openModalFn ? () => openModalFn(yacht.id, yacht.location) : undefined,
  };
};

export const FlotaSection = React.forwardRef<HTMLElement, FlotaSectionProps>((props, ref) => {
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);

  const cheapestYachts = yachtDetailsData
    .sort((a, b) => getLowestPriceValue(a) - getLowestPriceValue(b))
    .slice(0, 4)
    .map((yacht) => mapYachtToCardProps(yacht, props.openFlotaModal));

  return (
    <Section id="flota" variant="light" ref={ref}>
      <SectionTitle delay="0s" className="leading-tight">
        Encuentra Tu Embarcación Perfecta: Lujo con Carácter
      </SectionTitle>
      <SectionSubtitle delay="0.2s" className="leading-tight -mt-4">
        Nuestra flota ha sido cuidadosamente seleccionada. Explora nuestras mejores ofertas o filtra por ubicación para ver la flota completa.
      </SectionSubtitle>

      {/* --- BOTONES DE UBICACIÓN REINTRODUCIDOS --- */}
      <div className="flex justify-center space-x-2 sm:space-x-4 mb-6 md:mb-8 fade-in-up -mt-4" style={{ animationDelay: '0.3s' }} role="tablist" aria-label="Filtrar yates por ubicación">
        {locations.map((location) => (
          <Button
            key={location}
            variant={selectedLocation === location ? 'primary' : 'secondary'}
            onClick={() => setSelectedLocation(location)}
            className="!py-2.5 !px-5 !text-sm md:!text-base"
          >
            {location}
          </Button>
        ))}
      </div>
      
      <div id="yacht-grid" role="tabpanel" className="fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cheapestYachts.map((yachtCardProps) => (
            <Card 
              key={yachtCardProps.title} 
              {...yachtCardProps}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-8 md:mt-10 fade-in-up" style={{ animationDelay: '0.6s' }}>
        <Button 
          onClick={() => props.openFlotaModal?.(undefined, selectedLocation)} 
          variant="primary" 
          className="mr-0 mb-4 sm:mr-5 sm:mb-0"
        >
          Ver Flota de {selectedLocation}
        </Button>
        <Button 
          onClick={props.openChatbot} 
          variant="gold"
        >
          Asesoría Personalizada
        </Button>
      </div>
    </Section>
  );
});

FlotaSection.displayName = "FlotaSection";

interface FlotaSectionProps {
  openFlotaModal?: (yachtId?: string, location?: Location) => void;
  openChatbot: () => void; 
}