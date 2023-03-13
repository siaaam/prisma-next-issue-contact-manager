// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "method not allowed" });
  }
  try {
    const users = await prisma.contact.findMany();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: "something went wrong" });
  }
}
