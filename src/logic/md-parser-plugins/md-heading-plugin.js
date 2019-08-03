const loadPlugin = md => {
  md.core.ruler.push("heading-modifier", state => {
    for (let x = 0; x < state.tokens.length - 2; x++) {
      if (
        state.tokens[x].type === "heading_open" &&
        state.tokens[x].markup === "#" &&
        state.tokens[x + 1].type === "inline" &&
        state.tokens[x + 1].content.length > 0
      ) {
        if (state.tokens[x].attrs) {
          state.tokens[0].attrs[0][1] += " fit"
        } else {
          state.tokens[x].attrs = [["class", "fit"]]
        }
        state.tokens[x + 1].children[0].content = state.tokens[
          x + 1
        ].children[0].content.replace("[fit]", "")
      }
    }
  })
}

export default loadPlugin
