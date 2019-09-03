// @flow
import React, { useEffect, useState } from "react"
import * as constants from "../../constants"

const resizeListener = WrappedComponent => props => {
  const ratio = constants.SLIDE_HEIGHT / constants.SLIDE_WIDTH

  const [width, setWidth] = useState(window.innerWidth)
  const [holder, setHolder] = useState(null)

  const calculateZoom = () => {
    if (!holder) return 0

    return holder.parentNode.offsetWidth / constants.SLIDE_WIDTH
  }

  const onResize = () => {
    if (window.innerHeight < window.innerWidth * ratio) {
      setWidth(window.innerHeight / ratio)
    } else {
      setWidth(window.innerWidth)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize, true)
    if (holder) {
      calculateZoom()
    }

    return () => {
      window.removeEventListener("resize", onResize, true)
    }
  })

  return (
    <div ref={r => setHolder(r)}>
      <WrappedComponent {...props} zoom={calculateZoom()} />
    </div>
  )
}

export default resizeListener
