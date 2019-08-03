// @flow
import * as React from "react"
import { storiesOf } from "@storybook/react"

import MarkdownParser from "../../logic/markdown-parser"
import Slide from "../../components/slide/slide"
import SlideModel, { Status } from "../../models/slide"

const parser = new MarkdownParser()

const slide1 = new SlideModel()
slide1.theme_name = "bebas"
slide1.color_variation = 1
slide1.markdown = "# yeah :fries:"

const slide2 = new SlideModel()
slide2.theme_name = "bebas"
slide2.color_variation = 1
slide2.markdown = `# Other emoji

* :fries:
* :pineapple:
* :hamburger:
`

storiesOf("Components/Slides/Markdown/Emoji", module)
  .add("Emoji in fitted header", () => (
    <div style={{ width: 750 }}>
      <Slide slideStatus={Status.Current} slide={slide1} parser={parser} />
    </div>
  ))
  .add("Emoji elsewhere", () => (
    <div style={{ width: 750 }}>
      <Slide slideStatus={Status.Current} slide={slide2} parser={parser} />
    </div>
  ))
