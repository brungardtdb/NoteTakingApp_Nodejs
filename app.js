// const addFunc = require('./utils.js')
const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

const message = getNotes()
console.log(message)

console.log(validator.isEmail('blarp@gmail.com'))
console.log(chalk.blue('Hello Blue World!'))