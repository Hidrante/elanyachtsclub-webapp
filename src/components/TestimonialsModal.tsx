import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from './Icons';
import type { Testimonial } from '../types';
interface TestimonialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonials: Testimonial[];
}

export const TestimonialsModal: React.FC<TestimonialsModalProps> = ({
  isOpen,
  onClose,
  testimonials,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-brand-blue-light p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-brand-gold"
                >
                  Lo que dicen nuestros clientes
                </Dialog.Title>
                <div className="mt-4 space-y-4 max-h-96 overflow-y-auto">
                  {testimonials.map((testimonial, index) => (
 <div key={index} className="border-t border-brand-gray pt-4">
 <blockquote className="text-brand-white">
                        <p>"{testimonial.quote}"</p>
 </blockquote>
 <cite className="mt-2 block text-right text-sm not-italic text-brand-gray-light">
                        - {testimonial.author}
 </cite>
 </div>
                  ))}
                </div>
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="p-2 rounded-full text-brand-gray-light hover:text-brand-white hover:bg-brand-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-blue-light focus:ring-brand-gold"
                    onClick={onClose}
 aria-label="Cerrar testimonios"
 >
                    <XIcon className="h-6 w-6" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
