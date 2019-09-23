// @flow strict
import React from "react"
import Slide from "../slide/slide"
import SlideModel, { Status } from "../../models/slide"
import DeckModel from "../../models/deck"
import * as constants from "../../constants"

import "./lightTable.css"

type LightTableProps = {
  deck: DeckModel,
  zoom?: number
}

const LightTable = (props: LightTableProps) => {
  const deck = props.deck
  const scale = 0.3

  const getZoom = () => {
    return `scale(${scale}, ${scale})`
  }

  const slides = deck.slides.map(slide => (
    <li
      style={{
        width: constants.SLIDE_WIDTH * scale,
        height: constants.SLIDE_HEIGHT * scale
      }}
    >
      <div
        style={{
          width: constants.SLIDE_WIDTH,
          height: constants.SLIDE_HEIGHT,
          transformOrigin: "0 0",
          transform: getZoom()
        }}
      >
        <Slide slide={slide} />
      </div>
    </li>
  ))

  return <ul className="lightTable">{slides}</ul>
}

export default LightTable
