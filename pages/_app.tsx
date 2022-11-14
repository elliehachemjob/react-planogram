import NoSSR from '../components/noSSR';
import '../styles/globals.css';

export default function App({ Component, pageProps }: any) {
  let isRTL: any;

  if (typeof window !== 'undefined') {
    // Perform localStorage action
    if (localStorage.getItem('isRTL') === 'true') {
      isRTL = true;
    } else {
      isRTL = false;
    }
  }

  return (
    <NoSSR>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        <Component {...pageProps} />
      </div>
    </NoSSR>
  );
}
