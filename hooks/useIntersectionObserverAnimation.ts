import { useEffect } from 'react';

const useIntersectionObserverAnimation = (selector: string, options: IntersectionObserverInit = { threshold: 0.1 }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      options
    );

    const elementsToAnimate = document.querySelectorAll(selector);
    elementsToAnimate.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elementsToAnimate.forEach((el) => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, [selector, options]);
};

export default useIntersectionObserverAnimation;
