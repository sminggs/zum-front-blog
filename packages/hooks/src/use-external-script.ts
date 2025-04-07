import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** @see {@link https://github.com/vercel/next.js/discussions/17919#discussioncomment-4717679} */
export const useExternalScript = (
  src: string,
  reloadOnRouteChange = false,
  cleanUpFn?: () => void,
) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const pathname = usePathname();
  const reloadPath = reloadOnRouteChange ? pathname : null;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => setIsLoaded(true);
    script.onerror = () => setError(true);

    return () => {
      document.head.removeChild(script);
      cleanUpFn?.();
    };
  }, [src, reloadPath]);

  return {
    isLoaded,
    error,
  };
};
