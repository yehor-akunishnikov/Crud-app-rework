export class InjectionConsumer {
  constructor(dependencyTokens) {
    console.log(dependencyTokens);

    dependencyTokens.forEach((dependencyToken) => {
      this[`_${dependencyToken}`] =
        injectionContainer.getInjectable(dependencyToken);
    });
  }
}
