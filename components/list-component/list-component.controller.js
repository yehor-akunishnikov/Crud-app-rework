import { ControllerAbstract } from '../../abstract-classes/controller-abstract.js';
import { DomManipulator } from './list-component.dmp.js';

/*
  Main entry point to your feature
  Here you will add general logic by using methods of your helper classes together
*/
export class ListController extends ControllerAbstract {
  constructor(restService, generalUtilsService) {
    super(
      // There's a lot going on under the hood, but skip that part for now
      [
        {
          id: 'create-form',
          events: [{ name: 'submit', method: 'create' }],
        },
        {
          id: 'load-one-form',
          events: [{ name: 'submit', method: 'loadOne' }],
        },
        {
          id: 'update-form',
          events: [{ name: 'submit', method: 'update' }],
        },
        {
          id: 'remove-form',
          events: [{ name: 'submit', method: 'remove' }],
        },
        
      ],

      // DomManipulator is already available via "this",
      // Please check "loadAll" method to see the example of its usage
      new DomManipulator({ attachTo: 'app', tag: 'ul' })
    );

    this.restService = restService;
    this.generalUtilsService = generalUtilsService;

    this.loadAll();
  }

  create(event) {
    event.preventDefault();

    const entity = this.generalUtilsService.getFormData(event.target);

    this.restService
      .create(entity)
      .then((createdEntity) => this.domManipulator.addElement(createdEntity));
  }

  loadAll() {
    this.restService
      .getAll()
      .then((entityList) => this.domManipulator.renderList(entityList));
  }

  loadOne(event) {
    event.preventDefault();

    const entity = this.generalUtilsService.getFormData(event.target);

    this.restService.getOne(entity.id).then(loadedEntity => this.domManipulator.addElement(loadedEntity));

    // Load item from server and render
  }

  update(event) {
    event.preventDefault();

    const entity = this.generalUtilsService.getFormData(event.target);

    this.restService
      .update(entity)
      .then((updatedEntity) =>
        this.domManipulator.updateElement(updatedEntity)
      );
  }

  remove(event) {
    event.preventDefault();

    const entity = this.generalUtilsService.getFormData(event.target);

    this.restService
      .remove(entity.id)
      .then(() => this.domManipulator.removeElement(entity.id));

    // Remove item both on server and in DOM
  }
}
