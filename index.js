// Import stylesheets
import './style.css';

import { ListController } from './components/list/list.controller.js';

// App initialization
new ListController(restService, formUtilsService);
