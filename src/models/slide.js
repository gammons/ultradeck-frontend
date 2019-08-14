// @flow
import utils from "./utils"

type SlideModelProps = {
  uuid?: string,
  transition?: string,
  layout?: string,
  themeClass: string,
  colorClass: string,
  markdown?: string,
  customCss?: string,
  presenterNotes?: string,
}

export const Status = {
  Past: "past",
  Current: "current",
  Future: "future"
}

const defaultArgs = {
  themeClass: "theme-1",
  colorClass: "color-1"
}

export default class SlideModel {
  uuid: string
  markdown: ?string
  layoutClass: ?string
  custom_css: string | null
  presenter_notes: string | null
  themeClass: string
  colorClass: string
  transition: ?string

  constructor(args: SlideModelProps = defaultArgs) {
    this.uuid = args.uuid || utils.generateUuid()
    this.themeClass = args.themeClass
    this.colorClass = args.colorClass
    this.markdown = args.markdown
    this.layoutClass = args.layoutClass
    this.customCss = args.customCss
    this.presenterNotes = args.presenterNotes
    this.transition = args.transition
  }

  clone() {
    return new SlideModel({
      uuid: utils.generateUuid(),
      colorClass: this.colorClass,
      layoutClass: this.layoutClass,
      themeClass: this.themeClass,
      markdown: this.markdown,
      customCss: this.customCss,
      presenterNotes: this.presenterNotes,
      transition: this.transition,
    })
  }

  formatForBackend() {
    return {
      id: this.id,
      uuid: this.uuid,
      themeClass: this.themeClass,
      colorClass: this.colorClass,
      layoutClass: this.layoutClass,
      markdown: this.markdown,
      customCss: this.customCss,
      presenterNotes: this.presenterNotes,
      transition: this.transition
    }
  }
}
