// @flow
import * as React from "react"
import { storiesOf } from "@storybook/react"

import DeckViewer from "./deckViewer"
import DeckModel from "../../models/deck"
import SlideModel from "../../models/slide"
import MarkdownParser from "../../logic/markdown-parser"

const parser = new MarkdownParser()

const createSlide = (markdown: string, effect: string): SlideModel => {
  const slide = new SlideModel()
  slide.markdown = markdown
  slide.parsedHTML = parser.parse(markdown)
  slide.themeClass = "theme-1"
  slide.transition = effect
  slide.colorClass = "color-1"
  return slide
}

const createDeck = (effect: string): DeckModel => {
  return new DeckModel({
    name: "Test deck",
    slides: [
      createSlide("# Slide 0", effect),
      createSlide("# Slide 1", effect),
      createSlide("Slide 2", effect)
    ]
  })
}

storiesOf("DeckViewer", module)
  .addDecorator(s => <div style={{ width: "100%" }}>{s()}</div>)
  .add("simple", () => {
    return <DeckViewer deck={createDeck("")} />
  })
  .add("slide effect", () => {
    return <DeckViewer deck={createDeck("slide-effect")} />
  })
  .add("Fade effect", () => {
    return <DeckViewer deck={createDeck("fade-effect")} />
  })
