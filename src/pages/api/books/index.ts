import { NextApiRequest, NextApiResponse } from "next";

import booksDataBase from "../../../database/db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(booksDataBase);
}
