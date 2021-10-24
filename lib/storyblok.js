import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: '',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})
 
export default Storyblok
