// @flow
import * as React from "react"

import fitHeaders from "../../logic/fit-header"
import processCSS from "../../logic/prefixed-custom-css"
import * as constants from "../../constants"

import SlideModel, { Status } from "../../models/slide"
import MarkdownParser from "../../logic/markdown-parser"

import utils from "../../models/utils"

import "./slide.css"

export type SlideProps = {
  slide: SlideModel,
  parser: MarkdownParser,
  slideStatus?: Status,
  showPresenterNotes: ?boolean,
  width: ?number,
  widthPadding: ?number,
  scale: ?number,
  onClick(ev: React.MouseEvent): ?void
}

class Slide extends React.Component<SlideProps, object> {
  hash: string
  section: HTMLElement | null

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

  slideHtml() {
    if (this.props.showPresenterNotes) {
      return this.props.parser.parse(this.props.slide.presenterNotes || "", "")
    } else {
      return this.props.parser.parse(this.props.slide.markdown, "")
    }
  }

  classNames(): string {
    const ret = ["slide-outer"]

    ret.push(this.hash)
    ret.push(this.props.slide.themeClass)
    ret.push(this.props.slide.colorClass)
    ret.push(this.props.slideStatus)

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

  customCSS() {
    return processCSS(this.props.slide.customCss, this.hash)
  }

  render() {
    const createMarkup = () => ({
      __html: this.slideHtml()
    })

    return (
      <div onClick={this.onClick} className={this.classNames()}>
        <style type="text/css">{this.customCSS()}</style>
        <section
          ref={s => (this.section = s)}
          style={{
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
    )
  }
}

export default Slide
