import { Box, Text, VStack } from "@chakra-ui/react"
import useLatestParamsStore from "../store/latestParamsStore"

interface LatestParamsProps {
  email: string
  username: string
  tickersCalls: string[]
  tickersPuts: string[]
  expirationDate: string
  minProfitPercentage: string
  maxProfitPercentage: string
  targetStrikes: string
  maxBudget: string
}

function UserParametersCard(props: LatestParamsProps) {
  return (
    <Box
      w="md"
      p={4}
      boxShadow="xl"
      borderRadius="lg"
      bg="white"
      overflow="hidden"
    >
      <VStack align="start" spacing={3}>
        <Text>
          <strong>Tickers Calls:</strong> {props.tickersCalls.join(", ")}
        </Text>
        <Text>
          <strong>Tickers Puts:</strong> {props.tickersPuts.join(", ")}
        </Text>
        <Text>
          <strong>Expiration Date:</strong> {props.expirationDate}
        </Text>
        <Text>
          <strong>Min Profit Percentage:</strong> {props.minProfitPercentage}
        </Text>
        <Text>
          <strong>Max Profit Percentage:</strong> {props.maxProfitPercentage}
        </Text>
        <Text>
          <strong>Target Strike %:</strong> {props.targetStrikes}
        </Text>
        <Text>
          <strong>Max Budget:</strong> {props.maxBudget}
        </Text>
      </VStack>
    </Box>
  )
}

export default UserParametersCard
