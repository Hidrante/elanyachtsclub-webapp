import React from 'react';
import { yachtDetailsData } from "./src/data/yachtDetails";
import type { YachtDetail, Specification, Location } from './types';
import { ImageGallerySlider } from './src/components/ImageGallerySlider';
import { CogIcon, ShieldCheckIcon, MapPinIcon, XIcon, ChevronLeftIcon, ChevronRightIcon } from './src/components/Icons';
import { Button, TextLead } from './src/components/SectionWrappers';

// Props para el componente principal
interface FlotaPresentationAppProps {
  initialYachtId?: string;
  locationFilter?: Location;
  openChatbot: () => void;
}

const SpecTable: React.FC<{ items: Specification[] }> = ({ items }) => (
  <div className="text-sm">
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
          <span className="font-semibold text-gray-600">{item.label}</span>
          <span className="text-gray-800">{item.value}</span>
        </li>
      ))}
    </ul>
  </div>
);

const AmenitiesList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-start">
        <ShieldCheckIcon className="w-5 h-5 text-brand-gold mr-3 mt-0.5 flex-shrink-0" />
        <span className="text-gray-600">{item}</span>
      </li>
    ))}
  </ul>
);

const YachtSheetDisplay: React.FC<{ yacht: YachtDetail; openChatbot: () => void; }> = ({ yacht, openChatbot }) => {
    // Dummy data for prices - replace with actual yacht.price property if available
    const priceDisplay = (
        <div className="flex items-baseline mb-4">
            <MapPinIcon className="w-5 h-5 text-brand-blue-dark mr-2 flex-shrink-0" />
            <div className="text-2xl md:text-3xl font-bold text-brand-blue-dark mr-2">
                ${yacht.pricePerDay ? yacht.pricePerDay.replace(/,/g, '').replace('$', '') : 'Consultar'}
            </div>
            {yacht.pricePerDay && <span className="text-base text-brand-gray-text">/ día (aprox.)</span>}
        </div>
    );

  return (
    <div className="bg-white rounded-lg shadow-xl max-w-6xl mx-auto overflow-hidden flex flex-col h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <Button variant="secondary" size="sm" onClick={() => console.log('Cerrar')}> {/* Replace with actual close logic */}
                <ChevronLeftIcon className="w-5 h-5 mr-2"/> Cerrar
            </Button>
            <div className="flex items-center">
                 {/* Replace with actual logo */}
                <img src="/logo-elanyachts.png" alt="Elan Yachts Logo" className="h-8 mr-2"/>
                <span className="text-brand-blue-dark font-semibold">elanyachts.club</span>
            </div>
            <Button variant="secondary" size="sm" onClick={() => console.log('Cerrar')}> {/* Replace with actual close logic */}
                <XMarkIcon className="w-5 h-5"/>
            </Button>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Left Column - Image Gallery */}
            <div className="lg:col-span-1">
                 <div className="mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-gray-dark">{yacht.name}</h2>
                    <p className="text-base text-brand-gray-text">{yacht.type}</p>
                 </div>
                <ImageGallerySlider images={yacht.galleryImages} />
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-1 flex flex-col">
                {/* Description and Location */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-brand-blue-dark mb-3 flex items-center">
                        <MapPinIcon className="w-5 h-5 mr-2 text-brand-blue-dark"/>
                        Descripción y Ubicación
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                        {yacht.fullDescription}
                    </p>
                    <TextLead className="!mb-0 !text-sm">
                         <span className="font-semibold">Ubicación Típica:</span> {yacht.location}
                    </TextLead>
                </div>

                {/* Specifications */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-brand-blue-dark mb-3 flex items-center">
                        <CogIcon className="w-5 h-5 mr-2 text-brand-blue-dark"/>
                        Especificaciones Técnicas
                    </h3>
                     <SpecTable items={yacht.specifications} />
                </div>

                {/* Amenities/Included Service */}
                 {yacht.amenities && yacht.amenities.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-brand-blue-dark mb-3 flex items-center">
                             <ShieldCheckIcon className="w-5 h-5 mr-2 text-brand-blue-dark"/>
                             Servicio Incluido
                         </h3>
                        <AmenitiesList items={yacht.amenities} />
                    </div>
                 )}

                {/* Prices */}
                <div className="mt-auto"> {/* Push to the bottom */}
                    <h3 className="text-xl font-semibold text-brand-blue-dark mb-3 flex items-center">
                        <MapPinIcon className="w-5 h-5 mr-2 text-brand-blue-dark"/> {/* Using MapPinIcon for price as in the image */}
                        Precios
                    </h3>
                   {priceDisplay}
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-4 border-t border-gray-200">
            <Button variant="secondary" size="sm" onClick={() => console.log('Anterior')}> {/* Replace with actual logic */}
                <ChevronLeftIcon className="w-5 h-5 mr-2"/> Anterior
            </Button>
            {/* Replace with actual yacht counter logic */}
            <span className="text-sm text-brand-gray-text">Yate 1 de 12</span> 
            <Button variant="primary" size="sm" onClick={() => console.log('Siguiente')}> {/* Replace with actual logic */}
                Siguiente <ChevronRightIcon className="w-5 h-5 ml-2"/>
            </Button>
        </div>
      </div>
  );
};

// --- CAMBIO AQUÍ: Añadimos 'export' para que el componente pueda ser importado ---
export const FlotaPresentationApp: React.FC<FlotaPresentationAppProps> = ({ initialYachtId, locationFilter, openChatbot }) => {
    const yachtToShow = yachtDetailsData.find(y => y.id === initialYachtId) || yachtDetailsData.find(y => y.location === locationFilter);

    if (!yachtToShow) {
        return <div className="text-center p-8 text-brand-gray-dark bg-white h-full flex items-center justify-center">Selecciona un yate para ver los detalles.</div>;
    }

    return <YachtSheetDisplay yacht={yachtToShow} openChatbot={openChatbot} />;
};