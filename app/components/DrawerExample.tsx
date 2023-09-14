import React, { ReactEventHandler, use, useEffect, useState } from "react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Box,
  Flex,
  Heading,
  useToast
} from "@chakra-ui/react"
import OptionInputFields from "./OptionInputFields"
import useOptionsStore from "../store/optionsStore"

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const openBtnRef = React.useRef(null) // Initialized with null
  const closeBtnRef = React.useRef(null) // Separate ref for the close button
  const { data, setData } = useOptionsStore()
  const [invalidFields, setInvalidFields] = useState<Record<string, boolean>>(
    {}
  )
  const [completionPercentage, setCompletionPercentage] = useState<number>(0)
  const toast = useToast()

  const validateFields = () => {
    let errors: Record<string, boolean> = {}
    let validFieldCount = 0
    const totalFields = 7 // Adjust based on your total number of fields

    if (!data.tickersCalls.length && !data.tickersPuts.length) {
      errors.tickers = true
    } else {
      validFieldCount++
    }

    if (!data.recs) {
      errors.recs = true
    } else {
      validFieldCount++
    }

    if (!data.expirationDate) {
      errors.expirationDate = true
    } else {
      validFieldCount++
    }
    if (!data.minProfitPercentage) {
      errors.minProfitPercentage = true
    } else {
      validFieldCount++
    }
    if (!data.maxProfitPercentage) {
      errors.maxProfitPercentage = true
    } else {
      validFieldCount++
    }
    if (!data.targetStrikes) {
      errors.targetStrikes = true
    } else {
      validFieldCount++
    }
    if (!data.maxBudget) {
      errors.maxBudget = true
    } else {
      validFieldCount++
    }

    // ... add similar checks for other fields ...

    setInvalidFields(errors)
    setCompletionPercentage((validFieldCount / totalFields) * 100)
  }

  useEffect(() => {
    validateFields()
  }, [data])

  const handleSubmit = async () => {
    const apiUrl = "/api/portfolio/"
    // validateFields()

    // Send the data to the backend
    console.log({ completionPercentage })

    if (completionPercentage === 100) {
      const response = await fetch(apiUrl, {
        method: "POST", // or 'GET' based on your requirement
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()
      console.log({ result })
      setData({
        tickersCalls: [],
        tickersPuts: [],
        expirationDate: "",
        minProfitPercentage: "",
        maxProfitPercentage: "",
        targetStrikes: "",
        maxBudget: ""
      })
      onClose()
    }
    toast({
      position: "top-right",
      title: "Parameters Submitted",
      description: `Your parameters have been submitted. Will contact you when the portfolio is ready.`,
      status: "success",
      duration: 9000,
      isClosable: true
    })
  }

  return (
    <>
      <Box
        w="sm"
        p={4}
        boxShadow="xl"
        borderRadius="lg"
        bg="white"
        overflow="hidden"
        mb={4}
      >
        <Heading
          textAlign={"center"}
          color={"gray.500"}
          fontSize={"xl"}
          fontFamily={"body"}
          mb={2}
        >
          Enter New Parameters
        </Heading>
        <Flex justifyContent="center" gap={4}>
          <Button ref={openBtnRef} colorScheme="teal" onClick={onOpen}>
            Open
          </Button>
          <Button
            ref={closeBtnRef}
            colorScheme="teal"
            onClick={(e) => {
              e.stopPropagation() // Prevent event propagation
              onClose()
            }}
            zIndex={2000} // Set a high z-index
          >
            Close
          </Button>
        </Flex>
      </Box>

      <Box bg="green">
        <Drawer
          variant="alwaysOpen"
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          trapFocus={false}
          closeOnOverlayClick={false}
          blockScrollOnMount={false}
        >
          {/* <DrawerOverlay /> */}
          <DrawerContent zIndex="hide">
            <DrawerCloseButton position="absolute" top="5px" right="5px" />
            <DrawerHeader>Parameters</DrawerHeader>

            <DrawerBody>
              <OptionInputFields
                invalidFields={invalidFields}
                completionPercentage={completionPercentage}
                validateFields={validateFields}
              />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleSubmit} colorScheme="blue">
                Optimize Portfolio
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  )
}

export default DrawerExample
