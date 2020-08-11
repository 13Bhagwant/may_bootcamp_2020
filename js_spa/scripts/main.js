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

// -------------------------------------------------------------

// UI Logic

document.addEventListener('DOMContentLoaded', () => {
  // sketchy sign in... Don't do this in a real application
  // user must be signed in to create a question
  Session.create({
    email: 'js@winterfell.gov',
    password: 'supersecret'
  }).then(response => console.log(response));

  // load all the questions
  Question.index()
    .then(questions => {
      const questionsContainer = document.querySelector('.question-list');
      const questionsList = questions.map(q => {
        return `
          <li>
            <span>${q.id}</span>
            ${q.title}
          </li>
        `
      }).join('');
      questionsContainer.innerHTML = questionsList;
    })


  // attatch eventListener to question create form
  const newQuestionForm = document.querySelector('#new-question-form');
  newQuestionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const newQuestionParams = {
      title: formData.get('title'),
      body: formData.get('body')
    }
    Question.create(newQuestionParams)
      .then(question => console.log(question));
  })

  // navigation (navbar)
  const navbar = document.querySelector('.navbar');
  navbar.addEventListener('click', (e) => {
    e.preventDefault();
    const target = event.target;
    const page = target.dataset.target;
    // const page = target.getAttribute('data-target'); this is the same as above
    navigateTo(page);
  })
})

function navigateTo(id) {
  if (!id) {
    return;
  }
  document.querySelectorAll('.page').forEach(node => {
    node.classList.remove('active')
  })
  document.querySelector(`.page#${id}`).classList.add('active');
}