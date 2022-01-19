import React from 'react'
import { TeaserBlockType } from '../types/storyblock'
 
interface Props {
  block: TeaserBlockType
}
const Teaser = ({block}: Props) => {
  return (
    <h2>{block.headline}</h2>
  )
}
 
export default Teaser