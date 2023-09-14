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

export const SearchResultsTable = () => {
  const data = [
    {
      ticker: "AAPL",
      optionType: "Call",
      strike: "150.25",
      bid: "0.17",
      profit: "0.25"
    },
    {
      ticker: "MSFT",
      optionType: "Call",
      strike: "220.75",
      bid: "0.22",
      profit: "0.33"
    },
    {
      ticker: "GOOGL",
      optionType: "Call",
      strike: "2800.5",
      bid: "0.19",
      profit: "0.17"
    }
  ]
  const dataColor = useColorModeValue("white", "gray.800")
  const bg = useColorModeValue("white", "gray.800")
  const bg2 = useColorModeValue("gray.100", "gray.700")

  const gridTemplateColumns = "repeat(5, 1fr)"

  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Stack direction={{ base: "column" }} bg={{ md: bg }} shadow="lg">
        <Flex direction={{ base: "row", md: "column" }} bg={dataColor}>
          <SimpleGrid
            spacingY={3}
            columns={{ base: 1, md: 5 }}
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
            <span style={{ textAlign: "left" }}>Bid</span>
            <span style={{ textAlign: "left" }}>Profit(%)</span>

            {/* <chakra.span textAlign={{ md: "right" }}>Actions</chakra.span> */}
          </SimpleGrid>
          {data.map((tickers, pid) => {
            const { ticker, optionType, strike, bid, profit } = tickers
            return (
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 5 }}
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
                <span>{bid}</span>
                <span>{profit}</span>
              </SimpleGrid>
            )
          })}
        </Flex>
      </Stack>
    </Flex>
  )
}
