import Image from 'next/image';
import { useEffect } from 'react';
import getAndSetLanguage from '../../helpers/getAndSetLanguage';
import useRouterFunctionalities from '../../helpers/router';

export default function WelcomePage() {
  let commonData: any = JSON.parse(localStorage.getItem('commonData') as any);
  let welcomePageData: any = JSON.parse(
    localStorage.getItem('welcomePageData') as any
  );

  const router = useRouterFunctionalities();
  let langSelected: any;
  function navigateLanguagesPageSelectALanguageToStart(country: string): void {
    window.localStorage.setItem('country', country);
    router.replace('/languages', country.toLowerCase().replace(/\s+/g, ''));
  }

  useEffect(() => {
    langSelected = getAndSetLanguage(langSelected);
  }, []);

  return (
    <div>
      <div className='plano-wlc-page-wrapper' id='welcome-page'>
        <div className='plano-wlc-page-container'>
          <div className='plano-wlc-page-content'>
            <div className='plano-bull-logo-cont'>
              <Image
                priority
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

// export const getStaticProps = async () => {
//   let commonRes: any;
//   let commonData: any;
//   let welcomePageDataRes: any;
//   let welcomePageData: any;

//   if (process.env.NODE_ENV !== 'production') {
//     commonRes = await fetch(`http://localhost:3000/api/common-data`);
//     commonData = await commonRes.json();

//     welcomePageDataRes = await fetch(`http://localhost:3000/api/welcome-page`);
//     welcomePageData = await welcomePageDataRes.json();
//   } else {
//     commonData = {
//       siteName: 'WINGMAN',
//       welcomeProgram: 'program 2022',
//       discover: 'Discover',
//       vip: 'VIP',
//       insights: 'INSIGHTS',
//     };
//     welcomePageData = {
//       countries: [
//         'UAE',
//         'MALDIVES',
//         'PAKISTAN',
//         'SRI LANKA',
//         'ALGERIA',
//         'NIGERIA',
//         'ANGOLA',
//         'MAURITIUS',
//         'KENYA',
//         'EGYPT',
//         'OMAN',
//         'KUWAIT',
//         'QATAR',
//         'JORDAN',
//         'BAHRAIN',
//         'KSA',
//         'LEBANON',
//         'GHANA',
//       ],
//       image: '/assets/logo.png',
//       welcomeSelectACountryToStart: 'Select country to start',
//     };
//   }

//   return {
//     props: {
//       welcomePageData: welcomePageData,
//       commonData: commonData,
//     },
//   };
// };
