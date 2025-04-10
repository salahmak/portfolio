import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useSmoothScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // If there's a hash and we're on the home page
    if (hash && (pathname === '/' || pathname === '')) {
      // Wait a bit for the page to render
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    }
  }, [hash, pathname]);
} 