// @flow
import * as React from "react"
import { storiesOf } from "@storybook/react"

import LightTable from "./lightTable"
import DeckModel from "../../models/deck"
import SlideModel from "../../models/slide"
import MarkdownParser from "../../logic/markdown-parser"

const parser = new MarkdownParser()

const createSlide = (markdown: string): SlideModel => {
  const slide = new SlideModel()
  slide.markdown = markdown
  slide.parsedHTML = parser.parse(markdown)
  slide.themeClass = "theme-1"
  slide.colorClass = "color-1"
  return slide
}

const createDeck = (): DeckModel => {
  return new DeckModel({
    name: "Test deck",
    slides: [
      createSlide("# Slide 0"),
      createSlide("# Slide 1"),
      createSlide("Slide 2")
    ]
  })
}

storiesOf("LightTable", module)
  .addDecorator(s => <div style={{ width: "100%" }}>{s()}</div>)
  .add("simple", () => {
    return <LightTable deck={createDeck()} />
  })
