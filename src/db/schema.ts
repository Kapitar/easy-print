import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

export const printersTable = sqliteTable("printers_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
});

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull(),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
  requests: many(requestsTable),
}));

export const requestsTable = sqliteTable("requests_table", {
  id: int().primaryKey({ autoIncrement: true }),
  filePath: text().notNull(),
  userId: int(),
});

export const requestsRelations = relations(requestsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [requestsTable.userId],
    references: [usersTable.id],
  }),
}));
