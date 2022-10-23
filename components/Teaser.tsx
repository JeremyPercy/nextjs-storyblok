import { storyblokEditable } from '@storyblok/react'
import React from 'react'
import { TeaserBlockType } from '../types/storyblock'
 
interface Props {
  blok: TeaserBlockType
}
const Teaser = ({blok}: Props) => {
  return (
    <h2 {...storyblokEditable(blok)} key={blok._uid}>{blok.headline}</h2>
  )
}
 
export default Teaser