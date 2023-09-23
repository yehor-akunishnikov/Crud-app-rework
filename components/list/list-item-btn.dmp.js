import { DomManipulatorAbstract } from '../../abstract-classes/dom-manipulator-abstract.js';

/*
  Class responsible for DOM manipulations only
  For now you don't need to edit it - just use it
*/
export class ListDomManipulator extends DomManipulatorAbstract {
  constructor(config) {
    super(config);
  }

  addElement(entity) {
    this.root.append(this.createListItem(entity));
  }

  removeElement(id) {
    super.removeElement(id);
  }
}

export const listDmpToken = 'listDomManipulator';
