import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: 'o6oaEcJzrllLcCsKp61pxAtt',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})
 
export default Storyblok
