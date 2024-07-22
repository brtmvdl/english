import { HTML, nFlex } from '../libs/frontend/index.js'

export class TwoColumnsComponent extends nFlex {
  getName() { return 'two-columns-component' }

  children = {
    html1: new HTML(),
    html2: new HTML(),
  }

  state = {
    widths: []
  }

  constructor({ html1 = new HTML(), html2 = new HTML(), widths = ['50%', '50%'] } = {}) {
    super()
    this.children.html1 = html1
    this.children.html2 = html2
    this.state.widths = widths
  }

  onCreate() {
    super.onCreate()
    if (this.state.widths[0]) this.children.html1?.setStyle('width', this.state.widths[0])
    this.append(this.children.html1)
    if (this.state.widths[1]) this.children.html2?.setStyle('width', this.state.widths[1])
    this.append(this.children.html2)
  }
}
