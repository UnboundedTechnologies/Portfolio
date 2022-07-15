import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Fatalis Dashboard">
    <Container>
      <Title>
         Fatalis Dashboard <Badge>2022 - Today</Badge>
      </Title>
      <P>
        A dashboard to track, analyze, and display KPIs, metrics, and critical data points.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://fatalis-dashboard.vercel.app/" target="_blank">
            https://fatalis-dashboard.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Spline, Three.js</span>
        </ListItem>
        <ListItem>
          <Meta>Cloud IDE</Meta>
          <Link href="https://codesandbox.io/" target="_blank">
            CodeSandbox.io<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/fatalis_bg.png" alt="Fatalis Dashboard" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe style={{borderRadius: '10px', overflow: 'hidden'}} src='https://my.spline.design/untitled-4138f01e18565fb3f31b027179cb06ec/' frameBorder='0' width='100%'
                height='100%'></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
