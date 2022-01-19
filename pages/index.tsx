import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Logo from '../public/assets/images/logo.png'


const ContentWrapper = styled.main`
width: 100vw;
height: 100vh;
display: grid;
place-items: center;
`

const LogoWrapper = styled.div`
  width: 30%;
  height: auto;
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Super Effect</title>
        <meta name="Starter" content="Next js typescript styled-components storyblok starter" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <ContentWrapper>
        <LogoWrapper>
          <Image src={Logo} />
        </LogoWrapper>
      </ContentWrapper>
    </div>
  )
}

export default Home
