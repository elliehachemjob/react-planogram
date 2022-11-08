// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const innerPageData = {
    siteName: 'WINGMAN',
    planogramQuickSearchPlaceHolder: "Planogram Quick Search ",
    chosenLanguages: ["English", "Arabic", "French"]
  };

  res.status(200).json(innerPageData);
}
