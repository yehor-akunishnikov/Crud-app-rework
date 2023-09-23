import { ControllerAbstract } from '../../abstract-classes/controller-abstract.js';
import { ListDomManipulator } from './list.dmp.js';
import entityUtilsService from '../../util/entitiy-utils.service.js';

/*
  Main entry point to your feature
  Here you will add general logic by using methods of your helper classes together
*/
export class ListController extends ControllerAbstract {
  constructor(restService, generalUtilsService) {
    super(
      entityUtilsService,
      [
        {
          token: 'ListDomManipulator',
          instance: new ListDomManipulator({ attachTo: 'app', tag: 'ul' })
        },
      ]
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

    this.restService
      .getOne(entity.id)
      .then((loadedEntity) => this.domManipulator.addElement(loadedEntity));
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
  }
}
