// Requires the parent class
const shape = require("./shape");

// Creates a triangle class as a child of the shape class
class triangle extends shape {
    constructor( text, textcolor,color){
        super(text,textcolor,color);
    }
    // Overrides the parent's textWriter function
    textWriter(){
        return `<text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textcolor}">
        ${this.text}
    </text>`;
    }
    // Creates a function to render the logo with this shape 
    Render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>
    ${this.textWriter()}`;
    }
}

// Exports the triangle class
module.exports = triangle;