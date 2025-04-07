import { useState, useEffect } from 'react';

const SCROLL_THRESHOLD = 10;

export function useScrollDirection(initialDirection: 'up' | 'down') {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>(initialDirection);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const currentDirection = scrollY > lastScrollY ? 'down' : 'up';
      const thresholdChecked =
        scrollY - lastScrollY > SCROLL_THRESHOLD || scrollY - lastScrollY < -SCROLL_THRESHOLD;

      if (currentDirection !== scrollDirection && thresholdChecked) {
        setScrollDirection(currentDirection);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}
