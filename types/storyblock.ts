import { Richtext } from "storyblok-js-client";

export type Blocks = GridBlockType | FeatureBlockType | TeaserBlockType

export type GridBlockType = {
  _uid: string
  _editable?: string
  columns: Blocks[]
  component: 'grid'
}

export type FeatureBlockType = {
  _uid: string
  _editable?: string
  name: string,
  component: 'feature'
}

export type TeaserBlockType = {
  _uid: string
  _editable?: string
  headline: string,
  component: 'teaser'
}