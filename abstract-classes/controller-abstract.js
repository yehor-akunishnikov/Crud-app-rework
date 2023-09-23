import { Observer } from '../util/observer.js';

/*
  Abstract class which provides basic features for the Controller
  For now just skip it
*/
export class ControllerAbstract {
  _subscriptions = {};

  constructor(listenersList, domManipulator) {
    // Here we connect Controller with DomManipulator
    if (domManipulator) {
      this._actionObserver = Object.freeze(new Observer());
      domManipulator.attachObserver(this._actionObserver);
      this.domManipulator = Object.freeze(domManipulator);
    }

    // Here we connect Controller methods to events of other
    // elements on a page
    listenersList.forEach((listenerMeta) => {
      const element = document.getElementById(listenerMeta.id);

      listenerMeta.events.forEach((event) => {
        element.addEventListener(event.name, (e) => {
          this[event.method].call(this, e);
        });
      });
    });
  }

  // Method to subscribe on events from DomManipulator
  subscribe(callBack) {
    const subId = (Math.random() + 1).toString(36).substring(7);

    this._subscriptions[subId] = callBack;
    this._actionObserver.subscribe(callBack);

    return subId;
  }

  // Method to unsubscribe from DomManipulator events
  unsubscribe(subId) {
    const subscription = this._subscriptions[subId];

    this._actionObserver.unsubscribe(subscription);

    delete this._subscriptions[subId];
  }
}
