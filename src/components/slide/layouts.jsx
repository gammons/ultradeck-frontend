import * as React from "react"

export const PictureFrame = ({ children }) => (
  <div className="layout-picture-frame">
    <div className="bordered">
      <div className="inner-box">{children}</div>
    </div>
  </div>
)

export const LeftTitle = ({ children }) => (
  <div className="layout-left-title">{children}</div>
)

export const CircleTitle = ({ children }) => (
  <div className="layout-circle-title">
    <div className="outer-circle">
      <div className="circle">{children}</div>
    </div>
  </div>
)
