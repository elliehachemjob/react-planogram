import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/languages.module.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ISO6391 from 'iso-639-1';
export default function Languages({ commonData, languagesPageData }: any) {
  const router = useRouter();
  let langSelected: any = '';
  const [languages, setLanguages] = useState<any>([]);

  function navigateInnerPage(language: string): void {
    if (language.toLowerCase() === 'arabic') {
      localStorage.setItem('isRTL', 'true');
      router.push('/inner-page').then((): void => {
        window.location.reload();
      });
    } else {
      localStorage.setItem('isRTL', 'false');
    }
    router.push('/inner-page').then((): void => {
      window.location.reload();
    });
    localStorage.setItem('language', language);
  }

  function getMethod(mainContent: any, countryChosen: any): void {
    mainContent = mainContent.filter(
      (data: any): boolean =>
        data.country?.toLowerCase() === countryChosen.toLowerCase()
    );
    mainContent.map((item: any) => (mainContent = item.content));
    return mainContent;
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
    setLanguages(getMethod(languagesPageData.languages, 'lebanon'));
  }, []);

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
              <Image
                width={100}
                height={100}
                src='/assets/logo.png'
                alt='Red Bull'
              />
            </div>
            <div className='plano-wing-titles-cont'>
              <span className='wingman-title'>{commonData.siteName}</span>
              <br />
              {/* {'welcomeProgram'| CustomTranslation:langSelected} */}
              {commonData.welcomeProgram}
            </div>
            <div
              className='wlc-page-countries-cont language-menu'
              id='lang-list'
            >
              {languages.map((language: any, index: any) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      navigateInnerPage(language);
                    }}
                    className='country-cont lang'
                  >
                    <div className='country-content languages'>{language}</div>
                  </div>
                );
              })}

              <div className='select-country'>
                {languagesPageData.languagesPageSelectALanguageToStart}
                {/* {'languagesPageSelectALanguageToStart'|
                CustomTranslation:langSelected} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  let commonRes: any;
  let commonData: any;

  let res: any;
  let languagesPageData: any;

  if (process.env.NODE_ENV !== 'production') {
    commonRes = await fetch(`http://localhost:3000/api/common-data`);
    commonData = await commonRes.json();
    res = await fetch(`http://localhost:3000/api/languages`);
    languagesPageData = await res.json();
  } else {
    commonData = {
      siteName: 'WINGMAN',
      welcomeProgram: 'program 2022',
      discover: 'Discover',
      vip: 'VIP',
      insights: 'INSIGHTS',
    };

    languagesPageData = {
      languages: [
        {
          country: 'Lebanon',
          content: ['Arabic', 'French', 'Urdu', 'English'],
        },
        {
          country: 'Qatar',
          content: ['Arabic', 'English'],
        },
      ],
      languagesPageSelectALanguageToStart:
        'Select language from above to start',
    };
  }

  return {
    props: {
      languagesPageData: languagesPageData,
      commonData: commonData,
    },
  };
};
