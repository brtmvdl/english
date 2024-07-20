import { HTML } from './js/libs/frontend/index.js'
import { HeaderComponent } from './js/component/header.component.js'

export class Page extends HTML {
  onCreate() {
    super.onCreate()
    this.append(new HeaderComponent())
  }
}
