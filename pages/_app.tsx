import { apiPlugin, storyblokInit } from '@storyblok/react'
import type { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import Feature from '../components/Feature'
import { GlobalStyle } from '../components/GlobalStyle'
import Grid from '../components/Grid'
import Teaser from '../components/Teaser'
import { theme } from '../components/theme'

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
}

storyblokInit({
  accessToken: 'YOUR_API_KEY',
  use: [apiPlugin],
  components,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
