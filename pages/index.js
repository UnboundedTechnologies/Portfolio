import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

import youtube from '../public/images/links/youtube.png'
import fatalis from '../public/images/projects/fatalis.png'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a full-stack developer based in Paris, France!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Saïd AISSANI
          </Heading>
          <p>Digital Creator ( Developer / Designer / Music Producer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/aissani.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Saïd is a freelance and full-stack developer based in Paris with a passion for building digital services/products.
          He loves to create and launch products, from planning and designing all the way to solving real-life problems with code.
          Currently, he is working on his last product called{' '}
          <NextLink href="/projects/fatalis" passHref scroll={false}>
            <Link _hover={{ textDecoration: "none" }}>Fatalis Dashboard</Link>
          </NextLink>
          .
        </Paragraph>
        <Paragraph>
          He is also a music producer working with several artists from around him in France and even with some people in the United States.
          He publishes instrumentals on his YouTube
          channel called &quot;
          <NextLink href="https://www.youtube.com/channel/UCiD7brqhCib5f2eJ3y_go_w" passHref>
            <Link target="_blank" _hover={{ textDecoration: "none" }}>Kyto Beats</Link>
          </NextLink>
          &quot; which is his stage name.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Clichy-la-Garenne, France
        </BioSection>
        <BioSection>
          <BioYear>2018 to present</BioYear>
          Completing an Engineering degree in Computer Science at ESIEE Paris
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests :
        </Heading>
        <Paragraph>
          {' '}
          <Link href="https://www.youtube.com/channel/UCiD7brqhCib5f2eJ3y_go_w" target="_blank" _hover={{ textDecoration: "none" }}>
            Music
          </Link>
          , Travel, {' '}
          <Link href="http://www.ffjudo.org/extranet/listehautgrades/liste_hauts_grades_dep.asp?Page=1&dis=0&grade=1&ndep=XX1177" target="_blank" _hover={{ textDecoration: "none" }}>
            JUDO & JUJITSU
          </Link> {' '}
          (Search for my name in the JUDO and JUJITSU database)
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/UnboundedTechnologies" target="_blank" _hover={{ textDecoration: "none" }}>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @UnboundedTechnologies
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/said-aissani/" target="_blank" _hover={{ textDecoration: "none" }}>
              <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
              >
                @said-aissani
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/kyto_beats" target="_blank" _hover={{ textDecoration: "none" }}>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @Kyto_Beats
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCiD7brqhCib5f2eJ3y_go_w"
            title="Kyto Beats"
            thumbnail={youtube}
          >
            My YouTube channel
          </GridItem>

          <GridItem
            href="https://fatalis-dashboard.vercel.app/"
            title="Fatalis Dashboard"
            thumbnail={fatalis}

          >
            A dashboard to track, analyze, and display KPIs, metrics, and critical data points
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/beats" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular beats
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
