// @flow
import React, { useEffect, useState } from "react"
import * as constants from "../../constants"

const resizeListener = WrappedComponent => props => {
  const [width, setWidth] = useState(window.innerWidth)

  const ratio = constants.SLIDE_HEIGHT / constants.SLIDE_WIDTH

  const onResize = () => {
    if (window.innerHeight < window.innerWidth * ratio) {
      setWidth(window.innerHeight / ratio)
    } else {
      setWidth(window.innerWidth)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize, true)

    return () => {
      window.removeEventListener("resize", onResize, true)
    }
  })

  let finalWidth = width
  if (props.widthPadding) {
    finalWidth = width - props.widthPadding
  }

  return <WrappedComponent {...props} width={finalWidth} />
}

export default resizeListener
