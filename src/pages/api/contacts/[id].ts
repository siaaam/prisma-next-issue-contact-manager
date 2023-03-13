import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const contactID = req.query.id;
  if (req.method === "GET") {
    try {
      const contact = await prisma.contact.findUnique({
        where: {
          id: Number(contactID),
        },
      });
      console.log(contact);
      res.status(200).json({ message: "ok", contact });
    } catch (err) {
      res.status(400).json({ message: "Bad Request" });
    }
  } else if (req.method === "DELETE") {
    try {
      await prisma.contact.delete({ where: { id: Number(contactID) } });
      res.status(200).json({ message: "Deleted" });
    } catch (err) {
      res.status(400).json({ message: "Bad Request" });
    }
  } else if (req.method === "PUT") {
    const { name, email, phone } = req.body;
    try {
      const contact = await prisma.contact.update({
        where: {
          id: Number(contactID),
        },
        data: { name, email, phone },
      });
      res.status(200).json({ message: "Updated", contact });
    } catch (err) {
      res.status(400).json({ message: "Bad Request" });
    }
  }
}
