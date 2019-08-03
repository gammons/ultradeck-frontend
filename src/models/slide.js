// @flow
import Asset from "./asset"
import utils from "./utils"

type SlideModelProps = {
  id?: number,
  uuid?: string,
  position?: number,
  transition?: string,
  layout?: string,
  theme_name: string,
  color_variation: number,
  markdown?: string,
  custom_css?: string,
  presenter_notes?: string,
  assets?: Asset[]
}

export const Status = {
  Past: "past",
  Current: "current",
  Future: "future"
}

// export Status

const defaultArgs = {
  theme_name: "bebas",
  color_variation: 1
}

export default class SlideModel {
  id: number
  uuid: string
  position: number
  markdown: ?string
  layout: ?string
  custom_css: string | null
  presenter_notes: string | null
  theme_name: string
  color_variation: number
  transition: ?string
  assets: Asset[]

  constructor(args: SlideModelProps = defaultArgs) {
    this.id = args.id
    this.uuid = args.uuid || utils.generateUuid()
    this.position = args.position
    this.theme_name = args.theme_name
    this.color_variation = args.color_variation
    this.markdown = args.markdown
    this.layout = args.layout
    this.custom_css = args.custom_css
    this.presenter_notes = args.presenter_notes
    this.transition = args.transition
    this.assets = []
  }

  clone() {
    return new SlideModel({
      uuid: utils.generateUuid(),
      theme_name: this.theme_name,
      color_variation: this.color_variation,
      markdown: this.markdown,
      layout: this.layout,
      custom_css: this.custom_css,
      presenter_notes: this.presenter_notes,
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
      theme_name: this.theme_name,
      color_variation: this.color_variation,
      layout: this.layout,
      markdown: this.markdown,
      custom_css: this.custom_css,
      presenter_notes: this.presenter_notes,
      transition: this.transition
    }
  }
}
