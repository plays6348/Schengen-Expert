import React, { useState, useEffect } from 'react';
import AppContext from '../context/appContext';
import '@/styles/globals.css';
import Layout from '../components/layout';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  const [state, setstate] = useState({});

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-N5P3RPG' });

    // Tawk.to Script
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/67c6b55dbda626190db7a4a7/1ilg38tgt';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={state}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
