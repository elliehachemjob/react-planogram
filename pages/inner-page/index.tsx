import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/inner-page.module.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ISO6391 from 'iso-639-1';
import Footer from '../../components/Footer';

export default function InnerPage({ commonData, innerPageData }: any) {
  const router = useRouter();
  let langSelected: any = '';
  let categoryChosen: any = [];
  const [isOverlayOpen, setIsOverlayOpen] = useState<any>(true);
  const [renderCategories, setRenderCategories] = useState([]);

  function changeLanguage(language: any) {
    localStorage.setItem('language', language);

    if (language.toLowerCase() === 'arabic') {
      localStorage.setItem('isRTL', 'true');
      window.location.reload();
      return;
    } else {
      localStorage.setItem('isRTL', 'false');
      window.location.reload();
    }

    if (language === 'arabic') {
      language = 'ar';
    }
    if (language === 'english') {
      language = 'en';
    }
    if (language === 'french') {
      language = 'fr';
    }
    if (language === 'urdu') {
      language = 'ur';
    }
    return;
  }

  function navigateSubCategory() {
    router.replace('/sub-categories');
  }

  function getCategoryChosen(countryChosen: any, listOfCountries: any): void {
    categoryChosen = listOfCountries.filter(
      (data: any): boolean => data.country.toLowerCase() === 'lebanon'
    );
  }

  function getAndSetLanguage(langSelected: any) {
    langSelected = localStorage.getItem('language');
    if (langSelected === null || undefined)
      langSelected = ISO6391.getName(window.navigator.language.substring(0, 2));
    else if (langSelected === null || undefined) langSelected = 'english';
    return langSelected.toLowerCase();
  }

  useEffect(() => {
    getCategoryChosen(
      localStorage.getItem('country')?.toLowerCase(),
      innerPageData.categories
    );
    setRenderCategories(categoryChosen);
    langSelected = getAndSetLanguage(langSelected);
  }, []);

  return (
    <div
      onClick={() => {
        if (!isOverlayOpen) setIsOverlayOpen(!isOverlayOpen);
      }}
      className={styles.container}
    >
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='plano-inner-page-wrapper'>
        <div className='fxd-header-sect-cont'>
          <div className='fxd-header-sect'>
            <div className='magnifying-glass-cont'>
              <div className='magnifying-glass' />
            </div>
            <div className='search-input-cont'>
              <div style={{ width: '100%' }}>
                <input
                  name=''
                  defaultValue=''
                  placeholder={innerPageData.planogramQuickSearchPlaceHolder}
                />
              </div>
            </div>
            <div className='lang-selector-cont default-icon-size'>
              <ul className={styles.overlayList}>
                {innerPageData.chosenLanguages.map(
                  (language: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className={` lang ${isOverlayOpen ? 'hide' : ''}`}
                      >
                        <li
                          className={styles.innerOverlay}
                          onClick={() => {
                            changeLanguage(language);
                          }}
                        >
                          {language}
                        </li>
                      </div>
                    );
                  }
                )}
              </ul>
              <svg
                onClick={() => {
                  setIsOverlayOpen(!isOverlayOpen);
                }}
                className={`lang-selector ${isOverlayOpen ? '' : 'hide'}`}
                focusable='false'
                viewBox='0 0 24 24'
                aria-hidden='true'
                role='presentation'
              >
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigateSubCategory();
          }}
          className='plano-inner-page-cont'
        >
          <div className='plano-inner-page-content'>
            <div className='discover-categories-wrapper'>
              {renderCategories.map((categoryChosenData: any, index: any) => {
                return (
                  <div key={index} className='discover-categories-container'>
                    {categoryChosenData.content.map(
                      (category: any, index: any) => {
                        return (
                          <div
                            key={index}
                            className={`discover-category ${category.background}`}
                          >
                            {/* {categoryChosenData.title |
                      CustomTranslation:langSelected } */}
                            <div className='category-title'>
                              {category.title}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer commonData={commonData} />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  let commonRes: any;
  let commonData: any;
  let innerPageDataRes: any;
  let innerPageData: any;

  if (process.env.NODE_ENV !== 'production') {
    commonRes = await fetch(`http://localhost:3000/api/common-data`);
    commonData = await commonRes.json();

    innerPageDataRes = await fetch(`http://localhost:3000/api/inner-page`);
    innerPageData = await innerPageDataRes.json();
  } else {
    commonData = {
      siteName: 'WINGMAN',
      welcomeProgram: 'program 2022',
      discover: 'Discover',
      vip: 'VIP',
      insights: 'INSIGHTS',
    };
    innerPageData = {
      siteName: 'WINGMAN',
      planogramQuickSearchPlaceHolder: 'Planogram Quick Search ',
      chosenLanguages: ['English', 'Arabic', 'French'],
      categories: [
        {
          country: 'Lebanon',
          content: [
            { title: 'impulse', background: 'impulse' },
            { title: 'cAndG', background: 'cg' },
            { title: 'retail', background: 'retail' },
            { title: 'coolers', background: 'coolers' },
          ],
        },
        {
          country: 'Qatar',
          content: [{ title: 'impulse', background: 'impulse' }],
        },
      ],
    };
  }

  return {
    props: {
      innerPageData: innerPageData,
      commonData: commonData,
    },
  };
};
