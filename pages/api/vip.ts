// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const vipData = {
    vipHeaderText: [
      {
        "country": "Lebanon",
        "content": [
          "specialPromotion"
        ]
      },
      {
        "country": "Qatar",
        "content":
          [
            "This is a Qatar members club where you will receive discounts based on counterparts in store that will drive incremental sales, helping you earn more profit!"
          ]
      },
    ],
    vipCategories: [
      {
        "country": "Lebanon",
        "content": [
          "CategoryA", "CategoryB", "CategoryC"
        ]
      },
      {
        "country": "Qatar",
        "content":
          ["CategoryA", "CategoryB"]
      },
    ]
  };

  res.status(200).json(vipData);
}
