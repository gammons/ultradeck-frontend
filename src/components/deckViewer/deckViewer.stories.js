// @flow
import * as React from "react"
import { storiesOf } from "@storybook/react"

import DeckViewer from "./deckViewer"
import DeckModel from "../../models/deck"
import SlideModel from "../../models/slide"

const createSlide = (markdown: string): SlideModel => {
  const slide = new SlideModel()
  slide.markdown = markdown
  slide.themeClass = "theme-1"
  slide.colorClass = "color-1"
  return slide
}

const deck = new DeckModel({
  name: "Test deck",
  slides: [
    createSlide("# Slide 0"),
    createSlide("# Slide 1"),
    createSlide("Slide 2")
  ]
})

storiesOf("DeckViewer", module)
  .addDecorator(s => <div style={{ width: "100%" }}>{s()}</div>)
  .add("simple", () => {
    return <DeckViewer deck={deck} currentSlideIdx={0} />
  })
