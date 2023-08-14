import { useEffect } from "react";

const scrollPositions: Record<string, number> = {};

const useScrollPosition = (page: string) => {
  useEffect(() => {
    const pageScrollPosition = scrollPositions[page];

    if (pageScrollPosition) {
      window.scrollTo({
        top: pageScrollPosition,
        behavior: 'smooth'
      });
    }

    const save = () => {
      scrollPositions[page] = window.scrollY;
    };

    window.addEventListener('scroll', save);

    return () => {
      window.removeEventListener('scroll', save);
    };
  }, [page]);
};

export default useScrollPosition;
