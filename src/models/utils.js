// @flow
type ClickEvent = {
  pageX: number,
  pageY: number
}

const utils = {
  uniqueHash: () => {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    )
  },
  mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps)
  },
  generateUuid: () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  },
  getUrlParam: (name: string) => {
    return (
      decodeURIComponent(
        (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
          window.location.search
        ) || [null, ""])[1].replace(/\+/g, "%20")
      ) || null
    )
  },
  calculatePercent: (el: HTMLElement, ev: ClickEvent) => {
    let parentNode = el.offsetParent
    let left = el.offsetLeft

    while (parentNode !== null) {
      if (parentNode.offsetLeft) {
        left += parentNode.offsetLeft
      }
      parentNode = parentNode.parentNode
    }
    const x = ev.pageX - left
    return x / el.offsetWidth
  },
  camelToSpace: (name: string) => {
    return name.replace(/([A-Z])/g, " $1").replace(/^./, function(str: string) {
      return str.toUpperCase()
    })
  }
}
export default utils
