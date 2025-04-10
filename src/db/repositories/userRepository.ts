import { db } from "@/db";
import { usersTable } from "../schema";

export async function isUserCreated(email: string) {
  const user = await db.query.usersTable.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });
  return !!user;
}

export async function createUser(name: string, email: string) {
  await db.insert(usersTable).values({ name: name, email: email });
}

export async function getUserByEmail(email: string) {
  const user = await db.query.usersTable.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });
  return user;
}