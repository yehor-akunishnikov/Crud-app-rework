class HttpClient {
  getRequestPayload({ body, method, headers }) {
    const payload = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    if (body) {
      payload.body = JSON.stringify(body);
    }

    if (method) {
      payload.method = method;
    }

    if (headers) {
      payload.headers = { ...payload.headers, ...headers };
    }

    return payload;
  }

  get(url) {
    return fetch(url).then((data) => data.json());
  }

  post(url, body) {
    const requestPayload = this.getRequestPayload({ body, method: 'POST' });

    return fetch(url, requestPayload).then((data) => data.json());
  }

  delete(url) {
    const requestPayload = this.getRequestPayload({ method: 'DELETE' });

    return fetch(url, requestPayload).then((data) => data.json());
  }

  put(url, body) {
    const requestPayload = this.getRequestPayload({ body, method: 'PUT' });

    return fetch(url, requestPayload).then((data) => data.json());
  }
}

export default new HttpClient();
