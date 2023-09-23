// Import stylesheets
import './style.css';

import { ListController } from './components/list-component/list-component.controller.js';
import restService from './components/list-component/services/rest.service.js';
import formUtilsService from './util/form-utils.service.js';

// App initialization
new ListController(restService, formUtilsService);
