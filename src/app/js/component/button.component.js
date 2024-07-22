import { nButton } from '../libs/frontend/index.js'

export class ButtonComponent extends nButton {
  state = { text: '', onclick: (() => { }) }

  constructor({ text = '', onclick = (() => { }) } = {}) {
    super()
    this.state.text = text
    this.state.onclick = onclick
  }

  getName() { return 'button-component' }

  onCreate() {
    super.onCreate()
    if (this.state.text) this.setText(this.state.text)
    this.addEventListener('click', () => this.state.onclick?.())
  }
}
