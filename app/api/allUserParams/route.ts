import { NextResponse, NextRequest } from "next/server"
import { db } from "@/db"
import { sql } from "drizzle-orm"
import { formParameters } from "@/db/schema"

export async function GET(request: Request, response: Response) {
  if (request.method !== "GET") {
    return NextResponse.json({
      status: 405,
      body: { message: "Method not allowed" }
    })
  }

  // Subquery to get the latest id for each email
  const latestIdsSubquery = sql`
    SELECT email, MAX(id) as max_id
    FROM ${formParameters}
    GROUP BY email
  `

  // Main query to get the details of the latest entries
  const latestUniqueFormParams = await db
    .select()
    .from(formParameters)
    .where(
      sql`
        (${formParameters.email}, ${formParameters.id})
        IN (${latestIdsSubquery})
      `
    )
    .then((data) => data)

  console.log({ latestUniqueFormParams })

  return NextResponse.json({ status: 200, body: { latestUniqueFormParams } })
}
