import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Gotop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (!pathname.includes('#')) {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 0);
    }
  }, [pathname]);

  return null;
}

export default Gotop;
