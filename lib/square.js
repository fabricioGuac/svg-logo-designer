// Requires the parent class
const shape = require("./shape");

// Creates a square class class as a child of the shape class
class square extends shape {
    constructor( text, textcolor,color){
        super(text,textcolor,color);
    }
    // Creates a function to render the logo with this shape 
    Render(){
        return `<rect x="60" y="25"  width="180" height="150" fill="${this.color}" />
    ${this.textWriter()}`;
    }
}
// Exports the square class 
module.exports = square;