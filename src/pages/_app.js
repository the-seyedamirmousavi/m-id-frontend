import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  console.log('App is running');
  return <Component {...pageProps} />;
}

export default MyApp;
