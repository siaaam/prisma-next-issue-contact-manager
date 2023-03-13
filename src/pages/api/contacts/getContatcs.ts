import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const contacts = await prisma.contact.findMany();
      res.status(200).json({ contacts });
    } catch (err) {
      res.status(200).json({ message: "Bad Request" });
    }
  }
}
