import { HTML, nLink } from '../libs/frontend/index.js'

export class LinkComponent extends nLink {
  getName() { return 'link-component' }

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
    if (this.state.text) this.setText(this.state.text)
    if (this.state.href) this.setAttr('href', this.state.href)
  }

}
