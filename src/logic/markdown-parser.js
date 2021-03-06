// @flow strict
import * as Markdown from "markdown-it"
//import * as KatexPlugin from "markown-it-katex"
import * as mila from "markdown-it-link-attributes"
import * as Hljs from "highlight.js"
import * as emoji from "node-emoji"

import ImagePlugin from "./md-parser-plugins/md-image-plugin"
import HeadingPlugin from "./md-parser-plugins/md-heading-plugin"
import SingleHeadingPlugin from "./md-parser-plugins/md-single-heading-plugin"
import ChartPlugin from "./md-parser-plugins/md-chart-plugin"
import PanelsPlugin from "./md-parser-plugins/md-panels-plugin"

export default class MarkdownParser {
  md: Markdown.MarkdownIt

  constructor() {
    this.md = new Markdown({ html: true })
    this.md.use(ImagePlugin)
    this.md.use(HeadingPlugin)
    this.md.use(SingleHeadingPlugin)
    this.md.use(ChartPlugin)
    this.md.use(PanelsPlugin)
    //this.md.use(KatexPlugin)
    this.md.use(mila, { attrs: { target: "_blank" } })
    this.md.assets = []

    this.md.options.highlight = (str: string, lang: string) => {
      if (lang && Hljs.getLanguage(lang)) {
        try {
          return Hljs.highlight(lang, str).value
        } catch (__) {
          return ""
        }
      }
      return ""
    }
  }

  parse(rawMarkdown: string, assetsUrl: string) {
    this.md.assetsUrl = assetsUrl
    const emojiMarkdown = emoji.emojify(rawMarkdown)
    this.md.slideTokens = this.md.parse(emojiMarkdown, {})
    return this.md.render(emojiMarkdown)
  }
}
