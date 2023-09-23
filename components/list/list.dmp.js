import { DomManipulatorAbstract } from '../../abstract-classes/dom-manipulator-abstract.js';

export class ListDomManipulator extends DomManipulatorAbstract {
  constructor(config) {
    super(config);
  }

  createListItem(entity) {
    const listItem = this.createDomElement('li', entity);

    listItem.innerText = `Name: ${entity.name}`;

    return listItem;
  }

  addElement(entity) {
    this.root.append(this.createListItem(entity));
  }

  renderList(entityList) {
    this.clearRoot();
    entityList.forEach((entity) => this.addElement(entity));
  }

  findElementById(id) {
    const selector = `[data-identifier="${id}"]`;

    return this.root.querySelector(selector);
  }

  removeElement(id) {
    this.root.removeChild(this.findElementById(id));
  }

  updateElement(payload) {
    console.log(payload);
    const elementToUpdate = this.findElementById(payload.id);

    elementToUpdate.innerText = `Name: ${payload.name}`;
  }

  clearRoot() {
    this.root.replaceChildren();
  }
}

export const listDmpToken = 'listDomManipulator';
