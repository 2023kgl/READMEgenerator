// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of the project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'NONE']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?',
    }, 
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(
        fileName , 
        data,
        err => err ? console.error(err) : console.log("Generating README"))
}


// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(data => {
        writeToFile("newREADME.md", generateMarkdown(data))
        } )
}

// Function call to initialize app
init();