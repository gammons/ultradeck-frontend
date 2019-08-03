// @flow
import * as React from "react"
import { storiesOf } from "@storybook/react"

import MarkdownParser from "../../logic/markdown-parser"
import Slide from "./slide"
import SlideModel, { Status } from "../../models/slide"

import "../../css/app.css"

const parser = new MarkdownParser()

const createSlide = (markdown: string): SlideModel => {
  const slide = new SlideModel()
  slide.id = 1
  slide.position = 1
  slide.markdown = markdown
  slide.theme_name = "bebas"
  slide.color_variation = 8
  return slide
}

const tableSlideModel = createSlide(`
tables!

| Tables   |      Are      |  Cool |
|----------|-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |  $1 |
`)

const textSplitSlideModel = createSlide(`
this is some text on the left side

+++

this is some text on the right side
`)

const imgUrl =
  "http://media.caranddriver.com/images/17q2/678295/2018-porsche-911-targa-4-gts-first-drive-review-car-and-driver-photo-682835-s-original.jpg"

const imageLeftSplitModel = createSlide(`
![](${imgUrl})

+++

this is some text on the right side
`)

const imageRightSplitModel = createSlide(`
this is some text on the right side

+++

![](${imgUrl})
`)

const inlineImageLeftSplitModel = createSlide(`
![inline](${imgUrl})

+++

this is some text on the right side
`)

const inlineImageRightSplitModel = createSlide(`
this is some text on the right side

+++

![inline](${imgUrl})
`)

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

const codeLeftSplitModel = createSlide(`
\`\`\`javascript
${js}
\`\`\`

+++

## Stuff

this is some text on the right side
`)

const codeRightSplitModel = createSlide(`
this is some text on the right side

+++

\`\`\`javascript
${js}
\`\`\`

`)

storiesOf("Components/Slides/Markdown/Tables", module).add(
  "table support",
  () => (
    <div style={{ width: "100%" }}>
      <h1>Selected</h1>
      <Slide
        slideStatus={Status.Current}
        slide={tableSlideModel}
        parser={parser}
      />
    </div>
  )
)

storiesOf("Components/Slides/Markdown/Splitting", module)
  .add("text split", () => (
    <div style={{ width: "100%" }}>
      <Slide
        slideStatus={Status.Current}
        slide={textSplitSlideModel}
        parser={parser}
      />
    </div>
  ))
  .add("image split left", () => (
    <div style={{ width: "100%" }}>
      <Slide
        slideStatus={Status.Current}
        slide={imageLeftSplitModel}
        parser={parser}
      />
    </div>
  ))
  .add("image split right", () => (
    <div style={{ width: "100%" }}>
      <Slide
        slideStatus={Status.Current}
        slide={imageRightSplitModel}
        parser={parser}
      />
    </div>
  ))
  .add("inline image split left", () => (
    <div style={{ width: "100%" }}>
      <Slide
        slideStatus={Status.Current}
        slide={inlineImageLeftSplitModel}
        parser={parser}
      />
    </div>
  ))
  .add("inline image split right", () => (
    <div style={{ width: "100%" }}>
      <Slide
        slideStatus={Status.Current}
        slide={inlineImageRightSplitModel}
        parser={parser}
      />
    </div>
  ))
  .add("code sample split left", () => (
    <div style={{ width: "100%" }}>
      <Slide
        slideStatus={Status.Current}
        slide={codeLeftSplitModel}
        parser={parser}
      />
    </div>
  ))
  .add("code sample split right", () => (
    <div style={{ width: "100%" }}>
      <Slide
        slideStatus={Status.Current}
        slide={codeRightSplitModel}
        parser={parser}
      />
    </div>
  ))
