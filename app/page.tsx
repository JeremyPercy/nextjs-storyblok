import Image from 'next/image'

import Logo from '../public/assets/images/logo.png'

// uncomment this to use Storyblok

export default async function Page() {
  // const { data } = await fetchData()
  // const { content } = data.story

  return (
    <>
      <Image src={Logo} alt={''} />
    </>
  )
}

// async function fetchData(): Promise<ISbResult> {
//   const storyParams: ISbStoriesParams = {
//     version: 'published', // or 'published'
//   }

//   const storyblokApi: StoryblokClient = getStoryblokApi()

//   return storyblokApi.get('cdn/stories/home', storyParams)
// }
