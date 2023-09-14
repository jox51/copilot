"use client"
import { useEffect, useState } from "react"
import {
  Box,
  Heading,
  VStack,
  extendTheme,
  Flex,
  Spinner,
  Text
} from "@chakra-ui/react"
import CustomerCard from "../components/CustomerCard"
import Image from "next/image"
import DrawerExample from "../components/DrawerExample"
import UserParametersCard from "../components/UserParametersCard"
import { OptimizedPortfolioTable } from "../components/OptimizedPortfolioTable"
import { SearchResultsTable } from "../components/SearchResultsTable"
import { signIn, useSession, signOut } from "next-auth/react" // Importing the signIn function
import { db } from "@/db"
import { users, formParameters } from "@/db/schema"
import useLatestParamsStore from "../store/latestParamsStore"

interface CustomerDataProps {
  name: string
  email: string
  joinedDate: string
}

interface OptionPicksProps {
  optionName: string
  datePicked: string
  price: number
}

interface CustomerPageProps {
  customerData: CustomerDataProps
  optionsPicks: OptionPicksProps[]
}

const components = {
  Drawer: {
    variants: {
      alwaysOpen: {
        dialog: {
          pointerEvents: "auto"
        },
        dialogContainer: {
          pointerEvents: "none"
        }
      }
    }
  }
}

const theme = extendTheme({
  components
})

export default function CustomerPage() {
  //used to display user name on client
  const [loading, setLoading] = useState(true)
  const { data: session } = useSession()
  const { latestParams, setLatestParams } = useLatestParamsStore()

  // function needed below in order to parse the stringified arrays and return empty array if error
  function safeJSONParse(str: string, fallbackValue: any = []) {
    try {
      return JSON.parse(str)
    } catch (e) {
      return fallbackValue
    }
  }

  useEffect(() => {
    if (session) {
      fetch("http://localhost:3000/api/getLatestFormParameters", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        cache: "no-store"
      })
        .then((res) => res.json())
        .then((data) => {
          setLatestParams({
            email: data.body.latestFormParameters.email,
            username: data.body.latestFormParameters.username,
            tickersCalls: safeJSONParse(
              data.body.latestFormParameters.tickersCalls
            ),
            tickersPuts: safeJSONParse(
              data.body.latestFormParameters.tickersPuts
            ),
            expirationDate: data.body.latestFormParameters.expirationDate,
            minProfitPercentage:
              data.body.latestFormParameters.minProfitPercentage,
            maxProfitPercentage:
              data.body.latestFormParameters.maxProfitPercentage,
            targetStrikes: data.body.latestFormParameters.targetStrikes,
            maxBudget: data.body.latestFormParameters.maxBudget
          })
        })
      setLoading(false)
    }
  }, [session])

  if (loading) {
    return (
      <VStack spacing={4} alignItems="center">
        <Spinner size="xl" />
        <Text>Loading...</Text>
      </VStack>
    )
  }

  return (
    <Box p={8} mx="auto">
      <VStack align="center" spacing={6}>
        {/* <Box>
          <Heading textAlign="center" size="lg" mb={2}>
            Your Information
          </Heading>
          <CustomerCard {...customerData} />
        </Box> */}
        <DrawerExample />

        <Flex direction="column" alignItems="center" w="100%">
          <Heading size="md" mb={2}>
            Greetings {latestParams.username}! Your latest parameters are:
          </Heading>
          <UserParametersCard {...latestParams} />
        </Flex>

        <Box
          mt={8}
          p={4}
          boxShadow="xl"
          borderRadius="lg"
          bg="white"
          overflow="hidden"
        >
          <Heading size="lg" mb={4} textAlign={"center"}>
            Search Results
          </Heading>
          <SearchResultsTable />
        </Box>
        <Box
          mt={8}
          p={4}
          boxShadow="xl"
          borderRadius="lg"
          bg="white"
          overflow="hidden"
        >
          <Heading size="lg" mb={4} textAlign={"center"}>
            Optimized Portfolio
          </Heading>
          <OptimizedPortfolioTable />
          {/* <Image
            src="/sample_portfolio.png"
            height={500}
            width={500}
            alt="customer portfolio"
          /> */}
        </Box>
      </VStack>
    </Box>
  )
}
