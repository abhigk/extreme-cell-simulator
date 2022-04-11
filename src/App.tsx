import * as React from 'react'
import { ChakraProvider, Box, VStack, Grid, extendTheme, Button, ThemeConfig } from '@chakra-ui/react'
import MainGrid from './components/MainGrid'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({ config })

export default theme
export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Box>
            <MainGrid />
          </Box>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
