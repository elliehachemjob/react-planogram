import '../styles/globals.css';

export default function App({
  Component,
  pageProps,
  commonData,
  giftTableData,
  innerPageData,
  insightsPageData,
  languagesPageData,
  subCategoriesPageData,
  vipData,
  vipInnerPageData,
  welcomePageData,
}: any) {
  return <Component loading='eager' {...pageProps} />;
}

export const getStaticProps = async () => {
  let res: any;
  let giftTableData: any;
  let commonRes: any;
  let commonData: any;
  let innerPageData: any;
  let insightsPageData: any;
  let languagesPageData: any;
  let subCategoriesPageData: any;
  let vipData: any;
  let vipInnerPageData: any;
  let welcomePageData: any;

  if (process.env.NODE_ENV !== 'production') {
    commonRes = await fetch(`http://localhost:3000/api/common-data`);
    commonData = await commonRes.json();

    res = await fetch(`http://localhost:3000/api/gift-table`);
    giftTableData = await res.json();

    res = await fetch(`http://localhost:3000/api/inner-page`);
    innerPageData = await res.json();

    res = await fetch(`http://localhost:3000/api/insights`);
    insightsPageData = await res.json();

    res = await fetch(`http://localhost:3000/api/languages`);
    languagesPageData = await res.json();

    res = await fetch(`http://localhost:3000/api/sub-categories`);
    subCategoriesPageData = await res.json();

    res = await fetch(`http://localhost:3000/api/vip`);
    vipData = await res.json();

    res = await fetch(`http://localhost:3000/api/vip-inner-page`);
    vipInnerPageData = await res.json();

    res = await fetch(`http://localhost:3000/api/welcome-page`);
    welcomePageData = await res.json();
  } else {
    commonData = {
      siteName: 'WINGMAN',
      welcomeProgram: 'program 2022',
      discover: 'Discover',
      vip: 'VIP',
      insights: 'INSIGHTS',
    };

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
    insightsPageData = {
      inSightsCategories: [
        {
          country: 'Lebanon',
          content: [
            {
              title: 'insightTitleOne',
              description: 'insightDescriptionOne',
              insightsPageExplore: 'Explore',
              path: 'assets/good-read-1.PNG',
              explorePdf: '/assets/pdf/1.pdf',
            },
            {
              title: 'insightTitleTwo',
              description: 'insightDescriptionTwo',
              insightsPageExplore: 'Explore',
              path: 'assets/good-read-2.PNG',
              explorePdf: '/assets/pdf/2.pdf',
            },
            {
              title: 'insightTitleThree',
              description: 'insightDescriptionThree',
              insightsPageExplore: 'Explore',
              path: 'assets/good-read-3.PNG',
              explorePdf: '/assets/pdf/3.pdf',
            },
          ],
        },
        {
          country: 'Qatar',
          content: [
            {
              title: 'insightTitleOne',
              description: 'insightDescriptionTwo',
              insightsPageExplore: 'Explore',
              path: 'assets/good-read-1.PNG',
              explorePdf: '/assets/pdf/1.pdf',
            },
            {
              title: 'insightTitleThree',
              description: 'insightDescriptionTwo',
              insightsPageExplore: 'Explore',
              path: 'assets/good-read-2.PNG',
              explorePdf: '/assets/pdf/2.pdf',
            },
          ],
        },
      ],
    };
    languagesPageData = {
      languages: [
        {
          country: 'Lebanon',
          content: ['Arabic', 'French', 'Urdu', 'English'],
        },
        {
          country: 'Qatar',
          content: ['Arabic', 'English'],
        },
      ],
      languagesPageSelectALanguageToStart:
        'Select language from above to start',
    };
    subCategoriesPageData = {
      subCategoryName: 'impulse',
      subCategories: [
        {
          country: 'Lebanon',
          content: [
            {
              id: 1,
              title: 'impulseA',
              subTitle: 'shelfMainPlacement',
              nestedDetails: {
                title: 'MinTwelveFacings',
                imagePath: '/assets/subCategory/1.png',
                flow: 'TrafficFlow',
                isEmptyContent: false,
              },
            },
            {
              id: 2,
              title: 'impulseB',
              subTitle: 'shelfMainPlacement',
              nestedDetails: {
                title: 'MinTwelveFacings',
                imagePath: '/assets/subCategory/1.png',
                flow: 'TrafficFlow',
                isEmptyContent: false,
              },
            },
            {
              id: 3,
              title: 'impulseC',
              subTitle: 'shelfMainPlacement',
              nestedDetails: {
                title: 'MinTwelveFacings',
                imagePath: '/assets/subCategory/1.png',
                flow: 'TrafficFlow',
                isEmptyContent: false,
              },
            },
          ],
        },
        {
          country: 'Qatar',
          content: [
            {
              id: 1,
              title: 'Impulse A',
              subTitle: 'shelfMainPlacement',
              nestedDetails: {
                title: 'MinTwelveFacings',
                imagePath: '/assets/subCategory/1.png',
                flow: 'TrafficFlow',
                isEmptyContent: false,
              },
            },
            {
              id: 2,
              title: 'impulseB',
              subTitle: 'shelfMainPlacement',
              nestedDetails: {
                title: 'MinTwelveFacings',
                imagePath: '/assets/subCategory/1.png',
                flow: 'TrafficFlow',
                isEmptyContent: false,
              },
            },
          ],
        },
      ],
    };
    vipData = {
      vipHeaderText: [
        {
          country: 'Lebanon',
          content: ['specialPromotion'],
        },
        {
          country: 'Qatar',
          content: [
            'This is a Qatar members club where you will receive discounts based on counterparts in store that will drive incremental sales, helping you earn more profit!',
          ],
        },
      ],
      vipCategories: [
        {
          country: 'Lebanon',
          content: ['CategoryA', 'CategoryB', 'CategoryC'],
        },
        {
          country: 'Qatar',
          content: ['CategoryA', 'CategoryB'],
        },
      ],
    };
    vipInnerPageData = {
      vipCategoriesDetailsHeader: 'vipCategoryA',
      vipCategoriesDetailsContent: [
        {
          country: 'Lebanon',
          content: [
            {
              title: 'MainPlacementChilled',
              numberedElementPartOne: '#1',
              numberedElementPartTwo: 'Min13facings',
              path: '/assets/vip/1.png',
            },
            {
              title: 'Range',
              numberedElementPartOne: ' #2',
              numberedElementPartTwo: 'MinTwelveFacings',
              path: '/assets/vip/1.png',
            },
            {
              title: 'Min13facings',
              numberedElementPartOne: ' #3',
              numberedElementPartTwo: 'Min13facings',
              path: '/assets/vip/1.png',
            },
          ],
        },
        {
          country: 'Qatar',
          content: [
            {
              title: 'MainPlacementChilled',
              numberedElementPartOne: '#1',
              numberedElementPartTwo: 'Min13facings',
              path: '/assets/vip/1.png',
            },
            {
              title: 'Range',
              numberedElementPartOne: ' #2',
              numberedElementPartTwo: 'MinTwelveFacings',
              path: '/assets/vip/1.png',
            },
          ],
        },
      ],
    };
    welcomePageData = {
      countries: [
        'UAE',
        'MALDIVES',
        'PAKISTAN',
        'SRI LANKA',
        'ALGERIA',
        'NIGERIA',
        'ANGOLA',
        'MAURITIUS',
        'KENYA',
        'EGYPT',
        'OMAN',
        'KUWAIT',
        'QATAR',
        'JORDAN',
        'BAHRAIN',
        'KSA',
        'LEBANON',
        'GHANA',
      ],
      image: '/assets/logo.png',
      welcomeSelectACountryToStart: 'Select country to start',
    };
  }

  return {
    props: {
      commonData: commonData,
      giftTableData: giftTableData,
      innerPageData: innerPageData,
      insightsPageData: insightsPageData,
      languagesPageData: languagesPageData,
      subCategoriesPageData: subCategoriesPageData,
      vipData: vipData,
      vipInnerPageData: vipInnerPageData,
      welcomePageData: welcomePageData,
    },
  };
};
