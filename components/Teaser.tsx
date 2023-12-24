import React from 'react'

import { storyblokEditable } from '@storyblok/react/rsc'

import { type TeaserBlockType } from '../types/storyblock'

interface Props {
  blok: TeaserBlockType;
}
const Teaser = ({ blok }: Props) => (
  <h2 {...storyblokEditable(blok)} key={blok._uid}>
    {blok.headline}
  </h2>
)

export default Teaser
