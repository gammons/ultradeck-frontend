// @flow
import React from "react"

import MarkdownParser from "../../logic/markdown-parser"
import Slide from "../slide/slide"
import { Status } from "../../models/slide"

const DeckViewer = props => {
  const deck = props.deck
  const parser = new MarkdownParser()

  const getStatus = idx => {
    if (idx > props.currentSlideIdx) {
      return Status.Future
    } else if (idx === props.currentSlideIdx) {
      return Status.Current
    }
    return Status.Past
  }

  const slides = deck.slides.map((slide, idx) => <Slide slide={slide} parser={parser} slideStatus={getStatus(idx)} />)

  return <React.Fragment>{slides}</React.Fragment>
}

export default DeckViewer
