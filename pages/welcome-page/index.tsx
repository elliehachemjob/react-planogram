import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/welcome-page.module.css';
import { useRouter } from 'next/router';
import ISO6391 from 'iso-639-1';
import { useEffect } from 'react';

export default function WelcomePage({ commonData, welcomePageData }: any) {
  const router = useRouter();
  let langSelected: any;
  function navigateLanguagesPageSelectALanguageToStart(country: string): void {
    window.localStorage.setItem('country', country);
    router.replace('/languages', country.toLowerCase().replace(/\s+/g, ''));
  }

  function getAndSetLanguage(langSelected: any) {
    langSelected = localStorage.getItem('language');
    if (langSelected === null || undefined)
      langSelected = ISO6391.getName(window.navigator.language.substring(0, 2));
    else if (langSelected === null || undefined) langSelected = 'english';
    return langSelected.toLowerCase();
  }

  useEffect(() => {
    langSelected = getAndSetLanguage(langSelected);
  }, []);

  // basic loop needed
  // {welcomePageData.countries.map((country: string) => {}
  // )}

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <Link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='plano-wlc-page-wrapper' id='welcome-page'>
        <div className='plano-wlc-page-container'>
          <div className='plano-wlc-page-content'>
            <div className='plano-bull-logo-cont'>
              <img
                width='50'
                height='50'
                alt='Red Bull'
                src={welcomePageData.image}
              />
            </div>
            <div className='plano-wing-titles-cont'>
              <span className='wingman-title'> {commonData.siteName}</span>
              <br />
              {commonData.welcomeProgram}
              {/* {'welcomeProgram' | CustomTranslation:langSelected} */}
            </div>
            <div
              className='wlc-page-countries-cont countries-list'
              id='country-list'
            >
              <div className='country-cont'>
                {welcomePageData.countries.map(
                  (country: string, index: any) => (
                    <div
                      key={index}
                      onClick={(event) =>
                        navigateLanguagesPageSelectALanguageToStart(country)
                      }
                      className={`country-content ${country.toLowerCase()}`}
                    >
                      {country}
                    </div>
                  )
                )}
              </div>
              <div className='select-country'>
                {/* {'{'}
                {'{'}'welcomeSelectACountryToStart' |
                CustomTranslation:langSelected
                {'}'}
                {'}'} */}
                {welcomePageData.welcomeSelectACountryToStart}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const commonRes = await fetch(`http://localhost:3000/api/common-data`);
  const commonData = await commonRes.json();

  const res = await fetch(`http://localhost:3000/api/welcome-page`);
  const welcomePageData = await res.json();
  return {
    props: {
      welcomePageData: welcomePageData,
      commonData: commonData,
    },
  };
};
