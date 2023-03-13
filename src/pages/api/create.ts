import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  try {
    const { name, email, phone } = req.body;
    const contact = await prisma.contact.create({
      data: { name, email, phone },
    });
    res.status(200).json({ message: "Contact Create", data: contact });
  } catch (err) {
    res.status(400).json({ message: "Something Went Wrong" });
  }
}
