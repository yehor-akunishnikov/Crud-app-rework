import { DomManipulatorAbstract } from '../../abstract-classes/dom-manipulator-abstract.js';
import { ButtonDomManipulator } from './button.dmp.js';

export class ListDomManipulator extends DomManipulatorAbstract {
  constructor(config) {
    super([], config);

    this.buttonDomManipulator = new ButtonDomManipulator();
  }

  createListItem(entity) {
    const listItem = this.createDomElement('li', entity);
    const title = this.createDomElement('span');

    title.innerText = `Name: ${entity.name}`;

    listItem.appendChild(title);
    listItem.appendChild(this.buttonDomManipulator.createButton(entity));

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

  updateElement(entity) {
    const elementToUpdate = this.findElementById(entity.id);

    elementToUpdate.innerText = `Name: ${entity.name}`;
  }

  clearRoot() {
    this.root.replaceChildren();
  }
}
