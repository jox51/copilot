"use client"
import { Box, Heading, Text, Divider, VStack } from "@chakra-ui/react"

export default function TermsOfService() {
  return (
    <Box p={8} maxWidth="800px" mx="auto">
      <Heading mb={4}>Option Copilot Terms of Service</Heading>
      <Divider mb={4} />

      <VStack align="start" spacing={4}>
        <Heading size="md">1. Acceptance of Terms</Heading>
        <Text>
          By accessing or using Option Copilot, you agree to comply with and be
          bound by these Terms of Service.
        </Text>

        <Heading size="md">2. Modifications</Heading>
        <Text>
          We may modify these terms at any time without notice. It&apos;s your
          responsibility to review the terms regularly.
        </Text>

        <Heading size="md">3. Use of the Service</Heading>
        <Text>
          You agree not to misuse the Option Copilot service or help anyone else
          to do so.
        </Text>

        <Heading size="md">4. Termination</Heading>
        <Text>
          We reserve the right to suspend or terminate your access to Option
          Copilot at our sole discretion without notice for conduct that we
          believe violates these terms or is harmful to other users, us, or
          third parties, or for any other reason.
        </Text>

        <Heading size="md">5. Limitation of Liability</Heading>
        <Text>
          Option Copilot shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages, or any loss of profits or
          revenues.
        </Text>

        <Heading size="md">6. Governing Law</Heading>
        <Text>
          These terms shall be governed by the laws of the state in which your
          company is registered, without regard to its conflict of law
          provisions.
        </Text>

        <Heading size="md">7. Contact</Heading>
        <Text>For any questions regarding these terms, please contact us.</Text>
      </VStack>
    </Box>
  )
}
