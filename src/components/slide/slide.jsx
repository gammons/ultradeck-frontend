// @flow
import * as React from "react"

import fitHeaders from "../../logic/fit-header"
import processCSS from "../../logic/prefixed-custom-css"
import * as constants from "../../constants"

import SlideModel, { Status } from "../../models/slide"
import MarkdownParser from "../../logic/markdown-parser"

import utils from "../../models/utils"

import resizeListener from "./resizeListener"

import "./slide.css"

export type SlideProps = {
  slide: SlideModel,
  parser: MarkdownParser,
  slideStatus?: Status,
  showPresenterNotes: ?boolean,
  width: ?number,
  widthPadding: ?number,
  zoom: ?number,
  onClick(ev: React.MouseEvent): ?void
}

class Slide extends React.Component<SlideProps, object> {
  hash: string
  section: HTMLElement | null
  slideHolder: HTMLElement | null

  constructor(props: SlideProps) {
    super(props)

    this.onClick = this.onClick.bind(this)
    this.hash = utils.uniqueHash()
  }

  componentDidMount() {
    if (!this.section) return

    setTimeout(this.forceUpdate.bind(this), 50)
    setTimeout(fitHeaders.bind(this, this.section), 100)
  }

  componentDidUpdate() {
    if (!this.section) return
    fitHeaders(this.section)
  }

  onClick(ev: React.MouseEvent<HTMLDivElement>) {
    if (this.props.onClick) {
      this.props.onClick(ev)
    }
  }

  getScale() {
    return `scale(${this.getZoom()}, ${this.getZoom()})`
  }

  getWidth() {
    if (this.props.width) {
      return this.props.width
    }
    if (!this.slideHolder) {
      return null
    }
    const parentNode = this.slideHolder.parentNode
    return parentNode.offsetWidth
  }

  getZoom() {
    if (this.props.zoom) {
      return this.props.zoom
    }
    return this.getWidth() / constants.SLIDE_WIDTH
  }

  slideHtml() {
    if (this.props.showPresenterNotes) {
      return this.props.parser.parse(this.props.slide.presenterNotes || "", "")
    } else {
      return this.props.parser.parse(this.props.slide.markdown, "")
    }
  }

  themeCss(): string {
    const ret = []
    ret.push(this.props.slide.themeClass)
    ret.push(this.hash)

    return ret.join(" ")
  }

  colorCss(): string {
    const ret = []
    ret.push(this.props.slide.colorClass)
    ret.push(this.hash)

    return ret.join(" ")
  }

  frameClassName() {
    const ret = []
    ret.push(this.props.slide.layoutClass || "frame")
    if (this.slideHtml().includes("singleHeader")) {
      ret.push("singleElement")
    }

    return ret.join(" ")
  }

  outerClassName() {
    const ret = ["slide-outer"]
    if (this.props.slide.transition) {
      ret.push(`transition-${this.props.slide.transition}-effect`)
    }
    return ret.join(" ")
  }

  sectionClassName() {
    return this.props.slideStatus
  }

  outerDivStyle(): object {
    if (this.props.slideStatus === Status.Current) {
      return {
        height: constants.SLIDE_HEIGHT * this.getZoom(),
        width: constants.SLIDE_WIDTH * this.getZoom()
      }
    } else {
      return {}
    }
  }

  customCSS() {
    return processCSS(this.props.slide.customCss, this.hash)
  }

  render() {
    const createMarkup = () => ({
      __html: this.slideHtml()
    })

    console.log("slide props = ", this.props)
    return (
      <div
        onClick={this.onClick}
        className={this.outerClassName()}
        ref={r => (this.slideHolder = r)}
      >
        <style type="text/css">{this.customCSS()}</style>
        <div
          className={`${this.themeCss()} ${this.colorCss()}`}
          style={this.outerDivStyle()}
        >
          <section
            className={this.sectionClassName()}
            ref={s => (this.section = s)}
            style={{
              transformOrigin: "0 0",
              transform: this.getScale(),
              width: constants.SLIDE_WIDTH,
              height: constants.SLIDE_HEIGHT
            }}
          >
            <div className={this.frameClassName()}>
              <div>
                <div>
                  <div dangerouslySetInnerHTML={createMarkup()} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default resizeListener(Slide)
