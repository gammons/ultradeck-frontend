// @flow strict
const style = document.createElement("style")
const iframe = document.createElement("iframe")
document.body.appendChild(iframe)
iframe.contentDocument.documentElement.appendChild(style)
iframe.style.display = "none"

export default function processCSS(css, prefix) {
  style.textContent = css

  const styleSheet = style.sheet

  let newRules = []
  for (let i = 0; i < styleSheet.cssRules.length; i++) {
    let text = styleSheet.cssRules[i].cssText
    newRules.push(`.${prefix} ${text}`)
  }

  return newRules.join("\n")
}
