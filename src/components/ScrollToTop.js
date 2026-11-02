import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(pathname);

  // Preserve scroll position across page refreshes
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }

    const savedScrollY = sessionStorage.getItem(`scrollY:${pathname}`);
    if (savedScrollY !== null) {
      const y = parseInt(savedScrollY, 10);
      if (!Number.isNaN(y)) {
        requestAnimationFrame(() => {
          window.scrollTo(0, y);
        });
      }
    }

    const saveScroll = () => {
      sessionStorage.setItem(`scrollY:${window.location.hash.replace(/^#/, '') || '/'}`, String(window.scrollY));
    };

    window.addEventListener('scroll', saveScroll, { passive: true });
    window.addEventListener('beforeunload', saveScroll);

    return () => {
      window.removeEventListener('scroll', saveScroll);
      window.removeEventListener('beforeunload', saveScroll);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll to top only when switching between different routes, and track page view in Google Analytics
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      window.scrollTo(0, 0);
      sessionStorage.setItem(`scrollY:${pathname}`, '0');
      prevPathnameRef.current = pathname;
    }
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-C7S1WL86PM', {
        page_path: pathname
      });
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
