const inquirer = require("inquirer");

const questions = [{
    type:"input",
    name:"text",
    message:"What three letters will the logo use?",
    validate:function(text){
        if(text.length > 3){
            return `text can't be longer than 3 characters`;
        }else return true;
    }
    },
    {type:"input",
    name:"textColor",
    message:"What text color would you like?"
    },
    {type:"list",
    name:"shape",
    choices:['circle', 'square', 'triangle'],
    message:"What shape would you like for the logo?"
    },
    {type:"input",
    name:"shapeColor",
    message:"What shape color would you like?"
    }
];

const prompter = () => {
    return inquirer
        .prompt(questions);
};

module.exports = prompter;