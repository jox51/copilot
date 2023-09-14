import React from "react"
import {
  Button,
  Flex,
  SimpleGrid,
  Stack,
  chakra,
  useColorModeValue,
  Grid
} from "@chakra-ui/react"

export const OptimizedPortfolioTable = () => {
  const data = [
    {
      ticker: "AAPL",
      optionType: "Call",
      strike: "150.25",
      maxContracts: "2",
      premium: "18",
      collateral: "5700",
      intervalLow: "57.8",
      intervalHigh: "58.9",
      rsi: "25.3"
    },
    {
      ticker: "MSFT",
      optionType: "Call",
      strike: "220.75",
      maxContracts: "2",
      premium: "8",
      collateral: "6000",
      intervalLow: "57.8",
      intervalHigh: "58.9",
      rsi: "64.8"
    },
    {
      ticker: "GOOGL",
      optionType: "Call",
      strike: "2800.5",
      maxContracts: "2",
      premium: "28",
      collateral: "10000",
      intervalLow: "57.8",
      intervalHigh: "58.9",
      rsi: "65.3"
    }
  ]
  const dataColor = useColorModeValue("white", "gray.800")
  const bg = useColorModeValue("white", "gray.800")
  const bg2 = useColorModeValue("gray.100", "gray.700")

  const gridTemplateColumns = "repeat(9, 1fr)"

  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{ base: "column" }}
        w="100%"
        bg={{ md: bg }}
        shadow="lg"
      >
        <Flex direction={{ base: "row", md: "column" }} bg={dataColor}>
          <SimpleGrid
            spacingY={3}
            columns={{ base: 1, md: 9 }}
            w={{ base: 120, md: "full" }}
            textTransform="uppercase"
            bg={bg2}
            color={"gray.500"}
            py={{ base: 1, md: 4 }}
            px={{ base: 2, md: 10 }}
            fontSize="md"
            fontWeight="hairline"
            templateColumns={gridTemplateColumns}
          >
            <span style={{ textAlign: "left" }}>Ticker</span>
            <span style={{ textAlign: "left" }}>Type</span>
            <span style={{ textAlign: "left" }}>Strike</span>
            <span style={{ textAlign: "left" }}>Contracts</span>
            <span style={{ textAlign: "left" }}>Premium</span>
            <span style={{ textAlign: "left" }}>Collateral</span>
            <span style={{ textAlign: "left" }}>Interval Low</span>
            <span style={{ textAlign: "left" }}>Interval High</span>
            <span style={{ textAlign: "center" }}>RSI</span>

            {/* <chakra.span textAlign={{ md: "right" }}>Actions</chakra.span> */}
          </SimpleGrid>
          {data.map((tickers, pid) => {
            const {
              ticker,
              optionType,
              strike,
              maxContracts,
              premium,
              collateral,
              intervalLow,
              intervalHigh,
              rsi
            } = tickers
            return (
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 9 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
                key={pid}
                templateColumns={gridTemplateColumns}
              >
                <span>{ticker}</span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {optionType}
                </chakra.span>
                {/* <Flex justify={{ md: "end" }}>
                  <Button variant="solid" colorScheme="red" size="sm">
                    Delete
                  </Button>
                </Flex> */}
                <span>{strike}</span>
                <span>{maxContracts}</span>
                <span>{premium}</span>
                <span>{collateral}</span>
                <span>{intervalLow}</span>
                <span>{intervalHigh}</span>
                <span style={{ textAlign: "center" }}>{rsi}</span>
              </SimpleGrid>
            )
          })}
        </Flex>
      </Stack>
    </Flex>
  )
}
