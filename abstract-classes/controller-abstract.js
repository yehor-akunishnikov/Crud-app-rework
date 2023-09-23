import { Observer } from '../util/observer.js';

import InjectionConsumer from './injection-consumer-abstract';

export class ControllerAbstract extends InjectionConsumer {
  _subscriptions = {};

  constructor(dependencyTokens, domManipulators = []) {
    super(dependencyTokens);

    this._actionObserver = Object.freeze(new Observer());

    domManipulators.forEach((manipulatorMeta) => {
      manipulatorMeta.instance.attachObserver(this._actionObserver);
      this[`_${manipulatorMeta.token}`] = Object.freeze(
        manipulatorMeta.instance
      );
    });
  }

  subscribe(callBack) {
    return this._actionObserver.subscribe(callBack);
  }

  unsubscribe(subId) {
    this._actionObserver.unsubscribe(subId);
  }
}
