// @flow
import * as React from "react"
import { storiesOf } from "@storybook/react"

import MarkdownParser from "../../logic/markdown-parser"
import Slide from "../../components/slide/slide"
import SlideModel, { Status } from "../../models/slide"
import AssetModel from "../../models/asset"

const h1 = new SlideModel()
h1.theme_name = "bebas"
h1.color_variation = 8
h1.markdown = `
# Big hash
`

const h1SmallWords = new SlideModel()
h1SmallWords.theme_name = "bebas"
h1SmallWords.color_variation = 8
h1SmallWords.markdown = `
# Big
`

const h1a = new SlideModel()
h1a.theme_name = "bebas"
h1a.color_variation = 8
h1a.markdown = `
# Big hash
# Another fitter
`

const h1b = new SlideModel()
h1b.theme_name = "bebas"
h1b.color_variation = 8
h1b.markdown = `
# Big hash
# *Another fitter*
# a 3rd fitter
`

const asset = new AssetModel()
asset.id = 1
asset.filename = "porsche.jpg"
asset.url = "http://localhost:6006/porsche.jpg"

const h1WithAsset = new SlideModel()
h1WithAsset.theme_name = "bebas"
h1WithAsset.color_variation = 7
h1WithAsset.assets.push(asset)
h1WithAsset.markdown = `
![](porsche.jpg)
# Big hash
`

const h1WithAList = new SlideModel()
h1WithAList.theme_name = "bebas"
h1WithAList.color_variation = 8
h1WithAList.markdown = `
# Big hash

* With
* a
* list too
`

const h2 = new SlideModel()
h2.theme_name = "bebas"
h2.color_variation = 8
h2.markdown = `
## Secondary header
`

const h2WithList = new SlideModel()
h2WithList.theme_name = "bebas"
h2WithList.color_variation = 8
h2WithList.markdown = `
## Secondary header

* With
* a big ol'
* Listicle
`

const h3 = new SlideModel()
h3.theme_name = "bebas"
h3.color_variation = 8
h3.markdown = `
### Tertiary header
`

const h4 = new SlideModel()
h4.theme_name = "bebas"
h4.color_variation = 8
h4.markdown = `
#### Fourthiary header
`

const createThemeSlide = (theme: string, markdown: string): SlideModel => {
  const slide = new SlideModel()
  slide.theme_name = theme
  slide.markdown = markdown
  slide.color_variation = 8
  return slide
}

const parser = new MarkdownParser()

storiesOf("Components/Slides/Markdown/Headers", module)
  .add("h2", () => (
    <div style={{ width: 750 }}>
      <Slide slideStatus={Status.Current} slide={h2} parser={parser} />
    </div>
  ))
  .add("h2 with a list", () => (
    <div style={{ width: 750 }}>
      <Slide slideStatus={Status.Current} slide={h2WithList} parser={parser} />
    </div>
  ))
  .add("h3", () => (
    <div style={{ width: 750 }}>
      <Slide slideStatus={Status.Current} slide={h3} parser={parser} />
    </div>
  ))
  .add("h4", () => (
    <div style={{ width: 750 }}>
      <Slide slideStatus={Status.Current} slide={h4} parser={parser} />
    </div>
  ))

storiesOf("Components/Slides/Markdown/Autofit headers", module)
  .add("Fitted header with background image", () => (
    <div style={{ width: 750 }}>
      <Slide slideStatus={Status.Current} slide={h1WithAsset} parser={parser} />
    </div>
  ))
  .add("Fitted header with a list", () => <div style={{ width: 750 }}></div>)

interface Props {
  theme: string;
}

const Slides = (props: Props) => (
  <div style={{ width: 750 }}>
    <Slide
      slideStatus={Status.Current}
      slide={createThemeSlide(props.theme, "# Big")}
      parser={parser}
    />
    <hr />
    <Slide
      slideStatus={Status.Current}
      slide={createThemeSlide(props.theme, "# Big hash")}
      parser={parser}
    />
    <hr />
    <Slide
      slideStatus={Status.Current}
      slide={createThemeSlide(
        props.theme,
        "# Big hash\n# Another fitter\n# A 3rd fitter"
      )}
      parser={parser}
    />
    <hr />
    <Slide
      slideStatus={Status.Current}
      slide={createThemeSlide(
        props.theme,
        "# Big hash\n* with a **really**\n* really nice list"
      )}
      parser={parser}
    />
  </div>
)

storiesOf("Components/Slides/Markdown/Autofit headers Themes", module)
  .add("Bebas", () => <Slides theme={"bebas"} />)
  .add("Fauna", () => <Slides theme={"fauna"} />)
  .add("Franklin", () => <Slides theme={"franklin"} />)
  .add("League", () => <Slides theme={"league"} />)
  .add("Lobster", () => <Slides theme={"lobster"} />)
  .add("Ostrich", () => <Slides theme={"ostrich"} />)
  .add("Oswald", () => <Slides theme={"oswald"} />)
  .add("Yanone", () => <Slides theme={"yanone"} />)
