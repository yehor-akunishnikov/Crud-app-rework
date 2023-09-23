import injectionContainer from '../util/injection-container.js';

export class InjectionConsumer {
  constructor(dependencyTokens) {
    dependencyTokens.forEach((dependencyToken) => {
      this[`_${dependencyToken}`] = injectionContainer[dependencyToken];
    });
  }
}
