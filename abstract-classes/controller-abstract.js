import { Observer } from '../util/observer.js';

/*
  Abstract class which provides basic features for the Controller
  For now just skip it
*/
export class ControllerAbstract {
  _subscriptions = {};
  _manipulators = {};

  constructor(entityUtilsService, domManipulators = []) {
    // Here we connect Controller with DomManipulator

    this._actionObserver = Object.freeze(new Observer());

    domManipulators.forEach((manipulatorMeta) => {
      manipulatorMeta.instance.attachObserver(this._actionObserver);
      this.manipulators[manipulatorMeta.token] = manipulatorMeta;
    });

    if (entityUtilsService) {
      this.entityUtilsService = entityUtilsService;
    } else {
      throw new Error('Missing dependency: entityUtilsService');
    }
  }

  subscribe(callBack) {
    const subId = (Math.random() + 1).toString(36).substring(7);

    this._subscriptions[subId] = callBack;
    this._actionObserver.subscribe(callBack);

    return subId;
  }

  unsubscribe(subId) {
    const subscription = this._subscriptions[subId];

    this._actionObserver.unsubscribe(subscription);

    delete this._subscriptions[subId];
  }
}
