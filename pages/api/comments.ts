import path from "path";
import fs from "fs";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import type { Comment } from "Types/Comments";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const dir = path.join(process.cwd(), "data", "comments.json");
    const comments: Comment[] = JSON.parse(fs.readFileSync(dir, "utf-8"));
    const newComment: Comment = JSON.parse(req.body).comment;
    comments.push(newComment);
    fs.writeFileSync(dir, JSON.stringify(newComment));
    res.status(200).json({ message: "Successfully added comment" });
  } else if (req.method === "GET") {
    //GET
  } else {
    res.status(200).json({ message: "THIS IS OK" });
  }
};

export default handler;
