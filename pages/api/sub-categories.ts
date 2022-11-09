// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const subCategoriesPageData = {
    subCategoryName: "impulse",
    categories: [
      {
        "country": "Lebanon",
        "content": [
          { title: "impulse", background: "impulse" }, { title: "cAndG", background: "cg" }, { title: "retail", background: "retail" }, { title: "coolers", background: "coolers" }
        ]
      },
      {
        "country": "Qatar",
        "content": [
          { title: "impulse", background: "impulse" }
        ]
      },
    ]


  };

  res.status(200).json(subCategoriesPageData);
}
