import { HTML, nImage } from '../libs/frontend/index.js'

export class ImageComponent extends nImage {
  getName() { return 'image-component' }

  state = {
    src: '',
    alt: '',
  }

  constructor({ src = '', alt = '' } = {}) {
    super()
    this.state.src = src
    this.state.alt = alt
  }

  onCreate() {
    super.onCreate()
    this.setAttr('src', this.state.src)
    this.setAttr('alt', this.state.alt)
  }

}
