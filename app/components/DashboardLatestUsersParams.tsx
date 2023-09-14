"use client"
import React, { useState, useEffect } from "react"
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  VStack,
  Text,
  TableContainer,
  Flex,
  Input,
  Button
} from "@chakra-ui/react"
import EditableCell from "./EditableCell"
import { useEditParamsFields } from "../store/dashPageParamsStore"

interface User {
  email: string
  expirationDate: string
  maxBudget: string
  minProfitPercentage: string
  maxProfitPercentage: string
  targetStrikes: string
  tickersCalls: string // After parsing, it becomes an array
  tickersPuts: string // After parsing, it becomes an array
  username: string
}

interface FetchApiResponse {
  status: number
  body: {
    latestUniqueFormParams: User[]
  }
}

interface UserParams {
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

interface ApiResponse {
  body: {
    latestUniqueFormParams: UserParams[]
  }
}

const DashboardLatestUsersParams = () => {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const { editFields, setEditFields } = useEditParamsFields()

  function parseTickers(tickers: string): string[] {
    try {
      return JSON.parse(tickers)
    } catch (error) {
      return tickers.split(",").map((ticker) => ticker.trim())
    }
  }

  const handleValueChange = (
    index: number,
    key: keyof UserParams,
    value: string
  ) => {
    const updatedData = [...(data?.body.latestUniqueFormParams || [])]
    if (key === "tickersCalls" || key === "tickersPuts") {
      updatedData[index][key] = value.split(",").map((ticker) => ticker.trim())
    } else {
      updatedData[index][key] = value
    }
    setData({ body: { latestUniqueFormParams: updatedData } })
    console.log({ data })
  }

  useEffect(() => {
    fetch("/api/allUserParams")
      .then((response) => response.json())
      .then((data: FetchApiResponse) => {
        const parsedData = {
          ...data,
          body: {
            ...data.body,
            latestUniqueFormParams: data?.body.latestUniqueFormParams.map(
              (user) => ({
                ...user,
                tickersCalls: parseTickers(user.tickersCalls),
                tickersPuts: parseTickers(user.tickersPuts)
              })
            )
          }
        }
        setData(parsedData)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        setLoading(false)
      })
  }, [])

  const fetchLatestData = () => {
    // You can reuse the fetch logic from your useEffect
    fetch("/api/allUserParams")
      .then((response) => response.json())
      .then((data: FetchApiResponse) => {
        const parsedData = {
          ...data,
          body: {
            ...data.body,
            latestUniqueFormParams: data?.body.latestUniqueFormParams.map(
              (user) => ({
                ...user,
                tickersCalls: parseTickers(user.tickersCalls),
                tickersPuts: parseTickers(user.tickersPuts)
              })
            )
          }
        }
        setData(parsedData)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }

  const submitEditedData = () => {
    // Assuming you have an API endpoint to handle the update
    fetch("/api/updateUserParams", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data?.body.latestUniqueFormParams)
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Data updated:", result)
      })
      .catch((error) => {
        console.error("Error updating data:", error)
      })
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
    >
      <Heading mb={6}>Administrator Dashboard</Heading>

      {loading ? (
        <VStack spacing={4} alignItems="center">
          <Spinner size="xl" />
          <Text>Loading user parameters...</Text>
        </VStack>
      ) : (
        <>
          <Box mb={4}>
            <Button colorScheme="teal" mr={3} onClick={fetchLatestData}>
              Fetch Latest Data
            </Button>
            <Button colorScheme="blue" onClick={submitEditedData}>
              Submit Edited Data
            </Button>
          </Box>

          <Box
            boxShadow="xl"
            p={5}
            bg="white"
            borderRadius="md"
            justifyContent="center"
          >
            <TableContainer width="100%" maxWidth="1000px">
              <Table variant="striped" colorScheme="teal">
                <Thead>
                  <Tr>
                    <Th>Email</Th>
                    <Th>Username</Th>
                    <Th>Expiration Date</Th>
                    <Th>Max Budget</Th>
                    <Th>Min Profit Percentage</Th>
                    <Th>Max Profit Percentage</Th>
                    <Th>Target Strikes</Th>
                    <Th>Tickers Calls</Th>
                    <Th>Tickers Puts</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.body.latestUniqueFormParams.map((user, index) => (
                    <Tr key={index}>
                      <Td>{user.email}</Td>
                      <Td>{user.username}</Td>
                      <Td>
                        <EditableCell
                          value={user.expirationDate}
                          onChange={(value) =>
                            handleValueChange(index, "expirationDate", value)
                          }
                        />
                      </Td>

                      <Td>
                        <EditableCell
                          value={user.maxBudget}
                          onChange={(value) =>
                            handleValueChange(index, "maxBudget", value)
                          }
                        />
                      </Td>
                      <Td>
                        {" "}
                        <EditableCell
                          value={user.minProfitPercentage}
                          onChange={(value) =>
                            handleValueChange(
                              index,
                              "minProfitPercentage",
                              value
                            )
                          }
                        />
                      </Td>
                      <Td>
                        <EditableCell
                          value={user.maxProfitPercentage}
                          onChange={(value) =>
                            handleValueChange(
                              index,
                              "maxProfitPercentage",
                              value
                            )
                          }
                        />
                      </Td>
                      <Td>
                        <EditableCell
                          value={user.targetStrikes}
                          onChange={(value) =>
                            handleValueChange(index, "targetStrikes", value)
                          }
                        />
                      </Td>
                      <Td whiteSpace="normal" overflowWrap="break-word">
                        <EditableCell
                          value={
                            user?.tickersCalls
                              ? user.tickersCalls.join(", ")
                              : ""
                          }
                          onChange={(value) =>
                            handleValueChange(index, "tickersCalls", value)
                          }
                          cell="tickersCalls"
                        />
                      </Td>
                      <Td whiteSpace="normal" overflowWrap="break-word">
                        <EditableCell
                          value={
                            user?.tickersPuts ? user.tickersPuts.join(", ") : ""
                          }
                          onChange={(value) =>
                            handleValueChange(index, "tickersPuts", value)
                          }
                          cell="tickersPuts"
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </>
      )}
    </Flex>
  )
}

export default DashboardLatestUsersParams
