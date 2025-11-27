import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import Teaser from "@/components/Teaser";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
  },
  apiOptions: {
    region: "eu",
  },
});
