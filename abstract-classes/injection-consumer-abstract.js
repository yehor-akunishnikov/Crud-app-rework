export class InjectionConsumer {
  constructor(dependencyTokens) {
    dependencyTokens.forEach((dependencyToken) => {
      this[`_${dependencyToken}`] =
        window.injectionContainer.getInjectable(dependencyToken);
    });
  }
}
