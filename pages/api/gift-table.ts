// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const giftTableData = {
    tableCategoryName: 'CategoryA',
    tableCategoryHeaderName: { title: "Impulse VIP A", before: "before", after: "after" },
    categoriesTableContent: [
      {
        "country": "Lebanon",
        "content": [{ title: "RECOMMENDED SHELF PRICE", beforeValue: "10.00", afterValue: "10.00" }, { title: "VAT", beforeValue: "0.48", afterValue: "0.48" }, { title: "SHELF PRICE EXCLUDING VAT", beforeValue: "53.70	", afterValue: "55.337" }, { title: "EXCISE TAX", beforeValue: "10.00", afterValue: "10.00	" }, { title: "REBATE %", beforeValue: "10.00", afterValue: "55.337" }, { title: "TOTAL REBATES", beforeValue: "14.00", afterValue: "11" }, { title: "RECOMMENDED SHELF PRICE", beforeValue: "27.120", afterValue: "10" }]
      },
      {
        "country": "Qatar",
        "content":
          [{ title: "RECOMMENDED SHELF PRICE", beforeValue: "10.00", afterValue: "10.00" }, { title: "VAT", beforeValue: "0.48", afterValue: "0.48" }, { title: "SHELF PRICE EXCLUDING VAT", beforeValue: "53.70	", afterValue: "55.337" }, { title: "EXCISE TAX", beforeValue: "10.00", afterValue: "10.00	" }]
      },
    ]
  };

  res.status(200).json(giftTableData);
}
