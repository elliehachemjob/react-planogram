// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const insightsPageData = {
    inSightsCategories: [
      {
        "country": "Lebanon",
        "content": [{
          title: "insightTitleOne", description: "insightDescriptionOne", insightsPageExplore: "Explore",
          path: "/assets/good-read-1.PNG",
          explorePdf: "/assets/pdf/1.pdf"
        }, {
          title: "insightTitleTwo", description: "insightDescriptionTwo", insightsPageExplore: "Explore",
          path: "/assets/good-read-2.PNG",
          explorePdf: "/assets/pdf/2.pdf"
        }, {
          title: "insightTitleThree", description: "insightDescriptionThree", insightsPageExplore: "Explore",
          path: "assets/good-read-3.PNG",
          explorePdf: "/assets/pdf/3.pdf"
        }
        ]

      },
      {
        "country": "Qatar",
        "content":
          [{
            title: "insightTitleOne", description: "insightDescriptionTwo", insightsPageExplore: "Explore",
            path: "/assets/good-read-1.PNG",
            explorePdf: "/assets/pdf/1.pdf"
          }, {
            title: "insightTitleThree", description: "insightDescriptionTwo", insightsPageExplore: "Explore",
            path: "/assets/good-read-2.PNG",
            explorePdf: "/assets/pdf/2.pdf"
          }
          ]

      },
    ]
  };

  res.status(200).json(insightsPageData);
}
