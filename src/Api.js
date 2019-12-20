const postJSON = (url, jsonBody) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(jsonBody),
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => response.json());

export default class CustomApi {
  getMessages() {
    return fetch(`http://localhost:3001/api`)
      .then((response) => response.json())
      .then((r) => {
        console.log(r)
        return r
      })
  }

  postMessages(messages) {
    console.log('postMessages >> recieved', typeof messages);
    return postJSON(`http://localhost:3001/api`, {
      ...messages,
      id: 0,
    });
  }
}
