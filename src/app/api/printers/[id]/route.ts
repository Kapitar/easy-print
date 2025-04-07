import { db } from "@/db";
import { join } from "path";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { printFile } from "node-cups";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const printerId = Number((await params).id);
  if (isNaN(printerId)) {
    return NextResponse.json({ error: "Invalid printer id" }, { status: 400 });
  }

  const [printer] = await db.query.printersTable.findMany({
    where: (printers, { eq }) => eq(printers.id, printerId),
  });

  if (!printer) {
    return NextResponse.json({ error: "Invalid printer id" }, { status: 400 });
  }

  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;
  if (!file) {
    return NextResponse.json({ error: "Invalid File" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = join(process.cwd(), "public", "files", file.name);
  await writeFile(uploadDir, buffer);
  // console.log(`File was recorded at ${path}`);

  const printerName = printer.name;

  return NextResponse.json({ message: "Success", printerName });
}
