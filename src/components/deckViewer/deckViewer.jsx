// @flow
import React, { useEffect, useState } from "react"

import MarkdownParser from "../../logic/markdown-parser"
import Slide from "../slide/slide"
import { Status } from "../../models/slide"

import resizeListener from "../hocs/resizeListener"

import "./deckViewer.css"

const DeckViewer = props => {
  const deck = props.deck
  const parser = new MarkdownParser()
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0)

  const getStatus = idx => {
    if (idx > currentSlideIdx) {
      return Status.Future
    } else if (idx === currentSlideIdx) {
      return Status.Current
    }
    return Status.Past
  }

  const onKeydown = event => {
    event.preventDefault()
    if (event.code === "ArrowRight" || event.code === "ArrowDown") {
      if (currentSlideIdx < deck.slides.length - 1) {
        setCurrentSlideIdx(currentSlideIdx + 1)
      }
    }
    if (event.code === "ArrowLeft" || event.code === "ArrowUp") {
      if (currentSlideIdx > 0) setCurrentSlideIdx(currentSlideIdx - 1)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", onKeydown, true)

    return () => {
      window.removeEventListener("keydown", onKeydown, true)
    }
  })

  const getZoom = () => {
    return `scale(${props.zoom}, ${props.zoom})`
  }

  const slides = deck.slides.map((slide, idx) => {
    const className = [getStatus(idx), slide.transition].filter(n => n)

    return (
      <li className={className.join(" ")}>
        <Slide slide={slide} parser={parser} slideStatus={getStatus(idx)} />
      </li>
    )
  })

  return (
    <div className="deckViewer">
      <div className="mask">
        <ul style={{ transformOrigin: "0 0", transform: getZoom() }}>
          {slides}
        </ul>
      </div>
    </div>
  )
}

export default resizeListener(DeckViewer)
