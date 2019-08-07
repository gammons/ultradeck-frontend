// @flow
import * as React from "react"
import { SFC } from "react"

import * as Layouts from "./layouts"

import fitHeaders from "../../logic/fit-header"
import processCSS from "../../logic/prefixed-custom-css"
import * as constants from "../../constants"

import SlideModel, { Status } from "../../models/slide"
import MarkdownParser from "../../logic/markdown-parser"

import utils from "../../models/utils"

export type SlideProps = {
  slide: SlideModel,
  parser: MarkdownParser,
  slideStatus?: Status,
  showPresenterNotes: ?boolean,
  width: ?number,
  zoom: ?number,
  onClick(ev: React.MouseEvent): ?void
}

export default class Slide extends React.Component<SlideProps, object> {
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
      return this.props.parser.parse(this.props.slide.presenter_notes || "", "")
    } else {
      return this.props.parser.parse(this.props.slide.markdown, "")
    }
  }

  themeCss(): string {
    const ret = []
    ret.push(this.props.slide.theme_name)
    ret.push(this.hash)

    return ret.join(" ")
  }

  colorCss(): string {
    const ret = []
    ret.push(this.props.slide.color_class)
    ret.push(this.hash)

    return ret.join(" ")
  }

  frameClassName() {
    const ret = ["frame"]
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
    if (this.props.slideStatus) {
      ret.push(this.props.slideStatus)
    }
    return ret.join(" ")
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
    return processCSS(this.props.slide.custom_css, this.hash)
  }

  render() {
    const createMarkup = () => ({
      __html: this.slideHtml()
    })

    const Layout = this.props.slide.layout
      ? Layouts[this.props.slide.layout]
      : FrameLayout

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
            className="section"
            ref={s => (this.section = s)}
            style={{
              transformOrigin: "0 0",
              transform: this.getScale(),
              width: constants.SLIDE_WIDTH,
              height: constants.SLIDE_HEIGHT
            }}
          >
            <Layout frameClassName={this.frameClassName()}>
              <div dangerouslySetInnerHTML={createMarkup()} />
            </Layout>
          </section>
        </div>
      </div>
    )
  }
}

const FrameLayout: SFC<{ frameClassName: string }> = ({
  children,
  frameClassName
}) => <div className={frameClassName}>{children}</div>
