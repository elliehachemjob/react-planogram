// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const subCategoriesPageData = {
    subCategoryName: "impulse",
    subCategories: [
      {
        "country": "Lebanon",
        "content": [
          { id: 1, title: "impulseA", subTitle: "shelfMainPlacement", nestedDetails: { title: "MinTwelveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }, { id: 2, title: "impulseB", subTitle: "shelfMainPlacement", nestedDetails: { title: "MinTwelveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }, { id: 3, title: "impulseC", subTitle: "shelfMainPlacement", nestedDetails: { title: "MinTwelveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }
        ]
      },
      {
        "country": "Qatar",
        "content": [
          { id: 1, title: "Impulse A", subTitle: "shelfMainPlacement", nestedDetails: { title: "MinTwelveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }, { id: 2, title: "impulseB", subTitle: "shelfMainPlacement", nestedDetails: { title: "MinTwelveFacings", imagePath: "/assets/subCategory/1.png", flow: "TrafficFlow", isEmptyContent: false } }
        ]
      }
    ]

  };

  res.status(200).json(subCategoriesPageData);
}
