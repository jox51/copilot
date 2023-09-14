"use client"
import { Box, Heading, Text, Button, Center, Icon } from "@chakra-ui/react"
import { FaLock } from "react-icons/fa"
import { useRouter } from "next/navigation"

function UnauthorizedAccess() {
  const router = useRouter()
  return (
    <Center h="80vh" flexDirection="column">
      <Icon as={FaLock} boxSize="40px" mb={4} color="red.500" />
      <Heading size="lg" mb={2}>
        Unauthorized Access
      </Heading>
      <Text color="gray.500" mb={4}>
        Sorry, you don't have permission to view this page.
      </Text>
      <Button
        colorScheme="teal"
        onClick={() => {
          // Redirect to home or any other page
          // For example, using Next.js you'd do:
          router.push("/")
        }}
      >
        Go Back Home
      </Button>
    </Center>
  )
}

export default UnauthorizedAccess
