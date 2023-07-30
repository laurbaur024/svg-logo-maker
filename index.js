
const fs = require('fs')
const inquirer = require('inquirer')
const { Shape, Circle, Triangle, Square} = require('./lib/shapes')

const questions = [
  {
    type: 'input',
    message: 'Please enter up to 3 characters for your logo.',
    name: 'text',
    validate: (data) => {
      if (data.length > 3) {
        return console.log('Please enter 3 or less characters.');
      }
      return true;
    }
  },
  {
    type: 'list',
    message: 'Please choose a text color.',
    name: 'textColor',
    choices: ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
  },
  {
    type: 'list',
    message: 'Please choose a shape.',
    name: 'shape',
    choices: ['circle', 'triangle', 'square',]
  },
  {
    type: 'list',
    message: 'Please choose a shape color',
    name: 'shapeColor',
    choices: ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
  },
]

inquirer
  .prompt(questions)
  .then ( (data) => {
    console.log(data)
  })