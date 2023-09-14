"use client"
import React, { useState, useEffect } from "react"
import { Flex, FormControl, FormHelperText, FormLabel } from "@chakra-ui/react"
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag
} from "@choc-ui/chakra-autocomplete"
import useOptionsStore from "../store/optionsStore"

interface Symbol {
  symbol: string
}

interface Tag {
  label: string
  onRemove: () => void
}

interface StockSymbol {
  name: string
  displaySymbol: string
  symbol: string
  type: string
}

interface SymbolData {
  symbol: string
  name: string
}

interface AutoCompleteInputProps {
  invalidFields?: Record<string, boolean>
  validateFields?: () => void
}

const AutoCompleteInputBoxCalls: React.FC<AutoCompleteInputProps> = ({
  invalidFields,
  validateFields
}) => {
  const [symbols, setSymbols] = useState<SymbolData[]>([])
  const [inputValue, setInputValue] = useState<string>("")
  const { data, setData } = useOptionsStore()

  useEffect(() => {
    if (inputValue.length > 1) {
      // Fetch symbols when input length is greater than 2
      fetch(`https://ticker-2e1ica8b9.now.sh/keyword/${inputValue}`)
        .then((response) => response.json())
        .then((data) => {
          console.log({ data })
          const fetchedSymbols = data.map((item: StockSymbol) => {
            return {
              symbol: item.symbol,
              name: item.name
            }
          })
          setSymbols(fetchedSymbols)
        })
    }
  }, [inputValue])

  const handleSelect = (vals: string[]) => {
    setData({ tickersCalls: vals })
    if (validateFields) validateFields()
    setInputValue("") // Clear the input value after selection
    setSymbols([])
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    setSymbols([])
  }

  return (
    <Flex w="100%">
      <FormControl
        w="full"
        border="1px"
        borderColor={invalidFields?.tickers ? "red" : "gray.200"}
        borderRadius={8}
      >
        <AutoComplete
          openOnFocus
          multiple
          // onChange={(vals: string[]) => setData({ tickersCalls: vals })}
          onChange={handleSelect}
          maxSuggestions={4}
        >
          <AutoCompleteInput
            variant="outline"
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            //   setInputValue(e.target.value)
            // }

            onChange={handleInput}
            placeholder="Enter a stock name or ticker"
          >
            {({ tags }: { tags: Tag[] }) =>
              tags.map((tag, tid) => (
                <AutoCompleteTag
                  key={tid}
                  label={tag.label}
                  onRemove={tag.onRemove}
                />
              ))
            }
          </AutoCompleteInput>
          <AutoCompleteList>
            {symbols.map((symbolData, cid) => (
              <AutoCompleteItem
                key={`option-${cid}`}
                value={symbolData.symbol}
                label={`${symbolData.name} (${symbolData.symbol})`} // Display the name and symbol in the dropdown
                textTransform="capitalize"
              >
                {symbolData.symbol} ({symbolData.name})
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </FormControl>
    </Flex>
  )
}

export default AutoCompleteInputBoxCalls
