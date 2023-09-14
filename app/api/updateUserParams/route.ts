import { NextResponse, NextRequest } from "next/server"
import { db } from "@/db"
import { formParameters } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function PATCH(request: NextRequest) {
  if (request.method !== "PATCH") {
    return NextResponse.json({
      status: 405,
      body: { message: "Method not allowed" }
    })
  }

  interface UserParams {
    id: number
    email: string
    expirationDate: string
    maxBudget: string
    minProfitPercentage: string
    maxProfitPercentage: string
    targetStrikes: string
    tickersCalls: string[]
    tickersPuts: string[]
    username: string
  }

  const updatedParams: UserParams[] = await request.json() // This contains the updated data from the client

  console.log({ updatedParams })

  for (const entry of updatedParams) {
    await db
      .update(formParameters)
      .set({
        expirationDate: entry.expirationDate,
        maxBudget: entry.maxBudget,
        minProfitPercentage: entry.minProfitPercentage,
        maxProfitPercentage: entry.maxProfitPercentage,
        targetStrikes: entry.targetStrikes,
        tickersCalls: JSON.stringify(entry.tickersCalls),
        tickersPuts: JSON.stringify(entry.tickersPuts)
        // Add other fields as needed
      })
      .where(eq(formParameters.id, entry.id)) // Update based on the id
      .execute()
  }

  return NextResponse.json({
    status: 200,
    body: { message: "Data updated successfully" }
  })
}
