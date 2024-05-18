// Creates a shape class
class shape {
    constructor(text, textcolor, color){
        this.text = text;
        this.textcolor = textcolor;
        this.color = color;
    }
}

// Creates a prototype function to render the text
shape.prototype.textWriter = function(){
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">
        ${this.text}
    </text>`;
}

// Exports the shape class
module.exports = shape;