import React from 'react'
import {storyblokEditable, StoryblokComponent} from "@storyblok/react";

export default ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}>
      This is a component you created with the CLI. Change its code in the components/ folder.

      {/*
        Use this code if you want to render a text field:

        {blok.YOUR_TEXT_FIELD}
      */}

      {/*
        Use this code if you want to render a block field:

        {blok.YOUR_BLOCK_FIELD.map((blok) =>
          (<StoryblokComponent blok={blok} key={blok._uid}/>)
        )}
      */}
    </div>
  )
}
