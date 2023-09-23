import { DomManipulatorAbstract } from '../../abstract-classes/dom-manipulator-abstract.js';

/*
  Class responsible for DOM manipulations only
  For now you don't need to edit it - just use it
*/
export class ButtonDomManipulator extends DomManipulatorAbstract {
  constructor() {
    super(['actionsFabricService']);
  }

  createButton(entity) {
    const button = this.createDomElement('button');

    button.innerText = 'delete';
    button.addEventListener('click', () => {
      this.broadcast(
        this._actionsFabricService.createAction('btnClick', entity)
      );
    });

    return button;
  }
}

export const listDmpToken = 'listDomManipulator';
