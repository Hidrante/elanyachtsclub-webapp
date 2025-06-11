import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, UsersIcon, SunIcon } from '@heroicons/react/24/outline';
import filosofiaHeader from '../public/assets/filosofia-header.webp'; // Import the image
import filosofiaHeaderUrl from '/assets/filosofia-header.webp?url';

interface FilosofiaModalProps {
  isOpen: boolean;
  onClose: () => void;
  openChatbot: () => void; // Add openChatbot prop
}

const FilosofiaModal: React.FC<FilosofiaModalProps> = ({ isOpen, onClose, openChatbot }) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all md:max-w-2xl lg:max-w-4xl">
                <button
                  type="button"
                  className="absolute top-3 right-3 text-brand-blue-500 hover:text-brand-blue-700"
                  onClick={onClose}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                  <div className="w-full lg:w-1/2">
                    {/* Updated img src */}
                    <img
                      src={filosofiaHeaderUrl}
                      alt="Imagen de la filosofía de Elanyachts.club"
                      className="rounded-xl object-cover w-full h-auto"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold leading-6 text-brand-blue-900 mb-4 md:text-3xl"
                    >
                      Nuestra Filosofía: Lujo con Alma, Aventura con Propósito
                    </Dialog.Title>
                    <p className="text-brand-gray-text text-base md:text-lg leading-relaxed mb-6">
                      Con más de una década de pasión por el lujo, en{' '}
                      <strong>elanyachts.club</strong> entendemos que un yate es más que
                      un alquiler: es una travesía personalizada. Fusionamos autenticidad
                      local, sostenibilidad y servicio excepcional con tecnología de
                      vanguardia para crear tu santuario flotante único. Buscamos ser tu
                      elección distintiva, ofreciendo experiencias que sorprenden,
                      encantan y merecen ser compartidas.
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <UsersIcon className="h-8 w-8 text-brand-blue-500" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-brand-blue-900">
                            Servicio Excepcional, Conexión Humana
                          </h4>
                          <p className="text-brand-gray-text text-base">
                            Nuestra tripulación profesional y dedicada es el alma de tu experiencia. Anticipamos tus necesidades con una calidez y profesionalismo que definen el verdadero lujo.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <SunIcon className="h-8 w-8 text-brand-blue-500" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-brand-blue-900">
                            Innovación Consciente y Sostenible
                          </h4>
                          <p className="text-brand-gray-text text-base">
                            Integramos la sostenibilidad en el lujo. Usamos tecnología de vanguardia para una experiencia digital inmersiva y promovemos un disfrute respetuoso con el entorno marino.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Add the "Llama al Concierge" button */}
                    <div className="mt-8 text-center">
                      <button
                        className="px-6 py-3 bg-brand-gold text-white font-semibold rounded-lg shadow-md hover:bg-brand-gold-dark transition duration-300 ease-in-out"
                        onClick={openChatbot}
                      >
                        Llama al Concierge
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FilosofiaModal;