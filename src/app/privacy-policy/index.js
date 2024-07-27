import { PageComponent } from '../js/component/page.component.js'

export class Page extends PageComponent {
  appendBody() {
    this.setText('page')
  }
}
