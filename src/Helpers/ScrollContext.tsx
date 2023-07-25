import { useState, useCallback, createContext } from 'react';

export const ScrollContext = createContext({
  scrollPosition: 0,
  saveScroll: () => {},
  restoreScroll: () => {},
});

export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const saveScroll = useCallback(() => {
    setScrollPosition(window.scrollY || 0);
  }, []);

  const restoreScroll = useCallback(() => {
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  }, [scrollPosition]);

  return {
    scrollPosition,
    saveScroll,
    restoreScroll,
  };
}
