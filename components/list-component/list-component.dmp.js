import { DomManipulatorAbstract } from '../../abstract-classes/dom-manipulator-abstract.js';

/*
  Class responsible for DOM manipulations only
  For now you don't need to edit it - just use it
*/
export class DomManipulator extends DomManipulatorAbstract {
  constructor(config) {
    super(config);
  }

  // Util method, which creates li element
  createListItem(entity) {
    const listItem = this.createDomElement('li', entity);

    listItem.innerText = `Name: ${entity.name}`;

    return listItem;
  }

  // Method, which takes list of entities
  // and renders list of li elements using this data
  renderList(entityList) {
    this.clearRoot();
    entityList.forEach((entity) => this.addElement(entity));
  }

  // Method, which renders one li element
  addElement(entity) {
    this.root.append(this.createListItem(entity));
  }

  // Method, which updates one li element's contents by id
  updateElement(payload) {
    console.log(payload);
    const elementToUpdate = this.findElementById(payload.id);

    elementToUpdate.innerText = `Name: ${payload.name}`;
  }

  // Method, which removes li element
  removeElement(id) {
    super.removeElement(id);
  }
}
