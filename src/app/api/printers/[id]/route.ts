import { db } from "@/db";
import { join } from "path";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { printFile } from "node-cups";
import { auth } from "@/auth"; // Import your auth config
import { getPrinterById } from "@/db/repositories/printerRepository";
import { createRequest } from "@/db/repositories/requestRepository";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  console.log(session);
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const printerId = Number((await params).id);
  if (isNaN(printerId)) {
    return NextResponse.json({ error: "Invalid printer id" }, { status: 400 });
  }

  const printer = await getPrinterById(printerId);
  if (!printer) {
    return NextResponse.json({ error: "Printer with given id doesn't exist" }, { status: 400 });
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
  createRequest(uploadDir, session?.user?.email ?? "", printerId);

  return NextResponse.json({ message: "Success", printerName });
}
