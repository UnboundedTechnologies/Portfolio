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
import beatGodKnows from '../public/images/contents/beatgodknows.jpg'
import beatSoCorrupt from '../public/images/contents/beatsocorrupt.jpg'
import beatIntrusive from '../public/images/contents/beatintrusive.jpg'

const Beats = () => (
  <Layout title="Beats">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Beats
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>

          <GridItem
              title="Central Cee - God Knows [Music Video] [Prod. @kytobeats]"
              thumbnail={beatGodKnows}
              href="https://youtu.be/dwvORhpvJpM"
          />

          <GridItem
              title="Central Cee - So Corrupt [Music Video] [Prod. @kytobeats]"
              thumbnail={beatSoCorrupt}
              href="https://youtu.be/oKGdBZ4ZmWo"
          />

          <GridItem
              title="Central Cee - Intrusive [Music Video] [Prod. @kytobeats]"
              thumbnail={beatIntrusive}
              href="https://youtu.be/lr-r4CtQIQU"
          />

          <GridItem
            title="Digga D x NitroNB x Skengdo x AM UK Drill Type Beat - Crash [Music Video] [Prod.  @kytobeats]"
            thumbnail={beat1}
            href="https://youtu.be/2ZSbHsOi_-E"
          />

        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Fredo Type Beat - KMT [Music Video] [Prod. harisjonuzi x  @kytobeats]"
            thumbnail={beat3}
            href="https://youtu.be/vDLFBCWZvvo"
          />
          <GridItem
            title="Ninho Type Beat - VVS [Music Video] [Prod.  @kytobeats]"
            thumbnail={beat4}
            href="https://youtu.be/xJ8NS3h2RD4"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Beats
export { getServerSideProps } from '../components/chakra'
