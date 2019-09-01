// @flow strict
import React from "react"
import MarkdownParser from "../../logic/markdown-parser"
import Slide from "../slide/slide"
import SlideModel, { Status } from "../../models/slide"
import DeckModel from "../../models/deck"

import "./lightTable.css"

type LightTableProps = {
  deck: DeckModel
}

const LightTable = (props: LightTableProps) => {
  const deck = props.deck
  const parser = new MarkdownParser()
  const slides = deck.slides.map(slide => (
    <li>
      <Slide slide={slide} parser={parser} slideStatus={Status.Current} />
    </li>
  ))

  return <ul className="lightTable">{slides}</ul>
}

export default LightTable
