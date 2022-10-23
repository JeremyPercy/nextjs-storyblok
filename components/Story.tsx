import { StoryblokComponent, StoryData } from '@storyblok/react'
import { Blocks } from '../types/storyblock'

type Props = {
  blok: any
}

const Story = ({ blok }: Props) => {
  return (
    <div key={blok.uuid}>
      {blok.body.map((block: Blocks) => (
        <StoryblokComponent blok={block} key={block._uid}/>
      ))}
    </div>
  )
}

export default Story