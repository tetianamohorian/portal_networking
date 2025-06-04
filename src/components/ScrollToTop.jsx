import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // ← сбрасываем позицию
  }, [pathname]);

  return null;
};

export default ScrollToTop;
