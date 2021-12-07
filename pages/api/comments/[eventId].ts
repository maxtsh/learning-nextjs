import path from "path";
import fs from "fs";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import type { Comment } from "Types/Comments";

const dir = path.join(process.cwd(), "data", "comments.json");

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    //POST
  } else if (req.method === "GET") {
    const comments: Comment[] = JSON.parse(fs.readFileSync(dir, "utf-8"));
    const eventComments = comments.filter(
      (c: Comment) => c.eventId.toString() === req.query.eventId.toString()
    );
    res
      .status(200)
      .json({ data: eventComments, message: "Successfully fetched comments" });
  } else {
    res.status(200).json({ message: "THIS IS OK" });
  }
};

export default handler;
