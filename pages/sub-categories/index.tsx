import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/sub-categories.module.css';

//For the accordion
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ISO6391 from 'iso-639-1';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import getAndSetLanguage from '../../helpers/getAndSetLanguage';

export default function SubCategories() {
  let commonData: any = JSON.parse(localStorage.getItem('commonData') as any);
  let subCategoriesPageData: any = JSON.parse(
    localStorage.getItem('subCategoriesPageData') as any
  );

  const router = useRouter();
  let langSelected: any = '';
  let subCategories: any = [];
  const [renderSubCategories, setRenderSubCategories] = useState([]);

  const [expanded, setExpanded] = useState<string | false>(false);
  const [animationsEnabled, enableAnimations] = React.useState(false);
  const stylesheetRef = React.useRef<HTMLStyleElement>();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
    subCategories = getMethod(subCategoriesPageData.subCategories, 'lebanon');
    setRenderSubCategories(subCategories);
  }, []);

  React.useEffect(() => {
    if (!stylesheetRef.current) {
      stylesheetRef.current = document.createElement('style');
      document.head.appendChild(stylesheetRef.current);
    }

    if (animationsEnabled) {
      const sheet = stylesheetRef.current.sheet;
      if (sheet?.cssRules.length) {
        sheet.deleteRule(0);
      }
    } else {
      const sheet = stylesheetRef.current.sheet;
      const styles = `*,
        *::before,
        *::after {
          transition: none !important;
          animation: none !important;
        }`;
      sheet!.insertRule(styles, 0);
    }
  }, [animationsEnabled]);

  function navigateInsightsPage(): void {
    router.push('/insights');
  }

  function navigateVipPage(): void {
    router.push('/vip');
  }

  function navigateInnerPage(): void {
    router.push('/inner-page');
  }

  return (
    <div>
      <div className='sub-categories-wrapper'>
        <div className='fxd-header-sect-cont sub-categories'>
          <div className='fxd-header-sect'>
            <div className='fxd-header-content'>
              {subCategoriesPageData.subCategoryName}
            </div>
            <div
              onClick={() => {
                navigateInnerPage();
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
            </div>
          </div>
        </div>
        <div className={styles.headerPaddingDiv}></div>
        <div>
          {renderSubCategories.map((subCategory: any, index: any) => {
            return (
              <div key={index} className='general-small-padding'>
                <Accordion
                  expanded={expanded === subCategory.id}
                  onChange={handleChange(subCategory.id)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'
                  >
                    <div>
                      <div className='sub-categories-content'>
                        <div className={styles.subCatsTitle}>
                          {subCategory.title}
                        </div>
                        <div className={styles.subCatSubTitle}>
                          {subCategory.subTitle}
                        </div>
                      </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className={styles.subCategoryContainer}>
                    <div className='sub-categories-container'>
                      <div className='sub-categories-content'>
                        <div className='sub-cats-inner-page-cont'>
                          <div className='sub-cats-inner-page'>
                            <div className='sub-cats-inner-page-title'>
                              {subCategory.nestedDetails.title}
                            </div>
                            <div className='sub-cats-inner-page-img'>
                              <Image
                                width={100}
                                height={100}
                                priority
                                src={subCategory.nestedDetails.imagePath}
                                alt='{{subCategory'
                              />
                            </div>
                            <div className='sub-cats-inner-page-flow'>
                              {subCategory.nestedDetails.flow}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })}
        </div>

        <Footer commonData={commonData} />
      </div>
    </div>
  );
}
