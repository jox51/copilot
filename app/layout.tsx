import { useState } from "react"
import type { Metadata } from "next"
import { Box, useBreakpointValue } from "@chakra-ui/react"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"

import { ChakraProviderWrapper } from "./components/ChakraProviderWrapper"
import NavbarChakra from "./components/NavbarChakra"
import Footer from "./components/Footer"
import AuthProvider from "./context/AuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Option Copilot",
  description: "Top Options Trading Assistant"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ChakraProviderWrapper>
            <NavbarChakra />
            {children}
            <Footer />
          </ChakraProviderWrapper>
        </AuthProvider>
      </body>
    </html>
  )
}
