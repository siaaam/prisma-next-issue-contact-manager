import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const contactID = req.query.id;
  if (req.method === "DELETE") {
    try {
      await prisma.contact.delete({ where: { id: Number(contactID) } });
      res.status(200).json({ message: "Deleted" });
    } catch (err) {
      res.status(400).json({ message: "Bad Request" });
    }
  }
}
