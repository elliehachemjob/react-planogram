import '../styles/globals.css';

export default function App({ Component, pageProps }: any) {
  return <Component loading='eager' {...pageProps} />;
}
