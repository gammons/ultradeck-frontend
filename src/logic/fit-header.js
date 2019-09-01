// @flow strict
import * as constants from "../constants"

const fitHeaders = (frame: HTMLElement) => {
  const elements = [
    "h1:not(.fit)",
    "h2:not(.fit)",
    "h3:not(.fit)",
    "h4:not(.fit)",
    "h5:not(.fit)",
    "h6:not(.fit)",
    "p",
    "ol",
    "ul"
  ]

  let totalOtherElementHeight = 0
  elements.forEach(e => {
    const els = frame.querySelectorAll(e)
    if (els.length === 0) {
      return
    }

    for (let x = 0; x < els.length; x++) {
      let el = els[x]
      totalOtherElementHeight += el.offsetHeight
    }
  })

  const totalFitElements = frame.querySelectorAll(".fit").length
  const fitElementHeight =
    (constants.SLIDE_HEIGHT - 50 - totalOtherElementHeight) / totalFitElements

  var li = frame.querySelectorAll(".fit")
  for (let i = 0; i < li.length; i++) {
    let el = li[i]
    el.style.display = "block"
    el.style.cssFloat = "left"
    el.style.clear = "left"

    // maximize the height
    el.style.fontSize = `${fitElementHeight}px`

    // if width is too wide after that, then maximize the width
    if (el.offsetWidth > constants.SLIDE_WIDTH - 50) {
      const widthRatio = parseInt(el.style.fontSize, 10) / el.offsetWidth
      const newFontSize = (constants.SLIDE_WIDTH - 50) * widthRatio
      el.style.fontSize = `${newFontSize}px`
    }
    el.style.cssFloat = "none"
  }
}

export default fitHeaders
