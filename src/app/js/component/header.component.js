import { HTML, nFlex } from '../libs/frontend/index.js'
import { TwoColumnsComponent } from './two.columns.component.js'
import { LinkComponent } from './link.component.js'
// import { ImageComponent } from './image.component.js'

export class HeaderComponent extends HTML {
  getName() { return 'header-component' }

  onCreate() {
    super.onCreate()
    this.append(new TwoColumnsComponent({
      html1: this.getLogoComponent(),
      html2: this.getMenuComponent()
    }))
  }

  getLogoComponent() {
    return new LinkComponent({ text: 'english', href: '/' })
  }

  getMenuComponent() {
    const flex = new nFlex()
    flex.append(this.createLinkComponent({ text: 'reading', href: '/' }))
    flex.append(this.createLinkComponent({ text: 'writing', href: '/' }))
    flex.append(this.createLinkComponent({ text: 'listening', href: '/' }))
    flex.append(this.createLinkComponent({ text: 'exams', href: '/' }))
    return flex
  }

  createLinkComponent({ text, href }) {
    const link = new LinkComponent({ text, href })
    link.setStyle('margin-left', '1rem')
    return link
  }
}
