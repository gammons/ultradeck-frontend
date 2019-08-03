// @flow
type AssetModelProps = {
  id: ?number,
  url: ?string,
  filename: ?string
}

export default class Asset {
  id: number
  url: string
  filename: string

  constructor(args: AssetModelProps = {}) {
    this.id = args.id
    this.url = args.url
    this.filename = args.filename || this.generateFilename()
  }

  generateFilename() {
    if (!this.url) {
      return null
    }
    const splitted = this.url.split("/")
    return splitted[splitted.length - 1]
  }

  formatForBackend() {
    return {
      id: this.id,
      url: this.url,
      filename: this.filename
    }
  }
}
