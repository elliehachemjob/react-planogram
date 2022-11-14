import { useEffect } from 'react';
import getAndSetLanguage from '../helpers/getAndSetLanguage';
import useRouterFunctionalities from '../helpers/router';

export default function Home() {
  let giftTableData: any;
  let commonData: any;
  let innerPageData: any;
  let insightsPageData: any;
  let languagesPageData: any;
  let subCategoriesPageData: any;
  let vipData: any;
  let vipInnerPageData: any;
  let welcomePageData: any;

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
            path: '/assets/good-read-1.PNG',
            explorePdf: '/assets/pdf/1.pdf',
          },
          {
            title: 'insightTitleTwo',
            description: 'insightDescriptionTwo',
            insightsPageExplore: 'Explore',
            path: '/assets/good-read-2.PNG',
            explorePdf: '/assets/pdf/2.pdf',
          },
          {
            title: 'insightTitleThree',
            description: 'insightDescriptionThree',
            insightsPageExplore: 'Explore',
            path: '/assets/good-read-3.PNG',
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
            path: '/assets/good-read-1.PNG',
            explorePdf: '/assets/pdf/1.pdf',
          },
          {
            title: 'insightTitleThree',
            description: 'insightDescriptionTwo',
            insightsPageExplore: 'Explore',
            path: '/assets/good-read-2.PNG',
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
    languagesPageSelectALanguageToStart: 'Select language from above to start',
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

  let langObject: any = [
    {
      lang: 'english',
      content: [
        {
          siteName: 'WINGMAN',
          welcomeProgram: 'program 2022',
          discover: 'Discover',
          vip: 'VIP',
          insights: 'INSIGHTS',
        },
        {
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
                {
                  title: 'VAT',
                  beforeValue: '0.48',
                  afterValue: '0.48',
                },
                {
                  title: 'SHELF PRICE EXCLUDING VAT',
                  beforeValue: '53.70\t',
                  afterValue: '55.337',
                },
                {
                  title: 'EXCISE TAX',
                  beforeValue: '10.00',
                  afterValue: '10.00\t',
                },
                {
                  title: 'REBATE %',
                  beforeValue: '10.00',
                  afterValue: '55.337',
                },
                {
                  title: 'TOTAL REBATES',
                  beforeValue: '14.00',
                  afterValue: '11',
                },
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
                {
                  title: 'VAT',
                  beforeValue: '0.48',
                  afterValue: '0.48',
                },
                {
                  title: 'SHELF PRICE EXCLUDING VAT',
                  beforeValue: '53.70\t',
                  afterValue: '55.337',
                },
                {
                  title: 'EXCISE TAX',
                  beforeValue: '10.00',
                  afterValue: '10.00\t',
                },
              ],
            },
          ],
        },
        {
          siteName: 'WINGMAN',
          planogramQuickSearchPlaceHolder: 'Planogram Quick Search ',
          chosenLanguages: ['English', 'Arabic', 'French'],
          categories: [
            {
              country: 'Lebanon',
              content: [
                {
                  title: 'impulse',
                  background: 'impulse',
                },
                {
                  title: 'cAndG',
                  background: 'cg',
                },
                {
                  title: 'retail',
                  background: 'retail',
                },
                {
                  title: 'coolers',
                  background: 'coolers',
                },
              ],
            },
            {
              country: 'Qatar',
              content: [
                {
                  title: 'impulse',
                  background: 'impulse',
                },
              ],
            },
          ],
        },
        {
          inSightsCategories: [
            {
              country: 'Lebanon',
              content: [
                {
                  title: 'insightTitleOne',
                  description: 'insightDescriptionOne',
                  insightsPageExplore: 'Explore',
                  path: '/assets/good-read-1.PNG',
                  explorePdf: '/assets/pdf/1.pdf',
                },
                {
                  title: 'insightTitleTwo',
                  description: 'insightDescriptionTwo',
                  insightsPageExplore: 'Explore',
                  path: '/assets/good-read-2.PNG',
                  explorePdf: '/assets/pdf/2.pdf',
                },
                {
                  title: 'insightTitleThree',
                  description: 'insightDescriptionThree',
                  insightsPageExplore: 'Explore',
                  path: '/assets/good-read-3.PNG',
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
                  path: '/assets/good-read-1.PNG',
                  explorePdf: '/assets/pdf/1.pdf',
                },
                {
                  title: 'insightTitleThree',
                  description: 'insightDescriptionTwo',
                  insightsPageExplore: 'Explore',
                  path: '/assets/good-read-2.PNG',
                  explorePdf: '/assets/pdf/2.pdf',
                },
              ],
            },
          ],
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        ,
      ],
    },
    {
      lang: 'arabic',
      content: [
        {
          welcomeProgram: 'program',
          welcomeSelectACountryToStart: 'Select country to start',
          program: 'program',
          languagesPageSelectALanguageToStart:
            'Select language from above to start',
          specialPromotion:
            'هذا نادي خاص للأعضاء حيث ستتلقى خصومات بناءً على نظرائك في المتجر والتي ستؤدي إلى زيادة المبيعات ، مما يساعدك على كسب المزيد من الأرباح!',
          insightsPageHeaderContent: 'قراءة جيدة ',
          insightsPageExplore: 'استكشف',
          UAE: 'UAE',
          MALDIVES: 'MALDIVES',
          PAKISTAN: 'PAKISTAN',
          SRILANKA: 'SRILANKA',
          ALGERIA: 'ALGERIA',
          NIGERIA: 'NIGERIA',
          ANGOLA: 'ANGOLA',
          MAURITIUS: 'MAURITIUS',
          KENYA: 'KENYA',
          EGYPT: 'EGYPT',
          OMAN: 'OMAN',
          QATAR: 'QATAR',
          JORDAN: 'JORDAN',
          BAHRAIN: 'BAHRAIN',
          KSA: 'KSA',
          LEBANON: 'LEBANON',
          GHANA: 'GHANA',
          planogramQuickSearchPlaceHolder: 'بحث سريع',
          Discover: 'اكتشف النص',
          VIP: 'VIP',
          INSIGHTS: 'أفكار',
          CategoryA: 'الفئة   ١',
          CategoryB: 'الفئة    ٢',
          CategoryC: 'الفئة    ٣',
          MainPlacementChilled: 'توفر جمیع وحدات تخزین  ',
          Range: 'دلیل المتجر المثالي  ',
          MainPlacementNew: 'وحدات تخزین  ',
          Min13facings: 'دلیل المتجر المثالي [عبوة واحدة 1]   ',
          MinTwelveFacings: 'دلیل المتجر المثالي [عبوة واحدة 1]  ',
          vipCategoryA: 'الفئة   ١ ',
          impulse: 'بقالة',
          cAndG: 'متاجر محطات الوقود',
          retail: 'سوبر ماركت',
          coolers: 'البرادات',
          impulseA: 'مكان رئيسي صغير',
          impulseB: 'مكان رئيسي متوسط',
          impulseC: 'مكان رئيسي كبير',
          functionalPlacementsLargeFormats: 'نقاط البيع الإضافية المؤقتة  ',
          JustFoursold:
            'نقاط البيع الإضافية المؤقتة تعمل على تسهيل الشراء وتزيد من المبيعا',
          functionalPlacementsSmall: 'العرض العملي: الأسواق الكبيرة  ',
          functionalPlacementsMediumFormats: 'العرض العملي: الأسواق الكبيرة  ',
          beatGate:
            'يؤدي تواجد المشروبات الباردة بالقرب من الكاشير إلى زيادة نسبة المبيعات وجذب المزيد من المتسوقين  ',
          tweleveFacings: ' مواجهة ١٢  ',
          TrafficFlow: ' تدفق حركة المرور  ',
          shelfMainPlacement: ' تدفق حركة المرور  ',
          before: ' قبل ',
          after: ' بعد ',
          impulseVIPA: ' دفعةالفئ  ١ ',
          recommendedShelfPrice: ' الفئة   ١',
          shelfPriceExcludingVat: ' الفئة   ١',
          VAT: ' ضريبة القيمة المضافة',
          exciseTax: ' الضريبة',
          rebatePercentage: ' الخصوم',
          totalRebates: ' إجمالي الخصوم',
          insightTitleOne: 'المواضع الوظيفية: تنسيقات كبيرة',
          insightTitleTwo: 'المواضع الوظيفية: الصيغ المتوسطة',
          insightTitleThree: 'المواضع الوظيفية: تنسيقات صغيرة',
          insightDescriptionTwo:
            'على إنتاج وأشار العقيد. أربعة فقط تباع تحتاج إلى أي شيء. في سبتمبر الشك في تحديد أنه ساد الاعتراف. على تكييفها كما تم إلصاق محدود على. إعطاء ابن عم بحرارة الأشياء لا ربيع السيد يكون في الخارج. تتكرر تربية العلاقة كما اتبعت بدقة مارغريت. جلب أحد أبناء الجاذبية الخجل في انتظار لحم الخنزير.',
          insightDescriptionThree:
            'انها سمينة تماما نافذة المدى سواء الرسمية. إزالة الكياسة المرحب بها أو التعجيل هو. العدل عجوز بل ربما نفقة ستة لها فقرة أخرى. ممتلئًا لها العشرة مغرمًا بالمشي لا تسقط. لطلب صريح عام غير معروف هي. كان في جسد باب السيد فقط عقد جون أسفله. لذلك رحلة كبيرة أو الثغرات. أبقى رسم الباب تفعل ذلك تعال يعني فتح. لقد حفز التقدير مدى معقولية التقليل من البساطة يا سيدي ولكن. الأسئلة التي أنا بصدق خلص إليها بحماسة تتكون أو لا يوجد رجل نبيل.',
          insightDescriptionOne:
            'لذا أشعر أنك بقيت على البوابة. يكون سبتمبر واسع النطاق يا استنتاج يقين. في قراءة معظم البوابة في الجسم عقدها على الإطلاق لا. الحديث عن العدالة رسالة الترحيب الاستفسار في البداية أنا أنا. أدى قلبه الخاص أعلى زيارة دائمة سيدي من خلال البوصلة له. ضيف البلاط كان سريعًا حتى هذه الأشجار. تعلن عن التغيير في مقارنة محاطة.',
        },
      ],
    },
    {
      lang: 'french',
      content: [
        {
          welcomeProgram: 'program',
          welcomeSelectACountryToStart: 'Select country to start',
          languagesPageSelectALanguageToStart:
            'Select language from above to start',
          specialPromotion:
            "Il s'agit d'un club de membres spécial où vous recevrez des remises basées sur les homologues en magasin qui généreront des ventes supplémentaires, vous aidant à gagner plus de profit !",
          insightsPageHeaderContent: 'bonne lecture ',
          insightsPageExplore: 'explorer',
          UAE: 'UAE',
          MALDIVES: 'MALDIVES',
          PAKISTAN: 'PAKISTAN',
          SRILANKA: 'SRILANKA',
          ALGERIA: 'ALGERIA',
          NIGERIA: 'NIGERIA',
          ANGOLA: 'ANGOLA',
          MAURITIUS: 'MAURITIUS',
          KENYA: 'KENYA',
          EGYPT: 'EGYPT',
          OMAN: 'OMAN',
          QATAR: 'QATAR',
          JORDAN: 'JORDAN',
          BAHRAIN: 'BAHRAIN',
          KSA: 'KSA',
          LEBANON: 'LEBANON',
          GHANA: 'GHANA',
          planogramQuickSearchPlaceHolder: 'Recherche rapide',
          Discover: 'Découvrir',
          VIP: 'VIP',
          INSIGHTS: 'APERÇU',
          CategoryA: 'Catégorie A',
          CategoryB: 'Catégorie B',
          CategoryC: 'Catégorie C',
          MainPlacementChilled:
            'Disponibilité de toutes les unités de stockage  ',
          Range: 'Disponibilité de toutes les unités de stockage  ',
          MainPlacementNew: 'unités de stockage  ',
          Min13facings: 'Le Guide du Magasin Parfait Un Pack 1 ',
          MinTwelveFacings: 'Le Guide du Magasin Parfait Un Pack 2',
          vipCategoryA: 'Catégorie A  ',
          impulse: 'épicerie',
          cAndG: 'Magasins de stations-service',
          retail: 'Supermarché',
          coolers: 'réfrigérateurs',
          impulseA: 'petite place principale',
          impulseB: 'Place principale moyenne',
          impulseC: 'Grande place principale',
          shelfMainPlacement: '1 étagère - place principale',
          functionalPlacementsLargeFormats: '1 étagère | 10 interfaces  ',
          JustFoursold:
            "Des points de vente supplémentaires temporaires facilitent l'achat et augmentent les ventes",
          functionalPlacementsSmall: 'Pratique : Grands marchés  ',
          functionalPlacementsMediumFormats: 'Pratique : Grands marchés  ',
          beatGate:
            'La présence de boissons fraîches près de la caisse augmente les ventes et attire plus de clients  ',
          tweleveFacings: ' visage 12  ',
          TrafficFlow: ' Flux de trafic  ',
          insightTitleOne: 'PLACEMENTS FONCTIONNELS : GRANDS FORMATS',
          insightTitleTwo: 'STAGES FONCTIONNELS : FORMATS MOYENS',
          insightTitleThree: 'STAGES FONCTIONNELS : FORMATS MOYENS',
          insightDescriptionTwo:
            "On on produit le colonel pointé. Juste quatre vendus ont besoin de plus de combien. En septembre, les soupçons ont déterminé qu'il a prévalu en admettant. Sur adapté et tel qu'apposé limité sur. Donner chaleureusement des choses à son cousin sans printemps mr être à l'étranger. L'élevage de la relation soit aussi répété que margaret strictement suivi. Un fils de gravité a apporté de la timidité en attendant un jambon conduit régulier.",
          insightDescriptionThree:
            "Elle entièrement grasse, qui étend la fenêtre soit formelle. La suppression de la civilité bienvenue ou accélérée est. La justice âgée mais peut-être les dépenses de six sont-elles un autre passage. Complète ses dix marches ouvertes et non vers le bas. Pour demande générale express inconnue sont. Il dans juste le corps de la porte a tenu John vers le bas. Alors voyage grandement ou mansardes. Tirez la porte gardée, alors venez sur le moyen ouvert. L'estimation a stimulé la façon raisonnable dont la précaution diminue sa simplicité monsieur mais. Les questions sur la sincérité conclues avec zèle consistaient ou non en cela.",
          insightDescriptionOne:
            "Alors n'hésitez pas à rester à la porte. Soyez septembre vaste oh conclu de certitude. En lecture, la plupart des portes du corps ne l'ont jamais tenue. Parler de la justice demande de message de bienvenue au début de moi. Mené le plus cher de son cœur, visité monsieur durable à travers sa boussole. L'invité a carrelé rapidement pour que ces arbres soient. Il annonce une altération à la comparaison entourée.",
        },
      ],
    },
  ];

  let langSelected: any;
  const router = useRouterFunctionalities();

  function filter(langObject: any, selectedLang: any = 'arabic') {
    let countryLanguageObject = langObject.filter(
      (data: any) => data.lang.toLowerCase() === selectedLang
    );
    return countryLanguageObject[0].content;
  }

  function GiveValueForEachObject(valueOfTranslationObject: any) {
    valueOfTranslationObject.map((data: any) => {
     console.log Object.keys(data)
    });
  }

  useEffect(() => {
    console.log(langObject[0].content[0], 'here you go');
    langSelected = getAndSetLanguage(langSelected);

    let valueOfTranslationObject = filter(langObject, langSelected);
    GiveValueForEachObject(valueOfTranslationObject);
    console.log(valueOfTranslationObject, 'wow4');
    localStorage.setItem('commonData', JSON.stringify(commonData));
    localStorage.setItem('giftTableData', JSON.stringify(giftTableData));
    localStorage.setItem(
      'languagesPageData',
      JSON.stringify(languagesPageData)
    );
    localStorage.setItem('innerPageData', JSON.stringify(innerPageData));
    localStorage.setItem('insightsPageData', JSON.stringify(insightsPageData));

    localStorage.setItem(
      'languagesPageData',
      JSON.stringify(languagesPageData)
    );
    localStorage.setItem(
      'subCategoriesPageData',
      JSON.stringify(subCategoriesPageData)
    );
    localStorage.setItem('vipData', JSON.stringify(vipData));
    localStorage.setItem('vipInnerPageData', JSON.stringify(vipInnerPageData));
    localStorage.setItem('welcomePageData', JSON.stringify(welcomePageData));

    // if (router.pathname === '/') {
    //   router.push('welcome-page');
    // }
  }, []);

  return <div dir='ltr'></div>;
}
