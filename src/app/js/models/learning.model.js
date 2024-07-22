import { Model } from '../models/model.js'

export class LearningModel extends Model {
  state = { image: '', title: '', text: '', url: '' }

  constructor(image, title, text, url) {
    super()
    this.state.image = image
    this.state.title = title
    this.state.text = text
    this.state.url = url
  }

  toJSON() {
    const { image, title, text, url } = this.state
    return { image, title, text, url }
  }

}
