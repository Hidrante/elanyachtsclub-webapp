import React, { useState, useCallback, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';
import type { CardProps as ExperienceCardProps, SectionKey } from '../types';
import { Button } from './SectionWrappers';

interface ExperienciasModalProps {
  isOpen: boolean;
  onClose: () => void;
  allExperiences: ExperienceCardProps[];
  scrollToSection: (sectionId: SectionKey) => void;
}

export const ExperienciasModal: React.FC<ExperienciasModalProps> = ({
  isOpen,
  onClose,
  allExperiences,
  scrollToSection,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-fadeIn');

  const handleNext = useCallback(() => {
    if (allExperiences.length <= 1) return;
    setAnimationClass('animate-slideOutToLeft');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % allExperiences.length);
      setAnimationClass('animate-slideInFromRight');
    }, 300);
  }, [allExperiences.length]);

  const handlePrev = useCallback(() => {
    if (allExperiences.length <= 1) return;
    setAnimationClass('animate-slideOutToRight');
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + allExperiences.length) % allExperiences.length
      );
      setAnimationClass('animate-slideInFromLeft');
    }, 300);
  }, [allExperiences.length]);

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    if (index > currentIndex) {
      setAnimationClass('animate-slideOutToLeft');
    } else {
      setAnimationClass('animate-slideOutToRight');
    }
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimationClass(index > currentIndex ? 'animate-slideInFromRight' : 'animate-slideInFromLeft');
    }, 300);
  };

  const handleCtaClick = (experience: ExperienceCardProps) => {
    onClose();
    setTimeout(() => {
      if (experience.ctaHref && experience.ctaHref.startsWith('#')) {
        const sectionId = experience.ctaHref.substring(1) as SectionKey;
        scrollToSection(sectionId);
      } else if (experience.ctaHref) {
        window.open(experience.ctaHref, '_blank');
      } else if (experience.ctaOnClick) {
        experience.ctaOnClick();
      }
    }, 100);
  };

  if (allExperiences.length === 0) {
    return null;
  }

  const currentExperience = allExperiences[currentIndex];

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
          <div className="fixed inset-0 bg-black/75 backdrop-blur-md" />
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
              <Dialog.Panel className="bg-brand-gray-light w-full max-w-3xl max-h-[90vh] rounded-xl shadow-2xl flex flex-col overflow-hidden relative">
                <header className="flex items-center justify-between p-5 border-b border-brand-gray-100 sticky top-0 bg-brand-gray-light z-10">
                  <Dialog.Title
                    as="h2"
                    id="experiencias-modal-title"
                    className="text-2xl font-bold text-brand-blue"
                  >
                    Explora Nuestras Experiencias
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-brand-gray-medium hover:text-brand-blue p-1 rounded-full transition-colors"
                    aria-label="Cerrar modal de experiencias"
                  >
                    <XIcon className="w-6 h-6" />
                  </button>
                </header>

                <div className={`overflow-y-auto p-6 flex-grow ${animationClass}`}>
                  <div className="aspect-w-16 aspect-h-9 mb-5 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={currentExperience.imgSrc}
                      alt={currentExperience.imgAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-gray-dark mb-2">
                    {currentExperience.title}
                  </h3>
                  <p className="text-brand-gray-text leading-relaxed mb-6 text-sm md:text-base">
                    {currentExperience.description}
                  </p>

                  {currentExperience.ctaText && (currentExperience.ctaHref || currentExperience.ctaOnClick) && (
                    <div className="text-center">
                      <Button onClick={() => handleCtaClick(currentExperience)} variant="gold" className="!py-3 !px-8">
                        {currentExperience.ctaText}
                      </Button>
                    </div>
                  )}
                </div>

                {allExperiences.length > 1 && (
                  <footer className="p-5 border-t border-brand-gray-100 flex items-center justify-between sticky bottom-0 bg-brand-gray-light/80 backdrop-blur-sm z-10">
                    <Button onClick={handlePrev} variant="secondary" className="!py-2 !px-4 !text-sm" aria-label="Experiencia anterior">
                      <ChevronLeftIcon className="w-5 h-5 mr-1 -ml-1" />
                      Anterior
                    </Button>
                    <div className="flex space-x-2">
                      {allExperiences.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleDotClick(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            currentIndex === index
                              ? 'bg-brand-blue scale-125'
                              : 'bg-brand-gray-medium hover:bg-brand-blue/70'
                          }`}
                          aria-label={`Ir a experiencia ${index + 1}`}
                        />
                      ))}
                    </div>
                    <Button onClick={handleNext} variant="secondary" className="!py-2 !px-4 !text-sm" aria-label="Siguiente experiencia">
                      Siguiente
                      <ChevronRightIcon className="w-5 h-5 ml-1 -mr-1" />
                    </Button>
                  </footer>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};