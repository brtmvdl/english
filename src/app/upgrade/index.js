import { HTML } from './js/libs/frontend/index.js'
import { HeaderComponent } from './js/component/header.component.js'
import { FooterComponent } from './js/component/footer.component.js'

export class Page extends HTML {
  getName() { return 'page' }

  onCreate() {
    super.onCreate()
    this.append(new HeaderComponent())
    this.append(new FooterComponent())
  }
}
