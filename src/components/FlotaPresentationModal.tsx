import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FlotaPresentationApp } from '../../presentacion';
import { XIcon } from './Icons';
import type { Location } from '../types';

interface FlotaPresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialYachtId?: string;
  locationFilter?: Location;
  openChatbot: () => void;
}

export const FlotaPresentationModal: React.FC<FlotaPresentationModalProps> = ({
  isOpen,
  onClose,
  initialYachtId,
  locationFilter,
  openChatbot,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[1000]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel 
                className="bg-white w-full h-full max-w-6xl max-h-[95vh] rounded-xl shadow-2xl flex flex-col relative"
              >
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 z-[100] bg-white/80 hover:bg-white text-brand-gray-dark p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  aria-label="Cerrar catálogo de yates"
                >
                  <XIcon className="w-6 h-6" />
                </button>
                <FlotaPresentationApp
                  initialYachtId={initialYachtId}
                  locationFilter={locationFilter}
                  openChatbot={openChatbot}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};