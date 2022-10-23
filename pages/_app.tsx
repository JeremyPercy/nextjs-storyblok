import type { AppProps } from 'next/app'
import { theme } from '../components/theme'
import React from 'react'
import { apiPlugin, storyblokInit } from '@storyblok/react'
import { GlobalStyle } from '../components/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Feature from '../components/Feature'
import Teaser from '../components/Teaser'
import Story from '../components/Story'
import Grid from '../components/Grid'

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Story,
}

storyblokInit({
  accessToken: 'lrD0YbDO6lGnQC7IrfZwqwtt',
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
