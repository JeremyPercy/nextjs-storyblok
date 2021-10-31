import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../components/theme'
import React from 'react'
import { GlobalStyle } from '../components/GlobalStyle'


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
