import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useSmoothScroll from '../../hooks/useSmoothScroll';

// This component handles two things:
// 1. Scrolls to top when route changes (non-hash navigation)
// 2. Uses our smooth scroll hook for hash links
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useSmoothScroll(); // Use our custom hook for smooth scrolling to sections

  // Scroll to top on route change (but not when only the hash changes)
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null; // This component doesn't render anything
};

export default ScrollToTop; 