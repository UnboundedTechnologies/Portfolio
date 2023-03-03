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
    <Layout title="TakePicture">
        <Container>
            <Title>
                TakePicture <Badge>2023</Badge>
            </Title>
            <P>
                TakePicture is a powerful tool that allows you to generate a personalized gym card using your webcam or camera
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://takepicture.vercel.app/" target="_blank">
                        https://takepicture.vercel.app/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Angular, Tailwind css, Flowbite</span>
                </ListItem>
                <ListItem>
                    <Meta>Angular components</Meta>
                    <span>
                        <Link href="https://www.npmjs.com/package/ngx-webcam" target="_blank">
                                ngx-webcam<ExternalLinkIcon mx="2px" />
                            </Link>,&nbsp;
                        <Link href="https://www.npmjs.com/package/ng2-flatpickr" target="_blank">
                                ng2-flatpickr<ExternalLinkIcon mx="2px" />
                            </Link>
                    </span>
                </ListItem>
            </List>

            <WorkImage src="/images/projects/takepicture1.png" alt="takepicture1"/>
            <WorkImage src="/images/projects/takepicture2.png" alt="takepicture2"/>
            <WorkImage src="/images/projects/takepicture3.png" alt="takepicture3"/>
            <WorkImage src="/images/projects/takepicture4.png" alt="takepicture4"/>
            <WorkImage src="/images/projects/takepicture5.png" alt="takepicture5"/>

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'