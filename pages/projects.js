import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import fatalis from '../public/images/projects/fatalis.png'
import drip from '../public/images/projects/drip.png'
import takepicture from '../public/images/projects/takepicture.png'
import takepicturebackend from '../public/images/projects/takepicturebackend.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="takepicture" title="TakePicture" thumbnail={takepicture}>
            TakePicture is a powerful tool that allows you to generate a personalized gym card using your webcam or camera
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
              id="takepicturebackend"
              title="TakePicture Backend"
              thumbnail={takepicturebackend}
          >
            TakePicture&apos;s Backend powered by Strapi.io
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="fatalis" title="Fatalis Dashboard" thumbnail={fatalis}>
            A sample dashboard to track, analyze, and display KPIs, metrics, and critical data points
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="dripstore"
            title="Drip Store"
            thumbnail={drip}
          >
            An ecommerce platform to buy luxury watches powered by Sanity and Stripe
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
