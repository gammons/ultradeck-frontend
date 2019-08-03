import * as Highcharts from "highcharts"
import utils from "../../models/utils"

const loadPlugin = md => {
  md.core.ruler.push("fence", state => {
    for (let x = 0; x < state.tokens.length; x++) {
      if (
        state.tokens[x].type === "fence" &&
        state.tokens[x].info.trim() === "chart"
      ) {
        state.tokens[x].type = "chart"
      }
    }
  })
  const chartRenderer = (tokens, idx) => {
    const chartToken = tokens.find(t => t.type === "chart")
    const hash = utils.uniqueHash()
    setTimeout(() => {
      Highcharts.chart(hash, JSON.parse(chartToken.content))
    }, 100)
    return `<div id="${hash}"></div>`
  }
  md.renderer.rules.chart = chartRenderer
}

export default loadPlugin
