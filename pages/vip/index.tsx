import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import getAndSetLanguage from '../../helpers/getAndSetLanguage';
import useRouterFunctionalities from '../../helpers/router';

export default function Vip() {
  let commonData: any = JSON.parse(localStorage.getItem('commonData') as any);
  let vipData: any = JSON.parse(localStorage.getItem('vipData') as any);

  const router = useRouterFunctionalities();
  let langSelected: any = '';
  let vipHeaderText: any = [];
  let vipCategories: any = [];
  const [renderVipHeaderText, setRenderVipHeaderText] = useState([]);
  const [renderVipCategories, setRenderVipCategories] = useState([]);

  function navigateInnerVipPage() {
    router.replace('/vip-inner-page');
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
    vipHeaderText = getMethod(vipData.vipHeaderText, 'lebanon');
    setRenderVipHeaderText(vipHeaderText);
    vipCategories = getMethod(vipData.vipCategories, 'lebanon');
    setRenderVipCategories(vipCategories);
  }, []);

  return (
    <div>
      <div className='vip-sec-wrapper'>
        <div className='vip-sec-container'>
          <div className='vip-sec-content'>
            <div className='vip-sec-upper-part'>
              <div className='vip-top-img-wrapper'>
                <Image
                  width={100}
                  height={100}
                  priority
                  src='/assets/top-img.png'
                  alt='top-img'
                />
              </div>
              <div className='vip-rb-cans-wrapper'>
                <Image
                  width={100}
                  height={100}
                  priority
                  src='/assets/rb-cans.png'
                  alt='rb-cans'
                />
              </div>
              <div className='vip-header-txt'>
                {renderVipHeaderText.map((vipHeaderText: any, index: any) => {
                  return <div key={index}>{vipHeaderText}</div>;
                })}
              </div>
            </div>
            <div className='sub-categories-container vip-cat-container'>
              <div className='sub-categories-content'>
                <div className='sub-cats-container'>
                  {renderVipCategories.map((vipCategory: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className='sub-cats vip-cats default-margin'
                      >
                        <div className='sub-cats-title vip-cats-title'>
                          {vipCategory}
                        </div>
                        <div className='vip-cats-redirect'>
                          <a
                            onClick={() => {
                              navigateInnerVipPage();
                            }}
                          />
                        </div>
                        <div className='sub-cat-accordion-cont vip-arrow'>
                          <div className='sub-cat-accordion'>
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
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer commonData={commonData} />
      </div>
    </div>
  );
}
