import React from 'react'
import { GridBlockType } from '../types/storyblock'
import DynamicComponent from './DynamicComponent'
 
interface Props {
  blocks: GridBlockType
}
const Grid = ({ blocks }: Props) => {
  return (
    <div className="grid">
      {blocks.blocks.map((block) =>
        (<DynamicComponent block={block} key={block._uid}/>)
      )}
    </div>
  )
}
 
export default Grid