import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/inner-page.module.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ISO6391 from 'iso-639-1';

export default function InnerPage({ commonData, innerPageData }: any) {
  const router = useRouter();
  let langSelected: any = '';
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

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

  return (
    <div
      onClick={() => {
        setIsOverlayOpen(!isOverlayOpen);
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
                {innerPageData.chosenLanguages.map((language: any) => {
                  return (
                    <div
                      className={`country-cont lang ${
                        isOverlayOpen ? 'hide' : ''
                      }`}
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
                })}
              </ul>
              {/* // replace here svg from material UI which is a good replacement for angular material */}
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
          loopclick='navigateSubCategory()'
          className='plano-inner-page-cont'
        >
          <div className='plano-inner-page-content'>
            <div className='discover-categories-wrapper'>
              <div
                loop='let category of categoryChosen'
                className='discover-categories-container'
              >
                <div loop='let categoryChosenData of category.content'>
                  <div className='discover-category {{categoryChosenData.background}}'>
                    <div className='category-title'>
                      {/* {categoryChosenData.title |
                      CustomTranslation:langSelected } */}
                    </div>
                    <div className='discover-proceed-arrow'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18.613'
                        height='14.083'
                        viewBox='0 0 18.613 14.083'
                      >
                        <path
                          className='a'
                          d='M2.814,21.877l6,6A1.039,1.039,0,1,0,10.279,26.4L6.066,22.17H20.075a1.039,1.039,0,1,0,0-2.077H6.066l4.212-4.212a1.028,1.028,0,0,0,0-1.469,1.07,1.07,0,0,0-.745-.314,1.024,1.024,0,0,0-.745.314L2.814,20.387a1.04,1.04,0,0,0,0,1.489Z'
                          transform='translate(21.113 28.181) rotate(180)'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='fxd-footer-sect-cont'>
          <div className='fxd-footer-sect'>
            <div className='footer-elements-wrapper'>
              <div className='footer-elements'>
                <a loopclick='navigateInnerPage()'>
                  <div className='footer-elements-logo'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18.661'
                      height='18.661'
                      viewBox='0 0 18.661 18.661'
                    >
                      <path
                        className='a'
                        d='M30.784,28.582l-3.96-3.968a7.819,7.819,0,1,0-2.21,2.21l3.968,3.96a1.562,1.562,0,0,0,2.2-2.2ZM15.624,20.311A4.687,4.687,0,1,1,17,23.624,4.687,4.687,0,0,1,15.624,20.311Z'
                        transform='translate(-12.499 -12.5)'
                      />
                    </svg>
                  </div>
                  <div className='footer-elements-txt'>
                    {commonData.discover}

                    {/* {"Discover" | CustomTranslation:langSelected} */}
                  </div>
                </a>
              </div>
              <div className='footer-elements'>
                <a loopclick='navigateVipPage()'>
                  <div className='footer-elements-logo'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='19.998'
                      height='19.456'
                      viewBox='0 0 19.998 19.456'
                    >
                      <path
                        className='a'
                        d='M19.878,12.967,24.2,13.6a1.522,1.522,0,0,1,.831,2.585l-3.123,3.1a1.531,1.531,0,0,0-.428,1.343l.743,4.367a1.5,1.5,0,0,1-2.165,1.6l-3.868-2.058a1.474,1.474,0,0,0-1.391,0L10.938,26.6a1.5,1.5,0,0,1-2.17-1.6L9.5,20.638A1.531,1.531,0,0,0,9.069,19.3L5.94,16.208a1.522,1.522,0,0,1,.825-2.587l4.32-.642a1.5,1.5,0,0,0,1.124-.831l1.928-3.977a1.485,1.485,0,0,1,2.68,0l1.937,3.971a1.5,1.5,0,0,0,1.125.828Z'
                        transform='translate(-5.485 -7.325)'
                      />
                    </svg>
                  </div>
                  <div className='footer-elements-txt'>
                    {commonData.vip}
                    {/* {"VIP" | CustomTranslation:langSelected} */}
                  </div>
                </a>
              </div>
              <div className='footer-elements'>
                <a loopclick='navigateInsightsPage()'>
                  <div className='footer-elements-logo'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14.621'
                      height='20.035'
                      viewBox='0 0 14.621 20.035'
                    >
                      <path
                        d='M23.255,6.725a1,1,0,0,1-1,1A1.578,1.578,0,0,0,20.679,9.3a1,1,0,1,1-2,0,3.582,3.582,0,0,1,3.577-3.577,1,1,0,0,1,1,1Zm6.3,2.575a7.323,7.323,0,0,1-3.09,5.969.51.51,0,0,0-.223.417v2.671h0a2,2,0,0,1-1.705,1.977v.787a.914.914,0,0,1-.914.91H20.884a.914.914,0,0,1-.924-.914v-.787a2,2,0,0,1-1.705-1.977V15.684a.516.516,0,0,0-.227-.417A7.308,7.308,0,1,1,29.559,9.3Zm-2,0a5.3,5.3,0,0,0-5.3-5.3q-.19,0-.382.012a5.338,5.338,0,0,0-4.894,4.735,5.267,5.267,0,0,0,2.214,4.885,2.521,2.521,0,0,1,1.073,2.051v.749h3.978v-.75a2.514,2.514,0,0,1,1.07-2.049A5.316,5.316,0,0,0,27.558,9.3Z'
                        transform='translate(-14.938 -1.995)'
                      />
                    </svg>
                  </div>
                  <div className='footer-elements-txt'>
                    {commonData.insights}

                    {/* {"INSIGHTS" | CustomTranslation:langSelected} */}
                  </div>
                </a>
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

  const res = await fetch(`http://localhost:3000/api/inner-page`);
  const innerPageData = await res.json();

  return {
    props: {
      innerPageData: innerPageData,
      commonData: commonData,
    },
  };
};
