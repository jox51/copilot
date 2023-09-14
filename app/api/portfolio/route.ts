import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { db } from "@/db"
import { users, formParameters } from "@/db/schema"
import { authOptions } from "../../lib/auth"

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  console.log({ session })

  const payload = await request.json()

  const {
    recs,
    expirationDate,
    minProfitPercentage,
    maxProfitPercentage,
    targetStrikes,
    maxBudget,
    tickersCalls,
    tickersPuts
  } = payload
  console.log({ payload })
  const dbUsers = await db.select().from(users)
  const dbFormParameters = await db.select().from(formParameters)

  // Insert the payload into the formParameters table
  await db.insert(formParameters).values({
    username: session?.user.name,
    email: session?.user.email,
    recs: recs,
    expirationDate: expirationDate,
    minProfitPercentage: minProfitPercentage,
    maxProfitPercentage: maxProfitPercentage,
    targetStrikes: targetStrikes,
    maxBudget: maxBudget,
    tickersCalls: JSON.stringify(tickersCalls),
    tickersPuts: JSON.stringify(tickersPuts)
  })

  // await db.insert(users).values({ name: "John Doe Ray" })

  return NextResponse.json({ status: 200, body: { message: "success" } })
}
