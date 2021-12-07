import path from "path";
import fs from "fs";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const dir = path.join(process.cwd(), "data", "emails.json");
    const emails: string[] = JSON.parse(fs.readFileSync(dir, "utf-8"));
    const newEmail: string = JSON.parse(req.body).email;
    emails.push(newEmail);
    fs.writeFileSync(dir, JSON.stringify(emails));
    res.status(200).json({ message: "Successfully added email" });
  } else {
    res.status(200).json({ message: "THIS IS OK" });
  }
};

export default handler;
