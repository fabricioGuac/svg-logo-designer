// Requires the parent class
const shape = require("./shape");

// Creates a circle class  as a child of the shape class
class circle extends shape {
    constructor( text, textcolor,color){
        super(text,textcolor, color);
    }    
    // Creates a function to render the logo with this shape 
    Render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />
    ${this.textWriter()}`;
    }
}

// Exports the circle class
module.exports = circle;