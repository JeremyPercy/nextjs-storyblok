import React from 'react'
import { FeatureBlockType } from '../types/storyblock'
 
interface Props {
  block: FeatureBlockType
}
const Feature = ({ block }: Props) => (
    <div className="column feature">
      {block.name}
    </div>
)
 
export default Feature