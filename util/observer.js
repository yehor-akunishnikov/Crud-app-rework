export class Observer {
  subscriptions = {};

  constructor() {}

  subscribe(subscription) {
    const subId = (Math.random() + 1).toString(36).substring(7);

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
