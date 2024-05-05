import {render} from './render.js';
import {RenderPosition} from './render.js';
import MainTittle from './view/trip-main-tittle-view.js';
import ListFilter from './view/list-filter-view.js';
import EventsPresenter from './presenter/board-presenter.js';


const tripMain = document.querySelector('.trip-main');
const mainFilter = tripMain.querySelector('.trip-controls__filters');
const pageMainElement = document.querySelector('.page-main');
const bodySectionElement = pageMainElement.querySelector('.trip-events');

const eventsPresenter = new EventsPresenter({eventsContainer: bodySectionElement});

render(new MainTittle(), tripMain, RenderPosition.AFTERBEGIN);
render(new ListFilter(), mainFilter);


eventsPresenter.init();
