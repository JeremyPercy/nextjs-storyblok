import React from "react";

import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

import { type GridBlockType } from "../types/storyblock";

interface Props {
  blok: GridBlockType;
}
const Grid = ({ blok }: Props) => (
  <div {...storyblokEditable(blok)}>
    {blok.columns.map((blok) => (
      <StoryblokServerComponent blok={blok} key={blok._uid} />
    ))}
  </div>
);

export default Grid;
