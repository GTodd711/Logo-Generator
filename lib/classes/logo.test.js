const generateSVG = require('../svg.js');

describe('generateSVG function', () => {
    it('should generate SVG for triangle shape', () => {
        const svg = generateSVG('triangle', 'Sample Text', 'Red', 'Blue');
        expect(svg).toContain('<polygon');
        expect(svg).toContain('<text');
        expect(svg).toContain('Sample Text');
        expect(svg).toContain('Red');
        expect(svg).toContain('Blue');
    });

    it('should generate SVG for square shape', () => {
        const svg = generateSVG('square', 'Sample Text', 'Green', '#FFA500');
        expect(svg).toContain('<rect');
        expect(svg).toContain('<text');
        expect(svg).toContain('Sample Text');
        expect(svg).toContain('Green');
        expect(svg).toContain('#FFA500');
    });

    it('should generate SVG for circle shape', () => {
        const svg = generateSVG('circle', 'Sample Text', 'Purple', 'Yellow');
        expect(svg).toContain('<circle');
        expect(svg).toContain('<text');
        expect(svg).toContain('Sample Text');
        expect(svg).toContain('Purple');
        expect(svg).toContain('Yellow');
    });

    it('should return "Invalid shape" for unknown shape', () => {
        const svg = generateSVG('invalid', 'Sample Text', 'Black', '#FFFFFF');
        expect(svg).toBe('Invalid shape');
    });
});
