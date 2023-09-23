import ActionsFabricService from '../services/actions-fabric.service.js';
import EntityUtilsService from '../services/entitiy-utils.service.js';
import FormUtilsService from '../services/form-utils.service.js';
import HttpClientService from '../services/http-client.service.js';
import RestService from '../services/rest.service.js';
import StoreService from '../services/store.service.js';

class InjectionContainer {
  _injectables = {
    actionsFabricService: Object.freeze(new ActionsFabricService()),
    entityUtilsService: Object.freeze(new EntityUtilsService()),
    formUtilsService: Object.freeze(new FormUtilsService()),
    httpClientService: Object.freeze(new HttpClientService()),
    restService: Object.freeze(new RestService()),
    storeService: Object.freeze(new StoreService()),
  };

  getInjectable(token) {
    return this._injectables[token];
  }
}

window.injectionContainer = new InjectionContainer();
