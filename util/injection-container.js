export class InjectionContainer {
  _injectables = {};

  getInjectable(token) {
    return this._injectables[token];
  }

  setInjectables(injectionMetaList) {
    injectionMetaList.forEach(({ token, Injectable }) => {
      this._injectables[token] = new Injectable();
    });
  }
}
