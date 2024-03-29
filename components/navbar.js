import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false} legacyBehavior>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/projects" path={path} style={{borderRadius: '5px', overflow: 'hidden'}} _hover={{ textDecoration: "none" }}>
            Projects
          </LinkItem>
          <LinkItem href="/beats" path={path} style={{borderRadius: '5px', overflow: 'hidden'}} _hover={{ textDecoration: "none" }}>
            Beats
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/UnboundedTechnologies"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4, borderRadius: '5px', overflow: 'hidden'}}
            _hover={{ textDecoration: "none" }}
            pl={2}
          >
            <IoLogoGithub />
            My Github
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref legacyBehavior>
                  <MenuItem style={{borderRadius: '5px', overflow: 'hidden', color: 'black'}} _hover={{ textDecoration: "none" }} as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref legacyBehavior>
                  <MenuItem style={{borderRadius: '5px', overflow: 'hidden', color: 'black'}} _hover={{ textDecoration: "none" }} as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href="/beats" passHref legacyBehavior>
                  <MenuItem style={{borderRadius: '5px', overflow: 'hidden', color: 'black'}} _hover={{ textDecoration: "none" }} as={Link}>Beats</MenuItem>
                </NextLink>
                <MenuItem
                  style={{borderRadius: '5px', overflow: 'hidden', color: 'black'}}
                  _hover={{ textDecoration: "none" }}
                  as={Link}
                  href="https://github.com/UnboundedTechnologies"
                >
                  My Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar
