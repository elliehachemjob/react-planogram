// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const welcomePageData = {
    countries: ["UAE", "MALDIVES", "PAKISTAN", "SRI LANKA", "ALGERIA", "NIGERIA", "ANGOLA", "MAURITIUS", "KENYA", "EGYPT", "OMAN", "KUWAIT", "QATAR", "JORDAN", "BAHRAIN", "KSA", "LEBANON", "GHANA"],
    siteName: 'WINGMAN',
    image: "/assets/logo.png",
    welcomeProgram: "program 2022",
    welcomeSelectACountryToStart: "Select country to start",
  };

  res.status(200).json(welcomePageData);
}
