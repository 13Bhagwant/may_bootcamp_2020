const express = require('express')
const logger = require('morgan')

const app = express()
app.set('view engine', 'ejs')
app.use(logger('dev'))

app.get('/car_status', (req, res) => {
  const year = parseInt(req.query.year)
  let age

  if (year > 2020) {
    age = 'future'
  } else if (year > 2017) {
    age = 'new'
  } else if (year > 2012) {
    age = 'old'
  } else {
    age = 'very old'
  }

  res.render('car_status', { age })
})

app.get('/random_person', (req, res) => {
  const { names } = req.query
  let winner
  if (names) {
    const namesArr = names.split(',')
    winner = namesArr[Math.floor(Math.random() * namesArr.length)]
  }
  res.render('random_person', { winner, names })
})

app.get('/fizz_buzz', (req, res) => {
  const number1 = parseInt(req.query.number1)
  const number2 = parseInt(req.query.number2)

  const fizzBuzzArr = []
  if (number1 && number2) {
    for (let i = 1; i <= 100; i++) {
      if (i % number1 === 0 && i % number2 === 0) {
        fizzBuzzArr.push('FizzBuzz')
      } else if (i % number1 === 0) {
        fizzBuzzArr.push('Fizz')
      } else if (i % number2 === 0) {
        fizzBuzzArr.push('Buzz')
      } else {
        fizzBuzzArr.push(i)
      }
    }
  }
  res.render('fizz_buzz', { fizzBuzzArr, number1, number2 })
})

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/directory_lister', (request, response) => {
	fs.readdir('.', (err, files) => {
		if (err) {
			response.send('An Error Occurred');
		}
		response.render('directory_lister', {
			files: files,
		});
	});
});

const PORT = process.env.PORT || 3000 
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`)
})