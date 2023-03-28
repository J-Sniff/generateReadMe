// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        Name: 'projectTitle',
        message: 'Please enter the title of your project',
    },
    {
        type: 'input',
        Name: 'projectDescription',
        message: 'Please enter a description of your project',
    },
    {
        type: 'input',
        Name: 'installationInstructions',
        message: 'Please provide installation instructions for your project if any',
    },
    {
        type: 'input',
        Name: 'usageInformation',
        message: 'Please provide information on the usage for your project',
    },
    {
        type: 'input',
        Name: 'contributionGuidelines',
        message: 'Please provide contribution guidelines for your project',
    },
    {
        type: 'input',
        Name: 'testInstructions',
        message: 'Please provide test instructions for your project',
    },
    {
        type: 'list',
        Name: 'license',
        message: 'Choose a License for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD']
    },
    {
        type: 'input',
        Name: 'githubUsername',
        message: 'Please enter your GitHub username',
    },
    {
        type: 'input',
        Name: 'email',
        message: 'Please enter your email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();