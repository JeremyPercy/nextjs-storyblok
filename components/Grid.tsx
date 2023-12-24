import React from 'react'

import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc'

import { type GridBlockType } from '../types/storyblock'

interface Props {
  blok: GridBlockType;
}
const Grid = ({ blok }: Props) => (
  <div {...storyblokEditable(blok)}>
    {blok.columns.map((blok) => (
      <StoryblokComponent blok={blok} key={blok._uid} />
    ))}
  </div>
)

export default Grid
