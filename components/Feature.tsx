import { storyblokEditable } from '@storyblok/react'
import React from 'react'
import { FeatureBlockType } from '../types/storyblock'
 
interface Props {
  blok: FeatureBlockType
}
const Feature = ({ blok }: Props) => (
    <div {...storyblokEditable(blok)}>
      {blok.name}
    </div>
)
 
export default Feature