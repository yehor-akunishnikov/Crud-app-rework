import InjectionConsumer from '../abstract-classes/injection-consumer-abstract.js';

export default class RestService extends InjectionConsumer {
  _baseUrl = 'https://650dd202a8b42265ec2cbac6.mockapi.io/Users';
  _getBaseUrlWithId = (id) => `${this._baseUrl}/${id}`;

  constructor() {
    super(['httpClientService']);
  }

  getAll() {
    return this._httpClientService.get(this._baseUrl);
  }

  getOne(id) {
    return this._httpClientService.get(this._getBaseUrlWithId(id));
  }

  create(payload) {
    return this._httpClientService.post(this._baseUrl, payload);
  }

  update(payload) {
    return this._httpClientService.put(
      this._getBaseUrlWithId(payload.id),
      payload
    );
  }

  remove(id) {
    return this._httpClientService.delete(this._getBaseUrlWithId(id));
  }
}
