import {render} from '../render.js';
import ListSort from '../view/list-sort-view.js';
import EventListView from '../view/event-list-view.js';
import EventsView from '../view/event-view.js';
import ListEventsOffers from '../view/list-events-offers-view.js';


export default class EventsPresenter {
  sortComponent = new ListSort();
  eventListComponent = new EventListView();
  editOffersComponent = new ListEventsOffers();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(this.sortComponent, this.eventsContainer);
    render(this.editOffersComponent, this.eventsContainer);
    render(this.eventListComponent, this.eventsContainer);

    for (let i = 0; i < 3; i++) {
      render(new EventsView(), this.eventListComponent.getElement());
    }
  }
}
