import InjectionConsumer from '../abstract-classes/injection-consumer-abstract.js';

export class Observer extends InjectionConsumer {
  subscriptions = {};

  constructor() {
    super(['entityUtilsService']);
  }

  subscribe(subscription) {
    const subId = _entityUtilsService.getRandomId();

    this.subscriptions[subId] = subscription;

    return subId;
  }

  unsubscribe(subId) {
    delete this.subscriptions[subId];
  }

  broadcast(...params) {
    Object.values(this.subscriptions).forEach((subscription) => {
      subscription.call(this, ...params);
    });
  }
}
