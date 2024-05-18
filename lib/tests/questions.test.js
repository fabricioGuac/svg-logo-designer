// Include packages needed for this tests
const inquirer = require('inquirer');
const questions = require('../questions');

// Mock the inquirer prompt function
jest.mock('inquirer', () => ({
    prompt: jest.fn(),
}));

describe('Questions', () =>{
    it('Should prompt the desired questions and returns the same answers', async () =>  {
        // Mock the responses
        const responses = {
            text: 'SVG',
            textColor: 'white',
            shape: 'circle',
            shapeColor: 'purple'
        } ;
        // Set the mock response to the mock inquirer
        inquirer.prompt.mockResolvedValue(responses);
        // Call the prompter function
        const prompt = await questions();
        // Check that the questions prompted are the desired ones
        expect(inquirer.prompt).toHaveBeenCalledWith(
            [{
                type:"input",
                name:"text",
                message:"What three letters will the logo use?",
                validate:expect.any(Function)
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
            ]
        );
        // Checks that the answers are the same
        expect(prompt).toEqual(responses);
    });
});