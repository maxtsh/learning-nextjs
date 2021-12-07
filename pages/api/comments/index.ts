import path from "path";
import fs from "fs";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import type { Comment } from "Types/Comments";

const dir = path.join(process.cwd(), "data", "comments.json");

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const comments: Comment[] = JSON.parse(fs.readFileSync(dir, "utf-8"));
    const newComment: Comment = JSON.parse(req.body);
    comments.push(newComment);
    fs.writeFileSync(dir, JSON.stringify(comments));
    res.status(200).json({ message: "Successfully added comment" });
  } else {
    res.status(200).json({ message: "THIS IS OK" });
  }
};

export default handler;
