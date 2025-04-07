import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const printersTable = sqliteTable("printers_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
});