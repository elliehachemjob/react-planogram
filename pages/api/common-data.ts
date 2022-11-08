// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const commonData = {
    siteName: 'WINGMAN',
    welcomeProgram: "program 2022",
    discover: "Discover",
    vip: "VIP",
    insights: "INSIGHTS"
  };

  res.status(200).json(commonData);
}
