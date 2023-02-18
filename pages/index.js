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
  chakra, WrapItem, Wrap
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem, GridBadge } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoGoogle} from 'react-icons/io5'
import Image from 'next/image'

import youtube from '../public/images/links/youtube.png'
import fatalis from '../public/images/projects/fatalis.png'
import cloud from '../public/images/badges/cloud_engineering.png'
import data from '../public/images/badges/data_engineering.png'
import terraform from '../public/images/badges/terraform.png'

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
              width={100}
              height={100}
            />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" color='turquoise'>
            Summary
          </Heading>
          <Paragraph>
            Saïd is a freelance and full-stack developer based in Paris with a passion for building digital services/products.
            He loves to create and launch products, from planning and designing all the way to solving real-life problems with code.
            <br /><br />
            During his master’s degree at <BioYear>ESIEE Paris</BioYear> (French computer engineering school), he gained strong programming skills (Java, C/C#/C++, Python)
            and academic knowledge in cyber-security, cloud computing and machine/deep learning.
            <br /><br />
            Trilingual Arabic-English-French, he is a fast learner and comfortable working in a team and self-directed settings.
            <br /><br />
          </Paragraph>


          <Paragraph>
            He is also a music producer viewed by over 400k people.
            He publishes his work on his YouTube
            channel&nbsp;
            <NextLink
                href="https://www.youtube.com/channel/UCiD7brqhCib5f2eJ3y_go_w"
                passHref
                legacyBehavior>
              <Link color='blue.500' target="_blank" _hover={{ textDecoration: "none" }}>Kyto Beats</Link>
            </NextLink>
            .
            <br /><br />
          </Paragraph>

        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" color='turquoise'>
            Employment
          </Heading>

          <Heading fontSize='20px' color='blue.500'>
            Fullstack designer/developer in cloud computing
          </Heading>
          <Heading fontSize='20px' color='white'>- Groupe Renault<br /><br /></Heading>

          <BioYear>September 2020 - August 2023</BioYear>
          <Paragraph>
            • Application modelling by developing in java to adapt and optimise the user interfaces (UI) and the web service interface of the APIs
          </Paragraph>

          <Paragraph>
            • Writing user stories and designing data models
          </Paragraph>

          <Paragraph>
            • API design with the data consumers
            <br /><br />
          </Paragraph>

          <Heading fontSize='20px' color='blue.500'>
            Internship as part of the first year of the ESIEE preparatory course
          </Heading>
          <Heading fontSize='20px' color='white'>- ETBA Construction<br /><br /></Heading>

          <BioYear>July 2019</BioYear>
          <Paragraph>
            • Creation of a purchase order management platform
          </Paragraph>

          <Paragraph>
            • Debugging the raw material ordering application
          </Paragraph>

          <Paragraph>
            • Checking the stability of the company&apos;s network (Switches/Proxy)
            <br /><br />
          </Paragraph>

          <Heading fontSize='20px' color='blue.500'>
            Observation internship
          </Heading>
          <Heading fontSize='20px' color='white'>- Lognes Town Hall<br /><br /></Heading>

          <BioYear>November 2014</BioYear>
          <Paragraph>
            • Learning about the different types of networks and cybersecurity
          </Paragraph>

          <Paragraph>
            • Tests on a local network (Switches/Bridges/Subnetworks)
            <br /><br />
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" color='turquoise'>
            Education
          </Heading>


          <Heading fontSize='20px' color='blue.500'>ESIEE Paris</Heading>
          <Heading fontSize='18px' color='white'>- 93162 Noisy-le-Grand, France<br /><br />
          </Heading>

          <BioYear>2018 - Present</BioYear>

          <Paragraph>
            An engineering school member of Gustave Eiffel University
            <br /><br />
          </Paragraph>

          <Paragraph>
            Currently in the final year of a 3-year work/study programme leading to an
            MS in Computer Science & Applications. Alternate periods of full-time study
            with apprenticeship in industry (see Groupe Renault in Employment section).
            <br /><br />
          </Paragraph>

          <Paragraph>
            Modules studied include: Algorithm, AI, VR, Cybersecurity, Image processing
            <br /><br />
          </Paragraph>


          <Heading fontSize='20px' color='blue.500'>Lycée Emily Brontë</Heading>
          <Heading fontSize='18px' color='white'>- 77185 Lognes, France
            <br /><br />
          </Heading>

          <BioYear>2018</BioYear>

          <Paragraph>
            Obtained Baccalauréat S, equivalent to English A-Levels in pure mathematics, physics and biology.
            <br /><br />
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" color='turquoise'>
            Interests
          </Heading>
            <Paragraph>
              • {' '}<Link href="https://www.youtube.com/channel/UCiD7brqhCib5f2eJ3y_go_w" color='blue.500' target="_blank" _hover={{ textDecoration: "none" }}>
              Music Production
            </Link>
              &nbsp;(FL Studio)
              <br />
            </Paragraph>
            <Paragraph>
              • Video Editing (Sony Vegas Pro, After Effect)
              <br />
            </Paragraph>
            <Paragraph>
              • Video Games (8th League of Legends French Cup - {' '}<Link href="https://liquipedia.net/leagueoflegends/LFL/2022/Coupe_de_France/Qualifier/2" color='blue.500' target="_blank" _hover={{ textDecoration: "none" }}>
              Team Look For Win
            </Link>
              )
              <br />
            </Paragraph>
            <Paragraph>
              • Judo/Jujitsu - {' '}<Link href="http://www.ffjudo.org/extranet/listehautgrades/liste_hauts_grades_dep.asp?Page=1&dis=0&grade=1&ndep=XX1177" color='blue.500' target="_blank" _hover={{ textDecoration: "none" }}>
              First Dan Black Belt
            </Link>
              &nbsp;(05/22/2016)
              <br /><br />
            </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" color='turquoise'>
            Google Badges
            <br /><br />
          </Heading>

          <SimpleGrid columns={3} gap={6}>
            <GridBadge
                href="https://www.cloudskillsboost.google/public_profiles/3bcbc699-0b34-4b30-a124-2b2a2c8b9aec/badges/3215435"
                thumbnail={data}
                height={50}
            >
            </GridBadge>

            <GridBadge
                href="https://www.cloudskillsboost.google/public_profiles/3bcbc699-0b34-4b30-a124-2b2a2c8b9aec/badges/3213089"
                thumbnail={cloud}
            >
            </GridBadge>

            <GridBadge
                href="https://www.cloudskillsboost.google/public_profiles/3bcbc699-0b34-4b30-a124-2b2a2c8b9aec/badges/3209614"
                thumbnail={terraform}
            >
            </GridBadge>
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" color='turquoise'>
            Contact
          </Heading>
          <List>
            <ListItem>
              <Link href="mailto:said.aissani@edu.esiee.fr" target="_blank" _hover={{ textDecoration: "none" }}>
                <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoGoogle />}
                >
                  said.aissani@edu.esiee.fr
                </Button>
              </Link>
            </ListItem>
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
            <br />
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
              A sample dashboard to track, analyze, and display KPIs, metrics, and critical data points
            </GridItem>

          </SimpleGrid>

          <Wrap spacing={4} justify='center' my={4}>
            <WrapItem>
              <NextLink href="/projects" passHref scroll={false} legacyBehavior>
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  My portfolio
                </Button>
              </NextLink>
            </WrapItem>
            <WrapItem>
              <NextLink href="/beats" passHref scroll={false} legacyBehavior>
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  Popular beats
                </Button>
              </NextLink>
            </WrapItem>
          </Wrap>
        </Section>
      </Container>
    </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
