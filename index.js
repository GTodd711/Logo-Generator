const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/svg.js');

function colorInput(input) {
    if (/^#[0-9A-F]{6}$/i.test(input) || ['Red', 'Blue', 'Green', 'Purple', 'Yellow', 'White', 'Black'].includes(input)) {
        return true; 
    } else {
        return 'Please enter a valid color keyword or hexadecimal number (e.g., #RRGGBB)';
    }
}

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for logo (only 3 characters or less):',
        validate: function(input) {
            if (input.length <= 3) {
                return true;
            } else {
                return 'Please enter a maximum of three characters';
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword or a hexadecimal number for the text color:',
        validate: colorInput
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Square', 'Triangle', 'Circle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or a hexadecimal number for the shape color:',
        validate: colorInput
    }
]).then((answers) => {
    console.log('Logo generated with the following options:');
    console.log('Text:', answers.text);
    console.log('Text Color:', answers.textColor);
    console.log('Shape:', answers.shape);
    console.log('Shape Color:', answers.shapeColor);

    const svgContent = generateSVG(answers.shape, answers.text, answers.textColor, answers.shapeColor);

    function writeSVGToFile(svgContent) {
        fs.writeFile('./examples/logo.svg', svgContent, (err) => {
            if (err) {
                console.error('Error writing SVG file:', err);
            } else {
                console.log('Generated Logo.svg');
            }
        });
    }

    writeSVGToFile(svgContent);
});
