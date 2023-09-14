"use client"
import {
  Flex,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  Stack,
  Text,
  Image
} from "@chakra-ui/react"
import { signIn, useSession } from "next-auth/react" // Importing the signIn function
import { FaDiscord } from "react-icons/fa" // Importing the Discord icon

const SigninCard = () => {
  const { data: session } = useSession()
  console.log({ session })

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Center>
        <Stack spacing={4}>
          <VStack
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
            spacing={8}
          >
            <Flex flex={1} boxShadow={"md"}>
              <Image
                alt={"Discord Image"}
                objectFit={"cover"}
                src={"/discord_image.jpeg"}
              />
            </Flex>
            <Heading fontSize="2xl">Sign in to your account</Heading>
            <Text fontSize="md" textAlign="center">
              Clicking the button below will redirect you to Discord for
              authentication.
            </Text>
            <Button
              leftIcon={<FaDiscord />} // Discord icon
              colorScheme="blue"
              variant="solid"
              w="100%"
              onClick={() =>
                signIn("discord", {
                  callbackUrl: "http://localhost:3000/customer"
                })
              }
            >
              Sign in with Discord
            </Button>
            {/* <Link fontSize={{ base: "md", sm: "md" }}>
              Forgot password?
            </Link> */}
          </VStack>
        </Stack>
      </Center>
    </Flex>
  )
}

export default SigninCard
