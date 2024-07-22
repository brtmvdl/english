import { HTML } from '../libs/frontend/index.js'

export class SeparatorComponent extends HTML {
  getName() { return 'separator-component' }

  onCreate() {
    super.onCreate()
    this.setStyles()
  }

  setStyles() {
    this.setContainerStyle('height', '100%')
    this.setContainerStyle('background-color', '#000000')
    this.setContainerStyle('display', 'inline-block')
    this.setContainerStyle('width', '1rem')
  }
}
