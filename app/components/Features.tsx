"use client"
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue
} from "@chakra-ui/react"
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from "react-icons/io5"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { ReactElement } from "react"
import { Divider } from "@chakra-ui/react"

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function Features() {
  return (
    <>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
              id="features"
            >
              Our Edge
            </Text>
            <Heading>Trade with Data-Driven Insights</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Harness the power of data science and machine learning to make
              informed trading decisions. Be the casino, not the gambler.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={"yellow.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Data-Driven Picks"}
              />
              <Feature
                icon={
                  <Icon
                    as={FaRegMoneyBillAlt}
                    color={"green.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Optimized Strategies"}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Market Trend Analysis"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={"/feature_image.jpg"}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Divider />
    </>
  )
}
