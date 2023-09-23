// Import stylesheets
import './style.css';

import { ListController } from './components/list/list.controller.js';
import restService from './components/list/services/rest.service.js';
import formUtilsService from './util/form-utils.service.js';

// App initialization
new ListController(restService, formUtilsService);
