const loadPlugin = md => {
  md.core.ruler.push("heading-modifier", state => {
    if (!state.tokens || state.tokens.length === 0) {
      return
    }

    // handle the case where there is literally just one heading
    if (
      hasOneHeading(state.tokens) ||
      hasOneHeadingAndBackgroundImage(state.tokens)
    ) {
      addSingleHeadingClassToToken(headingOpenToken(state.tokens))
    }
  })
}

const hasOneHeading = tokens => {
  const firstToken = tokens[0]
  const lastToken = tokens[tokens.length - 1]
  return (
    firstToken.type === "heading_open" && lastToken.type === "heading_close"
  )
}

const headingOpenToken = tokens => {
  return tokens.filter(t => t.type === "heading_open")[0]
}

const hasOneHeadingAndBackgroundImage = tokens => {
  const hasHeadingOpenToken =
    tokens.filter(t => t.type === "heading_open").length === 1
  const hasBackgroundImage =
    tokens.filter(t => t.content.startsWith("![")).length === 1
  return tokens.length === 6 && hasHeadingOpenToken && hasBackgroundImage
}

const addSingleHeadingClassToToken = token => {
  if (token.attrs) {
    token.attrs[0][1] += " singleHeader"
  } else {
    token.attrs = [["class", "singleHeader"]]
  }
}

export default loadPlugin
