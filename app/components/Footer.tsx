"use client"

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue
} from "@chakra-ui/react"
import Image from "next/image"
import { ReactNode } from "react"

const Logo = (props: any) => {
  return <Image src="/logo.png" alt="Logo" width={40} height={40} />
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Box as="a" href={"#hero"}>
              Overview
            </Box>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Box as="a" href={"#features"}>
                Features
              </Box>
              <Tag
                size={"sm"}
                bg={useColorModeValue("green.300", "green.800")}
                ml={2}
                color={"white"}
              >
                New
              </Tag>
            </Stack>

            <Box as="a" href={"#price"}>
              Pricing
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"/about"}>
              About Us
            </Box>

            <Box as="a" href={"/contact"}>
              Contact Us
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={"/cookie-policy"}>
              Cookies Policy
            </Box>
            <Box as="a" href={"/privacy-policy"}>
              Privacy Policy
            </Box>
            <Box as="a" href={"/terms-of-service"}>
              Terms of Service
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Box as="a" href={"#"}>
              Facebook
            </Box>
            <Box as="a" href={"https://twitter.com/SleepMoneyMaker"}>
              Twitter
            </Box>
            <Box as="a" href={"#"}>
              LinkedIn
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023 DomPeel82. All rights reserved
        </Text>
      </Box>
    </Box>
  )
}
