const BASE_URL = 'http://localhost:3000/api/v1';

// requests

const Question = {
  index() {
    return fetch(`${BASE_URL}/questions`)
      .then(res => {
        return res.json();
      })
  },
  create(params) {
    return fetch(`${BASE_URL}/questions`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => {
      return res.json();
    })
  },
  show(id) {
    return fetch(`${BASE_URL}/questions/${id}`)
      .then(res => res.json());
  }
}

const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
}