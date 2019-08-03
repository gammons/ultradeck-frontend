// @flow
import * as React from "react"
import { storiesOf } from "@storybook/react"

import MarkdownParser from "../../logic/markdown-parser"
import Slide from "../../components/slide/slide"
import SlideModel, { Status } from "../../models/slide"

const parser = new MarkdownParser()

const js = `
function* fibonacci() { // a generator function
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // truncate the sequence at 1000
  if (n >= 1000) {
    break;
  }
}
`

const createSlide = (color: number, markdown: string): SlideModel => {
  const slide = new SlideModel()
  slide.theme_name = "bebas"
  slide.color_variation = color
  slide.markdown = markdown
  return slide
}

const codeMarkdown =
  "# Presenting an `example`: \n\n```javascript \n " + js + "\n```"

const slideJsTheme1 = createSlide(1, codeMarkdown)
const slideJsTheme2 = createSlide(2, codeMarkdown)
const slideJsTheme3 = createSlide(3, codeMarkdown)
const slideJsTheme4 = createSlide(4, codeMarkdown)
const slideJsTheme5 = createSlide(5, codeMarkdown)
const slideJsTheme6 = createSlide(6, codeMarkdown)
const slideJsTheme7 = createSlide(7, codeMarkdown)
const slideJsTheme8 = createSlide(8, codeMarkdown)

storiesOf("Components/Slides/Markdown/Code snippets", module)
  .add("color 1", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme1}
        parser={parser}
      />
    </div>
  ))
  .add("color 2", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme2}
        parser={parser}
      />
    </div>
  ))
  .add("color 3", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme3}
        parser={parser}
      />
    </div>
  ))
  .add("color 4", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme4}
        parser={parser}
      />
    </div>
  ))
  .add("color 5", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme5}
        parser={parser}
      />
    </div>
  ))
  .add("color 6", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme6}
        parser={parser}
      />
    </div>
  ))
  .add("color 7", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme7}
        parser={parser}
      />
    </div>
  ))
  .add("color 8", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={slideJsTheme8}
        parser={parser}
      />
    </div>
  ))
