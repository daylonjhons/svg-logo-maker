const { Circle, Ellipse, Square, Triangle } = require('./lib/shape'); // importing shape constructors
const inquirer = require('inquirer'); // importing inquirer for user input
const fs = require('fs'); // importing fs for file system operations

function init() {
    // prompt the user with questions
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please enter up to 3 characters:',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like for your logo?',
                choices: ['Circle', 'Ellipse', 'Square', 'Triangle'],
            },
            {
                type: 'input',
                name: 'text-color',
                message: 'Choose a text color (Enter a color keyword or a hexadecimal number)',
            },
            {
                type: 'input',
                name: 'shape-color',
                message: 'Choose a shape color (Enter a color keyword or a hexadecimal number)',
            },
        ])
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log('Please enter a value with a maximum of 3 characters.');
                init();
            } else {
                console.log('answers:', answers);
                writeToFile('logo.svg', answers);
            }
        });
}

function writeToFile(filename, answers) {
    let svgString = ''; // initialize svg string

    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'; // opening svg tag with width and height attributes

    let shape;
    switch (answers.shape.toLowerCase()) {
        case 'circle':
            shape = new Circle(); 
            break;
        case 'ellipse':
            shape = new Ellipse(); 
            break;
        case 'square':
            shape = new Square();
            break;
        case 'triangle':
            shape = new Triangle();
            break;
    }
    shape.setColor(answers['shape-color']); // set shape color based on user input

    const shapeContent = shape.render(); // generate svg content for the selected shape

    svgString += shapeContent; // append shape svg content

    svgString += `<text x="150" y="110" text-anchor="middle" font-size="30" fill="${answers['text-color']}">${answers.text}</text>`; // add text content to svg

    svgString += '</svg>'; // closing svg tag

    // write the svg content to a file
    fs.writeFile(filename, svgString, (err) => {
        if (err) {
            console.error('Error writing to file:', err); // handle error while writing to file
        } else {
            console.log(`Successfully generated ${filename}`); // log success message
        }
    });
}

init();
