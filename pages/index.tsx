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

  let langSelected: any;
  const router = useRouterFunctionalities();

  useEffect(() => {
    langSelected = getAndSetLanguage(langSelected);
    if (langSelected === 'arabic') {
      commonData = {
        siteName: 'WINGMAN',
        welcomeProgram: 'program 2022',
        discover: 'Discover',
        vip: 'VIP',
        insights: 'INSIGHTS',
      };

      giftTableData = {
        tableCategoryName: 'Category A',
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
              {
                title: 'EXCISE TAX',
                beforeValue: '10.00',
                afterValue: '10.00	',
              },
              { title: 'REBATE %', beforeValue: '10.00', afterValue: '55.337' },
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
              { title: 'VAT', beforeValue: '0.48', afterValue: '0.48' },
              {
                title: 'SHELF PRICE EXCLUDING VAT',
                beforeValue: '53.70	',
                afterValue: '55.337',
              },
              {
                title: 'EXCISE TAX',
                beforeValue: '10.00',
                afterValue: '10.00	',
              },
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
              { title: 'C&G', background: 'cg' },
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
        insightsPageHeaderContent: 'Good Read',
        inSightsCategories: [
          {
            country: 'Lebanon',
            content: [
              {
                title: 'FUNCTIONAL PLACEMENTS: LARGE FORMATS',
                description:
                  'So feel been kept be at gate. Be september it extensive oh concluded of certainty. In read most gate at body held it ever no. Talking justice welcome message inquiry in started of am me. Led own hearted highest visited lasting sir through compass his. Guest tiled he quick by so these trees am. It announcing alteration at surrounded comparison.',
                Explore: 'Explore',
                path: '/assets/good-read-1.PNG',
                explorePdf: '/assets/pdf/1.pdf',
                insightsPageExplore: 'Explore',
              },
              {
                title: 'FUNCTIONAL PLACEMENTS: MEDIUM FORMATS',
                description:
                  'On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham.',
                Explore: 'Explore',
                path: '/assets/good-read-2.PNG',
                explorePdf: '/assets/pdf/2.pdf',
                insightsPageExplore: 'Explore',
              },
              {
                title: 'FUNCTIONAL PLACEMENTS: SMALL FORMATS',
                description: 'insightDescriptionThree',
                Explore: 'Explore',
                path: '/assets/good-read-3.PNG',
                explorePdf: '/assets/pdf/3.pdf',
                insightsPageExplore: 'Explore',
              },
            ],
          },
          {
            country: 'Qatar',
            content: [
              {
                title: 'FUNCTIONAL PLACEMENTS: LARGE FORMATS',
                description:
                  'On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham.',
                Explore: 'Explore',
                path: '/assets/good-read-1.PNG',
                explorePdf: '/assets/pdf/1.pdf',
                insightsPageExplore: 'Explore',
              },
              {
                title: 'FUNCTIONAL PLACEMENTS: SMALL FORMATS',
                description:
                  'On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham.',
                Explore: 'Explore',
                path: '/assets/good-read-2.PNG',
                explorePdf: '/assets/pdf/2.pdf',
                insightsPageExplore: 'Explore',
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
                title: 'impulse A',
                subTitle: 'shelf Main Placement 1',
                nestedDetails: {
                  title: 'Min 12 Facings',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'Traffic Flow',
                  isEmptyContent: false,
                },
              },
              {
                id: 2,
                title: 'impulse B',
                subTitle: 'shelf Main Placement 2',
                nestedDetails: {
                  title: 'Min 12 Facings',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'Traffic Flow',
                  isEmptyContent: false,
                },
              },
              {
                id: 3,
                title: 'impulse C',
                subTitle: 'shelf Main Placement 3',
                nestedDetails: {
                  title: 'Min 12 Facings',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'Traffic Flow',
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
                subTitle: 'shelf Main Placement',
                nestedDetails: {
                  title: 'Min 12 Facings',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'Traffic Flow',
                  isEmptyContent: false,
                },
              },
              {
                id: 2,
                title: 'impulseB',
                subTitle: 'shelf Main Placement',
                nestedDetails: {
                  title: 'Min 12 Facings',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'Traffic Flow',
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
            content: [
              'This is a special members club where you will receive discounts based on counterparts in store that will drive incremental sales, helping you earn more profit!!alPromotion',
            ],
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
            content: ['Category A', 'Category B', 'Category C '],
          },
          {
            country: 'Qatar',
            content: ['Category A', 'Category B'],
          },
        ],
      };
      vipInnerPageData = {
        vipCategoriesDetailsHeader: 'vipCategory A',
        vipCategoriesDetailsContent: [
          {
            country: 'Lebanon',
            content: [
              {
                title: 'Main Placement Chilled',
                numberedElementPartOne: '#1',
                numberedElementPartTwo: 'Min 13 facings',
                path: '/assets/vip/1.png',
              },
              {
                title: 'Range',
                numberedElementPartOne: ' #2',
                numberedElementPartTwo: 'Min 12 Facings',
                path: '/assets/vip/1.png',
              },
              {
                title: 'Min 13 facings',
                numberedElementPartOne: ' #3',
                numberedElementPartTwo: 'Min 13 facings',
                path: '/assets/vip/1.png',
              },
            ],
          },
          {
            country: 'Qatar',
            content: [
              {
                title: 'Main Placement Chilled',
                numberedElementPartOne: '#1',
                numberedElementPartTwo: 'Min 13 facings',
                path: '/assets/vip/1.png',
              },
              {
                title: 'Range',
                numberedElementPartOne: ' #2',
                numberedElementPartTwo: 'Min 12 Facings',
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
    if (langSelected === 'arabic') {
      commonData = {
        siteName: 'WINGMAN',
        welcomeProgram: 'program 2022',
        discover: 'اكتشف النص',
        vip: 'VIP',
        insights: 'أفكار',
      };

      giftTableData = {
        tableCategoryName: 'الفئة   ١',
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
                title: 'ضريبة القيمة المضافة',
                beforeValue: '0.48',
                afterValue: '0.48',
              },
              {
                title: 'SHELF PRICE EXCLUDING VAT',
                beforeValue: '53.70	',
                afterValue: '55.337',
              },
              {
                title: 'EXCISE TAX',
                beforeValue: '10.00',
                afterValue: '10.00	',
              },
              { title: 'REBATE %', beforeValue: '10.00', afterValue: '55.337' },
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
                title: 'ضريبة القيمة المضافة',
                beforeValue: '0.48',
                afterValue: '0.48',
              },
              {
                title: 'SHELF PRICE EXCLUDING VAT',
                beforeValue: '53.70	',
                afterValue: '55.337',
              },
              {
                title: 'EXCISE TAX',
                beforeValue: '10.00',
                afterValue: '10.00	',
              },
            ],
          },
        ],
      };
      innerPageData = {
        siteName: 'WINGMAN',
        planogramQuickSearchPlaceHolder: 'بحث سريع ',
        chosenLanguages: ['English', 'Arabic', 'French'],
        categories: [
          {
            country: 'Lebanon',
            content: [
              { title: 'بقالة', background: 'impulse' },
              { title: 'تأجير مؤقت', background: 'cg' },
              { title: 'تجارة التجزئة', background: 'retail' },
              { title: 'مبردات', background: 'coolers' },
            ],
          },
          {
            country: 'Qatar',
            content: [{ title: 'impulse', background: 'impulse' }],
          },
        ],
      };
      insightsPageData = {
        insightsPageHeaderContent: 'قراءة جيدة',
        inSightsCategories: [
          {
            country: 'Lebanon',
            content: [
              {
                title: 'المواضع الوظيفية: تنسيقات كبيرة',
                description:
                  'لذا أشعر أنك بقيت على البوابة. يكون سبتمبر واسع النطاق يا استنتاج يقين. في قراءة معظم البوابة في الجسم عقدها على الإطلاق لا. الحديث عن العدالة رسالة الترحيب الاستفسار في البداية أنا أنا. أدى قلبه الخاص أعلى زيارة دائمة سيدي من خلال البوصلة له. ضيف البلاط كان سريعًا حتى هذه الأشجار. تعلن عن التغيير في مقارنة محاطة',
                path: '/assets/good-read-1.PNG',
                explorePdf: '/assets/pdf/1.pdf',
                insightsPageExplore: 'استكشف',
              },
              {
                title: 'المواضع الوظيفية: الصيغ المتوسطة',
                description:
                  'على إنتاج وأشار العقيد. أربعة فقط تباع تحتاج إلى أي شيء. في سبتمبر الشك في تحديد أنه ساد الاعتراف. على تكييفها كما تم إلصاق محدود على. إعطاء ابن عم بحرارة الأشياء لا ربيع السيد يكون في الخارج. تتكرر تربية العلاقة كما اتبعت بدقة مارغريت. جلب أحد أبناء الجاذبية الخجل في انتظار لحم الخنزير',
                path: '/assets/good-read-2.PNG',
                explorePdf: '/assets/pdf/2.pdf',
                insightsPageExplore: 'استكشف',
              },
              {
                title: 'المواضع الوظيفية: تنسيقات صغيرة',
                description:
                  'انها سمينة تماما نافذة المدى سواء الرسمية. إزالة الكياسة المرحب بها أو التعجيل هو. العدل عجوز بل ربما نفقة ستة لها فقرة أخرى. ممتلئًا لها العشرة مغرمًا بالمشي لا تسقط. لطلب صريح عام غير معروف هي. كان في جسد باب السيد فقط عقد جون أسفله. لذلك رحلة كبيرة أو الثغرات. أبقى رسم الباب تفعل ذلك تعال يعني فتح. لقد حفز التقدير مدى معقولية التقليل من البساطة يا سيدي ولكن. الأسئلة التي أنا بصدق خلص إليها بحماسة تتكون أو لا يوجد رجل نبيل',
                path: '/assets/good-read-3.PNG',
                explorePdf: '/assets/pdf/3.pdf',
                insightsPageExplore: 'استكشف',
              },
            ],
          },
          {
            country: 'Qatar',
            content: [
              {
                title: 'المواضع الوظيفية: تنسيقات كبيرة',
                description:
                  'على إنتاج وأشار العقيد. أربعة فقط تباع تحتاج إلى أي شيء. في سبتمبر الشك في تحديد أنه ساد الاعتراف. على تكييفها كما تم إلصاق محدود على. إعطاء ابن عم بحرارة الأشياء لا ربيع السيد يكون في الخارج. تتكرر تربية العلاقة كما اتبعت بدقة مارغريت. جلب أحد أبناء الجاذبية الخجل في انتظار لحم الخنزير',
                path: '/assets/good-read-1.PNG',
                explorePdf: '/assets/pdf/1.pdf',
                insightsPageExplore: 'استكشف',
              },
              {
                title: 'المواضع الوظيفية: تنسيقات صغيرة',
                description:
                  'على إنتاج وأشار العقيد. أربعة فقط تباع تحتاج إلى أي شيء. في سبتمبر الشك في تحديد أنه ساد الاعتراف. على تكييفها كما تم إلصاق محدود على. إعطاء ابن عم بحرارة الأشياء لا ربيع السيد يكون في الخارج. تتكرر تربية العلاقة كما اتبعت بدقة مارغريت. جلب أحد أبناء الجاذبية الخجل في انتظار لحم الخنزير',
                path: '/assets/good-read-2.PNG',
                explorePdf: '/assets/pdf/2.pdf',
                insightsPageExplore: 'استكشف',
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
                title: 'مكان رئيسي صغير',
                subTitle: 'تدفق حركة المرور ١',
                nestedDetails: {
                  title: 'واجهات اثني عشر على الأقل',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'تدفق حركة المرور',
                  isEmptyContent: false,
                },
              },
              {
                id: 2,
                title: 'مكان رئيسي متوسط',
                subTitle: 'تدفق حركة المرور ٢',
                nestedDetails: {
                  title: 'واجهات اثني عشر على الأقل',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'تدفق حركة المرور',
                  isEmptyContent: false,
                },
              },
              {
                id: 3,
                title: 'مكان رئيسي كبير',
                subTitle: 'تدفق حركة المرور ٣',
                nestedDetails: {
                  title: 'واجهات اثني عشر على الأقل',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'تدفق حركة المرور ',
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
                subTitle: 'تدفق حركة المرور ١',
                nestedDetails: {
                  title: 'واجهات اثني عشر على الأقل',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'تدفق حركة المرور',
                  isEmptyContent: false,
                },
              },
              {
                id: 2,
                title: 'مكان رئيسي متوسط',
                subTitle: 'تدفق حركة المرور ٢',
                nestedDetails: {
                  title: 'واجهات اثني عشر على الأقل',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'تدفق حركة المرور',
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
            content: [
              'نادي خاص للأعضاء حيث ستتلقى خصومات بناءً على نظرائك في المتجر والتي ستؤدي إلى زيادة المبيعات ، مما يساعدك على كسب المزيد من الأرباح!',
            ],
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
            content: ['الفئة   ١', 'لفئة    ٢', 'الفئة    ٣'],
          },
          {
            country: 'Qatar',
            content: ['الفئة   ١', 'لفئة    ٢'],
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
                title: 'توفر جمیع وحدات تخزین',
                numberedElementPartOne: '#1',
                numberedElementPartTwo: 'دلیل المتجر المثالي [عبوة واحدة 1]   ',
                path: '/assets/vip/1.png',
              },
              {
                title: 'Range',
                numberedElementPartOne: '#2',
                numberedElementPartTwo:
                  'واجهات اثني عشر على الأقل: "دلیل المتجر المثالي [عبوة واحدة 1]',
                path: '/assets/vip/1.png',
              },
              {
                title: 'Min13facings',
                numberedElementPartOne: ' #3',
                numberedElementPartTwo: 'دلیل المتجر المثالي [عبوة واحدة 1]   ',
                path: '/assets/vip/1.png',
              },
            ],
          },
          {
            country: 'Qatar',
            content: [
              {
                title: 'توفر جمیع وحدات تخزین',
                numberedElementPartOne: '#1',
                numberedElementPartTwo: 'Min13facings',
                path: '/assets/vip/1.png',
              },
              {
                title: 'دلیل المتجر المثالي',
                numberedElementPartOne: ' #2',
                numberedElementPartTwo: 'واجهات اثني عشر على الأقل',
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
    if (langSelected === 'english') {
      commonData = {
        siteName: 'WINGMAN',
        welcomeProgram: 'program 2022',
        discover: 'Découvrir',
        vip: 'VIP',
        insights: 'APERÇU',
      };

      giftTableData = {
        tableCategoryName: 'Catégorie A',
        tableCategoryHeaderName: {
          title: ' VIP A',
          before: 'before',
          after: 'after',
        },
        categoriesTableContent: [
          {
            country: 'Lebanon',
            content: [
              {
                title: 'PRIX EN RAYON RECOMMANDÉ',
                beforeValue: '10.00',
                afterValue: '10.00',
              },
              { title: 'T.V.A.', beforeValue: '0.48', afterValue: '0.48' },
              {
                title: 'PRIX DISPONIBLE HORS TVA',
                beforeValue: '53.70	',
                afterValue: '55.337',
              },
              {
                title: 'TAXE DACCISE',
                beforeValue: '10.00',
                afterValue: '10.00	',
              },
              { title: 'RABAIS %', beforeValue: '10.00', afterValue: '55.337' },
              {
                title: 'REMISES TOTALES',
                beforeValue: '14.00',
                afterValue: '11',
              },
              {
                title: 'PRIX EN RAYON RECOMMANDÉ',
                beforeValue: '27.120',
                afterValue: '10',
              },
            ],
          },
          {
            country: 'Qatar',
            content: [
              {
                title: 'PRIX EN RAYON RECOMMANDÉ',
                beforeValue: '10.00',
                afterValue: '10.00',
              },
              { title: 'VAT', beforeValue: '0.48', afterValue: '0.48' },
              {
                title: 'PRIX DISPONIBLE HORS TVA',
                beforeValue: '53.70	',
                afterValue: '55.337',
              },
              {
                title: 'TAXE DACCISE',
                beforeValue: '10.00',
                afterValue: '10.00	',
              },
            ],
          },
        ],
      };
      innerPageData = {
        siteName: 'WINGMAN',
        planogramQuickSearchPlaceHolder: 'recherche rapide de planogramme ',
        chosenLanguages: ['English', 'Arabic', 'French'],
        categories: [
          {
            country: 'Lebanon',
            content: [
              { title: 'Impulsion', background: 'impulse' },
              { title: 'C&G', background: 'cg' },
              { title: 'Essai', background: 'retail' },
              { title: 'Glacières', background: 'coolers' },
            ],
          },
          {
            country: 'Qatar',
            content: [{ title: 'impulse', background: 'impulse' }],
          },
        ],
      };
      insightsPageData = {
        insightsPageHeaderContent: 'Bonne lecture',
        inSightsCategories: [
          {
            country: 'Lebanon',
            content: [
              {
                title: 'PLACEMENTS FONCTIONNELS : GRANDS FORMATS',
                description:
                  'Parler de la justice demande de message de bienvenue au début de moi.',
                explorer: 'Explorer',
                path: '/assets/good-read-1.PNG',
                explorePdf: '/assets/pdf/1.pdf',
                insightsPageExplore: 'Explorer',
              },
              {
                title: 'STAGES FONCTIONNELS : FORMATS MOYENS',
                description:
                  'de la relation soit aussi répété que margaret strictement suivi. Un fils de gravité a apporté de la timidité en attendant un jambon conduit régulier',
                explorer: 'Explorer',
                path: '/assets/good-read-2.PNG',
                explorePdf: '/assets/pdf/2.pdf',
                insightsPageExplore: 'Explorer',
              },
              {
                title: 'insightTitleThree',
                description:
                  'Elle entièrement grasse, qui étend la fenêtre soit formelle. La suppression de la civilité bienvenue ou accélérée est. La justice âgée mais peut-être les dépenses de six sont-elles un autre passage.',
                explorer: 'Explorer',
                path: '/assets/good-read-3.PNG',
                insightsPageExplore: 'Explorer',
              },
            ],
          },
          {
            country: 'Qatar',
            content: [
              {
                title: 'PLACEMENTS FONCTIONNELS : GRANDS FORMATS',
                description:
                  'de la relation soit aussi répété que margaret strictement suivi. Un fils de gravité a apporté de la timidité en attendant un jambon conduit régulier',
                explorer: 'Explorer',
                path: '/assets/good-read-1.PNG',
                explorePdf: '/assets/pdf/1.pdf',
                insightsPageExplore: 'Explorer',
              },
              {
                title: 'insightTitleThree',
                description:
                  'de la relation soit aussi répété que margaret strictement suivi. Un fils de gravité a apporté de la timidité en attendant un jambon conduit régulier',
                explorer: 'Explorer',
                path: '/assets/good-read-2.PNG',
                explorePdf: '/assets/pdf/2.pdf',
                insightsPageExplore: 'Explorer',
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
                title: 'Petite place principale',
                subTitle: '1 étagère - place principale 1',
                nestedDetails: {
                  title: 'Le Guide du Magasin Parfait Un Pack 2',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'Flux de trafic',
                  isEmptyContent: false,
                },
              },
              {
                id: 2,
                title: 'Place principale moyenne',
                subTitle: '1 étagère - place principale 2',
                nestedDetails: {
                  title: 'Le Guide du Magasin Parfait Un Pack 2',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'Flux de trafic',
                  isEmptyContent: false,
                },
              },
              {
                id: 3,
                title: 'Grande place principale',
                subTitle: '1 étagère - place principale 3',
                nestedDetails: {
                  title: 'Le Guide du Magasin Parfait Un Pack 2',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'Flux de trafic',
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
                subTitle: '1 étagère - place principale 1 ',
                nestedDetails: {
                  title: 'Le Guide du Magasin Parfait Un Pack 2',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'Flux de trafic',
                  isEmptyContent: false,
                },
              },
              {
                id: 2,
                title: 'Place principale moyenne',
                subTitle: '1 étagère - place principale 2 ',
                nestedDetails: {
                  title: 'Le Guide du Magasin Parfait Un Pack 2',
                  imagePath: '/assets/subCategory/1.png',
                  flow: 'Flux de trafic',
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
            content: [
              'Il  club de membres spécial où vous recevrez des remises basées sur les homologues en magasin qui généreront des ventes supplémentaires, vous aidant à gagner plus de profit !',
            ],
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
            content: ['Catégorie A', 'Catégorie B', 'Catégorie C'],
          },
          {
            country: 'Qatar',
            content: ['Catégorie A', 'Catégorie B'],
          },
        ],
      };
      vipInnerPageData = {
        vipCategoriesDetailsHeader: 'vipCatégorie A',
        vipCategoriesDetailsContent: [
          {
            country: 'Lebanon',
            content: [
              {
                title: 'Disponibilité de toutes les unités de stockage',
                numberedElementPartOne: '#1',
                numberedElementPartTwo: 'Le Guide du Magasin Parfait Un Pack 1',
                path: '/assets/vip/1.png',
              },
              {
                title: 'Disponibilité de toutes les unités de stockage',
                numberedElementPartOne: ' #2',
                numberedElementPartTwo: 'Le Guide du Magasin Parfait Un Pack 2',
                path: '/assets/vip/1.png',
              },
              {
                title: 'Le Guide du Magasin Parfait Un Pack 1',
                numberedElementPartOne: ' #3',
                numberedElementPartTwo: 'Le Guide du Magasin Parfait Un Pack 1',
                path: '/assets/vip/1.png',
              },
            ],
          },
          {
            country: 'Qatar',
            content: [
              {
                title: 'Disponibilité de toutes les unités de stockage',
                numberedElementPartOne: '#1',
                numberedElementPartTwo: 'Le Guide du Magasin Parfait Un Pack 1',
                path: '/assets/vip/1.png',
              },
              {
                title: 'Disponibilité de toutes les unités de stockage',
                numberedElementPartOne: ' #2',
                numberedElementPartTwo: 'Le Guide du Magasin Parfait Un Pack 2',
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

    if (router.pathname === '/') {
      router.push('welcome-page');
    }
  }, []);

  return <div dir='ltr'></div>;
}
