


class Shape {
  constructor (textColor, text, shapeColor){
    this.textColor = textColor;
    this.text = text;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  constructor (textColor, text, shapeColor){
    super (textColor, text, shapeColor)
  }
  render(){
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>
    `
  }
}

class Triangle extends Shape {
  constructor (textColor, text, shapeColor){
    super (textColor, text, shapeColor)
  }
  render(){
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>
    `
  }
}

class Square extends Shape {
  constructor (textColor, text, shapeColor){
    super (textColor, text, shapeColor)
  }
  render(){
    return`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${this.shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>
    `
  }
}

module.exports = { Shape, Circle, Triangle, Square}