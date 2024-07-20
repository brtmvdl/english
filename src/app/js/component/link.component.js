import { HTML, nLink } from '../libs/frontend/index.js'

export class LinkComponent extends nLink {
  state = {
    text: '',
    href: '',
  }

  constructor({ text = '', href = '' } = {}) {
    super()
    this.state.text = text
    this.state.href = href
  }

  onCreate() {
    super.onCreate()
    this.setText(this.state.text)
    this.setAttr('href', this.state.href)
  }

}
