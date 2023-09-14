"use client"
import { useState } from "react"
import { render } from "react-dom"
import { Box, Input, Text, VStack, Select, Progress } from "@chakra-ui/react"

import AutoCompleteInputBoxPuts from "./AutoCompleteInputPuts"
import AutoCompleteInputBoxCalls from "./AutoCompleteInputCalls"
import useOptionsStore from "../store/optionsStore"

interface OptionInputFieldsProps {
  invalidFields: Record<string, boolean>
  completionPercentage: number
  validateFields: () => void
}
function OptionInputFields({
  invalidFields,
  completionPercentage,
  validateFields
}: OptionInputFieldsProps) {
  const { data, setData } = useOptionsStore()

  let progressColor = "red" // default color

  if (completionPercentage > 0 && completionPercentage <= 14) {
    progressColor = "red"
  } else if (completionPercentage > 14 && completionPercentage <= 28) {
    progressColor = "red"
  } else if (completionPercentage > 28 && completionPercentage <= 42) {
    progressColor = "orange"
  } else if (completionPercentage > 42 && completionPercentage <= 57) {
    progressColor = "orange"
  } else if (completionPercentage > 57 && completionPercentage <= 71) {
    progressColor = "yellow"
  } else if (completionPercentage > 71 && completionPercentage < 100) {
    progressColor = "yellow"
  } else if (completionPercentage === 100) {
    progressColor = "green"
  }
  return (
    <VStack spacing={4} align="start">
      <Box w="100%">
        <Text mb={2}>Tickers (Puts):</Text>
        <AutoCompleteInputBoxPuts
          invalidFields={invalidFields}
          validateFields={validateFields}
        />
      </Box>

      <Box w="100%">
        <Text mb={2}>Tickers (Calls):</Text>
        <AutoCompleteInputBoxCalls
          invalidFields={invalidFields}
          validateFields={validateFields}
        />
      </Box>

      <Box w="100%">
        <Text mb={2}>Copilot Recommendations:</Text>
        <Select
          placeholder="Select option"
          value={data.recs}
          onChange={(e) => setData({ recs: e.target.value })}
          required
          border="1px"
          borderColor={invalidFields?.tickers ? "red" : "gray.200"}
          borderRadius={8}
        >
          <option value="recs">CoPilot Recommendations</option>
          <option value="noRecs">No Copilot Recommendations</option>
        </Select>
      </Box>

      {/* <Box w="100%">
        <Text mb={2}>Option Types:</Text>
        <Input
          value={data.optionTypes}
          onChange={(e) => setData({ optionTypes: e.target.value })}
          placeholder="Call, Put"
        />
      </Box> */}

      <Box w="100%">
        <Text mb={2}>Expiration Date:</Text>
        <Input
          type="date"
          value={data.expirationDate}
          onChange={(e) => setData({ expirationDate: e.target.value })}
          required
          border="1px"
          borderColor={invalidFields?.expirationDate ? "red" : "gray.200"}
          borderRadius={8}
        />
      </Box>

      <Box w="100%">
        <Text mb={2}>Minimum Profit Percentage:</Text>
        <Input
          placeholder="10%"
          value={data.minProfitPercentage}
          onChange={(e) => setData({ minProfitPercentage: e.target.value })}
          required
          border="1px"
          borderColor={invalidFields?.minProfitPercentage ? "red" : "gray.200"}
          borderRadius={8}
        />
      </Box>

      <Box w="100%">
        <Text mb={2}>Maximum Profit Percentage:</Text>
        <Input
          placeholder="50%"
          value={data.maxProfitPercentage}
          onChange={(e) => setData({ maxProfitPercentage: e.target.value })}
          required
          border="1px"
          borderColor={invalidFields?.maxProfitPercentage ? "red" : "gray.200"}
          borderRadius={8}
        />
      </Box>

      <Box w="100%">
        <Text mb={2}>Target Strike %:</Text>
        <Input
          placeholder="10% OTM, 15%OTM"
          value={data.targetStrikes}
          onChange={(e) => setData({ targetStrikes: e.target.value })}
          required
          border="1px"
          borderColor={invalidFields?.targetStrikes ? "red" : "gray.200"}
          borderRadius={8}
        />
      </Box>

      <Box w="100%">
        <Text mb={2}>Maximum Budget:</Text>
        <Input
          placeholder="$1000"
          value={data.maxBudget}
          onChange={(e) => setData({ maxBudget: e.target.value })}
          required
          border="1px"
          borderColor={invalidFields?.maxBudget ? "red" : "gray.200"}
          borderRadius={8}
        />
      </Box>

      <Box w="100%">
        <Text mb={2}>Progress</Text>

        <Progress
          hasStripe
          value={completionPercentage}
          colorScheme={progressColor}
          border="1px"
          borderColor={"gray.200"}
          borderRadius="md"
        />
      </Box>
    </VStack>
  )
}

export default OptionInputFields
