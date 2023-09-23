import { DomManipulatorAbstract } from '../../abstract-classes/dom-manipulator-abstract.js';

/*
  Class responsible for DOM manipulations only
  For now you don't need to edit it - just use it
*/
export class ButtonDomManipulator extends DomManipulatorAbstract {
  constructor() {
    super(['actionsFabricService']);
  }

  createButton() {
    const button = this.createDomElement('button');

    button.innerText = 'Click me';
    button.addEventListener('click', () => {
      this.broadcast(this._actionsFabricService.createAction('btnClick'));
    });

    return button;
  }
}

export const listDmpToken = 'listDomManipulator';
