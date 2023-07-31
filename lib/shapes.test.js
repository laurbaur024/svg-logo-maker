


const { Circle, Triangle, Square} = require('./shapes')

describe ('Triangle', () => {
  it ('should generate correct triangle logo', () => {
    const shape = new Triangle('green', 'lgb', 'purple');
    expect(shape.render()).toEqual(
      `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100, 15 200, 200 0, 200" fill="${shape.shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>
  </svg>
    `
    );
  });
})

describe ('Circle', () => {
  it ('should generate correct circle logo', () => {
    const shape = new Circle('green', 'lgb', 'purple');
    expect(shape.render()).toEqual(
      `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${shape.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>
  </svg>
    `
    );
  });
})

describe ('Square', () => {
  it ('should generate correct square logo', () => {
    const shape = new Square('green', 'lgb', 'purple');
    expect(shape.render()).toEqual(
      `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${shape.shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>
  </svg>
    `
    );
  });
})
