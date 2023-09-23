import { ControllerAbstract } from '../../abstract-classes/controller-abstract.js';
import { ListDomManipulator } from './list.dmp.js';

export class ListController extends ControllerAbstract {
  constructor() {
    super(['restService', 'formUtilsService']);

    this._listDomManipulator = new ListDomManipulator({
      autoInitParams: { attachTo: 'app', tag: 'ul' },
    });

    this.loadAll();
    this.listenForActions();
  }

  listenForActions() {
    this.actionsSubscription = this.subscribe((action) => {
      switch (action.type) {
        case 'btnClick': {
          console.log(action);
        }
      }
    });
  }

  loadAll() {
    this._restService
      .getAll()
      .then((entityList) => this._listDomManipulator.renderList(entityList));
  }
}
