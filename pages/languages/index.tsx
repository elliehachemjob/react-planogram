import { useEffect, useState } from 'react';
import getAndSetLanguage from '../../helpers/getAndSetLanguage';
import getMethod from '../../helpers/getMethod';
import useRouterFunctionalities from '../../helpers/router';

export default function Languages() {
  let commonData: any = JSON.parse(localStorage.getItem('commonData') as any);
  let languagesPageData: any = JSON.parse(
    localStorage.getItem('languagesPageData') as any
  );

  const router = useRouterFunctionalities();
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

  useEffect(() => {
    langSelected = getAndSetLanguage(langSelected);
    setLanguages(getMethod(languagesPageData.languages, 'lebanon'));
  }, []);

  return (
    <div>
      <div className='plano-wlc-page-wrapper' id='welcome-page'>
        <div className='plano-wlc-page-container'>
          <div className='plano-wlc-page-content'>
            <div className='plano-bull-logo-cont'>
              <img
                width={100}
                height={100}
                src='/assets/logo.png'
                alt='Red Bull'
              />
            </div>
            <div className='plano-wing-titles-cont'>
              <span className='wingman-title'>{commonData.siteName}</span>
              <br />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
