import { HTML } from './js/libs/frontend/index.js'
import { HeaderComponent } from './js/component/header.component.js'
import { FooterComponent } from './js/component/footer.component.js'
import { LinkComponent } from './js/component/link.component.js'
import { ImageComponent } from './js/component/image.component.js'
import { TextComponent } from './js/component/text.component.js'
import { GridComponent } from './js/component/grid.component.js'
import { getLearningList } from './js/lists/learning.list.js'

export class PageComponent extends HTML {
  getName() { return 'page' }

  onCreate() {
    super.onCreate()
    this.setStyles()
    this.append(new HeaderComponent())
    this.appendBody()
    this.append(new FooterComponent())
  }

  setStyles() {
    this.setStyle('margin', '0rem auto')
    this.setStyle('max-width', '60rem')
  }
}

export class Page extends PageComponent {
  appendBody() {
    this.append(this.getJumbotronComponent())
    this.append(this.getLearningListComponent())
  }

  getJumbotronComponent() {
    const link = new LinkComponent({ href: '?' })
    link.append(new ImageComponent({ src: '/img/jumbotron.png', alt: 'jumbotron' }))
    return link
  }

  getLearningListComponent() {
    return new GridComponent({
      length: 3,
      elements: getLearningList()
        .map(({ image, title, text, url }) => {
          const html = new HTML()
          html.append(new ImageComponent({ src: image, alt: 'image' }))
          html.append(new TextComponent({ text: title }))
          html.append(new TextComponent({ text }))
          html.append(new LinkComponent({ text: 'go to the lessons', href: url }))
          return html
        })
    })
  }
}
