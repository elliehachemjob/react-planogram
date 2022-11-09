// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const vipInnerPageData = {
    vipCategoriesDetailsHeader: "vipCategoryA",
    vipCategoriesDetailsContent: [
      {
        "country": "Lebanon",
        "content": [{ title: "MainPlacementChilled", numberedElementPartOne: "#1", numberedElementPartTwo: "Min13facings", path: "/assets/vip/1.png" }, { title: "Range", numberedElementPartOne: " #2", numberedElementPartTwo: "MinTwelveFacings", path: "/assets/vip/1.png" }, { title: "Min13facings", numberedElementPartOne: " #3", numberedElementPartTwo: "Min13facings", path: "/assets/vip/1.png" }]
      },
      {
        "country": "Qatar",
        "content":
          [{ title: "MainPlacementChilled", numberedElementPartOne: "#1", numberedElementPartTwo: "Min13facings", path: "/assets/vip/1.png" }, { title: "Range", numberedElementPartOne: " #2", numberedElementPartTwo: "MinTwelveFacings", path: "/assets/vip/1.png" }]

      },
    ]
  };

  res.status(200).json(vipInnerPageData);
}
