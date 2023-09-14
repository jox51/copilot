import React, { useEffect } from "react"
import useOptionsStore from "../store/optionsStore"
import useLatestParamsStore from "../store/latestParamsStore"
import { getServerSession } from "next-auth"
import { db } from "@/db"
import { users, formParameters } from "@/db/schema"
import { authOptions } from "../lib/auth"
import { useSession } from "next-auth/react"

export default async function LatestFormParams() {
  const { data: session } = useSession()

  const { data, setData } = useOptionsStore()
  const { latestParams, setLatestParams } = useLatestParamsStore()

  if (session) {
    const apiUrl = "/api/getLatestFormParameters/"

    // Send the data to the backend
    const response = await fetch(apiUrl, {
      method: "GET", // or 'GET' based on your requirement
      headers: {
        "Content-Type": "application/json"
      }
    })

    const result = response.json()
    console.log({ result })
    // setLatestParams({
    //   ...result
    //   // tickersCalls: "",
    //   // tickersPuts: "",
    //   // expirationDate: "",
    //   // minProfitPercentage: "",
    //   // maxProfitPercentage: "",
    //   // targetStrikes: "",
    //   // maxBudget: ""
    // })
  }

  return <div>LatestFormParams</div>
}
