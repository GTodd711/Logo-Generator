const inquirer = require('inquirer');

function colorInput(input) {
    // Check if the input is a valid color keyword or a hexadecimal number
    if (/^#[0-9A-F]{6}$/i.test(input) || ['Red', 'Blue', 'Green', 'Yellow', 'White', 'Black'].includes(input)) {
      return true; // Input is valid
    } else {
      return 'Please enter a valid color keyword or hexadecimal number (e.g., #RRGGBB)';
    }
  }
module.exports = colorInput;

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for logo.(only 3 characters or less)',
        validate: colorInput,
        validate: function(input) {
            if (input.length <= 3 ){
                return true;
            } else {
                return 'please enter a mximum of three characters';
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
});

const logoData = `Text: ${answers.text}\nText Color: ${answers.textColor}\nShape: ${answers.shape}\nShape Color: ${answers.shapeColor}`;

    // Write the selected inputs to a file
    fs.writeFile('generatedLogo.txt', logoData, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Selected inputs saved to generatedLogo.txt');
        }
    });