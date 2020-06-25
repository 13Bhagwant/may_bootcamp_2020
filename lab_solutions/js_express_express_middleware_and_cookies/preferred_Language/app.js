const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')

const app = express()

app.set('view engine', 'ejs')

app.use(logger('dev'))

app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.get('/', (req, res) => {
  const { name, language } = req.cookies
  console.log(req.cookies)
  const greetings = {
    english: 'Hello',
    french: 'Bonjour',
    spanish: 'Hola'
  }
  let greeting = 'Welcome to My Awesome Website'
  if (name && language) {
    greeting = `${greetings[language]}, ${name}!`
  }

  res.render('home', { greeting })
})

app.get('/preferred_language', (req, res) => {
  const { name, language } = req.cookies
  const preferredLanguages = ['english', 'french', 'spanish']

  res.render('preferred_language', {
    preferredLanguages,
    name,
    selected: language,
  })
})

app.post('/preferred_language', (req, res) => {
  const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7
  const { name, language } = req.body
  res.cookie('name', name, { maxAge: COOKIE_MAX_AGE })
  res.cookie('language', language, { maxAge: COOKIE_MAX_AGE })
  res.redirect('/')
})

app.get('/todos/new', (req, res) => {
  res.render('new_todo')
})

app.get('/todos', (req, res) => {
  const { todos } = req.cookies
  res.render('todos', { todos })
})

app.post('/todos', (req, res) => {
  const { title, body } = req.body
  const todos = req.cookies.todos || []

  todos.push({ title, body })

  res.cookie('todos', todos)
  res.redirect('/todos')
})

const PORT = process.env.PORT || 3000
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
  console.log(`Listening at http://${DOMAIN}:${PORT}`)
})