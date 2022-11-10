import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import styles from '../../styles/insights.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ISO6391 from 'iso-639-1';

export default function Insights({ commonData, insightsPageData }: any) {
  let langSelected: any = '';
  let inSightsCategories: any = [];
  const [renderInSightsCategories, setRenderInSightsCategories] = useState([]);

  function getAndSetLanguage(langSelected: any) {
    langSelected = localStorage.getItem('language');
    if (langSelected === null || undefined)
      langSelected = ISO6391.getName(window.navigator.language.substring(0, 2));
    else if (langSelected === null || undefined) langSelected = 'english';
    return langSelected.toLowerCase();
  }

  function getMethod(mainContent: any, countryChosen: any): void {
    mainContent = mainContent.filter(
      (data: any): boolean =>
        data.country.toLowerCase() === countryChosen.toLowerCase()
    );
    mainContent.map((item: any) => (mainContent = item.content));
    return mainContent;
  }

  useEffect(() => {
    langSelected = getAndSetLanguage(langSelected);
    inSightsCategories = getMethod(
      insightsPageData.inSightsCategories,
      'lebanon'
    );
    setRenderInSightsCategories(inSightsCategories);
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <Link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        <div className='insights-sec-wrapper'>
          <div className='fxd-header-sect-cont sub-categories'>
            <div className='fxd-header-sect'>
              <div className='fxd-header-content'>
                {/* {"insightsPageHeaderContent" |
                CustomTranslation:langSelected } */}
                insightsPageHeaderContent
              </div>
            </div>
          </div>
          <div className='insights-sec-container'>
            {renderInSightsCategories.map(
              (inSightsCategory: any, index: any) => {
                return (
                  <div key={index} className='insights-sec-content'>
                    <div className='good-read-section-wrapper flex-center-style'>
                      <div className='good-read-section'>
                        <div className='good-read-image'>
                          <Image
                            src={inSightsCategory.path}
                            alt='good-read-1'
                          />
                        </div>
                        <div className='good-read-title'>
                          {/* {insight.title | CustomTranslation:langSelected} */}
                          {inSightsCategory.title}
                        </div>
                        <div className='good-read-description'>
                          {/* {insight.description | CustomTranslation:langSelected } */}
                          {inSightsCategory.description}
                        </div>
                        <div className='good-read-explore-btn'>
                          <a
                            href='https://wingmanapi.rbprojects.me/public/uploads/anouncementPdf/1619162839.pdf'
                            target='_blank'
                          >
                            {/* {"insightsPageExplore" |CustomTranslation:langSelected} */}
                            {inSightsCategory.insightsPageExplore}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <Footer commonData={commonData} />
      </>
    </div>
  );
}

export const getStaticProps = async () => {
  const commonRes = await fetch(`http://localhost:3000/api/common-data`);
  const commonData = await commonRes.json();

  const res = await fetch(`http://localhost:3000/api/insights`);
  const insightsPageData = await res.json();

  return {
    props: {
      insightsPageData: insightsPageData,
      commonData: commonData,
    },
  };
};
