import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/gift-table.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ISO6391 from 'iso-639-1';

export default function GiftTable({ giftTableData }: any) {
  const router = useRouter();
  let langSelected: any = '';
  let categoriesTableContent: any = [];
  const [renderCategoriesTableContent, setRenderCategoriesTableContent] =
    useState([]);

  function navigateInnerVipPage(): void {
    router.replace('/vip-inner-page');
  }

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
    categoriesTableContent = getMethod(
      giftTableData.categoriesTableContent,
      'lebanon'
    );
    setRenderCategoriesTableContent(categoriesTableContent);
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <Link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='gift-table-section'>
        <div className='fxd-header-sect-cont sub-categories'>
          <div className='fxd-header-sect'>
            <div className='fxd-header-content'>
              {/* {categoryName | translate} */}
              {giftTableData.tableCategoryName}
            </div>
            <div className='discover-proceed-arrow back-arrow'>
              <a
                onClick={() => {
                  navigateInnerVipPage();
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
          </div>
        </div>
        <div className='gift-table-wrapper'>
          <div className='gift-table-container'>
            <div className='gift-table-content'>
              <table>
                <tbody>
                  <tr>
                    <th>
                      {/* {categoryHeaderName.title | translate} */}
                      {giftTableData.tableCategoryHeaderName.title}
                    </th>
                    <th>
                      {/* {categoryHeaderName.before | translate} */}
                      {giftTableData.tableCategoryHeaderName.before}
                    </th>
                    <th>
                      {/* {categoryHeaderName.after | translate} */}
                      {giftTableData.tableCategoryHeaderName.after}
                    </th>
                  </tr>

                  {renderCategoriesTableContent.map(
                    (category: any, index: any) => {
                      return (
                        <tr key={index}>
                          <td>
                            {/* {category.title | translate } */}
                            {category.title}
                          </td>
                          <td>
                            {/* {category.beforeValue | translate } */}
                            {category.beforeValue}
                          </td>
                          <td>
                            {/* {category.afterValue | translate} */}
                            {category.afterValue}
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  let giftRes: any;
  let giftTableData: any;
  if (process.env.NODE_ENV !== 'production') {
    giftRes = await fetch(`http://localhost:3000/api/gift-table`);
    giftTableData = await giftRes.json();
  } else {
    giftTableData = {
      tableCategoryName: 'CategoryA',
      tableCategoryHeaderName: {
        title: 'Impulse VIP A',
        before: 'before',
        after: 'after',
      },
      categoriesTableContent: [
        {
          country: 'Lebanon',
          content: [
            {
              title: 'RECOMMENDED SHELF PRICE',
              beforeValue: '10.00',
              afterValue: '10.00',
            },
            { title: 'VAT', beforeValue: '0.48', afterValue: '0.48' },
            {
              title: 'SHELF PRICE EXCLUDING VAT',
              beforeValue: '53.70	',
              afterValue: '55.337',
            },
            { title: 'EXCISE TAX', beforeValue: '10.00', afterValue: '10.00	' },
            { title: 'REBATE %', beforeValue: '10.00', afterValue: '55.337' },
            { title: 'TOTAL REBATES', beforeValue: '14.00', afterValue: '11' },
            {
              title: 'RECOMMENDED SHELF PRICE',
              beforeValue: '27.120',
              afterValue: '10',
            },
          ],
        },
        {
          country: 'Qatar',
          content: [
            {
              title: 'RECOMMENDED SHELF PRICE',
              beforeValue: '10.00',
              afterValue: '10.00',
            },
            { title: 'VAT', beforeValue: '0.48', afterValue: '0.48' },
            {
              title: 'SHELF PRICE EXCLUDING VAT',
              beforeValue: '53.70	',
              afterValue: '55.337',
            },
            { title: 'EXCISE TAX', beforeValue: '10.00', afterValue: '10.00	' },
          ],
        },
      ],
    };
  }

  return {
    props: {
      giftTableData: giftTableData,
    },
  };
};
