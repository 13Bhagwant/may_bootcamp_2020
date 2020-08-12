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
  },
  delete(id) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    }).then(res => res.json());
  },
  update(params) {
    return fetch(`${BASE_URL}/questions/${params.id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
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
      renderQuestionsIndex(questions);
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
      .then(question => {
        form.querySelectorAll('input').forEach(n => {
          if (n.getAttribute('type') === 'submit') {
            return;
          }
          n.value = '';
        })

        return Promise.all([Question.index(), Question.show(question.id)])
      })
      .then(resolvedArray => {
        const questions = resolvedArray[0];
        const question = resolvedArray[1];
        renderQuestionShow(question);
        navigateTo('question-show');
        renderQuestionsIndex(questions);
      })
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

  // go to show page
  const questionsContainer = document.querySelector('.question-list');
  questionsContainer.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    const questionATag = target.closest('a')
    if (!questionATag) {
      return
    }
    const questionId = questionATag.dataset.id;
    Question.show(questionId)
      .then(question => {
        renderQuestionShow(question);
        navigateTo('question-show');
      })
  })

  // adding delete and edit event to show page
  const questionShowPageContainer = document.querySelector('#question-show');
  questionShowPageContainer.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target);
    if (target.matches('#delete-question')) {
      // fire off delete ajax request
      const questionId = target.dataset.id;
      Question.delete(questionId)
        .then(payload => {
          return Question.index()
        })
        .then(questions => {
          renderQuestionsIndex(questions);
          navigateTo('question-index');
        })
    }

    if (target.matches('#edit-question')) {
      const questionId = target.dataset.id;
      Question.show(questionId)
        .then(question => {
          populateQuestionEditForm(question);
          navigateTo('question-edit');
        })
    }
  })

  // adding submit updateQuestionEvent
  const questionEditPage = document.querySelector('.page#question-edit');
  const questionEditForm = questionEditPage.querySelector('form');
  questionEditForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const questionData = {
      id: formData.get('id'),
      title: formData.get('title'),
      body: formData.get('body')
    }
    // send fetch request update question
    Question.update(questionData)
      .then(payload => {
        console.log(payload);
        if (payload.errors) {
          throw payload.errors
        }
        return Question.show(payload.id)
      })
      .then(question => {
        renderQuestionShow(question);
        navigateTo('question-show');
      })
      .catch(err => {
        console.log('logging in catch')
        console.log(err);
        displayErrorMessageInForm(err);
      })
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

function renderQuestionsIndex(questions) {
  const questionsContainer = document.querySelector('.question-list');
  const questionsList = questions.map(q => {
    return `
      <li>
        <a class='question-link' data-id="${q.id}" href="#"> 
          <span>${q.id}</span>
          ${q.title}
        </a>
      </li>
    `
  }).join('');
  questionsContainer.innerHTML = questionsList;
}

function renderQuestionShow(question) {
  const questionShowPageContainer = document.querySelector('#question-show');
  const questionShowPageHTML = `
    <h2>${question.title}</h2>
    <p>${question.body}</p>
    <small>Authored by: ${question.author.full_name}</small>
    <small>Liked by: ${question.like_count}</small>
    <button id='delete-question' data-id='${question.id}'>Delete</button>
    <button id='edit-question' data-id='${question.id}'>Edit</button>
    <hr style="height:2px;border-width:0;color:gray;background-color:gray">
    <div>
      <ul>
        ${question.answers.map(a => {
          return `
            <li>
              <p>${a.body}</p>
              <small>${a.author_full_name}</small>
            </li>
          `
        }).join('')}
      </ul>
    </div>
  `
  questionShowPageContainer.innerHTML = questionShowPageHTML;
}

function populateQuestionEditForm(question) {
  const questionEditPage = document.querySelector('.page#question-edit');
  const idInput = questionEditPage.querySelector('input[name="id"]');
  const titleInput = questionEditPage.querySelector('input[name="title"]');
  const bodyInput = questionEditPage.querySelector('textarea[name="body"]');
  const heading = questionEditPage.querySelector('h1');
  heading.innerText = `${heading.innerText} | ${question.id}`;
  idInput.setAttribute('value', question.id);
  titleInput.setAttribute('value', question.title);
  bodyInput.value = question.body;
}

function displayErrorMessageInForm(errors) {
  const questionEditPage = document.querySelector('.page#question-edit');
  // create a div for every key within the `errors` object.
  if (errors.title) {
    const titleErrorDiv = document.createElement('div');
    titleErrorDiv.innerText = errors.title.join(', ');
    questionEditPage.append(titleErrorDiv);
  }
  if (errors.body) {
    const bodyErrorDiv = document.createElement('div');
    bodyErrorDiv.innerText = errors.body.join(', ');
    questionEditPage.append(bodyErrorDiv);
  }
}