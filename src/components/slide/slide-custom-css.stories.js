// @flow
import * as React from "react"
import { storiesOf } from "@storybook/react"

import MarkdownParser from "../../logic/markdown-parser"
import Slide from "../../components/slide/slide"
import SlideModel, { Status } from "../../models/slide"

const parser = new MarkdownParser()

const slide = new SlideModel()
slide.theme_name = "bebas"
slide.color_variation = 7
slide.custom_css = `
h1 {
color: blue;
transform: rotate(-7deg);
}
`
slide.markdown = `
# Blue stuff
`

storiesOf("Components/Slides/Custom CSS", module).add("Blue h1", () => (
  <div style={{ width: 750 }}>
    <Slide slideStatus={Status.Current} slide={slide} parser={parser} />
    <h1>But it doesn't affect things globally</h1>
  </div>
))
