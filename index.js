//pulling required functions from dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

//async function to create the logo
async function logoCreate() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color or hexadecimal number for the text',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['triangle', 'circle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color or hexadecimal number for the shape',
        }
    ]);

    //initializing variables
    let shape;
    let fontSize;
    let xPosition;

    //switch for shape choices
    switch (response.shape) {
        case 'triangle':
            fontSize = 20;
            shape = new Triangle(response.shapeColor);
            xPosition = '50%';
            break;
        case 'circle':
            fontSize = 70;
            shape = new Circle(response.shapeColor);
            xPosition = '50%';
            break;
        case 'square':
            fontSize = 100;
            shape = new Square(response.shapeColor);
            xPosition = '33.33%';
            break;
    }
    //Svg creator
    const svgData = `
    <svg width="300" height ="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="${xPosition}" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${response.textColor}" font-size="${fontSize}" font-weight="bold">${response.text}</text>
    </svg>
    `;

    //Writes svg data to a file
    fs.writeFile('./examples/logo.svg', svgData, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
}
logoCreate();