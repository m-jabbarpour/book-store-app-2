import { NextApiRequest, NextApiResponse } from "next";

import { orders } from "../../../database/orders";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(orders);
}
