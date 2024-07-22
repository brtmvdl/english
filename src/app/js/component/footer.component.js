import { HTML, nFlex } from '../libs/frontend/index.js'
import { SeparatorComponent } from './separator.component.js'
import { LinkComponent } from './link.component.js'
import { ButtonComponent } from './button.component.js'
import { LogoComponent } from './logo.component.js'
import * as Flow from '../utils/flow.js'

export class FooterComponent extends HTML {
  getName() { return 'footer-component' }

  onCreate() {
    super.onCreate()
    this.append(this.getFlex())
  }

  getFlex() {
    const flex = new nFlex()
    flex.append(this.getCopyRightComponent())
    if (this.isLandscape()) flex.append(new SeparatorComponent())
    flex.append(this.getInfoComponent())
    if (this.isLandscape()) flex.append(new SeparatorComponent())
    flex.append(this.getSocialsComponent())
    if (this.isLandscape()) flex.append(new SeparatorComponent())
    flex.append(this.getUpgradePlanButtonComponent())
    return flex
  }

  isLandscape() {
    return (window.innerWidth / window.innerHeight) > 1
  }

  getCopyRightComponent() {
    const html = new HTML()
    const link = this.getLogoLink()
    link.setContainerStyle('width', '10rem')
    html.append(link)
    return html
  }

  getLogoLink() {
    const link = new LinkComponent({ href: '/' })
    link.append(new LogoComponent())
    return link
  }

  getInfoComponent() {
    const html = new HTML()
    html.append(new LinkComponent({ text: 'About us', href: '/' }))
    html.append(new LinkComponent({ text: 'Terms of Use', href: '/' }))
    html.append(new LinkComponent({ text: 'Privacy Policy', href: '/' }))
    return html
  }

  getSocialsComponent() {
    const html = new HTML()
    html.append(new LinkComponent({ text: 'Instagram', href: '?' }))
    html.append(new LinkComponent({ text: 'Facebook', href: '?' }))
    html.append(new LinkComponent({ text: 'Youtube', href: '?' }))
    return html
  }

  getUpgradePlanButtonComponent() {
    return new ButtonComponent({ text: 'upgrade', onclick: () => Flow.goTo('/upgrade/') })
  }
}
