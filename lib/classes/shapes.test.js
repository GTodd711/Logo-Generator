const { shapes, triangle, square, circle } = require('../shapes.js');

// Test cases for the shapes class
describe('shapes class', () => {
    it('should create a shapes object', () => {
        const shape = new shapes('text', 'Red', 'square', 'Blue');
        expect(shape.text).toBe('text');
        expect(shape.textColor).toBe('Red');
        expect(shape.shape).toBe('square');
        expect(shape.color).toBe('Blue');
    });

    it('should generate SVG for shapes', () => {
        const shape = new shapes('text', 'Red', 'square', 'Blue');
        const svg = shape.generateSVG();
        // You can add more specific assertions based on the expected SVG content
        expect(svg).toContain('<svg');
    });
});

// Test cases for the triangle class
describe('triangle class', () => {
    it('should create a triangle object', () => {
        const shape = new triangle('text', 'Red', 'Blue');
        expect(shape.text).toBe('text');
        expect(shape.textColor).toBe('Red');
        expect(shape.shape).toBe('triangle');
        expect(shape.color).toBe('Blue');
    });

    it('should generate SVG for triangle', () => {
        const shape = new triangle('text', 'Red', 'Blue');
        const svg = shape.generateSVG();
        // You can add more specific assertions based on the expected SVG content
        expect(svg).toContain('<svg');
    });
});

// Test cases for the square class
describe('square class', () => {
    it('should create a square object', () => {
        const shape = new square('text', 'Red', 'Blue');
        expect(shape.text).toBe('text');
        expect(shape.textColor).toBe('Red');
        expect(shape.shape).toBe('square');
        expect(shape.color).toBe('Blue');
    });

    it('should generate SVG for square', () => {
        const shape = new square('text', 'Red', 'Blue');
        const svg = shape.generateSVG();
        // You can add more specific assertions based on the expected SVG content
        expect(svg).toContain('<svg');
    });
});

// Test cases for the circle class
describe('circle class', () => {
    it('should create a circle object', () => {
        const shape = new circle('text', 'Red', 'Blue');
        expect(shape.text).toBe('text');
        expect(shape.textColor).toBe('Red');
        expect(shape.shape).toBe('circle');
        expect(shape.color).toBe('Blue');
    });

    it('should generate SVG for circle', () => {
        const shape = new circle('text', 'Red', 'Blue');
        const svg = shape.generateSVG();
        // You can add more specific assertions based on the expected SVG content
        expect(svg).toContain('<svg');
    });
});
