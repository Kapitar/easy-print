import { db } from "@/db";

export async function getPrinterById(printerId: number) {
  const [printer] = await db.query.printersTable.findMany({
    where: (printers, { eq }) => eq(printers.id, printerId),
  });
  return printer;
}
