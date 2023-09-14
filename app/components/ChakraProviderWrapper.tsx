"use client"
import React, { FC } from "react"
import { ChakraProvider } from "@chakra-ui/react"

interface Props {
  children: React.ReactNode
}

export function ChakraProviderWrapper({ children }: Props) {
  return <ChakraProvider>{children}</ChakraProvider>
}
