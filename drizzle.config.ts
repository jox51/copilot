import type { Config } from "drizzle-kit"

import dotenv from "dotenv"

// change the path to .env if you prefer.
dotenv.config({ path: ".env.local" })

export default {
  // this is where our drizzle schema is referenced.
  schema: "./db/schema.ts",

  // this is where the database migrations will be stored.
  out: "./db/migrations",

  // Authorizes our connection to PlanetScale via Drizzle ORM.
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string
  },

  // This is necessary if you want to use drizzle to
  // manage the database tables using a UI later on.
  driver: "mysql2",

  // This is necessary when working with mySQL databases
  // because they don't support DDL alternation statements
  // in one transaction.
  breakpoints: true
} satisfies Config
