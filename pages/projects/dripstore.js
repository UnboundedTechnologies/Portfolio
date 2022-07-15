import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="dripstore">
    <Container>
      <Title>
        Drip Store <Badge>2019-2022</Badge>
      </Title>
      <P>
        An ecommerce platform to buy luxury watches powered by Sanity.io and Stripe.
      </P>
      <P>
        You will be able to buy luxury watches from from famous designers such as Rolex through {' '}
        <Link href="https://stripe.com/docs/api/versioning" target="_blank">
          Stripe's API <ExternalLinkIcon mx="2px" />
        </Link>.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://drip-store.vercel.app/" target="_blank">
            https://drip-store.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js</span>
        </ListItem>
        <ListItem>
          <Meta>Payments</Meta>
          <Link href="https://stripe.com/" target="_blank">
            Stripe.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Powered by</Meta>
          <Link href="https://www.sanity.io/" target="_blank">
            Sanity.io <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/Sanity1.png" alt="Drip Store Website" />
      <WorkImage src="/images/projects/Sanity2.png" alt="Drip Store's Sanity Manager" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
