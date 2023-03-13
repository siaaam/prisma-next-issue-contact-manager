/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Issue" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Issue_email_key" ON "Issue"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Issue_phone_key" ON "Issue"("phone");
