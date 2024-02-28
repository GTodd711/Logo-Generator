const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

function colorInput(input) {
    if (/^#[0-9A-F]{6}$/i.test(input) || ['Red', 'Blue', 'Green', 'Yellow', 'White', 'Black'].includes(input)) {
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

    const logoData = `Text: ${answers.text}\nText Color: ${answers.textColor}\nShape: ${answers.shape}\nShape Color: ${answers.shapeColor}`;

    function convertToSVG(data) {
        const lines = data.split('\n');
        const text = lines[0].split(': ')[1];
        const textColor = lines[1].split(': ')[1];
        const shape = lines[2].split(': ')[1];
        const shapeColor = lines[3].split(': ')[1];
    
        let svgContent = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;
    
        if (shapes[shape]) {
                 let svgShape = shapes[shape]
                            .replace('%SHAPE_COLOR%', `fill="${shapeColor}"`)
                            .replace('%TEXT_COLOR%', `fill="${textColor}"`);
            svgShape = svgShape.replace('%TEXT%', `<text x="150" y="100" fill="${textColor}">${text}</text>`);
            
            svgContent += svgShape;
        } else {
            console.error('Invalid shape specified');
        }
    
        svgContent += `</svg>`;
    
        return svgContent;
    }

    function writeSVGToFile(svgContent) {
        fs.writeFile('generatedLogo.svg', svgContent, (err) => {
            if (err) {
                console.error('Error writing SVG file:', err);
            } else {
                console.log('SVG file generated successfully: generatedLogo.svg');
            }
        });
    }

    const svgContent = convertToSVG(logoData);
    writeSVGToFile(svgContent);
});