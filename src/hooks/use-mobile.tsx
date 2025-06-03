
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false); // Default to false

  React.useEffect(() => {
    // This function will only run on the client side
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkIsMobile(); // Check on initial client mount

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mql.addEventListener("change", checkIsMobile); // Listen for changes

    return () => mql.removeEventListener("change", checkIsMobile); // Cleanup listener
  }, []); // Empty dependency array ensures this runs once on mount (client-side)

  return isMobile;
}
