import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="TakePicture Backend">
        <Container>
            <Title>
                TakePicture Backend <Badge>2023</Badge>
            </Title>
            <P>
                TakePicture&apos;s Backend powered by Strapi.io
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://take-picture-back-end.onrender.com/admin" target="_blank">
                        https://take-picture-back-end.onrender.com/admin <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                        <span>
                            <Link href="https://strapi.io/" target="_blank">
                                Strapi.io<ExternalLinkIcon mx="2px" />
                            </Link>
                        </span>
                </ListItem>
                <ListItem>
                    <Meta>Database</Meta>
                    <span>PostgreSQL</span>
                </ListItem>
                <ListItem>
                    <Meta>Host</Meta>
                        <span>
                            <Link href="https://render.com/" target="_blank">
                                Render<ExternalLinkIcon mx="2px" />
                            </Link>,&nbsp;
                            <Link href="https://cloudinary.com/" target="_blank">
                                Cloudinary<ExternalLinkIcon mx="2px" />
                            </Link>
                        </span>
                </ListItem>
            </List>

            <WorkImage src="/images/projects/takepicturebackend1.png" alt="takepicturebackend1"/>
            <WorkImage src="/images/projects/takepicturebackend2.png" alt="takepicturebackend2"/>

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'