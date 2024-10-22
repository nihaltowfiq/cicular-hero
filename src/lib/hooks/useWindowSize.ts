import { useEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>(() => {
    // Return undefined initially during SSR
    if (typeof window === 'undefined') {
      return {
        width: 0,
        height: 0,
      };
    }
    // Return the initial window size during client-side rendering
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });

  useEffect(() => {
    // Only add event listener if window is available (client-side)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
}
