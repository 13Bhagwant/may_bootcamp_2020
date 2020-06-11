function insult (name) {
    const randomNum = Math.ceil(Math.random() * 3)
    if (randomNum === 1) {
      return name + ', you doofus!'
    } else if (randomNum === 2) {
      return `${name}, you're dumb!`
    } else {
      return `${name}, you're smart!`
    }
  }
  
  console.log(insult("anson"))
  