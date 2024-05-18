// Requires the triangle class
const triangle = require("../triangle");;

// Creates a test suit to ensure the triangle class functionality
describe('Triangle', () => {
    // A test to ensure the overriding of the shape's textwriter function
    describe('Textwriter', () => {
        it('Should override the textwriter', () => {
            const text = `<text x="150" y="150" font-size="50" text-anchor="middle" fill="white">
        SVG
    </text>`;
            const override = new triangle('SVG', 'white').textWriter();

            expect(override).toEqual(text);
        });
    });

    // A test to ensure triagle renders the expected svg code
    describe('Render', () => {
        it('Should geneare the correct svg code based on the input', () => {
            const idealTriang = `<polygon points="150, 18 244, 182 56, 182" fill="green"/>
    <text x="150" y="150" font-size="50" text-anchor="middle" fill="white">
        SVG
    </text>`;
            const realTriang = new triangle('SVG', 'white', 'green').Render();
            expect(realTriang).toEqual(idealTriang);
        });
    });
});