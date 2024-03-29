import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import getAndSetLanguage from '../../helpers/getAndSetLanguage';
import getMethod from '../../helpers/getMethod';
import useRouterFunctionalities from '../../helpers/router';

export default function VipInnerPage() {
  let commonData: any = JSON.parse(localStorage.getItem('commonData') as any);
  let vipInnerPageData: any = JSON.parse(
    localStorage.getItem('vipInnerPageData') as any
  );

  const router = useRouterFunctionalities();
  let langSelected: any = '';
  let vipCategoriesDetailsContent: any = [];

  const [
    renderVipCategoriesDetailsContent,
    setRenderVipCategoriesDetailsContent,
  ] = useState([]);

  function navigateVipPage(): void {
    router.replace('/vip');
  }

  function navigateGiftTablePage(): void {
    router.replace('/gift-table');
  }

  useEffect(() => {
    langSelected = getAndSetLanguage(langSelected);
    vipCategoriesDetailsContent = getMethod(
      vipInnerPageData.vipCategoriesDetailsContent,
      'lebanon'
    );
    setRenderVipCategoriesDetailsContent(vipCategoriesDetailsContent);
  }, []);

  return (
    <div>
      <div className='sub-categories-wrapper vip'>
        <div className='fxd-header-sect-cont sub-categories'>
          <div className='fxd-header-sect'>
            <div className='fxd-header-content'>
              {vipInnerPageData.vipCategoriesDetailsHeader}
            </div>
            <div className='discover-proceed-arrow back-arrow'>
              <a
                onClick={() => {
                  navigateVipPage();
                }}
              >
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
              </a>
            </div>
            <div className='gift-logo'>
              <a
                onClick={() => {
                  navigateGiftTablePage();
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20.664'
                  height='21.8'
                  viewBox='0 0 20.664 21.8'
                >
                  <defs />
                  <path
                    className='a'
                    d='M10.816,17.542l2.052-4.169V22.46H5.578a.941.941,0,0,1-.941-.941V12.664h5.744L8.521,16.42a.259.259,0,0,0,.316.358L9.959,16.4l.382,1.122h0a.258.258,0,0,0,.475.024ZM18.6,16.42a.259.259,0,0,1-.316.358L17.166,16.4l-.382,1.122h0a.258.258,0,0,1-.476.031l-2.05-4.173V22.46h7.29a.941.941,0,0,0,.941-.941V12.664H16.743ZM12.86,7.76H4.171a.941.941,0,0,0-.941.928v1.688a.941.941,0,0,0,.941.941h8.7Zm10.084,0H14.256v3.566h8.7a.941.941,0,0,0,.941-.941v-1.7a.941.941,0,0,0-.941-.935ZM17.433,6.479h-3.87v0H9.692a2.91,2.91,0,1,1,2.156-4.86l1.715,1.9,1.712-1.9a2.91,2.91,0,1,1,2.161,4.86ZM11.762,4.49,10.375,2.944a.911.911,0,0,0-.683-.3.921.921,0,1,0,0,1.842Zm3.6,0h2.069a.921.921,0,1,0,0-1.842.912.912,0,0,0-.683.3Z'
                    transform='translate(-3.23 -0.659)'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {renderVipCategoriesDetailsContent.map(
          (vipCategoryDetailContent: any, index: any) => {
            return (
              <div key={index} className='sub-categories-container'>
                <div className='sub-categories-content'>
                  <div className='sub-cats-container'>
                    <div className='sub-cats vip-inner'>
                      <div className='sub-cats-title'>
                        {vipCategoryDetailContent.title}
                      </div>
                      <div className='sub-cat-accordion-cont numbered-circle'>
                        <div className='sub-cat-accordion'>
                          <div className='numbered-elements'>
                            {vipCategoryDetailContent.numberedElementPartOne}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='sub-cats-inner-page-cont visible-inner'>
                      <div className='sub-cats-inner-page'>
                        <div className='sub-cats-inner-page-title'>
                          <div className='sub-cats-inner-page-img'>
                            <img
                              src={vipCategoryDetailContent.path}
                              alt='1630222037'
                            />
                          </div>
                        </div>
                        <div className='numbered-elements numbered-elements-part-two'>
                          {vipCategoryDetailContent.numberedElementPartTwo}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
        <Footer commonData={commonData} />
      </div>
    </div>
  );
}
