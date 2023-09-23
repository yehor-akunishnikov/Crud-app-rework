/*
  Basic implementation of Observer pattern
  It can be used for comunications between Controller and DomManipulator
  For now just skip it
*/
export class Observer {
  subscriptions = [];

  subscribe(subscription) {
    this.subscriptions.push(subscription);
  }

  unsubscribe(subscription) {
    const existingSubIndex = this.subscriptions.indexOf(subscription);

    if (existingSubIndex > -1) {
      this.subscriptions.splice(existingSubIndex, 1);
    }
  }

  broadcast(...params) {
    this.subscriptions.forEach((subscription) => {
      subscription.call(this, ...params);
    });
  }
}
