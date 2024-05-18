// Require the circle class
const circle = require('../circle');
    
// A test to ensure the circle class renders the expected svg code
describe('Render', () => {
    it('Should geneare the correct svg code based on the input', () => {
            const idealCircle = `<circle cx="150" cy="100" r="80" fill="purple" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
        SVG
    </text>`;
    const realCircle = new circle('SVG', 'white', 'purple').Render();
    expect(realCircle).toEqual(idealCircle);
    });
});