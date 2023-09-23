import { ControllerAbstract } from '../../abstract-classes/controller-abstract.js';
import { ListDomManipulator, listDmpToken } from './list.dmp.js';

export class ListController extends ControllerAbstract {
  constructor() {
    super(
      [
        'entityUtilsService',
        'actionsFabricService',
        'restService',
        'formUtilsService',
      ],
      [
        {
          token: listDmpToken,
          instance: new ListDomManipulator({
            autoInitParams: { attachTo: 'app', tag: 'ul' },
          }),
        },
      ]
    );

    this.loadAll();
  }

  loadAll() {
    this._restService
      .getAll()
      .then((entityList) => this._listDomManipulator.renderList(entityList));
  }
}
