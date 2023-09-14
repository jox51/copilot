"use client"

import { Container, Heading, Text, Box, Link, VStack } from "@chakra-ui/react"

function CookiesPolicy() {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={6} align="start">
        <Heading as="h1">Cookies Policy of Option Copilot</Heading>
        <Text>Last updated: 09-06-2023</Text>
        <Text>
          Option Copilot (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;)
          uses cookies on the Option Copilot website (the &quot;Service&quot;).
          By using the Service, you consent to the use of cookies.
        </Text>
        <Text>
          Our Cookies Policy explains what cookies are, how we use cookies, how
          third-parties we may partner with may use cookies on the Service, your
          choices regarding cookies, and further information about cookies.
        </Text>
        <Heading as="h2" size="lg">
          What are cookies?
        </Heading>
        <Text>
          Cookies are small pieces of text sent by your web browser by a website
          you visit. A cookie file is stored in your web browser and allows the
          Service or a third-party to recognize you and make your next visit
          easier and the Service more useful to you.
        </Text>
        <Text>
          Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies.
          Persistent cookies remain on your personal computer or mobile device
          when you go offline, while session cookies are deleted as soon as you
          close your web browser.
        </Text>
        <Heading as="h2" size="lg">
          How Option Copilot uses cookies
        </Heading>
        <Text>
          When you use and access the Service, we may place several cookies
          files in your web browser.
        </Text>
        <Text>We use cookies for the following purposes:</Text>
        <Box pl={5}>
          <Text>
            - Session Management: To operate our Service. For example, they
            allow you to log in to secure areas of our website.
          </Text>
          <Text>
            - Preferences: To remember information that changes the way the
            Service behaves or looks, such as your preferred language or the
            region you are in.
          </Text>
          <Text>
            - Analytics: To help us understand how you use the Service, and how
            often, so we can improve it to deliver a better experience for our
            users.
          </Text>
          <Text>
            - Advertising: To make advertising more engaging to users and more
            valuable to publishers and advertisers.
          </Text>
        </Box>
        <Heading as="h2" size="lg">
          Third-party cookies
        </Heading>
        <Text>
          In addition to our own cookies, we may also use various third-party
          cookies to report usage statistics of the Service, deliver
          advertisements on and through the Service, and so on.
        </Text>
        <Heading as="h2" size="lg">
          What are your choices regarding cookies
        </Heading>
        <Text>
          If you&apos;d like to delete cookies or instruct your web browser to
          delete or refuse cookies, please visit the help pages of your web
          browser.
        </Text>
        <Text>
          Please note, however, that if you delete cookies or refuse to accept
          them, you might not be able to use all of the features we offer, you
          may not be able to store your preferences, and some of our pages might
          not display properly.
        </Text>
        <Heading as="h2" size="lg">
          Where can you find more information about cookies
        </Heading>
        <Text>
          You can learn more about cookies and the following third-party
          websites:
        </Text>
        <Box pl={5}>
          <Text>
            - AllAboutCookies:{" "}
            <Link
              href="http://www.allaboutcookies.org/"
              isExternal
              color="blue.500"
            >
              http://www.allaboutcookies.org/
            </Link>
          </Text>
          <Text>
            - Network Advertising Initiative:{" "}
            <Link
              href="http://www.networkadvertising.org/"
              isExternal
              color="blue.500"
            >
              http://www.networkadvertising.org/
            </Link>
          </Text>
        </Box>
      </VStack>
    </Container>
  )
}

export default CookiesPolicy
