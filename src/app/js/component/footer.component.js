import { HTML, nFlex } from '../libs/frontend/index.js'
import { SeparatorComponent } from './separator.component.js'
import { LinkComponent } from './link.component.js'
import { LogoComponent } from './logo.component.js'

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
    return new LinkComponent({ text: 'english', href: '/' })
  }

  getLogoLink() {
    const link = new LinkComponent({ href: '/' })
    link.append(new LogoComponent())
    return link
  }

  getInfoComponent() {
    const html = new HTML()
    html.append(new LinkComponent({ text: 'about us', href: '/about-us/' }))
    html.append(new LinkComponent({ text: 'terms of use', href: '/terms-of-use/' }))
    html.append(new LinkComponent({ text: 'privacy policy', href: '/privacy-policy/' }))
    return html
  }

  getSocialsComponent() {
    const html = new HTML()
    html.append(new LinkComponent({ text: 'instagram', href: '/instagram/' }))
    html.append(new LinkComponent({ text: 'facebook', href: '/facebook/' }))
    html.append(new LinkComponent({ text: 'youtube', href: '/youtube/' }))
    return html
  }

  getUpgradePlanButtonComponent() {
    return  new LinkComponent({ text: 'upgrade', href: '/upgrade/' })
  }
}
