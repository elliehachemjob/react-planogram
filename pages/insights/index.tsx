import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import getAndSetLanguage from '../../helpers/getAndSetLanguage';
import getMethod from '../../helpers/getMethod';

export default function Insights() {
  let commonData: any = JSON.parse(localStorage.getItem('commonData') as any);
  let insightsPageData: any = JSON.parse(
    localStorage.getItem('insightsPageData') as any
  );

  let langSelected: any = '';
  let inSightsCategories: any = [];
  const [renderInSightsCategories, setRenderInSightsCategories] = useState([]);

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
      <div className='insights-sec-wrapper'>
        <div className='fxd-header-sect-cont sub-categories'>
          <div className='fxd-header-sect'>
            <div className='fxd-header-content'>
              {insightsPageData.insightsPageHeaderContent}
            </div>
          </div>
        </div>
        <div className='insights-sec-container'>
          {renderInSightsCategories.map((inSightsCategory: any, index: any) => {
            return (
              <div key={index} className='insights-sec-content'>
                <div className='good-read-section-wrapper flex-center-style'>
                  <div className='good-read-section'>
                    <div className='good-read-image'>
                      <img
                        width={100}
                        height={100}
                        src={inSightsCategory.path}
                        alt='good-read-1'
                      />
                    </div>
                    <div className='good-read-title'>
                      {inSightsCategory.title}
                    </div>
                    <div className='good-read-description'>
                      {inSightsCategory.description}
                    </div>
                    <div className='good-read-explore-btn'>
                      <a
                        href='https://wingmanapi.rbprojects.me/public/uploads/anouncementPdf/1619162839.pdf'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {inSightsCategory.insightsPageExplore}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer commonData={commonData} />
    </div>
  );
}
