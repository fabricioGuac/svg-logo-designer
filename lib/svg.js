// Include packages needed for this application
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');
const fs = require('fs').promises;
const path = require('path');
const questions = require('./questions');

// Creates an object to map over the classes so the shape can be added dynamically
const shapes = {
    circle: Circle,
    triangle: Triangle,
    square: Square
};

// Creates an asynchronous function that utilizes async and await to handle promises and returns the svg logo code if no error occurs
const svg = async function (){
    try{
        const answers = await questions();  
        const shape = shapes[answers.shape];
        const logo = new shape(
            answers.text,
            answers.textColor,
            answers.shapeColor
        );
        const renderLogo =`<svg version="1.1" width="300" height="200"  xmlns="http://www.w3.org/2000/svg">
    ${logo.Render()}
</svg>`;
        await fs.writeFile(path.join(__dirname,'../examples/Logo.svg'),renderLogo);
        console.log('Generated logo.svg');
    } catch (err) {
        console.error(err);
    }
};

// Exports the svg function
module.exports = svg;