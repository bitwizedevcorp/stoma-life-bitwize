/*
  Warnings:

  - Added the required column `surrname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `surrname` VARCHAR(191) NOT NULL;
