-- DropForeignKey
ALTER TABLE "ItemList" DROP CONSTRAINT "ItemList_itemId_fkey";

-- AlterTable
ALTER TABLE "ItemList" ALTER COLUMN "itemId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ItemList" ADD CONSTRAINT "ItemList_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
