import { HTML, nFlex, nImage } from '../libs/frontend/index.js'

export class GridComponent extends HTML {
  state = {
    length: '',
    elements: '',
  }

  constructor({ length = '', elements = '' } = {}) {
    super()
    this.state.length = length
    this.state.elements = elements
  }

  getName() { return 'image-component' }

  onCreate() {
    super.onCreate()
    this.append(this.getGridComponent())
  }

  getGridComponent() {
    const html = new HTML()

    this.getGridElements().map((line) => {
      const flex = new nFlex()
      Array.from(line).map((el) => flex.append(el))
      html.append(flex)
    })

    return html
  }

  getGridElements() {
    return Array.from(this.state.elements).reduce((arr, el, ix) => {
      if (ix % this.state.length == 0) arr.push([])
      arr[arr.length - 1].push(el)
      return arr
    }, [])
  }
}
