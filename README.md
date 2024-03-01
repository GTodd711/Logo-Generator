# Logo Generator
This is a simple logo generator tool built using Node.js. It allows you to generate logos with customizable text and shapes, letting you specify colors for both text and shape elements. The generated logos are outputted as SVG files.

## Installation
To use this logo generator, clone the repository to your machine and install all dependinces using npm i in the command line

## Usage
Once installed, you can run the logo generator using the following command node index.js The generator will prompt you to enter various parameters to customize your logo:Enter text for the logo, with a maximum of three characters. Choose a color for the text, either by entering a color keyword or a hexadecimal number. Select a shape for the logo from the available choices (Square, Triangle, Circle). Specify a color for the shape, similar to the text color input.

Once you've provided the necessary inputs, the generator will display the options you've chosen and generate an SVG logo based on those parameters. The generated SVG file will be saved in the `examples` directory as `logo.svg`.

## Example
Here's a quick example of how to generate a logo using this tool:
$ node index.js
? Enter text for logo (only 3 characters or less): GST
? Enter a color keyword or a hexadecimal number for the text color: Red
? Select a shape: Square
? Enter a color keyword or a hexadecimal number for the shape color: Blue
Logo generated with the following options:
Text: GST
Text Color: Red
Shape: Square
Shape Color: Blue
Generated logo.svg.
 
## Credits 
Gavin Todd

## License 
N/A

