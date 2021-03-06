// @flow
import * as React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select } from "@storybook/addon-knobs"

import MarkdownParser from "../../logic/markdown-parser"
import Slide from "./slide"
import SlideModel from "../../models/slide"

const parser = new MarkdownParser()

const colors = [
  "color-1",
  "color-2",
  "color-3",
  "color-4",
  "color-5",
  "color-6",
  "color-7",
  "color-8",
  "color-9",
  "color-10"
]
const themes = [
  "theme-1",
  "theme-2",
  "theme-3",
  "theme-4",
  "theme-5",
  "theme-6",
  "theme-7"
]

const createSlide = (markdown: string): SlideModel => {
  const slide = new SlideModel()
  slide.markdown = markdown
  slide.parsedHTML = parser.parse(markdown)
  slide.themeClass = select("Theme", themes, "theme-1")
  slide.colorClass = select("Color", colors, "color-1")
  return slide
}

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

storiesOf("Slides", module)
  .addDecorator(s => <div style={{ width: "100%", height: "100%" }}>{s()}</div>)
  .addDecorator(withKnobs)
  .add("presenter notes", () => {
    const slide = createSlide("# cool slide")
    slide.presenterNotes = `* here are\n* some of my notes`
    slide.presenterNotesHTML = parser.parse(slide.presenterNotes)
    return <Slide showPresenterNotes slide={slide} parser={parser} />
  })

storiesOf("Slides/Layouts", module)
  .addDecorator(s => <div style={{ width: "100%" }}>{s()}</div>)
  .addDecorator(withKnobs)
  .add("PictureFrame", () => {
    const slide = createSlide("# Here is the title\n## Here is the subtitle")
    slide.layoutClass = "layout-picture-frame"
    return <Slide slide={slide} parser={parser} />
  })
  .add("CircleTitle", () => {
    const slide = createSlide("# Here is the title\n## Here is the subtitle")
    slide.layoutClass = "layout-circle-title"
    return <Slide slide={slide} parser={parser} />
  })

storiesOf("Slides/Markdown/Headers", module)
  .addDecorator(s => <div style={{ width: "100%" }}>{s()}</div>)
  .addDecorator(withKnobs)
  .add("single h1 - autofit", () => {
    const slide = createSlide("# Heading 1")
    return <Slide slide={slide} parser={parser} />
  })
  .add("single h1 - autofit - multiple lines", () => {
    const slide = createSlide("# Heading 1\n# Heading 1 another\n# Heading 1")
    return <Slide slide={slide} parser={parser} />
  })
  .add("single h1 - long text", () => {
    const slide = createSlide("# this is a heading with a really long title")
    return <Slide slide={slide} parser={parser} />
  })
  .add("single h1 with other elements", () => {
    const slide = createSlide("# Heading 1\n\nThis is some regular text")
    return <Slide slide={slide} parser={parser} />
  })
  .add("single h2", () => {
    const slide = createSlide("## Heading 2")
    return <Slide slide={slide} parser={parser} />
  })
  .add("all headers", () => {
    const slide = createSlide(
      "# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4"
    )
    return <Slide slide={slide} parser={parser} />
  })
  .add("bold / italic headers", () => {
    const slide = createSlide(
      "## This has **Bold** and *italics*, and ~~strikethrough~~"
    )
    return <Slide slide={slide} parser={parser} />
  })

storiesOf("Slides/Markdown/Lists", module)
  .addDecorator(s => <div style={{ width: "100%" }}>{s()}</div>)
  .addDecorator(withKnobs)
  .add("Regular list", () => {
    const slide = createSlide("* item 1\n* item 2\n* item 3")
    return <Slide slide={slide} parser={parser} />
  })

storiesOf("Slides/Markdown/Bold + Emphasis", module)
  .addDecorator(s => <div style={{ width: "100%" }}>{s()}</div>)
  .addDecorator(withKnobs)
  .add("Bold", () => {
    const slide = createSlide(
      "# header with **Bold**\nand regular content with **bold**"
    )
    return <Slide slide={slide} parser={parser} />
  })
  .add("Emphasis", () => {
    const slide = createSlide(
      "# header with *Emphasis*\nand regular content with *emphasis*"
    )
    return <Slide slide={slide} parser={parser} />
  })

storiesOf("Slides/Markdown/Links", module)
  .addDecorator(s => <div style={{ width: "100%" }}>{s()}</div>)
  .addDecorator(withKnobs)
  .add("single h1 - autofit", () => {
    const slide = createSlide(
      "[here is a link](https://google.com) - links should have pointer cursor when hover, and open in new tab"
    )
    return <Slide slide={slide} parser={parser} />
  })

storiesOf("Slides/Markdown/Background Images", module)
  .addDecorator(s => <div style={{ width: "100%" }}>{s()}</div>)
  .addDecorator(withKnobs)
  .add("Simple background image", () => {
    const slide = createSlide(`
![](http://localhost:9009/white.jpg)
# Background image
    `)
    return <Slide slide={slide} parser={parser} />
  })
  .add("Filtered background image", () => {
    const slide = createSlide(`
![filter](http://localhost:9009/porsche.jpg)
# Background image
    `)
    return <Slide slide={slide} parser={parser} />
  })
  .add("Inline image - maxed out", () => {
    const slide = createSlide(`
![inline](http://localhost:9009/porsche.jpg)
    `)
    return <Slide slide={slide} parser={parser} />
  })
  .add("Kenburns background image", () => {
    const slide = createSlide(`
![kenburns filter](http://localhost:9009/porsche.jpg)
# Background image
    `)
    return <Slide slide={slide} parser={parser} />
  })

storiesOf("Slides/Markdown/Code snippets", module)
  .addDecorator(s => <div style={{ width: "100%" }}>{s()}</div>)
  .addDecorator(withKnobs)
  .add("Snippet 1", () => {
    const slide = createSlide(`
## Here is a code snippet
\`\`\`javascript
${js}
\`\`\`
    `)
    return <Slide slide={slide} parser={parser} />
  })
  .add("Inline snippet - body", () => {
    const slide = createSlide(`here is a \`code\` snippet`)
    return <Slide slide={slide} parser={parser} />
  })
  .add("Inline snippet - header", () => {
    const slide = createSlide(`# here is a \`code\` snippet`)
    return <Slide slide={slide} parser={parser} />
  })

const tableSlideModel = createSlide(`
tables!

| Tables   |      Are      |  Cool |
|----------|-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |  $1 |
`)

storiesOf("Slides/Markdown/Tables", module).add("table support", () => (
  <div style={{ width: "100%" }}>
    <h1>Selected</h1>
    <Slide slide={tableSlideModel} parser={parser} />
  </div>
))

storiesOf("Slides/Markdown/Custom CSS", module)
  .addDecorator(s => <div style={{ width: "100%" }}>{s()}</div>)
  .addDecorator(withKnobs)
  .add("using custom CSS on elements", () => {
    const slide = createSlide("# blue stuff")
    slide.customCss = "h1 { color: blue; transform: rotate(-7deg); }"
    return <Slide slide={slide} parser={parser} />
  })

const textSplitSlideModel = createSlide(`
this is some text on the left side

+++

this is some text on the right side
`)

const imgUrl = "http://localhost:9009/porsche.jpg"

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

storiesOf("Slides/Markdown/Splitting", module)
  .addDecorator(withKnobs)
  .add("text split", () => (
    <div style={{ width: "100%" }}>
      <Slide slide={textSplitSlideModel} parser={parser} />
    </div>
  ))
  .add("image split left", () => (
    <div style={{ width: "100%" }}>
      <Slide slide={imageLeftSplitModel} parser={parser} />
    </div>
  ))
  .add("image split right", () => (
    <div style={{ width: "100%" }}>
      <Slide slide={imageRightSplitModel} parser={parser} />
    </div>
  ))
  .add("inline image split left", () => (
    <div style={{ width: "100%" }}>
      <Slide slide={inlineImageLeftSplitModel} parser={parser} />
    </div>
  ))
  .add("inline image split right", () => (
    <div style={{ width: "100%" }}>
      <Slide slide={inlineImageRightSplitModel} parser={parser} />
    </div>
  ))
  .add("code sample split left", () => (
    <div style={{ width: "100%" }}>
      <Slide slide={codeLeftSplitModel} parser={parser} />
    </div>
  ))
  .add("code sample split right", () => (
    <div style={{ width: "100%" }}>
      <Slide slide={codeRightSplitModel} parser={parser} />
    </div>
  ))

storiesOf("Slides/Click handler", module)
  .addDecorator(withKnobs)
  .add("Click handler", () => (
    <div style={{ width: "100%" }}>
      <Slide
        slide={createSlide("# Click me")}
        parser={parser}
        onClick={() => alert("clicked")}
      />
    </div>
  ))
  .add("Click handler with a link", () => (
    <div style={{ width: "100%" }}>
      <Slide
        slide={createSlide("# [google](https://google.com)")}
        parser={parser}
        onClick={() => alert("clicked")}
      />
    </div>
  ))
