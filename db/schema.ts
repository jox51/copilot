import { relations } from "drizzle-orm"
import {
  int,
  mysqlTable,
  serial,
  text,
  timestamp,
  primaryKey,
  varchar
} from "drizzle-orm/mysql-core"
import type { AdapterAccount } from "@auth/core/adapters"

// export const users = mysqlTable("users", {
//   id: serial("id").primaryKey(),
//   name: text("name")
// })

export const formParameters = mysqlTable("form_parameters", {
  id: serial("id").primaryKey(),
  username: text("username"),
  email: text("email"),
  tickersCalls: text("tickersCalls"),
  tickersPuts: text("tickersPuts"),
  recs: text("recs").notNull(),
  expirationDate: text("expirationDate"),
  minProfitPercentage: text("minProfitPercentage"),
  maxProfitPercentage: text("maxProfitPercentage"),
  targetStrikes: text("targetStrikes"),
  maxBudget: text("maxBudget")
})

export const users = mysqlTable("user", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
    fsp: 3
  }).defaultNow(),
  image: varchar("image", { length: 255 }),
  discriminator: varchar("discriminator", { length: 255 }),
  fullName: varchar("fullName", { length: 255 }),
  role: varchar("role", { length: 255 }).default("user")
})

export const accounts = mysqlTable(
  "account",
  {
    userId: varchar("userId", { length: 255 }).notNull(),
    type: varchar("type", { length: 255 })
      .$type<AdapterAccount["type"]>()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refresh_token: varchar("refresh_token", { length: 255 }),
    access_token: varchar("access_token", { length: 255 }),
    expires_at: int("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: varchar("id_token", { length: 255 }),
    session_state: varchar("session_state", { length: 255 })
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId)
  })
)

export const sessions = mysqlTable("session", {
  sessionToken: varchar("sessionToken", { length: 255 }).notNull().primaryKey(),
  userId: varchar("userId", { length: 255 }).notNull(),
  expires: timestamp("expires", { mode: "date" }).notNull()
})

export const verificationTokens = mysqlTable(
  "verificationToken",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull()
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token)
  })
)

export const existingUsers = mysqlTable("existing_users", {
  id: serial("id").primaryKey(),
  discordHandle: varchar("discordHandle", { length: 255 }).notNull().unique()
})
