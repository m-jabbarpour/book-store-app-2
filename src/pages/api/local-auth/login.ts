import { NextApiRequest, NextApiResponse } from "next";

import { users } from "../../../database/users";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const foundUser = users.find((user) => user.email === email);
    if (foundUser) {
      if (foundUser.password === password) {
        res
          .status(200)
          .json({ token: foundUser.token, messege: "Signed in successfully!" });
      } else {
        res.status(401).json({ messege: "The password is incorrect!" });
      }
    } else {
      res.status(401).json({ messege: "User not found!" });
    }
  }
}
