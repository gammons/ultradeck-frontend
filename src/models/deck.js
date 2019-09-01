// @flow strict

import utils from "./utils"
import SlideModel from "./slide"

type DeckModelProps = {
  uuid?: string,
  name: string,
  slides: SlideModel[]
}

export default class Deck {
  uuid: ?string
  name: string
  slides: SlideModel[]

  constructor(args: DeckModelProps) {
    this.uuid = args.uuid === undefined ? utils.generateUuid() : args.uuid
    this.name = args.name || "New deck"
    this.slides = args.slides
  }
}
