const shapes = require('./shapes.js');

function generateSVG(shapeType, text, textColor, color) {
    switch (shapeType.toLowerCase()) {
        case 'triangle':
            const triangleShape = new shapes.triangle(text, textColor, color);
            return triangleShape.generateSVG();
        case 'square':
            const squareShape = new shapes.square(text, textColor, color);
            return squareShape.generateSVG();
        case 'circle':
            const circleShape = new shapes.circle(text, textColor, color);
            return circleShape.generateSVG();
        default:
            return 'Invalid shape';
    }
}

module.exports = generateSVG;
