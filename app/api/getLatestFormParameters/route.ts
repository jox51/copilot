import { NextResponse, NextRequest } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"

import { db } from "@/db"
import { users, formParameters } from "@/db/schema"
import { eq, and, desc } from "drizzle-orm"

export async function GET(request: Request, response: Response) {
  const session = await getServerSession(authOptions)
  const username = session?.user.name
  const email = session?.user.email

  if (request.method !== "GET") {
    return NextResponse.json({
      status: 405,
      body: { message: "Method not allowed" }
    })
  }

  if (!email || !username) {
    return NextResponse.json({
      status: 400,
      body: { message: "Email or username is missing" }
    })
  }

  const latestFormParameters = await db
    .select()
    .from(formParameters)
    .where(
      and(
        eq(formParameters.email, email), // Assuming formParameters has an email column
        eq(formParameters.username, username) // Assuming formParameters has a username column
      )
    ) // Adjust this based on your schema
    .orderBy(desc(formParameters.id))
    .limit(1)
    .then((data) => data[0])

  return NextResponse.json({ status: 200, body: { latestFormParameters } })
}
