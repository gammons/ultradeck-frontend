// @flow
import * as React from "react"
import { storiesOf } from "@storybook/react"

import MarkdownParser from "../../logic/markdown-parser"
import Slide from "../../components/slide/slide"
import SlideModel, { Status } from "../../models/slide"

const parser = new MarkdownParser()

const createSlide = (color: number, markdown: string): SlideModel => {
  const slide = new SlideModel()
  slide.theme_name = "bebas"
  slide.color_variation = color
  slide.markdown = markdown
  return slide
}

const color1Emphasis = createSlide(1, `# What *can* you do?`)
const color2Emphasis = createSlide(2, `# What *can* you do?`)
const color3Emphasis = createSlide(3, `# What *can* you do?`)
const color4Emphasis = createSlide(4, `# What *can* you do?`)
const color5Emphasis = createSlide(5, `# What *can* you do?`)
const color6Emphasis = createSlide(6, `# What *can* you do?`)
const color7Emphasis = createSlide(7, `# What *can* you do?`)
const color8Emphasis = createSlide(8, `# What *can* you do?`)

const color1Strong = createSlide(1, `# What can **you** do?`)
const color2Strong = createSlide(2, `# What can **you** do?`)
const color3Strong = createSlide(3, `# What can **you** do?`)
const color4Strong = createSlide(4, `# What can **you** do?`)
const color5Strong = createSlide(5, `# What can **you** do?`)
const color6Strong = createSlide(6, `# What can **you** do?`)
const color7Strong = createSlide(7, `# What can **you** do?`)
const color8Strong = createSlide(8, `# What can **you** do?`)

storiesOf("Components/Slides/Markdown/Emphasis", module)
  .add("Color 1 Emphasis", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color1Emphasis}
        parser={parser}
      />
    </div>
  ))
  .add("Color 1 Strong", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color1Strong}
        parser={parser}
      />
    </div>
  ))
  .add("Color 2 Emphasis", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color2Emphasis}
        parser={parser}
      />
    </div>
  ))
  .add("Color 2 Strong", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color2Strong}
        parser={parser}
      />
    </div>
  ))
  .add("Color 3 Emphasis", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color3Emphasis}
        parser={parser}
      />
    </div>
  ))
  .add("Color 3 Strong", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color3Strong}
        parser={parser}
      />
    </div>
  ))
  .add("Color 4 Emphasis", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color4Emphasis}
        parser={parser}
      />
    </div>
  ))
  .add("Color 4 Strong", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color4Strong}
        parser={parser}
      />
    </div>
  ))
  .add("Color 5 Emphasis", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color5Emphasis}
        parser={parser}
      />
    </div>
  ))
  .add("Color 5 Strong", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color5Strong}
        parser={parser}
      />
    </div>
  ))
  .add("Color 6 Emphasis", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color6Emphasis}
        parser={parser}
      />
    </div>
  ))
  .add("Color 6 Strong", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color6Strong}
        parser={parser}
      />
    </div>
  ))
  .add("Color 7 Emphasis", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color7Emphasis}
        parser={parser}
      />
    </div>
  ))
  .add("Color 7 Strong", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color7Strong}
        parser={parser}
      />
    </div>
  ))
  .add("Color 8 Emphasis", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color8Emphasis}
        parser={parser}
      />
    </div>
  ))
  .add("Color 8 Strong", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={color8Strong}
        parser={parser}
      />
    </div>
  ))
