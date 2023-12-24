'use client'
import type { ReactNode } from 'react'

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

import Feature from '../components/Feature'
import Grid from '../components/Grid'
import Teaser from '../components/Teaser'

interface Props {
  children: ReactNode;
}

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_SB_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
})

export default function StoryblokProvider({ children }: Props) {
  return children
}
