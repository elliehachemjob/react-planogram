import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
        <meta name='theme-color' content='#1976d2'></meta>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
