import '../styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import feature from "../components/bloks/feature";
import teaser from "../components/bloks/teaser";
import page from "../components/bloks/page";
import grid from "../components/bloks/grid"
// this comment line is used by the generator in generators/copy.js

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  // bridge: true,
  use: [apiPlugin],
  components: {
    page,
    teaser,
    feature,
    grid
  },
});

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp
