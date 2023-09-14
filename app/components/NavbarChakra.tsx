"use client"
import React from "react"

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Avatar,
  Text
} from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai"
import Image from "next/image"
import Link from "next/link"
import { signIn, useSession, signOut } from "next-auth/react" // Importing the signIn function

export default function NavbarChakra() {
  const bg = useColorModeValue("white", "gray.800")
  const mobileNav = useDisclosure()
  const { data: session } = useSession()

  const image = session?.user?.image
  const role = session?.user?.role

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Image src="/logo.png" width={40} height={40} alt="logo" />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              Option Copilot
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button variant="ghost">
                <Link href="/#features">Features</Link>
              </Button>
              <Button variant="ghost">
                <Link href="/#pricing">Pricing</Link>
              </Button>

              {session && role !== "notRegistered" && (
                <Button variant="ghost">
                  <Link href="/customer">App</Link>
                </Button>
              )}

              {session && role === "admin" && (
                <Button variant="ghost">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              )}
              <Button variant="ghost">Company</Button>

              {!session && (
                <Button colorScheme="green" size="sm">
                  <Link href="/signin">Sign In</Link>
                </Button>
              )}

              {session && (
                <>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    Sign Out
                  </Button>

                  <Text>{session.user.role} </Text>

                  <Avatar size="md" src={image || undefined}></Avatar>
                </>
              )}
            </HStack>
            {/* <Button colorScheme="green" size="sm">
              <Link href="/signup">Get Started</Link>
            </Button> */}
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  <Link href="/#features">Features</Link>
                </Button>
                <Button w="full" variant="ghost">
                  <Link href="/#pricing">Pricing</Link>
                </Button>
                {session && role !== "notRegistered" && (
                  <Button w="full" variant="ghost">
                    <Link href="/customer">App</Link>
                  </Button>
                )}
                {session && role === "admin" && (
                  <Button variant="ghost" w="full">
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                )}

                <Button w="full" variant="ghost">
                  Company
                </Button>

                {!session && (
                  <Button colorScheme="green" size="sm" w="full">
                    <Link href="/signin">Sign In</Link>
                  </Button>
                )}

                {session && (
                  <>
                    <Button
                      w="full"
                      colorScheme="red"
                      size="sm"
                      onClick={() => signOut({ callbackUrl: "/" })}
                    >
                      Sign Out
                    </Button>

                    <Button w="full" colorScheme="red" size="sm">
                      {session.user.role}
                    </Button>

                    <Avatar size="md" src={image || undefined}></Avatar>
                  </>
                )}
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  )
}
