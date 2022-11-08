// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const languagesPageData = {
    languages: [
      {
        "country": "Lebanon",
        "content": [
          "Arabic", "French", "Urdu", "English"
        ]
      },
      {
        "country": "Qatar",
        "content":
          ["Arabic", "English"]
      },
    ],
    languagesPageSelectALanguageToStart: "Select language from above to start"
  };

  res.status(200).json(languagesPageData);
}
