import SbEditable from 'storyblok-react'
import { Blocks } from '../types/storyblock'
import Feature from './Feature'
import Grid from './Grid'
import Teaser from './Teaser'

type Props = {
  block: Blocks
}

const DynamicComponent = ({ block }: Props) => {
  switch (block.component) {
    case 'grid':
      return <SbEditable content={block}><Grid blocks={block} /></SbEditable>
    case 'feature':
      return <SbEditable content={block}><Feature block={block} /></SbEditable>
    case 'teaser':
      return <SbEditable content={block}><Teaser block={block} /></SbEditable>
  }
}

export default DynamicComponent