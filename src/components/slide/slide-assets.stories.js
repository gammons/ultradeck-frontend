// @flow
import * as React from "react"
import { storiesOf } from "@storybook/react"

import MarkdownParser from "../../logic/markdown-parser"
import Slide from "./slide"
import SlideModel, { Status } from "../../models/slide"
import AssetModel from "../../models/asset"

const parser = new MarkdownParser()

const asset = new AssetModel()
asset.id = 1
asset.filename = "porsche.jpg"
asset.url = "http://localhost:6006/porsche.jpg"

const missingAsset = new AssetModel()
missingAsset.id = 2
missingAsset.filename = "nothere.jpg"
missingAsset.url = ""

const internalAssetSlide = new SlideModel()
internalAssetSlide.markdown = "![](porsche.jpg)"
internalAssetSlide.assets.push(asset)

const externalUrlAsset = new SlideModel()
externalUrlAsset.markdown =
  "![](http://st.motortrend.com/uploads/sites/5/2017/05/2018-Porsche-911-Carrera-GTS-Cabriolet-front-three-quarter-in-motion.jpg)"

const missingAssetSlide = new SlideModel()
missingAssetSlide.markdown = "![](nothere.jpg)"
missingAssetSlide.assets.push(missingAsset)

parser.setAssets([asset])

storiesOf("Components/Slides/Images/Loading paths", module)
  .add("Internal asset", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={internalAssetSlide}
        parser={parser}
      />
    </div>
  ))
  .add("External URL asset", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={externalUrlAsset}
        parser={parser}
      />
    </div>
  ))
  .add("Missing asset", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={missingAssetSlide}
        parser={parser}
      />
    </div>
  ))

const inlineSlide = new SlideModel()
inlineSlide.markdown = "## Here's a porsche:\n![inline](porsche.jpg)"
inlineSlide.assets.push(asset)

const kenburnsSlide = new SlideModel()
kenburnsSlide.markdown = "![kenburns](porsche.jpg)\n# Porsche"
kenburnsSlide.assets.push(asset)

storiesOf("Components/Slides/Images/Backround effects", module)
  .add("Inline asset", () => (
    <div style={{ width: 750 }}>
      <Slide slideStatus={Status.Current} slide={inlineSlide} parser={parser} />
    </div>
  ))
  .add("Ken burns effect", () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={kenburnsSlide}
        parser={parser}
      />
    </div>
  ))

const createFilteredSlide = (color: number): SlideModel => {
  const slide = new SlideModel()
  slide.markdown = "![filter](porsche.jpg)\n# Perrrshe"
  slide.color_variation = color
  slide.assets.push(asset)
  return slide
}

const createUnfilteredSlide = (color: number): SlideModel => {
  const slide = new SlideModel()
  slide.markdown = "![](porsche.jpg)\n# Perrrshe"
  slide.color_variation = color
  slide.assets.push(asset)
  return slide
}

storiesOf("Components/Slides/Images/Background filters", module).add(
  "Style 1",
  () => (
    <div>
      <h1>Style 1 Filtered / Unfiltered</h1>
      <ul style={{ display: "flex" }}>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createFilteredSlide(1)}
            parser={parser}
          />
        </li>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createUnfilteredSlide(1)}
            parser={parser}
          />
        </li>
      </ul>

      <hr />

      <h1>Style 2 Filtered / Unfiltered</h1>
      <ul style={{ display: "flex" }}>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createFilteredSlide(2)}
            parser={parser}
          />
        </li>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createUnfilteredSlide(2)}
            parser={parser}
          />
        </li>
      </ul>

      <hr />

      <h1>Style 3 Filtered / Unfiltered</h1>
      <ul style={{ display: "flex" }}>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createFilteredSlide(3)}
            parser={parser}
          />
        </li>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createUnfilteredSlide(3)}
            parser={parser}
          />
        </li>
      </ul>

      <hr />

      <h1>Style 4 Filtered / Unfiltered</h1>
      <ul style={{ display: "flex" }}>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createFilteredSlide(4)}
            parser={parser}
          />
        </li>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createUnfilteredSlide(4)}
            parser={parser}
          />
        </li>
      </ul>

      <hr />

      <h1>Style 5 Filtered / Unfiltered</h1>
      <ul style={{ display: "flex" }}>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createFilteredSlide(5)}
            parser={parser}
          />
        </li>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createUnfilteredSlide(5)}
            parser={parser}
          />
        </li>
      </ul>

      <hr />

      <h1>Style 6 Filtered / Unfiltered</h1>
      <ul style={{ display: "flex" }}>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createFilteredSlide(6)}
            parser={parser}
          />
        </li>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createUnfilteredSlide(6)}
            parser={parser}
          />
        </li>
      </ul>

      <hr />

      <h1>Style 7 Filtered / Unfiltered</h1>
      <ul style={{ display: "flex" }}>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createFilteredSlide(7)}
            parser={parser}
          />
        </li>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createUnfilteredSlide(7)}
            parser={parser}
          />
        </li>
      </ul>

      <hr />

      <h1>Style 8 Filtered / Unfiltered</h1>
      <ul style={{ display: "flex" }}>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createFilteredSlide(8)}
            parser={parser}
          />
        </li>
        <li style={{ width: 600 }}>
          <Slide
            slideStatus={Status.Current}
            slide={createUnfilteredSlide(8)}
            parser={parser}
          />
        </li>
      </ul>
    </div>
  )
)
const kenburnsAndFilteringSlide = new SlideModel()
kenburnsAndFilteringSlide.markdown =
  "![filter kenburns](porsche.jpg)\n# Porsche"
kenburnsAndFilteringSlide.assets.push(asset)

storiesOf("Components/Slides/Images/Multiple effects", module).add(
  "ken burns and filtering",
  () => (
    <div style={{ width: 750 }}>
      <Slide
        slideStatus={Status.Current}
        slide={kenburnsAndFilteringSlide}
        parser={parser}
      />
    </div>
  )
)
