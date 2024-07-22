import { ImageComponent } from './image.component.js'

export class LogoComponent extends ImageComponent {
  getName() { return 'logo-component' }

  constructor() {
    super({ src: '/img/logo.png', alt: 'logo' })
  }
}
