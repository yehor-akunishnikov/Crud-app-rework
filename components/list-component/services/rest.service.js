import httpClient from '../../../util/http-client.js';

class RestService {
  _baseUrl = 'https://650dd202a8b42265ec2cbac6.mockapi.io/Users';
  _getBaseUrlWithId = (id) => `${this._baseUrl}/${id}`;

  constructor(httpClient) {
    this._httpClient = httpClient;
  }

  getAll() {
    return this._httpClient.get(this._baseUrl);
  }

  getOne(id) {
    return this._httpClient.get(this._getBaseUrlWithId(id));
  }

  create(payload) {
    return this._httpClient.post(this._baseUrl, payload);
  }

  update(payload) {
    return this._httpClient.put(this._getBaseUrlWithId(payload.id), payload);
  }

  remove(id) {
    return this._httpClient.delete(this._getBaseUrlWithId(id));
  }
}

export default new RestService(httpClient);
