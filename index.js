// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please enter the title of your project',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please enter a description of your project',
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Please provide installation instructions for your project if any',
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'Please provide information on the usage for your project',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please provide contribution guidelines for your project',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please provide test instructions for your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a License for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("README.md", data);
        })
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();