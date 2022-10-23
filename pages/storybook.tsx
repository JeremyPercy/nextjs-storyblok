import type { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react';
import { StoriesParams, StoryData } from 'storyblok-js-client';
import styled from 'styled-components';

// The Storyblok Client
import Story from '../components/Story';
import { getStoryblokApi } from '@storyblok/react';

const Title = styled.h1`
font-size: 200px;
`

interface Props {
  story: StoryData
}

export default function StoryblokComponent({ story }: Props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Title>
          {story ? story.name : 'My Site'}
        </Title>
      </header>

      <main>
        <Story blok={story.content} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  // the slug of the story
  let slug = "home"
  // the storyblok params
  let params: StoriesParams = {
    version: "draft", // or 'published'
  }

  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    params.version = "draft"
    // appends the cache version to get the latest content
    params.cv = Date.now()
  }

  // loads the story from the Storyblok API
  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params)

  // return the story from Storyblok and whether preview mode is active
  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false
    },
    revalidate: 10,
  }
}