// @flow
import Asset from "./asset"
import utils from "./utils"

type SlideModelProps = {
  id?: number,
  uuid?: string,
  position?: number,
  transition?: string,
  layout?: string,
  themeClass: string,
  colorClass: string,
  markdown?: string,
  customCss?: string,
  presenterNotes?: string,
  assets?: Asset[]
}

export const Status = {
  Past: "past",
  Current: "current",
  Future: "future"
}

// export Status

const defaultArgs = {
  themeClass: "theme-1",
  colorClass: "color-1"
}

export default class SlideModel {
  id: number
  uuid: string
  position: number
  markdown: ?string
  layout: ?string
  custom_css: string | null
  presenter_notes: string | null
  themeClass: string
  colorClass: string
  transition: ?string
  assets: Asset[]

  constructor(args: SlideModelProps = defaultArgs) {
    this.id = args.id
    this.uuid = args.uuid || utils.generateUuid()
    this.position = args.position
    this.themeClass = args.themeClass
    this.colorClass = args.colorClass
    this.markdown = args.markdown
    this.layout = args.layout
    this.customCss = args.customCss
    this.presenterNotes = args.presenterNotes
    this.transition = args.transition
    this.assets = []
  }

  clone() {
    return new SlideModel({
      uuid: utils.generateUuid(),
      themeClass: this.themeClass,
      colorClass: this.colorClass,
      markdown: this.markdown,
      layout: this.layout,
      customCss: this.customCss,
      presenterNotes: this.presenterNotes,
      transition: this.transition,
      assets: this.assets
    })
  }

  insertBackgroundImage(imageUrl: string) {
    this.markdown = `![](${imageUrl})\n\n${this.markdown}`
  }

  formatForBackend() {
    return {
      id: this.id,
      uuid: this.uuid,
      themeClass: this.themeClass,
      colorClass: this.colorClass,
      layout: this.layout,
      markdown: this.markdown,
      customCss: this.customCss,
      presenterNotes: this.presenterNotes,
      transition: this.transition
    }
  }
}
