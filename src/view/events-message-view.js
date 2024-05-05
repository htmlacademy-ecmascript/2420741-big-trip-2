import {createElement} from '../render.js';


function createListEmptyTemplate() {
  return '<p class="trip-events__msg">Loading...</p>';
}

export default class EventMessage {
  getTemplate() {
    return createListEmptyTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}


