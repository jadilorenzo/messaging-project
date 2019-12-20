const postJSON = (url, jsonBody) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(jsonBody),
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => response.json());

export default class CustomApi {
  constructor() {
    this.baseURL = 'http://localhost:3000/api';
  }

  getRoot() {
    return fetch(`${this.baseURL}`)
      .then((response) => response.json())
      .then((r) => {
        console.log(r)
        return r
      })
  }

  postMessages(messages) {
    console.log('postMessages >> recieved', typeof messages);
    return postJSON(`${this.baseURL}`, {
      ...messages,
      id: 0,
    });
  }
}
