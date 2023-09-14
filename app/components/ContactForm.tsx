"use client"

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link
} from "@chakra-ui/react"
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail
} from "react-icons/md"
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs"
import { FaTwitter } from "react-icons/fa"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrgwkyaz")
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <Container
      bg={"linear-gradient(135deg, #ebf1eb, #24bd2b)"}
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        w="full"
      >
        <Box
          bg="gray.800"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
          flex={{ md: 0.3 }}
          mb={{ base: 4, md: 0 }}
        >
          <Heading>Contact</Heading>
          <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
            Fill up the form below to contact
          </Text>
          <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
            <VStack pl={0} spacing={3} alignItems="flex-start">
              <Button
                size="md"
                height="48px"
                width="250px"
                variant="ghost"
                color="#DCE2FF"
                _hover={{ border: "2px solid green" }}
                leftIcon={<FaTwitter color="green" size="20px" />}
              >
                <Link href="https://twitter.com/SleepMoneyMaker" isExternal>
                  SleepMoneyMaker
                </Link>
              </Button>
              <Button
                size="md"
                height="48px"
                width="250px"
                variant="ghost"
                color="#DCE2FF"
                _hover={{ border: "2px solid green" }}
                leftIcon={<MdEmail color="green" size="20px" />}
              >
                <Link href="mailto:support@optioncopilot.io" isExternal>
                  support@copilot.io
                </Link>
              </Button>
            </VStack>
          </Box>
        </Box>

        <Box
          as={"form"}
          bg="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
          flex={{ md: 0.7 }}
          maxW={{ md: "600px" }} // Set a maximum width for medium and larger screens
          onSubmit={handleSubmit}
        >
          <VStack spacing={5} w="full" align="start">
            <FormControl id="name">
              <FormLabel>Your Name</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none">
                  <BsPerson color="gray.800" />
                </InputLeftElement>
                <Input
                  type="text"
                  name="name"
                  size="md"
                  focusBorderColor="green.500"
                />
              </InputGroup>
            </FormControl>
            <FormControl id="email">
              <FormLabel>E-Mail</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none">
                  <MdOutlineEmail color="gray.800" />
                </InputLeftElement>
                <Input
                  type="email"
                  name="email"
                  size="md"
                  focusBorderColor="green.500"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  style={{ color: "red" }}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea
                borderColor="gray.300"
                _hover={{
                  borderRadius: "gray.300"
                }}
                placeholder="message"
                focusBorderColor="green.500"
                resize={"both"}
                name="message"
                minLength={10}
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                style={{ color: "red" }}
              />
            </FormControl>

            <Button
              type="submit"
              isLoading={state.submitting}
              variant="solid"
              bg="green.500"
              color="white"
              _hover={{}}
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Container>
  )
}
