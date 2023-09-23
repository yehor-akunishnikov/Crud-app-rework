import { InjectionConsumer } from './injection-consumer-abstract.js';

export class ControllerAbstract extends InjectionConsumer {
  _subscriptions = {};

  constructor(dependencyTokens) {
    super([...dependencyTokens, 'actionObserver']);
  }

  subscribe(callBack) {
    return this._actionObserver?.subscribe(callBack);
  }

  unsubscribe(subId) {
    this._actionObserver?.unsubscribe(subId);
  }
}
