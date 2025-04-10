import { db } from "@/db";
import { requestsTable } from "../schema";
import { getUserByEmail } from "./userRepository";

export async function createRequest(
  filePath: string,
  email: string,
  printerId: number
) {
  const user = await getUserByEmail(email);
  const userId = user?.id;
  await db.insert(requestsTable).values({ filePath, userId, printerId });
}
