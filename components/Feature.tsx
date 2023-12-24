import React from 'react'

import { storyblokEditable } from '@storyblok/react/rsc'

import { type FeatureBlockType } from '../types/storyblock'

interface Props {
  blok: FeatureBlockType;
}
const Feature = ({ blok }: Props) => (
  <div {...storyblokEditable(blok)}>{blok.name}</div>
)

export default Feature
