// @flow strict
import utils from "./utils"

type SlideModelProps = {
  uuid?: string,
  transition?: string,
  layout?: string,
  themeClass: string,
  colorClass: string,
  markdown?: string,
  customCss?: string,
  layoutClass?: string,
  presenterNotes?: string
}

export const Status = {
  Past: "past",
  Current: "current",
  Future: "future"
}

const defaultArgs = {
  themeClass: "theme-1",
  colorClass: "color-1",
  customCss: "",
  presenterNotes: ""
}

export default class SlideModel {
  uuid: string | null
  markdown: ?string
  layoutClass: ?string
  customCss: ?string
  presenterNotes: ?string
  themeClass: string
  colorClass: string
  transition: ?string

  constructor(args: SlideModelProps = defaultArgs) {
    this.uuid = args.uuid === undefined ? utils.generateUuid() : args.uuid
    this.themeClass = args.themeClass
    this.colorClass = args.colorClass
    this.markdown = args.markdown
    if (args.layoutClass !== undefined) this.layoutClass = args.layoutClass
    this.customCss = args.customCss
    this.presenterNotes = args.presenterNotes
    this.transition = args.transition
  }
}
