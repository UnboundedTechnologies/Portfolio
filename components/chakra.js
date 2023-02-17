import theme from '../lib/theme'

import { ChakraProvider, localStorageManager, cookieStorageManagerSSR  } from '@chakra-ui/react'

export default function Chakra({ cookies, children }) {
  const colorModeManager = typeof cookies === 'string' ? cookieStorageManagerSSR(cookies) : localStorageManager

  return (
      <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
        {children}
      </ChakraProvider>
  )
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
