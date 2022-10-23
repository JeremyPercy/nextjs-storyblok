import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import React from 'react'
import { GridBlockType } from '../types/storyblock'
 
interface Props {
  blok: GridBlockType
}
const Grid = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.columns.map((blok) =>
        (<StoryblokComponent blok={blok} key={blok._uid}/>)
      )}
    </div>
  )
}
 
export default Grid