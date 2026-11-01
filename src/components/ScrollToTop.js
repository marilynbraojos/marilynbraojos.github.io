import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  // Disable browser scroll restoration on refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    const handleLoadOrUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleLoadOrUnload);
    window.addEventListener('load', handleLoadOrUnload);

    return () => {
      window.removeEventListener('beforeunload', handleLoadOrUnload);
      window.removeEventListener('load', handleLoadOrUnload);
    };
  }, []);

  // Scroll to top and track page view in Google Analytics on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-C7S1WL86PM', {
        page_path: pathname
      });
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
