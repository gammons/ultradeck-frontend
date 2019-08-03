const loadPlugin = (md) => {
  md.core.ruler.push('panels', state => {
    let panelIdx
    for (let x = 1; x < (state.tokens.length - 1); x++) {
      if (state.tokens[x - 1].type === 'paragraph_open' &&
        state.tokens[x].type === 'inline' &&
        state.tokens[x].content === '+++') {
        panelIdx = x
      }
    }
    if (panelIdx) {
      const leftPane = {
        type: 'panel',
        tag: 'div',
        content:  '',
        children: state.tokens.slice(0, panelIdx - 1)
      }
      const rightPane = {
        type: 'null',
        tag: 'div',
        content:  '',
        children: state.tokens.slice(panelIdx + 2, state.tokens.length)
      }
      state.tokens = [leftPane, rightPane]
    }
  })

  md.renderer.rules.panel =  (tokens, idx, options, env) => {
    const leftHtml = md.renderer.render(tokens[0].children, options, env)
    const rightHtml = md.renderer.render(tokens[1].children, options, env)
    return `<div class='left'>${leftHtml}</div><div class='right'>${rightHtml}</div>`
  }
}

export default loadPlugin
