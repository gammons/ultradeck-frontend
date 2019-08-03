// @flow
import * as React from "react"
import { storiesOf } from "@storybook/react"

import MarkdownParser from "../../logic/markdown-parser"
import Slide from "../../components/slide/slide"
import SlideModel, { Status } from "../../models/slide"

const slide = new SlideModel()
slide.theme_name = "bebas"
slide.color_variation = 8
slide.markdown = `
# Big hash
`
slide.presenter_notes = `
* here are
* some of my notes
`

const parser = new MarkdownParser()

storiesOf("Components/Slides/Presenter Notes", module).add("h2", () => (
  <div style={{ width: 750 }}>
    <h1>Showing presenter notes</h1>
    <Slide
      slideStatus={Status.Current}
      showPresenterNotes={true}
      slide={slide}
      parser={parser}
    />
  </div>
))
