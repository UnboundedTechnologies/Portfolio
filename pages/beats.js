import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import beat1 from '../public/images/contents/beat-1.jpg'
import beat2 from '../public/images/contents/beat-2.jpg'
import beat3 from '../public/images/contents/beat-3.jpg'
import beat4 from '../public/images/contents/beat-4.jpg'
import beat5 from '../public/images/contents/beat-5.jpg'
import beat6 from '../public/images/contents/beat-6.jpg'

const Beats = () => (
  <Layout title="Beats">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Beats
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Digga D x NitroNB x Skengdo x AM UK DRILL TYPE BEAT - CRASH [Prod By Kyto Beats]"
            thumbnail={beat1}
            href="https://youtu.be/2ZSbHsOi_-E"
          />
          <GridItem
            title="#TPL BM x Mini x Sava UK DRILL TYPE BEAT - SAVIOUR [Prod By FoX x Kyto Beats]"
            thumbnail={beat2}
            href="https://youtu.be/nm7FkMNQhs4"
          />
          <GridItem
            title="FREDO TYPE BEAT - KMT [Prod. harisjonuzi x Kyto Beats]"
            thumbnail={beat3}
            href="https://youtu.be/vDLFBCWZvvo"
          />
          <GridItem
            title="NINHO TYPE BEAT - VVS [Prod. Kyto Beats]"
            thumbnail={beat4}
            href="https://youtu.be/xJ8NS3h2RD4"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="HEADIE ONE x DIGGA D X NitoNB TYPE BEAT - STILL HOOD [Prod By Kyto Beats]"
            thumbnail={beat5}
            href="https://youtu.be/jv-g_61i6FU"
          />
          <GridItem
            title="CENTRAL CEE UK DRILL TYPE BEAT - REHAB DRILL REMIX [Prod. Kyto Beats]"
            thumbnail={beat6}
            href="https://youtu.be/iHntgQs8zqY"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Beats
export { getServerSideProps } from '../components/chakra'
