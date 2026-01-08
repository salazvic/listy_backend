-- DropForeignKey
ALTER TABLE "ItemList" DROP CONSTRAINT "ItemList_itemId_fkey";

-- DropForeignKey
ALTER TABLE "ItemList" DROP CONSTRAINT "ItemList_listId_fkey";

-- DropForeignKey
ALTER TABLE "List" DROP CONSTRAINT "List_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "SharedList" DROP CONSTRAINT "SharedList_listId_fkey";

-- DropForeignKey
ALTER TABLE "SharedList" DROP CONSTRAINT "SharedList_userId_fkey";

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemList" ADD CONSTRAINT "ItemList_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemList" ADD CONSTRAINT "ItemList_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SharedList" ADD CONSTRAINT "SharedList_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SharedList" ADD CONSTRAINT "SharedList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
