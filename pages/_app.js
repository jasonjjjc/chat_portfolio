import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      const styleSheets = document.querySelectorAll('link[rel=stylesheet]');
      const sheetArray = Array.from(styleSheets);
      const hasStylesheet = sheetArray.some((sheet) =>
        sheet.href.includes('/styles/globals.css')
      );

      if (!hasStylesheet) {
        const link = document.createElement('link');
        link.href = '/styles/globals.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
