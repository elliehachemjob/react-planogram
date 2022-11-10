import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function Footer({ commonData }: any) {
  let isDiscoverLogoActive = false;
  let isVipLogoActive = false;
  let isInsightLogoActive = false;

  // To it in a better way
  const [renderIsDiscoverLogoActive, setRenderIsDiscoverLogoActive] =
    useState(true);
  const [renderIsVipLogoActive, setRenderIsVipLogoActive] = useState(true);
  const [renderIsInsightLogoActive, setRenderIsInsightLogoActive] =
    useState(true);

  const router = useRouter();
  function setLogoActivation() {
    if (
      router.pathname.startsWith('/inner-page') ||
      router.pathname.startsWith('/sub-categories')
    ) {
      isDiscoverLogoActive = true;
      setRenderIsDiscoverLogoActive(isDiscoverLogoActive);
    } else {
      isDiscoverLogoActive = false;
      setRenderIsDiscoverLogoActive(isDiscoverLogoActive);
    }
    if (router.pathname.startsWith('/vip')) {
      isVipLogoActive = true;
      setRenderIsVipLogoActive(isVipLogoActive);
    } else {
      isVipLogoActive = false;
      setRenderIsVipLogoActive(isVipLogoActive);
    }
    if (router.pathname.startsWith('/insights')) {
      isInsightLogoActive = true;
      setRenderIsInsightLogoActive(isInsightLogoActive);
    } else {
      isInsightLogoActive = false;
      setRenderIsInsightLogoActive(isInsightLogoActive);
    }
  }

  function navigateInsightsPage(): void {
    router.push('/insights');
  }

  function navigateVipPage(): void {
    router.push('/vip');
  }

  function navigateInnerPage(): void {
    router.push('/inner-page');
  }
  useEffect(() => {
    function setLogoActivation() {
      if (
        router.pathname.startsWith('/inner-page') ||
        router.pathname.startsWith('/sub-categories')
      ) {
        isDiscoverLogoActive = true;
        setRenderIsDiscoverLogoActive(isDiscoverLogoActive);
      } else {
        isDiscoverLogoActive = false;
        setRenderIsDiscoverLogoActive(isDiscoverLogoActive);
      }
      if (router.pathname.startsWith('/vip')) {
        isVipLogoActive = true;
        setRenderIsVipLogoActive(isVipLogoActive);
      } else {
        isVipLogoActive = false;
        setRenderIsVipLogoActive(isVipLogoActive);
      }
      if (router.pathname.startsWith('/insights')) {
        isInsightLogoActive = true;
        setRenderIsInsightLogoActive(isInsightLogoActive);
      } else {
        isInsightLogoActive = false;
        setRenderIsInsightLogoActive(isInsightLogoActive);
      }
    }
    setLogoActivation();
  }, []);

  return (
    <div className='fxd-footer-sect-cont'>
      <div className='fxd-footer-sect'>
        <div className='footer-elements-wrapper'>
          <div
            className={` footer-elements ${
              renderIsDiscoverLogoActive ? 'footer-element-selected' : ''
            }`}
          >
            <a
              onClick={() => {
                navigateInnerPage();
              }}
            >
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
                {/* {"Discover" | CustomTranslation:langSelected} */}
                {commonData?.discover}
              </div>
            </a>
          </div>
          <div className='footer-elements'>
            <div
              className={` footer-elements ${
                renderIsVipLogoActive ? 'footer-element-selected' : ''
              }`}
            >
              <a
                onClick={() => {
                  navigateVipPage();
                }}
              >
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
                  {/* {"VIP" | CustomTranslation:langSelected} */}
                  {commonData?.vip}
                </div>
              </a>
            </div>
          </div>
          <div className='footer-elements'>
            <div
              className={` footer-elements ${
                renderIsInsightLogoActive ? 'footer-element-selected' : ''
              }`}
            >
              <a
                onClick={() => {
                  navigateInsightsPage();
                }}
              >
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
                  {/* {"INSIGHTS" | CustomTranslation:langSelected} */}
                  {commonData?.insights}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
