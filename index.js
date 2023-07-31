


const fs = require('fs')
const inquirer = require('inquirer')
const { Circle, Triangle, Square} = require('./lib/shapes')

const questions = [
  {
    type: 'input',
    message: 'Please enter up to 3 characters for your logo.',
    name: 'text',
    validate: (data) => {
      if (data.length > 3) {
        return console.log('\n Please enter 3 or less characters.');
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

function init() {
  inquirer
    .prompt(questions)
    .then ( (data) => {
        makeLogo(data)
  })
    .catch(err => {
      console.log(err)
    });
}


function pickShape (data) {
  if (data.shape === 'circle') {
    let userShape = new Circle (data.textColor, data.text, data.shapeColor);
    return userShape.render()
  }
  if (data.shape === 'triangle') {
    let userShape = new Triangle (data.textColor, data.text, data.shapeColor);
    return userShape.render()
  }
  if (data.shape === 'square') {
    let userShape = new Square (data.textColor, data.text, data.shapeColor);
    return userShape.render()
  }
}

function makeLogo (data) {
  const logo = pickShape(data);
  fs.writeFile('logo.svg', logo, ()=>
  console.log('Generated logo.svg'))
}

init()