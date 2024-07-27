import { HTML } from '../libs/frontend/index.js'
import { HeaderComponent } from './header.component.js'
import { FooterComponent } from './footer.component.js'

export class PageComponent extends HTML {
  children = { body: new HTML() }

  getName() { return 'page' }

  onCreate() {
    super.onCreate()
    this.setStyles()
    this.append(new HeaderComponent())
    this.append(this.getBody())
    this.append(new FooterComponent())
  }

  setStyles() {
    this.setStyle('margin', '0rem auto')
    this.setStyle('max-width', '60rem')
  }

  getBody() { return this.children.body }

  appendBody(el = new HTML()) {
    this.children.body.append(el)
    return this
  }
}
