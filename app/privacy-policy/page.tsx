"use client"
import { Box, Heading, Text, Divider, VStack } from "@chakra-ui/react"

export default function PrivacyPolicy() {
  return (
    <Box p={8} maxWidth="800px" mx="auto">
      <Heading mb={4}>Option Copilot Privacy Policy</Heading>
      <Divider mb={4} />

      <VStack align="start" spacing={4}>
        <Heading size="md">1. Introduction</Heading>
        <Text>
          Welcome to Option Copilot. This Privacy Policy outlines our practices
          regarding the collection, use, and sharing of your personal
          information.
        </Text>

        <Heading size="md">2. Data Collection</Heading>
        <Text>
          We collect data to operate effectively and provide you with the best
          experiences with our product. The data we collect depends on the
          context of your interactions with Option Copilot and the choices you
          make.
        </Text>

        <Heading size="md">3. Use of Data</Heading>
        <Text>
          We use the data we collect to operate our business, improve our
          product, develop new features, and to communicate with you.
        </Text>

        <Heading size="md">4. Data Sharing</Heading>
        <Text>
          We do not share your personal data with third parties for their direct
          marketing purposes without your consent.
        </Text>

        <Heading size="md">5. Cookies</Heading>
        <Text>
          We use cookies to store and access information such as unique IDs to
          deliver, maintain, and improve our services and ads.
        </Text>

        <Heading size="md">6. Changes to this Policy</Heading>
        <Text>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </Text>

        <Heading size="md">7. Contact Us</Heading>
        <Text>
          If you have any questions about this Privacy Policy, please contact
          us.
        </Text>
      </VStack>
    </Box>
  )
}
