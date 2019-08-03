const loadPlugin = md => {
  const localBackendImageRenderer = (tokens, idx: number) => {
    const token = tokens[idx]
    const srcIndex = token.attrIndex("src")
    const src = token.attrs[srcIndex][1]

    const assetUrl = () => {
      if (src.startsWith("http")) {
        return src
      }
      const asset = md.assets.find(ass => {
        const splitted = ass.url.split("/")
        return splitted[splitted.length - 1] === src
      })
      if (!asset) {
        return "https://app.ultradeck.co/images/noimage.png"
      }
      return asset.url
    }

    if (!token.content) {
      return `<img class='background-image' src='${assetUrl()}' />`
    }

    const effect = token.content.split(" ")[0]
    if (effect === "inline") {
      return `<img class='background-image-inline' src='${assetUrl()}' />`
    }

    const classNames = token.content
      .split(" ")
      .map(eff => `background-image-${eff}`)
    return `<div class='background-image ${classNames.join(
      " "
    )}' style='background-image: url("${assetUrl()}")'></div>`
  }

  md.renderer.rules.image = localBackendImageRenderer
}

export default loadPlugin
