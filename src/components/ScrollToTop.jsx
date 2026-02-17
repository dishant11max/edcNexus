import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    // Force scroll to top on mount/refresh
    window.scrollTo(0, 0);

    // Optional: If using history/router, listen to changes.
    // Since this is a single page landing, mount effect is enough for refresh.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return null;
};

export default ScrollToTop;
