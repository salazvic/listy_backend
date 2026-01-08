/*
  Warnings:

  - Made the column `itemId` on table `ItemList` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ItemList" DROP CONSTRAINT "ItemList_itemId_fkey";

-- AlterTable
ALTER TABLE "ItemList" ALTER COLUMN "itemId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ItemList" ADD CONSTRAINT "ItemList_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
