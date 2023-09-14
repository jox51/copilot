import { connect } from "@planetscale/database"
import { drizzle } from "drizzle-orm/planetscale-serverless"
import dotenv from "dotenv"

// change the path to .env if you prefer.
dotenv.config({ path: ".env.local" })

// create database connection
const connection = connect({
  url: process.env.DATABASE_URL
})
// The db instance can now be used for CRUD operations
// anywhere in your server-side code.
export const db = drizzle(connection)
export type DbClient = typeof db
