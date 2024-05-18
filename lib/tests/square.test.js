// Require the square class
const square = require('../square');
    
// A test to ensure the square class renders the expected svg code
describe('Render', () => {
    it('Should geneare the correct svg code based on the input', () => {
            const idealSquare = `<rect x="60" y="25"  width="180" height="150" fill="#5894c9" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
        SVG
    </text>`;
    const realSquare = new square('SVG', 'white', '#5894c9').Render();
    expect(realSquare).toEqual(idealSquare);
    });
});