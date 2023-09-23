// Import stylesheets
import './style.css';

import { ListController } from './components/list/list.controller.js';
import { InjectionContainer } from './util/injection-container.js';
import { Observer } from './util/observer.js';
import ActionsFabricService from './services/actions-fabric.service.js';
import FormUtilsService from './services/form-utils.service.js';
import HttpClientService from './services/http-client.service.js';
import RestService from './services/rest.service.js';
import StoreService from './services/store.service.js';

window.injectionContainer = new InjectionContainer();

window.injectionContainer.setInjectables([
  {
    token: 'actionsFabricService',
    Injectable: ActionsFabricService,
  },
  {
    token: 'formUtilsService',
    Injectable: FormUtilsService,
  },
  {
    token: 'httpClientService',
    Injectable: HttpClientService,
  },
  {
    token: 'storeService',
    Injectable: StoreService,
  },
  {
    token: 'restService',
    Injectable: RestService,
  },
  {
    token: 'actionObserver',
    Injectable: Observer,
  },
]);

// App initialization
new ListController();
