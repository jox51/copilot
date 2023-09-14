"use client"

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image
} from "@chakra-ui/react"

interface CardProps {
  name: string
  email: string
  joinedDate: string
}

export default function CustomerCard({ name, email, joinedDate }: CardProps) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"730px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box rounded={"lg"} mt={-12} pos={"relative"}></Box>
        <Stack pt={10} align={"start"}>
          <Text color={"gray.500"} fontSize={"2xl"} textTransform={"uppercase"}>
            <Text
              color={"black"}
              textTransform={"none"}
              as={"span"}
              fontWeight={"bold"}
            >
              Name:
            </Text>{" "}
            {name}
          </Text>
          <Heading color={"gray.500"} fontSize={"2xl"} fontFamily={"body"}>
            <Text
              color={"black"}
              textTransform={"none"}
              as={"span"}
              fontWeight={"bold"}
            >
              Email:
            </Text>{" "}
            {email}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text color={"gray.500"} fontSize={"2xl"}>
              <Text
                color={"black"}
                textTransform={"none"}
                as={"span"}
                fontWeight={"bold"}
              >
                Date Joined:
              </Text>{" "}
              {new Date(joinedDate).toLocaleDateString()}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}
