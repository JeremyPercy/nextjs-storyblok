import { StoryData } from "storyblok-js-client";
import { Blocks } from "../types/storyblock";
import DynamicComponent from './DynamicComponent';

type Props = {
  story: StoryData
}

const Story = ({ story }: Props) => {
  const { content } = story;

  return (
    <>
      {content.blocks?.map((block: Blocks) => (
        <DynamicComponent key={block._uid} block={block} />
      ))}
    </>
  );
}

export default Story;
