// Include packages needed for this tests
const svg = require('../svg');
const fs = require('fs').promises;
const path = require('path');


// Mocks the function to set the predefined answers
jest.mock('../questions', () => () => Promise.resolve({
    text: 'SVG',
    textColor: 'white',
    shape: 'circle',
    shapeColor: 'purple'
}));


    // A test suit to ensure the logos are generated properly
describe('Svg', () => {
    describe('Writefile test',() => {
        it('Should generate and write svg logo', async () => {
            // Mocks the writeFile function
            fs.writeFile = jest.fn();
            const expectedSvg =`<svg version="1.1" width="300" height="200"  xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="purple" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
        SVG
    </text>
</svg>`;
            await svg();
            expect(fs.writeFile).toHaveBeenCalledWith(
                path.join(__dirname,'..','..','examples','Logo.svg'),expectedSvg
            );
        });
    });
});