// Require the shape class
const shape = require("../shape");

// A test to ensure the functionality of the textWriter function
describe('Shape',() => {
    it('Should return the desired text base', () => {
        const base = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
        SVG
    </text>`;
    const shapeInstance = new shape('SVG', 'white').textWriter(); 

    expect(shapeInstance).toEqual(base);
    });
});