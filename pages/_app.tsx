import { useEffect } from 'react';
import NoSSR from '../components/noSSR';
import '../styles/globals.css';

export default function App({ Component, pageProps }: any) {
  return (
    <NoSSR>
      <Component {...pageProps} />
    </NoSSR>
  );
}
