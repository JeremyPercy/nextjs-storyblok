import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: 'YOURTOKEN',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})
 
export default Storyblok
