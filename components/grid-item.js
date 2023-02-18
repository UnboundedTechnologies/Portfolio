import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Center } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Center>
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"
            blurDataURL="blur"
            width={300}
            height={175}
          />
        </Center>
        <LinkOverlay href={href} target="_blank">
            <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
  </Box>
)

export const GridBadge = ({ children, href, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
          <Center>
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
                blurDataURL="blur"
                width={500}
                height={500}
            />
          </Center>
          <LinkOverlay href={href} target="_blank">
              <Text mt={2}>{title}</Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/projects/${id}`} passHref scroll={false} legacyBehavior>
      <LinkBox cursor="pointer">
         <Center>
            <Image
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              placeholder="blur"
              blurDataURL="blur"
              width={300}
              height={175}
            />
         </Center>
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
