import { db } from "@/db"

export async function GET() {
  const printers = await db.query.printersTable.findMany();
  return new Response(JSON.stringify(printers), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

// TODO: Make a route to update list of printers