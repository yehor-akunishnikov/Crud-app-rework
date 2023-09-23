export class DomManipulatorAbstract {
  _actionObserver = null;

  constructor({ autoInitParams } = {}) {
    if (autoInitParams.root) {
      this.root = autoInitParams.root;
    }

    if (autoInitParams.tag) {
      this.root = document.createElement(autoInitParams.tag);

      if (autoInitParams.tag === 'ul') {
        this.root.innerHTML =
          '<li>For now it is empty. Click "Load All Data", it already works</li>';
      } else {
        this.root.innerHTML =
          '<span>For now it is empty. Click "Load All Data", it already works</span>';
      }

      document.getElementById(autoInitParams.attachTo).appendChild(this.root);
    }
  }

  attachObserver(actionObserver) {
    this._actionObserver = actionObserver;
  }

  broadcast(...params) {
    this._actionObserver.broadcast(...params);
  }

  subscribe(callBack) {
    return this._actionObserver.subscribe(callBack);
  }

  unsubscribe(subId) {
    this._actionObserver.unsubscribe(subId);
  }

  createDomElement(tagName, payload) {
    const domElement = document.createElement(tagName);

    if (payload.id) {
      domElement.setAttribute('data-identifier', payload.id);
    }

    return domElement;
  }
}
