"use client"
import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack
} from "@chakra-ui/react"

export default function AboutUs() {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading textAlign={"center"} as="h1" fontSize={"7xl"}>
        About Us
      </Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Image
            borderRadius="lg"
            src={
              "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
            }
            alt="Company Image"
            objectFit="contain"
            boxSize={"600px"}
          />
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Heading fontSize="xl" marginTop="2">
            Our Mission
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
            At Option Copilot, we leverage the power of data science and machine
            learning to provide our clients with unparalleled trading insights.
            Our goal is to empower every trader to make informed decisions and
            achieve their financial goals.
          </Text>
        </Box>
      </Box>

      {/* MEET THE TEAM SECTION */}
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Image
            borderRadius="lg"
            src={"/trader.jpg"}
            alt="Team Member Name"
            objectFit="cover"
            boxSize={"600px"}
          />
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Heading fontSize="xl" marginTop="2">
            Sleep Money Maker
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
            10 Year data scientist who developed multiple trading programs for
            major trading firms. Now I bring my years of experience and
            knowlegde to you.
          </Text>
        </Box>
      </Box>

      {/* OUR JOURNEY SECTION */}
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Image
            borderRadius="lg"
            src={"/journey.jpg"}
            alt="journey image"
            objectFit="cover"
            boxSize={"600px"}
          />
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
            <Heading as="h2">Our Journey</Heading>
            <Text as="p" fontSize="lg">
              From our humble beginnings in 2022 to becoming a leading name in
              the trading industry, our journey has been nothing short of
              remarkable. We started with a vision to revolutionize trading with
              the power of technology, and today, we&apos;re re proud to have
              made a significant impact in the lives of countless traders
              worldwide.
            </Text>
            <Text as="p" fontSize="lg">
              Over the years, we&apos;ve continuously evolved, adapting to the
              changing market dynamics and embracing innovation at every step.
              Our commitment to excellence and our passion for empowering
              traders remain unwavering.
            </Text>
            <Text as="p" fontSize="lg">
              As we look to the future, we&apos;re excited about the endless
              possibilities that lie ahead. With our dedicated team,
              cutting-edge technology, and loyal community, we&apos;re confident
              in our journey towards even greater heights.
            </Text>
          </VStack>
        </Box>
      </Box>

      {/* OUR JOURNEY SECTION */}
      {/* <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Our Journey</Heading>
        <Text as="p" fontSize="lg">
          From our humble beginnings in 2022 to becoming a leading name in the
          trading industry, our journey has been nothing short of remarkable. We
          started with a vision to revolutionize trading with the power of
          technology, and today, we&apos;re re proud to have made a significant
          impact in the lives of countless traders worldwide.
        </Text>
        <Text as="p" fontSize="lg">
          Over the years, we&apos;ve continuously evolved, adapting to the
          changing market dynamics and embracing innovation at every step. Our
          commitment to excellence and our passion for empowering traders remain
          unwavering.
        </Text>
        <Text as="p" fontSize="lg">
          As we look to the future, we&apos;re excited about the endless
          possibilities that lie ahead. With our dedicated team, cutting-edge
          technology, and loyal community, we&apos;re confident in our journey
          towards even greater heights.
        </Text>
      </VStack> */}
    </Container>
  )
}
